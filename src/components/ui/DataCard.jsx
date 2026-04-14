import React from 'react';

const DataCard = ({ number, children}) => {
    return (
        <div className='card p-3 md:p-8 text-center rounded-lg shadow-md'>
            <h3 className='font-semibold text-xl md:text-[32px] text-[#244D3F]'>{number}</h3>
            <p className=' text-sm md:text-[18px] text-[#64748B]'>{children}</p>
        </div>
    );
};

export default DataCard;