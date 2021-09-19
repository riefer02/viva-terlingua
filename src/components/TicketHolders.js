import React, { useEffect, useState } from "react";
import { logout } from "../utils/auth";
import { navigate } from "gatsby-link";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

const fetchTicketHolders = async () => {
  return await axios({
    method: "GET",
    url: `${process.env.STRAPI_URL}/ticket-holders`,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const TicketItem = ({ ticketHolder }) => {
  const { name, numberOfTickets, completedCheckIns, customerID } = ticketHolder;
  const [updatedCheckIns, setUpdatedCheckIns] = useState(0);
  const [inactive, setInactive] = useState(true);

  useEffect(() => {}, []);

  return (
    <li className="ticket-item" key={customerID}>
      <div className="ticket-item__column">
        <div className="ticket-item__header">Name</div>
        <div className="ticket-item__name">{name}</div>
      </div>
      <div className="ticket-item__column">
        <div className="ticket-item__header">Tickets</div>
        <div className="ticket-item__number">{numberOfTickets}</div>
      </div>
      <div className="ticket-item__column">
        <div className="ticket-item__header">Check Ins</div>
        <div className="ticket-item__number flex items-center">
          <div className="ticket-item__minus mr-5" onClick={() => {}}>
            -
          </div>
          {updatedCheckIns}
          <div className="ticket-item__plus ml-5" onClick={() => {}}>
            +
          </div>
        </div>
      </div>
      <div className="ticket-item__column">
        <div className="ticket-item__header">Update</div>
        <FontAwesomeIcon
          icon={`pen-square`}
          className={inactive ? "inactive" : ""}
        />
      </div>
    </li>
  );
};

export default function TicketHolders() {
  const [ticketHoldersList, setTicketHoldersList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(async () => {
    const ticketHolders = await fetchTicketHolders();
    setTicketHoldersList(ticketHolders);
  }, []);

  return (
    <div className="ticket-list__wrapper">
      <div className="ticket-list__utility-bar">
        <FontAwesomeIcon
          icon={`filter`}
          className="ticket-list__filter-button"
        />
        <button
          className="ticket-list__logout-btn"
          onClick={(event) => {
            event.preventDefault();
            logout(() => navigate(`/portal/login`));
          }}
        >
          Log Out
        </button>
      </div>
      <ul className="ticket-list">
        {ticketHoldersList.map((ticketHolder, index) => (
          <TicketItem ticketHolder={ticketHolder} key={index} />
        ))}
      </ul>
    </div>
  );
}
