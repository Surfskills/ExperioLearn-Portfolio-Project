import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <Link href="/">EXPERIOLEARN</Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/about">ABOUT</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/dashboard">DASHBOARD</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/demo">DEMO</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
        <li className={style.listItem}>
          <Link href='/signin'>SIGN IN</Link>
        </li>
        
        
      </ul>
    </div>
  );
};

export default Navbar;
