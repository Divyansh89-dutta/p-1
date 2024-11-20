import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./ListingForm.css";

type Form = {
  planTitle: string;
  bedrooms: string;
  bathrooms: string;
  price: string;
  pricePostfix: string;
  planSize: string;
  planImage: File | null;
  description: string;
};

interface FloorPlan {
  planTitle: string;
  planBedrooms: string;
  planBathrooms: string;
  planPrice: string;
  planPricePostfix: string;
  planSize: string;
  planImage?: File | null; // Optional if you handle file uploads
  planDescription: string;
}

function ListingForm() {
  const [files, setFiles] = useState<{
    propertyDocuments?: File | null;
    aadhaarCard?: File | null;
    updatedEC?: File | null;
    marketingForm?: File | null;
    membershipForm?: File | null;
    propertyInfoSheet?: File | null;
  }>({});

  const [forms, setForms] = useState<Form[]>([]);
  const [step, setStep] = useState(1); // State to manage current step
  const [editorContent, setEditorContent] = useState("");
  const [images, setImages] = useState<{ file: File; url: string }[]>([]); // State to manage image previews
  const [featuredImage, setFeaturedImage] = useState<{
    file: File;
    url: string;
  } | null>(null); // State to manage featured image preview
  const [additionalDetails, setAdditionalDetails] = useState([
    { title: "", value: "" },
  ]);

  const handleAddForm = () => {
    setForms([
      ...forms,
      {
        planTitle: "",
        bedrooms: "",
        bathrooms: "",
        price: "",
        pricePostfix: "",
        planSize: "",
        planImage: null,
        description: "",
      },
    ]);
  };

  const handleFormChange = (
    index: number,
    field: keyof Form,
    value: string
  ) => {
    const updatedForms = forms.map((form, i) =>
      i === index ? { ...form, [field]: value } : form
    );
    setForms(updatedForms);
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    console.log("Content was updated:", content);
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setImages((prevImages) => prevImages.concat(fileArray));
      Array.from(files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const handleFeaturedImageChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] || null;
    const updatedForms = forms.map((form, i) =>
      i === index ? { ...form, planImage: file } : form
    );
    setForms(updatedForms);
  };

  const handleAddDetail = () => {
    setAdditionalDetails((prevDetails) => [
      ...prevDetails,
      { title: "", value: "" },
    ]);
  };

  const handleDetailChange = (
    index: number,
    key: "title" | "value",
    value: string
  ) => {
    setAdditionalDetails((prevDetails) =>
      prevDetails.map((detail, i) =>
        i === index ? { ...detail, [key]: value } : detail
      )
    );
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof typeof files
  ) => {
    const file = e.target.files?.[0] || null;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [key]: file,
    }));
  };

  const [formData, setFormData] = useState({
    propertyTitle: "",
    content: "",
    propType: "",
    propStatus: "",
    propLabel: "",
    salePrice: "",
    secondPrice: "",
    afterThePrice: "",
    pricePrefix: "",
    galleryImages: "",
    featuredImages: "",
    videoUrl: "",
    bedrooms: "",
    rooms: "",
    bathrooms: "",
    areaSize: "",
    sidePostfix: "",
    landArea: "",
    landAreaSidePostfix: "",
    garages: "",
    garageSize: "",
    propertyId: "",
    yearBuilt: "",
    addiTitle: "",
    addiValue: "",
    amenities: {
      TwoFourHoursConcierge: false,
      CCTVSecurity: false,
      LandscapeGardens: false,
      Microwave: false,
      Refrigerator: false,
      WindowCoverings: false,
      TVCable: false,
      AirConditioning: false,
      DirectAccessToBeach: false,
      Laundry: false,
      OutdoorShower: false,
      Sauna: false,
      Washer: false,
      BalconyOrTerrace: false,
      Dryer: false,
      Lawn: false,
      PlayingArea: false,
      SecurityStaff: false,
      Wifi: false,
      Barbeque: false,
      ReceptionWaitingRoom: false,
      MaintenanceStaff: false,
      Gym: false,
      SwimmingPool: false,
      Coverings: false,
      customAmenity: "", // For dynamically adding custom amenities
    },
    propAddress: "",
    propCountry: "",
    propState: "",
    propCity: "",
    propArea: "",
    propZipcode: "",
    latitude: "",
    longitude: "",
    virtualTour: "",
    floorPlans: [
      {
        planTitle: "",
        planBedrooms: "",
        planBathrooms: "",
        planPrice: "",
        planPricePostfix: "",
        planSize: "",
        planImage: null,
        planDescription: "",
      },
    ] as FloorPlan[],
    privateNote: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="ListingForm">
      <form>
        {step === 1 && (
          <div className="step">
            <div className="list-left">
              <img src="./src/assets/list1.svg" alt="Listing step 1" />
              <p className="stepnumber">1/9</p>
              <h3>Create Your Dream Listing: Title, Details, Price & More</h3>
              <h6>
                Effortlessly create a new property listing with all the
                essential details to attract potential buyers and showcase your
                property in the best light.
              </h6>
              <div className="buttons">
                <div className="leftbutton" onClick={handlePrev}>
                  <img src="./src/assets/lefting.svg" alt="Cancel" />
                  <p>Cancel</p>
                </div>
                <div className="rightbutton" onClick={handleNext}>
                  <img src="./src/assets/righting.svg" alt="Next" />
                  <p>Next</p>
                </div>
              </div>
            </div>
            <div className="list-right">
              <h3>General</h3>
              <label>Property Title *</label>
              <input
                placeholder="Property Title"
                required
                type="text"
                name="propertyTitle"
                value={formData.propertyTitle}
                onChange={handleInputChange}
              />
              <label>Content</label>
              <div className="formattext">
                <ReactQuill
                  value={editorContent}
                  onChange={handleEditorChange}
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }],
                      ["bold", "italic", "underline"],
                      [{ list: "ordered" }, { list: "bullet" }],
                      [{ align: [] }],
                      ["clean"],
                    ],
                  }}
                  formats={[
                    "header",
                    "bold",
                    "italic",
                    "underline",
                    "list",
                    "bullet",
                    "align",
                  ]}
                />
              </div>
              <label>Type</label>
              <select
                name="propType"
                value={formData.propType}
                onChange={handleInputChange}
              >
                <option>Villa</option>
                <option>Line House</option>
                <option>Shop</option>
                <option>Res. Land</option>
                <option>Com. Land</option>
                <option>Apartment</option>
                <option>Agri Land</option>
              </select>
              <div className="statuslabel">
                <div className="status">
                  <label>Status</label>
                  <select
                    name="propStatus"
                    value={formData.propStatus}
                    onChange={handleInputChange}
                  >
                    <option>For Rent</option>
                    <option>For Sale</option>
                    <option>For Closures</option>
                    <option>New Constructions</option>
                    <option>New Listing</option>
                    <option>Open House</option>
                    <option>Resale</option>
                  </select>
                </div>
                <div className="labels">
                  <label>Label</label>
                  <select
                    name="propLabel"
                    value={formData.propLabel}
                    onChange={handleInputChange}
                  >
                    <option>Hot Sale</option>
                    <option>Open House</option>
                  </select>
                </div>
              </div>
              <h3>Price</h3>
              <label>Sale or Rental Price</label>
              <input
                name="salePrice"
                value={formData.salePrice}
                onChange={handleInputChange}
                required
                type="text"
                pattern="[0-9]+" // Only allow digits (positive integers)
              />

              <label>Second Price (Optional)</label>
              <input
                name="secondPrice"
                value={formData.secondPrice}
                onChange={handleInputChange}
                required
                type="text"
                pattern="[0-9]+" // Only allow digits (positive integers)
              />

              <label>After the Price</label>
              <input
                type="text"
                placeholder="For Example: Monthly"
                name="afterThePrice"
                value={formData.afterThePrice}
                onChange={handleInputChange}
              />
              <label>Price Prefix</label>
              <input
                type="text"
                placeholder="For Example: Start From"
                name="pricePrefix"
                value={formData.pricePrefix}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <div className="list-left">
              <img src="./src/assets/list2.svg" alt="Listing step 2" />
              <p className="stepnumber">2/9</p>
              <h3>Showcase Your Property: Upload Photos & Videos</h3>
              <h6>
                Enhance your listing by uploading high-quality photos and
                videos. Give potential buyers a comprehensive view of your
                property and make a lasting impression.
              </h6>
              <div className="buttons">
                <div className="leftbutton" onClick={handlePrev}>
                  <img src="./src/assets/lefting.svg" alt="Cancel" />
                  <p>Back</p>
                </div>
                <div className="rightbutton" onClick={handleNext}>
                  <img src="./src/assets/righting.svg" alt="Next" />
                  <p>Next</p>
                </div>
              </div>
            </div>
            <div className="list-right">
              <h3>Upload Gallery Images</h3>
              <div className="container">
                <input
                  name="galleryImages"
                  value={formData.galleryImages}
                  type="file"
                  id="imageUpload"
                  multiple
                  onChange={handleImageChange}
                ></input>
                <div className="image-preview">
                  {images.map((image, index) => (
                    <img key={index} src={image.url} alt={`preview ${index}`} />
                  ))}
                </div>
              </div>

              <h3>Featured Image</h3>
              <input
                name="featuredImages"
                value={formData.featuredImages}
                onChange={handleInputChange}
                type="file"
                required
                id="featimg"
              ></input>
              <div className="featured-image-preview">
                {featuredImage && (
                  <img src={featuredImage.url} alt="Featured preview" />
                )}
              </div>

              <label>Video URL</label>
              <input
                type="url"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <div className="list-left">
              <img src="./src/assets/list3.svg" alt="Listing step 2" />
              <p className="stepnumber">3/9</p>
              <h3>Home Features: Bedrooms, Bathrooms, and Essentials</h3>
              <h6>
                Detail the key features of your property, including the number
                of bedrooms, bathrooms, and other important attributes. Make
                your listing comprehensive and attractive to buyers.
              </h6>
              <div className="buttons">
                <div className="leftbutton" onClick={handlePrev}>
                  <img src="./src/assets/lefting.svg" alt="Cancel" />
                  <p>Back</p>
                </div>
                <div className="rightbutton" onClick={handleNext}>
                  <img src="./src/assets/righting.svg" alt="Next" />
                  <p>Next</p>
                </div>
              </div>
            </div>
            <div className="list-right">
              <div className="sint">
                <div className="bedrooms">
                  <label>Bedrooms</label>
                  <input
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    type="text"
                    pattern="[0-9]+" // Only allow digits (positive integers)
                  />
                </div>
                <div className="rooms">
                  <label>Rooms</label>
                  <input
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    type="text"
                    pattern="[0-9]+" // Only allow digits (positive integers)
                  />
                </div>
              </div>

              <div className="sint">
                <div className="bedrooms">
                  <label>Bathrooms</label>
                  <input
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    type="text"
                    pattern="[0-9]+" // Only allow digits (positive integers)
                  />
                </div>
                <div className="rooms">
                  <label>Area Size *</label>
                  <input
                    name="areaSize"
                    value={formData.areaSize}
                    onChange={handleInputChange}
                    required
                    type="text"
                    pattern="[0-9]+" // Only allow digits (positive integers)
                  />
                </div>
              </div>

              <div className="sint">
                <div className="bedrooms">
                  <label>Side Postfix</label>
                  <input
                    type="text"
                    placeholder="Eg: Sqft"
                    name="sidePostfix"
                    value={formData.sidePostfix}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="rooms">
                  <label>Land Area</label>
                  <input
                    name="landArea"
                    value={formData.landArea}
                    onChange={handleInputChange}
                    type="text"
                    pattern="[0-9]+" // Only allow digits (positive integers)
                  />
                </div>
              </div>

              <div className="sint">
                <div className="bedrooms">
                  <label>Land Area Side Postfix</label>
                  <input
                    type="text"
                    placeholder="Eg: Sqft"
                    name="landAreaSidePostfix"
                    value={formData.landAreaSidePostfix}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="rooms">
                  <label>Garages</label>
                  <input
                    name="garages"
                    value={formData.garages}
                    onChange={handleInputChange}
                    type="text"
                    pattern="[0-9]+" // Only allow digits (positive integers)
                  />
                </div>
              </div>

              <div className="sint">
                <div className="bedrooms">
                  <label>Garage Size</label>
                  <input
                    name="garageSize"
                    value={formData.garageSize}
                    onChange={handleInputChange}
                    type="text"
                    pattern="[0-9]+" // Only allow digits (positive integers)
                  />
                </div>
                <div className="rooms">
                  <label>Property ID</label>
                  <input
                    type="text"
                    name="propertyId"
                    value={formData.propertyId}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <h3>Additional Details</h3>
              {additionalDetails.map((detail, index) => (
                <div className="loop-content" key={index}>
                  <div className="loopc1">
                    <label>Title</label>
                    <input
                      type="text"
                      value={detail.title}
                      onChange={(e) =>
                        handleDetailChange(index, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="loopc2">
                    <label>Value</label>
                    <input
                      type="text"
                      value={detail.value}
                      onChange={(e) =>
                        handleDetailChange(index, "value", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}

              {/* Add More Button */}
              <button className="plus-button" onClick={handleAddDetail}>
                +
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="step">
            <div className="list-left">
              <img src="./src/assets/list4.svg" alt="Listing step 2" />
              <p className="stepnumber">4/9</p>
              <h3>Highlight Amenities: Select Property Features</h3>
              <h6>
                Choose from a range of features to showcase your property's
                amenities, such as Wifi, Gym, and more. Make your listing stand
                out with these attractive options.
              </h6>
              <div className="buttons">
                <div className="leftbutton" onClick={handlePrev}>
                  <img src="./src/assets/lefting.svg" alt="Cancel" />
                  <p>Back</p>
                </div>
                <div className="rightbutton" onClick={handleNext}>
                  <img src="./src/assets/righting.svg" alt="Next" />
                  <p>Next</p>
                </div>
              </div>
            </div>
            <div className="list-right">
              <div className="amenities">
                <div className="choose">
                  <input type="checkbox" value="24 Hours Concierge"></input>
                  <label>24 Hours Concierge</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="CCTV Security"></input>
                  <label>CCTV Security</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Landscape Gardens"></input>
                  <label>Landscape Gardens</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Microwave"></input>
                  <label>Microwave</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Refrigerator"></input>
                  <label>Refrigerator</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Window Coverings"></input>
                  <label>Window Coverings</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="TV Cable"></input>
                  <label>TV Cable</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Air Conditioning"></input>
                  <label>Air Conditioning</label>
                </div>
                <div className="choose">
                  <input
                    type="checkbox"
                    value="Direct access to the Beach"
                  ></input>
                  <label>Direct access to the Beach</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Laundry"></input>
                  <label>Laundry</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Outdoor Shower"></input>
                  <label>Outdoor Shower</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Sauna"></input>
                  <label>Sauna</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Washer"></input>
                  <label>Washer</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Balcony or Terrace"></input>
                  <label>Balcony or Terrace</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Dryer"></input>
                  <label>Dryer</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Lawn"></input>
                  <label>Lawn</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Playing Area"></input>
                  <label>Playing Area</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Security Staff"></input>
                  <label>Security Staff</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Wifi"></input>
                  <label>Wifi</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Barbeque"></input>
                  <label>Barbeque</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Reception/Waiting Room"></input>
                  <label>Reception/Waiting Room</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Maintenance Staff"></input>
                  <label>Maintenance Staff</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Gym"></input>
                  <label>Gym</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Swimming Pool"></input>
                  <label>Swimming Pool</label>
                </div>
                <div className="choose">
                  <input type="checkbox" value="Coverings"></input>
                  <label>Coverings</label>
                </div>
                <div className="choose">
                  <input
                    type="text"
                    className="customamen"
                    placeholder="+ Custom Amenities"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="step">
            <div className="list-left">
              <img src="./src/assets/list5.svg" alt="Listing step 2" />
              <p className="stepnumber">5/9</p>
              <h3>Pinpoint Your Property: Location Details</h3>
              <h6>
                Specify the exact location of your property to help potential
                buyers understand its surroundings and convenience. Provide
                accurate details to make your listing more attractive
              </h6>
              <div className="buttons">
                <div className="leftbutton" onClick={handlePrev}>
                  <img src="./src/assets/lefting.svg" alt="Cancel" />
                  <p>Back</p>
                </div>
                <div className="rightbutton" onClick={handleNext}>
                  <img src="./src/assets/righting.svg" alt="Next" />
                  <p>Next</p>
                </div>
              </div>
            </div>
            <div className="list-right">
              <div className="newinput">
                <label>Address *</label>
                <input
                  type="text"
                  required
                  name="propAddress"
                  value={formData.propAddress}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="newinput">
                <label>Enter Country</label>
                <input
                  type="text"
                  name="propCountry"
                  value={formData.propCountry}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="newinput">
                <label>State</label>
                <input
                  type="text"
                  name="propState"
                  value={formData.propState}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="newinput">
                <label>City</label>
                <input
                  type="text"
                  name="propCity"
                  value={formData.propCity}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="newinput">
                <label>Area</label>
                <input
                  type="text"
                  name="propArea"
                  value={formData.propArea}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="newinput">
                <label>Zip/Postal Code</label>
                <input
                  name="propZipcode"
                  value={formData.propZipcode}
                  onChange={handleInputChange}
                  type="text"
                  pattern="[0-9]+" // Only allow digits (positive integers)
                />
              </div>
              <h3>Map</h3>
              <div className="newinput">
                <label>Latitude</label>
                <input
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleInputChange}
                  type="text"
                  pattern="[0-9]+" // Only allow digits (positive integers)
                />
              </div>
              <div className="newinput">
                <label>Longitude</label>
                <input
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleInputChange}
                  type="text"
                  pattern="[0-9]+" // Only allow digits (positive integers)
                />
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="step">
            <div className="list-left">
              <img src="./src/assets/list6.svg" alt="Listing step 2" />
              <p className="stepnumber">6/9</p>
              <h3>Virtual Tour: Embed a 360-Degree Experience</h3>
              <h6>
                Enhance your listing with a 360-degree virtual tour. Embed the
                iframe tag to provide potential buyers with an immersive view of
                your property from every angle
              </h6>
              <div className="buttons">
                <div className="leftbutton" onClick={handlePrev}>
                  <img src="./src/assets/lefting.svg" alt="Cancel" />
                  <p>Back</p>
                </div>
                <div className="rightbutton" onClick={handleNext}>
                  <img src="./src/assets/righting.svg" alt="Next" />
                  <p>Next</p>
                </div>
              </div>
            </div>
            <div className="list-right">
              <label>360° Virtual Tour</label>
              <input
                name="virtualTour"
                value={formData.virtualTour}
                onChange={handleInputChange}
                placeholder="Enter Virtual Tour iframe/embedded Code"
                className="virt-input"
              ></input>
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="step">
            <div className="list-left">
              <img src="./src/assets/list7.svg" alt="Listing step 2" />
              <p className="stepnumber">7/9</p>
              <h3>Layout Insight: Upload Floor Plans</h3>
              <h6>
                Give potential buyers a clear understanding of your property's
                layout by uploading detailed floor plans. Highlight the
                structure and flow of your home to enhance your listing.
              </h6>
              <div className="buttons">
                <div className="leftbutton" onClick={handlePrev}>
                  <img src="./src/assets/lefting.svg" alt="Cancel" />
                  <p>Back</p>
                </div>
                <div className="rightbutton" onClick={handleNext}>
                  <img src="./src/assets/righting.svg" alt="Next" />
                  <p>Next</p>
                </div>
              </div>
            </div>
            <div className="list-right">
              <h3>Floor Plan</h3>
              <button className="floor-button" onClick={handleAddForm}>
                Add New
              </button>
              {forms.map((form, index) => (
                <div key={index} className="floor-form">
                  <label className="plantitle">Plan Title</label>
                  <input
                    type="text"
                    value={form.planTitle}
                    onChange={(e) =>
                      handleFormChange(index, "planTitle", e.target.value)
                    }
                  />

                  <div className="sint">
                    <div className="bedrooms">
                      <label>Bedrooms</label>
                      <input
                        type="text"
                        value={form.bedrooms}
                        pattern="[0-9]+"
                        onChange={(e) =>
                          handleFormChange(index, "bedrooms", e.target.value)
                        }
                      />
                    </div>
                    <div className="rooms">
                      <label>Bathrooms</label>
                      <input
                        type="text"
                        value={form.bathrooms}
                        pattern="[0-9]+"
                        onChange={(e) =>
                          handleFormChange(index, "bathrooms", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="sint">
                    <div className="bedrooms">
                      <label>Price</label>
                      <input
                        type="text"
                        value={form.price}
                        pattern="[0-9]+"
                        onChange={(e) =>
                          handleFormChange(index, "price", e.target.value)
                        }
                      />
                    </div>
                    <div className="rooms">
                      <label>Price Postfix</label>
                      <input
                        type="text"
                        value={form.pricePostfix}
                        onChange={(e) =>
                          handleFormChange(
                            index,
                            "pricePostfix",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <label>Plan Size</label>
                  <input
                    type="text"
                    value={form.planSize}
                    pattern="[0-9]+"
                    onChange={(e) =>
                      handleFormChange(index, "planSize", e.target.value)
                    }
                  />

                  <label>Plan Image</label>
                  <input
                    type="file"
                    required
                    onChange={(e) => handleFeaturedImageChange(index, e)}
                    id="featimg"
                  />

                  <label>Description</label>
                  <input
                    type="text"
                    value={form.description}
                    onChange={(e) =>
                      handleFormChange(index, "description", e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="step">
            <div className="list-left">
              <img src="./src/assets/list8.svg" alt="Listing step 2" />
              <p className="stepnumber">8/9</p>
              <h3>Add a Private Note: Personal Remarks</h3>
              <h6>
                Include any personal remarks or additional information with a
                private note. This section is for your eyes only, allowing you
                to keep track of important details and reminders
              </h6>
              <div className="buttons">
                <div className="leftbutton" onClick={handlePrev}>
                  <img src="./src/assets/lefting.svg" alt="Cancel" />
                  <p>Back</p>
                </div>
                <div className="rightbutton" onClick={handleNext}>
                  <img src="./src/assets/righting.svg" alt="Next" />
                  <p>Next</p>
                </div>
              </div>
            </div>
            <div className="list-right">
              <label>
                Write private note for this property, it will not display for
                public.
              </label>
              <input
                placeholder="Enter Note Here"
                name="privateNote"
                value={formData.privateNote}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
        )}

        {step === 9 && (
          <div className="step">
            <div className="list-left">
              <img src="./src/assets/list9.svg" alt="Listing step 2" />
              <p className="stepnumber">9/9</p>
              <h3>Submit Your Real Estate Documents</h3>
              <h6>
                Securely upload your essential real estate documents for a
                smooth listing experience. Manage and submit all necessary
                paperwork easily to streamline your property transactions.
              </h6>
              <div className="buttons">
                <div className="leftbutton" onClick={handlePrev}>
                  <img src="./src/assets/lefting.svg" alt="Cancel" />
                  <p>Back</p>
                </div>
              </div>
            </div>
            <div className="list-right">
              <div className="realestate-form">
                <label>Property Documents (Required)</label>
                <input
                  type="file"
                  required
                  onChange={(e) => handleFileChange(e, "propertyDocuments")}
                />
                {files.propertyDocuments && (
                  <p>{files.propertyDocuments.name} - Uploaded</p>
                )}

                <label>Aadhaar Card (Required)</label>
                <input
                  type="file"
                  required
                  onChange={(e) => handleFileChange(e, "aadhaarCard")}
                />
                {files.aadhaarCard && (
                  <p>{files.aadhaarCard.name} - Uploaded</p>
                )}

                <label>Phone Number (Required)</label>
                <input
                  type="text"
                  pattern="[0-9]+"
                  onChange={(e) => {
                    const { value } = e.target;
                    if (value !== "" && !/^\d+$/.test(value)) {
                      e.target.value = "";
                    }
                  }}
                />

                <label>Updated EC (Required)</label>
                <input
                  type="file"
                  required
                  onChange={(e) => handleFileChange(e, "updatedEC")}
                />
                {files.updatedEC && <p>{files.updatedEC.name} - Uploaded</p>}

                <label>Marketing Form - Signed (Required)</label>
                <input
                  type="file"
                  required
                  onChange={(e) => handleFileChange(e, "marketingForm")}
                />
                {files.marketingForm && (
                  <p>{files.marketingForm.name} - Uploaded</p>
                )}
                <a
                  className="download-form"
                  href="/path/to/marketing-form"
                  download
                >
                  Download Marketing Form
                </a>

                <label>Membership Form - Signed (Required)</label>
                <input
                  type="file"
                  required
                  onChange={(e) => handleFileChange(e, "membershipForm")}
                />
                {files.membershipForm && (
                  <p>{files.membershipForm.name} - Uploaded</p>
                )}
                <a
                  className="download-form"
                  href="/path/to/membership-form"
                  download
                >
                  Download Membership Form
                </a>

                <label>Property Information Sheet (Required)</label>
                <input
                  type="file"
                  required
                  onChange={(e) => handleFileChange(e, "propertyInfoSheet")}
                />
                {files.propertyInfoSheet && (
                  <p>{files.propertyInfoSheet.name} - Uploaded</p>
                )}

                {step === 9 && (
                  <button type="submit" className="listing-button">
                    Submit Listing
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Repeat for steps 3 to 9 */}

        {/* Navigation buttons at the end of the form */}
        <div className="buttonss">
          {step > 1 && (
            <div className="leftbuttons" onClick={handlePrev}>
              <img src="./src/assets/lefting.svg" alt="Cancel" />
              <p>Previous</p>
            </div>
          )}
          {step < 9 && (
            <div className="rightbuttons" onClick={handleNext}>
              <img src="./src/assets/righting.svg" alt="Next" />
              <p>Next</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ListingForm;
