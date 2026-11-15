import './App.css'


import  ProductCard  from './components/ProductCard.jsx';
import { useState } from "react";
import Tegel from "./components/Tegels.jsx";
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
                 <ProductCard
                              span="Best seller"
                              image= "src/assets/bag_1.png"
                              description= "the handy bag"
                              price={ 250}

                 />
                <ProductCard
                             span="Best seller"
                             image= "src/assets/bag_2.png"
                             description= "the stylish bag"
                             price= { 300}
                    />
                <ProductCard
                             span="Best seller"
                             image= "src/assets/bag_3.png"
                             description= "the simple bag"
                             price={  300}
                    />
                <ProductCard
                             span="Best seller"
                             image= "src/assets/bag_4.png"
                             description= "the trendy bag"
                             price={ 150}
                        />

            </main>
            <footer>
                <article className="tegel-container">
                    <Tegel
                        description="the brand"
                        content= "orem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />

                    <Tegel
                        image="src/assets/brand.png"
                        />
                    <Tegel
                        image="src/assets/our_story.png"
                        />
                    <Tegel
                        description="our story"
                        content="orem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                </article>
            </footer>











        </>
    );


}


























export default App