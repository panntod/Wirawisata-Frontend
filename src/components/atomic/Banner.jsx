import React from "react";

const Banner = () => (
  <div className="w-full h-full relative z-0">
    <img
      src="/login-2.png"
      alt="login pictures"
      className="absolute -top-20 -left-24"
    />
    <div className="w-full h-full ">
      <img
        src="/login.png"
        alt="login pictures"
        className="mx-auto w-[380px] h-[600px]"
        width={400}
        height={600}
      />
    </div>
    <img
      src="/login-3.png"
      alt="login pictures"
      className="absolute -bottom-20 -right-24"
    />
  </div>
);

export default Banner;
