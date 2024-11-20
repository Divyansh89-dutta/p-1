import React, { useState } from "react";
import BlogCard from "./BlogCard";
import "./OurBlogs.css";

// Define the type for blog post
interface BlogPost {
  id: number;
  category: string;
  title: string;
  metaDescription: string;
  author: string;
  date: string;
  imgSrc: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Eco-Friendly Homes",
    title: "Eco-Friendly Homes: Sustainable Living In Real Estate",
    metaDescription:
      "Explore the benefits and features of eco-friendly homes and sustainable living in real estate.",
    author: "Philip Haid",
    date: "04 June 2024",
    imgSrc: "./src/assets/BlogImg1.png",
  },
  {
    id: 2,
    category: "Home Buying Tips",
    title: "Unlocking The Secrets To Home Buying Success",
    metaDescription:
      "Discover essential tips and strategies for a successful home buying experience in our latest article.",
    author: "Philip Haid",
    date: "04 June 2024",
    imgSrc: "./src/assets/BlogImg1.png",
  },
  {
    id: 3,
    category: "First-Time Homeowners",
    title: "Top 10 Tips For First-Time Homeowners",
    metaDescription:
      "Discover essential tips and strategies for a successful home buying experience in our latest article.",
    author: "Philip Haid",
    date: "04 June 2024",
    imgSrc: "./src/assets/BlogImg1.png",
  },
  {
    id: 4,
    category: "Home Maintenance",
    title: "Essential Home Maintenance Tips for Every Season",
    metaDescription:
      "Learn how to keep your home in top shape with these essential maintenance tips for every season.",
    author: "Sarah Lee",
    date: "12 July 2024",
    imgSrc: "./src/assets/BlogImg1.png",
  },
  {
    id: 5,
    category: "Real Estate Trends",
    title: "Top Real Estate Trends to Watch in 2024",
    metaDescription:
      "Stay ahead of the curve with these top real estate trends for 2024.",
    author: "John Doe",
    date: "20 July 2024",
    imgSrc: "./src/assets/BlogImg1.png",
  },
  {
    id: 6,
    category: "Interior Design",
    title: "Interior Design Trends to Elevate Your Home",
    metaDescription:
      "Transform your living space with these hot interior design trends.",
    author: "Emily Smith",
    date: "28 July 2024",
    imgSrc: "./src/assets/BlogImg1.png",
  },
];

function OurBlogs() {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to parse date from string
  const parseDate = (dateString: string): Date => new Date(dateString);

  // Find the latest blog post
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });
  const latestPost = sortedPosts[0];

  // Check if the latest post matches the search query
  const latestPostMatchesSearch =
    searchQuery === "" ||
    latestPost.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    latestPost.category.toLowerCase().includes(searchQuery.toLowerCase());

  // Filter out posts based on search query, excluding the latest post
  const filteredPosts = sortedPosts
    .filter((post) => post.id !== latestPost.id)
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="ourblogs">
      <div className="our-blogs-header">
        <h1>Our Blogs</h1>
        <p>Discover real estate insights, tips, and trends on our blog</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for articles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Render the latest blog post in the blog-first-card only if it matches the search query or if no query is entered */}
      {latestPostMatchesSearch && latestPost && (
        <div className="blog-first-card">
          <img
            src={latestPost.imgSrc}
            className="first-blog-img"
            alt="Blog Cover"
          />
          <div className="first-blog-details">
            <h4>{latestPost.category.toUpperCase()}</h4>
            <h2>{latestPost.title}</h2>
            <p>{latestPost.metaDescription}</p>
            <div className="first-blog-card-details">
              <div className="blog-card-author">
                <img
                  src="./src/assets/User 1.jpeg"
                  className="author-photo"
                  alt="Author"
                />
                <p>{latestPost.author}</p>
              </div>
              <p className="first-blog-date">{latestPost.date}</p>
            </div>
          </div>
        </div>
      )}

      <div className="blog-posts">
        {filteredPosts.map((post) => (
          <div className="blog-article">
            <BlogCard
              key={post.id}
              imgSrc={post.imgSrc}
              category={post.category}
              title={post.title}
              metaDescription={post.metaDescription}
              author={post.author}
              date={post.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurBlogs;
