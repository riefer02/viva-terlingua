import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
import Marquee from "components/Marquee";
import SEO from "components/SEO";
import getStripe from "../utils/stripe";
import "../utils/fontawesome";
import validator from "validator";

const TicketsPage = ({ data }) => {
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    emailConfirm: "",
    phone: "",
    ticketCount: null,
  });

  const handleInput = (e, fieldName) => {
    switch (fieldName) {
      case "firstName":
        setForm((state) => {
          return { ...state, firstName: e.target.value };
        });
        break;
      case "lastName":
        setForm((state) => {
          return { ...state, lastName: e.target.value };
        });
        break;
      case "email":
        setForm((state) => {
          return { ...state, email: e.target.value };
        });
        break;
      case "emailConfirm":
        setForm((state) => {
          return { ...state, emailConfirm: e.target.value };
        });
        break;
      case "phone":
        setForm((state) => {
          return { ...state, phone: e.target.value };
        });
        break;
      case "ticketCount":
        setForm((state) => {
          return { ...state, ticketCount: parseInt(e.target.value) };
        });
        break;
      default:
        return;
    }
  };

  const handleValidation = () => {
    const {
      firstName,
      lastName,
      email,
      emailConfirm,
      phone,
      ticketCount,
    } = form;
    console.log("tickets", ticketCount);

    if (validator.isEmpty(firstName)) {
      setMessage(`What's your first name?`);
      return false;
    }
    if (validator.isEmpty(lastName)) {
      setMessage(`What's your last name?`);
      return false;
    }
    if (!validator.isEmail(email)) {
      setMessage(`That's not a email.`);
      return false;
    }
    if (email !== emailConfirm) {
      setMessage(`These email's don't match.`);
      return false;
    }
    if (!validator.isMobilePhone(phone)) {
      setMessage(`Please provide a phone number.`);
      return false;
    }
    if (!ticketCount >= 1 || ticketCount === null) {
      setMessage(`How many tickets is that?`);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form", form);
    const valid = handleValidation();
    valid
      ? redirectToCheckout(e)
      : console.log("We're missing your ::variable:: partner!");
  };

  // Checkout Logic
  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setMessage("Processing...");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [
        { price: "price_1Il2uJLGdKUm2tIda69M1hsh", quantity: form.ticketCount },
      ],
      customerEmail: form.email,
      successUrl: `http://localhost:8000/thank-you`,
      cancelUrl: `http://localhost:8000/tickets`,
      clientReferenceId:
        form.firstName +
        "—" +
        form.lastName +
        "—" +
        form.ticketCount +
        "—" +
        Date.now(),
    });

    if (error) {
      console.warn("Error:", error);
      setMessage("Something went wrong. Try again soon.");
    }
  };

  // Query Handling
  const {
    strapiTickets: { title, marqueeImage, panelImage },
  } = data;
  const image = getImage(panelImage);
  const marqueeData = { title, marqueeImage };

  return (
    <Layout pageName="tickets">
      <SEO
        title="Tickets"
        keywords={[`terlingua`, `chili`, `cook`, "off", "tickets"]}
      />
      <Helmet>
        <title>Buy Tickets</title>
      </Helmet>
      <Marquee marquee={marqueeData} />
      <Container>
        <div className="flex">
          {/* Description */}
          <div className="tickets-details">
            <div className="tickets-details__content">
              <p className="p-lead">
                Buy your ticket for the 2021 Tolbert's Chili Cook Off today.
                Each ticket is priced at $40 per person and includes the
                following:
              </p>
              <div className="relative">
                <h2 className="tickets-details__header">What's Included</h2>
              </div>
              <ul className="tickets-details__list">
                <li className="tickets-details__item">
                  <FontAwesomeIcon
                    icon="pepper-hot"
                    className="tickets-details__item-caret"
                  />
                  Camping for the entire weekend through Sunday.
                </li>
                <li className="tickets-details__item">
                  <FontAwesomeIcon
                    icon="pepper-hot"
                    className="tickets-details__item-caret"
                  />
                  Live music for three nights straight with over eight bands.
                </li>
                <li className="tickets-details__item">
                  <FontAwesomeIcon
                    icon="pepper-hot"
                    className="tickets-details__item-caret"
                  />
                  Opportunity to sign up to judge in the competition.
                </li>
                <li className="tickets-details__item">
                  <FontAwesomeIcon
                    icon="pepper-hot"
                    className="tickets-details__item-caret"
                  />
                  Interact with over forty unique vendors from across the
                  nation.
                </li>
                <li className="tickets-details__item">
                  <FontAwesomeIcon
                    icon="pepper-hot"
                    className="tickets-details__item-caret"
                  />
                  Proceeds go towards fighting ALS.
                </li>
              </ul>
              <p className="tickets-details__disclaimer">
                <span>Disclaimer:</span> Consumption of too much chili might
                result in a good time!
              </p>
            </div>
          </div>
          {/* Form */}
          <div className="tickets-form">
            <h2 className="tickets-form__header">Registration Form</h2>
            <div className="tickets-form__message">
              {message ? message : ""}
            </div>
            <form className="tickets-form__content">
              <label className="tickets-form__label"> First Name</label>
              <input
                required
                className="tickets-form__input"
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={(e) => {
                  handleInput(e, "firstName");
                }}
              ></input>
              <label className="tickets-form__label">Last Name</label>
              <input
                required
                className="tickets-form__input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={(e) => {
                  handleInput(e, "lastName");
                }}
              ></input>
              <label className="tickets-form__label">Email</label>
              <input
                required
                className="tickets-form__input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  handleInput(e, "email");
                }}
              ></input>
              <label className="tickets-form__label">Confirm Email</label>
              <input
                required
                className="tickets-form__input"
                type="email"
                name="emailConfirm"
                placeholder="Email Confirmation"
                onChange={(e) => {
                  handleInput(e, "emailConfirm");
                }}
              ></input>
              <label className="tickets-form__label">Phone Number</label>
              <input
                required
                className="tickets-form__input"
                type="text"
                name="phone"
                placeholder="Phone number"
                onChange={(e) => {
                  handleInput(e, "phone");
                }}
              ></input>
              <label className="tickets-form__label">Number of Tickets</label>
              <input
                required
                className="tickets-form__input"
                type="number"
                min="0"
                name="numTickets"
                placeholder="#"
                onChange={(e) => {
                  handleInput(e, "ticketCount");
                }}
              ></input>
              <button
                className="tickets-form__submit-btn"
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Proceed to Checkout
              </button>
            </form>
          </div>
        </div>
        <GatsbyImage
          image={image}
          alt="Hillside Journey!"
          className="image__full-panel rounded-lg my-16 shadow-md"
        />
      </Container>
    </Layout>
  );
};

export default TicketsPage;

export const pageQuery = graphql`
  query TicketsQuery {
    strapiTickets {
      title
      id
      marqueeImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      panelImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
