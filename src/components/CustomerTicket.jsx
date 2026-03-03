import React, { use } from "react";

const CustomerTicket = ({ fetchTicketData }) => {
  const tickets = use(fetchTicketData);
  console.log(tickets);
  return <div>this is CustomerTicket</div>;
};

export default CustomerTicket;
