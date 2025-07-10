import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"],
    display: "swap", // Recommended for better UX
});

export const metadata: Metadata = {
    title: "Converso",
    description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={bricolage.variable}>
        <body className="antialiased">
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
            <Navbar />
            {children}
        </ClerkProvider>
        </body>
        </html>
    );
}
