import React from "react";

const Authcontainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-fit h-full w-full flex items-center justify-center ">
      {children}
    </div>
  );
};

export default Authcontainer;
