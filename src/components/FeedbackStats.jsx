import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((accum, curr) => {
      return accum + curr.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/\.0$/, '');

  return (
    <div>
      <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
      </div>
    </div>
  );
}

export default FeedbackStats;
