import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image'

import Header from '@/component/header'
import Footer from '@/component/footer'
import Newsletter from '@/component/newsletter';

export default function Blogs() {
    const [searchDropdown, setSearchDropdown] = useState(false);

    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";

    const [value, setValue] = useState(2);
    return (
        <main className='relative'>
            <div className={classNames('absolute top-0 left-0 right-0 bottom-0 bg-grey opacity-10 z-10', {
                'hidden': !searchDropdown
            })}></div>
            <section className="intro-section" style={{ backgroundImage: "url('/assets/home/intro.png')" }}>
                <Header></Header>
                <div className='container lg:block hidden'>
                    <span className='block text-purple text-xs font-bold mt-20 mb-4 leading-custom trakcing-tighter uppercase'>Guides</span>
                    <h1 className='font-bold pb-20 text-grey'>Your backpacker journey starts here</h1>
                </div>
            </section>
            <div>
                <div>
                    <div className='container'>
                        <div className="flex tab">
                            <button
                                className={classNames('items-center text-base  font-semibold leading-6 text-grey60 justify-center hover:text-grey  mr-6 py-5', {
                                    'border-b border-solid border-purple text-purple hover:text-purple': activeIndex == 1,
                                })}
                                onClick={() => handleClick(1)}
                            >
                                All guides
                            </button>
                            <button
                                className={classNames('items-center text-base  font-semibold leading-6 text-grey60 justify-center hover:text-grey  mr-6 py-5', {
                                    'border-b border-solid border-purple text-purple hover:text-purple': activeIndex == 2,
                                })}
                                onClick={() => handleClick(2)}
                            >
                                See & do
                            </button>
                            <button
                                className={classNames('items-center text-base  font-semibold leading-6 text-grey60 justify-center hover:text-grey  mr-6 py-5', {
                                    'border-b border-solid border-purple text-purple hover:text-purple': activeIndex == 3,
                                })}
                                onClick={() => handleClick(3)}
                            >
                                Food & drink
                            </button>
                        </div>
                    </div>
                    <div className='h-px bg-grey20 -mt-px'></div>
                </div>
                <div className='container lg:block hidden'>
                    <div className="mt-5">
                        <div className={classNames({
                            'hidden': activeIndex != 1
                        })}>
                            <div className='flex items-center mt-20'>
                                <Image
                                    src="/assets/blogs/main.png"
                                    alt="Icon"
                                    width={601}
                                    height={360}
                                    priority
                                />
                                <div className='ml-6'>
                                    <span className='text-purple font-bold text-xs -tracking-tighter leading-custom uppercase'> SEE & DO</span>
                                    <h3 className='font-semibold text-grey my-4'>Top 10 cafes in Melbourne In in at auctor magna lectus interdum enim</h3>
                                    <p className='text-comment threeline-box text-grey60 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia molestie cras nisl. Mauris pellentesque tempus erat ullamcorper vitae morbi et porta enim. Tortor, elementum luctus vivamus consectetur molestie leo...</p>
                                    <div className='flex items-center'>
                                        <span className='p-[5px] rounded text-xs leading-custom text-grey text-sm font-bold bg-grey20 uppercase'>Tag</span>
                                        <span className='p-[5px] rounded text-xs leading-custom text-grey text-sm font-bold bg-grey20 uppercase ml-2'>Tag</span>
                                        <span className='p-[5px] rounded text-xs leading-custom text-grey text-sm font-bold bg-grey20 uppercase ml-2'>Tag</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classNames({
                            'hidden': activeIndex != 2
                        })}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis vitae, porttitor lacinia quam.</p>
                        </div>
                        <div className={classNames({
                            'hidden': activeIndex != 3
                        })}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis vitae, porttitor lacinia quam.</p>
                        </div>
                    </div>
                </div>
                <div className='h-px bg-grey20 mt-20 lg:block hidden'></div>
                <div className={classNames('container', {
                    'hidden': activeIndex != 1
                })}>
                    <div className='flex space-x-6 lg:my-20 my-10'>
                        <div className='lg:basis-1/3 sm:basis-1/2'>
                            <div>
                                <Image
                                    src="/assets/blogs/main.png"
                                    alt="Icon"
                                    className='rounded-lg overflow-hidden'
                                    width={392}
                                    height={192}
                                    priority
                                />
                                <p className='mt-6 mb-2 text-purple font-bold text-xs leading-custom -tracking-tighter uppercase'>See & Do</p>
                                <h6 className='text-base leading-6 font-semibold text-grey my-2'>Top 10 cafes in Melboure</h6>
                                <p className='text-comment twoline-box mt-2 mb-3 text-grey60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia molestie cras nisl...</p>
                                <div className='flex items-center'>
                                    <span className='p-[5px] rounded text-xs leading-custom text-grey text-sm font-bold bg-grey20 uppercase'>Tag</span>
                                    <span className='p-[5px] rounded text-xs leading-custom text-grey text-sm font-bold bg-grey20 uppercase ml-2'>Tag</span>
                                    <span className='p-[5px] rounded text-xs leading-custom text-grey text-sm font-bold bg-grey20 uppercase ml-2'>Tag</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Newsletter></Newsletter>
                    <div className='h-px bg-grey20 lg:my-20 my-10'></div>
                </div>
            </div>
            <Footer></Footer>
        </main >
    )
}
