import type { AppProps } from "next/app";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { GlobalStyle } from "../GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "15vmin 7vmin",
          height: "100%",
        }}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
