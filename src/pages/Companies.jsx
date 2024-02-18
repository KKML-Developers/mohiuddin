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
        title: 'Companies | Mostafa Jamal',
        description: "Explore the diverse ventures and benevolent services offered by the Khoshroz Group under the leadership of Mostafa Jamal Mohiuddin. Learn about the group's commitment to societal betterment and economic development through industries spanning food, clothing, housing, education, and healthcare.",
        name: "homeContent.title",
        type: 'website',
        image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1705914737/MD-sir_k3wop8.jpg',
        socialLinks: [
            {
                icon: 'brands-facebook',
                link: 'https://www.facebook.com/profile.php?id=100004437858898',
            }

        ],
        tags: [
            "Khoshroz Group",
            "Khoshroz Group Limited",
            "Khoshroz Kitab Mahal",
            "Khoshroz Kitab Mahal Limited",
            "National Development Company Limited",
            "National Development Company Limited",
            "Jatiya Mudran",
            "Jatiya Mudran Limited",
            "Magura Agriculture Park Limited",
            "Magura Agriculture Park Limited",
            "E-Stylze fashion e-commerce",
            "E-stylze Fashion Limited",
            "Dream International Limited",
            "Dream International Limited",
            "Societal Betterment",
            "Economic Development",
            "Bangladesh Industries",
            "Khoshroz Group Ventures",
            "Multi-faceted Entity",
        ],
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