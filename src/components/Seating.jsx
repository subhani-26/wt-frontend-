import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./Seating.css";

const Seating = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, time, movie, city, theaterName } = location.state || {};
  console.log("Received Data: ", { date, time, movie, city, theaterName });

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [seats, setSeats] = useState([]);

  const fetchSeats = async () => {
    try {
      const response = await axios.get("http://localhost:5000/seats");
      const updatedSeats = response.data;
  
      // Update bookedSeats to prevent re-selection
      setBookedSeats(updatedSeats.filter((seat) => seat.booked).map((seat) => `${seat.section}-${seat.row}-${seat.col}`));
      setSeats(updatedSeats);
    } catch (error) {
      console.error("Error fetching seats:", error);
    }
  };
  

  // Fetch seats whenever the user navigates back to this page
  useEffect(() => {
    fetchSeats();
    setSelectedSeats([]); // Clear previously selected seats when navigating back
  }, [location.key]); // location.key changes when navigating back

  const toggleSeatSelection = (seat) => {
    const seatId = `${seat.section}-${seat.row}-${seat.col}`;
  
    if (bookedSeats.includes(seatId)) return; // Prevent selecting booked seats
  
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };
  
  

  const bookSeats = async () => {
    if (selectedSeats.length === 0) {
      alert("No seats selected.");
      return;
    }
  
    try {
      await axios.post("http://localhost:5000/book-seat", {
        seats: selectedSeats.map((seat) => {
          const [section, row, col] = seat.split("-");
          return { section, row, col };
        }),
      });
  
      setSelectedSeats([]); // Clear selection after booking
      await fetchSeats();   // Refresh seat data
  
      // Navigate to the Book_Summary page with booking details
      navigate("/Book_Summary", {
        state: {
          movie,
          date,
          time,
          theaterName,
          city,
          selectedSeats,
        },
      });
  
    } catch (error) {
      console.error("Error booking seats:", error);
    }
  };
  
  
  
  

  const renderSeats = (category, rate, rows) => (
    <div className="seating-section">
      <h3 className="seating-section-title">{category} - Rs. {rate}</h3>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="seating-rows">
          {Array.from({ length: 20 }).map((_, colIndex) => {
            const seatId = `${category}-${rowIndex + 1}-${colIndex + 1}`;
            const isSelected = selectedSeats.includes(seatId);
            const isBooked = bookedSeats.includes(seatId);  // Check if the seat is booked

            return (
              <button
  key={seatId}
  onClick={() => toggleSeatSelection({ section: category, row: rowIndex + 1, col: colIndex + 1 })}
  className={`w-8 h-8 rounded-md border text-sm font-bold flex items-center justify-center cursor-pointer ${
    isBooked
      ? "booked-seat"  // Red for booked seats
      : isSelected
      ? "selected-seat"  // Green for selected seats
      : "available-seat"  // Default available seats
  }`}
  disabled={isBooked}  // Disable already booked seats
>
  {colIndex + 1}
</button>


            );
          })}
        </div>
      ))}
    </div>
  );

  return (
    <div className="seating-container">
      <h1 className="seating-main-title">Movie Ticket Booking</h1>
      <div className="seating-layout">
        {renderSeats("Sofa", 200, 5)}
        {renderSeats("Chair", 150, 5)}
        {renderSeats("Table", 100, 5)}
      </div>

      <div className="seating-selection">
        <h2 className="seating-selection-title">Selected Seats</h2>
        <p className="seating-selected-seats">
          {selectedSeats.length > 0 ? selectedSeats.join(", ") : "No seats selected"}
        </p>
        <button
          onClick={bookSeats}
          disabled={selectedSeats.length === 0}
          className="seating-book-button"
        >
          Book Seats
        </button>
      </div>
    </div>
  );
};

export default Seating;
