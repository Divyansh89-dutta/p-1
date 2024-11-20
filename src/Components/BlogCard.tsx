import "./BlogCard.css";

interface BlogCardProps {
  imgSrc: string;
  category: string;
  title: string;
  metaDescription: string;
  author: string;
  date: string;
}

function BlogCard({
  imgSrc,
  category,
  title,
  metaDescription,
  author,
  date,
}: BlogCardProps) {
  return (
    <div className="blog-card">
      <img src={imgSrc} alt={title} className="blog-card-image" />
      <div className="blog-card-content">
        <h4 className="blog-card-category">{category.toUpperCase()}</h4>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-meta">{metaDescription}</p>
        <div className="blog-card-details">
          <div className="blog-card-author">
            <img src="./src/assets/User 1.jpeg" className="author-photo"></img>
            <p>{author}</p>
          </div>

          <p className="blog-date">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
