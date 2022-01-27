import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand" href="/">
          Bank of Mars
        </span>
        <div className=" d-flex justify-content-end">
          <button className="btn btn-primary">Your Balance:${amount}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
