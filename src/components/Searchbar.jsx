import React, { useState } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";
// import { FaBars } from "react-icons/fa";

const movieData = {
  Vizag: [
    {
      title: "Sankranthi ki Vastunnam",
      hero: "Venkatesh",
      heroine: "Aiswarya Rajesh",
      description: "Ammazing",
      rating: 4.7,
      reviews: ["Fantastic!", "A must-watch!"],
      image: "first.jpg",

      theaters: [
        {
          name: "Theater 1",
          address: "123 Street, vizag",
          showtimes: ["10:00 AM", "2:00 PM", "6:00 PM"],
        },
        {
          name: "Theater 2",
          address: "456 Avenue, Vizag",
          showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
        },
      ],
    },
    {
      title: "Game Changer",
      hero: "Ram Charan",
      heroine: "Kiara Advani",
      description: "must watch",
      rating: 4.3,
      reviews: ["Very good!", "Highly enjoyable!"],
      image: "second.jpg",

      theaters: [
        {
          name: "Theater 3",
          address: "789 Road, vizag",
          showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
        },
      ],
    },
  ],
  Vizianagaram: [
    {
      title: "Hit 3",
      hero: "Nani",
      heroine: "Srinidhi Shetty",
      description: "thiller",
      rating: 4.7,
      reviews: ["Fantastic!", "A must-watch!"],
      image: "https://orunewculture.com/wp-content/uploads/2025/02/hit3.jpg",
      theaters: [
        {
          name: "Theater 1",
          address: "123 Street, Chennai",
          showtimes: ["10:00 AM", "2:00 PM", "6:00 PM"],
        },
        {
          name: "Theater 2",
          address: "456 Avenue, Chennai",
          showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
        },
      ],
    },
    {
      title: "Chava",
      hero: "Vicky Kaushal",
      heroine: "Rahmika Mandana",
      description: "historic",
      rating: 4.3,
      reviews: ["Very good!", "Highly enjoyable!"],
      image:
        "https://dnyangangabooks.com/cdn/shop/files/chava_3e70fe7b-e1ce-45e9-9f9d-370397237a87.jpg?v=1740999812",
      theaters: [
        {
          name: "Theater 3",
          address: "789 Road, Chennai",
          showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
        },
      ],
    },
  ],

  srikakulam: [
    {
      title: "Ayalaan",
      hero: "Shiv Karthikeya",
      description: "intresting",
      rating: 4.7,
      reviews: ["Fantastic!", "A must-watch!"],
      image:
        "https://cdn.123telugu.com/content/wp-content/uploads/2024/01/Ayalaan-m-1.jpg",
      theaters: [
        {
          name: "Theater 1",
          address: "123 Street, Chennai",
          showtimes: ["10:00 AM", "2:00 PM", "6:00 PM"],
        },
        {
          name: "Theater 2",
          address: "456 Avenue, Chennai",
          showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
        },
      ],
    },
    {
      title: "Chava",
      hero: "Vicky Kaushal",
      heroine: "Rashmika Mandana",
      description: "Historic",
      rating: 4.3,
      reviews: ["Very good!", "Highly enjoyable!"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZ7GDhr0k46V4Nr0kTLAIinM3eHZJa27I4A&s",
      theaters: [
        {
          name: "Theater 3",
          address: "789 Road, Chennai",
          showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
        },
      ],
    },
  ],
  bobbili: [
    {
      title: "Sankaranthiki vasthunam",
      hero: "Venkatesh",
      heroine: "Menakshi Chowdary",
      description: "must watch",
      rating: 4.7,
      reviews: ["Fantastic!", "A must-watch!"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hZTW45PKs7eJqqyKj8djWpjtpmg9KTMy7A&s",
      theaters: [
        {
          name: "Theater 1",
          address: "123 Street, Chennai",
          showtimes: ["10:00 AM", "2:00 PM", "6:00 PM"],
        },
        {
          name: "Theater 2",
          address: "456 Avenue, Chennai",
          showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
        },
      ],
    },
    {
      title: "Syraa",
      hero: "Chiranjivi",
      heroine: "Nayantra",
      description: "historic",
      rating: 4.3,
      reviews: ["Very good!", "Highly enjoyable!"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZ7GDhr0k46V4Nr0kTLAIinM3eHZJa27I4A&s",
      theaters: [
        {
          name: "Theater 3",
          address: "789 Road, Chennai",
          showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
        },
      ],
    },
  ],
  Chennai: [
    {
      title: "Bhramhastra",
      hero: "Ranvir Singh",
      heroine: "Alia Bhatt",
      description: "fantancy",
      rating: 4.7,
      reviews: ["Fantastic!", "A must-watch!"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hZTW45PKs7eJqqyKj8djWpjtpmg9KTMy7A&s",
      theaters: [
        {
          name: "Theater 1",
          address: "123 Street, Chennai",
          showtimes: ["10:00 AM", "2:00 PM", "6:00 PM"],
          ticketCost: "₹200",
          availableSeats: 50,
        },
        {
          name: "Theater 2",
          address: "456 Avenue, Chennai",
          showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
          ticketCost: "₹250",
          availableSeats: 30,
        },
      ],
    },
    {
      title: "Chava",
      hero: "Vicky Kaushal",
      heroine: "Rahmika Mandana",
      description: "Description of Movie B",
      rating: 4.3,
      reviews: ["Very good!", "Highly enjoyable!"],
      image:
        "https://dnyangangabooks.com/cdn/shop/files/chava_3e70fe7b-e1ce-45e9-9f9d-370397237a87.jpg?v=1740999812",
      theaters: [
        {
          name: "Theater 3",
          address: "789 Road, Chennai",
          showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
          ticketCost: "₹220",
          availableSeats: 40,
        },
      ],
    },
  ],
  Thiruvananthapuram: [
    {
      title: "Movie J",
      hero: "Vicky Kaushal",
      heroine: "Rashmika Mandana",
      description: "historic",
      rating: 4.6,
      reviews: ["Great!", "Must watch!"],
      image:
        "https://dnyangangabooks.com/cdn/shop/files/chava_3e70fe7b-e1ce-45e9-9f9d-370397237a87.jpg?v=1740999812",
      theaters: [
        {
          name: "Theater 12",
          address: "67 River Street, Thiruvananthapuram",
          showtimes: ["1:00 PM", "5:00 PM", "9:00 PM"],
          ticketCost: "₹220",
          availableSeats: 40,
        },
      ],
    },
  ],
  Madurai: [
    {
      title: "Chava",
      hero: "Vicky Kaushal",
      heroine: "Rashmika Mandana",
      description: "historic",
      rating: 4.2,
      reviews: ["Good movie!", "Worth it!"],
      image:
        "https://dnyangangabooks.com/cdn/shop/files/chava_3e70fe7b-e1ce-45e9-9f9d-370397237a87.jpg?v=1740999812",
      theaters: [
        {
          name: "Theater 13",
          address: "89 High Street, Madurai",
          showtimes: ["11:30 AM", "3:30 PM", "7:30 PM"],
          ticketCost: "₹200",
          availableSeats: 50,
        },
      ],
    },
  ],
  Vijayawada: [
    {
      title: "Kabir Singh",
      hero: "Shahid Kapoor",
      heroine: "Kiara Advani",
      description: "Romantic",
      rating: 4.3,
      reviews: ["Nice!", "Enjoyed it!"],
      image:
        "https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg",
      theaters: [
        {
          name: "Theater 14",
          address: "21 Main Road, Vijayawada",
          showtimes: ["12:45 PM", "4:45 PM", "8:45 PM"],
          ticketCost: "₹210",
          availableSeats: 30,
        },
      ],
    },
  ],
  Visakhapatnam: [
    {
      title: "Kabhir Singh",
      hero: "Shahid kapoor",
      heroine: "Kiara Advani",
      description: "Romantic",
      rating: 4.5,
      reviews: ["Great!", "Must watch!"],
      image:
        "https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg",
      theaters: [
        {
          name: "Theater 15",
          address: "100 Market Street, Visakhapatnam",
          showtimes: ["11:30 AM", "3:30 PM", "7:30 PM"],
          ticketCost: "₹230",
          availableSeats: 25,
        },
      ],
    },
  ],
  Puducherry: [
    {
      title: "Shershaah",
      hero: "Siddhath Malhotra",
      heroine: "Kiara Advani",
      description: "Romantic",
      rating: 4.4,
      reviews: ["Nice!", "Enjoyable!"],
      image:
        "https://i.pinimg.com/736x/b0/46/3a/b0463af0124f3594b26da1dbbb9e0b32.jpg",
      theaters: [
        {
          name: "Theater 16",
          address: "45 Coastal Road, Puducherry",
          showtimes: ["10:30 AM", "2:30 PM", "6:30 PM"],
          ticketCost: "₹200",
          availableSeats: 40,
        },
      ],
    },
  ],
  Kozhikode: [
    {
      title: "Kalki",
      hero: "Phrabhas",
      heroine: "Deepika",
      description: "twisting",
      rating: 4.3,
      reviews: ["Good movie!", "Worth it!"],
      image:
        "https://c8.alamy.com/comp/2XF3M4C/kalki-2898-ad-2024-directed-by-nag-ashwin-and-starring-prabhas-amitabh-bachchan-and-kamal-haasan-the-most-expensive-indian-film-to-date-an-epic-sci-fi-adventure-about-a-modern-day-avatar-of-vishnu-a-hindu-god-who-is-believed-to-have-descended-to-earth-to-protect-the-world-from-evil-forces-indian-one-sheet-poster-editorial-use-only-credit-bfa-vyjayanthi-movies-2XF3M4C.jpg",
      theaters: [
        {
          name: "Theater 17",
          address: "25 City Road, Kozhikode",
          showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
          ticketCost: "₹210",
          availableSeats: 35,
        },
      ],
    },
  ],
  Tiruchirappalli: [
    {
      title: "Mari 2",
      hero: "Dhanush",
      heroine: "Sai Pallavi",
      description: "Survival of a gangstar",
      rating: 4.2,
      reviews: ["Nice!", "Enjoyable!"],
      image:
        "https://images.herzindagi.info/image/2024/Aug/websites-to-watch-south-indian-films.jpg",
      theaters: [
        {
          name: "Theater 18",
          address: "99 Park Street, Tiruchirappalli",
          showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
          ticketCost: "₹190",
          availableSeats: 50,
        },
      ],
    },
  ],
  Hubli: [
    {
      title: "Fighter",
      hero: "Hrithick Roshan",
      heroine: "Deepika",
      description: "life of soliders",
      rating: 4.1,
      reviews: ["Good movie!", "Worth it!"],
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202409/fighter_1.jpg?VersionId=.YyrMFH7ogcYEKAHAnoswY_DQEfdf_5A&size=686:*",
      theaters: [
        {
          name: "Theater 19",
          address: "10 Main Road, Hubli",
          showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
          ticketCost: "₹200",
          availableSeats: 30,
        },
      ],
    },
  ],
  Kannur: [
    {
      title: "Chaava",
      hero: "Vickey kaushal",
      heroine: "Rahmika",
      description: "dynamic historical emotional evertime",
      rating: 4.0,
      reviews: ["Nice!", "Enjoyable!"],
      image:
        "https://dnyangangabooks.com/cdn/shop/files/chava_3e70fe7b-e1ce-45e9-9f9d-370397237a87.jpg?v=1740999812",
      theaters: [
        {
          name: "Theater 20",
          address: "12 Avenue, Kannur",
          showtimes: ["11:30 AM", "3:30 PM", "7:30 PM"],
          ticketCost: "₹210",
          availableSeats: 40,
        },
      ],
    },
    {
      title: "Thandel",
      hero: "Naga Chaithanya",
      heroine: "Sai Pallavi",
      description: "such a lovable movie",
      rating: 3.8,
      reviews: ["Nice movie", "Great watch!"],
      image:
        "https://assets.gadgets360cdn.com/pricee/assets/product/202311/Thandel-Poster_1701257528.jpg",
      theaters: [
        {
          name: "Theater 22",
          address: "45 City Rd, Kannur",
          showtimes: ["2:00 PM", "6:00 PM", "10:00 PM"],
          ticketCost: "₹220",
          availableSeats: 30,
        },
      ],
    },
  ],
};
function Searchbar() {
  const [selectedCity, setSelectedCity] = useState(""); // Track selected city
  const [selectedMovie, setSelectedMovie] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const input = e.target.value;
    setCityInput(input);

    if (input) {
      const filteredCities = Object.keys(movieData).filter((city) =>
        city.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredCities);

      if (filteredCities.length === 0) {
        setMessage(
          "Oops! We couldn't find any city matching your search. Try again with a different name."
        );
      } else {
        setMessage(""); // Clear message if cities are found
      }
    } else {
      setSuggestions([]);
      setMessage(""); // Clear message when input is empty
    }
  };

  const handleSuggestionClick = (city) => {
    setCityInput(city);
    setSelectedCity(city); // Set the selected city
    displayMoviesForCity(city);
    setSuggestions([]); // Clear suggestions after selection
    setMessage(""); // Clear message when a valid city is selected
  };

  const displayMoviesForCity = (city) => {
    const selectedMovies = movieData[city] || [];
    setMovies(selectedMovies);
  };

  const handleFindTheaters = (movie, city) => {
    navigate("/BuyTicket", { state: { movie, city } }); // Navigate to TheaterList with movie data
  };

  return (
    <div>
      <div className="searchbar-container">
        <h1 className="searchbar-title">Movie Ticket Booking</h1>

        <div className="searchbar-input-container">
          <input
            type="text"
            id="cityInput"
            className="searchbar-input"
            placeholder="Search for a city..."
            value={cityInput}
            onChange={handleInputChange}
          />
          <button
            className="searchbar-search-btn"
            onClick={() => displayMoviesForCity(cityInput)}
          >
            Search
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <div className="searchbar-suggestions">
            {suggestions.map((city) => (
              <div
                key={city}
                className="searchbar-suggestion-item"
                onClick={() => handleSuggestionClick(city)}
              >
                {city}
              </div>
            ))}
          </div>
        )}

        {/* Message for no city found */}
        {message && <div className="searchbar-no-results">{message}</div>}

        {/* Movie List */}
        <div className="searchbar-movie-list">
          {movies.map((movie, index) => (
            <div key={index} className="searchbar-movie-item">
              <div className="searchbar-movie-inner">
                <div className="searchbar-movie-front">
                  <img
                    src={movie.image}
                    alt={`${movie.title} poster`}
                    className="searchbar-movie-image"
                  />
                </div>
                <div className="searchbar-movie-back">
                  <h3 className="searchbar-movie-title">{movie.title}</h3>
                  <p className="searchbar-movie-detail">
                    <strong>Hero:</strong> {movie.hero}
                  </p>
                  <p className="searchbar-movie-detail">
                    <strong>Heroine:</strong> {movie.heroine}
                  </p>
                  <p className="searchbar-movie-detail">
                    <strong>Description:</strong> {movie.description}
                  </p>
                  <p className="searchbar-movie-detail">
                    <strong>Rating:</strong> {movie.rating}
                  </p>
                  <p className="searchbar-movie-detail">
                    <strong>Reviews:</strong> {movie.reviews.join(", ")}
                  </p>
                  <button
                    className="searchbar-theater-btn"
                    onClick={() => handleFindTheaters(movie, selectedCity)} // Pass selected city to this function
                  >
                    Find Theaters
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
