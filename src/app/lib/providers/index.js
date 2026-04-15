'use client';
import CheckInContextProvider from '@/context/checkIn.context';
import React from 'react';

const Provider = ({ children }) => {
    return (
        <CheckInContextProvider>
            {children}
        </CheckInContextProvider>
    );
};

export default Provider;