import { ConnectGoogleCalendar } from "@/components/ConnectGoogleCalendar";
import Logout from "@/components/Logout";
const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center border-b border-zinc-800 pb-4 mb-6">
      <h1 className="text-2xl font-bold tracking-tight text-white">
        🧠 Kreeya AI Calendar
      </h1>
      <div className="flex gap-4 items-center">
        <ConnectGoogleCalendar />
        <Logout />
      </div>
    </header>
  );
};

export default Navbar;
