import Image from 'next/image'
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import RootLayout from '@/component/layout';
import Blog from '@/component/blog';
import Newsletter from '@/component/newsletter';

export default function Products() {
    return (
        <RootLayout>
            <div className='blog-content lg:mt-20 mt-10'>
                <p className='font-bold text-xs leading-custom -tracking-tighter text-purple uppercase mb-4'>Food & DRink</p>
                <h2 className='blog-title text-grey font-semibold mb-4'>Top 10 cafes in Melbourne In in at auctor magna lectus interdum enim</h2>
                <div className='flex items-center'>
                    <span className='p-[5px] rounded text-xs leading-custom text-grey text-sm font-bold bg-grey20 uppercase'>Tag</span>
                    <span className='p-[5px] rounded text-xs leading-custom text-grey text-sm font-bold bg-grey20 uppercase ml-2'>Tag</span>
                    <span className='p-[5px] rounded text-xs leading-custom text-grey text-sm font-bold bg-grey20 uppercase ml-2'>Tag</span>
                </div>
            </div>
            <div className='flex justify-center mx-auto my-10'>
                <Image
                    src="/assets/blogs/single.png"
                    alt="Blog"
                    className='lg:rounded-lg overflow-hidden'
                    width={1016}
                    height={360}
                    priority
                />
            </div>
            <div className='blog-content'>
                <h3 className='text-grey font-semibold mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p className='text-grey60 text-comment mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus condimentum interdum enim massa adipiscing porta. Tortor molestie iaculis nibh sollicitudin faucibus dolor. Amet, eu eget arcu fames amet, quis sit eget. Pulvinar fringilla elementum aenean arcu auctor pellentesque. In in at auctor magna lectus interdum enim bibendum. Amet diam ut nisl, amet velit lorem porttitor. Praesent tempus est, nulla nec pharetra tincidunt quisque.</p>
                <Image
                    src="/assets/blogs/single-blog1.png"
                    alt="Blog"
                    className='rounded-lg overflow-hidden'
                    width={808}
                    height={360}
                    priority
                />
                <div className='bg-grey20 my-10' style={{ height: '120px' }}></div>
                <p className='text-comment text-grey60 mb-10'>Pellentesque non suspendisse suspendisse nec dictumst tincidunt mauris. Tortor sagittis sed arcu, vel montes, dictum. Tortor, tristique mi fusce tristique eu lorem augue etiam quis. Ac luctus mauris tristique sed malesuada. Eu non nunc ac orci ac sem lacus, nulla. Adipiscing magna sed urna, feugiat nisi, sapien morbi eu blandit. Nisi, aliquam egestas id adipiscing velit ut. Amet, phasellus velit vitae, egestas. A purus pellentesque nibh turpis rhoncus.</p>
                <h4 className='text-grey mb-4'>Gravida nulla malesuada cursus lacu fusce</h4>
                <p className='text-comment pl-6 border-l-2 border-solid border-purple font-semibold mb-6' style={{ fontStyle: 'italic' }}>In ut ut volutpat tortor sed elementum vitae mi suspendisse. Tempus tristique eget imperdiet mauris nascetur tristique pellentesque. Pellentesque consectetur convallis eget integer. Sit nisi, congue nam posuere. Est neque tellus enim molestie id pellentesque molestie.</p>
                <p className='text-comment text-grey60 mb-4'>Gravida nulla malesuada cursus lacus, volutpat viverra quam. Pharetra egestas morbi cursus vitae nibh amet velit dui. Mi scelerisque montes, duis maecenas sem. Sed duis tincidunt justo turpis. Vitae id leo eu lorem lectus sed. Ut pellentesque arcu nec aliquam mauris donec. Viverra ac massa integer pharetra habitant. Pulvinar fringilla elementum aenean arcu auctor pellentesque. In in at auctor magna lectus interdum enim bibendum. Amet diam ut nisl, amet velit lorem porttitor. Praesent tempus est, nulla nec pharetra tincidunt quisque. Pulvinar fringilla elementum aenean arcu auctor pellentesque. In in at auctor magna lectus interdum enim bibendum. Amet diam ut nisl, amet velit lorem porttitor. Praesent tempus est, nulla nec pharetra tincidunt quisque.</p>
                <p className='text-comment text-grey60'>Gravida nulla malesuada cursus lacus, volutpat viverra quam. Pharetra egestas morbi cursus vitae nibh amet velit dui. Mi scelerisque montes, duis maecenas sem. Sed duis tincidunt justo turpis. Vitae id leo eu lorem lectus sed. Ut pellentesque arcu nec aliquam mauris donec. Viverra ac massa integer pharetra habitant. Pulvinar fringilla elementum aenean arcu auctor pellentesque. In in at auctor magna lectus interdum enim bibendum. Amet diam ut nisl, amet velit lorem porttitor. Praesent tempus est, nulla nec pharetra tincidunt quisque. Pulvinar fringilla elementum aenean arcu auctor pellentesque. In in at auctor magna lectus interdum enim bibendum. Amet diam ut nisl, amet velit lorem porttitor. Praesent tempus est, nulla nec pharetra tincidunt quisque.</p>
                <div className='bg-grey20 my-10' style={{ height: '120px' }}></div>
                <h4 className='text-grey mb-6'>Gravida nulla malesuada cursus lacu fusce</h4>
                <Image
                    src="/assets/blogs/single-blog2.png"
                    alt="Blog"
                    className='rounded-lg overflow-hidden'
                    width={808}
                    height={360}
                    priority
                />
                <p className='text-comment text-grey60 my-10'>Turpis mi turpis amet libero egestas. Enim vitae neque dignissim aliquam duis. Commodo, egestas diam luctus aliquam. Enim leo et lectus cum enim massa diam donec. Congue porttitor volutpat enim ipsum odio ipsum. Dui adipiscing lacus leo euismod ut nulla lorem elementum. Ullamcorper facilisis facilisis pellentesque amet habitant augue. Pellentesque ipsum eleifend quis eget faucibus aliquet sollicitudin. Scelerisque dignissim mattis maecenas non. Tincidunt et et aliquam faucibus congue. Id sem at faucibus elementum, etiam ipsum etiam vulputate mattis.</p>
                <div className='flex justify-between'>
                    <button className='btn btn-tertiary'>Back</button>
                    <div className="flex items-center mt-auto">
                        <Link className='p-[10px] bg-grey20 rounded-full mr-6' href="/">
                            <Image
                                src="/assets/img/instagram.svg"
                                alt="Icon"
                                width={20}
                                height={20}
                                priority
                            />
                        </Link>
                        <Link className='w-10 h-10 flex items-center justify-center bg-grey20 rounded-full' href="/">
                            <Image
                                src="/assets/img/facebook.svg"
                                alt="Icon"
                                width={10}
                                height={21}
                                priority
                            />
                        </Link>
                    </div>
                </div>
                <div className='bg-grey20 mt-10 lg:mb-20 mb-0' style={{ height: '120px' }}></div>
            </div>
            <div className='h-px bg-grey20 lg:mt-20 mt-12'></div>
            <section className='sm:py-20 py-12'>
                <div className="container">
                    <h3 className='mb-10'>Releated guides</h3>
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
            <div className='container'>
                <Newsletter></Newsletter>
            </div>
            <div className='h-px bg-grey20 mt-20 lg:block hidden'></div>
        </RootLayout >
    )
}