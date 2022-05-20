import classes from "./Stopwatch.module.css";

const Stopwatch = () => {
  console.log('Stopwatch.js re-rendered.')

  return (
    <>
      <p className={classes.time}>00:00:00</p>
    </>
  );
};

export default Stopwatch;