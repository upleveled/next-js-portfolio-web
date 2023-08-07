import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Incididunt in cillum magna occaecat nisi qui in exercitation
              labore anim adipisicing amet irure tempor.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: lutfhi@me.com</li>
              <li className="contact-item">Phone: +6212344321007</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
