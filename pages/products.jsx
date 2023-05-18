import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faEllipsisH, faCaretDown, faClose } from '@fortawesome/free-solid-svg-icons'

import SlideToggle from "react-slide-toggle";

//Slider
import Slider from '@material-ui/core/Slider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui';

import RootLayout from '@/component/layout';
import Rating from '@/component/rating';
import classNames from 'classnames';

export default function Products() {
    const priceRef = useRef(null);
    const timeRef = useRef(null);
    const ratingRef = useRef(null);
    const moreRef = useRef(null);

    // Price Filter
    const [priceFilterShow, setPriceFilterShow] = useState(false);
    const [filterPrice, setFilterPrice] = useState([24, 80]);
    const [priceSelected, setPriceSelected] = useState(false);
    // Time Filter
    const [timeFilterShow, setTimeFilterShow] = useState(false);
    const [filterTime, setFilterTime] = useState(null);
    const [timeSelected, setTimeSelected] = useState(false);

    // Rating
    const [ratingFilterShow, setRatingFilterShow] = useState(false);
    const [filterRating, setFilterRating] = useState(null);
    const [ratingSelected, setRatingSelected] = useState(false);

    // More
    const [moreFilterShow, setMoreFilterShow] = useState(false);
    const [filtermore, setFilterMore] = useState(null);
    const [moreSelected, setMoreSelected] = useState(false);


    const muiTheme = getMuiTheme({
        slider: {
            trackColor: "yellow",
            selectionColor: "white"
        }
    });
    function priceSelector(event, newValue) {
        setFilterPrice(newValue);
        setPriceSelected(true);
    }
    function clearFilterPrice() {
        setFilterPrice([0, 0]);
        setPriceSelected(false);
    }
    function clearFilterRating() {
        setFilterRating(null);
        setRatingSelected(false);
        setRatingFilterShow(false);
    }
    function clearFilterMore() {
        setFilterRating(null);
        setRatingSelected(false);
        setRatingFilterShow(false);
    }
    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                setPriceFilterShow(false);
                setTimeFilterShow(false);
                setRatingFilterShow(false);
                setMoreFilterShow(false);
            }
        };
        window.addEventListener("mousedown", handleOutSideClick);
        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [priceRef]);

    return (
        <RootLayout>
            <seciton className='border-t border-solid border-grey40'>
                <div className='container mb-10'>
                    <div className='md:pt-20 pt-6'>
                        <h1 className='text-grey products-page-title'><span className='font-bold'>Melbourne </span><span className='font-normal'>Air, Helicopter & Balloon Tours</span></h1>
                        <p className='text-comment text-grey60 md:mb-10 mb-6'>14 experiences found</p>
                    </div>
                </div>
            </seciton>
            <section>
                <div className='container'>
                    <div className='flex lg:space-x-14'>
                        <div className='lg:basis-1/3 lg:blcok lg:block hidden w-full product-sidebar border border-l-0 border-r-0 border-solid border-grey20 py-6'>
                            <h6 className='text-base text-grey leading-6 mb-4 font-semibold'>Thing’s to do</h6>
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible">
                                        <div className='flex items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h4 className='my-5 my-collapsible__toggle'>Price</h4>
                                            <Image
                                                src="/assets/products/arrow_down.svg"
                                                alt="Icon"
                                                className={classNames("mr-2", {
                                                    'rotate-180': progress
                                                })}
                                                width={12}
                                                height={7.1}
                                                priority
                                            />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                        <div className='lg:basis-2/3 w-full product-sidebar border border-l-0 border-r-0 border-solid border-grey20 py-6'>
                            <div className='filter-bar flex justify-between mb-6'>
                                <div className='flex items-center ml-4'>
                                    <div className={classNames('flex relative items-center mr-5 p-2 hover:cursor-pointer border border-solid', {
                                        ' hover:text-purple border-transparent': !priceSelected,
                                        '  border-grey rounded-lg': priceSelected,
                                    })} ref={priceRef}>
                                        <Image
                                            src="/assets/products/dollar-dark.svg"
                                            alt="Icon"
                                            width={20}
                                            height={20}
                                            priority
                                        />
                                        {
                                            priceSelected ?
                                                <><span className='mx-2 font-semibold'>
                                                    {'A$' + filterPrice[0] + '-A$' + filterPrice[1]}
                                                </span><FontAwesomeIcon className='text-grey hover:text-purple' icon={faClose} width={17} height={17} onClick={clearFilterPrice}></FontAwesomeIcon></>
                                                :
                                                <span className='text-base leading-6 font-semibold  ml-2' onClick={() => setPriceFilterShow(true)}>Price</span>
                                        }

                                        <div className={classNames('price-dropdown absolute top-full left-0 mt-1 border border-solid border-grey40 rounded-lg bg-white shadow-xl z-10', {
                                            'hidden': !priceFilterShow
                                        })}>
                                            <div className='px-6 pt-6 pb-2'>
                                                <div className='flex items-center mb-4'>
                                                    <div className='relative w-[134px]'>
                                                        <input type='number' className='py-2 pr-2 pl-16 rounded border border-solid border-grey20 text-right w-full'></input>
                                                        <span className='absolute left-0 mt-2 pt-px ml-2 font-semibold text-base leading-6 text-grey60'>AUD $</span>
                                                    </div>
                                                    <span className='font-bold text-grey60 text-sm mx-2'>TO</span>
                                                    <div className='relative w-[134px]'>
                                                        <input type='number' className='py-2 pr-2 pl-16 rounded border border-solid border-grey20 text-right w-full'></input>
                                                        <span className='absolute left-0 mt-2 pt-px ml-2 font-semibold text-base leading-6 text-grey60'>AUD $</span>
                                                    </div>
                                                </div>
                                                <MuiThemeProvider muiTheme={muiTheme}>
                                                    <Slider
                                                        min={20}
                                                        max={100}
                                                        value={filterPrice}
                                                        onChange={priceSelector}
                                                        valueLabelDisplay="auto"
                                                    />
                                                </MuiThemeProvider>
                                            </div>
                                            <div className='p-6 border-t border-solid border-grey20 flex justify-between'>
                                                <button className='btn btn-ghost' onClick={clearFilterPrice}>Clear</button>
                                                <button className='btn btn-primary'>Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center mr-5 p-2 hover:text-purple hover:cursor-pointer relative'>
                                        <Image
                                            src="/assets/products/clock-dark.svg"
                                            alt="Icon"
                                            width={20}
                                            height={20}
                                            priority
                                        />
                                        <span className='text-base leading-6 font-semibold  ml-2'>Time</span>
                                        <div className={classNames('time-dropdown absolute top-full left-0 mt-1 border border-solid border-grey40 rounded-lg bg-white shadow-xl z-10', {
                                        })}>
                                            <div className='py-6 w-[291px]'>
                                                <h6 className='px-6 font-bold text-xs text-grey60 leading-4 tracking-tight mb-4'>TIME OF DAY</h6>
                                                <div className='flex text-grey60 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-2 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>Morning (6)<br />6am—12pm </p>
                                                </div>
                                                <div className='flex text-grey60 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-2 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>Afternoon (4)<br />12pm—5pm </p>
                                                </div>
                                                <div className='flex text-grey40 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-4 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>Evening (0)<br />5pm—12am </p>
                                                </div>
                                                <h6 className='px-6 font-bold text-xs text-grey60 leading-4 tracking-tight my-4'>DURATION</h6>
                                                <div className='flex text-grey40 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-2 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>Up to 1 hour (0) </p>
                                                </div>
                                                <div className='flex text-grey60 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-2 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>1 to 4 hours (6) </p>
                                                </div>
                                                <div className='flex text-grey60 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-4 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>4 hours to 1 day (1) </p>
                                                </div>
                                                <div className='flex text-grey40 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-4 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>1 to 3 days(0) </p>
                                                </div>
                                                <div className='flex text-grey40 hover:text-grey  hover:bg-[#f9f9f9] px-6  py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>3+ days (0)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classNames('flex relative items-center mr-5 p-2 hover:cursor-pointer border border-solid', {
                                        ' hover:text-purple border-transparent': !ratingSelected,
                                        '  border-grey rounded-lg': ratingSelected,
                                    })} ref={ratingRef}>
                                        <Image
                                            src="/assets/products/star-dark.svg"
                                            alt="Icon"
                                            width={20}
                                            height={20}
                                            priority
                                        />
                                        {
                                            ratingSelected ?
                                                <><span className='mx-2 font-semibold'>
                                                    {filterRating}
                                                </span><FontAwesomeIcon className='text-grey hover:text-purple' icon={faClose} width={17} height={17} onClick={clearFilterRating}></FontAwesomeIcon></>
                                                :
                                                <span className='text-base leading-6 font-semibold  ml-2' onClick={() => setRatingFilterShow(true)}>Rating</span>
                                        }

                                        <div className={classNames('price-dropdown absolute top-full left-0 mt-1 border border-solid border-grey40 rounded-lg bg-white shadow-xl z-10', {
                                            'hidden': !ratingFilterShow
                                        })}>
                                            <div className='p-6 w-[234px]'>
                                                <div className='flex pb-2' onClick={() => { setFilterRating('5 Stars'); setRatingSelected(true) }}>
                                                    <input type='radio' name='ratingfilter' className='mr-2'></input>
                                                    <Rating active={5} size={20}></Rating>
                                                </div>
                                                <div className='flex py-2 items-center' onClick={() => { setFilterRating('4 Stars & up'); setRatingSelected(true) }}>
                                                    <input type='radio' name='ratingfilter' className='mr-2'></input>
                                                    <Rating active={4} size={20}></Rating>
                                                    <span className='text-comment text-grey60 ml-2'>& Up</span>
                                                </div>
                                                <div className='flex py-2 items-center' onClick={() => { setFilterRating('3 Stars & up'); setRatingSelected(true) }}>
                                                    <input type='radio' name='ratingfilter' className='mr-2'></input>
                                                    <Rating active={3} size={20}></Rating>
                                                    <span className='text-comment text-grey60 ml-2'>& Up</span>
                                                </div>
                                                <div className='flex py-2 items-center' onClick={() => { setFilterRating('2 Stars & up'); setRatingSelected(true) }}>
                                                    <input type='radio' name='ratingfilter' className='mr-2'></input>
                                                    <Rating active={2} size={20}></Rating>
                                                    <span className='text-comment text-grey60 ml-2'>& Up</span>
                                                </div>
                                                <div className='flex py-2 items-center' onClick={() => { setFilterRating('1 Stars & up'); setRatingSelected(true) }}>
                                                    <input type='radio' name='ratingfilter' className='mr-2'></input>
                                                    <Rating active={1} size={20}></Rating>
                                                    <span className='text-comment text-grey60 ml-2'>& Up</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classNames('flex relative items-center mr-5 p-2 hover:cursor-pointer border border-solid', {
                                        ' hover:text-purple border-transparent': !moreSelected,
                                        '  border-grey rounded-lg': moreSelected,
                                    })} ref={moreRef}>
                                        <FontAwesomeIcon icon={faEllipsisH} width={20} height={20}></FontAwesomeIcon>
                                        {
                                            moreSelected ?
                                                <><span className='mx-2 font-semibold'>
                                                    {filterMore}
                                                </span><FontAwesomeIcon className='text-grey hover:text-purple' icon={faClose} width={17} height={17} onClick={clearFilterMore}></FontAwesomeIcon></>
                                                :
                                                <span className='text-base leading-6 font-semibold ml-2' onClick={() => setMoreFilterShow(true)}>More</span>
                                        }
                                        <div className={classNames('time-dropdown absolute top-full left-0 mt-1 border border-solid border-grey40 rounded-lg bg-white shadow-xl z-10', {
                                            'hidden': !moreFilterShow
                                        })}>
                                            <div className='py-6 w-[291px]'>
                                                <div className='flex text-grey40 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-2 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>Up to 1 hour (0) </p>
                                                </div>
                                                <div className='flex text-grey60 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-2 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>1 to 4 hours (6) </p>
                                                </div>
                                                <div className='flex text-grey60 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-4 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>4 hours to 1 day (1) </p>
                                                </div>
                                                <div className='flex text-grey40 hover:text-grey  hover:bg-[#f9f9f9] px-6 mb-4 py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>1 to 3 days(0) </p>
                                                </div>
                                                <div className='flex text-grey40 hover:text-grey  hover:bg-[#f9f9f9] px-6  py-2'>
                                                    <div>
                                                        <input type='checkbox'></input>
                                                    </div>
                                                    <p className='text-comment ml-2'>3+ days (0)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center mr-5 p-2 text-grey60 hover:text-purple hover:cursor-pointer'>
                                    <span className='text-base leading-6 font-semibold mr-2'>Featured</span>
                                    <FontAwesomeIcon icon={faCaretDown} width={14} height={14}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div>
                                <div className='flex md:flex-row flex-col border border-solid border-grey40 rounded-lg overflow-hidden'>
                                    <Image
                                        src="/assets/products/frame.png"
                                        className='w-full'
                                        alt="Product"
                                        width={264}
                                        height={220}
                                        priority
                                    />
                                    <div className='p-6 md:flex'>
                                        <div className='md:mr-10'>
                                            <p className='text-base leading-6 text-grey font-semibold mb-2'>2-Day Combo: Sydney City Tour, The Sydney Harbour Lunch Cruise</p>
                                            <div className='flex mb-2'>
                                                <Rating active={4}></Rating>
                                                <span className='text-comment-sm ml-2 text-grey60'>243</span>
                                            </div>
                                            <p className='threeline-box text-comment-sm text-grey60'>Experienced Yarra Valley Wine Operators Yarra Valley Wine Tasting Tours specialise in small personal wine tours to the Yarra Valley since 2012. We operate a daily wine asd asd...</p>
                                            <div className='flex mt-2'>
                                                <div className='flex items-center mr-4'>
                                                    <Image
                                                        src="/assets/products/clock1.svg"
                                                        alt="Icon"
                                                        width={12}
                                                        height={14}
                                                        priority
                                                    />
                                                    <span className='text-comment-sm ml-1 text-grey60'>4.5hours</span>
                                                </div>
                                                <div className='flex items-center'>
                                                    <Image
                                                        src="/assets/products/check.svg"
                                                        alt="Icon"
                                                        width={12}
                                                        height={14}
                                                        priority
                                                    />
                                                    <span className='text-comment-sm ml-1 text-grey60'>Free cancellation</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='md:text-right'>
                                            <span className='text-comment-sm text-grey60'>From</span>
                                            <h6 className='text-base font-semibold leading-6 text-grey'>A$165.00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RootLayout >
    )
}