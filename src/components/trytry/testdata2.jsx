import React, { useEffect, useState } from 'react';
import CourseList from './testdata'
import { BsBookmarkHeart } from 'react-icons/bs';
import CardFirst from '../card/cardfirst';

export default function Testdata2() {
    const [hover, setHover] = useState(false);
    return (
        <>

            <div className="relative border"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <CardFirst />
                <div className=" absolute  top-3 left-20 size-9 ">
                    {hover ? <BsBookmarkHeart className="size-7 text-red-500 " /> : ''}
                </div>
            </div>
        </>
    )
}
