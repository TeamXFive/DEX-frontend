import '../../style/Knowledge/Knowledge.css';
import {useEffect, useRef, useState} from "react";
import useKnowledgeContext from "../../hook/Knowledge/useKnowledgeContext.jsx";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext.jsx";
import KnowledgeDocument from "../../components/KnowledgeDocument/KnowledgeDocument.jsx";

function Knowledge() {

    const {
        setFileAlertName,
        setIsFileUploadErrorAlertVisible,
        setFileUploadErrorMessage,
        setIsFileUploadSuccessAlertVisible,
        setFileUploadSuccessMessage,
        files, setFiles
    } = useKnowledgeContext();
    
    const {
        authedUser
    } = useAuthenticationContext();
    
    const [filesUploading, setFilesUploading] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    // Allowed file types and max size (5MB for this example)
    const allowedFileTypes = [
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.wordprocessing",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxFileSize = 512 * 1024 * 1024; // 512MB

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files); // Convert FileList to array
        validateAndSetFiles(droppedFiles);
        e.dataTransfer.clearData();
    };
    
    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files); // Convert FileList to array
        validateAndSetFiles(selectedFiles);
        e.target.value = '';
    };
    
    const validateAndSetFiles = (incomingFiles) => {
        incomingFiles.forEach(async (file) => {
            
            if (!allowedFileTypes.includes(file.type)) {
                setFileAlertName(file.name);
                setIsFileUploadErrorAlertVisible(true);
                setFileUploadErrorMessage(`${file.name} não é um arquivo suportado.`);
            }

            if (file.size > maxFileSize) {
                setFileAlertName(file.name);
                setIsFileUploadErrorAlertVisible(true);
                setFileUploadErrorMessage(`${file.name} excede o limite de 512 MB.`);
            }
            
            if (allowedFileTypes.includes(file.type) && file.size <= maxFileSize) {
                setFileAlertName(file.name);
                setIsFileUploadSuccessAlertVisible(true);
                setFileUploadSuccessMessage(`${file.name} está sendo enviado para a nuvem.`);

                setFilesUploading(prevFilesUploading => [...prevFilesUploading, {"file": file, "status": "uploading"}]);

                const formData = new FormData();
                formData.append('file', file);
                
                try {
                    
                    // const response = await fetch('http://localhost:3000/api/upload', {
                    const response = await fetch('https://dex-backend-vercel-steel.vercel.app/api/upload', {
                        method: 'POST',
                        body: formData
                    });

                    if (!response.ok) {
                        setFileAlertName(file.name);
                        setIsFileUploadErrorAlertVisible(true);
                        setFileUploadErrorMessage(`Não foi possível realizar o upload de ${file.name}.`);

                        setFilesUploading(prevFilesUploading => prevFilesUploading.map(f => f.file === file ? {...f, status: "error"} : f));
                        
                        setIsFileUploadSuccessAlertVisible(false)
                        
                        throw new Error(`HTTP error! status: ${response.status}`);
                    } else {
                        setFileAlertName(file.name);
                        setIsFileUploadSuccessAlertVisible(true);
                        setFileUploadSuccessMessage(`${file.name} foi enviado com sucesso.`);

                        setFilesUploading(prevFilesUploading => prevFilesUploading.map(f => f.file === file ? {...f, status: "success"} : f));
                    }

                    await getFiles();
                } catch (error) {
                    setFileAlertName(file.name);
                    setIsFileUploadErrorAlertVisible(true);
                    setFileUploadErrorMessage(`Não foi possível fazer o upload de ${file.name}.`);

                    setFilesUploading(prevFilesUploading => prevFilesUploading.map(f => f.file === file ? {...f, status: "error"} : f));
                    console.error('Error uploading file:', error);
                }

                setTimeout(() => {
                    setFilesUploading((prevFilesUploading) => prevFilesUploading.filter((fileUploading) => fileUploading.file !== file));
                }, 5000);
            }
        });
    };

    const getFiles = async () => {
        try {
            const response = await fetch('https://dex-backend-vercel-steel.vercel.app/api/file_retrieval', {
            // const response = await fetch('http://localhost:3000/api/file_retrieval', {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setFiles(result)
        } catch (error) {
            console.error('Error retrieving files:', error);
        }
    }

    useEffect(() => {
        if (location.pathname === "/knowledge" && authedUser) {
            getFiles().then(() => {});
        }
    }, [location.pathname]);

    // Handle button click to open file input dialog
    const openFileDialog = () => {
        fileInputRef.current.click();
    };
    
    return (
        <>
            <article className={`knowledge-container`}>
                <section className={`knowledge-left-side`}>
                    <div className={`knowledge-upload-container`}>
                        <div className={`knowledge-upload-description`}>
                            <h1>UPLOAD DOCUMENTS</h1>
                            
                            <span>You can create a new document by uploading an existing document</span>
                        </div>

                        <div className={`knowledge-upload-drag-drop-container`}>
                            <div
                                className={`knowledge-dropzone ${isDragging ? 'dragging' : ''}`}
                                onDragEnter={handleDragEnter}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onClick={openFileDialog}
                            >
                                <p>{isDragging ? 'Drop your files here' : 'Drag and drop files here or click to select'}</p>
                                <input
                                    type="file"
                                    multiple
                                    ref={fileInputRef}
                                    onChange={handleFileSelect}
                                    style={{display: 'none'}}
                                    accept=".txt, .doc, .docx, .xls, .xlsx"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`knowledge-documents-uploading`}>
                        <div className={`knowledge-documents-uploading-header`}>
                            <span>These are the files that are currently being uploaded.</span>
                        </div>

                        <ul className={`knowledge-documents-uploading-list`}>
                            {filesUploading.length === 0 && (
                                <span
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100%',
                                    }}
                                >No files are being uploaded.</span>
                            )}
                            
                            {filesUploading.map((fileObj, index) => (
                                <KnowledgeDocument file={fileObj.file} key={index} originFile={"local"} status={fileObj.status}/>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className={`knowledge-documents-container`}>
                    <div className={`knowledge-documents-container-header`}>
                        <h1>STORED DOCUMENTS</h1>

                        <span>These are the files you have uploaded.</span>
                    </div>

                    <div className={`knowledge-documents-container-content`}>
                    <div className={`knowledge-documents-retrieved`}>
                            {files.length === 0 && (
                                <span
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100%',
                                    }}
                                >No files uploaded yet.</span>
                            )}
                            
                            <ul className={`knowledge-documents-retrieved-list`}>
                                {files.map((file, index) => (
                                    <KnowledgeDocument file={file} key={index} originFile={"openai"} status={"oi"} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </>
    )
}

export default Knowledge;
