import { useState } from 'react'
import Header from './header'
import Footer from './footer'
import classNames from 'classnames';
export default function RootLayout({ children }) {
    const [searchDropdown, setSearchDropdown] = useState(false);
    return (
        <main className='relative'>
            <div className={classNames('absolute top-0 left-0 right-0 bottom-0 bg-grey opacity-10 z-10', {
                'hidden': !searchDropdown
            })}></div>
            <Header searchDropdown={searchDropdown} setSearchDropdown={setSearchDropdown} />
            {children}
            <Footer />
        </main>
    )
}