import React, { useEffect, useState } from 'react'
import Review from './review';

export default function ReviewList() {
  const [review, setReview] = useState([]);
  const [handtime, setHandtime] = useState('');
  

  useEffect(() => {
    const fetchData = async () => {
      const url = `/api/review`;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const viewdata = await res.json();
        console.log(viewdata);
        setReview(viewdata);
       
      } catch (e) {
        console.error(e);
        setReview([]);
      }
    };
    fetchData();
  }, []);

  if (review.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      

      <hr className=" mt-3" />
      <br />
      {review.map((review, i) => {
        return (
          <Review
            data={review}
            key={i}
            content={review.Content}
            whenCreated={review.WhenCreated}
            nickname={review.Nickname}
            SN={review.SN}
          />
        );
      })}
    </>
  )
}
