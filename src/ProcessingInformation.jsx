import React from 'react';
import './ProcessingInformation.css';

const ProcessingInformation = () => {
  return (
    <div className="processing-info-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source 
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1461332511894656024/c9afa2362e2112473975efd87d9787e972399b70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZMULBLwoTNA3JJ8tvgIAtt0DlpiaaHr-z9Z0xr4c3H1wxoNfb5gKZF6DApdeCEhj7lN5ocJ5SYJqnmHXusXKFCoT49yPBzQKWEAud1gPOyCNK9kqgHcP7eAriUK0oTbJ3Fcp0ph3QRIJ0mWK1f5cHDG6W8TnZipYpwR-Yf-44CCFVodkGXqvToEtNbhJmmt59RlOrSFAfrEE-HUFHV5HoUECAqOR0W5mPWxZoUgjBo0vpVc3AF49YNb4~7yFpl8-x556tcKfv0~mlQ4hgpL2Lcl5lqB7uzCd51BvxmizKq6wn0PjgV5VYlQMtvig-kP3hThc7kuMXIeyj9txW4Dh1w__" 
          type="video/mp4" 
        />
      </video>

      <div className="title-bar">
        <div className="title-text">Understanding & Processing Information</div>
      </div>

      <div className="content-box">
        <div className="question">
          When learning something new, what helps you the most?
        </div>

        <div className="answers-grid">
          <button className="answer-button">
            (V) Seeing pictures, charts, or diagrams 🖼️
          </button>
          <button className="answer-button">
            (A) Listening to someone explain it 🎧
          </button>
          <button className="answer-button">
            (R) Reading about it 📖
          </button>
          <button className="answer-button">
            (K) Trying it out myself 🛠️
          </button>
        </div>
      </div>

      <div className="navigation-buttons">
        <button className="nav-button prev-button">
          ←
        </button>
        <button className="nav-button next-button">
          →
        </button>
      </div>
    </div>
  );
};

export default ProcessingInformation;