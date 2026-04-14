import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[60vh]">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-2xl md:text-5xl font-bold ">Friends to keep close in your life</h1>
                        <p className="py-6 text-sm md:text-base md:max-w-[70vw] mx-auto">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            relationships that matter most.
                        </p>
                        <button className="btn bg-[#2d5a4e] text-white">+ Add a Friend</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;