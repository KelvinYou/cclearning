import type { Metadata } from "next";
import Header from "./_components/header";
import Footer from "./_components/footer";

// export const metadata: Metadata = {
//   title: 'CC Learning',
//   description: '',
//   icons: {
//     icon: '/logo.jpg',
//   },
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <div className="min-h-[calc(100vh-136px)]">
        {children}
      </div>

      <Footer />
    </>
  );
}
