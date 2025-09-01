import React, { useState } from 'react';
import quotes from './quotes';

function Homepage() {

    // Quote functions

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);

    const getQuote = () => {
        setLoading(true);
        try{
            const random = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(random.text);
            setAuthor(random.author);
        }
        catch (error){
            setQuote("I'm sorry, I'm not able to inspire you right now :(");
            setAuthor("");
        }
        setLoading(false);
    }

    // JSX for the homepage

    return(
        <div className="homepage">
        <button className="homepage-button" onClick = {getQuote}>
            {loading ? 'preparing some inspiration' : 'Here\'s some inspiration'}
        </button>
        {quote && (
            <div className="homepage-quote-div">
                <p className="homepage-quote-text">"{quote}"</p>
                <p className="homepage-quote-author">- {author}</p>
            </div>
        )}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    )
}
export default Homepage;