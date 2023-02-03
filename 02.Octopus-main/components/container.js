import React from "react";

export default function Container(props) {
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className={` container p-8 mx-auto xl:px-0 min-h-screen pt-[72px] lg:pt-[88px] ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
