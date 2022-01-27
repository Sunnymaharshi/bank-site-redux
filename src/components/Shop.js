import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../state/index";
const Shop = () => {
  const dispatch = useDispatch();
  const { withDraw, deposit } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="container">
      <h2>Deposit/Withdraw Money</h2>
      <div className="my-2">
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withDraw(10000);
          }}
        >
          -
        </button>
        $10000
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            deposit(10000);
          }}
        >
          +
        </button>
      </div>
      <div className="my-2">
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withDraw(5000);
          }}
        >
          -
        </button>
        $5000
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            deposit(5000);
          }}
        >
          +
        </button>
      </div>
      <div className="my-2">
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withDraw(1000);
          }}
        >
          -
        </button>
        $1000
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            deposit(1000);
          }}
        >
          +
        </button>
      </div>
      <div className="my-2">
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withDraw(500);
          }}
        >
          -
        </button>
        $500
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            deposit(500);
          }}
        >
          +
        </button>
      </div>
      <div className="my-2">
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withDraw(100);
          }}
        >
          -
        </button>
        $100
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            deposit(100);
          }}
        >
          +
        </button>
      </div>
      <div className="my-2">
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withDraw(50);
          }}
        >
          -
        </button>
        $50
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            deposit(50);
          }}
        >
          +
        </button>
      </div>
      <div className="my-2">
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withDraw(10);
          }}
        >
          -
        </button>
        $10
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            deposit(10);
          }}
        >
          +
        </button>
      </div>
      <div className="my-2">
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withDraw(5);
          }}
        >
          -
        </button>
        $5
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            deposit(5);
          }}
        >
          +
        </button>
      </div>
      <div className="my-2">
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withDraw(1);
          }}
        >
          -
        </button>
        $1
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            deposit(1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Shop;
