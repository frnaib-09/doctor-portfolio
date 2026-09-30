import React from 'react'

const Head = ({headtitle, headexp, pragraph, className}) => {
  return (
    <div className={`${className}`}>
      <h6 className="head_title">{headtitle}</h6>
      <h1 className="head_exp">
        {headexp}
      </h1>
      {pragraph && <p className='head_pragraph'>{pragraph}</p>}
    </div>
  );
}

export default Head