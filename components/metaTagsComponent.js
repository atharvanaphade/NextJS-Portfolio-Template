import React from "react";
import about from "../data/aboutData";
import Head from "next/head";

const MetaComponent = (props) => {
    return(
        <Head>
            <title>{props.page} | {about.name} | {about.headline}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}

export default MetaComponent;