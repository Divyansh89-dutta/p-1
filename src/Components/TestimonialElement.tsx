import React, { useState } from "react";
import "./TestimonialElement.css";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  designation: string;
  rating: number;
  reviewTitle: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO at Salesforce",
    image: "./src/assets/User 1.jpeg",
    text: "Working with The Specialist - Real Estate was an absolute pleasure! Their team provided exceptional service and guided us through every step of the home-buying process with expertise and care. They listened to our needs, understood the market perfectly, and found us the ideal home. We couldn't be happier with our experience and highly recommend them to anyone looking for a seamless and successful real estate journey.",
    rating: 5,
    reviewTitle: "Exceptional Service and Expertise"
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "CEO at Salesforce",
    image: "./src/assets/User 2.jpeg",
    text: "Our experience with The Specialist - Real Estate was nothing short of outstanding! Their team offered unparalleled service and expertly guided us through each stage of the home-buying process. They attentively listened to our requirements, possessed a thorough understanding of the market, and ultimately found us our perfect home. We are thrilled with our experience and wholeheartedly recommend them for anyone seeking a smooth and successful real estate journey.",
    rating: 4,
    reviewTitle: "Outstanding Real Estate Service"
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "CEO at Salesforce",
    image: "./src/assets/User 3.jpeg",
    text: "The Specialist - Real Estate provided an exceptional home buying experience! From start to finish, their team was knowledgeable, attentive, and dedicated to finding us the ideal home. They truly listened to our needs, demonstrated an in-depth understanding of the market, and ensured a seamless process. We are overjoyed with the outcome and highly recommend their services to anyone looking for a professional and successful real estate journey.",
    rating: 5,
    reviewTitle: "Exceptional Buying Experience"
  },
  {
    id: 4,
    name: "Mohamed Mafaz",
    designation: "Web Developer",
    image: "./src/assets/User 4.jpeg",
    text: "We had a superb real estate experience with The Specialist - Real Estate! Their team was professional, attentive, and expertly guided us through the home-buying process. They listened carefully to our needs, had an excellent grasp of the market, and found us the perfect home. We couldn't be more satisfied with our experience and strongly recommend them to anyone seeking a smooth and successful real estate journey.",
    rating: 5,
    reviewTitle: "Superb Real Estate Guidance"
  },
];

const TestimonialElement: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<number>(testimonials[0].id);

  const handleUserClick = (id: number) => {
    setSelectedUser(id);
  };

  const selectedTestimonial = testimonials.find((t) => t.id === selectedUser);

  return (
    <div className="testmega">
      <div className="testimonials-container">
        <div className="left-panel">
          <h2>Testimonials</h2>
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
          <img src="./src/assets/Testimg.svg" alt="Testimonial" />
          {selectedTestimonial && (
            <div className="testimonial">
              <h3>{selectedTestimonial.reviewTitle}</h3>
              <p className="rating">
                {"⭐".repeat(selectedTestimonial.rating)}
              </p>
              <p className="test-text">{selectedTestimonial.text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialElement;
