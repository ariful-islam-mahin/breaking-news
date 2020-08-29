import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

    const [news, setNews] = useState([]);

    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=76ee43e1e8634f4094a3bf04fc45b5a3';
        fetch(url)
        .then(res => res.json())
        .then(data =>setNews(data.articles))
    }, [])
    return (
        <div>
            
            {
                news.length >0 && news.map(article => <News article ={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;