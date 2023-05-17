import Image from 'next/image'
import Link from "next/link";
export default function Destination({ title, subtitle, img, url }) {
    return (
        <Link
            href={"/" + url}
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
                <div className='ml-4 flex flex-col items-start'>
                    <p className="text-comment-sm text-grey60">{subtitle}</p>
                    <h6 className='text-base leading-6 font-semibold mb-1 border border-l-0 border-r-0 border-t-0 border-white group-hover:border-grey'>{title}</h6>
                </div>
            </div>
        </Link>
    )
}