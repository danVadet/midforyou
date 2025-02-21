import React from "react";
import { Tax } from "./Tax";
import { Banner } from "./Banner";


interface IHomeProps {

    bannerInfo1: string;
    bannerInfo2: string;
    lang: string;
    homeRef: React.RefObject<HTMLDivElement>;
}

export const Home = (props: IHomeProps) => {

    return (
        <section ref={props.homeRef}>
                   <Tax  lang={props.lang}/>
                   <Banner bannerInfo1={props.bannerInfo1} bannerInfo2={props.bannerInfo2} />
        </section>
    );
}