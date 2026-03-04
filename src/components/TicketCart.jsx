import React from "react";
import { CalendarDays } from "lucide-react"; // optional icon

const TicketCart = ({ ticket, handleTicket }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  return (
    <div
      onClick={() => handleTicket(ticket)}
      className="bg-white rounded-xl shadow-sm p-4 border hover:shadow-md transition mt-4"
    >
      {/* Top Section */}

      <div className="flex justify-between items-start">
        <h2 className="font-semibold text-gray-800 text-sm">{title}</h2>

        <span
          className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium ${
            status.toLowerCase() === "open"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {/* Dot */}
          <span
            className={`w-2 h-2 rounded-full ${
              status.toLowerCase() === "open" ? "bg-green-500" : "bg-yellow-500"
            }`}
          ></span>

          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-xs mt-2 line-clamp-2">{description}</p>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
        <div>
          <p className="text-gray-400">#{id}</p>
          <p
            className={`font-semibold ${priority === "High" ? "text-red-500" : priority === "Medium" ? "text-yellow-400" : "text-green-400"}`}
          >
            {priority.toUpperCase()} PRIORITY
          </p>
        </div>

        <div className="text-right">
          <p>{customer}</p>
          <div className="flex items-center gap-1 justify-end">
            <CalendarDays size={14} />
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCart;
