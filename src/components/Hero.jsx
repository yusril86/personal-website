import React from "react";
import {ButtonPrimary,ButtonOutline} from "./Button";

const Hero = () => {
    return (
        <section 
        id="home" 
        className="pt-28 lg:pt-36"
        >
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div>

               
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg ">
                        <img src="/images/internet.png" 
                        width={40}
                        height={40}                       
                        alt="Yusril Anwar"
                         className="img-cover" />
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                       <span className="relative w-2 h-2 rounded-full bg-emerald-400 ">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                       </span>
                       Available for work
                    </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch]
                     lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Yusril Anwar Software engineer
                    </h2>
                    <div className="flex items-center gap-3">
                    <ButtonPrimary
                        href="/document/CV-Yusril-Anwar-2025.pdf"
                        target="_blank" 
                        label="Download CV"
                        icon="download"
                        classes="btn-primary"
                        type="application/octet-stream" 
                        download="cv-yusril.pdf"
                    />
                    
                       <ButtonOutline
                        href="#contact"
                        label="Connect with me"
                        icon="arrow_downward"

                    />
                    </div>
                </div>

                <div className="hidden lg:block ">
                    <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-t
                     from-sky-400 via-25% via-sky-40/40 to-65% rounded-[60px] overflow-hidden">
                        <img src="/images/profile1.png"
                         alt="Yusril Anwar"
                         className=" "
                          width={656}
                           height={800}/>
                    </figure>
                </div>
            </div>
        </section>
    );
    }
export default Hero;