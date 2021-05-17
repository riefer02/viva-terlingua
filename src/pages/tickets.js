import React, { useState } from "react";
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

const TicketsPage = ({ data }) => {
  // Form Data
  const [form, setForm] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    phoneNumber: "",
    ticketCount: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form", form);
    console.log("Proceed to Checkout");
  };

  const handleInput = (e, fieldName) => {
    console.log(e.target.value);
    switch (fieldName) {
      case "name":
        setForm((state) => {
          return { ...state, name: e.target.value };
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
          return { ...state, ticketCount: e.target.value };
        });
        break;
      default:
        return;
    }
  };

  // const handleValidation = () => {};

  // Checkout Logic
  const [loading, setLoading] = useState(false);
  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1Il2uJLGdKUm2tIda69M1hsh", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
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
            <form className="tickets-form__content">
              <label className="tickets-form__label">Name</label>
              <input
                className="tickets-form__input"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => {
                  handleInput(e, "name");
                }}
              ></input>
              <label className="tickets-form__label">Email</label>
              <input
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
                className="tickets-form__input"
                type="number"
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
