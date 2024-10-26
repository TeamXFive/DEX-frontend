/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import '../../style/KnowledgeDocument/KnowledgeDocumentPopover.css';
import useKnowledgeContext from "../../hook/Knowledge/useKnowledgeContext.jsx";

function KnowledgeDocumentPopover ({ file }) {

    const {
        files, setFiles
    } = useKnowledgeContext();
    
    const [isOpen, setIsOpen] = useState(false);
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
        try {
            //const response = await fetch('https://dex-backend-vercel-steel.vercel.app/api/file_deletion', {
            const response = await fetch(`http://localhost:3000/api/file_deletion/${file.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            setFiles(files.filter(f => f.id !== file.id));

        } catch (error) {
            console.error('Error retrieving files:', error);
        }
    }

    return (
        <div style={{position: 'relative', display: 'inline-block'}}>
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
};

export default KnowledgeDocumentPopover;
