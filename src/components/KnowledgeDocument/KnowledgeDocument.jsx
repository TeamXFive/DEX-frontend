/* eslint-disable react/prop-types */
import '../../style/KnowledgeDocument/KnowledgeDocument.css'

function KnowledgeDocument({ file, index, originFile, status }) {
    return (
        <li className={`knowledge-documents-item knowledge-documents-item-${status}`} key={index}>
            <span className={`document-name`}>{(originFile === "local") ? file.name : file.filename}</span>

            {(originFile === "local") ? (
                <span className={`document-status`}>{status}</span>
            ) : (
                <button>X</button>            
            )}
        </li>
    );
}

export default KnowledgeDocument;