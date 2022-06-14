import classes from "./FilterButton.module.css";
import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";

const FilterButton = () => {
  const { tasks } = useContext(tasksContext);
  const filterHandler = () => {
    tasks.filter((task) => {
        
    })
  };
  return (
    <>
      <button className={classes.filterBtn} onClick={filterHandler}>
        Filter by length
      </button>
    </>
  );
};

export default FilterButton;
