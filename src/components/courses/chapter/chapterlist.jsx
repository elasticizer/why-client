import React, { useState, useEffect } from 'react';
import Chapter from './chapter';

export default function Chapterlist() {
    const [chapter, setChapter] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const url = `/api/chapter`;
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const chapterdata = await res.json();
                setChapter(chapterdata);
            } catch (e) {
                console.error(e);
                setChapter([]);
            }
        };
        fetchData();
    }, []);

    if (chapter.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            
            {chapter.map((chapter, i) => {
                return (    
                    <Chapter
                      data= {chapter}
                        key={i}
                        title={chapter.Title}
                        SN={chapter.SN}
                    />
                );
            })}
        </>
    );
}
