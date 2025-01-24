import React from "react";
import Banner from "./Banner";
import Tax from "./Tax";


interface IHomeProps {

    bannerInfo1: string;
    bannerInfo2: string;
    homeRef: React.RefObject<HTMLDivElement>;
}

const Home = (props: IHomeProps) => {


    return (
        <section ref={props.homeRef}>
                   <Tax></Tax>
                   <Banner bannerInfo1={props.bannerInfo1} bannerInfo2={props.bannerInfo2} ></Banner>
        </section>
    )


}

export default Home;