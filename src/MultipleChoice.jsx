import React, { useState } from 'react';
import './MultipleChoice.css';

const MultipleChoice = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };
  
  return (
    <div className="quiz-container">
      
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source 
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1461332511894656024/38d2e65b10c82d1668dd9f9766775a397ca4cfcc?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rItvzEnFl14mCi1ZqBeJZfFaiWs9tIpPj6ZUSMCBr74xZzlGBIeIUEn7hpyBaDC6SyGSaa2wdoGTmOTWuPmXhzc6nw62f8Z3UmVK4VpQl1wSkvvOBr89Wh-1cEaN1G6TfJ~UqoOh5UtEBhTPcm7tzT6at3N2FCgLF074haCSDlxl~ILj3jE0jFx9yRK3uwECdpQXV2soONxKz0Yh4KsbC17eIQatx1CKdP3hAN02pA43WrrPK2XBc5VwymwdEfrVP41WhKzBVrWVP0cml6P12vS1W8EWOKcRG1OIbsrxT~TPcJuZYNE6BQFTftgyuf~T~fbLvpZ03YdpA4p8r-Cgvg__" 
          type="video/mp4" 
        />
       
      </video>
      
      <div className="title-card">
        <h1>Fill in the blanks "Our Solar System"</h1>
      </div>
      
      <div className="question-card">
        <div className="question">
          <h2>What is the largest planet in our solar system?</h2>
        </div>
        
        <div className="answers-grid">
          <button 
            className={`answer-button dark ${selectedAnswer === 'Saturn' ? 'selected' : ''}`}
            onClick={() => handleAnswerClick('Saturn')}
          >
            Saturn
          </button>
          
          <button 
            className={`answer-button light ${selectedAnswer === 'Jupiter' ? 'selected' : ''}`}
            onClick={() => handleAnswerClick('Jupiter')}
          >
            Jupiter
          </button>
          
          <button 
            className={`answer-button dark ${selectedAnswer === 'Earth' ? 'selected' : ''}`}
            onClick={() => handleAnswerClick('Earth')}
          >
            Earth
          </button>
          
          <button 
            className={`answer-button dark ${selectedAnswer === 'Mars' ? 'selected' : ''}`}
            onClick={() => handleAnswerClick('Mars')}
          >
            Mars
          </button>
        </div>
      </div>
      
      <div className="explanation-card">
        <h3>Explanation:</h3>
        <p>
          Jupiter is the largest planet in the solar system. It's about 11 times wider than Earth
          with an equatorial diameter of 88,846 miles (about 142,984 kilometers). Jupiter is
          the fifth planet from the Sun, orbiting at an average distance of 483.7 million miles
          (778 million kilometers).
        </p>
      </div>
    </div>
  );
};

export default MultipleChoice;