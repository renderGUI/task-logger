import classes from "./LoggedTasks.module.css";
import { useContext, useState } from "react";
import { tasksContext } from "../contexts/tasksContext";
import DeleteTask from "./DeleteTask";
import ReactPaginate from "react-paginate";

const LoggedTasks = (props) => {
  const { tasks } = useContext(tasksContext);
  const [pageNumber, setPageNumber] = useState(0);

  const tasksPerPage = 5;
  const pagesVisited = pageNumber * tasksPerPage;

  const displayTasks = tasks
    .slice(pagesVisited, pagesVisited + tasksPerPage)
    .map((task) => {
      return (
        <div className={classes.container} key={task.id}>
          <p className={classes.task}>{task.loggedTask}</p>
          <p className={classes.time}>{task.loggedTime}</p>
          {props.editIsEnabled && <DeleteTask id={task.id} />}
        </div>
      );
    });

  const pageCount = Math.ceil(tasks.length / tasksPerPage);

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {tasks.length > 0 && displayTasks}
      {tasks.length > 0 && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePageHandler}
          containerClassName={classes.paginationButtons}
          activeClassName={classes.paginationActive}
        />
      )}
      {tasks.length === 0 && (
        <div className={classes["empty-list-container"]}>
          <p>No logged tasks today!</p>
        </div>
      )}
    </>
  );
};

export default LoggedTasks;
