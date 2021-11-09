import React from "react";
import about from "../data/aboutData";
import Head from "next/head";

const MetaComponent = (props) => {
    return(
        <Head>
            <title>{props.page} | {about.name} | {about.headline}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
            />
            <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
            />
            <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
            />
            <link rel='manifest' href='/site.webmanifest' />
        </Head>
    )
}

export default MetaComponent;