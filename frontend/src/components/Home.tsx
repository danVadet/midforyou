import React from "react";
import Banner from "./Banner";
import Tax from "./Tax";


interface IHomeProps {

    homeRef: React.RefObject<HTMLDivElement>;
}

const Home = (props: IHomeProps) => {


    return (
        <section ref={props.homeRef}>
                   <Tax></Tax>
                   <Banner></Banner>
        </section>
    )


}

export default Home;