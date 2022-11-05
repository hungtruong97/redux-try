import React from "react";
import PropTypes from "prop-types";
import "./HobbyList.css";

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeID: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  active: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { hobbyList, activeID, onHobbyClick } = props;

  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };
  return (
    <ul className="hobby-list">
      {hobbyList.map((item) => {
        return (
          <li
            key={item.id}
            className={item.id === activeID ? "active" : ""}
            onClick={() => {
              handleClick(item);
            }}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

export default HobbyList;
