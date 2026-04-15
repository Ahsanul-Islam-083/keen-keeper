'use client';
import { CheckInContext } from '@/context/checkIn.context';
import React, { useContext, useEffect, useState } from 'react';

const TimelinePage = () => {

    const filterLabels = {
        all: "Filter Timeline",
        call: "Voice Call",
        video: "Video Call",
        text: "Text Message",
    };

    const { timeLine } = useContext(CheckInContext);

    const [filterType, setFilterType] = useState("all");
    const [search, setSearch] = useState("");
    const [sortByTime, setSortByTime] = useState("newest");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        let result = [...timeLine];
        if (filterType !== "all") {
            result = result.filter(item => item.type === filterType);
        }
        if (search.trim() !== "") {
            result = result.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (sortByTime === "newest") {
            result.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else {
            result.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    }, [timeLine, filterType, search, sortByTime])

    return (
        <div className='container mx-auto px-4 py-10'>
            <h1 className='text-3xl font-bold mb-6'>Timeline</h1>

            <div className=''>
                {/* type */}
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1 w-56 justify-between text-gray-500 btn-outline">{filterLabels[filterType] || "Filter timeline"} <span>⬇</span></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setFilterType("all")}><a>✓ All</a></li>
                        <li onClick={() => setFilterType("call")}><a>✓ Voice Call</a></li>
                        <li onClick={() => setFilterType("video")}><a>✓ Video Call</a></li>
                        <li onClick={() => setFilterType("text")}><a>✓ Text Message</a></li>
                    </ul>
                </div>

                {/* time */}
                <select Value={sortByTime}
                onChange={e => setSortByTime(e.target.value)}
                className="select">
                    {/* <option disabled={true}>Sort By Time</option> */}
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                </select>


            </div>

        </div>
    );
};

export default TimelinePage;