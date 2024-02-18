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
        title: 'Home | Mostafa Jamal',
        description: "Explore the dynamic leadership of Mr. Mostafa Jamal Mohiuddin, Managing Director of Khoshroz Kitab Mahal, Magura Group, and NDC Auto Brick. Discover his extensive involvement in various businesses, including Magura Paper Mills Ltd and Bangladesh Monospool Paper Manufacturing Company Ltd. Learn about his visionary leadership, business acumen, and dedication to making a positive impact on Bangladesh.",
        name: homeContent?.title,
        tags: [
            "Mostafa Jamal Mohiuddin",
            "Managing Director",
            "Khoshroz Kitab Mahal",
            "Magura Group",
            "NDC Auto Brick",
            "Magura Paper Mills Ltd",
            "Bangladesh Monospool Paper Manufacturing Company Ltd",
            "Paper Processing & Packaging Ltd",
            "Jatiya Mudran",
            "Business Leader",
            "Entrepreneurship",
            "Leadership Skills",
            "Business Acumen",
            "Community Involvement",
            "Bangladesh Business",
            "Leadership Excellence",
            "Visionary Leader",
            "Corporate Management",
            "Bangladesh Economy",
            "Business Ventures",
            "Community Impact"
        ],
        type: 'website',
        image: "https://res.cloudinary.com/dfaw271y6/image/upload/v1705914737/MD-sir_k3wop8.jpg",
        socialLinks: [
            {
                icon: 'brands-facebook',
                link: 'https://www.facebook.com/profile.php?id=100004437858898',
            }
        ],
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