import { TicketProvider } from './components/context/TicketContext';
import TicketBooking from './components/TicketBooking';
import "./index.css";


const App = () => {
  return (
    <TicketProvider>
      <TicketBooking />
    </TicketProvider>
  );
};


export default App;