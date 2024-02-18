import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { SEO } from '../components/SEO';

const About = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            fetch("./history.json")
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
    const history = data?.history;
    const seoProps = {
        title: 'History of | Mohiuddin Ahmed',
        description: "Discover the inspiring vision of Mohiuddin Ahmad, the founder of KKML, through his remarkable commitment to shaping a brighter future for Bangladesh. Ahmad's dedication to fostering employment and championing environmental sustainability stands as a beacon of commendable leadership. Despite challenges, he has forged multiple thriving enterprises, showcasing his unwavering resolve and entrepreneurial vigor. Notably, his collaboration with esteemed organizations such as UNDP and ADB culminated in the establishment of a pollution-free brick factory, exemplifying the transformative potential of business in environmental stewardship.",
        name: "Mohiuddin Ahmed",
        tags: ["Mohiuddin Ahmed", "KKML founder", "Bangladesh visionary", "entrepreneurship", "employment opportunities", "environmental sustainability", "pollution-free brick factory", "UNDP partnership", "ADB collaboration"],
        type: 'website',
        image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1708241872/founder_sir2_uicb0k.jpg',
    };
    return (
        <>
            <SEO {...seoProps} />
            <section className="history">
                {history?.map((item, index) => (

                    <div className="history__content" key={index}>

                        <div className="history__image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="history__description">
                            <div className="history__description--top">
                                <h3>{item.designation}</h3>
                                <a href={item.webUrl} target='/_blank'>{item.name}</a>
                                <p>{item.company}</p>
                            </div>
                            <div className="history__description--main">
                                <h4>{item.descTitle}</h4>
                                {item.description && item.description.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default About