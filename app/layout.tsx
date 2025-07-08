export const metadata = {
    title: "My App",
    description: "A simple Next.js app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div>
            <h1>Hello World Layout</h1>
            {children}
        </div>
        </body>
        </html>
    );
}
