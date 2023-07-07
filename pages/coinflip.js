import { PickButton } from "../components/styleComponent"
import Heads from '../public/img/HEAD.png'
import Tails from '../public/img/TAIL.png'
import { useEffect, useRef, useState } from "react"
import Image from 'next/image'
const Coinflip = () =>{
    const coinRef = useRef(null);
    const [isFlipping , setIsFlipping] = useState(false);
    const [flippingDeg,setFlippingDeg] = useState(0);
    useEffect(()=>{
        const timerid = setTimeout(() => {
           setIsFlipping(false);
         }, 6000);
         if(!coinRef.current) return;
         if(!isFlipping){
            coinRef.current.style.transition = 'none';
            if((flippingDeg/180) %2 === 0)
                coinRef.current.style.transform = `rotateY(0deg)`;
            else coinRef.current.style.transform = `rotateY(180deg)`;
         } 
         else coinRef.current.style.transform = `rotateY(${flippingDeg}deg)`;
         return () => clearInterval(timerid);
    },[isFlipping,flippingDeg])
    const flipcoin = () => {
        setIsFlipping(true);
        if(!coinRef.current) return;
        coinRef.current.style.transition = 'transform ease-in-out 6s'
        setFlippingDeg(360*6+180*Math.floor(Math.random()*2));
    }
    return (
        <div className="flex flex-col items-center justify-between w-full h-full bg-[#FFF1CC] gap-11 md:flex-row md:justify-between rounded-[20px] p-[30px]">
            <div className="flex flex-col order-2 w-full gap-6">
                <div className="flex flex-wrap items-center justify-between gap-3 p-1 mx-auto rounded-lg w-full max-w-md bg-[#29192C] md:mx-0" role="tablist" aria-orientation="horizontal">
                    <PickButton>
                        <span className="flex items-center py-2 px-3 w-full uppercase text-brand-beige font-bold rounded-md ">
                            0.05
                            <svg color="#000" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 2.57589L2.39021 0.208344H12.4761L10.5859 2.57589H0.5ZM2.41408 7.56873L0.509547 9.95059H10.5955L12.5 7.56873H2.41408ZM0.523866 3.88853L2.41408 6.25608H12.5L10.6098 3.88853H0.523866Z" fill="#FFF6E1" fill-opacity="1"></path>
                            </svg>
                        </span>
                    </PickButton>
                    <PickButton>
                        <span className="flex items-center py-2 px-3 w-full uppercase text-brand-beige font-bold rounded-md">
                            0.1
                            <svg color="#000" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 2.57589L2.39021 0.208344H12.4761L10.5859 2.57589H0.5ZM2.41408 7.56873L0.509547 9.95059H10.5955L12.5 7.56873H2.41408ZM0.523866 3.88853L2.41408 6.25608H12.5L10.6098 3.88853H0.523866Z" fill="#FFF6E1" fill-opacity="1"></path>
                            </svg>
                        </span>
                    </PickButton>
                    <PickButton>
                        <span className="flex items-center py-2 px-3 w-full uppercase text-brand-beige font-bold rounded-md">
                            0.25
                            <svg color="#000" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 2.57589L2.39021 0.208344H12.4761L10.5859 2.57589H0.5ZM2.41408 7.56873L0.509547 9.95059H10.5955L12.5 7.56873H2.41408ZM0.523866 3.88853L2.41408 6.25608H12.5L10.6098 3.88853H0.523866Z" fill="#FFF6E1" fill-opacity="1"></path>
                            </svg>
                        </span>
                    </PickButton>
                    <PickButton>
                        <span className="flex items-center py-2 px-3 w-full uppercase text-brand-beige font-bold rounded-md">
                            0.5
                            <svg color="#000" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 2.57589L2.39021 0.208344H12.4761L10.5859 2.57589H0.5ZM2.41408 7.56873L0.509547 9.95059H10.5955L12.5 7.56873H2.41408ZM0.523866 3.88853L2.41408 6.25608H12.5L10.6098 3.88853H0.523866Z" fill="#FFF6E1" fill-opacity="1"></path>
                            </svg>
                        </span>
                    </PickButton>
                    <PickButton>
                        <span className="flex items-center py-2 px-3 w-full uppercase text-brand-beige font-bold rounded-md">
                            0.75
                            <svg color="#000" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 2.57589L2.39021 0.208344H12.4761L10.5859 2.57589H0.5ZM2.41408 7.56873L0.509547 9.95059H10.5955L12.5 7.56873H2.41408ZM0.523866 3.88853L2.41408 6.25608H12.5L10.6098 3.88853H0.523866Z" fill="#FFF6E1" fill-opacity="1"></path>
                            </svg>
                        </span>
                    </PickButton>
                    <PickButton>
                        <span className="flex items-center py-2 px-3 w-full uppercase text-brand-beige font-bold rounded-md">
                            1
                            <svg color="#000" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 2.57589L2.39021 0.208344H12.4761L10.5859 2.57589H0.5ZM2.41408 7.56873L0.509547 9.95059H10.5955L12.5 7.56873H2.41408ZM0.523866 3.88853L2.41408 6.25608H12.5L10.6098 3.88853H0.523866Z" fill="#FFF6E1" fill-opacity="1"></path>
                            </svg>
                        </span>
                    </PickButton>
                </div>
                <div className="flex flex-col items-center gap-6 md:items-start lg:flex-row">
                    <div className="flex gap-2 p-1 mx-auto rounded-lg w-fit h-[44px] bg-[#29192C] md:mx-0" role="tablist" aria-orientation="horizontal">
                        <PickButton>
                            <span className="pb-[8px] pt-[7px] px-5 w-full uppercase text-brand-beige font-bold rounded-md ">HEAD</span>
                        </PickButton>
                        <PickButton>
                            <span className="pb-[8px] pt-[7px] px-5 w-full uppercase text-brand-beige font-bold rounded-md ">TAIL</span>
                        </PickButton>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full max-w-md mx-auto mt-10 lg:mx-0">
                    <div className="w-full flex justify-center items-center p-4 rounded-t-[10px]  bg-[#eab52e]">
                        <h4 className="text-lg font-bold text-white self-center uppercase">Recent Plays</h4>
                    </div>
                    <div className="w-full rounded-b-[10px] p-3 bg-[#29192C] backdrop:blur-lg shadow-sm shadow-black/40">
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-10 md:order-2">
                <div className="p-[20px] coin-shadow bg-center rounded-full">
                    <div ref={coinRef} className="text-md coin md:text-[2rem]" style={{zIndex: '1',transform: 'rotateY(0deg) translateZ(0px)'}}>
                        <div className="coin-front">
                            <div className="depth-front">
                                <Image src={Heads} alt="HEADS"/>
                            </div>
                        </div>
                        <div className="coin-middle"></div>
                        <div className="coin-back">
                            <div className="depth-back">
                                <Image src={Tails} alt="TAILS"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="px-5 py-3 mt-auto text-xl text-highlight font-bold rounded-[10px] uppercase transition ease-in-out bg-[#eab52e] 
                    hover:brightness-90 disabled:cursor-not-allowed"
                    onClick={flipcoin}>
                    FLIP COIN
                </button>
            </div>
        </div>
    )
}

export default Coinflip;