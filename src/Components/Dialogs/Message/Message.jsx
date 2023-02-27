import React from "react";
import m from "./Message.module.css";

const Message = (proops) => {
  return <div className={m.message}>{proops.message}</div>;
};

export default Message;