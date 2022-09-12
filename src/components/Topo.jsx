import React from "react";
import './Topo.css'

export function Topo() {
    return (
        <div className="header">
            <div className="box">
                <div className="textbox">
                    <p>Codelândia</p>
                    <p>Blog</p>
                </div>

                <input className="input"
                    type="text"
                    placeholder="Pesquisar no blog"
                    id="placeholder-text" />
            </div>
        </div>
    )
}