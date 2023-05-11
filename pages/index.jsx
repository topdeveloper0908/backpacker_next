import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';

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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main>
      <section className="intro-section" style={{ backgroundImage: "url('/assets/home/intro.png')" }}>
        <Header></Header>
        <div className='container'>
          <h1 className='text-dark100 mt-20 mb-6'>Find your next <br></br> backpacker <span className='text-primary'>experience</span></h1>
          <div className='flex relative max-w-[642px]'>
            <Image
              src="/assets/img/search.svg"
              alt="Icon"
              className="absolute ml-5 mt-6"
              width={17.49}
              height={17.49}
              priority
            />
            <Image
              src="/assets/img/search-hover.svg"
              alt="Icon"
              className="absolute hidden ml-5 mt-6"
              width={17.49}
              height={17.49}
              priority
            />
            <input type="text" className="main-search flex-1 bg-white text-base leading-6 pl-12 pr-4 py-5 border border-solid border-dark40 rounded-xl" placeholder="Where do you want to go?" />
            <button className="absolute left-auto right-0 pt-px mr-5 mt-6">
              <Image
                src="/assets/img/close.svg"
                alt="Icon"
                width={14}
                height={14}
                priority
              />
            </button>
          </div>
          <div className="flex items-center mt-3 pb-20">
            <span className='text-base font-semibold leading-6 mr-2'>Popular:</span>
            <div className='text-base leading-6 text-dark60'>
              <Link href="/" className='hover:text-dark100 border border-solid border-l-0 border-t-0 border-r-0 border-transparent hover:border-dark100'>Sydney</Link><span>, </span>
              <Link href="/" className='hover:text-dark100 border border-solid border-l-0 border-t-0 border-r-0 border-transparent hover:border-dark100'>Hobart</Link><span>, </span>
              <Link href="/" className='hover:text-dark100 border border-solid border-l-0 border-t-0 border-r-0 border-transparent hover:border-dark100'>Melbourne</Link><span>, </span>
              <Link href="/" className='hover:text-dark100 border border-solid border-l-0 border-t-0 border-r-0 border-transparent hover:border-dark100'>Gold Coast</Link><span>, </span>
              <Link href="/" className='hover:text-dark100 border border-solid border-l-0 border-t-0 border-r-0 border-transparent hover:border-dark100'>Great Ocean Road</Link><span>, </span>
              <Link href="/" className='hover:text-dark100 border border-solid border-l-0 border-t-0 border-r-0 border-transparent hover:border-dark100'>Perth</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='service-section py-10'>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className='p-3 bg-dark40 rounded-xl'>
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
                <p className="text-comment text-dark60">X,XXX+ experiences picked by backpackers, for backpackers.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className='p-3 bg-dark40 rounded-xl'>
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
                <p className="text-comment text-dark60">Worry less, what you see is what you pay. Start searching today.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className='p-3 bg-dark40 rounded-xl'>
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
                <p className="text-comment text-dark60">Tips, tricks and guides for backpacking through Australia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className='border-dark20'></hr>
      <section className='destination-section my-20'>
        <div className="container">
          <h3 className='mb-1'>Where you'd rather be</h3>
          <p className="text-comment text-dark60">Australia's most popular destinations</p>
          <div className="grid lg:grid-cols-4 gap-6 mt-10">
            <Destination img={"/assets/home/destination.png"} title={"Melbourne"} subtitle={"Victoria"}></Destination>
            <Destination img={"/assets/home/destination.png"} title={"Melbourne"} subtitle={"Victoria"}></Destination>
            <Destination img={"/assets/home/destination.png"} title={"Melbourne"} subtitle={"Victoria"}></Destination>
            <Destination img={"/assets/home/destination.png"} title={"Melbourne"} subtitle={"Victoria"}></Destination>
            <Destination img={"/assets/home/destination.png"} title={"Melbourne"} subtitle={"Victoria"}></Destination>
            <Destination img={"/assets/home/destination.png"} title={"Melbourne"} subtitle={"Victoria"}></Destination>
            <Destination img={"/assets/home/destination.png"} title={"Melbourne"} subtitle={"Victoria"}></Destination>
            <Destination img={"/assets/home/destination.png"} title={"Melbourne"} subtitle={"Victoria"}></Destination>
          </div>
        </div>
      </section>
      <hr className='border-dark20'></hr>
      <section className='product-section my-20'>
        <div className="container">
          <h3 className='mb-1'>Popular experiences</h3>
          <p className="text-comment text-dark60 mb-10">What's hot in Australia</p>
          <div className="product-swiper swiper-out-nav">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={24}
              slidesPerView={3}
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
      <section className='category-section my-20'>
        <div className="container">
          <h3 className='mb-1'>Thing's to do</h3>
          <p className="text-comment text-dark60 mb-10">Find experiences and things to do in Australia</p>
          <div className="category-swiper swiper-out-nav">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={24}
              slidesPerView={4}
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
      <section className='blog-section py-20'>
        <div className="container">
          <h3 className='mb-1'>Our latest guides</h3>
          <p className="text-comment text-dark60 mb-10">Looking for your next adventure? Use our guides, tips and tricks to help you on your journey.</p>
          <div className="grid lg:grid-cols-3 gap-6">
            <Blog img={"/assets/home/blog.png"} title={"Top 10 cafes in Melboure"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia molestie cras nisl..."} category={"See & Do"}></Blog>
            <Blog img={"/assets/home/blog.png"} title={"Top 10 cafes in Melboure"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia molestie cras nisl..."} category={"See & Do"}></Blog>
            <Blog img={"/assets/home/blog.png"} title={"Top 10 cafes in Melboure"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia molestie cras nisl..."} category={"See & Do"}></Blog>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}
