import React from "react";
import "../Library/Library.css";
import bookIcon from "../assets/book-icon.png"
import plusIcon from "../assets/plus-icon.png"
import "./Media-query.css";
const Library = () => {
    return (
        <div className="library">
        <div className="library__content">
            <div className="library__button">
                <img src={bookIcon} alt="" />
                <span>Sua biblioteca</span>
            </div>
            <div className="plus_icon">
            <img src={plusIcon} alt="" />
            </div>
        </div>

        <section className="section-playlist">
            <div className="section-playlist__content">
                <span className="text title">Crie sua primeira playlist</span>
                <button className="section-playlist__button">
                    <span>Criar playlist</span>
                </button>
            </div>
        </section>
    </div>
    )
}


export default Library;