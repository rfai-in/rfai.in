import Document, { Head, Html, Main, NextScript } from "next/document";
// Importing the Google Analytics Measurement ID from the environment variable
// const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

// const isProd = process.env.NODE_ENV === "production";

import GoogleAnalyticsScript from "../components/GoogleAnalytics";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <meta name="description" content="Royalty Free AI Generated Music" />
          <meta property="og:site_name" content="voxlab.co" />
          <meta
            property="og:description"
            content="Free AI Powered Image Processing Tools."
          />
          <meta property="og:title" content="Royalty Free AI Generated Music" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Royalty Free AI Generated Music" />
          <meta
            name="twitter:description"
            content="Royalty Free AI Generated Music"
          />
          {/* Add Image here for a preview */}
          <meta
            property="og:image"
            content="https://ik.imagekit.io/uti9laa1e/rfai?updatedAt=1702218586543"
          />
          <meta
            name="twitter:image"
            content="https://ik.imagekit.io/uti9laa1e/rfai?updatedAt=1702218586543"
          />

          {/* {isProd && (
            <>
              <script async src={gtag} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                      page_path: window.location.pathname
                    });
                  `,
                }}
              />
            </>
          )} */}

          <GoogleAnalyticsScript />
          
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
