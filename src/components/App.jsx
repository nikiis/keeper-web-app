import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import notes from "../notes";

function App(){
    return (
        <div>
            <Header/>
            <Footer/>
            {notes.map(note => <Note key={note.id} title={note.title} content={note.content}/>)}
        </div>
    );
}

export default App;