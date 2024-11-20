import React, { useState } from "react";
import "./ServiceSelect.css";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  designation: string;
  reviewTitle: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Buying a Property",
    designation: "Find your Dream Home",
    image: "./src/assets/buyer.svg",
    text: "Our specialists ensure you find the perfect property by offering expert advice and personalized support throughout the buying process. We listen to your needs, present the best options, and handle all details, including negotiations and paperwork. Our goal is to make your home-buying journey seamless and stress-free. With in-depth market knowledge and a commitment to excellence, we help you make informed decisions and secure your dream home efficiently and confidently.",
    reviewTitle: "Buying: Expert Guidance Always",
  },
  {
    id: 2,
    name: "Selling a Property",
    designation: "Let's close a Great Deal",
    image: "./src/assets/seller.svg",
    text: "We leverage market insights and strategic marketing to showcase your property to the right buyers. Our specialists develop a customized selling plan, including professional staging, photography, and advertising. We handle pricing, negotiations, and inspections, ensuring you get the best possible price. Our goal is to provide a smooth, efficient selling experience, maximizing your property's value with expert care and precision.",
    reviewTitle: "Selling: Maximizing Your Value",
  },
  {
    id: 3,
    name: "Renting a Property",
    designation: "A Place to call Home",
    image: "./src/assets/rental.svg",
    text: "Our team handles all leasing aspects to provide a hassle-free experience for landlords and tenants. We conduct tenant screening, manage leases, handle maintenance requests, and oversee rent collection. Our specialists ensure compliance with legal requirements, offering peace of mind to property owners. Tenants benefit from responsive support and well-maintained properties. We create positive, long-term relationships, ensuring a smooth, stress-free leasing process for everyone involved.",
    reviewTitle: "Leasing: Hassle-Free Rentals",
  },
  {
    id: 4,
    name: "Home Maintenance",
    designation: "Home Sweet Home",
    image: "./src/assets/homem.svg",
    text: "We offer comprehensive home maintenance services to keep your property in top condition. Our skilled professionals handle routine upkeep and emergency repairs with prompt, reliable service. Customized maintenance plans prevent issues before they arise. From plumbing and electrical work to landscaping and general repairs, we ensure your home remains in excellent shape. Our commitment to exceptional care provides peace of mind year-round.",
    reviewTitle: "Maintenance: Reliable Home Care",
  },
];

const ServiceSelect: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<number>(testimonials[0].id);

  const handleUserClick = (id: number) => {
    setSelectedUser(id);
  };

  const selectedTestimonial = testimonials.find((t) => t.id === selectedUser);

  return (
    <div className="testmega">
      <div className="testimonials-container">
        <div className="left-panel">
          <div className="user-list">
            {testimonials.map((user) => (
              <div
                key={user.id}
                className={`user ${selectedUser === user.id ? "selected" : ""}`}
                onClick={() => handleUserClick(user.id)}
              >
                <img src={user.image} alt={user.name} />
                <div className="user-info">
                  <p className="username">{user.name}</p>
                  <p className="designation">{user.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-panel">
          {selectedTestimonial && (
            <div className="testimonial">
              <h3>{selectedTestimonial.reviewTitle}</h3>
              <p className="test-text">{selectedTestimonial.text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSelect;
