import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import CustomerTicket from "./components/CustomerTicket";
import Navbar from "./components/Navbar";
import Skeleton from "./components/Skeleton";
const fetchTicketData = fetch("/ticket.json").then((res) => res.json());
function App() {
  return (
    <div className="w-11/12 mx-auto">
      {/* navbar */}
      <Navbar></Navbar>
      {/* progress and resoolve */}
      <Banner></Banner>
      {/* customer ticket */}
      <Suspense fallback={<Skeleton></Skeleton>}>
        <CustomerTicket fetchTicketData={fetchTicketData}></CustomerTicket>
      </Suspense>
    </div>
  );
}

export default App;
