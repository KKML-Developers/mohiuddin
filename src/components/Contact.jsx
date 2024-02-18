import { useState } from 'react';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="contact">
            <div className="wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact__title">
                            <h3 className="section__title">Contact</h3>
                            <p>Feel free to reach out to his team</p>
                        </div>
                        <div className="contact__form">
                            <form action="#" method="post" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name:</label>
                                    <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject:</label>
                                    <input type="text" className="form-control" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="body">Body:</label>
                                    <textarea className="form-control" id="body" rows="3" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;