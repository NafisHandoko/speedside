'use client'

import Image from 'next/image'
import { BsChevronLeft, BsChevronRight, BsPlay, BsPlayFill } from "react-icons/bs";
import HeaderImg from '../public/img/header-img.png'
import HeaderVector from '../public/img/header-vector.png'
import UIUXImg from '../public/img/uiux.png'
import WebdevImg from '../public/img/webdev.png'
import MobiledevImg from '../public/img/mobiledev.png'
import ConsultantImg from '../public/img/consultant.png'
import ServicesBg from '../public/img/services-bg.png'
import Package1Img from '../public/img/package1.png'
import Package2Img from '../public/img/package2.png'
import Package3Img from '../public/img/package3.png'
import Work1 from '../public/img/work1.png'
import WorkBg from '../public/img/work-bg.png'
import AboutImg from '../public/img/about-img.png'
import AboutBg from '../public/img/about-bg.png'
import TruckImg from '../public/img/truck.png'
import TrophyImg from '../public/img/trophy.png'
import TrekkingImg from '../public/img/trekking.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="flex flex-row items-center gap-4 absolute left-0 pt-10 w-full justify-center md:justify-start md:ml-36">
            {/* <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <ButtonTwo onClick={() => next()} />
            <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
            <button
                className={`rounded-full border border-black w-7 h-7 flex items-center justify-center ${currentSlide === 0 ? 'disable' : ''}`}
                onClick={() => previous()}
            >
                <BsChevronLeft />
            </button>
            <button
                className='rounded-full border border-black w-7 h-7 flex items-center justify-center'
                onClick={() => next()}
            >
                <BsChevronRight />
            </button>
        </div>
    );
};

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1400 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1400, min: 1024 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function Home() {
    return (
        <>
            <nav className='container mx-auto hidden lg:flex flex-row items-center justify-between py-7 px-20'>
                <a href="" className='text-primary text-5xl font-semibold'>Speedside</a>
                <div className='flex flex-row items-center gap-20'>
                    <ul className='flex flex-row gap-10 items-center font-semibold'>
                        <li className='text-text-nav hover:text-primary'><a href="#">Home</a></li>
                        <li className='text-text-nav hover:text-primary'><a href="#">Services</a></li>
                        <li className='text-text-nav hover:text-primary'><a href="#">Package</a></li>
                        <li className='text-text-nav hover:text-primary'><a href="#">Portfolio</a></li>
                        <li className='text-text-nav hover:text-primary'><a href="#">About Us</a></li>
                    </ul>
                    <a href="#" className='bg-primary text-white rounded-full px-4 py-2'>Contact Us</a>
                </div>
            </nav>
            <nav className='lg:hidden container mx-auto px-5 py-6 flex flex-row items-center justify-between'>
                <a href="" className='text-primary text-2xl font-semibold'>Speedside</a>
            </nav>
            <header className='container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 md:px-20 pb-20'>
                <div className='w-full lg:w-1/2 flex flex-col gap-5'>
                    <h1 className='font-bold text-4xl md:text-6xl text-text-h1 leading-tight'>Accelerate Your Business with Speedside</h1>
                    <Image
                        src={HeaderVector}
                        alt='header vector'
                    />
                    <p className='text-black font-medium text-lg'>At Speedside, we accelerate innovation. Our commitment is simple: fast, affordable, and reliable solutions. Experience the power of innovation at the speed of thought.</p>
                    <div className='flex flex-row items-center gap-7'>
                        <a href="#" className='text-white bg-primary rounded-full px-5 py-3'>Get Started</a>
                        <a href="#" className='flex flex-row items-center gap-3'>
                            <div className='rounded-full w-7 h-7 flex items-center justify-center border border-black'><BsPlay /></div>
                            <span>Learn More</span>
                        </a>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <Image
                        src={HeaderImg}
                        alt='header image'
                    />
                </div>
            </header>
            <section className='relative py-14 bg-primary lg:bg-transparent'>
                <Image
                    src={ServicesBg}
                    alt='services bg'
                    className='absolute top-0 left-0 -z-10 hidden lg:block'
                />
                <div className='container mx-auto flex flex-col gap-16 px-5 md:px-10'>
                    <h2 className='text-3xl md:text-5xl text-text-h2-purple text-center'>
                        <span className='font-bold'>What We Do</span><br />
                        <span className='font-light relative'>
                            For Your Business
                            <div className='bg-[#FDC221] w-[160px] h-[10px] absolute bottom-2 right-6 -z-10'></div>
                        </span>
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
                        <div className='rounded-lg bg-white p-4 flex flex-col gap-3'>
                            <Image
                                src={UIUXImg}
                                alt='uiux image'
                            />
                            <h4 className='font-bold text-text-purple tracking-wider'>UIUX DESIGN</h4>
                            <p className='text-sm font-light text-text-body-gray2'>Our UI/UX design team crafts visually stunning interfaces with a focus on seamless usability.</p>
                        </div>
                        <div className='rounded-lg bg-white p-4 flex flex-col gap-3'>
                            <Image
                                src={WebdevImg}
                                alt='webdev image'
                            />
                            <h4 className='font-bold text-text-purple tracking-wider'>WEB DEVELOPMENT</h4>
                            <p className='text-sm font-light text-text-body-gray2'>Specialize in creating dynamic, responsive, and scalable platforms tailored to your business needs.</p>
                        </div>
                        <div className='rounded-lg bg-white p-4 flex flex-col gap-3'>
                            <Image
                                src={MobiledevImg}
                                alt='mobile dev image'
                            />
                            <h4 className='font-bold text-text-purple tracking-wider'>MOBILE APP DEVELOPMENT</h4>
                            <p className='text-sm font-light text-text-body-gray2'>We're committed to delivering mobile solutions that resonate with your users.</p>
                        </div>
                        <div className='rounded-lg bg-white p-4 flex flex-col gap-3'>
                            <Image
                                src={ConsultantImg}
                                alt='uiux image'
                            />
                            <h4 className='font-bold text-text-purple tracking-wider'>IT CONSULTANT</h4>
                            <p className='text-sm font-light text-text-body-gray2'>Provide strategic insights and actionable plans to fuel your digital transformation</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-5 md:px-20 flex flex-col gap-7 py-36'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start'>
                    <h2 className='text-3xl md:text-5xl font-semibold text-text-h2-black leading-snug md:w-1/3'>Our Support Package</h2>
                    <p className='font-medium text-text-body-gray1 md:w-1/3'>At Speedside Tech, our commitment to your success doesn't end at project completion. Dive into the tailored support experience offered by our Support Package.</p>
                    <a href="#" className='text-white bg-primary rounded-full px-5 py-3 whitespace-nowrap'>Get Started</a>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='flex flex-col gap-5'>
                        <Image
                            src={Package1Img}
                            alt='package1 image'
                            className='w-full'
                        />
                        <h3 className='text-text-h3 font-semibold text-2xl lg:text-3xl'>Documentation</h3>
                        <p className='text-text-body-gray1 font-medium'>Receive detailed and user-friendly documentation that acts as your go-to resource, guiding your team through the functionalities of your solution.</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Image
                            src={Package2Img}
                            alt='package2 image'
                            className='w-full'
                        />
                        <h3 className='text-text-h3 font-semibold text-2xl lg:text-3xl'>Maintenance & Support</h3>
                        <p className='text-text-body-gray1 font-medium'>Our dedicated support team is at your service. We proactively address issues, conduct updates, and ensure your solution operates at peak performance.</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Image
                            src={Package3Img}
                            alt='package3 image'
                            className='w-full'
                        />
                        <h3 className='text-text-h3 font-semibold text-2xl lg:text-3xl'>Knowledge Transfer</h3>
                        <p className='text-text-body-gray1 font-medium'>Our experts provide hands-on training, empowering your team to handle day-to-day operations confidently.</p>
                    </div>
                </div>
            </section>
            <section className='relative pt-14 pb-28 lg:pb-14 bg-tertiary lg:bg-transparent'>
                <Image
                    src={WorkBg}
                    alt='work bg'
                    className='absolute top-0 right-0 -z-10 hidden lg:block'
                />
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-5 container mx-auto px-5 md:px-10 text-center md:text-start'>
                        <h2 className='text-3xl md:text-5xl text-text-h2-purple'>
                            <span className='font-bold'>Our Recent Work</span><br />
                            <span className='font-light relative'>
                                By Speedside Tech
                                <div className='bg-[#FDC221] w-[300px] h-[8px] absolute bottom-2 right-5 -z-10'></div>
                            </span>
                        </h2>
                        <p className='text-text-body-purple w-full md:w-2/5'>Welcome to our portfolio, where innovation meets execution. Explore a collection of projects that showcase the diversity and excellence of Speedside Tech.</p>
                    </div>
                    <div className='relative px-5 md:px-0'>
                        <Carousel
                            // ssr={true}
                            responsive={responsive}
                            arrows={false}
                            renderButtonGroupOutside={true}
                            customButtonGroup={<ButtonGroup />}
                            sliderClass='md:gap-10 !ml-0 md:!ml-52'
                            swipeable={true}
                            draggable={true}
                            slidesToSlide={1}
                        >
                            <div className='bg-white rounded-lg p-4 flex flex-col gap-5'>
                                <Image
                                    src={Work1}
                                    alt='work 1'
                                    className='w-full'
                                />
                                <div className='flex flex-row items-center justify-between py-3'>
                                    <h4 className='text-text-h4-purple text-2xl font-bold'>UI Soup</h4>
                                    <a href="#" className='rounded-full text-xs border border-black px-2 py-1 text-text-h4-purple'>View Work</a>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg p-4 flex flex-col gap-5'>
                                <Image
                                    src={Work1}
                                    alt='work 1'
                                    className='w-full'
                                />
                                <div className='flex flex-row items-center justify-between py-3'>
                                    <h4 className='text-text-h4-purple text-2xl font-bold'>UI Soup</h4>
                                    <a href="#" className='rounded-full text-xs border border-black px-2 py-1 text-text-h4-purple'>View Work</a>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg p-4 flex flex-col gap-5'>
                                <Image
                                    src={Work1}
                                    alt='work 1'
                                    className='w-full'
                                />
                                <div className='flex flex-row items-center justify-between py-3'>
                                    <h4 className='text-text-h4-purple text-2xl font-bold'>UI Soup</h4>
                                    <a href="#" className='rounded-full text-xs border border-black px-2 py-1 text-text-h4-purple'>View Work</a>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg p-4 flex flex-col gap-5'>
                                <Image
                                    src={Work1}
                                    alt='work 1'
                                    className='w-full'
                                />
                                <div className='flex flex-row items-center justify-between py-3'>
                                    <h4 className='text-text-h4-purple text-2xl font-bold'>UI Soup</h4>
                                    <a href="#" className='rounded-full text-xs border border-black px-2 py-1 text-text-h4-purple'>View Work</a>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg p-4 flex flex-col gap-5'>
                                <Image
                                    src={Work1}
                                    alt='work 1'
                                    className='w-full'
                                />
                                <div className='flex flex-row items-center justify-between py-3'>
                                    <h4 className='text-text-h4-purple text-2xl font-bold'>UI Soup</h4>
                                    <a href="#" className='rounded-full text-xs border border-black px-2 py-1 text-text-h4-purple'>View Work</a>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className='relative mt-36'>
                <Image
                    src={AboutBg}
                    alt='about bg'
                    className='absolute top-0 left-0 -z-10'
                />
                <div className='container mx-auto flex flex-col lg:flex-row px-5 md:px-20 py-36 gap-10 md:gap-20 items-start'>
                    <Image
                        src={AboutImg}
                        alt='about image'
                        className='w-full lg:w-1/2'
                    />
                    <div className='w-full lg:w-1/2 flex flex-col text-text-body-bluegray'>
                        <span className='text-[#D97706] font-medium mb-2'>Speedside Tech</span>
                        <h2 className='text-3xl md:text-4xl font-bold mb-5'>Our Commitment to You</h2>
                        <p className='mb-7'>At Speedside Tech, we redefine the software experience with a commitment to three core principles</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            <div className='flex flex-col gap-2'>
                                <Image
                                    src={TruckImg}
                                    alt='truck image'
                                />
                                <h4 className='font-bold text-lg'>Fast</h4>
                                <p className='text-sm'>Our solutions are crafted with agility, ensuring your projects come to life at the speed of your vision.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Image
                                    src={TrophyImg}
                                    alt='trophy image'
                                />
                                <h4 className='font-bold text-lg'>Affordable</h4>
                                <p className='text-sm'>We believe in delivering excellence without breaking the bank, making advanced technology accessible to all.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Image
                                    src={TrekkingImg}
                                    alt='trekking image'
                                />
                                <h4 className='font-bold text-lg'>Trusted</h4>
                                <p className='text-sm'>Trust is earned through transparency, reliability, and a commitment to your business success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='bg-footer-primary py-32'>
                <div className='container mx-auto px-5 md:px-20 flex flex-col'>
                    <div className='flex flex-col lg:flex-row gap-20 items-center'>
                        <div className='flex flex-col gap-6 w-full lg:w-1/2'>
                            <h2 className='text-white text-5xl font-semibold leading-snug'>People are Saying About Speedside</h2>
                            <p className='font-medium text-text-body-gray1'>At Speedside, we bring innovation to life swiftly, making excellence accessible. Experience the speed of progress.</p>
                            <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 0H21.5L14.5 38H0L11.5 0Z" fill="#D9D9D9" />
                                <path d="M35 0H45L38 38H23.5L35 0Z" fill="#D9D9D9" />
                            </svg>
                            <p className='font-medium text-text-body-gray1'>Working with Speedside Tech was a game-changer for our business. Their innovative solutions and commitment to excellence exceeded our expectations. </p>
                            <span className='font-medium text-text-body-gray1'>_ Aria Zinanrio</span>
                            <div className='flex flex-row flex-wrap items-center gap-4'>
                                <Image
                                    src={`https://source.unsplash.com/random/?person`}
                                    alt='person image'
                                    className='rounded-full max-w-[60px] max-h-[60px] object-cover'
                                    width={60}
                                    height={60}
                                />
                                <Image
                                    src={`https://source.unsplash.com/random/?person`}
                                    alt='person image'
                                    className='rounded-full max-w-[60px] max-h-[60px] object-cover'
                                    width={60}
                                    height={60}
                                />
                                <Image
                                    src={`https://source.unsplash.com/random/?person`}
                                    alt='person image'
                                    className='rounded-full max-w-[60px] max-h-[60px] object-cover'
                                    width={60}
                                    height={60}
                                />
                                <Image
                                    src={`https://source.unsplash.com/random/?person`}
                                    alt='person image'
                                    className='rounded-full max-w-[60px] max-h-[60px] object-cover'
                                    width={60}
                                    height={60}
                                />
                                <div className='text-white border-2 border-white w-[60px] h-[60px] flex items-center justify-center rounded-full text-2xl'><BsPlayFill /></div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 bg-footer-form rounded-xl p-6 sm:p-16 flex flex-col'>
                            <h2 className='text-primary font-semibold text-5xl text-center'>Speedside</h2>
                            <h3 className='text-3xl text-white font-medium text-center py-4'>Get Started</h3>
                            <form className='flex flex-col gap-5'>
                                <div className='flex flex-col gap-3'>
                                    <label htmlFor="" className='text-white font-medium'>Email</label>
                                    <input type="email" name="" id="" placeholder='Enter your email' className='placeholder-body-gray1 bg-white rounded-lg py-3 px-4 text-sm' />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <label htmlFor="" className='text-white font-medium'>Message</label>
                                    <textarea name="" id="" rows={3} placeholder='What are you say?' className='placeholder-body-gray1 bg-white rounded-lg py-3 px-4 text-sm'></textarea>
                                </div>
                                <button className='text-white bg-primary py-4 rounded-lg'>Get In Touch</button>
                            </form>
                            <span className='text-text-body-gray1 text-sm font-medium mt-2 self-end'>or <a href="#" className='text-white'>Whatsapp Chat</a></span>
                        </div>
                    </div>
                    <nav className='flex flex-col lg:flex-row justify-between gap-7 pt-14 lg:pt-28 text-center lg:text-start'>
                        <div className='flex flex-col items-center lg:items-start gap-7'>
                            <h3 className='text-white text-4xl font-semibold'>Speedside</h3>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[#F5F7FA] text-sm'>Copyright © 2023 Speedside Tech.</span>
                                <span className='text-[#F5F7FA] text-sm'>All rights reserved</span>
                            </div>
                            <div className='flex flex-row gap-3 items-center'>
                                <a href="#">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0007 7.46655C13.6832 7.46655 13.3923 7.47669 12.4821 7.51811C11.5736 7.55971 10.9535 7.70353 10.4109 7.91456C9.84969 8.13252 9.37359 8.42407 8.89928 8.89857C8.42461 9.37288 8.13305 9.84898 7.91438 10.41C7.70282 10.9528 7.55882 11.5731 7.51793 12.4812C7.47722 13.3914 7.46655 13.6824 7.46655 16C7.46655 18.3175 7.47686 18.6075 7.51811 19.5177C7.55989 20.4262 7.70371 21.0462 7.91456 21.5888C8.13269 22.1501 8.42425 22.6262 8.89875 23.1005C9.37288 23.5752 9.84898 23.8674 10.4099 24.0854C10.9528 24.2964 11.5731 24.4402 12.4814 24.4818C13.3916 24.5233 13.6823 24.5334 15.9996 24.5334C18.3173 24.5334 18.6073 24.5233 19.5175 24.4818C20.426 24.4402 21.0468 24.2964 21.5897 24.0854C22.1508 23.8674 22.6262 23.5752 23.1003 23.1005C23.575 22.6262 23.8665 22.1501 24.0852 21.589C24.295 21.0462 24.439 20.426 24.4817 19.5179C24.5226 18.6076 24.5332 18.3175 24.5332 16C24.5332 13.6824 24.5226 13.3916 24.4817 12.4814C24.439 11.5729 24.295 10.9528 24.0852 10.4102C23.8665 9.84898 23.575 9.37288 23.1003 8.89857C22.6256 8.4239 22.151 8.13234 21.5892 7.91456C21.0452 7.70353 20.4247 7.55971 19.5163 7.51811C18.606 7.47669 18.3163 7.46655 15.998 7.46655H16.0007ZM15.2351 9.00432C15.4623 9.00397 15.7158 9.00432 16.0006 9.00432C18.2791 9.00432 18.5491 9.0125 19.4489 9.05339C20.2809 9.09143 20.7324 9.23046 21.0332 9.34726C21.4315 9.50193 21.7154 9.68682 22.0139 9.98549C22.3125 10.2842 22.4974 10.5686 22.6525 10.9668C22.7693 11.2673 22.9085 11.7188 22.9463 12.5508C22.9872 13.4504 22.9961 13.7206 22.9961 15.998C22.9961 18.2754 22.9872 18.5456 22.9463 19.4451C22.9083 20.2772 22.7693 20.7287 22.6525 21.0292C22.4978 21.4274 22.3125 21.7109 22.0139 22.0094C21.7152 22.3081 21.4316 22.493 21.0332 22.6477C20.7328 22.765 20.2809 22.9037 19.4489 22.9417C18.5493 22.9826 18.2791 22.9915 16.0006 22.9915C13.722 22.9915 13.452 22.9826 12.5524 22.9417C11.7204 22.9033 11.2689 22.7643 10.9679 22.6475C10.5697 22.4928 10.2852 22.3079 9.98654 22.0093C9.68787 21.7106 9.50298 21.4269 9.34796 21.0284C9.23116 20.728 9.09196 20.2764 9.05409 19.4444C9.0132 18.5449 9.00502 18.2746 9.00502 15.9959C9.00502 13.7171 9.0132 13.4483 9.05409 12.5487C9.09213 11.7167 9.23116 11.2651 9.34796 10.9643C9.50263 10.5661 9.68787 10.2817 9.98654 9.983C10.2852 9.68433 10.5697 9.49944 10.9679 9.34441C11.2687 9.22708 11.7204 9.08841 12.5524 9.05019C13.3396 9.01463 13.6447 9.00397 15.2351 9.00219V9.00432ZM20.5557 10.4212C19.9904 10.4212 19.5317 10.8794 19.5317 11.4449C19.5317 12.0102 19.9904 12.4689 20.5557 12.4689C21.1211 12.4689 21.5797 12.0102 21.5797 11.4449C21.5797 10.8795 21.1211 10.4212 20.5557 10.4212ZM16.0007 11.6177C13.5806 11.6177 11.6184 13.5798 11.6184 16C11.6184 18.4201 13.5806 20.3813 16.0007 20.3813C18.4208 20.3813 20.3823 18.4201 20.3823 16C20.3823 13.5798 18.4208 11.6177 16.0007 11.6177ZM16.0007 13.1555C17.5715 13.1555 18.8451 14.4289 18.8451 16C18.8451 17.5708 17.5715 18.8444 16.0007 18.8444C14.4296 18.8444 13.1562 17.5708 13.1562 16C13.1562 14.4289 14.4296 13.1555 16.0007 13.1555Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5332 15.9881C24.5332 16.5651 24.4745 17.1414 24.3591 17.7032C24.2465 18.2516 24.0799 18.79 23.8615 19.3047C23.6482 19.8103 23.3836 20.2975 23.0744 20.7518C22.7698 21.2033 22.419 21.6269 22.0335 22.013C21.6473 22.3975 21.2222 22.7474 20.771 23.0532C20.3151 23.3603 19.8272 23.6245 19.3213 23.8388C18.8059 24.056 18.2662 24.2224 17.7183 24.3348C17.1558 24.4505 16.5774 24.5095 15.9995 24.5095C15.4211 24.5095 14.8428 24.4505 14.2811 24.3348C13.7323 24.2224 13.1927 24.056 12.6777 23.8388C12.1718 23.6245 11.6834 23.3603 11.2276 23.0532C10.7763 22.7474 10.3513 22.3975 9.96587 22.013C9.58003 21.6269 9.22915 21.2033 8.92414 20.7518C8.61663 20.2975 8.35159 19.8102 8.13743 19.3047C7.91906 18.79 7.75199 18.2516 7.63907 17.7032C7.5249 17.1414 7.46655 16.5651 7.46655 15.9881C7.46655 15.4105 7.52487 14.833 7.6391 14.2725C7.75203 13.7241 7.91909 13.1848 8.13747 12.671C8.35163 12.165 8.61666 11.6774 8.92418 11.223C9.22919 10.7711 9.58006 10.3484 9.9659 9.96183C10.3513 9.57734 10.7764 9.22828 11.2276 8.92287C11.6835 8.61453 12.1719 8.35035 12.6777 8.13563C13.1927 7.91797 13.7323 7.75115 14.2811 7.63965C14.8428 7.52482 15.4212 7.46655 15.9995 7.46655C16.5775 7.46655 17.1558 7.52482 17.7184 7.63965C18.2663 7.75118 18.8059 7.91801 19.3214 8.13563C19.8272 8.35032 20.3152 8.61453 20.771 8.92287C21.2223 9.22828 21.6473 9.57734 22.0336 9.96183C22.419 10.3484 22.7699 10.7711 23.0745 11.223C23.3836 11.6774 23.6482 12.1651 23.8615 12.671C24.0799 13.1848 24.2465 13.7241 24.3591 14.2725C24.4745 14.833 24.5332 15.4105 24.5332 15.9881ZM12.8901 9.40593C10.8579 10.3642 9.34119 12.2341 8.86824 14.4876C9.06036 14.4893 12.0972 14.5276 15.5961 13.5993C14.3348 11.3615 12.9872 9.53537 12.8901 9.40593ZM16.1999 14.7198C12.4476 15.8416 8.84699 15.7609 8.71783 15.7559C8.71573 15.8341 8.71199 15.9098 8.71199 15.988C8.71199 17.8575 9.41827 19.5618 10.5792 20.8505C10.5767 20.8467 12.571 17.3137 16.5036 16.0438C16.5986 16.0122 16.6953 15.9839 16.7912 15.9564C16.6083 15.5429 16.4086 15.1284 16.1999 14.7198ZM20.8122 10.5265C19.5292 9.39677 17.8446 8.71152 15.9995 8.71152C15.4074 8.71152 14.8327 8.78309 14.2823 8.9154C14.3915 9.06188 15.7603 10.8752 17.0066 13.1603C19.7563 12.1309 20.7943 10.5531 20.8122 10.5265ZM17.2879 17.1622C17.2717 17.1676 17.2554 17.1723 17.2396 17.1781C12.9398 18.6748 11.5357 21.6913 11.5205 21.7242C12.7577 22.685 14.3094 23.2646 15.9995 23.2646C17.0087 23.2646 17.97 23.0594 18.8446 22.6879C18.7367 22.0521 18.3134 19.8235 17.2879 17.1622ZM20.0718 22.023C21.7081 20.9204 22.8702 19.1695 23.1944 17.1414C23.0444 17.0931 21.0055 16.4486 18.6533 16.8252C19.6092 19.4482 19.9976 21.5844 20.0718 22.023ZM17.5675 14.2446C17.7367 14.5917 17.9005 14.9449 18.0517 15.2998C18.1055 15.4272 18.158 15.552 18.2092 15.6768C20.7127 15.3622 23.179 15.8915 23.2845 15.9131C23.2678 14.188 22.6498 12.6048 21.6273 11.3653C21.6136 11.3848 20.4448 13.0712 17.5675 14.2446Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5208 13.0051L15.5544 13.5587L14.9948 13.4909C12.9579 13.2311 11.1784 12.3498 9.66756 10.8696L8.92891 10.1352L8.73865 10.6776C8.33575 11.8865 8.59316 13.1633 9.43253 14.022C9.8802 14.4965 9.77948 14.5643 9.00725 14.2819C8.73865 14.1915 8.50363 14.1237 8.48124 14.1576C8.4029 14.2367 8.6715 15.2648 8.88414 15.6716C9.17513 16.2365 9.76828 16.7902 10.4174 17.1178L10.9658 17.3777L10.3167 17.389C9.68994 17.389 9.66756 17.4003 9.73471 17.6376C9.95854 18.372 10.8427 19.1516 11.8276 19.4906L12.5214 19.7278L11.9171 20.0894C11.0218 20.6091 9.96973 20.9029 8.91772 20.9255C8.41409 20.9368 8 20.982 8 21.0159C8 21.1289 9.36538 21.7616 10.16 22.0102C12.5438 22.7446 15.3753 22.4282 17.5017 21.1741C19.0126 20.2815 20.5235 18.5076 21.2286 16.7902C21.6091 15.875 21.9896 14.2028 21.9896 13.4006C21.9896 12.8808 22.0232 12.813 22.6499 12.1916C23.0192 11.83 23.3662 11.4346 23.4333 11.3216C23.5452 11.1069 23.534 11.1069 22.9633 11.299C22.012 11.638 21.8777 11.5928 22.3477 11.0843C22.6947 10.7228 23.1088 10.0674 23.1088 9.87536C23.1088 9.84146 22.9409 9.89796 22.7506 9.99964C22.5492 10.1126 22.1015 10.2821 21.7658 10.3838L21.1614 10.5759L20.613 10.203C20.3108 9.99964 19.8856 9.77367 19.6617 9.70588C19.0909 9.5477 18.218 9.57029 17.7032 9.75107C16.3042 10.2595 15.4201 11.5702 15.5208 13.0051Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6679 10.4995C23.4022 10.701 23.9805 11.2948 24.1768 12.0488C24.5335 13.4153 24.5335 16.2666 24.5335 16.2666C24.5335 16.2666 24.5335 19.1178 24.1768 20.4845C23.9805 21.2385 23.4022 21.8322 22.6679 22.0338C21.3371 22.4 16.0001 22.4 16.0001 22.4C16.0001 22.4 10.6632 22.4 9.3323 22.0338C8.59795 21.8322 8.01962 21.2385 7.82335 20.4845C7.4668 19.1178 7.4668 16.2666 7.4668 16.2666C7.4668 16.2666 7.4668 13.4153 7.82335 12.0488C8.01962 11.2948 8.59795 10.701 9.3323 10.4995C10.6632 10.1333 16.0001 10.1333 16.0001 10.1333C16.0001 10.1333 21.3371 10.1333 22.6679 10.4995ZM14.4001 13.8666V19.1999L18.6668 16.5333L14.4001 13.8666Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-8 lg:gap-32'>
                            <div className='flex flex-col gap-6 font-medium'>
                                <span className='text-white'>Support</span>
                                <ul className='flex flex-col gap-4 text-text-nav'>
                                    <li><a href="#">Help Centre</a></li>
                                    <li><a href="#">Account information</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-6 font-medium'>
                                <span className='text-white'>Help and Solution</span>
                                <ul className='flex flex-col gap-4 text-text-nav'>
                                    <li><a href="#">Talk to support</a></li>
                                    <li><a href="#">Support docs</a></li>
                                    <li><a href="#">System status</a></li>
                                    <li><a href="#">Covid responde</a></li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-6 font-medium'>
                                <span className='text-white'>Product</span>
                                <ul className='flex flex-col gap-4 text-text-nav'>
                                    <li><a href="#">Update</a></li>
                                    <li><a href="#">Security</a></li>
                                    <li><a href="#">Beta test</a></li>
                                    <li><a href="#">Pricing product</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </footer>
        </>
    )
}
