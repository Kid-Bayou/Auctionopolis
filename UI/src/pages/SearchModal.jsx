
function SearchModal({closeModal}) {
    return (
        <>
            <div className="search-modal-background">
                <div className="search-modal-container">
                    <h1 className="search-modal-input">Search</h1>
                    <button onClick={() => closeModal(false)}>X</button>
                    <input type="text" className="search-modal-input" />
                </div>
            </div>
        </>
    )
}

export default SearchModal