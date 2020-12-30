import React from "react";
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Progress from "./components/Progress";


const Crm = () => {

    return (
        <div className="relative w-full overflow-scroll flex" style={{height: "calc(100%)"}}>
            <div className="w-full h-full flex flex-col text-white justify-between items-start pl-2 py-2"
                 style={{width: "160px", backgroundColor: "#4C9E88"}}>
                <div className="mx-4 flex-none flex justify-center items-center" style={{width: "48px", height: "48px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         style={{color: "white", width: "32px", height: "32px"}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                </div>
                <div className="mb-8 mx-4 flex-none flex justify-center items-start" style={{width: "48px", height: "48px"}}>
                    <span className="text-lg uppercase">CRM</span>
                </div>
                <div className="my-8 flex flex-grow flex-col justify-between py-16 text-sm" >
                    <div className="vertial-text cursor-pointer mx-4" style={{width: "48px"}}>Configuration</div>
                    <div className="vertial-text cursor-pointer mx-4" style={{width: "48px"}}>Reporting</div>
                    <div className="vertial-text cursor-pointer mx-4" style={{width: "48px"}}>Customer</div>
                    <div className="vertial-text cursor-pointer mx-4" style={{width: "48px"}}>Pipeline</div>
                </div>
                <div className="mx-4 flex-none flex flex-col items-center justify-center pb-6" style={{width: "48px"}}>
                    <div className="cursor-pointer mb-2" style={{color: "white", width: "24px", height: "24px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </div>
                    <div className="cursor-pointer rounded-full"
                        style={{width: "24px", height: "24px", backgroundSize: "24px 24px",
                            backgroundImage: "url(https://cdn.stocksnap.io/img-thumbs/960w/smiling-woman_A2QAOUPRER.jpg)"}} >
                    </div>
                </div>
            </div>
            <main className="flex h-full rounded-l-lg"
                style={{
                    width: "calc(100% - 116px)",
                    marginLeft: "-44px",
                    borderTopLeftRadius: "3rem",
                    borderBottomLeftRadius: "3rem",
                    backgroundColor: "#F3F8F2",
                    height: "100%",
                }}>
                <div className="w-11/12 h-full flex pl-8 pt-2 pr-7 pb-2">
                    <div className="w-full h-full">
                        <div className="flex justify-between mb-12">
                            <div className="w-4/12">
                                <button className="text-sm uppercase text-white px-4 py-2 rounded-full mr-4 hover:opacity-75"
                                        style={{backgroundColor: "#4C9E88"}}>create</button>
                                <button className="text-sm uppercase px-4 py-2 rounded-full text-color-primary-crm hover:opacity-75"
                                        style={{border: "2px solid #4C9E88"}}>import</button>
                            </div>
                            <div className="w-4/12 flex justify-around text-color-primary-crm">
                                <div className="flex cursor-pointer hover:opacity-75">
                                    <svg style={{width: "24px", height: "24px"}}
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                    </svg>
                                    <span className="ml-2 text-color-primary-crm">Filters</span>
                                </div>
                                <div className="flex cursor-pointer hover:opacity-75">
                                    <svg style={{width: "24px", height: "24px"}}
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <span className="ml-2 text-color-primary-crm">Group by</span>
                                </div>
                                <div className="flex cursor-pointer hover:opacity-75">
                                    <svg style={{width: "24px", height: "24px"}}
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <span className="ml-2 text-color-primary-crm">Favorites</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex" style={{height: "calc(100% - 100px)"}}>
                            <div className="w-4/12 px-2 overflow-scroll" >
                                <Progress progress={80} heading="New" total="$ 20,000.00"/>
                                <Card
                                    headline="Interest in your Graphic Design Project"
                                    tag="Softwere"
                                    cost="$ 24,000.00"
                                    style={{marginBottom: "20px"}}
                                    stars={3}
                                />
                                <Card
                                    headline="Script to import external data"
                                    tag="Softwere"
                                    cost="$ 14,000.00"
                                    style={{marginBottom: "20px"}}
                                    stars={1}
                                />
                                <Card
                                    headline="Plan to buy 60 keyboards"
                                    tag="Admin"
                                    cost="$ 23,000.00"
                                    style={{marginBottom: "20px"}}
                                    stars={2}
                                />
                            </div>
                            <div className="w-4/12 px-2 overflow-scroll">
                                <Progress progress={40} heading="Qualified" total="$ 14,000.00"/>
                                <Card
                                    headline="7 reasons why ‘Die Hard’ is a Christmas movie"
                                    tag="Movies"
                                    cost="$ 14,000.00"
                                    style={{marginBottom: "20px"}}
                                    stars={1}
                                />
                                <Card
                                    headline="Pricing Information"
                                    tag="Softwere"
                                    cost="$ 24,000.00"
                                    style={{marginBottom: "20px"}}
                                    stars={3}
                                />
                                <Card
                                    headline="Interest in your Graphic Design Project"
                                    tag="Softwere"
                                    cost="$ 24,000.00"
                                    style={{marginBottom: "20px"}}
                                    stars={1}
                                />
                            </div>
                            <div className="relative w-4/12 px-2 overflow-scroll">
                                <Progress progress={10} heading="Proposition" total="$ 4,000.00"/>
                                <Card
                                    headline="Towers abound in Colorado Springs"
                                    tag="Invest"
                                    cost="$ 14,000.00"
                                    style={{marginBottom: "20px"}}
                                />
                                <Card
                                    headline="Colorado man first in U.S. diagnosed with "
                                    tag="Pandemic"
                                    cost="$ 34,000.00"
                                    style={{marginBottom: "20px"}}
                                    stars={3}
                                />
                                <Card
                                    headline="CBI identifies second set of human remains"
                                    tag="Medic"
                                    cost="$ 4,000.00"
                                    style={{marginBottom: "20px"}}
                                    stars={4}
                                /><Card
                                headline="Towers abound in Colorado Springs"
                                tag="Invest"
                                cost="$ 14,000.00"
                                style={{marginBottom: "20px"}}
                            />
                                <Card
                                    headline="Colorado man first in U.S. diagnosed with "
                                    tag="Pandemic"
                                    cost="$ 34,000.00"
                                    style={{marginBottom: "20px"}}
                                    stars={3}
                                />
                                <Card
                                    headline="CBI identifies second set of human remains"
                                    tag="Medic"
                                    cost="$ 4,000.00"
                                    style={{marginBottom: "20px"}}
                                    stars={4}
                                />
                                {/*
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
                            <div className="rounded-full bg-yellow-500 p-4 h-12 w-12 flex justify-center items-center shadow">V</div>
                        </div>
                        */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/12 relative bg-white h-full p-2 flex justify-start items-center">
                    <div className="absolute top-0 bottom-0 left-0 flex justify-center items-center cursor-pointer"
                         style={{marginLeft: "-24px", }}>
                        <div className="rounded-full p-4 h-12 w-12 flex justify-center items-center text-color-primary-crm"
                             style={{backgroundColor: "#F3F8F2"}}
                        >
                            <svg style={{width: "48px", height: "48px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                    </div>
                    <div className="top-0 bottom-0 right-0 vertial-text-tb text-color-primary-crm ">Add new column</div>
                </div>
            </main>
        </div>
    );
};

ReactDOM.render(<Crm />, document.getElementById('root'));
