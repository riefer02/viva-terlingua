import React, { useEffect, useState } from "react";
import { logout } from "../utils/auth";
import { navigate } from "gatsby-link";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

const fetchTicketHolders = async (callback) => {
  return await axios({
    method: "GET",
    url: `${process.env.STRAPI_URL}/ticket-holders`,
  })
    .then((res) => callback(res.data))
    .catch((err) => console.log(err.message));
};

export default function TicketHolders() {
  const [ticketHoldersList, setTicketHoldersList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    showCompletedCheckIns: true,
    searchValue: "",
  });

  useEffect(async () => {
    await fetchTicketHolders(setTicketHoldersList);
  }, []);

  const filterTicketHoldersList = (activeFilters, ticketHoldersList) => {
    const nameSearch = activeFilters.searchValue.toUpperCase();
    const showCompleted = activeFilters.showCompletedCheckIns;
    let list = ticketHoldersList;

    if (nameSearch.length > 0) {
      list = list.filter((i) => {
        return i.name.toUpperCase().includes(nameSearch);
      });
    }

    if (!showCompleted) {
      list = list.filter((i) => {
        return i.completedCheckIns !== i.numberOfTickets;
      });
    }

    setFilteredList(list);
  };

  useEffect(() => {
    filterTicketHoldersList(activeFilters, ticketHoldersList);
  }, [ticketHoldersList, activeFilters]);

  return (
    <div className="ticket-list__wrapper">
      <TicketListUtilities
        updateFilters={setActiveFilters}
        filters={activeFilters}
      />
      <TicketListHeaders />
      <ul className="ticket-list">
        {filteredList.map((ticketHolder, index) => (
          <TicketItem
            ticketHolder={ticketHolder}
            callback={setTicketHoldersList}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

const TicketItem = ({ ticketHolder, callback }) => {
  const { name, numberOfTickets, completedCheckIns, id } = ticketHolder;
  const [count, setCount] = useState(completedCheckIns);
  const [inactive, setInactive] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const modifyValue = (mod) => {
    if (mod) {
      if (count === numberOfTickets) return;
      setCount(count + 1);
    } else {
      if (count === 0) return;
      setCount(count - 1);
    }
  };

  const handleUpdate = () => {
    const data = { id, completedCheckIns: count };
    if (count !== completedCheckIns) {
      updateCheckIns(data);
      setLoading(true);
    }
  };

  const updateCheckIns = async (data) => {
    await axios({
      method: "PUT",
      url: `${process.env.STRAPI_URL}/ticket-holders/${data.id}`,
      data: {
        completedCheckIns: data.completedCheckIns,
      },
    })
      .then(async (res) => {
        await fetchTicketHolders(callback);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    count !== completedCheckIns ? setInactive(false) : setInactive(true);
  }, [count]);

  useEffect(() => {
    if (numberOfTickets === completedCheckIns) setInactive(true);
  }, [isLoading]);

  return (
    <li
      className={`ticket-item ${
        numberOfTickets === completedCheckIns ? `checked-in` : ""
      }`}
      key={id}
    >
      <div className="ticket-item__column">
        <div className="ticket-item__name">{name}</div>
      </div>
      <div className="ticket-item__column">
        <div className="ticket-item__number">{numberOfTickets}</div>
      </div>
      <div className="ticket-item__column">
        <div className="ticket-item__number">{completedCheckIns}</div>
      </div>
      <div className="ticket-item__column">
        <div className="ticket-item__number flex items-center">
          <div
            className="ticket-item__minus mr-5"
            onClick={() => modifyValue(0)}
          >
            -
          </div>
          {count}
          <div
            className="ticket-item__plus ml-5"
            onClick={() => modifyValue(1)}
          >
            +
          </div>
        </div>
      </div>
      <div className="ticket-item__column">
        {isLoading ? (
          <FontAwesomeIcon
            icon={`sync`}
            className={`ticket-item__sync-icon `}
          />
        ) : (
          <FontAwesomeIcon
            icon={`pen-square`}
            className={`ticket-item__update-btn ${inactive ? "inactive" : ""}`}
            onClick={(event) => {
              handleUpdate(event);
            }}
          />
        )}
      </div>
    </li>
  );
};

function TicketListHeaders() {
  return (
    <div className="ticket-list__headers">
      <div className="ticket-item">
        <div className="ticket-item__column column-header">
          <div>
            <div className="ticket-item__header ticket-item__header">Name</div>
          </div>
        </div>
        <div className="ticket-item__column column-header">
          <div className="ticket-item__header">Total Tickets</div>
        </div>
        <div className="ticket-item__column column-header">
          <div className="ticket-item__header">Total Admitted</div>
        </div>
        <div className="ticket-item__column column-header">
          <div className="ticket-item__header">Check In</div>
        </div>
        <div className="ticket-item__column column-header">
          <div className="ticket-item__header">Update</div>
        </div>
      </div>
    </div>
  );
}

function TicketListUtilities({ updateFilters, filters }) {
  const [completedOn, toggleCompleted] = useState(filters.completedCheckIns);

  console.log(completedOn);
  return (
    <div className="ticket-list__utility-bar">
      <div className="ticket-list__search">
        <input
          className="search__input"
          type="text"
          name="name"
          onChange={(event) => {
            const value = event.target.value;
            updateFilters((state) => {
              return { ...state, searchValue: value };
            });
          }}
        />
      </div>
      <FontAwesomeIcon
        icon={`filter`}
        className={`ticket-list__filter-button ${completedOn ? "on" : ""}`}
        onClick={() => {
          toggleCompleted(!completedOn);
          updateFilters((state) => {
            return {
              ...state,
              showCompletedCheckIns: !state.showCompletedCheckIns,
            };
          });
        }}
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
  );
}
