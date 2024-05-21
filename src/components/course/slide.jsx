import React from 'react';
import Card from '../card/Card';

export default function Slide({ data }) {
    return (
        <div className="hs-carousel-slide pt-5 lg:py-5">
            <div className="inline-flex  justify-between h-full ">
                <span className="sm:w-[700px] lg:w-[575px]">
                    <Card data={data[0]} />
                </span>
                {data[1] && <span className="sm:hidden lg:block lg:w-[575px]">
                    <Card data={data[1]} />
                </span>}
            </div>
        </div>
    )
}
