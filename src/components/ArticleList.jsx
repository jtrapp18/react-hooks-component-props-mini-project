import React from 'react';
import Article from './Article';

const ArticleList = ( {posts} ) => {

    return (
        <main>
            {posts.map(post => {
                const { id, title, date, preview, minutes } = post

                return <Article 
                    key = {id}
                    title = {title}
                    date = {date}
                    preview = {preview}
                    minutes = {minutes}
                />
            })}
        </main>
    );
}

export default ArticleList;
