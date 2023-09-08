import { Suspense } from 'react'
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import GoogleAnalytics from '@components/googleAnalytics/GoogleAnalytics';
import CookieBanner from '@components/cookieBanner/CookieBanner';
import GoogleRecaptcha from '@components/googleRecaptcha/GoogleRecaptcha';
import MessengerChat from '@components/messengerChat/MessengerChat';
import '@globals.scss';

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: 'Lorem ipsum',
    description: 'Lorem ipsum',
    metadataBase: new URL("https://example.com")
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="cs">
            <body className={poppins.className}>
                <Suspense>
                    <GoogleAnalytics gaMeasurmentId={String(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)} />
                </Suspense>
                <GoogleRecaptcha recaptchaKey={String(process.env.NEXT_PUBLIC_RECAPTCHA_KEY)} />
                <MessengerChat />
                <div className="container">
                    {children}
                    <Suspense>
                        <CookieBanner />
                    </Suspense>
                </div>
            </body>
        </html>
    )
}
