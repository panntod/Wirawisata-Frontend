/* eslint-disable */

import React from "react";

import { H3, P } from "../global/Text";
import { Link } from "react-router-dom";

const Card = (props) => (
  <>
    <Link
      to={props.link}
      className="shadow-md bg-white w-72 rounded-3xl overflow-hidden"
    >
      <img
        src={props.img}
        alt={props.to}
        className="w-full h-auto object-contain"
      />
      <div className="border-2 border-black rounded-b-3xl p-4">
        <div className="mb-4">
          <P className="text-xs">Berangkat Dari</P>
          <H3>{props.from}</H3>
        </div>
        <div className="mb-4">
          <P className="text-xs">Sampai</P>
          <H3>{props.to}</H3>
        </div>
      </div>
    </Link>
  </>
);

export default Card;
