import React from "react";
import '../assets/css/library.css';

export default function Library() {
    const library = {
        title: 'Library Star',
    };

    return (
        <div className="libraryStyle" style={library.theme}>
            <h1>Welcome to your {library.title}</h1>
        </div>

    )
}