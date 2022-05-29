import classes from "./CurrentDate.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CurrentDate = () => {
  const d = new Date();
  const monthIndex = d.getMonth();
  const month = months[monthIndex];
  const date = d.getDate();

  return (
    <>
      <h1 className={classes.date}>
        Today,<br></br>{" "}
        <span>
          {month} {date}
        </span>
      </h1>
    </>
  );
};

export default CurrentDate;
