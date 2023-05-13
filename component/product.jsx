import Image from 'next/image'
import Link from "next/link";
export default function Product({ title, location, subLocation, rating, newPrice, oldPrice, img }) {
    return (
        <Link
            href="/"
        >
            <div className='border border-solid border-dark20 rounded-xl overflow-hidden hover:shadow-sm'>
                <Image
                    src={img}
                    alt="Product"
                    className='w-full'
                    width={392}
                    height={144}
                    priority
                />
                <div className='p-6'>
                    <p className="text-comment-sm text-dark60 mb-2">{location}, {subLocation}</p>
                    <p className="product-title text-base font-semibold leading-6 mb-2">{title}</p>
                    <div className='flex items-center'>
                        <Image
                            src="/assets/img/star.svg"
                            alt="Icon"
                            width={17}
                            height={17}
                            priority
                        />
                        <Image
                            src="/assets/img/star.svg"
                            alt="Icon"
                            width={17}
                            height={17}
                            priority
                        />
                        <Image
                            src="/assets/img/star.svg"
                            alt="Icon"
                            width={17}
                            height={17}
                            priority
                        />
                        <Image
                            src="/assets/img/star-dark.svg"
                            alt="Icon"
                            width={17}
                            height={17}
                            priority
                        />
                        <Image
                            src="/assets/img/star-dark.svg"
                            alt="Icon"
                            width={17}
                            height={17}
                            priority
                        />
                        <span className='text-comment-sm text-dark60 mt-px ml-2'>{rating}</span>
                    </div>
                    <div className='flex items-center mt-2'>
                        <span className='text-comment-sm text-dark60 mr-1'>from</span>
                        <span className='product-title text-base font-semibold leading-6 mr-1'>{"A$" + newPrice}</span>
                        <span className='text-comment-sm text-dark60 mr-1'>{"A$" + oldPrice}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}