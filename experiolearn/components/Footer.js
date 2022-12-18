import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>PLAN|TRACK|MENTOR|NETWORK</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>LET US WALK WITH YOU</span>   
              </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          CYBER 10, KWA JESHI
          <br /> MWIHOKO
        </div>
        <div className={style.cardItem}>
          CONTACT@SURFSKILLS
          <br /> 0729007796
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US:
          <br /> TWITTER
        </div>
        <div className={style.cardItem}>
          © 2022 SURFSKILLS ANALYTICS,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
