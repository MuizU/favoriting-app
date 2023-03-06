import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Noto_Sans} from "next/font/google";

const noto_Sans = Noto_Sans({weight: ["400", "700"], subsets: ["latin"]});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <style jsx global>{`
        html {
          font-family: ${noto_Sans.style.fontFamily};
        }
      `}</style>
        <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
