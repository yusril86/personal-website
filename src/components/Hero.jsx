import React from "react";

const Hero = () => {
    return (
        <section 
        id="" 
        className="pt-28 lg:pt-36"
        >
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">

                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg ">
                        <img src="/images/avatar-1.jpg" 
                        width={40}
                        height={40}                       
                        alt="Yusril Anwar"
                         className="img-cover" />
                    </figure>
                    <div className="">
                       <span className="">
                        <span className=""></span>
                       </span>
                       Available for work
                    </div>
                    <h2 className="">
                        Building Digital Solution
                    </h2>
                    <div className="">
                        ButtonPrimary
                        ButtonOutline
                    </div>
                </div>

                <div className="">
                    <figure className="">
                        <img src="/images/logo.svg"
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