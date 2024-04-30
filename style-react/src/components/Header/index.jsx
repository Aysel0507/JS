import React from "react";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BiShoppingBag } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header>
      <div id={styles["header-top"]}>
        <div className="container">
          <div className={styles["header-top"]}>
            <a href="#">{<FaPhoneAlt />} +748 383 23 14</a>
            <nav>
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>{" "}
                |
                <li>
                  <a href="#">FAQ</a>
                </li>{" "}
                |
                <li>
                  {" "}
                  <a href="#">Customer service</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div id={styles["header-middle"]}>
        <div className="container">
          <div className={styles["header-middle"]}>
            <h1 className={styles.logo}>ChicCharry</h1>
            <input type="search" placeholder="Search all product" />

            <div className={styles["header-icons"]}>
              {<CiUser />} <span>Sign-up</span>
              {<CiHeart />} <span>Wishlist</span>
              {<BiShoppingBag />} <span>Basket</span>
            </div>
          </div>
        </div>
      </div>

      <div id={styles["header-end"]}>
        <div className="container">
        <div className={styles["header-end"]}>
            <ul>
                <li>Evening bags</li>
                <li>Shoulder bag</li>
                <li>Backpack</li>
                <li>Handbag</li>
                <li>Postman bag</li>
                <li>Belt bags</li>
            </ul>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
