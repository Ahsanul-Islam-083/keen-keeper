'use client';
import { CheckInContext } from '@/context/checkIn.context';
import React, { useContext } from 'react';
import { LuMessageSquare } from 'react-icons/lu';
import { toast } from 'react-toastify';

const TextBtn = ({friend}) => {

    const{ addHistory } = useContext(CheckInContext);
    const handleText = () => {
        addHistory("text",friend);
        toast.success(`Opened chat with ${friend.name}...`);

    }

    return (
        <div>
            <button onClick={handleText} className="btn sm:h-30 w-full flex sm:flex-col rounded-lg"><LuMessageSquare size={22} /> Text</button>
        </div>
    );
};

export default TextBtn;