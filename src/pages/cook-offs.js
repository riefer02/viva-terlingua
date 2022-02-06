import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Container from 'components/Container';
import SEO from 'components/SEO';
import Marquee from 'components/Marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';
import { formatTime, formatDate, formatPhoneNumber } from '../utils/helpers';

const CookOffsPage = ({ data }) => {
  const { allStrapiCookOffs, strapiGalleryImages } = data;
  const cookoffs = allStrapiCookOffs.edges;
  const marqueeData = {
    title: 'Upcoming Cookoffs',
    marqueeImage: strapiGalleryImages.image,
  };

  return (
    <Layout pageName="Upcoming Cook Offs">
      <SEO
        title="Upcoming Cook Offs"
        keywords={[`Upcoming Cook Offs`, `cookoff schedule`, `events`, `chili`]}
        description={''}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <div className="cook-offs">
          <div className="cook-offs__content">
            <ul className="cook-offs__list">
              {cookoffs.map((cookoff, index) => (
                <CookOffItem key={index} cookoff={cookoff} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CookOffsPage;

export const pageQuery = graphql`
  query CookOffsPage {
    allStrapiCookOffs {
      edges {
        node {
          city
          description
          endDate
          location
          name
          startDate
          state
          streetAddress
          year
          events {
            eventName
            startTime
          }
          contacts {
            name
            phone
          }
        }
      }
    }
    strapiGalleryImages(title: { eq: "Camp and Sky" }) {
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

function CookOffItem({ cookoff }) {
  const [isOpen, setOpen] = useState(false);
  const {
    city,
    description,
    endDate,
    events,
    location,
    name,
    startDate,
    state,
    streetAddress,
    contacts,
  } = cookoff.node;

  return (
    <div className={`cook-offs__item ${isOpen ? 'opened' : ''}`}>
      <div className="cook-offs__item-header">
        <FontAwesomeIcon
          className={`cook-offs__open-btn ${isOpen ? 'opened' : ''}`}
          icon="arrow-circle-down"
          onClick={() => setOpen(!isOpen)}
        ></FontAwesomeIcon>
        <h4>{name}</h4>
        <div className="cook-offs__summary">
          <p>
            {formatDate(startDate)} {endDate && `- ${formatDate(endDate)}`}
          </p>
          <span>||</span>
          <p>
            {location}, {streetAddress}, {city}, {state}
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="cook-offs__details">
          <h4>Information</h4>
          <div className="cook-offs__description">
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
          <div className="cook-offs__events-list">
            <h4>Events</h4>
            {events.length > 0 &&
              events.map((event, index) => (
                <div className="cook-offs__events-item" key={index}>
                  <span>{event.eventName}</span>
                  <span>{formatTime(event.startTime)}</span>
                </div>
              ))}
          </div>
          <div className="cook-offs__contacts">
            <h4>Contacts</h4>
            {contacts.length > 0 &&
              contacts.map((contact, index) => (
                <div className="cook-offs__contact-item" key={index}>
                  {contact.name} - Phone: {formatPhoneNumber(contact.phone)}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
