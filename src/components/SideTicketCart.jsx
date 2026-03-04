import React from "react";

const SideTicketCart = ({ selectedTicket, removeTicket, resolvedTicket }) => {
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
            <button
              onClick={() => removeTicket(ticket)}
              className="bg-green-500 btn"
            >
              Complete
            </button>
          </div>
        ))
      )}

      <h1 className="mt-6 font-semibold text-lg">Resolve Task</h1>

      {resolvedTicket.length === 0 ? (
        <p>No resolved tasks yet.</p>
      ) : (
        resolvedTicket.map((ticket) => (
          <p key={ticket.id} className="text-sm text-gray-600 mt-2">
            {ticket.title}
          </p>
        ))
      )}

   
    </div>
  );
};

export default SideTicketCart;
