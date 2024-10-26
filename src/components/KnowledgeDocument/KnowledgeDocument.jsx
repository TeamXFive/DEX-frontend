/* eslint-disable react/prop-types */
import '../../style/KnowledgeDocument/KnowledgeDocument.css'
import KnowledgeDocumentPopover from './KnowledgeDocumentPopover.jsx'

function KnowledgeDocument({ file, index, originFile, status }) {
    
    return (
        <li className={`knowledge-documents-item knowledge-documents-item-${status}`} key={index}>
            <span className={`document-name`}>{(originFile === "local") ? file.name : (file == null) ? "oi" : file.filename}</span>

            {(originFile === "local") ? (
                <span className={`document-status`}>{status}</span>
            ) : (
                <KnowledgeDocumentPopover file={file}></KnowledgeDocumentPopover>
            )}
        </li>
    );
}

export default KnowledgeDocument;