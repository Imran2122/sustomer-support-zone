import React from "react";

const SideTicketCart = ({ selectedTicket }) => {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl">
        Task Status:{selectedTicket.length}
      </h2>

      {selectedTicket.length === 0 ? (
        <p> Select a ticket to add to Task Status</p>
      ) : (
        selectedTicket.map((ticket) => (
          <div className="grid grid-cols-1 gap-3" key={ticket.id}>
            <h1>{ticket.title}</h1>
            <button className="bg-green-500 btn">Complete</button>
          </div>
        ))
      )}

      <h1 className="mt-6 font-semibold text-lg">Resolve Task</h1>
    </div>
  );
};

export default SideTicketCart;
