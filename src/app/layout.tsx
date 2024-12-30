import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import AuthSessionProvider from "@/lib/auth/AuthSessionProvider";
import { getServerSession } from "next-auth";
import authConfig from "@/lib/auth/authConfig";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AI Meme Generator",
    description: "Transform Your Thoughts into Hilarious Memes in Seconds!",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authConfig);
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
            </head>
            <body className={inter.className}>
                {/* <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-grow">
                            <AuthSessionProvider session={session}>
                                {children}
                            </AuthSessionProvider>
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider> */}
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    {/* <Web3ModalProvider initialState={initialState}> */}
                    <AuthSessionProvider session={session}>
                        <Header />
                        {children}
                        <Footer />
                        <ToastContainer />
                    </AuthSessionProvider>
                    {/* </Web3ModalProvider> */}
                </Providers>
            </body>
        </html>
    );
}
