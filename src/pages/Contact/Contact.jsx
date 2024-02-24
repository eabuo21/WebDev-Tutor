import React from "react";
import Counter from "../../components/contact/Counter";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div className="main">
                <Counter />
                <section className="router-section-about">
                    <Link to="/about">
                        About Page
                    </Link>
                </section>
                </div>
        </>
    );
};

export default Contact;
