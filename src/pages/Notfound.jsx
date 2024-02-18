import '../assets/scss/404.scss';
import { Icon } from '../components/Icon';
const Notfound = () => {
    return (
        <section className='notfound'>
            <h1>4<span><Icon iconName={'fi-sr-ghost'} /></span>4</h1>
            <h2>Error: 404 page not found</h2>
            <p>Sorry, the page {"you're"} looking for cannot be accessed</p>
            <a href="/">Go back to homepage</a>
        </section>
    )
}

export default Notfound;