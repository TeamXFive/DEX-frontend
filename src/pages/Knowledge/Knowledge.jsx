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
    };
    
    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files); // Convert FileList to array
        validateAndSetFiles(selectedFiles);
    };
    
    const validateAndSetFiles = (incomingFiles) => {
        incomingFiles.forEach(async (file) => {
            // Validate file type
            if (!allowedFileTypes.includes(file.type)) {
                setFileAlertName(file.name);
                setIsFileUploadErrorAlertVisible(true);
                setFileUploadErrorMessage(`${file.name} is not a supported file type.`);
            }

            // Validate file size
            if (file.size > maxFileSize) {
                setFileAlertName(file.name);
                setIsFileUploadErrorAlertVisible(true);
                setFileUploadErrorMessage(`${file.name} exceeds the 5MB size limit.`);
            }

            // Add to valid files if it passes validation
            if (allowedFileTypes.includes(file.type) && file.size <= maxFileSize) {
                setFileAlertName(file.name);
                setIsFileUploadSuccessAlertVisible(true);
                setFileUploadSuccessMessage(`${file.name} is ready for upload.`);

                const formData = new FormData();
                formData.append('file', file);
                
                try {
                    const response = await fetch('http://localhost:3000/upload', {
                        method: 'POST',
                        body: formData
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    await getFiles();
                } catch (error) {
                    console.error('Error uploading file:', error);
                }
            }
        });
    };

    const getFiles = async () => {
        try {
            const response = await fetch('http://localhost:3000/file_retrieval', {
                method: 'POST'
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
                <section className={`knowledge-header`}>
                    <div className={`knowledge-header-description`}>
                        <h1>CREATE DOCUMENTS</h1>
                        <span>You can create a new document by uploading an existing document</span>
                    </div>
                    
                    <div className={`knowledge-drag-drop-container`}>
                        <div
                            className={`knowledge-dropzone ${isDragging ? 'dragging' : ''}`}
                            onDragEnter={handleDragEnter}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={openFileDialog}
                            style={{
                                border: '2px dashed #aaa',
                                borderRadius: '8px',
                                padding: '20px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'border-color 0.3s',
                            }}
                        >
                            <p>{isDragging ? 'Drop your files here' : 'Drag and drop files here or click to select'}</p>
                            <input
                                type="file"
                                multiple
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                                style={{ display: 'none' }}
                                accept=".txt, .doc, .docx, .xls, .xlsx"
                            />
                        </div>
                    </div>
                </section>
                
                <section className={`knowledge-documents`}>
                    <div className={`knowledge-documents-header`}>
                        <h1>Stored Documents</h1>
                        <span>These imports will appear as stored after they are uploaded</span>
                    </div>
                    
                    <div className={`knowledge-documents-list-container`}>
                        <ul className={`knowledge-documents-list`}>
                            {files.map((file, index) => (
                                <KnowledgeDocument file={file} key={index} />
                            ))}
                        </ul>
                    </div>
                </section>
            </article>
        </>
    )
}

export default Knowledge;