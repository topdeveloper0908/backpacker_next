import Image from 'next/image'
export default function Newsletter() {
    return (
        <div className='newsletter md:block hidden text-center rounded-lg overflow-hidden' style={{ backgroundImage: "url('/assets/home/intro.png')" }}>
            <h3 className='font-semibold text-grey pt-20 pb-2'>The backpacker newsletter</h3>
            <p className='text-comment text-grey60'>Join our backpacker newsletter and get special offers, inspiration and experience giveaways.</p>
            <div className='relative pb-20 max-w-[632px] mx-auto mt-6'>
                <Image
                    src="/assets/img/email.svg"
                    alt="Icon"
                    className='absolute left-0 ml-4 mt-5 pt-px'
                    width={20}
                    height={18}
                    priority
                />
                <input type='text' className='w-full pl-12 py-4 rounded-md bg-white text-comment text-grey60 border-2 border-solid border-grey20' placeholder='Your email address'></input>
                <button className='btn btn-ghost absolute rounded right-0 mt-3 mr-2'>Join</button>
            </div>
        </div>
    )
}