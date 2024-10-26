/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import '../../style/KnowledgeDocument/KnowledgeDocumentPopover.css';
import useKnowledgeContext from "../../hook/Knowledge/useKnowledgeContext.jsx";

function KnowledgeDocumentPopover ({ file }) {

    const {
        setFileAlertName,
        setIsDocumentErrorAlertVisible,
        setDocumentErrorMessage,
        setIsDocumentSuccessAlertVisible,
        setDocumentSuccessMessage,
        files, setFiles
    } = useKnowledgeContext();

    const [isOpen, setIsOpen] = useState(false);
    const [display, setDisplay] = useState("inline-block");
    const popoverRef = useRef(null);

    const togglePopover = () => {
        setIsOpen(prevState => !prevState);
    };

    // Close the popover if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleFileDeletion = async () => {

        setFileAlertName(file.filename);
        setIsDocumentSuccessAlertVisible(true);
        setDocumentSuccessMessage(`${file.filename} está sendo deletado.`);

        setDisplay("none");
        
        setFiles(prevFile => prevFile.map(f => f.id === file.id ? {...f, status: "deleting"} : f));
        
        try {
            setIsOpen(false);
            
            //const response = await fetch('https://dex-backend-vercel-steel.vercel.app/api/file_deletion', {
            const response = await fetch(`http://localhost:3000/api/file_deletion/${file.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                setFileAlertName(file.filename);
                setIsDocumentErrorAlertVisible(true);
                setDocumentErrorMessage(`Não foi possível realizar a exclusão de ${file.filename}.`);
                
                setFiles(prevFile => prevFile.map(f => f.id === file.id ? {...f, status: "error"} : f));
                
                setDisplay("inline-block");

                setTimeout(() => {
                    setFiles(prevFile => prevFile.map(f => f.id === file.id ? {...f, status: "normal"} : f));
                }, 2000)
                
                setIsDocumentSuccessAlertVisible(false);
                
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                setFileAlertName(file.filename);
                setIsDocumentSuccessAlertVisible(true);
                setDocumentSuccessMessage(`${file.filename} foi deletado com sucesso.`);
            
                setFiles(prevFile => prevFile.map(f => f.id === file.id ? {...f, status: "success"} : f));
                
                setDisplay("none");
                
                setTimeout(() => {
                    setFiles(files.filter(f => f.id !== file.id));
                    setDisplay("inline-block");
                }, 2500)
                
            }

        } catch (error) {
            setFileAlertName(file.filename);
            setIsDocumentErrorAlertVisible(true);
            setDocumentErrorMessage(`Não foi possível fazer a deleção de ${file.filename}.`);
            
            setFiles(prevFile => prevFile.map(f => f.id === file.id ? {...f, status: "error"} : f));
            
            setDisplay("inline-block");

            setTimeout(() => {
                setFiles(prevFile => prevFile.map(f => f.id === file.id ? {...f, status: "normal"} : f));
            }, 2000)

            setIsDocumentSuccessAlertVisible(false);

            console.error('Error retrieving files:', error);
        }
    }

    return (
        <div style={{position: 'relative', display: display}}>
            {/* Button to toggle the popover */}
            <button className={`knowledge-document-popover-btn`} onClick={togglePopover}>
                <i className="bi bi-three-dots-vertical"></i>
            </button>

            {/* Popover content */}
            {isOpen && (
                <div className={`knowledge-document-popover`} ref={popoverRef}>
                    <ul>
                        <li onClick={handleFileDeletion}>Delete</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default KnowledgeDocumentPopover;
