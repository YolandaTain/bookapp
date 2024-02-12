import React from 'react';
import '../assets/css/book.css';
import Boton from './boton';

export default function Book({ book, mensaje }) {
    /*
    const books = [
        {
            title: 'El nombre del viento',
            author: 'Patrick Rothfuss',
            genre: 'Fantasía',
            pages: 662,
            image: require('../assets/img/libro1.jpg')
        },
        {
            title: 'Cien años de soledad',
            author: 'Gabriel García Márquez',
            genre: 'Realismo mágico',
            pages: 432,
            image: require('../assets/img/libro2.jpg')
        },
        {
            title: '1984',
            author: 'George Orwell',
            genre: 'Distopía',
            pages: 328,
            image: require('../assets/img/libro3.jpg')
        },
        {
            title: 'Orgullo y prejuicio',
            author: 'Jane Austen',
            genre: 'Romance',
            pages: 416,
            image: require('../assets/img/libro4.jpg')
        },
        {
            title: 'El señor de los anillos: La comunidad del anillo',
            author: 'J.R.R. Tolkien',
            genre: 'Fantasía',
            pages: 576,
            image: require('../assets/img/libro5.jpg')
        },
        {
            title: 'Crónica de una muerte anunciada',
            author: 'Gabriel García Márquez',
            genre: 'Realismo mágico',
            pages: 120,
            image: require('../assets/img/libro6.jpg')
        }
    ]
    */

    return (

        <div className='bookStyle'>
            <img
                src={book.imagen}
                className="book"
                alt="Book"
                width={250}
                height={350}
            />
            <h2>{book.title}</h2>
            <p><strong>Author: </strong>{book.author}</p>
            <p><strong>Genre: </strong>{book.genre}</p>
            <p><strong>Pages: </strong>{book.pages}</p>
            <div className="containerBotones">
                {
                    book.disponible
                        ? <Boton estilos="disponibleBoton" name="Reservar" mensaje="Reserva realizada" />
                        : <Boton estilos="avisarBoton" name="Avisar" mensaje="Se le avisará cuando el libro vuelva a estar disponible" />
                }
            </div>

        </div>

    )
}