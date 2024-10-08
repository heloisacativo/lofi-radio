import React, { useState } from "react";
import "../Footer/Footer.css";
import imageFooter from "../assets/lo-fi-footer-image.gif";
import { ModalAdd } from "../components/ModalAdd/ModalAdd";


const Footer = ({ addSong }) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const isOpenModalTrue = () => {
        setIsOpenModal(true)
    }

    const isCloseModalFalse = () => {
        setIsOpenModal(false)
    }

    return (
        <footer className="footerContainer">
        <div className="text">
        <img src={imageFooter} alt="Imagem Footer"/>
        </div>
        <div className="button">
            <button onClick={isOpenModalTrue} type="button">Adicione música</button>
        </div>
        {isOpenModal && (
        <ModalAdd onClose={isCloseModalFalse} addSong={addSong}/>
    )
    }
    </footer>
    
)
}


export default Footer;