import Header from './header'

export default function RootLayout({ children }) {
    return (
        <main>
            <Header />
            {children}
        </main>
    )
}