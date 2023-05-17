import { useEffect, useState } from 'react';
import Image from 'next/image'
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

//
import { getProducts } from '@/utils/api';

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

export default function Home() {
  const [searchDropdown, setSearchDropdown] = useState(false);
  useEffect(() => {
    //console.log(getProducts(27519));
  }, [])
  return (
    <main className='relative'>
      <div className={classNames('absolute top-0 left-0 right-0 bottom-0 bg-grey opacity-10 z-10', {
        'hidden': !searchDropdown
      })}></div>
      <section className="intro-section" style={{ backgroundImage: "url('/assets/home/intro.png')" }}>
        <Header></Header>
        <div className='container'>
          <h1 className='text-grey mt-20 mb-6 sm:block hidden'>Find your next <br></br> backpacker <span className='text-purple'>experience</span></h1>

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
        <section className='destination-section sm:my-20 my-12'>
          <div className="container">
            <h3 className='mb-1'>Where you'd rather be</h3>
            <p className="text-comment text-grey60 mb-10">Australia's most popular destinations</p>
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
                },
                1200: {
                  slidesPerView: 4,
                },
              }}>
              <SwiperSlide>
                <Destination url="Melbourne" img={"/assets/home/melborune.png"} title={"Melbourne"} subtitle={"Victoria"}></Destination>
                <Destination url="Hobart" img={"/assets/home/hobart.png"} title={"Hobart"} subtitle={"Tasmania"}></Destination>
              </SwiperSlide>
              <SwiperSlide>
                <Destination url="Sydney" img={"/assets/home/sydney.png"} title={"Sydney"} subtitle={"New South Wales"}></Destination>
                <Destination url="Cairns-and-the-Tropical-North" img={"/assets/home/cairns.png"} title={"Cairns"} subtitle={"Queensland"}></Destination>
              </SwiperSlide>
              <SwiperSlide>
                <Destination url="Perth" img={"/assets/home/perth.png"} title={"Perth"} subtitle={"Western Australia"}></Destination>
                <Destination url="Uluru" img={"/assets/home/uluru.png"} title={"Uluru"} subtitle={"Nothern Territory"}></Destination>
              </SwiperSlide>
              <SwiperSlide>
                <Destination url="Surfers-Paradise" img={"/assets/home/surfers.png"} title={"Surfers Paradise"} subtitle={"Queensland"}></Destination>
                <Destination url="Adelaide" img={"/assets/home/adalaide.png"} title={"Adelaide"} subtitle={"South Australia"}></Destination>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
      <hr className='border-grey20'></hr>
      <div className='main-content'>
        <section className='product-section sm:my-20 my-12'>
          <div className="container">
            <h3 className='mb-1'>Popular experiences</h3>
            <p className="text-comment text-grey60 mb-10">What's hot in Australia</p>
            <div className="product-swiper swiper-out-nav">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={24}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1.3,
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
            </div>
          </div>
        </section>
        <section className='category-section sm:my-20 my-12'>
          <div className="container">
            <h3 className='mb-1'>Thing's to do</h3>
            <p className="text-comment text-grey60 mb-10 pr-20">Find experiences and things to do in Australia</p>
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
          <h3 className='mb-1'>Our latest guides</h3>
          <p className="text-comment text-grey60 mb-10">Looking for your next adventure? Use our guides, tips and tricks to help you on your journey.</p>
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
