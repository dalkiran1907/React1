import "@/styles/globals.css";
import Try1 from "@/components/Try1";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Try1 />
      <Component {...pageProps} />
    </>
  );
}
