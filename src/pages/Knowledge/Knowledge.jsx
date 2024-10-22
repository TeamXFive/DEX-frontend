import '../../style/Knowledge/Knowledge.css';

function Knowledge() {
    return (
        <>
            <article className={`knowledge-container`}>
                <section className={`knowledge-header`}>
                    <div className={`knowledge-header-description`}>
                        <h1>CREATE DOCUMENT</h1>
                        <span>To create document, drop it here &gt;</span>
                    </div>
                    <div className={`knowledge-drag-drop-container`}>Create Document</div>
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