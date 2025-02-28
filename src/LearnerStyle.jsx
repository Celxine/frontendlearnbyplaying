import React from 'react';
import './LearnerStyle.css';

const LearnerStyle = () => {
  return (
    <div className="learner-style-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source 
          src="http://s3-figma-videos-production-sig.figma.com/video/TEAM/1461332511894656024/c9afa2362e2112473975efd87d9787e972399b70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZMULBLwoTNA3JJ8tvgIAtt0DlpiaaHr-z9Z0xr4c3H1wxoNfb5gKZF6DApdeCEhj7lN5ocJ5SYJqnmHXusXKFCoT49yPBzQKWEAud1gPOyCNK9kqgHcP7eAriUK0oTbJ3Fcp0ph3QRIJ0mWK1f5cHDG6W8TnZipYpwR-Yf-44CCFVodkGXqvToEtNbhJmmt59RlOrSFAfrEE-HUFHV5HoUECAqOR0W5mPWxZoUgjBo0vpVc3AF49YNb4~7yFpl8-x556tcKfv0~mlQ4hgpL2Lcl5lqB7uzCd51BvxmizKq6wn0PjgV5VYlQMtvig-kP3hThc7kuMXIeyj9txW4Dh1w__" 
          type="video/mp4" 
        />
      </video>

      <div className="content-box">
        <h1 className="title">Unlock Your Learning Style</h1>
        <p className="description">
          Ready to unlock your best way to learn? 🚀 Take this quick quiz to discover your unique learning style! Your results will personalize your experience, helping you learn smarter, not harder.
        </p>
        <button className="lets-go-button">Let's go!</button>
      </div>
    </div>
  );
};

export default LearnerStyle;