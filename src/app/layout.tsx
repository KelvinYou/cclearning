import type { Metadata } from "next";
import { Encode_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "./_components/footer";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });
const poppins = Encode_Sans({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CC Learning',
  description: '',
  icons: {
    icon: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <div className="min-h-[calc(100vh-56px)]">
            {children}
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
