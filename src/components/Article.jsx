import React from 'react';

const Article = ( {title, date="January 1, 1970", preview, minutes} ) => {
    const addEmojis = () => {
        const roundNearest = minutes >= 30 ? 10 : 5
        const emoji = minutes >= 30 ? "🍱" : "☕️"

        const numEmojis = Math.round(minutes/roundNearest, 0)

        let emojis = ""

        for (let i=0; i<numEmojis; i++) {
            emojis += emoji;
        }

        return emojis
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {`${date}•${addEmojis()}${minutes} min read`}
            </small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
