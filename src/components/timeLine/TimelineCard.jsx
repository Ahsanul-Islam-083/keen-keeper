import Image from 'next/image';
import React from 'react';
import callImg from '@/assets/call.png';
import textImg from '@/assets/text.png';
import videoImg from '@/assets/video.png';

const getImage = (type) => {
    if (type === "call") return callImg;
    if (type === "text") return textImg;
    if (type === "video") return videoImg;
    return callImg;
};

const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric",
    });

const TimelineCard = ({ item }) => {
    console.log(item);



    return (
        <div className={`flex border border-gray-200 rounded-lg mb-4 items-center gap-4 px-5 py-4 transition-colors hover:bg-base-200`}
        >
            {/* Image icon */}
            <div className="w-10 h-10 shrink-0">
                <Image
                    src={getImage(item.type)}
                    alt={item.type}
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500">
                    <span className="font-semibold capitalize text-[#2d5a4e]">{item.type}</span>
                    <span> with </span>
                    <span className='text-gray-700'>{item.name}</span>
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{formatDate(item.date)}</p>
            </div>
        </div>
    );
};

export default TimelineCard;