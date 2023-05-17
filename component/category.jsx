import Image from 'next/image'
import Link from "next/link";
export default function Category({ title, subtitle, img }) {
    return (
        <Link
            href="/"
            className='group'
        >
            <div>
                <div className='rounded-xl mb-4 relative overflow-hidden'>
                    <Image
                        src={img}
                        alt="Category"
                        className='w-full'
                        width={288}
                        height={120}
                        priority
                    />
                    <p className=" leading-5 text-[12px] text-white font-bold uppercase bottom-4 left-4 absolute">{subtitle}</p>
                </div>
                <span className=' inline-block text-base leading-6 font-semibold border border-solid border-white border-l-0 border-r-0 border-t-0 group-hover:border-grey'>{title}</span>
            </div>
        </Link>
    )
}