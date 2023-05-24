import Image from 'next/image'
import SlideToggle from "react-slide-toggle";
import classNames from 'classnames';
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Product from '@/component/product';
import RootLayout from '@/component/layout';
import Rating from '@/component/rating';
import ReviewRating from '@/component/reviewRating';
import Progress from '@/component/progress';

export default function Products() {
    return (
        <RootLayout>
            <section className='border-b border-solid border-grey20 py-5 md:block hidden'>
                <div className='container'>
                    <div className='flex items-center'>
                        <Link href="/" className='text-comment-sm text-grey60 mr-2 hover:text-purple'>Home</Link>
                        <Image
                            src="/assets/img/bread-angle.svg"
                            alt="Destination"
                            className='mr-2'
                            width={5}
                            height={8}
                            priority
                        />
                        <Link href="/" className='text-comment-sm text-grey60 mr-2 hover:text-purple'>Melbourne, Australia</Link>
                        <Image
                            src="/assets/img/bread-angle.svg"
                            alt="Destination"
                            className='mr-2'
                            width={5}
                            height={8}
                            priority
                        />
                        <Link href="/" className='text-comment-sm text-grey60 mr-2 hover:text-purple'>Snorkelling And Diving</Link>
                        <Image
                            src="/assets/img/bread-angle.svg"
                            alt="Destination"
                            className='mr-2'
                            width={5}
                            height={8}
                            priority
                        />
                        <Link href="/" className='text-comment-sm text-grey60 mr-2 hover:text-purple'>Title Tour Great Barrier Reef and Dive Example</Link>
                    </div>
                </div>
            </section>
            <section className='md:my-10'>
                <div className='container'>
                    <div className='flex flex-row'>
                        <div className='basis-1/2 mr-1'>
                            <Image
                                src="/assets/products/1.png"
                                alt="Icon"
                                width={604}
                                height={394}
                                priority
                            />
                        </div>
                        <div className='basis-1/4 flex flex-col mr-1'>
                            <Image
                                src="/assets/products/3.png"
                                alt="Icon"
                                className='mb-1'
                                width={306}
                                height={195}
                                priority
                            />
                            <Image
                                src="/assets/products/5.png"
                                alt="Icon"
                                width={306}
                                height={195}
                                priority
                            />
                        </div>
                        <div className='basis-1/4 flex flex-col'>
                            <Image
                                src="/assets/products/2.png"
                                alt="Icon"
                                className='mb-1'
                                width={306}
                                height={195}
                                priority
                            />
                            <Image
                                src="/assets/products/4.png"
                                alt="Icon"
                                width={306}
                                height={195}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className='container'>
                <div className='flex md:flex-row flex-col md:space-x-6'>
                    <div className='md:basis-2/3'>
                        <div className='flex md:flex-row flex-col md:items-center items-start md:mt-0 mt-4'>
                            <span className='text-xs font-bold text-grey mr-6 leading-4 bg-grey20 -tracking-tighter uppercase py-1 px-2 rounded '>Food, Wine & Nightlife</span>
                            <span className='md:inline block md:mt-0 mt-4 text-comment text-grey60 mr-6 leading-6'>Sydney, New South Wales</span>
                        </div>
                        <p className="md:text-[26px] text-[20px] md:leading-[38px] leading-8 font-semibold tracking-tight md:my-4 my-2">Napa and Sonoma Valley Wine Country Tour from San Francisco</p>
                        <div className='flex items-center mb-7'>
                            <div className='mb-px'>
                                {Rating(4)}
                            </div>
                            <span className='text-comment text-grey60 ml-2'>243 reviews</span>
                        </div>
                        <div className='flex md:flex-row flex-col md:items-center items-start px-7 py-6 border border-solid border-grey20 rounded-xl mb-6 md:space-x-5 md:space-y-0 space-y-5'>
                            <div className='flex items-center'>
                                <Image
                                    src="/assets/products/mobile.svg"
                                    alt="Icon"
                                    width={18}
                                    height={22}
                                    priority
                                />
                                <span className='text-comment text-grey ml-3'>Mobile tickets</span>
                            </div>
                            <div className='flex items-center'>
                                <Image
                                    src="/assets/products/clock.svg"
                                    alt="Icon"
                                    width={18}
                                    height={22}
                                    priority
                                />
                                <span className='text-comment text-grey ml-3'>4.5 Hours</span>
                            </div>
                            <div className='flex items-center'>
                                <Image
                                    src="/assets/products/earth.svg"
                                    alt="Icon"
                                    width={18}
                                    height={22}
                                    priority
                                />
                                <span className='text-comment text-grey ml-3'>Offered in English</span>
                            </div>
                        </div>
                        <div className='bg-grey20 h-px'></div>
                        <SlideToggle
                            render={({ toggle, progress, setCollapsibleElement }) => (
                                <div className="my-collapsible">
                                    <div className='flex items-center justify-between hover:cursor-pointer' onClick={toggle}>
                                        <h4 className='my-5 my-collapsible__toggle'>Overview</h4>
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
                                        <p className="text-comment text-grey60 border-b border-solid border-grey20 pb-5">Save 10% on two of Melbourne’s top attractions with this combo pass. Encounter Australia’s native marine life at the SEA LIFE Melbourne Aquarium, and get a spectacular aerial view of the city from the jaw-dropping height of Eureka Skydeck 88. The Melbourne Attraction Pass allows for single entry into each site within a 6-month period.</p>
                                        <h4 className='mt-6 mb-5'>Reviews</h4>
                                        <div className='flex mb-6'>
                                            <ReviewRating reviews={242} rating={4.4}></ReviewRating>
                                            <div className='ml-6 my-auto md:flex hidden flex-col space-y-1'>
                                                <p className='text-base leading-6 font-semibold text-grey'>5 Stars</p>
                                                <p className='text-base leading-6 font-semibold text-grey'>4 Stars</p>
                                                <p className='text-base leading-6 font-semibold text-grey'>3 Stars</p>
                                                <p className='text-base leading-6 font-semibold text-grey'>2 Stars</p>
                                                <p className='text-base leading-6 font-semibold text-grey'>1 Stars</p>
                                            </div>
                                            <div className='ml-6 my-auto flex-1 md:flex hidden flex-col space-y-5 mr-5'>
                                                <Progress value={80}></Progress>
                                                <Progress value={34}></Progress>
                                                <Progress value={60}></Progress>
                                                <Progress value={98}></Progress>
                                                <Progress value={4}></Progress>
                                            </div>
                                            <div className='my-auto md:flex hidden flex-col space-y-1 text-right'>
                                                <p className='text-base leading-6 font-semibold text-grey60'>100</p>
                                                <p className='text-base leading-6 font-semibold text-grey60'>82</p>
                                                <p className='text-base leading-6 font-semibold text-grey60'>42</p>
                                                <p className='text-base leading-6 font-semibold text-grey60'>12</p>
                                                <p className='text-base leading-6 font-semibold text-grey60'>2</p>
                                            </div>
                                        </div>
                                        <div className='mb-4'>
                                            <div className='flex items-center'>
                                                <Rating active={4}></Rating>
                                                <span className='text-base font-semibold text-grey leading-6 ml-4'>WOW what a tour</span>
                                            </div>
                                            <p className='text-comment text-grey80 my-2'>Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur.</p>
                                            <p className='text-comment text-grey60'>Tyson28, Dec 2022</p>
                                        </div>
                                        <div className='mb-7 p-6 bg-[#f9f9f9]'>
                                            <div className='flex'>
                                                <span className='text-base text-grey font-semibold leading-6'>Response from host</span>
                                                <span className='text-comment ml-2 text-grey60'>April 2023</span>
                                            </div>
                                            <p className='text-comment text-grey80 mt-2'>Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur.</p>
                                        </div>
                                        <div className='mb-7'>
                                            <div className='flex items-center'>
                                                <Rating active={4}></Rating>
                                                <span className='text-base font-semibold text-grey leading-6 ml-4'>WOW what a tour</span>
                                            </div>
                                            <p className='text-comment text-grey80 my-2'>Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur.</p>
                                            <p className='text-comment text-grey60'>Tyson28, Dec 2022</p>
                                        </div>
                                        <div className='mb-7'>
                                            <div className='flex items-center'>
                                                <Rating active={4}></Rating>
                                                <span className='text-base font-semibold text-grey leading-6 ml-4'>WOW what a tour</span>
                                            </div>
                                            <p className='text-comment text-grey80 my-2'>Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur.</p>
                                            <p className='text-comment text-grey60'>Tyson28, Dec 2022</p>
                                        </div>
                                        <div className='mb-7'>
                                            <div className='flex items-center'>
                                                <Rating active={4}></Rating>
                                                <span className='text-base font-semibold text-grey leading-6 ml-4'>WOW what a tour</span>
                                            </div>
                                            <p className='text-comment text-grey80 my-2'>Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur.</p>
                                            <p className='text-comment text-grey60'>Tyson28, Dec 2022</p>
                                        </div>
                                        <div>
                                            <div className='flex items-center'>
                                                <Rating active={4}></Rating>
                                                <span className='text-base font-semibold text-grey leading-6 ml-4'>WOW what a tour</span>
                                            </div>
                                            <p className='text-comment text-grey80 my-2'>Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur.</p>
                                            <p className='text-comment text-grey60'>Tyson28, Dec 2022</p>
                                        </div>
                                        <div className='product-pagination mt-8'>
                                            <div className='flex md:flex-row flex-col md:items-center items-start justify-between'>
                                                <span className='text-comment'>Showing 1 to 10 of 20 results</span>
                                                <div className='flex space-x-4 items-center md:w-auto w-full md:mt-0 mt-4'>
                                                    <div className='flex-1'>
                                                        <button className='btn btn-tertiary disabled w-full' disabled>Previous</button>
                                                    </div>
                                                    <div className='flex-1'>
                                                        <button className='btn btn-tertiary w-full'>Next</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <div className='md:basis-1/3 md:mt-0 mt-10'>
                        <div className='sticky top-32 checkWrapper bg-white rounded-lg border border-solid border-grey20 shadow'>
                            <div className='border-b border-solid border-grey20 p-6'>
                                <div>
                                    <span className='bg-error px-2 py-[5] rounded inline-block text-white uppercase text-xs font-bold leading-3 trakcing-tighter'>LIKELY TO SELL OUT</span>
                                    <span className='text-error text-xs font-bold leading-3 trakcing-tighter ml-3'>Save A$671.00!</span>
                                </div>
                                <div className='flex items-end mt-4'>
                                    <span className='text-comment text-grey60 mr-2'>From</span>
                                    <h3 className='font-semibold mr-2 leading-[1] '>A$2,000</h3>
                                    <span className='text-grey60 text-[18px] leading-7 '>A$2,000.00</span>
                                </div>
                            </div>
                            <div className='border-b border-solid border-grey20 p-6'>
                                <button className='btn btn-primary block w-full'>Book</button>
                                <div className='flex items-center justify-center mt-4'>
                                    <Image
                                        src="/assets/products/dollar.svg"
                                        alt="Icon"
                                        width={20}
                                        height={20}
                                        priority
                                    />
                                    <span className='text-green text-base leading-6 font-semibold ml-2'>Lowest price guarantee</span>
                                </div>
                            </div>
                            <div className='p-6 bg-[#F9FAFA]'>
                                <div className='flex mb-2'>
                                    <Image
                                        src="/assets/products/calendar.svg"
                                        alt="Icon"
                                        width={18}
                                        height={20}
                                        priority
                                    />
                                    <span className='font-semibold text-base leading-6 ml-3'>Free cancellation</span>
                                </div>
                                <p className='text-comment text-grey60 mb-6'>Receive a full refund if you cancel at least 24 hours in advance.</p>
                                <div className='flex mb-2'>
                                    <Image
                                        src="/assets/products/reverse.svg"
                                        alt="Icon"
                                        width={18}
                                        height={20}
                                        priority
                                    />
                                    <span className='font-semibold text-base leading-6 ml-3'>Reserve Now & Pay Later</span>
                                </div>
                                <p className='text-comment text-grey60'>Secure your spot while staying flexible</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='mt-10 mb-6'>You might also like</h4>
                <Swiper
                    spaceBetween={24}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Product
                            title={"2-Day Combo: Sydney City Tour, The Sydney Harbour Lunch Cruise lorem ipsum long text is my love"}
                            location={"Melbourne"}
                            subLocation={"Victoria"}
                            rating={"24"}
                            newPrice={"165.00"}
                            oldPrice={"200.00"}
                            img={"/assets/home/product.png"}
                        >
                        </Product>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            title={"2-Day Combo: Sydney City Tour, The Sydney Harbour Lunch Cruise lorem ipsum long text is my love"}
                            location={"Melbourne"}
                            subLocation={"Victoria"}
                            rating={"24"}
                            newPrice={"165.00"}
                            oldPrice={"200.00"}
                            img={"/assets/home/product.png"}
                        >
                        </Product>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            title={"2-Day Combo: Sydney City Tour, The Sydney Harbour Lunch Cruise lorem ipsum long text is my love"}
                            location={"Melbourne"}
                            subLocation={"Victoria"}
                            rating={"24"}
                            newPrice={"165.00"}
                            oldPrice={"200.00"}
                            img={"/assets/home/product.png"}
                        >
                        </Product>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            title={"2-Day Combo: Sydney City Tour, The Sydney Harbour Lunch Cruise lorem ipsum long text is my love"}
                            location={"Melbourne"}
                            subLocation={"Victoria"}
                            rating={"24"}
                            newPrice={"165.00"}
                            oldPrice={"200.00"}
                            img={"/assets/home/product.png"}
                        >
                        </Product>
                    </SwiperSlide>
                </Swiper>
                <div className='mt-20 h-px bg-grey20'></div>
            </div>
            <div className='book-footer md:hidden flex items-center justify-between px-5 py-3'>
                <div>
                    <span className='text-commnet text-grey60'>From</span>
                    <h4>A$1,265.00</h4>
                </div>
                <button className='btn btn-primary'>Book</button>
            </div>
        </RootLayout >
    )
}