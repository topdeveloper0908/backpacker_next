import Image from 'next/image'
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="md:flex flex-row md:mt-20 mt-12 md:mb-10 mb-6">
                    <div className="md:basis-2/3 flex flex-col">
                        <div className='flex justify-between items-center'>
                            <Image
                                src="/assets/img/logo-dark.svg"
                                alt="Vercel Logo"
                                className="mb-6"
                                width={154}
                                height={32}
                                priority
                            />
                            <div className="md:hidden flex items-center mt-auto mb-6">
                                <Link className='p-[10px] bg-dark20 rounded-full mr-6' href="/">
                                    <Image
                                        src="/assets/img/instagram.svg"
                                        alt="Icon"
                                        width={20}
                                        height={20}
                                        priority
                                    />
                                </Link>
                                <Link className='w-10 h-10 flex items-center justify-center bg-dark20 rounded-full' href="/">
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
                        <p className="text-comment text-dark60 max-w-2xl pr-16 mb-10">
                            Book your next backpacker adventure today! Get backpacker travel guides, tips and tricks to the real Australia.
                        </p>
                        <div className="md:flex hidden items-center mt-auto">
                            <Link className='p-[10px] bg-dark20 rounded-full mr-6' href="/">
                                <Image
                                    src="/assets/img/instagram.svg"
                                    alt="Icon"
                                    width={20}
                                    height={20}
                                    priority
                                />
                            </Link>
                            <Link className='w-10 h-10 flex items-center justify-center bg-dark20 rounded-full' href="/">
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
                    <div className="md:basis-1/3">
                        <div className="flex">
                            <div className="widget md:mx-6">
                                <h6 className="font-semibold text-base leading-6 mb-4">Popular destinations</h6>
                                <div className='bg-dark20 mb-4' style={{ width: '183px', height: '1px' }}>
                                </div>
                                <div>
                                    <Link className='text-comment block text-dark60 hover:text-primary mb-3' href="/">Melbourne</Link>
                                    <Link className='text-comment block text-dark60 hover:text-primary mb-3' href="/">Sydney</Link>
                                    <Link className='text-comment block text-dark60 hover:text-primary mb-3' href="/">Adelaide</Link>
                                    <Link className='text-comment block text-dark60 hover:text-primary mb-3' href="/">Perth</Link>
                                    <Link className='text-comment block text-dark60 hover:text-primary mb-3' href="/">Sunshine Coast</Link>
                                </div>
                            </div>
                            <div className="widget">
                                <h6 className="font-semibold text-base leading-6 mb-4">More</h6>
                                <div className='bg-dark20 mb-4' style={{ width: '183px', height: '1px' }}>
                                </div>
                                <div>
                                    <Link className='text-comment block text-dark60 hover:text-primary mb-3' href="/">Guides</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-dark20 h-px'></div>
                <div className="md:flex py-5">
                    <span className='text-comment-sm text-dark60 mr-4'>© 2023 Backpackers.com.au</span>
                    <Link className='block md:my-0 my-4 text-comment-sm text-dark60 hover:text-primary mr-4' href="/">Terms & Conditions</Link>
                    <Link className='block text-comment-sm text-dark60 hover:text-primary mr-4' href="/">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    )
}
