import React from "react";
import images from "../assets/img/logo.jpg";
import '../assets/css/header.css';

export default function Header() {
    const header = {
        title: 'Library Star',
        theme: {
            color: 'black',
            backgroundColor: 'white',
            border: '1px solid black',

        }
    };

    return (
        <div className="headerStyle" style={header.theme}>
            <div>
                <img
                    className="library"
                    src={images}
                    alt="book"
                />

            </div>
            <div className="titulo">
                <h2>{header.title}</h2>
            </div>

        </div>

    )
}