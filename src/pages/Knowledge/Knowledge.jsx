import '../../style/Knowledge/Knowledge.css';
import {useRef, useState} from "react";

function Knowledge() {

    const [files, setFiles] = useState([]); // State to hold selected valid files
    const [errors, setErrors] = useState([]); // State to hold validation error messages
    const [isDragging, setIsDragging] = useState(false); // State for drag status
    const fileInputRef = useRef(null); // Ref to access file input element

    // Allowed file types and max size (5MB for this example)
    const allowedFileTypes = ['text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    const maxFileSize = 5 * 1024 * 1024; // 5MB

    // Handle drag enter
    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    // Handle drag leave
    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    // Handle drag over
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    // Handle drop event
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files); // Convert FileList to array
        validateAndSetFiles(droppedFiles);
    };

    // Handle file input change (for manual selection)
    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files); // Convert FileList to array
        validateAndSetFiles(selectedFiles);
    };

    // File validation function
    const validateAndSetFiles = (incomingFiles) => {
        const validFiles = [];
        const errorMessages = [];

        incomingFiles.forEach((file) => {
            // Validate file type
            if (!allowedFileTypes.includes(file.type)) {
                errorMessages.push(`${file.name} is not a supported file type.`);
            }

            // Validate file size
            if (file.size > maxFileSize) {
                errorMessages.push(`${file.name} exceeds the 5MB size limit.`);
            }

            // Add to valid files if it passes validation
            if (allowedFileTypes.includes(file.type) && file.size <= maxFileSize) {
                validFiles.push(file);
            }
        });

        setFiles(validFiles); // Set only valid files
        setErrors(errorMessages); // Set error messages if any
    };

    // Handle button click to open file input dialog
    const openFileDialog = () => {
        fileInputRef.current.click();
    };

    // {/* Error Display */}
    // {errors.length > 0 && (
    //     <div style={{ color: 'red', marginTop: '10px' }}>
    //         <h4>Error(s):</h4>
    //         <ul>
    //             {errors.map((error, index) => (
    //                 <li key={index}>{error}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )}
    //
    // {/* File List Display */}
    // {files.length > 0 && (
    //     <div>
    //         <h4>Files ready for upload:</h4>
    //         <ul>
    //             {files.map((file, index) => (
    //                 <li key={index}>{file.name}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )}
    
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
                            />
                        </div>
                    </div>
                </section>
                
                <section className={`knowledge-documents`}>
                    <div>Stored Documents</div>
                    <ul>
                        <li>Document 1</li>
                        <li>Document 2</li>
                        <li>Document 3</li>
                    </ul>
                </section>
            </article>
        </>
    )
}

export default Knowledge;