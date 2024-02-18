import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from './Icon';

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const [data, setData] = useState({});
    useEffect(() => {
        document.title = activeLink || 'Home';
    }, [activeLink]);

    useEffect(() => {
        fetch("./common.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, [])


    const headerContent = data.headerContent;
    // console.log(headerContent)

    const headerToggle = () => {
        setMenuToggle(!menuToggle);
    };
    const handleNavItemClick = (url) => {
        setMenuToggle(false);
        setActiveLink(url);
    };

    return (
        <header className={`header ${menuToggle ? 'active' : ''}`}>
            <div className="wrapper">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to={headerContent?.url}>
                            <img src={headerContent?.logo} alt={headerContent?.logoAlt} />
                        </Link>
                        <button className="d-md-none d-sm-block header__mobile--nav" onClick={headerToggle}>
                            {menuToggle ? <Icon iconName='fi-rr-cross' /> : <Icon iconName='fi-rr-bars-staggered' />}
                        </button>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav--list list-unstyled">
                            {headerContent?.nav.map((navItem, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={navItem.url}
                                        activeclassname="active" // Apply this class when the link is active
                                        onClick={() => handleNavItemClick(navItem.name)}
                                    >
                                        {navItem.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* <div className="header__social">
                        <ul className="header__social--icons list-unstyled">
                            {headerContent?.social.map((socialItem, index) => (
                                <li key={index}>
                                    <Link to={socialItem.link} target='_blank' rel="noreferrer" title={socialItem.name} name={socialItem.name}>
                                        <Icon iconName={socialItem.icon} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
