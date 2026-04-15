'use client';
import { CheckInContext } from '@/context/checkIn.context';
import React, { useContext } from 'react';
import { LuVideo } from 'react-icons/lu';
import { toast } from 'react-toastify';

const VideoCallBtn = ({friend}) => {

    const { addHistory } = useContext(CheckInContext);
    const handleVideoCall = () => {
        addHistory("video",friend);
        toast.success(`Initiating video call with ${friend.name}...`);
    }

    return (
        <div>
            <button onClick={handleVideoCall} className="btn h-30 w-full flex flex-col rounded-lg"><LuVideo size={22} /> Video</button>
        </div>
    );
};

export default VideoCallBtn;