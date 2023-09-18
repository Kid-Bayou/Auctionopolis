import cancel from "../assets/icons/cancel.png"

function MenuModal({closeModal}) {
    return (
        <>
            <div className="menu-modal-background">
                <div className="menu-modal-container">
                    <img src={cancel} onClick={() => closeModal(false)} className="menu-modal-button" />
                    <h1 className="menu-modal-header">Menu</h1>
                </div>
            </div>
        </>
    )
}

export default MenuModal