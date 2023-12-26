import Image from 'next/image'
import { BsPlay } from "react-icons/bs";
import HeaderImg from '../public/img/header-img.png'
import UIUXImg from '../public/img/uiux.png'
import WebdevImg from '../public/img/webdev.png'
import MobiledevImg from '../public/img/mobiledev.png'
import ConsultantImg from '../public/img/consultant.png'
import ServicesBg from '../public/img/services-bg.png'
import Package1Img from '../public/img/package1.png'
import Package2Img from '../public/img/package2.png'
import Package3Img from '../public/img/package3.png'

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
                <div>
                    <div className='flex flex-row items-center justify-between container mx-auto px-20'>
                        <h2 className='text-5xl text-text-h2-purple'>
                            <span className='font-bold'>Our Recent Work</span><br />
                            <span className='font-light'>By Speedside Lab</span>
                        </h2>
                        <p className='text-text-body-purple w-2/5'>Welcome to our portfolio, where innovation meets execution. Explore a collection of projects that showcase the diversity and excellence of Speedside Labs.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
