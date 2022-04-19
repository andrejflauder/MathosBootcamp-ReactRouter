import React from "react";
import './App.css';
 
export default function Action() {
    const [show, setShow] = React.useState();
    return (
        <div className="App">
            <button className="add" onClick={() => setShow(true)}>
                Show
            </button>
            <button className="remove" onClick={() => setShow(false)}>
                Hide
            </button>
            <button className="toggle" onClick={() => setShow(!show)}>
                Toggle
            </button>
            <nav className={`nav ${show ? "show" : ""}`}>Navigation menu</nav>
        </div>
    );
}
