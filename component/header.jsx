import { useState, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import Link from "next/link";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClose, faBars } from '@fortawesome/free-solid-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Destination from '@/component/destination'

export default function Header({ searchVisiable = true }) {
    const [headerDropdown, setHeaderDropdown] = useState(false);
    const [headerMenu, setHeaderMenu] = useState(false);
    const [headerSearch, setHeaderSearch] = useState(false);
    const [searchDropdown, setSearchDropdown] = useState(false);
    const [headerSearchDropdown, setHeaderSearchDropdown] = useState(false);

    const stickyHeader = useRef()
    useLayoutEffect(() => {
        const mainHeader = document.getElementById('mainHeader')
        let fixedTop = stickyHeader.current.offsetTop
        const fixedHeader = () => {
            if (window.pageYOffset > fixedTop) {
                mainHeader.classList.add('fixedTop')
            } else {
                mainHeader.classList.remove('fixedTop')
            }
        }
        window.addEventListener('scroll', fixedHeader)
    }, [])

    return (
        <header className='relative mainHeader border-b border-solid border-grey20' id="mainHeader" ref={stickyHeader}>
            <div className={classNames("flex items-center justify-between py-4 md:px-10 px-5", {
                'bg-white': (headerDropdown || headerMenu || headerSearch),
            })}>
                <FontAwesomeIcon className={classNames("md:hidden hover:text-purple block", { 'hidden': headerMenu })} icon={faBars} width={20} height={20} onClick={() => { setHeaderSearch(false); setHeaderMenu(true); }} />
                <FontAwesomeIcon className={classNames("md:hidden block hover:text-purple", { 'hidden': !headerMenu })} icon={faClose} width={20} height={20} onClick={() => { setHeaderMenu(false); }} />
                <Image
                    src="/assets/img/logo-dark.svg"
                    alt="Logo"
                    width={154}
                    height={32}
                    priority
                />
                <div className='md:flex hidden header-search relative w-[384px]'>
                    <FontAwesomeIcon className='absolute ml-4 mt-3 hover:text-purple' icon={faSearch} width={20} height={20} />
                    <input onFocus={() => setSearchDropdown(true)} type="text" className="peer main-search flex-1 bg-white text-base leading-6 px-10  py-2 border-2 border-solid border-grey20 rounded-lg hover:border-grey40 hover:cursor-pointer hover:text-grey" placeholder="Where do you want to go?" />
                    <button className="absolute left-auto right-0 pt-px mr-4 mt-3" onClick={() => setSearchDropdown(false)}>
                        <FontAwesomeIcon icon={faClose} width={18} height={18} />
                    </button>
                    <div className={classNames("absolute top-full md:mt-2 rounded-xl w-full search-dropdown shadow-xl bg-white p-6 z-50", {
                        'hidden': !searchDropdown
                    })}>
                        <h6 className='font-bold text-xs leading-3 text-grey60 tracking-tight uppercase'>Popular Destinations</h6>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Sydney, New South Wales</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                    </div>
                </div>
                <div className='header-menu items-center content-center md:flex hidden'>
                    <button onClick={() => setHeaderDropdown(!headerDropdown)} className={classNames(
                        'flex items-center text-base leading-6 font-semibold  rounded-xl pl-4 pr-3 py-2 btn btn-ghost', {
                        'text-grey bg-custom': headerDropdown,
                        'border-transparent': !headerDropdown
                    }
                    )}>
                        Destinations
                        <Image
                            src="/assets/img/angle.svg"
                            alt="Icon"
                            className={classNames("ml-2", {
                                'rotate-180': headerDropdown
                            })}
                            width={8}
                            height={4}
                            priority
                        />
                    </button>
                    <button className='text-base leading-6 font-semibold px-3 py-2 text-grey60 hover:text-purple'>
                        Guides
                    </button>
                </div>
                <FontAwesomeIcon className='md:hidden hover:text-purple' icon={faSearch} width={20} height={20} onClick={() => { setHeaderMenu(false); setHeaderSearch(true); }} />
            </div>
            <div className={
                classNames('absolute left-0 right-0 top-full border border-solid border-t border-grey20 shadow-xl bg-white z-30', {
                    'hidden': !headerDropdown
                })
            }>
                <div className="px-10">
                    <div className="flex flex-row space-x-10">
                        <div className="lg:basis-1/4 basis-1/3 flex flex-col items-start pt-10 border border-solid border-l-0 border-t-0 border-b-0 border-grey20 pb-4 w-full">
                            <Link className='text-base leading-6 font-semibold border border-l-0 border-r-0 border-t-0 border-solid border-transparent text-grey60 hover:border-grey hover:text-grey mb-6' href="/">Victoria</Link>
                            <Link className='text-base leading-6 font-semibold border border-l-0 border-r-0 border-t-0 border-solid border-transparent text-grey60 hover:border-grey hover:text-grey mb-6' href="/">New South Wales</Link>
                            <Link className='text-base leading-6 font-semibold border border-l-0 border-r-0 border-t-0 border-solid border-transparent text-grey60 hover:border-grey hover:text-grey mb-6' href="/">Western Australia</Link>
                            <Link className='text-base leading-6 font-semibold border border-l-0 border-r-0 border-t-0 border-solid border-transparent text-grey60 hover:border-grey hover:text-grey mb-6' href="/">South Australia</Link>
                            <Link className='text-base leading-6 font-semibold border border-l-0 border-r-0 border-t-0 border-solid border-transparent text-grey60 hover:border-grey hover:text-grey mb-6' href="/">Queensland</Link>
                            <Link className='text-base leading-6 font-semibold border border-l-0 border-r-0 border-t-0 border-solid border-transparent text-grey60 hover:border-grey hover:text-grey mb-6' href="/">Tasmania</Link>
                            <Link className='text-base leading-6 font-semibold border border-l-0 border-r-0 border-t-0 border-solid border-transparent text-grey60 hover:border-grey hover:text-grey mb-6' href="/">Nothern Territory</Link>
                            <Link className='text-base leading-6 font-semibold border border-l-0 border-r-0 border-t-0 border-solid border-transparent text-grey60 hover:border-grey hover:text-grey mb-6' href="/">Australia Capital Territory</Link>
                        </div>
                        <div className='lg:basis-3/4 basis-2/3 lg:w-[75%] w-[66.6%]'>
                            <h3 className='my-10'>Popular destinations</h3>
                            <Swiper
                                // install Swiper modules
                                spaceBetween={24}
                                breakpoints={{
                                    // when window width is >= 768px
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    }
                                }}>
                                <SwiperSlide>
                                    <Destination img={"/assets/home/destination.png"} title={"Location"} subtitle={"State"}></Destination>
                                    <Destination img={"/assets/home/destination.png"} title={"Location"} subtitle={"State"}></Destination>
                                    <Destination img={"/assets/home/destination.png"} title={"Location"} subtitle={"State"}></Destination>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Destination img={"/assets/home/destination.png"} title={"Location"} subtitle={"State"}></Destination>
                                    <Destination img={"/assets/home/destination.png"} title={"Location"} subtitle={"State"}></Destination>
                                    <Destination img={"/assets/home/destination.png"} title={"Location"} subtitle={"State"}></Destination>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Destination img={"/assets/home/destination.png"} title={"Location"} subtitle={"State"}></Destination>
                                    <Destination img={"/assets/home/destination.png"} title={"Location"} subtitle={"State"}></Destination>
                                    <Destination img={"/assets/home/destination.png"} title={"Location"} subtitle={"State"}></Destination>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className={
                classNames('absolute left-0 right-0 top-full border border-solid border-t border-grey20 shadow bg-white z-30', {
                    'hidden': !headerMenu
                })
            }>
                <div className='flex flex-col items-start m-4'>
                    <Link className='font-semibold text-base leading-6 text-grey hover:text-purple' href="/">Destinations</Link>
                    <Link className='font-semibold text-base leading-6 text-grey hover:text-purple my-5' href="/">Travel guides</Link>
                    <Link className='font-semibold text-base leading-6 text-grey hover:text-purple' href="/">About us</Link>
                </div>
            </div>
            <div className={
                classNames('absolute left-0 right-0 top-0 md:border border-solid border-grey20 bg-white z-30', {
                    'hidden': !headerSearch
                })
            }>
                <div className='flex relative max-w-[642px] z-20 sm:pb-3 mt-2 border-b border-solid border-grey20 shadow-sm'>
                    <FontAwesomeIcon className='absolute ml-5 mt-6 hover:text-purple' icon={faSearch} width={18} height={18} />
                    <input onFocus={() => setHeaderSearchDropdown(true)} type="text" className="main-search flex-1 bg-white text-base leading-6 px-12 py-5" placeholder="Where do you want to go?" />
                    <FontAwesomeIcon onClick={() => { setHeaderSearch(false); setHeaderSearchDropdown(false) }} className='absolute left-auto right-0 pt-px mr-5 mt-6 hover:text-purple' icon={faClose} width={20} height={20} />
                    <div className={classNames("absolute top-full w-full search-dropdown border-t border-solid border-grey20 bg-white px-6 pb-6 shadow", {
                        'hidden': !headerSearchDropdown
                    })}>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Sydney, New South Wales</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                        <Link href="/" className='block text-comment text-grey60 mt-4 hover:text-purple'>Location</Link>
                    </div>
                </div>
            </div>
        </header >
    )
}
