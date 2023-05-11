import Image from 'next/image'
import Link from "next/link";
export default function Blog({ category, title, subtitle, img }) {
    return (
        <Link
            href="/"
        >
            <div className="group blog-wrapper">
                <div className='rounded-xl'>
                    <Image
                        src={img}
                        alt="Destination"
                        width={392}
                        height={192}
                        priority
                    />
                </div>
                <div className='mt-6'>
                    <p className="text-xs leading-5 font-semibold uppercase  text-primary mb-4">{category}</p>
                    <span className='text-base inline-block leading-6 font-semibold mb-2 border border-l-0 border-r-0 border-t-0 border-transparent group-hover:border-dark100'>{title}</span>
                    <p className="text-base subtitle leading-6 text-dark60">{subtitle}</p>
                </div>
            </div>
        </Link>
    )
}