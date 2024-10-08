import React, { useState } from "react";
import "../Library/Library.css";
import bookIcon from "../assets/book-icon.png"
import plusIcon from "../assets/plus-icon.png"
import { ModalAdd } from "../components/ModalAdd/ModalAdd";
const Library = ( { addSong }) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const isOpenModalTrue = () => {
        setIsOpenModal(true)
    }

    const isCloseModalFalse = () => {
        setIsOpenModal(false)
    }
    
    return (
        <div className="library">
        <div className="libraryContent">
            <div className="libraryButton">
                <img src={bookIcon} alt="" />
                <span>Adicione</span>
            </div>
            <div className="plusIcon" onClick={isOpenModalTrue}>
            <img src={plusIcon} alt="" />
            </div>
            {isOpenModal && (
                <ModalAdd onClose={isCloseModalFalse} addSong={addSong}/>
            )

            }
        </div>
    </div>
    )
}


export default Library;