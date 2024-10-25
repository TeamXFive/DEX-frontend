import { useState, useRef, useEffect } from 'react';
import '../../style/KnowledgeDocument/KnowledgeDocumentPopover.css';

const KnowledgeDocumentPopover = () => {
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

    return (
        <div style={{position: 'relative', display: 'inline-block'}}>
            {/* Button to toggle the popover */}
            <button className={`knowledge-document-popover-btn`} onClick={togglePopover}>
                <i className="bi bi-three-dots-vertical"></i>
            </button>

            {/* Popover content */}
            {isOpen && (
                <div className={`knowledge-document-popover`} ref={popoverRef}>
                    <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
                        <li>Delete</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default KnowledgeDocumentPopover;
