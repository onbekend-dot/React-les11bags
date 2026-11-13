import './App.css'



import { useState } from "react";
function App() {


    const [text, setText] = useState('');
    const [resultaat, setResultaat] = useState('');




        function handleClick() {
       if (text === 'collection') {
            setResultaat('collection');
        } else if (text === 'bags') {
            setResultaat('shop all bags');
       } else if (text === '') {
            setResultaat('no result');
        } else {
            setResultaat('Geen geldig product');
        }
     }


    return (
        <>
            <h1>Handbags & Purses</h1>


            <label htmlFor="SearchField">
                Vul een trefwoord in
            </label>

            <input
                id="SearchField"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="button" onClick={handleClick}>
                Verzenden
            </button>

            <p>{resultaat}< /p>


            <nav>
                <ul>

                    <li>
                        <button
                        className="nav-button"
                        type="button"
                        onClick={() => handleClick('to the collection')}
                    >
                        <span>to the collection</span>
                        </button>
                    </li>

                    <li>
                        <button
                        className="nav-button"
                        type="button"
                        onClick={() => handleClick('shop all bags')}
                    >
                        <span>shop all bags</span>
                    </button>
                    </li>
                    <li>
                        <button
                        className="nav-button"
                        type="button"
                        onClick={() => handleClick('pre-orders')}
                    >
                        <span>pre-orders</span>
                            </button>

                    </li>
                </ul>
            </nav>

            <main className="main">
               <article className="cards">
                <div className="card">
                    <span>Best seller</span>
                    <img src={"src/assets/bag_1.png"} alt="bag"/>
                    <h3>the handy bag</h3>
                    <h4>€400,-</h4>

                </div>
                   <div className="card">
                    <span h3>Best seller</span>
                    <img src={"src/assets/bag_2.png"} alt="bag"/>
                       <h3>the stylish bag</h3>
                       <h4>€250,-</h4>

                </div>
                   <div className="card">
                    <span>Best seller</span>
                    <img src={"src/assets/bag_3.png"} alt="bag"/>
                       <h3>the simple bag</h3>
                       <h4>€300,-</h4>

                </div>
                <card className="the trendy bag">
                    <span>Best seller</span>
                    <img src={"src/assets/bag_4.png"} alt="bag"/>
                    <h3>the trendy bag</h3>
                    <h4>€150,-</h4>
                </card>
               </article>
            </main>



        </>
    );


}


























export default App