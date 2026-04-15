'use client'
import { CheckInContext } from '@/context/checkIn.context';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const StatsPage = () => {

    const { timeLine } = useContext(CheckInContext);
    console.log("stat", timeLine);
    const text = timeLine.filter(item => item.type === "text");
    const call = timeLine.filter(item => item.type === "call");
    const video = timeLine.filter(item => item.type === "video");


    const data = [
        { name: 'Text', value: text.length, fill: '#7C3AED' },
        { name: 'Call', value: call.length, fill: '#1F4D3C' },
        { name: 'Video', value: video.length, fill: '#3A9A5B' },
    ]


    return (
        <div className='container mx-auto px-4 py-10'>
            <h1 className='text-3xl font-bold mb-6'>Friendship Analytics</h1>
            <div className='border border-gray-200 rounded-lg p-6 shadow'>
                <p className='font-semibold capitalize text-[#2d5a4e]'>By Interaction Type</p>

                <PieChart
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        maxHeight: "80vh",
                        margin: "auto",
                        aspectRatio: 1,
                    }}
                    responsive
                >
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default StatsPage;