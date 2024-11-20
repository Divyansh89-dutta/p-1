import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="heythere">
      <div className="herosection">
        <div className="left-hero">
          <h1>More Easily To Find With Your Dream Property</h1>
          <div className="desc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="46"
              viewBox="0 0 4 46"
              fill="none"
            >
              <path
                d="M2 44L2 2"
                stroke="#FAA24C"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
            <p>
              Discover your dream home today. With our expert guidance and
              exclusive listings, finding your perfect sanctuary is easier than
              ever. Start exploring now!
            </p>
          </div>
          <div className="cta">
            <a href="Signup.html">
            <button>Join Us</button>
            </a>
            
            <div>
              <img src="./src/assets/Play.svg"></img>
              <p><a href="MyProfile.html">Watch Video</a></p>
            </div>
          </div>
        </div>
        <div className="right-hero">
          <img src="./src/assets/Hero Img.png"></img>
        </div>
      </div>

      <div className="Searchbar">
        <div className="search1">
          <div className="prop-type">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
            >
              <g clip-path="url(#clip0_6_71)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.974 3.77499C22.0037 3.90304 22.0078 4.03566 21.9861 4.16529C21.9645 4.29492 21.9175 4.41901 21.8478 4.53046C21.7781 4.64191 21.6872 4.73854 21.5802 4.81481C21.4731 4.89109 21.3521 4.94552 21.224 4.97499L19 5.48699V9.99999H23C23.5305 9.99999 24.0392 10.2107 24.4143 10.5858C24.7893 10.9609 25 11.4696 25 12V19C25 19.5304 24.7893 20.0391 24.4143 20.4142C24.0392 20.7893 23.5305 21 23 21H10C9.46961 21 8.96091 20.7893 8.58583 20.4142C8.21076 20.0391 8.00005 19.5304 8.00005 19V7.99999C7.75471 7.99962 7.51807 7.90906 7.33515 7.74555C7.15223 7.58205 7.03581 7.35701 7.00802 7.11324C6.98024 6.86948 7.04303 6.62401 7.18446 6.42354C7.32589 6.22306 7.53608 6.08157 7.77505 6.02599L20.775 3.02599C20.9031 2.99636 21.0357 2.99226 21.1653 3.01392C21.295 3.03559 21.4191 3.08259 21.5305 3.15225C21.642 3.2219 21.7386 3.31284 21.8149 3.41987C21.8911 3.5269 21.9456 3.64791 21.975 3.77599M23 12H14V19H16V16C15.9999 15.4954 16.1905 15.0094 16.5335 14.6394C16.8766 14.2695 17.3469 14.0428 17.85 14.005L18 14H19C19.5046 13.9998 19.9906 14.1904 20.3606 14.5335C20.7306 14.8766 20.9572 15.3468 20.995 15.85L21 16V19H23V12ZM19 16H18V19H19V16ZM12 7.10299L10 7.56499V19H12V7.10299ZM17 5.94899L14 6.64199V9.99999H17V5.94899Z"
                  fill="#FAA24C"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_71">
                  <rect width="24" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <p>Property Type</p>
              <select>
                <option>Apartments</option>
                <option>Condominiums</option>
                <option>Single-House</option>
                <option>Residental Land</option>
                <option>Commercial Land</option>
                <option>Agricultural Land</option>
              </select>
            </div>
          </div>

          <div className="prop-loca">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
            >
              <path
                d="M10 6.99999C10 7.79564 9.68394 8.55871 9.12133 9.12131C8.55872 9.68392 7.79566 9.99999 7.00001 9.99999C6.20436 9.99999 5.4413 9.68392 4.87869 9.12131C4.31608 8.55871 4.00001 7.79564 4.00001 6.99999C4.00001 6.20434 4.31608 5.44128 4.87869 4.87867C5.4413 4.31606 6.20436 3.99999 7.00001 3.99999C7.79566 3.99999 8.55872 4.31606 9.12133 4.87867C9.68394 5.44128 10 6.20434 10 6.99999ZM9.00001 6.99999C9.00001 6.46956 8.78929 5.96085 8.41422 5.58578C8.03915 5.21071 7.53044 4.99999 7.00001 4.99999C6.46957 4.99999 5.96087 5.21071 5.58579 5.58578C5.21072 5.96085 5.00001 6.46956 5.00001 6.99999C5.00001 7.53043 5.21072 8.03913 5.58579 8.41421C5.96087 8.78928 6.46957 8.99999 7.00001 8.99999C7.53044 8.99999 8.03915 8.78928 8.41422 8.41421C8.78929 8.03913 9.00001 7.53043 9.00001 6.99999ZM11.95 11.955C13.2629 10.6414 14.0004 8.86021 14.0004 7.00299C14.0004 5.14578 13.2629 3.36458 11.95 2.05099C11.3 1.40091 10.5283 0.885227 9.67896 0.5334C8.82963 0.181572 7.91932 0.000488281 7.00001 0.000488281C6.08069 0.000488281 5.17038 0.181572 4.32106 0.5334C3.47173 0.885227 2.70003 1.40091 2.05001 2.05099C0.7371 3.36458 -0.000427246 5.14578 -0.000427246 7.00299C-0.000427246 8.86021 0.7371 10.6414 2.05001 11.955L3.57101 13.454L5.61401 15.439L5.74701 15.557C6.52201 16.185 7.65701 16.145 8.38701 15.439L10.822 13.069L11.95 11.955ZM2.75501 2.75599C3.31225 2.19813 3.97398 1.75558 4.70236 1.45363C5.43075 1.15169 6.21151 0.996273 7.00001 0.996273C7.7885 0.996273 8.56926 1.15169 9.29765 1.45363C10.026 1.75558 10.6878 2.19813 11.245 2.75599C12.3393 3.85169 12.9684 5.32747 13.0012 6.87566C13.034 8.42385 12.4679 9.92495 11.421 11.066L11.245 11.25L9.92401 12.554L7.69401 14.723L7.60001 14.803C7.4268 14.9327 7.21621 15.0027 6.99984 15.0025C6.78347 15.0023 6.57299 14.932 6.40001 14.802L6.30701 14.722L3.32701 11.817L2.75501 11.25L2.57901 11.067C1.53212 9.92595 0.966058 8.42485 0.998848 6.87666C1.03164 5.32847 1.66074 3.85169 2.75501 2.75599Z"
                fill="#FAA24C"
              />
            </svg>
            <div>
              <p>Location</p>
              <select>
                <option>Pallapatti</option>
                <option>Aravakurichi</option>
                <option>Karur</option>
                <option>Dindigul</option>
              </select>
            </div>
          </div>
        </div>

        <div className="search2">
          <div className="prop-size">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <g clip-path="url(#clip0_6_77)">
                <path
                  d="M0.412563 10.3466C0.223034 10.4561 0.0847456 10.6364 0.0281117 10.8478C-0.0285221 11.0592 0.00113587 11.2845 0.110563 11.474L3.77856 17.8276C3.83277 17.9215 3.90494 18.0038 3.99094 18.0697C4.07695 18.1357 4.17511 18.1841 4.27981 18.2122C4.38452 18.2402 4.49373 18.2473 4.6012 18.2332C4.70867 18.219 4.8123 18.1838 4.90616 18.1296L19.5874 9.65361C19.6812 9.59941 19.7635 9.52724 19.8295 9.44124C19.8955 9.35523 19.9439 9.25707 19.9719 9.15236C20 9.04766 20.0071 8.93845 19.9929 8.83098C19.9788 8.72351 19.9436 8.61988 19.8894 8.52601L16.2214 2.17241C16.1672 2.07854 16.095 1.99627 16.009 1.93028C15.923 1.8643 15.8248 1.81591 15.7201 1.78787C15.6154 1.75982 15.5062 1.75268 15.3987 1.76684C15.2913 1.78101 15.1876 1.8162 15.0938 1.87041L0.412563 10.3466ZM1.95276 11.3634L15.2044 3.71261L18.0472 8.63661L17.0922 9.18801L16.0268 7.34221L15.312 7.75501L16.3774 9.60061L15.2844 10.2318L14.2188 8.38601L13.504 8.79881L14.5696 10.6444L13.4778 11.2748L12.4122 9.42901L11.6974 9.84181L12.763 11.6874L11.67 12.3186L10.1892 9.75401L9.47436 10.1666L10.9552 12.7312L9.86196 13.3624L8.79636 11.5166L8.08156 11.9294L9.14716 13.775L8.05536 14.4052L6.98996 12.5596L6.27516 12.9724L7.34056 14.818L6.24756 15.449L5.18196 13.6034L4.46716 14.0162L5.53276 15.8618L4.79556 16.2874L1.95276 11.3634Z"
                  fill="#FAA24C"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_77">
                  <rect width="20" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <p>Property Size</p>
              <select>
                <option>600 - 800</option>
                <option>800 - 1000</option>
                <option>1200 - 1600</option>
                <option>1600 - 2400</option>
                <option>More Than 2400</option>
              </select>
            </div>
          </div>

          <div className="prop-budg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
            >
              <path
                d="M9 7.5H15M9 10.278H15M13.25 17.5L9 13.056H10.5C13.834 13.056 13.834 7.5 10.5 7.5"
                stroke="#FAA24C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 9.4C3 7.16 3 6.04 3.436 5.184C3.81949 4.43139 4.43139 3.81949 5.184 3.436C6.04 3 7.16 3 9.4 3H14.6C16.84 3 17.96 3 18.816 3.436C19.5686 3.81949 20.1805 4.43139 20.564 5.184C21 6.04 21 7.16 21 9.4V14.6C21 16.84 21 17.96 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.564C4.43139 20.1805 3.81949 19.5686 3.436 18.816C3 17.96 3 16.84 3 14.6V9.4Z"
                stroke="#FAA24C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>
              <p>Your Budget</p>
              <select>
                <option>₹10L - ₹20L</option>
                <option>₹20L - ₹30L</option>
                <option>₹30L - ₹40L</option>
                <option>₹40L - ₹50L</option>
                <option>₹50L - ₹1C</option>
              </select>
            </div>
          </div>
        </div>

        <button>Search</button>
      </div>
        
    </div>
  );
}

export default HeroSection;