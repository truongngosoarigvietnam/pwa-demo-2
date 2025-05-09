import "./globals.css";

export const metadata = {
    title: "Todo App",
    description: "Todo App PWA",
    manifest: "/manifest.json",
    themeColor: "#000000",
    icons: {
        icon: "/icons/android-chrome-192x192.png",
        apple: "/icons/android-chrome-192x192.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
            </head>
            <body>{children}</body>
        </html>
    );
}
