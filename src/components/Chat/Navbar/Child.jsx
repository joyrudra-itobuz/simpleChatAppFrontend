import "./Child.scss";
import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "../../../assets/images/Chat/navMenuIcon.svg";

export default function Child() {
  return (
    <nav className="flex justify-between px-2 py-2">
      <div className="flex gap-2">
        <Link to="/">
          <span></span>
        </Link>
        <h2 className="my-auto font-[600] italic">Jessica</h2>
      </div>
      <button>
        <img className={"w-10 h-10"} src={menuIcon} alt="menuIcon" />
      </button>
    </nav>
  );
}
