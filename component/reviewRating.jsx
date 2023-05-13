import Image from 'next/image'
export default function ReviewRating({ reviews, rating }) {
    const getRatings = num => {
        let content = [];
        for (let index = 0; index < 5; index++) {
            if (index < rating.toFixed(0)) {
                content.push(<Image
                    src="/assets/img/star-white1.svg"
                    alt="Icon"
                    width={17}
                    height={17}
                    key={index}
                    priority
                />);
            }
            else {
                content.push(<Image
                    src="/assets/img/star-white2.svg"
                    className='opacity-50'
                    alt="Icon"
                    width={17}
                    height={17}
                    key={index}
                    priority
                />);
            }
        }
        return content;
    };
    return (
        <div className='flex md:flex-col flex-row items-center justify-center bg-alert rounded-xl overflow-hidden md:w-auto w-full'>
            <h1 className='md:mt-4 md:mb-1 md:ml-0 ml-4 text-white'>{rating}</h1>
            <div className='flex md:mb-4 pb-px md:mx-0 mx-4'>
                {
                    getRatings(rating)
                }
            </div>
            <p className='text-comment text-white md:px-12 px-2 md:py-2 py-4 flex-1 text-center' style={{ background: '#eca53b' }}><span className='relative z-10'>{reviews + ' Reviews'}</span></p>
        </div>
    )
}