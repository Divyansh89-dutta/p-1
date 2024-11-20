import { BsBell } from "react-icons/bs";
import "./AdminBlogs.css";
import BlogCard from "./BlogCard";

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

function AdminBlogs() {
  return (
    <div className="adminblogs">
      <div className="adminpropheader">
        <div className="headertitle">
          <h1>Blogs & Articles</h1>
          <button className="add-new-btn">+ Add New</button>
        </div>
        <div>
          <BsBell />
          <img src="./src/assets/realtor-img.jpg" alt="Profile" />
        </div>
      </div>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-article" key={post.id}>
            <BlogCard
              imgSrc={post.imgSrc}
              category={post.category}
              title={post.title}
              metaDescription={post.metaDescription}
              author={post.author}
              date={post.date}
            />
            <div className="blog-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
              <button className="publish-btn">Unpublish</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminBlogs;
