import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate you service with us?</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your feedback here..."
            value={text}
          />
          <Button type="submit" version="secondary">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
