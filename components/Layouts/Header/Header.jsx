import React from "react";
import styles from "./header.module.css";
import { Link } from "next-view-transitions";
import { NavLinks } from "./data";
import { Button } from "@/components/UI";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <h1>LOGO</h1>
        </Link>

        {/* Nav Links */}
        <nav className={styles.nav}>
          <ul>
            {NavLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.path} className={styles.navLink}>
                  <span> {link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Button path="" name="Let's Connect" />
      </div>
    </header>
  );
};

export default Header;
