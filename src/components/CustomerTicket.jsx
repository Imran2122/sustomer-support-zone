import React, { use } from "react";
import TicketCart from "./TicketCart";

const CustomerTicket = ({ fetchTicketData,handleTicket }) => {
  const tickets = use(fetchTicketData);
  console.log(tickets);
  return (
   <div>
     <h2 className="font-bold text-2xl mt-4">Customer Tickets</h2>
     <div className="grid grid-cols-2 gap-3">
      {tickets.map((ticket) => (
        <TicketCart
        handleTicket={handleTicket}
         ticket={ticket}></TicketCart>
      ))}
    </div>
   </div>
  );
};

export default CustomerTicket;
