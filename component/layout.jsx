import Header from './header'
import Footer from './footer'

export default function RootLayout({ children }) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}