import React from 'react';

const Card = ({headline, tag, cost, stars = 2, ...params}) => {

    let fillStars = [];
    for(let i = 0; i < 4; i++) {
        if(i < stars) {
            fillStars.push(
                <svg key={i} style={{width: "24px", height: "24px", marginRight: "10px"}}
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            );
        }else {
            fillStars.push(
                <svg key={i} style={{width: "24px", height: "24px", marginRight: "10px"}}
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            )
        }
    }
    return (
        <div className="w-full rounded-lg bg-white p-4 hover:shadow-lg cursor-pointer" title={headline} {...params}>
            <div className="text-lg mb-2 extrabold capitalize whitespace-nowrap overflow-ellipsis overflow-hidden w-10/12"
                 style={{color: "rgb(68,68,68)"}}>
                {headline}
            </div>
            <div className="text-sm mb-2 semibold" style={{color: "#818181"}}>{tag}</div>
            <div className="text-sm mb-2 semibold" style={{color: "#818181"}}>{cost}</div>
            <div className="flex w-8/12 space-around" style={{color: "rgb(68,68,68)"}}>
                { fillStars }
                <svg style={{width: "24px", height: "24px", marginRight: "10px"}}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    )
};


export default Card;