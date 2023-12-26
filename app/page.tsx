'use client'

import Image from 'next/image'
import { BsChevronLeft, BsChevronRight, BsPlay } from "react-icons/bs";
import HeaderImg from '../public/img/header-img.png'
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
        <div className="flex flex-row items-center gap-4 absolute pt-10 ml-36">
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
            <nav className='container mx-auto flex flex-row items-center justify-between py-5 px-20'>
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
            <header className='container mx-auto flex flex-row items-center justify-between px-20 pb-20'>
                <div className='w-1/2 flex flex-col gap-5'>
                    <h1 className='font-bold text-6xl text-text-h1 leading-tight'>Accelerate Your Business with Speedside</h1>
                    <svg width="487" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#FA875B" stroke-width="8" stroke-linecap="round" />
                    </svg>
                    <p className='text-black font-medium text-lg'>At Speedside, we accelerate innovation. Our commitment is simple: fast, affordable, and reliable solutions. Experience the power of innovation at the speed of thought.</p>
                    <div className='flex flex-row items-center gap-7'>
                        <a href="#" className='text-white bg-primary rounded-full px-5 py-3'>Get Started</a>
                        <a href="#" className='flex flex-row items-center gap-3'>
                            <div className='rounded-full w-7 h-7 flex items-center justify-center border border-black'><BsPlay /></div>
                            <span>Learn More</span>
                        </a>
                    </div>
                </div>
                <div className='w-1/2'>
                    <Image
                        src={HeaderImg}
                        alt='header image'
                    />
                </div>
            </header>
            <section className='relative py-14'>
                <Image
                    src={ServicesBg}
                    alt='services bg'
                    className='absolute top-0 left-0 -z-10'
                />
                <div className='container mx-auto flex flex-col gap-16 px-10'>
                    <h2 className='text-5xl text-text-h2-purple text-center'>
                        <span className='font-bold'>What We Do</span><br />
                        <span className='font-light'>For Your Business</span>
                    </h2>
                    <div className='grid grid-cols-4 gap-7'>
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
            <section className='container mx-auto px-20 flex flex-col gap-7 py-20'>
                <div className='flex flex-row items-center justify-between gap-4'>
                    <h2 className='text-5xl font-semibold text-text-h2-black leading-snug w-1/3'>Our Support Package</h2>
                    <p className='font-medium text-text-body-gray1 w-1/3'>At Speedside Labs, our commitment to your success doesn't end at project completion. Dive into the tailored support experience offered by our Support Package.</p>
                    <a href="#" className='text-white bg-primary rounded-full px-5 py-3 whitespace-nowrap'>Get Started</a>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    <div className='flex flex-col gap-5'>
                        <Image
                            src={Package1Img}
                            alt='package1 image'
                        />
                        <h3 className='text-text-h3 font-semibold text-3xl'>Documentation</h3>
                        <p className='text-text-body-gray1 font-medium'>Receive detailed and user-friendly documentation that acts as your go-to resource, guiding your team through the functionalities of your solution.</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Image
                            src={Package2Img}
                            alt='package2 image'
                        />
                        <h3 className='text-text-h3 font-semibold text-3xl'>Maintenance & Support</h3>
                        <p className='text-text-body-gray1 font-medium'>Our dedicated support team is at your service. We proactively address issues, conduct updates, and ensure your solution operates at peak performance.</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Image
                            src={Package3Img}
                            alt='package3 image'
                        />
                        <h3 className='text-text-h3 font-semibold text-3xl'>Knowledge Transfer</h3>
                        <p className='text-text-body-gray1 font-medium'>Our experts provide hands-on training, empowering your team to handle day-to-day operations confidently.</p>
                    </div>
                </div>
            </section>
            <section className='relative py-14'>
                <Image
                    src={WorkBg}
                    alt='work bg'
                    className='absolute top-0 right-0 -z-10'
                />
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-row items-center justify-between container mx-auto px-10'>
                        <h2 className='text-5xl text-text-h2-purple'>
                            <span className='font-bold'>Our Recent Work</span><br />
                            <span className='font-light'>By Speedside Lab</span>
                        </h2>
                        <p className='text-text-body-purple w-2/5'>Welcome to our portfolio, where innovation meets execution. Explore a collection of projects that showcase the diversity and excellence of Speedside Labs.</p>
                    </div>
                    <div className='relative'>
                        <Carousel
                            // ssr={true}
                            responsive={responsive}
                            arrows={false}
                            renderButtonGroupOutside={true}
                            customButtonGroup={<ButtonGroup />}
                            sliderClass='gap-10 !ml-52'
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
                <div className='container mx-auto flex flex-row px-20 py-36 gap-20 items-start'>
                    <Image
                        src={AboutImg}
                        alt='about image'
                        className='w-1/2'
                    />
                    <div className='w-1/2 flex flex-col text-text-body-bluegray'>
                        <span className='text-[#D97706] font-medium mb-2'>Speedside Tech</span>
                        <h2 className='text-4xl font-bold mb-5'>Our Commitment to You</h2>
                        <p className='mb-7'>At Speedside Labs, we redefine the software experience with a commitment to three core principles</p>
                        <div className='grid grid-cols-2 gap-10'>
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
        </>
    )
}
