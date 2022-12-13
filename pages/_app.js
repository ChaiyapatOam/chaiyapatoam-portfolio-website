import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <NextSeo
      title="Chaiyapat Oam"
      titleTemplate="Chaiyapatoam"
      defaultTitle="chaiyapatoam"
      description="A College Student at KMUTT & FullStack Developer Portfolio Website"
      canonical="https://chaiyapatoam.vercel.app/"
      openGraph={{
        url:"https://chaiyapatoam.vercel.app/",
        title:"Chaiyapat Oam",
        description:"A College Student at KMUTT & FullStack Developer",
        images: [
          {
            url:"/chaiyapatoam.jpg",
            width:800,
            height:420,
            alt:"ChaiyapatOam"
          }
        ]
      }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
