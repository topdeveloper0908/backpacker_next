import Image from 'next/image'
import Link from "next/link";
export default function Destination({ title, subtitle, img }) {
    return (
        <Link
            href="/"
        >
            <div className="flex items-center group mb-6">
                <div className='rounded-xl'>
                    <Image
                        src={img}
                        alt="Destination"
                        width={88}
                        height={80}
                        priority
                    />
                </div>
                <div className='ml-4'>
                    <p className="text-comment-sm text-dark60">{subtitle}</p>
                    <h6 className='text-base leading-6 font-semibold mb-1 border border-l-0 border-r-0 border-t-0 border-white group-hover:border-dark100'>{title}</h6>
                </div>
            </div>
        </Link>
    )
}