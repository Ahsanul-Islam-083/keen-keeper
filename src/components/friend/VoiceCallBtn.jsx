'use client';
import { CheckInContext } from '@/context/checkIn.context';
import React, { useContext } from 'react';
import { LuPhone } from 'react-icons/lu';
import { toast } from 'react-toastify';

const VoiceCallBtn = ({ friend }) => {

    // const { voiceCall, setVoiceCall } = useContext(CheckInContext);
    const { addHistory } = useContext(CheckInContext);

    const handleVoiceCall = () => {
        addHistory("call",friend);
        toast.success(`Initiating voice call with ${friend.name}...`);
    };

    return (
        <div>
            <button onClick={handleVoiceCall} className="btn h-30 w-full flex flex-col rounded-lg"><LuPhone size={22} /> Call</button>
        </div>
    );
};

export default VoiceCallBtn;