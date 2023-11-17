import Footer from "./Footer";
import Header from "./Header";
import classes from "./Style.module.scss";
import Head from "next/head";

const RootLayout = ({ children }: { children: any }) => {
  return (
    <div className={classes.layout}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      <Header />

      <div className={classes.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
