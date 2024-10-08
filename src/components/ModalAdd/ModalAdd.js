import axios from "axios";
import { useState } from "react"
import "./ModalAdd.css";

export const ModalAdd = ({ onClose, addSong }) => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:3000/songs", {
            title,
            url
        })
        

        setTitle('');
        setUrl('');
        onClose();
    }


    return (
        <div className="modalAddContainer">
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Título de Música"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />

        <input
        type="url"
        placeholder="Url do Youtube"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        />
        
        <div className="buttonContainerFormAddSong">
        <button className="buttonAddSong" type="submit">Adicionar Música</button>
        <button className="buttonCloseAddSong" onClick={onClose}>Fechar</button>
        </div>
        
        </form>
        </div>
    )
}