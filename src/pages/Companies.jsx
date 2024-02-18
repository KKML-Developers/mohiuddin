import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { SEO } from "../components/SEO";

const Companies = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            fetch("./company.json")
                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                });
        };

        fetchData();

        const intervalId = setInterval(() => {
            setLoading(false);
            clearInterval(intervalId);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    if (loading) { return <Loading /> }
    const { company } = data;
    const seoProps = {
        title: 'Company | Mohiuddin Ahmed',
        description: "Discover the inspiring vision of Mohiuddin Ahmad, the founder of KKML, through his remarkable commitment to shaping a brighter future for Bangladesh. Ahmad's dedication to fostering employment and championing environmental sustainability stands as a beacon of commendable leadership. Despite challenges, he has forged multiple thriving enterprises, showcasing his unwavering resolve and entrepreneurial vigor. Notably, his collaboration with esteemed organizations such as UNDP and ADB culminated in the establishment of a pollution-free brick factory, exemplifying the transformative potential of business in environmental stewardship.",
        name: 'Mohiuddin Ahmed',
        tags: ["Mohiuddin Ahmad", "KKML founder", "Bangladesh visionary", "entrepreneurship", "employment opportunities", "environmental sustainability", "pollution-free brick factory", "UNDP partnership", "ADB collaboration"],
        type: 'website',
        image: "https://res.cloudinary.com/dfaw271y6/image/upload/v1708241872/founder_sir2_uicb0k.jpg",
    };

    return (
        <>
            <SEO {...seoProps} />
            <section className="company">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="company__desc">
                                {company?.desc?.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="company__wrapper">
                    <div className="wrapper">
                        <div className="row justify-content-center">
                            {company?.companies?.map((item, index) => (
                                <div className="col-lg-5" key={index}>
                                    <div className="company__container">
                                        <a href={item.url} target="/_blank">
                                            <div className="company__logo">
                                                <img src={item.logo} alt={item.alt} />
                                            </div>
                                            <div className="company__text">
                                                <p>{item.text}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Companies