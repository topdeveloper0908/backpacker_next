import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <div className="flex items-center justify-between py-6 px-10">
                <Image
                    src="/assets/img/logo-dark.svg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={154}
                    height={32}
                    priority
                />
                <div className='header-menu flex items-center content-center'>
                    <button className='text-base leading-6 font-semibold px-9 py-2 text-dark60 hover:text-primary'>
                        Destinations
                    </button>
                    <button className='text-base leading-6 font-semibold px-3 py-2 text-dark60 hover:text-primary'>
                        Guides
                    </button>
                </div>
            </div>
        </header>
    )
}
