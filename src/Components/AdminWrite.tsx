import React, { useState } from "react";
import "./AdminWrite.css";
import { BsBell } from "react-icons/bs";
import ReactQuill from "react-quill"; // Import ReactQuill for the rich text editor
import "react-quill/dist/quill.snow.css"; // Quill's styles
import { BsImage } from "react-icons/bs";

function AdminWrite() {
  // Defining the types explicitly
  const [content, setContent] = useState<string>(""); // Rich text content
  const [category, setCategory] = useState<string[]>([]); // Category array, type string[]
  const [metaDescription, setMetaDescription] = useState<string>(""); // Meta description
  const [featuredImage, setFeaturedImage] = useState<File | null>(null); // For file input
  const [newCategory, setNewCategory] = useState<string>(""); // New category input

  const handleQuillChange = (value: string) => {
    setContent(value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((cat) => cat !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFeaturedImage(e.target.files[0]);
    }
  };

  // Handle adding a new category
  const handleAddNewCategory = () => {
    if (newCategory.trim() !== "" && !category.includes(newCategory)) {
      setCategory([...category, newCategory]);
      setNewCategory(""); // Reset the input field after adding
    }
  };

  return (
    <div className="adminwrite">
      <div className="adminpropheader">
        <div className="headertitle">
          <h1>Write an Article</h1>
        </div>
        <div>
          <BsBell />
          <img src="./src/assets/realtor-img.jpg" alt="Profile" />
        </div>
      </div>

      {/* Main writing area */}
      <div className="adminwrite-body">
        <div className="editor-area">
          <ReactQuill theme="snow" value={content} onChange={handleQuillChange} />
          <div className="meta-description">
            <input
              type="text"
              placeholder="Meta Description"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
            />
          </div>
        </div>

        {/* Sidebar options */}
        <div className="sidebar">
          <div className="category-section">
            <h4>Select Category</h4>
            {/* Existing Categories */}
            <div>
              <input
                type="checkbox"
                id="homebuyingtips"
                value="Home Buying Tips"
                onChange={handleCategoryChange}
              />
              <label htmlFor="homebuyingtips">Home Buying Tips</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="firsttimehomeowners"
                value="First Time Home Owners"
                onChange={handleCategoryChange}
              />
              <label htmlFor="firsttimehomeowners">First Time Home Owners</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="tipsforhomebuying"
                value="Tips For Home Buying"
                onChange={handleCategoryChange}
              />
              <label htmlFor="tipsforhomebuying">Tips For Home Buying</label>
            </div>

            {/* Adding a new category */}
            <div className="new-category">
              <input
                type="text"
                placeholder="New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <button className="add-category-btn" onClick={handleAddNewCategory}>
                Add New
              </button>
            </div>
          </div>

          {/* Publish options */}
          <div className="publish-options">
            <h4>Publish:</h4>
            <select>
              <option>Immediately</option>
              <option>Schedule</option>
            </select>
            <h4>Status:</h4>
            <select>
              <option>Draft</option>
              <option>Published</option>
            </select>
            <h4>Author:</h4>
            <select>
              <option>Mohamed</option>
              <option>Other</option>
            </select>
          </div>

          {/* Featured Image */}
          <div className="featured-image">
            <h4>Set Featured Image</h4>
            <input type="file" onChange={handleImageUpload} />
            {featuredImage && (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(featuredImage)}
                  alt="Featured Preview"
                />
              </div>
            )}
          </div>

          <button className="publish-btn">Publish Now</button>
        </div>
      </div>
    </div>
  );
}

export default AdminWrite;
