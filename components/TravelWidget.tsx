"use client";

import { useState } from "react";
import {
  ArrowLeftRight,
  Calendar,
  Users,
  Search,
} from "lucide-react";

export default function TravelWidget() {
  const [from, setFrom] = useState("MOW");
  const [to, setTo] = useState("NYC");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = () => {
    if (!from || !to) {
      alert("Please enter destinations");
      return;
    }

    alert(
      `Searching flights:\n\nFrom: ${from}\nTo: ${to}\nPassengers: ${passengers}\nDate: ${
        date || "Not selected"
      }`
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 rounded-[40px] p-[2px] bg-gradient-to-r from-fuchsia-500/40 to-blue-500/40 shadow-[0_0_80px_rgba(181,46,255,0.25)] backdrop-blur-xl">
      <div className="rounded-[38px] bg-black/55 backdrop-blur-2xl p-6 md:p-8">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_1fr_1fr] gap-4">
            
            {/* FROM */}
            <div className="relative">
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="From"
                className="w-full h-16 rounded-2xl bg-white text-black px-6 text-xl outline-none border border-transparent focus:border-fuchsia-500 transition-all"
              />
            </div>

            {/* SWAP */}
            <button
              onClick={swapLocations}
              className="h-16 w-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all active:scale-95"
            >
              <ArrowLeftRight className="text-white" />
            </button>

            {/* TO */}
            <div className="relative">
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="To"
                className="w-full h-16 rounded-2xl bg-white text-black px-6 text-xl outline-none border border-transparent focus:border-blue-500 transition-all"
              />
            </div>

            {/* DATE */}
            <div className="relative">
              <Calendar
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-16 rounded-2xl bg-white text-black pl-14 pr-4 text-lg outline-none"
              />
            </div>

            {/* PASSENGERS */}
            <div className="relative">
              <Users
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />

              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full h-16 rounded-2xl bg-white text-black pl-14 pr-4 text-lg outline-none appearance-none"
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
              </select>
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <button
            onClick={handleSearch}
            className="group h-16 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-blue-500 text-white text-2xl font-semibold transition-all hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(181,46,255,0.45)] active:scale-[0.99]"
          >
            <div className="flex items-center justify-center gap-3">
              <Search
                size={24}
                className="group-hover:rotate-12 transition-transform"
              />

              Search Flights
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}