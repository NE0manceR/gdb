"use client";
import style from "./SiteHeader.modules.css";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className={`${style.header}`}>
      <div className="container header">
        <Link href="/">
          <img
            className="header__logo"
            src="images/logo-white.png"
            alt="Автомобіль"
          />
        </Link>
        <Link className="header__link" href="/brands">
          Brand Sets
        </Link>

      </div>
    </header>
  );
}
