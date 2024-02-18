// import Slider from "./Slider"
import { useEffect, useState } from "react";
import Slider from "./Slider";

const About = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("./about.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, [])


    const aboutData = data?.about;
    const biography = aboutData?.biography;
    return (
        <>

            <section className="about">
                <div className="about__content">
                    <div className="about__image">
                        <img src={aboutData?.aboutImage} alt={aboutData?.aboutAlt} />
                    </div>
                    <div className="about__content--right">
                        <h3 className="section__title">{aboutData?.aboutTitle}</h3>
                        {biography?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                        <Slider />
                    </div>
                </div>
            </section>

        </>
    )
}

export default About