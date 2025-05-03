import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

const Button = ({ path, name, style }) => {
  return (
    <Link
      href={!path ? "" : path}
      className={`${styles.button} cursor-pointer`}
      style={!style ? {} : style}
    >
      <button>{!name ? "Button" : name}</button>
    </Link>
  );
};

export default Button;
