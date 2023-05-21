import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faEllipsisH, faCaretDown, faClose } from '@fortawesome/free-solid-svg-icons'

import SlideToggle from "react-slide-toggle";

//Slider
import Slider from '@material-ui/core/Slider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui';

import RootLayout from '@/component/layout';
import Rating from '@/component/rating';
import classNames from 'classnames';

export default function Products() {
    const [category, setCategory] = useState('');

    // Price Filter
    const [filterPrice, setFilterPrice] = useState([24, 80]);
    function priceSelector(event, newValue) {
        setFilterPrice(newValue);
    }
    // Rating Filter
    const [filterRating, setFilterRating] = useState(null);

    const muiTheme = getMuiTheme({
        slider: {
            trackColor: "yellow",
            selectionColor: "white"
        }
    });
    return (
        <RootLayout>
            <div className='bread-crumb border-b border-solid border-grey20 py-4'>
                <div className='container'>
                    <span className='text-xs leading-5 text-grey'>Home</span>
                    <span className='text-xs leading-5 text-grey60 mx-1'>/</span>
                    <span className='text-xs leading-5 text-grey'>Things to do in Austrilia</span>
                    <span className='text-xs leading-5 text-grey60 mx-1'>/</span>
                    <span className='text-xs leading-5 text-grey'>Victoria  </span>
                    <span className='text-xs leading-5 text-grey60 mx-1'>/</span>
                </div>
            </div>
            <seciton className='border-t border-solid border-grey40 mt-20'>
                <div className='container mb-10'>
                    <div className='md:pt-20 pt-6'>
                        <h1 className='text-grey products-page-title mb-2'><span className='font-bold'>Melbourne </span><span className='font-normal'>{category}</span></h1>
                        <p className='text-comment text-grey60 md:mb-10 mb-6'><span className='font-semibold'>1244 </span>experiences found</p>
                    </div>
                </div>
            </seciton>
            <section>
                <div className='container'>
                    <div className='flex lg:space-x-14'>
                        <div className='lg:basis-1/3 lg:blcok lg:block hidden w-full product-sidebar border-t border-solid border-grey20 py-6'>
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible mb-4">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Thing’s to do
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold mb-3 text-purple'>All Melbourne
                            </h6>
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible mb-3">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>All Culture
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible mb-3">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Classes & Workshops
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className={classNames("my-collapsible", {
                                        'mb-3': progress
                                    })}>
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold mb-4'>Cruises, Sailing & Water Tours
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}                                                                                                                                                                                                                                                                                                                                                                                                                                                >
                                            <div className='ml-4'>
                                                <SlideToggle
                                                    render={({ toggle, progress, setCollapsibleElement }) => (
                                                        <div className="my-collapsible">
                                                            <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                                                <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold border-l border-solid border-grey20 pl-4 pb-3'>Category tier 2
                                                                </h6>
                                                                <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                                            </div>
                                                            <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                                            </div>
                                                        </div>
                                                    )}
                                                />
                                                <SlideToggle
                                                    render={({ toggle, progress, setCollapsibleElement }) => (
                                                        <div className="my-collapsible">
                                                            <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                                                <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold border-l border-solid border-grey20 pl-4 pb-3'>Category tier 2
                                                                </h6>
                                                                <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                                            </div>
                                                            <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                                                <SlideToggle
                                                                    render={({ toggle, progress, setCollapsibleElement }) => (
                                                                        <div className="my-collapsible ml-4">
                                                                            <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                                                                <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold border-l border-solid border-grey20 pl-4 pb-3'>Category tier 2
                                                                                </h6>
                                                                                <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                                                            </div>
                                                                            <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible mb-3">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Likely To Sell Out
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible mb-3">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Outdoor Activities
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible mb-3">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Seasonal & Special Occasions
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible mb-3">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Tickets & Passes
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible mb-3">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Tours, Sightseeing & Cruises
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible mb-3">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Travel & Transportation Services
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                            <div className='pb-3'></div>
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible py-5 border border-solid border-grey20 border-l-0 border-r-0">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Unique Experiences
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>

                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible py-5 border-b border-solid border-grey20">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Price
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                            <div>
                                                <div className='flex items-center justify-between mt-6 mb-2'>
                                                    <span className='text-comment'>{'A$' + filterPrice[0]}</span>
                                                    <span className='text-comment'>{'A$' + filterPrice[1]}</span>
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
                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible py-5 border-b border-solid border-grey20">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Rating
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                            <div className='mt-6'>
                                                <div className='flex pb-5' onClick={() => { setFilterRating('5 Stars') }}>
                                                    <input type='radio' name='ratingfilter' className='mr-2'></input>
                                                    <Rating active={5} size={20}></Rating>
                                                </div>
                                                <div className='flex pb-5 items-center' onClick={() => { setFilterRating('4 Stars & up') }}>
                                                    <input type='radio' name='ratingfilter' className='mr-2'></input>
                                                    <Rating active={4} size={20}></Rating>
                                                    <span className='text-comment text-grey60 ml-2'>& Up</span>
                                                </div>
                                                <div className='flex pb-5 items-center' onClick={() => { setFilterRating('3 Stars & up') }}>
                                                    <input type='radio' name='ratingfilter' className='mr-2'></input>
                                                    <Rating active={3} size={20}></Rating>
                                                    <span className='text-comment text-grey60 ml-2'>& Up</span>
                                                </div>
                                                <div className='flex pb-5 items-center' onClick={() => { setFilterRating('2 Stars & up') }}>
                                                    <input type='radio' name='ratingfilter' className='mr-2'></input>
                                                    <Rating active={2} size={20}></Rating>
                                                    <span className='text-comment text-grey60 ml-2'>& Up</span>
                                                </div>
                                                <div className='flex pb-5 items-center' onClick={() => { setFilterRating('1 Stars & up') }}>
                                                    <input type='radio' name='ratingfilter' className='mr-2'></input>
                                                    <Rating active={1} size={20}></Rating>
                                                    <span className='text-comment text-grey60 ml-2'>& Up</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible py-5 border-b border-solid border-grey20">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>Time
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                            <p className='text-xs leading-custom font-bold -tracking-2 uppercase mt-5 mb-4 text-grey60'>Time of Day</p>
                                            <div className='flex mb-4 items-start'>
                                                <input type='checkbox'></input>
                                                <div className='ml-2'>
                                                    <p className='text-comment'>Morning(6)</p>
                                                    <p className='text-comment'>6am - 12pm</p>
                                                </div>
                                            </div>
                                            <div className='flex mb-4 items-start'>
                                                <input type='checkbox'></input>
                                                <div className='ml-2'>
                                                    <p className='text-comment'>Afternoon(4)</p>
                                                    <p className='text-comment'>12pm - 5pm</p>
                                                </div>
                                            </div>
                                            <div className='flex mb-4 items-start'>
                                                <input type='checkbox'></input>
                                                <div className='ml-2'>
                                                    <p className='text-comment'>Evening(0)</p>
                                                    <p className='text-comment'>5pm - 12am</p>
                                                </div>
                                            </div>
                                            <p className='text-xs leading-custom font-bold -tracking-2 uppercase mt-5 mb-4 text-grey60'>Duration</p>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>Up to 1 hour(0)</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>1 to 4 hours(0)</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>4 hours  to 1 day(1)</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>1 to 3 Days(0)</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>3+ days(0)</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                            <SlideToggle
                                render={({ toggle, progress, setCollapsibleElement }) => (
                                    <div className="my-collapsible py-5 border-b border-solid border-grey20">
                                        <div className='flex my-collapsible__toggle items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                            <h6 className='text-base text-grey60 hover:text-grey leading-6 font-semibold'>More
                                            </h6>
                                            <FontAwesomeIcon className='text-grey60 hover:text-grey' icon={progress ? faAngleDown : faAngleUp} width={20} height={16} />
                                        </div>
                                        <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                            <div className='flex mb-4 items-center mt-4'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>Good for avoiding crowds</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>Deals & Discounts</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>Free Cancellation (1)</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>Likely to Sell Out(7)</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>Skip-The-Line (2)</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>Private Tour (0)</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>Viator Exclusive(21)</p>
                                            </div>
                                            <div className='flex mb-4 items-center'>
                                                <input type='checkbox'></input>
                                                <p className='text-comment text-grey40 ml-2'>New on Viator(0)</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                        <div className='lg:basis-2/3'>
                            <div className='flex justify-end  mb-6'>
                                <button onClick={() => setHeaderDropdown(!headerDropdown)} className={classNames(
                                    'flex items-center text-base leading-6 font-semibold  rounded-xl pl-4 pr-3 py-2 btn btn-ghost', {
                                }
                                )}>
                                    Featured
                                    <Image
                                        src="/assets/img/angle.svg"
                                        alt="Icon"
                                        className={classNames("ml-2", {
                                            'rotate-180': false
                                        })}
                                        width={8}
                                        height={4}
                                        priority
                                    />
                                </button>
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