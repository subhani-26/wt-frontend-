import React, { useEffect, useState } from "react";
import { FaUser, FaHistory } from "react-icons/fa";
import "./ProfilePage.css";

function ProfilePage() {
  const [bookingHistory, setBookingHistory] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("bookingHistory")) || [];
    setBookingHistory(storedHistory);
  }, []);

  return (
    <div className="profile-page">
      <div className="header">
        <FaUser className="profile-icon" />
        <h2 className="profile-name">{username}</h2>
      </div>

      <h3 className="history-title">
        <FaHistory className="profile-history-icon" /> Booking History
      </h3>

      {bookingHistory.length === 0 ? (
        <p className="no-booking">No bookings right now</p>
      ) : (
        // ✅ No extra container wrapping cards
        bookingHistory.map((booking, index) => (
          <div key={index} className="booking-card">
            <img
              src={booking.image}
              alt={booking.movie}
              className="movie-image"
            />
            <h4>{booking.movie}</h4>
            <p>
              <strong>Date:</strong> {booking.date}
            </p>
            <p>
              <strong>Time:</strong> {booking.time}
            </p>
            <p>
              <strong>Theater:</strong> {booking.theaterName}
            </p>
            <p>
              <strong>Booked On:</strong>{" "}
              {new Date(booking.timestamp).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProfilePage;
