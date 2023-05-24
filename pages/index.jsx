import { useEffect, useState } from 'react';
import Image from 'next/image'
import classNames from 'classnames';
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons'

import { getDestinations, getProducts } from '@/utils/api';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from '@/component/header'
import Footer from '@/component/footer'
import Destination from '@/component/destination'
import Product from '@/component/product'
import Category from '@/component/category';

export default function Home({ experiences, destinations }) {
  const slideNumberArray = Array.from({ length: 4 });
  const destinationsData = destinations.data.slice(0, 8);
  console.log(destinations);
  const experiencesData = experiences.data;

  function searchDestination(e) {
    var word = e.target.value;
    if (word != '') {
      setPopularMenu(false);
      setSearchMenu(true);
    }
    if (word == '') {
      setPopularMenu(true);
      setSearchMenu(false);
    }
    setSearchWord(word);
  }

  const [searchDropdown, setSearchDropdown] = useState(false);
  const [popularMenu, setPopularMenu] = useState(false);
  const [searchMenu, setSearchMenu] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  return (
    <main className={classNames('relative')}>
      <div onClick={() => { setPopularMenu(false); setSearchMenu(false); setSearchWord(''); }} className={classNames('absolute top-0 left-0 right-0 bottom-0 bg-grey opacity-10 z-10', {
        'hidden': !(searchDropdown || popularMenu || searchMenu),
      })}></div>
      <section className="intro-section bg-custom">
        <Header searchDropdown={searchDropdown} setSearchDropdown={setSearchDropdown}></Header>
        <div className='container'>
          <div className='md:block hidden pt-[182px]'></div>
          <div className='intro-search md:max-w-[600px] mt-4 pb-4 relative z-30 '>
            <FontAwesomeIcon icon={faSearch} width={18} height={18} className={classNames("absolute mt-5 ml-5 z-30", {
              'text-purple': popularMenu || searchMenu,
              'text-grey60': !popularMenu
            })} />
            <input type='text' value={searchWord} onChange={(e) => searchDestination(e)} onFocus={() => setPopularMenu(true)} className='text-base leading-6 w-full text-grey60 px-12 py-4 border-2 border-solid border-grey20 rounded-lg bg-white' placeholder='Where to'></input>
            <FontAwesomeIcon icon={faClose} width={18} height={18} className={classNames("absolute text-grey60 mt-5 mr-4 right-0 top-0 hover:text-purple", {
              'hidden': !searchMenu,
            })} onClick={() => { setSearchWord(''); setPopularMenu(false); setSearchMenu(false); }} />
            <div className={classNames('absolute w-full rounded-lg bg-white mt-2 pb-2 h-[307px]', {
              'hidden': !popularMenu
            })}>
              <div className='px-6 pt-6 pb-4 text-xs leading-custom -tracking-tighter font-bold uppercase border-b border-solid border-grey20'>Popular DEstinations</div>
              <div className='flex flex-col'>
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
            </div>
            <div className={classNames('absolute w-full rounded-lg bg-white mt-2 pb-2', {
              'hidden': !searchMenu
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
          <div className='md:flex hidden pb-20'>
            <span className='text-base leading-6 font-semibold text-grey mr-2'>Popular: </span>
            <Link href="/" className='text-comment text-grey60 hover-decoration-underline hover:text-grey'> Sydney</Link>
            <span className='text-comment text-grey60 mr-1'>, </span>
            <Link href="/" className='text-comment text-grey60 hover-decoration-underline hover:text-grey'> Hobart</Link>
            <span className='text-comment text-grey60 mr-1'>, </span>
            <Link href="/" className='text-comment text-grey60 hover-decoration-underline hover:text-grey'> Melbourne</Link>
            <span className='text-comment text-grey60 mr-1'>, </span>
            <Link href="/" className='text-comment text-grey60 hover-decoration-underline hover:text-grey'> Gold Coast</Link>
            <span className='text-comment text-grey60 mr-1'>, </span>
            <Link href="/" className='text-comment text-grey60 hover-decoration-underline hover:text-grey'> Great Ocean Road</Link>
            <span className='text-comment text-grey60 mr-1'>, </span>
            <Link href="/" className='text-comment text-grey60 hover-decoration-underline hover:text-grey'> Perth</Link>
          </div>
        </div>
      </section>
      <div className='main-content'>
        <section className='service-section py-10'>
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className='p-3 bg-custom rounded-xl'>
                  <Image
                    src="/assets/home/service-1.svg"
                    alt="Icon"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
                <div className='ml-4'>
                  <h6 className='text-base leading-6 font-semibold mb-1'>Unforgettable experiences</h6>
                  <p className="text-comment text-grey60">4,200+ epic Tours from Day Trips to Hot Air Ballooning.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className='p-3 bg-custom rounded-xl'>
                  <Image
                    src="/assets/home/service-2.svg"
                    alt="Icon"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
                <div className='ml-4'>
                  <h6 className='text-base leading-6 font-semibold mb-1'>No hidden fees</h6>
                  <p className="text-comment text-grey60">Discover peace of mind. No hidden fees, just transparent pricing.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className='p-3 bg-custom rounded-xl'>
                  <Image
                    src="/assets/home/service-3.svg"
                    alt="Icon"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
                <div className='ml-4'>
                  <h6 className='text-base leading-6 font-semibold mb-1'>Backpacker guides</h6>
                  <p className="text-comment text-grey60">Tips, tricks and guides for backpacking through Australia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr className='border-grey20'></hr>
      <div className='main-content'>
        <section className='destination-section sm:mt-20 mt-12 sm:mb-16 mb-8'>
          <div className="container">
            <h3 className='md:mb-3 mb-1'>Top backpacker destinations</h3>
            <p className="text-comment text-grey60 md:mb-10 mb-6">Discover must-visit destinations for your backpacking adventure</p>
            <Swiper
              // install Swiper modules
              spaceBetween={24}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}>
              {
                slideNumberArray.map((element, index) => (
                  <SwiperSlide>
                    <Destination url={destinationsData[index].destinationUrlName} img={"/assets/home/melborune.png"} title={destinationsData[index].destinationName} subtitle={((destinationsData[index].timeZone).split("/"))[1]}></Destination>
                    <Destination url={destinationsData[index + 4].destinationUrlName} img={"/assets/home/hobart.png"} title={destinationsData[index + 4].destinationName} subtitle={((destinationsData[index + 4].timeZone).split("/"))[1]}></Destination>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </section>
      </div>
      <hr className='border-grey20'></hr>
      <div className='main-content'>
        <section className='product-section sm:my-20 my-12'>
          <div className="container">
            <h3 className='mb-1'>Popular experiences</h3>
            <p className="text-comment text-grey60 md:mb-10 mb-6">The best backpacker experiences, tours and activities in Australia</p>
            <div className="product-swiper swiper-out-nav">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={24}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1.5,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
                navigation={true}
                pagination={false}
                scrollbar={false}
              >
                {
                  slideNumberArray.map((element, index) => (
                    <SwiperSlide key={index}>
                      <Product
                        title={experiencesData[index].pageUrlName}
                        location={experiencesData[index].primaryDestinationName}
                        subLocation={"Victoria"}
                        rating={experiencesData[index].rating}
                        newPrice={"165.00"}
                        oldPrice={"200.00"}
                        img={experiencesData[index].thumbnailHiResURL}
                      >
                      </Product>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </section>
        <section className='category-section sm:my-20 my-12'>
          <div className="container">
            <h3 className='mb-1'>Thing's to do</h3>
            <p className="text-comment text-grey60 md:mb-10 mb-6">Explore exciting thing’s to do and experiences for an unforgettable backpacking journey</p>
            <div className="category-swiper swiper-out-nav">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
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
                  1200: {
                    slidesPerView: 4,
                  },
                }}
                navigation
                pagination={false}
                scrollbar={false}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <Category img={"/assets/home/category.png"} title={"Walking & Biking Tours"} subtitle={"27 Experiences"}></Category>
                </SwiperSlide>
                <SwiperSlide>
                  <Category img={"/assets/home/category.png"} title={"Walking & Biking Tours"} subtitle={"27 Experiences"}></Category>
                </SwiperSlide>
                <SwiperSlide>
                  <Category img={"/assets/home/category.png"} title={"Walking & Biking Tours"} subtitle={"27 Experiences"}></Category>
                </SwiperSlide>
                <SwiperSlide>
                  <Category img={"/assets/home/category.png"} title={"Walking & Biking Tours"} subtitle={"27 Experiences"}></Category>
                </SwiperSlide>
                <SwiperSlide>
                  <Category img={"/assets/home/category.png"} title={"Walking & Biking Tours"} subtitle={"27 Experiences"}></Category>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </main >
  )
}

export async function getServerSideProps() {

  const response = await getProducts(684)
  const data = response.data;

  const destinationsRes = await getDestinations();
  const destinationsData = destinationsRes.data;

  return {
    props: {
      experiences: data,
      destinations: destinationsData,
    }
  }
}
