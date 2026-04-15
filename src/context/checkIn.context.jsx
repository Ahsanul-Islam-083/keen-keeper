'use client';
import React, { createContext, useState } from 'react';

export const CheckInContext = createContext();

const CheckInContextProvider = ({ children }) => {

    const [timeLine, setTimeLine] = useState([]);
    const addHistory = (type, friend) => {
        const newHistory = {
            id: Date.now(),
            friendId: friend.id,
            name: friend.name,
            type,
            date: new Date(),
        }
        setTimeLine(prev => [...prev, newHistory]);
    }

    const data = {

        timeLine,
        addHistory

    }

    return (
        <CheckInContext.Provider value={data}>
            {children}
        </CheckInContext.Provider>
    );
};

export default CheckInContextProvider;