/* eslint-disable react/prop-types */
import '../../style/KnowledgeDocument/KnowledgeDocument.css'

function KnowledgeDocument({ file, index, originFile }) {
    return (
        <li className={`knowledge-documents-item`} key={index}>
            <span>{(originFile === "local") ? file.name : file.filename}</span>

            {(originFile === "local") ? (
                <span>Uploading...</span>
            ) : (
                <button>X</button>            
            )}
        </li>
    );
}

export default KnowledgeDocument;