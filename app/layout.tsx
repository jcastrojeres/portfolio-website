import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joshua | Personal Portfolio",
  description:
    "Joshua Garcia is a full-stack developer with 2 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
          dark:bg-zinc-800 dark:text-gray-50 dark:text-opacity-85`}
      >
        <div
          className="bg-[#fbd6d2] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem]
         w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem] dark:bg-[#00ffff34]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem]
         w-[50rem] rounded-full blur-[10rem] sm:w-[68.7rem] md:left-[-33rem]
          lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#bb86fc68]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-center" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
