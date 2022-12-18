import style from "../styles/About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.subtitle}>
        <h3>Planning</h3>
      </div>
      <div className={style.desc}>
        <p>
          Planning can be defined as a process of setting up of goals and
          objectives for a given period of time, formulating alternatives for
          the course of action to be taken, and finally deciding an appropriate
          action from the various alternatives.
        </p>
      </div>

      <div className={style.subtitle}>
        <h3>Progress Track</h3>
      </div>
      <div className={style.desc}>
        <p>
          In project management, a progress tracker refers to a real-time visual
          representation of the status of a project. Your managers and team
          members will instantly know the status of different tasks and where
          most attention is needed
        </p>
      </div>

      <div className={style.subtitle}>
        <h3>Mentorship</h3>
      </div>
      <div className={style.desc}>
      <p>
        A mentorship is a relationship between two people where the individual
        with more experience, knowledge, and connections is able to pass along
        what they have learned to a more junior individual within a certain
        field. The more senior individual is the mentor, and the more junior
        individual is the mentee

      </p>
      </div>
    </div>
  );
};

export default About;
