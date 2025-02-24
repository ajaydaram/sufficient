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

    return (
        <div>
            <h1>Devotional Journal</h1>
            {currentDevotional && <Devotional devotional={currentDevotional} />}
            <button onClick={prevDevotional}>Previous</button>
            <button onClick={nextDevotional}>Next</button>
        </div>
    );
};

export default JournalEntry;