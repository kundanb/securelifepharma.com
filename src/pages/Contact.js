import { Component } from 'react';
import Feather from '../components/Feather';
import { MapPin } from 'react-feather';
import './Contact.scss';

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    description: '',
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div id="contact" className="main-sec">
        <div className="container">
          <h1>Contact With Us</h1>

          <section className="addr-sec flx flx-col flx-ai-c">
            <h2 className="flx flx-ai-c">
              <Feather icon={MapPin} />
              &nbsp; Come to us
            </h2>

            <p>
              <strong>Address:</strong>
              <br />
              Secure Life Pharmaceuticals
              <br />
              Khasra No. 537, Sikhera Industial Area,
              <br />
              Modinagar, Dist. Ghaziabad, U.P.
              <br />
              PIN Code: 201201
              <br />
              <br />
              <strong>Email:</strong>
              <br />
              <a href="mailto:securelife20@yahoo.com">securelife20@yahoo.com</a>
            </p>
          </section>

          <section>
            <h2>Have a Query? Ask with us</h2>

            <form
              id="contact-form"
              autoComplete="off"
              action="/submit_query"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                value={this.state.subject}
                onChange={this.handleChange}
                required
              />

              <textarea
                name="description"
                placeholder="Describe Your Query"
                value={this.state.description}
                onChange={this.handleChange}
                required
              ></textarea>

              <button type="submit" className="ui-btn">
                Submit Query
              </button>
            </form>
          </section>

          <h2>Directions to the Industry</h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55918.67585702823!2d77.55240047330838!3d28.84132381792819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf5a98a8f66c9%3A0x2d91cd46d439090f!2sSecure%20Life%20Pharmaceuticals!5e0!3m2!1sen!2sin!4v1605593632084!5m2!1sen!2sin"
            className="map"
            title="Secure Life Pharmaceuticals Directions"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    );
  }
}
