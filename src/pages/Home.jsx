import { Link } from 'react-router-dom';
// import useDataFetching from '../Hooks/useDataFetching';
import About from '../components/About';
import { SEO } from '../components/SEO';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
const Home = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            fetch("./home.json")
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

    if (loading) {
        return <Loading />;
    }

    const homeContent = data?.homeContent;
    const seoProps = {
        title: 'Home | Mohiuddin Ahmed',
        description: "Discover the inspiring vision of Mohiuddin Ahmad, the founder of KKML, through his remarkable commitment to shaping a brighter future for Bangladesh. Ahmad's dedication to fostering employment and championing environmental sustainability stands as a beacon of commendable leadership. Despite challenges, he has forged multiple thriving enterprises, showcasing his unwavering resolve and entrepreneurial vigor. Notably, his collaboration with esteemed organizations such as UNDP and ADB culminated in the establishment of a pollution-free brick factory, exemplifying the transformative potential of business in environmental stewardship.",
        name: homeContent?.title,
        tags: ["Mohiuddin Ahmad", "KKML founder", "Bangladesh visionary", "entrepreneurship", "employment opportunities", "environmental sustainability", "pollution-free brick factory", "UNDP partnership", "ADB collaboration"],
        type: 'website',
        image: "https://res.cloudinary.com/dfaw271y6/image/upload/v1708241872/founder_sir2_uicb0k.jpg",

    }

    return (
        <>
            <SEO {...seoProps} />
            <section className="home">
                <div className="wrapper">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="home__title">
                                <h1>{homeContent?.title}</h1>
                            </div>
                            <div className="home__designation">
                                <h2>
                                    {homeContent?.designation?.map((text, index) => (
                                        <span key={index} className='designation__multiline'>{text}</span>
                                    ))}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home__company">
                                <h3>{homeContent?.company}</h3>
                            </div>
                            <button className='primary__btn'>
                                <Link to={'/history'}> History</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="home__image">
                    <img src={homeContent?.homeImage} alt={homeContent?.title} />
                </div>
            </section>
            <section className="home__des">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="home__details">
                                <p>{homeContent?.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
        </>

    )
}

export default Home;