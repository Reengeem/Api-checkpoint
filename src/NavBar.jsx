import { DingdingOutlined } from "@ant-design/icons";
import React from "react";

const NavBar = () => {
  return (
    <nav className="shadow-lg bg-slate-950 nav-header">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        {/* <DingdingOutlined style={{ color: "maroon", fontSize: "30px" }} /> */}
        <h3 className=" text-white">Users Card</h3>
      </div>
    </nav>
  );
};

export default NavBar;
