'use client';
import TimelineCard from '@/components/timeLine/TimelineCard';
import { CheckInContext } from '@/context/checkIn.context';
import React, { useContext, useEffect, useState } from 'react';
import { LuInbox } from 'react-icons/lu';

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
        setFiltered(result);
    }, [timeLine, filterType, search, sortByTime])

    return (
        <div className='container mx-auto px-4 py-10'>
            <h1 className='text-3xl font-bold mb-6'>Timeline</h1>

            {/* sorting and filtering */}
            <div className='flex flex-col sm:flex-row gap-3 mb-6'>
                {/* type */}
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="select w-56 justify-between btn-outline">{filterLabels[filterType] || "Filter timeline"}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 p-2 shadow-sm">
                        <li onClick={() => setFilterType("all")}><a>✓ All</a></li>
                        <li onClick={() => setFilterType("call")}><a>✓ Voice Call</a></li>
                        <li onClick={() => setFilterType("video")}><a>✓ Video Call</a></li>
                        <li onClick={() => setFilterType("text")}><a>✓ Text Message</a></li>
                    </ul>
                </div>

                {/* time */}
                <select value={sortByTime}
                    onChange={e => setSortByTime(e.target.value)}
                    className="select  w-full sm:w-48">
                    {/* <option disabled={true}>Sort By Time</option> */}
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                </select>

                {/* search */}
                <label className="input input-bordered flex items-center gap-2 w-full sm:w-64 sm:ml-auto">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" placeholder="Search by name" value={search} onChange={e => setSearch(e.target.value)}
                        className='grow text-sm' />
                </label>
            </div>

            {/* timeline */}
            <div>
                {
                    !filtered.length ? (
                        <div className="flex flex-col items-center justify-center py-24 text-center gap-3 min-h-[40vh]">
                            <div className="w-14 h-14 rounded-full bg-base-200 flex items-center justify-center">
                                <LuInbox size={24} className="text-gray-400" />
                            </div>
                            <p className="font-semibold text-gray-700">No interactions found</p>
                            <p className="text-sm text-gray-400">
                                {timeLine.length === 0
                                    ? "Start a check-in from a friend's page to see it here."
                                    : "Try adjusting your filters or search term."}
                            </p>
                        </div>
                    ) : (
                        <div>
                            {
                                filtered.map((item,i)=><TimelineCard key={i} item={item} />)
                            }
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default TimelinePage;