
import React from "react";
import { useNavigate } from "react-router-dom"; 

const Hero = ({ isLoggedIn, onShowSignup }) => { 
    const navigate = useNavigate(); 

    return (
        <>
            <div className="relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-screen overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-90">
                    <source src="/src/assets/homevideo.mp4" type="video/mp4" />
                </video>

                <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold mt-4'>
                    Welcome to Flavors around the World!
                </h1>

                <p className="max-w-130 mt-2 text-lg md:text-xl bg-[#fdf6e3] text-gray-800 p-6 rounded-xl shadow-md">
                    We’re thrilled to have you on board for this exciting marketplace of flavors and freshness.
                    Here, you’ll get the chance to bid, compete, and win the best of foods and fruits straight from nature’s basket.
                    Sharpen your bidding skills, keep your eyes on the prize, and get ready for a fun-filled experience where every bid counts!
                    Let the bidding begin…
                </p>
                
            </div>
        </>
    )
}

export default Hero;
