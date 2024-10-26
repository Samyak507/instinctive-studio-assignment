import Image from "next/image";
import ClipBoard from '@/app/assets/clipboard-text.png'
import SunFinal from '@/app/assets/sun.svg';
import CameraIcon from '@/app/assets/cameraIcon.svg';
import BookIcon from '@/app/assets/book.svg';
import Video1 from '@/app/assets/video/Video 7.svg';
import { useState } from 'react';

import styles from '../styles/Modal.module.css';

export const MainSection = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    console.log(showModal);
    const [liveShow, setLiveShow] = useState<boolean>(false);

    return (
        <section className="">
            <div className="flex flex-col lg:flex-row justify-evenly lg:gap-5 p-5 lg:p-8 w-screen h-screen bg-[#F9F9FF]">
                <div className="flex flex-col ">
                    <div className=" ">
                        <h1 className="font-bold lg:text-[24px] text-[#3A3A3A]">Announcements</h1>
                        <div className=" flex flex-col justify-center items-center mt-2 text-center px-4 lg:px-5 py-3 bg-[#FFFFFF] rounded-[20px] border-[1px] ">
                            <div className="flex gap-2 lg:mb-2 py-1 px-1 lg:px-10 lg:py-2 rounded-[4px] bg-[#F8F8F8] ">
                                <Image src={SunFinal} className="h-[20px] w-[20px] text-[#4749B3] " alt="sunPng" />
                                <p className="font-300 text-[10px] lg:text-[12px] text-[#4749B3] lg:w-[268px] leading-[15.12px] "> On account of Independence Day, August 15th will be a holiday.</p>
                            </div>
                            <div className="hidden lg:flex gap-2 px-10 py-2 rounded-[4px] bg-[#F8F8F8] ">
                                <Image src={ClipBoard} className="h-[20px] w-[20px] text-[#4749B3] " alt="clipboard" />
                                <p className="font-300 text-[12px] text-[#4749B3] lg:w-[268px] leading-[15.12px]  "> Reminder to finish your assignments and submit them by Monday.</p>
                            </div>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-[24px] text-[#3A3A3A] my-2">Your Class Schedule</h1>
                            <div className=" py-4 px-3 lg:py-8 lg:px-6 rounded-[20px] border-[1px] bg-[#FFFFFF] ">
                                <ul >
                                    <li className="bg-[#F2F2FF] lg:p-4 rounded-[4px] flex flex-row" >
                                        <div className="flex flex-row ">
                                            <Image src={CameraIcon} className=" " alt="cameraIcon" />
                                            <div className="p-2 lg:py-0 ">
                                                <p className="font-light text-[8px] lg:text-[12px] text-[#9899DF] ">Class 7, Science | Live Class</p>
                                                <p className="font-bold text-[8px] lg:text-[16px] text-[#4749B3]">Tuesday, 5:00 - 5:50 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center ml-12">
                                            <p className="lg:relative -right-6 font-normal text-[10px] text-[#7577D9]">Yesterday</p>
                                        </div>
                                    </li>
                                    <li className="hidden bg-[#E66DFF] p-4 mt-2 rounded-[4px] lg:flex flex-row" >
                                        <div className="flex flex-row">
                                            <Image src={CameraIcon} className="text-[#FFF] " alt="cameraIcon" />
                                            <div className="p-2 lg:py-0">
                                                <p className="font-light text-[12px] text-[#FFF] leading-[20.16px]">Class 7, Science | Live Class</p>
                                                <p className="font-bold text-[16px] text-[#FFF]">Tuesday, 5:00 - 5:50 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center ml-12">
                                            <p className="lg:relative -right-6 font-normal text-[10px] text-[#FFF]">Yesterday</p>
                                        </div>
                                    </li>
                                    <li className="hidden bg-[#F2F2FF] p-4 mt-2 rounded-[4px] lg:flex flex-row" >
                                        <div className="flex flex-row">
                                            <Image src={CameraIcon} className=" " alt="cameraIcon" />
                                            <div className="p-2 lg:py-0">
                                                <p className="font-light text-[12px] text-[#9899DF] leading-[20.16px]">Class 7, Science | Live Class</p>
                                                <p className="font-bold text-[16px] text-[#4749B3]">Tuesday, 5:00 - 5:50 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center ml-12">
                                            <p className="lg:relative -right-6 font-normal text-[10px] text-[#7577D9]">Yesterday</p>
                                        </div>
                                    </li>
                                    <li className="bg-[#FDF5FF] lg:p-4 mt-2 rounded-[4px] flex flex-row" >
                                        <div className="flex flex-row">
                                            <Image src={CameraIcon} className=" " alt="cameraIcon" />
                                            <div className="p-2 lg:py-0">
                                                <p className="font-light text-[8px] lg:text-[12px] text-[#E66DFF] leading-[20.16px]">Class 7, Science | Live Class</p>
                                                <p className="font-bold text-[8px] lg:text-[16px] text-[#E66DFF]">Tuesday, 5:00 - 5:50 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center ml-12">
                                            <p className="lg:relative -right-6 font-normal text-[10px] text-[#E66DFF]">Yesterday</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-10 lg:mt-0">
                    <h1 className="font-bold lg:text-[24px] text-[#3A3A3A]">Quick Links</h1>
                    <div className="flex flex-col ">
                        <button className=" flex lg:flex-col mt-2 lg:py-10 lg:px-2 gap-7 lg:gap-0 rounded-[8px] lg:rounded-[20px] border-[1px] bg-[#4749B3] border-[#6669FE]/10 lg:justify-center items-center ">
                            <Image src={BookIcon} className="bg-[#5f61c0] p-4 h-fit w-fit rounded-[8px] lg:bg-transparent lg:p-0 " alt="bookSvg" />
                            <div className="lg:px-14">
                                <p className="font-bold lg:text-[24px] leading-[23.76px] text-[#fff] ">Canvas LMS</p>
                                <p className="hidden lg:block font-normal text-[12px] mt-2 text-[#FFF] leading-[11.88px] w-[250px] ">Click here to access your LMS portal for assignments, class recordings and notes.</p>
                            </div>
                        </button>
                        <button onClick={() => setLiveShow(true)} className=" flex lg:flex-col mt-2  lg:py-10 lg:px-2 gap-7 lg:gap-0 rounded-[8px] lg:rounded-[20px] border-[1px] bg-[#E66DFF] border-[#6669FE]/10 lg:justify-center items-center ">
                            <Image src={BookIcon} className="bg-[#EB87FF] p-4 h-fit w-fit rounded-[8px] lg:bg-transparent lg:p-0 " alt="bookSvg" />
                            <p className="font-bold lg:text-[24px] leading-[23.76px] text-[#fff] ">Join Live Class</p>
                            <p className="hidden lg:block font-normal text-[12px] mt-2 text-[#FFF] leading-[11.88px] w-[250px] ">Click here to join your live class session. Please do not share this link.</p>
                        </button>
                        {liveShow && (
                            <div className={styles.modal}>
                                <div>
                                    <p className="bg-white text-[#E66DFF] text-[10px] lg:text-[20px] p-2 lg:p-4 rounded-[20px]">Class 7 Math is starting in 1 hour, 34 minutes.</p>
                                </div>
                                <div className="font-bold text-[12px] max-w-52 lg:max-w-max lg:text-[20px] bg-white p-4 lg:p-8 rounded-[20px] flex flex-col gap-1 items-center">
                                    <p className="text-[#6669FE]">You can join the live class 5 minutes before it starts. Please wait.</p>
                                    <button onClick={() => setLiveShow(false)} className="rounded-[20px] py-2 px-4 text-white bg-[#6669FE] w-max">Okay</button>

                                </div>
                            </div>
                        )}
                        <button className=" flex lg:flex-col mt-2 lg:py-10 lg:px-2  gap-7 lg:gap-0 rounded-[8px] lg:rounded-[20px] border-[1px] bg-[#6669FE] border-[#6669FE]/10 lg:justify-center items-center ">
                            <Image src={BookIcon} className="bg-[#7E81FF] p-4 h-fit w-fit rounded-[8px] lg:bg-transparent lg:p-0" alt="bookSvg" />
                            <p className="font-bold lg:text-[24px] leading-[23.76px] text-[#fff] ">Contact Teacher</p>
                            <p className="hidden lg:block font-normal text-[12px] mt-2 text-[#FFF] leading-[11.88px] w-[250px] ">Click here to contact your teacher for any doubts or concerns.</p>
                        </button>
                    </div>
                </div>
                <div className="flex">
                    <div className=" mt-12 lg:mt-0 ">
                        <h1 className="font-bold lg:text-[24px] text-[#3A3A3A]">Access Class Recording</h1>
                        <div className="bg-[#fff] rounded-[20px] py-5 lg:py-10 mt-2 ">
                            <div className="  px-5  ">
                                <div className="">
                                    <input type="text" placeholder="Search for class recordings" className="p-2 lg:w-full bg-[#4749B3] bg-opacity-5 " />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-14 mt-10 px-4 ">
                                <p className=" left-0 lg:p-4 text-[10px] lg:text-[14px] ">Filter By:</p>
                                <div className=" right-4 ">
                                    <div className="flex flex-row gap-4 ">
                                        <p className="p-2 text-[10px] lg:text-[14px] bg-[#4749B3] bg-opacity-5">This week</p>
                                        <p className="p-2 text-[10px] lg:text-[14px] bg-[#4749B3] bg-opacity-5">All subjects</p>
                                    </div>
                                </div>
                            </div>

                            <div onClick={() => setShowModal(true)} className="mt-14 mx-4 w-11/12 ">
                                <div className="cursor-pointer">
                                    <Image src={Video1} className="w-full" alt="video" />
                                </div>
                                <div onClick={() => setShowModal(true)} className="cursor-pointer">
                                    <Image src={Video1} className="w-full" alt="video" />
                                </div>
                                <div onClick={() => setShowModal(true)} className="cursor-pointer">
                                    <Image src={Video1} className="w-full" alt="video" />
                                </div>
                                <div onClick={() => setShowModal(true)} className="cursor-pointer hidden lg:block">
                                    <Image src={Video1} className="w-full" alt="video" />
                                </div>
                            </div>
                            {showModal && (
                                <div className={styles.modal}>
                                    <div className={styles.modalContent}>
                                        <h2>Algebric Equations</h2>
                                        <video width="600" controls>
                                            {/* <source src="/sample-video.mp4" type="video/mp4" /> */}
                                            Your browser does not support the video tag.
                                        </video>
                                        <button onClick={() => setShowModal(false)} className={styles.closeModal}>Close</button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};
