import style from "../styles/Dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={style.container}>
      <div className={style.desc}>
        <h2>
          Planning can be defined as a process of setting up of goals and
          objectives for a given period of time, formulating alternatives for
          the course of action to be taken, and finally deciding an appropriate
          action from the various alternatives.
        </h2>
      </div>

      <h1 className={style.title}>Sign Up</h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="Name" />
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input className={style.inputL} type="text" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Subject" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
        />
        <button className={style.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Dashboard;
