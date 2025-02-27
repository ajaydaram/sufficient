import React, { useState, useEffect } from 'react';
import Devotional from './Devotional';
import devotionalsData from './devotionals.json';

const JournalEntry = () => {
    const [currentDay, setCurrentDay] = useState(1);
    const [devotionals, setDevotionals] = useState([]);

    useEffect(() => {
        setDevotionals(devotionalsData);
    }, []);

    const nextDevotional = () => {
        setCurrentDay((prevDay) => (prevDay < 31 ? prevDay + 1 : 1));
    };

    const prevDevotional = () => {
        setCurrentDay((prevDay) => (prevDay > 1 ? prevDay - 1 : 31));
    };

    const currentDevotional = devotionals.find((d) => d.day === currentDay);

    const progress = (currentDay / 31) * 100;

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Devotional Journal</h1>
            <p>{new Date().toLocaleDateString()}</p>
            {currentDevotional && <Devotional devotional={currentDevotional} />}
            <div style={{ margin: '20px 0' }}>
                <button onClick={prevDevotional} style={{ marginRight: '10px' }}>Previous</button>
                <button onClick={nextDevotional}>Next</button>
            </div>
            <div style={{ width: '100%', backgroundColor: '#f3f3f3', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: `${progress}%`, height: '10px', backgroundColor: '#4caf50' }}></div>
            </div>
            <p>{`Day ${currentDay} of 31`}</p>
        </div>
    );
};

export default JournalEntry;