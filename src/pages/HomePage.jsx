import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from "../components/Home/HobbyList/HobbyList";

HomePage.propTypes = {};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeID = useSelector((state) => state.hobby.activeID);
  const dispatch = useDispatch();

  const randomizeID = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
  };

  const handleAddHobbyClick = () => {
    const newID = randomizeID();
    const newHobby = {
      id: newID,
      name: `Hobby #${newID}`,
    };
    dispatch(addNewHobby(newHobby));
  };

  const handleHobbyClick = (hobby) => {
    dispatch(setActiveHobby(hobby));
  };

  return (
    <div>
      <h1>REDUX HOOKS - Home Page</h1>
      <button onClick={handleAddHobbyClick}>Add New Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeID={activeID}
        onHobbyClick={handleHobbyClick}
      ></HobbyList>
    </div>
  );
}

export default HomePage;
