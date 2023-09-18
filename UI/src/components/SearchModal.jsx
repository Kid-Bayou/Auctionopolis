import cancel from "../assets/icons/cancel.png"

function SearchModal({closeModal}) {
    return (
        <>
            <div className="search-modal-background">
                <div className="search-modal-container">
                    <img src={cancel} onClick={() => closeModal(false)} className="search-modal-button" />
                    <h1 className="search-modal-header">Search</h1>
                    <input type="text" className="search-modal-input" />
                </div>
            </div>
        </>
    )
}

export default SearchModal