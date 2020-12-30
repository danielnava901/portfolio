import React from 'react';

const Progress = ({heading, progress, total}) => {

    return (
        <div className="w-full">
            <div className="mb-6">{heading}</div>
            <div className="w-full flex justify-between">
                <div className="w-9/12 mb-6 rounded-lg" style={{backgroundColor: "#D4E9E0", height: "20px"}} title={`${progress}%`}>
                    <div className=" bg-color-primary-crm h-full rounded-lg" style={{width: `${progress}%`, height: "20px"}} />
                </div>
                <div className="extrabold text-sm">
                    {total}
                </div>
            </div>
        </div>
    )
};

export default Progress;