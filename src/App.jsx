import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import CustomerTicket from "./components/CustomerTicket";
import Navbar from "./components/Navbar";
import Skeleton from "./components/Skeleton";
import SideTicketCart from "./components/SideTicketCart";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
const fetchTicketData = fetch("/ticket.json").then((res) => res.json());
function App() {
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [resolvedTicket, setResolvedTicket] = useState([]);

  const handleTicket = (ticket) => {
    const newTicket = [...selectedTicket, ticket];
    setSelectedTicket(newTicket);
    toast('Ticket Successfully Added ✅')
  };

  const removeTicket = (ticket) => {
    const updatedTicket = selectedTicket.filter((tkt) => tkt.id !== ticket.id);
    setSelectedTicket(updatedTicket);
    setResolvedTicket([...resolvedTicket, ticket]);
     toast("Ticket Removed Successfully ❌");

   
  };

  return (
    <div >
    <div className="w-11/12 mx-auto">
      {/* navbar */}
      <Navbar></Navbar>
      {/* progress and resoolve */}
      <Banner
        selectedTicket={selectedTicket}
        resolvedTicket={resolvedTicket}
      ></Banner>

      {/* customer ticket */}
      <Suspense fallback={<Skeleton></Skeleton>}>
        <div className="flex justify-between">
          <CustomerTicket
            fetchTicketData={fetchTicketData}
            handleTicket={handleTicket}
          ></CustomerTicket>
          {/* cart customer */}
          <SideTicketCart
            resolvedTicket={resolvedTicket}
            selectedTicket={selectedTicket}
            removeTicket={removeTicket}
            setSelectedTicket={setSelectedTicket}
          ></SideTicketCart>
        </div>
      </Suspense>
     
      <Toaster></Toaster>
    </div>
     <Footer></Footer>
    </div>
  );
}

export default App;
