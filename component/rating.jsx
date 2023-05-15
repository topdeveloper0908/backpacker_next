import Image from 'next/image'
export default function Rating({ active, size = 17 }) {
    const getRatings = num => {
        let content = [];
        for (let index = 0; index < 5; index++) {
            if (index < parseInt(active)) {
                content.push(<Image
                    src="/assets/img/star.svg"
                    alt="Icon"
                    width={size}
                    height={size}
                    key={index}
                    priority
                />);
            }
            else {
                content.push(<Image
                    src="/assets/img/star-dark.svg"
                    alt="Icon"
                    width={size}
                    height={size}
                    key={index}
                    priority
                />);
            }
        }
        return content;
    };
    return (
        <div className='flex items-center'>
            {
                getRatings(active)
            }
        </div>
    )
}