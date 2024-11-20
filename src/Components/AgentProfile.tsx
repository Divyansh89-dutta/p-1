// src/components/AgentProfile.tsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { MdNavigateNext } from "react-icons/md";
import "./AgentProfile.css";
import React, { useState } from "react";
import HouseCard from "./HouseCard";

interface Review {
  name: string;
  title: string;
  testimonial: string;
}

const houseData = [
  {
    propertyName: "Luxury Villa",
    location: "Beverly Hills",
    bedrooms: "4",
    bathrooms: "3",
    garage: "2",
    price: "1,200,0",
    imgSrc: "./src/assets/house.jpg"
  },
  {
    propertyName: "Modern Apartment",
    location: "Downtown",
    bedrooms: "2",
    bathrooms: "2",
    garage: "1",
    price: "850,00",
    imgSrc: "./src/assets/house.jpg"
  },
  {
    propertyName: "Cozy Cottage",
    location: "Lake Tahoe",
    bedrooms: "3",
    bathrooms: "2",
    garage: "1",
    price: "650,00",
    imgSrc: "./src/assets/house.jpg"
  },
  {
    propertyName: "Elegant Mansion",
    location: "Beverly Hills",
    bedrooms: "5",
    bathrooms: "4",
    garage: "3",
    price: "2,500,0",
    imgSrc: "./src/assets/house.jpg"
  },
  {
    propertyName: "Urban Loft",
    location: "New York City",
    bedrooms: "1",
    bathrooms: "1",
    garage: "0",
    price: "900,00",
    imgSrc: "./src/assets/house.jpg"
  },
  {
    propertyName: "Suburban Home",
    location: "Chicago",
    bedrooms: "4",
    bathrooms: "3",
    garage: "2",
    price: "750,00",
    imgSrc: "./src/assets/house.jpg"
  }
];

const reviews: Review[] = [
  {
    name: "Mohamed Mafaz",
    title: "Wonderful Experience",
    testimonial:
      "Working with The Specialists was an absolute pleasure! Their team provided exceptional service and guided us through every step of the home-buying process with expertise and care. They listened to our needs, understood the market perfectly, and found us the ideal home. We couldn't be happier with our experience and highly recommend them to anyone looking for a seamless and successful real estate journey.",
  },
  {
    name: "Jane Doe",
    title: "Fantastic Service",
    testimonial:
      "The service was fantastic from start to finish. The team was professional, responsive, and truly cared about our needs. They made the process smooth and stress-free. Highly recommended!",
  },
  {
    name: "John Smith",
    title: "Highly Recommend",
    testimonial:
      "I had an excellent experience working with the team. They were knowledgeable, attentive, and very supportive throughout the entire process. They went above and beyond to ensure we found the perfect home. I would definitely recommend them to anyone in need of real estate services.",
  },
];

const data = [
  { name: "Apartments", value: 82 },
  { name: "Townhouses", value: 9 },
  { name: "Villa", value: 9 },
];

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

function AgentProfile() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [rating, setRating] = useState<number>(0);
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleNextClick = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handleRatingClick = (index: number) => {
    setRating(index + 1);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log({ email, title, rating, message });
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="agent-profile">
      <div className="divone">
        <div className="agent-header">
          <img
            src="./src/assets/User 4.jpeg"
            alt="Melvin Felix"
            className="agent-photo"
          />
          <div className="agent-info">
            <h2>Melvin Felix</h2>
            <p className="agent-title">Real Estate Agent</p>
            <button className="contact-btn">Request Contact Info</button>
            <button className="report-btn">Report Agent</button>
          </div>
        </div>
        <div className="agent-stats">
          <div className="stat-section">
            <div className="stat">
              <img src="./src/assets/stat1.svg" alt="stat" />
              <div className="statdetails">
                <h3>489</h3>
                <p>Properties Listed</p>
              </div>
            </div>
            <div className="stat">
              <img src="./src/assets/stat2.svg" alt="stat" />
              <div className="statdetails">
                <h3>489</h3>
                <p>Deals Closed</p>
              </div>
            </div>
          </div>
          <div className="stat-section">
            <div className="stat">
              <img src="./src/assets/stat3.svg" alt="stat" />
              <div className="statdetails">
                <h3>489</h3>
                <p>Consultations</p>
              </div>
            </div>
            <div className="stat">
              <img src="./src/assets/stat4.svg" alt="stat" />
              <div className="statdetails">
                <h3>489</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divtwo">
        <div className="agent-about">
          <h3>About Melvin Felix</h3>
          <p>
            With over a decade of experience in the real estate industry, Melvin
            is a dedicated and knowledgeable realtor who prides himself on
            delivering exceptional service to his clients. Specializing in
            residential properties across the city, Melvin's deep understanding
            of the market and keen negotiation skills have earned him a
            reputation for securing the best deals for buyers and sellers alike.
          </p>
        </div>
        <div className="expdiv">
          <div className="expdetail">
            <h4>Areas of Expertise</h4>
            <p>Commercial, Residential, Land </p>
          </div>
          <div className="expdetail">
            <h4>Years of Experience</h4>
            <p>14+ Years of Experience</p>
          </div>
        </div>
      </div>

      <div className="charts">
        <div className="chart">
          <h4>Property Types</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart">
          <h4>Property Status</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart">
          <h4>Property Cities</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="divthree">
        <div className="reviews">
          <div className="reviewactions">
            <h3>Reviews</h3>
            <button onClick={handleNextClick}>
              <MdNavigateNext />
            </button>
          </div>

          <div className="review">
            <h4>{currentReview.name}</h4>
            <h6>{currentReview.title}</h6>
            <p>{currentReview.testimonial}</p>
          </div>
        </div>
        <div className="leave-review">
          <h3>Leave a Review</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <div className="rating">
              <label>Rating:</label>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`star ${index < rating ? 'filled' : ''}`}
                    onClick={() => handleRatingClick(index)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>

      <div className="divfour">
        <h2>Listing (06)</h2>
        <div className="props-grid">
        {houseData.map((house, index) => (
          <HouseCard
            key={index}
            propertyName={house.propertyName}
            location={house.location}
            bedrooms={house.bedrooms}
            bathrooms={house.bathrooms}
            garage={house.garage}
            price={house.price}
            imgSrc={house.imgSrc}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default AgentProfile;
