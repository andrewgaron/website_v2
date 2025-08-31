import React, { useState } from 'react';

function Homepage() {

    // Quote functions

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);

    const getQuote = async () => {
        setLoading(true);
        try{
            const response = await fetch('/quotes.json');
            const data = await response.json();
            const random = data[Math.floor(Math.random() * data.length)];
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