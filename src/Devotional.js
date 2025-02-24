import React from 'react';

const Devotional = ({ devotional }) => {
    return (
        <div className="devotional">
            <h2>{devotional.title}</h2>
            <p><strong>Date:</strong> {devotional.date}</p>
            <p><strong>Author:</strong> {devotional.author}</p>
            <aside>
                📖 <strong>Key Scripture: {devotional.keyScripture}</strong>
                <br />
                <em>{devotional.scriptureContent}</em>
            </aside>
            {devotional.content.map((section, index) => (
                <div key={index}>
                    <h3>{section.heading}</h3>
                    {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Devotional;