import React, {useState} from 'react';
import '../styles/greeting.css';
import {BookModel} from '../models';
import {BooklistDummy} from '../dummys'
import faker from 'faker';

const booklist = BooklistDummy();

const Book = (props:BookModel) => {
    const clickHandler = (e:any) =>{
        console.log(e);
        alert("hello world");
    };
    
    const clickHandlerComplex = (author:string) =>{
        alert(author);
    }
    return(
        <article className="book">
            <img src={props.image} alt=''></img>
            <h1>{props.title}</h1>
            <h2 style={{
                color: '#617d98',
                fontSize: '0.75rem',
                marginTop: '0.25rem'}}>{props.author}</h2>
            <button type="button" onClick={clickHandler}>example</button>
            <button type="button" onClick={() => clickHandlerComplex(props.author)}>obtener nombre</button>
        </article>
    );
};

export default function Greeting() : JSX.Element {
    const [books, setBooks] = useState(booklist)
    const clearHandler = () =>{
        setBooks([]);
    }
    return (
        <React.Fragment>
            <button type="button" onClick={clearHandler}>Clear booklist</button>
            <section className="booklist">
                {books.map((book) => <Book key={book.id} {...book} />)}
            </section>
        </React.Fragment>
    );
}