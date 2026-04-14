import Image from 'next/image';
import React from 'react';
import faceBook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import X from "../../../assets/twitter.png";

const Footer = () => {
    return (
        <div className='bg-[#2d5a4e] p-10'>
            <footer className="container mx-auto footer footer-horizontal footer-center  text-primary-content gap-6">
                <aside>

                    <h2 className="font-bold text-3xl md:text-4xl">
                        Keen<span className='font-medium'>Keeper</span>
                    </h2>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                </aside>
                <nav>
                    <p className='text-lg md:text-xl font-medium'>Social Links</p>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <Image src={instagram} alt="Instagram`" width={24} height={24} />
                        </a>
                        <a>
                            <Image src={faceBook} alt="Facebook" width={24} height={24} />
                        </a>
                        <a>
                            <Image src={X} alt="Twitter" width={24} height={24} />
                        </a>
                    </div>
                </nav>
            </footer>
            <div className='divider container mx-auto text-[#1A8862]] before:bg-[#1A8862]/40 after:bg-[#1A8862]/40'></div>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between text-white/40 text-sm pb-4'>
                <p>© {new Date().getFullYear()} KeenKeeper - All right reserved</p>
                <ul className='flex items-center gap-3'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>

        </div>

    );
};

export default Footer;