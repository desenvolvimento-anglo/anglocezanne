"use client";
import "../../app/globals.css";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { PropsLayout } from "../../../types";
import { Ysabeau } from "next/font/google";
const ysabeau = Ysabeau({ subsets: ["latin"] });

const LayoutBlog: React.FC<PropsLayout> = ({
  children,
  ogTitle,
  ogDescription,
  ogImageUrl,
  ogOriginalUrl,
  ogKeywords,
}) => {
  const title = `${ogTitle} | Anglo Cezanne`;
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="./img/favicon.webp"
          type="image/x-icon"
        />
        <meta name="robots" content="index, follow" />
        <title>{title}</title>
        <meta name="description" content={ogDescription} />
        <meta name="keywords" content={ogKeywords} />
        <meta name="image" content={ogImageUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:src" content={ogImageUrl} />
        <meta name="description" content={ogDescription} />
        <meta property="og:url" content={ogOriginalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <link rel="canonical" href={ogOriginalUrl} />
      </Head>
      <div className={ysabeau.className}>
        <Header />
        <main className="mt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutBlog;
