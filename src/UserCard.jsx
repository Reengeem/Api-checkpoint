import React from "react";
import "./App.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
const UserCard = ({ user }) => (
  <Card
    className=" shadow-md"
    style={{
      width: 400,
      border: "2px solid gray",
    }}
  >
    <UserOutlined />
    <Meta
      headStyle={{ color: "white" }}
      // style={{ color: "white", backgroundColor: "#1E40AF" }}
      title={user.name}
      description={user.email}
    />
    <div className="flex bg-slate-900  items-center gap-5 mt-5 justify-around">
      <Meta description={user.address.street} />
      <Meta description={user.address.suite} />
      <Meta description={user.address.city} />
    </div>
    <div className="flex items-center text-white gap-5 mt-5 justify-around">
      <Meta className="custom-meta-style" description={user.phone} />
      <Meta description={"www." + user.website} />
    </div>

    <div className="mt-3 p-3">
      <Meta title="Company" description={user.company.name} />
      <div className="mt-2">
        <Meta description={user.company.catchPhrase} />
        {/* <Meta description={"www." + user.website} /> */}
      </div>
    </div>
  </Card>
);
export default UserCard;
