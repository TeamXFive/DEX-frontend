/* eslint-disable react/prop-types */
import '../../style/KnowledgeDocument/KnowledgeDocument.css'

function KnowledgeDocument({ file, index }) {
    return (
        <li className={`knowledge-documents-item`} key={index}>
            <span>{file.filename}</span>
            
            <button>X</button>            
        </li>
    );
}

export default KnowledgeDocument;