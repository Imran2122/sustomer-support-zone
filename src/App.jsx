import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import CustomerTicket from "./components/CustomerTicket";
import Navbar from "./components/Navbar";
import Skeleton from "./components/Skeleton";
import SideTicketCart from "./components/SideTicketCart";
const fetchTicketData = fetch("/ticket.json").then((res) => res.json());
function App() {
  const [selectedTicket, setSelectedTicket] = useState([]);

  const handleTicket = (ticket) => {
    console.log("add the Ticlet", ticket);
    const newTicket = [...selectedTicket, ticket];
    setSelectedTicket(newTicket)
  };

  console.log(selectedTicket)

  return (
    <div className="w-11/12 mx-auto">
      {/* navbar */}
      <Navbar></Navbar>
      {/* progress and resoolve */}
      <Banner selectedTicket={selectedTicket}></Banner>
      {/* customer ticket */}
      <Suspense fallback={<Skeleton></Skeleton>}>
        <div className="flex justify-between">
          <CustomerTicket
            fetchTicketData={fetchTicketData}
            handleTicket={handleTicket}
          ></CustomerTicket>
          {/* cart customer */}
          <SideTicketCart selectedTicket={selectedTicket}></SideTicketCart>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
