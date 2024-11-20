import "./MyConsultation.css";
import { CiSearch } from "react-icons/ci";

function MyConsultation() {
  const filterOptions = [
    { value: '', label: 'Filter By', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'price', label: 'Price' },
    { value: 'recent', label: 'Recent' },
  ];

  const consultations = [
    { name: "Mohamed Mafaz", duration: "30 Mins", date: "03 June 2024", type: "Property Issue", charge: "₹ 150/-", badgeClass: "property" },
    { name: "Mohamed Mafaz", duration: "30 Mins", date: "03 June 2024", type: "Legal Doubt", charge: "₹ 150/-", badgeClass: "legal" },
    { name: "Mohamed Mafaz", duration: "30 Mins", date: "03 June 2024", type: "Property Issue", charge: "₹ 150/-", badgeClass: "property" },
    { name: "Mohamed Mafaz", duration: "30 Mins", date: "03 June 2024", type: "Legal Doubt", charge: "₹ 150/-", badgeClass: "legal" },
    { name: "Mohamed Mafaz", duration: "30 Mins", date: "03 June 2024", type: "Property Issue", charge: "₹ 150/-", badgeClass: "property" }
  ];

  return (
    <div className="myconsultation">
      <div className="listingtopbar">
        <h1>Consultations</h1>
        <div className="search">
          <CiSearch className="searchicon" />
          <select>
            {filterOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                selected={option.value === ''}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="consultation-table">
        <thead>
          <tr className="needtobehidden">
            <th>Client Name</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Consultation Type</th>
            <th>Consultation Charge</th>
          </tr>
        </thead>
        <tbody>
          {consultations.map((row, index) => (
            <tr key={index}>
              <td data-label="Client Name" className="client-name">
                {row.name}<br />
                <span className="sub-text">Family Name (If Any)</span>
              </td>
              <td data-label="Duration" className="client-name">{row.duration}</td>
              <td data-label="Date">{row.date}</td>
              <td data-label="Consultation Type">
                <span className={`badge ${row.badgeClass}`}>{row.type}</span>
              </td>
              <td data-label="Consultation Charge">{row.charge}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Version */}
      <div className="consultation-cards">
        {consultations.map((row, index) => (
          <div key={index} className={`consultation-card ${row.badgeClass}`}>
            <div className="client-name">{row.name}</div>
            <div className="sub-text">Family Name (If Any)</div>
            <div className="badge-container">
              <span className={`badge ${row.badgeClass}`}>{row.type}</span>
            </div>
            <div className="details">
              <div><strong>Duration:</strong> {row.duration}</div>
              <div><strong>Date:</strong> {row.date}</div>
              <div><strong>Charge:</strong> {row.charge}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyConsultation;
