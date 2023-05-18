import { useEffect, useState } from 'react';
import Image from 'next/image'
import classNames from 'classnames';
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons'

//
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
import Blog from '@/component/blog';

export default function Home({experiences, destinations}) {
  const slideNumberArray = Array.from({length: 4});
  const destinationsData = destinations.data.slice(0,8);
  const experiencesData = experiences.data;
  console.log(experiencesData)
  
  
  const [searchDropdown, setSearchDropdown] = useState(false);
  return (
    <main className='relative'>
      <div className={classNames('absolute top-0 left-0 right-0 bottom-0 bg-grey opacity-10 z-10', {
        'hidden': !searchDropdown
      })}></div>
      <section className="intro-section" style={{ backgroundImage: "url('/assets/home/intro.png')" }}>
        <Header></Header>
        <div className='container'>
          <h1 className='text-grey mt-20 mb-6 sm:block hidden'>Find your next <br></br> backpacker <span className='text-purple'>experience</span></h1>
          <div className='intro-search max-w-[600px] pb-4 md:mt-0 mt-4 relative'>
            <FontAwesomeIcon icon={faSearch} width={18} height={18} className="absolute text-grey60 mt-5 ml-5" />
            <input type='text' className='text-base leading-6 w-full text-grey60 px-12 py-4 border-2 border-solid border-grey20 rounded-lg' placeholder='Where to'></input>
            <FontAwesomeIcon icon={faClose} width={18} height={18} className="absolute text-grey60 mt-5 mr-4 right-0 top-0" />
          </div>
          <div className='md:flex hidden pb-20'>
            <span className='text-base leading-6 font-semibold text-grey mr-2'>Popular: </span>
            <Link href="/" className='text-comment text-grey60 border-b border-solid border-transparent hover:border-grey hover:text-grey'> Sydney</Link>
            <span className='text-comment text-grey60 mr-1'>, </span>
            <Link href="/" className='text-comment text-grey60 border-b border-solid border-transparent hover:border-grey hover:text-grey'> Hobart</Link>
            <span className='text-comment text-grey60 mr-1'>, </span>
            <Link href="/" className='text-comment text-grey60 border-b border-solid border-transparent hover:border-grey hover:text-grey'> Melbourne</Link>
            <span className='text-comment text-grey60 mr-1'>, </span>
            <Link href="/" className='text-comment text-grey60 border-b border-solid border-transparent hover:border-grey hover:text-grey'> Gold Coast</Link>
            <span className='text-comment text-grey60 mr-1'>, </span>
            <Link href="/" className='text-comment text-grey60 border-b border-solid border-transparent hover:border-grey hover:text-grey'> Great Ocean Road</Link>
            <span className='text-comment text-grey60 mr-1'>, </span>
            <Link href="/" className='text-comment text-grey60 border-b border-solid border-transparent hover:border-grey hover:text-grey'> Perth</Link>
          </div>
        </div>
      </section>
      <div className='main-content'>
        <section className='service-section py-10'>
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className='p-3 bg-grey40 rounded-xl'>
                  <Image
                    src="/assets/home/service-1.svg"
                    alt="Icon"
                    width={18}
                    height={18}
                    priority
                  />
                </div>
                <div className='ml-4'>
                  <h6 className='text-base leading-6 font-semibold mb-1'>Austrilian experiences</h6>
                  <p className="text-comment text-grey60">X,XXX+ experiences picked by backpackers, for backpackers.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className='p-3 bg-grey40 rounded-xl'>
                  <Image
                    src="/assets/home/service-2.svg"
                    alt="Icon"
                    width={18}
                    height={18}
                    priority
                  />
                </div>
                <div className='ml-4'>
                  <h6 className='text-base leading-6 font-semibold mb-1'>No hidden fees</h6>
                  <p className="text-comment text-grey60">Worry less, what you see is what you pay. Start searching today.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className='p-3 bg-grey40 rounded-xl'>
                  <Image
                    src="/assets/home/service-3.svg"
                    alt="Icon"
                    width={18}
                    height={18}
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
            <p className="text-comment text-grey60 md:mb-10 mb-6">Australia's most popular destinations</p>
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
                slideNumberArray.map((element, index)=>(
                  <SwiperSlide>
                    <Destination url={destinationsData[index].destinationUrlName} img={"/assets/home/melborune.png"} title={destinationsData[index].destinationName} subtitle={((destinationsData[index].timeZone).split("/"))[1]}></Destination>
                    <Destination url={destinationsData[index+4].destinationUrlName} img={"/assets/home/hobart.png"} title={destinationsData[index+4].destinationName} subtitle={((destinationsData[index+4].timeZone).split("/"))[1]}></Destination>
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
            <p className="text-comment text-grey60 md:mb-10 mb-6">What's hot in Australia</p>
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
                navigation
                pagination={false}
                scrollbar={false}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
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
            <p className="text-comment text-grey60 md:mb-10 mb-6 pr-20">Find experiences and things to do in Australia</p>
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
      <section className='blog-section sm:py-20 py-12'>
        <div className="container">
          <h3 className='mb-3'>Our latest guides</h3>
          <p className="text-comment text-grey60 md:mb-10 mb-6">Looking for your next adventure? Use our guides, tips and tricks to help you on your journey.</p>
          <Swiper
            // install Swiper modules
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
              }
            }}
          >
            <SwiperSlide>
              <Blog img={"/assets/home/blog.png"} title={"Top 10 cafes in Melboure"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia molestie cras nisl..."} category={"See & Do"}></Blog>
            </SwiperSlide>
            <SwiperSlide>
              <Blog img={"/assets/home/blog.png"} title={"Top 10 cafes in Melboure"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia molestie cras nisl..."} category={"See & Do"}></Blog>
            </SwiperSlide>
            <SwiperSlide>
              <Blog img={"/assets/home/blog.png"} title={"Top 10 cafes in Melboure"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia molestie cras nisl..."} category={"See & Do"}></Blog>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
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
