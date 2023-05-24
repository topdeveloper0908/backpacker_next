import { useState, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import Link from "next/link";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClose, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Destination from '@/component/destination'

export default function Header(props) {
    const { searchDropdown, setSearchDropdown } = props;
    const [headerDropdown, setHeaderDropdown] = useState(false);
    const [headerMenu, setHeaderMenu] = useState(false);
    const [headerSearch, setHeaderSearch] = useState(false);
    const [popularMenu, setPopularMenu] = useState(false);
    const [searchWord, setSearchWord] = useState('');

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

    function searchDestination(e) {
        var word = e.target.value;
        setSearchWord(word);
    }

    return (
        <header className={classNames('relative mainHeader border-b border-solid border-grey20')} id="mainHeader" ref={stickyHeader}>
            <div className={classNames("flex items-center justify-between py-5 px-5", {
                'bg-white': (headerDropdown || headerMenu || headerSearch),
            })}>
                <FontAwesomeIcon className={classNames("md:hidden hover:text-purple block", { 'hidden': headerMenu })} icon={faBars} width={20} height={20} onClick={() => { setHeaderSearch(false); setHeaderMenu(true); }} />
                <FontAwesomeIcon className={classNames("md:hidden block hover:text-purple", { 'hidden': !headerMenu })} icon={faClose} width={20} height={20} onClick={() => { setHeaderMenu(false); }} />
                <div className='flex'>
                    <Image
                        src="/assets/img/logo-dark.svg"
                        alt="Logo"
                        width={154}
                        height={32}
                        priority
                    />
                    <span className='uppercase p-2 text-purple bg-purple40 font-bold text-xs leading-custom -tracking-tighter ml-4 rounded'>Tours</span>
                </div>
                <div className='md:flex hidden header-search relative w-[384px] z-30'>
                    <FontAwesomeIcon className={classNames('absolute ml-4 mt-3', {
                        'text-purple': searchDropdown
                    })} icon={faSearch} width={18} height={18} />
                    <input onChange={(e) => searchDestination(e)} value={searchWord} onFocus={() => setSearchDropdown(true)} type="text" className="peer main-search flex-1 bg-white text-base leading-6 px-10  py-2 border-2 border-solid border-grey20 rounded-lg hover:border-grey40 hover:cursor-pointer hover:text-grey" placeholder="Where do you want to go?" />
                    <button className={classNames("absolute left-auto right-0 pt-px mr-4 mt-3 hover:text-purple", {
                        'hidden': !searchDropdown
                    })} onClick={() => setSearchDropdown(false)}>
                        <FontAwesomeIcon icon={faClose} width={18} height={18} />
                    </button>
                    <div className={classNames('absolute w-full top-full rounded-lg bg-white mt-2 pb-2', {
                        'hidden': !searchDropdown
                    })}>
                        <div className='flex flex-col h-[424px] custom-scrollbar overflow-y-scroll'>
                            <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                                <p className='text-comment text-grey'>Melbourne</p>
                                <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                            </Link>
                            <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                                <p className='text-comment text-grey'>Melbourne</p>
                                <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                            </Link>
                            <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                                <p className='text-comment text-grey'>Melbourne</p>
                                <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                            </Link>
                            <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                                <p className='text-comment text-grey'>Melbourne</p>
                                <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                            </Link>
                            <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                                <p className='text-comment text-grey'>Melbourne</p>
                                <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                            </Link>
                            <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                                <p className='text-comment text-grey'>Melbourne</p>
                                <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                            </Link>
                            <Link href='#' className='block group px-4 py-2 hover:bg-custom'>
                                <p className='text-comment text-grey'>Melbourne</p>
                                <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                            </Link>
                        </div>
                        <div className='flex items-center px-6 py-2 text-comment text-grey border border-l-0 border-r-0 border-solid border-grey20'>
                            <FontAwesomeIcon icon={faSearch} width={18} height={18} className='mr-3' />
                            Search for
                            <span className='font-bold ml-3'>{searchWord}</span>
                        </div>
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
                    <Link href='#' className='py-2 pr-3 pl-4 md:flex hidden items-center text-grey60 hover:text-purple '>
                        <FontAwesomeIcon icon={faArrowLeft} width={18} height={18} className='mr-1' />
                        <span className='text-base leading-6 font-semibold ml-2'>
                            Back to Guides
                        </span>
                    </Link>
                </div>
                <FontAwesomeIcon className='md:hidden hover:text-purple' icon={faSearch} width={20} height={20} onClick={() => { setHeaderMenu(false); setHeaderSearch(true); }} />
            </div>
            <div className={
                classNames('absolute left-0 right-0 top-full border border-solid border-t border-grey20 bg-white z-30', {
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
                classNames('absolute left-0 right-0 top-full border border-solid border-t border-grey20 shadow-md bg-white z-30', {
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
                classNames('flex flex-col fixed left-0 right-0 top-0 h-full bg-white z-30', {
                    'hidden': !headerMenu
                })
            }>
                <div className='flex items-center justify-between border-b border-solid border-grey20 px-5 py-6'>
                    <FontAwesomeIcon className='hover:text-purple mr-3' onClick={() => { setHeaderMenu(false); }} icon={faClose} width={18} height={18} />
                    <h5>Menu</h5>
                    <FontAwesomeIcon className='text-white mr-3' icon={faClose} width={18} height={18} />
                </div>
                <div className='flex flex-col items-start justify-between flex-1 mx-4 mt-4 mb-5'>
                    <Link className='font-semibold text-base leading-6 text-grey hover:text-purple' href="/">Back to Guides</Link>
                    <Link className='p-[10px] bg-grey20 rounded-full mr-6' href="/">
                        <Image
                            src="/assets/img/instagram.svg"
                            alt="Icon"
                            width={20}
                            height={20}
                            priority
                        />
                    </Link>
                </div>
                <div className="flex flex-col mx-4 mb-4 pt-5 border-t border-solid border-grey20">
                    <Link className='block text-comment-sm text-grey60 hover:text-purple mr-4' href="/">Cookie Policy</Link>
                    <Link className='block md:my-0 my-4 text-comment-sm text-grey60 hover:text-purple mr-4' href="/">Terms & Conditions</Link>
                    <span className='text-comment-sm text-grey60 mr-4'>© 2023 Backpackers.com.au</span>
                </div>
            </div>
            <div className={
                classNames('fixed left-0 right-0 top-0 h-full bg-white z-30', {
                    'hidden': !headerSearch
                })
            }>
                <div>
                    <div className='flex items-center border-b border-solid border-grey20 px-5 py-6'>
                        <FontAwesomeIcon className='hover:text-purple mr-3' onClick={() => { setPopularMenu(true); setSearchWord(''); setHeaderSearch(false); }} icon={faArrowLeft} width={18} height={18} />
                        <input onChange={(e) => searchDestination(e)} type="text" className="main-search flex-1 bg-white text-base leading-6" value={searchWord} placeholder="Where to?" />
                        <FontAwesomeIcon className={classNames('hover:text-purple', {
                            'hidden': popularMenu
                        })} onClick={() => { setSearchWord(''); setPopularMenu(true); }} icon={faClose} width={18} height={18} />
                    </div>
                    <div className={classNames({
                        'block': popularMenu,
                        'hidden': !popularMenu
                    })}>
                        <div className='p-4 text-xs font-bold leading-custom -tracking-tighter text-grey uppercase border-b border-solid border-grey20'>Popular DEstinations</div>
                        <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                            <p className='text-comment text-grey'>Melbourne</p>
                            <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                        </Link>
                        <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                            <p className='text-comment text-grey'>Melbourne</p>
                            <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                        </Link>
                        <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                            <p className='text-comment text-grey'>Melbourne</p>
                            <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                        </Link>
                        <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                            <p className='text-comment text-grey'>Melbourne</p>
                            <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                        </Link>
                    </div>
                    <div className={classNames({
                        'block': !popularMenu,
                        'hidden': popularMenu
                    })}>
                        <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                            <p className='text-comment text-grey'>Melbourne</p>
                            <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                        </Link>
                        <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                            <p className='text-comment text-grey'>Melbourne</p>
                            <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                        </Link>
                        <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                            <p className='text-comment text-grey'>Melbourne</p>
                            <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                        </Link>
                        <Link href='#' className='block group border-b border-solid border-grey20 px-4 py-2 hover:bg-custom'>
                            <p className='text-comment text-grey'>Melbourne</p>
                            <p className='text-comment-sm text-grey60 group-hover:text-grey'>Victoria, Australia</p>
                        </Link>
                        <div className='px-4 py-2 flex items-center text-comment text-grey border-b border-solid border-grey20'>
                            <FontAwesomeIcon className='mr-3' icon={faSearch} width={18} height={18} />
                            <span>Search For</span>
                            <span className='font-semibold ml-3'>{searchWord}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}
