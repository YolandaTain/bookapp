import React from "react";
import '../assets/css/library.css';
import Book from "./book";
import { useState, useEffect } from 'react';

export default function Library() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:3030/books')
            .then((response) => {
                return response.json()
            })
            .then((books) => {
                setBooks(books)
            })
    }, [])

    const library = {
        title: 'Library Star',
    };

    return (
        <>
            <div className="libraryStyle" style={library.theme}>
                <h1>Welcome to your {library.title}</h1>
            </div>
            <div className='container'>

                {

                    books.map((boo, index) => {
                        return (
                            <Book mensaje="Hola" book={boo} key={index}></Book>

                        )
                    })
                }
            </div>
        </>

    )
}