import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>ExperioLearn</span> Internship
          Management Platform
        </h1>
        <p className={style.desc}>
          Hello! Welcome to ExperioLearn. ExperioLearn is your owesome entry
          level career growth partner. We hold your hand thorought your career
          growth journey
        </p>
        <button className={style.button}>GET STARTED</button>
      </div>
      <div className={style.card}> fg </div>
    </div>
  );
};

export default Intro;
