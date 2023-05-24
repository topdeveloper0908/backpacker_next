import Image from 'next/image'
import Link from "next/link";

export default function Footer() {
    return (
        <footer className='border-t border-solid border-grey20 md:pt-20 pt-10'>
            <div className="container">
                <div>
                    <div className='flex'>
                        <Image
                            src="/assets/img/logo-dark.svg"
                            alt="Logo"
                            width={154}
                            height={32}
                            priority
                        />
                        <span className='uppercase p-2 text-purple bg-purple40 font-bold text-xs leading-custom -tracking-tighter ml-4 rounded'>Tours</span>
                    </div>
                    <div className="flex md:flex-row flex-col md:items-center items-start mt-6 mb-10">
                        <p className="text-comment text-grey60 max-w-2xl pr-16 md:mb-0 mb-6">
                            Book your next backpacker adventure today! Discover epic tours, thrilling experiences, exciting activities, and expert backpacker guides to Australia.
                        </p>
                        <Link className='p-[10px] bg-grey20 rounded-full md:ml-auto' href="/">
                            <Image
                                src="/assets/img/instagram.svg"
                                alt="Icon"
                                width={20}
                                height={20}
                                priority
                            />
                        </Link>
                    </div>
                </div>
                <div className='bg-grey20 h-px'></div>
                <div className="md:flex py-5">
                    <span className='text-comment-sm text-grey60 mr-4'>© 2023 Backpackers.com.au</span>
                    <Link className='block md:my-0 my-4 text-comment-sm text-grey60 hover:text-purple mr-4' href="/">Terms & Conditions</Link>
                    <Link className='block text-comment-sm text-grey60 hover:text-purple mr-4' href="/">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    )
}
