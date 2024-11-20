import React from "react";
import { BsBell } from "react-icons/bs";
import "./AdminDashboard.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {
  const data = {
    labels: ["Leads", "Active", "Junks", "Potential"],
    datasets: [
      {
        label: "Counts",
        data: [50000, 30000, 40000, 20000], // Example data
        backgroundColor: "#2D6EFE", // Blue color
        borderRadius: 100, // Rounded corners
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false, // Hide the title
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 60000,
        ticks: {
          stepSize: 10000, // Steps of 10k
          callback: (value: any) => `${value / 1000}K`, // Display values in K
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
    },
  };

  return (
    <div className="admindashboard">
      <div className="adminheader">
        <h1>
          Hello <span>Mohamed!</span>
        </h1>
        <div>
          <BsBell />
          <img src="./src/assets/realtor-img.jpg" alt="Profile" />
        </div>
      </div>
      <div className="basicstats">
        <div className="basicstat1">
          <h2>Total Listings</h2>
          <h6>1500</h6>
        </div>
        <div className="basicstat2">
          <h2>Total Agents</h2>
          <h6>2500</h6>
        </div>
        <div className="basicstat3">
          <h2>Consultations</h2>
          <h6>$5000</h6>
        </div>
        <div className="basicstat4">
          <h2>User Registrations</h2>
          <h6>1500</h6>
        </div>
        <div className="basicstat5">
          <h2>New Listings</h2>
          <h6>2500</h6>
        </div>
        <div className="basicstat6">
          <h2>Pending Listings</h2>
          <h6>5000</h6>
        </div>
        <div className="basicstat7">
          <h2>Pending Agents</h2>
          <h6>1500</h6>
        </div>
        <div className="basicstat8">
          <h2>Property Enquiries</h2>
          <h6>2500</h6>
        </div>
      </div>
      <div className="adminwidget">
        <div className="chart-container" style={{ marginTop: "2rem" }}>
          <Bar data={data} options={options} height={300} width={400} />
        </div>
        <div className="mostviewedprops">
          <h5>Most Viewed Properties</h5>
          <div className="viewedprop">
            <div className="propdetails">
              <a>Capital Residence Shanagar Pallapatti</a>
              <p>364578 Views</p>
            </div>
            <div className="propcta">
              <button>View</button>
            </div>
          </div>
          <div className="viewedprop">
            <div className="propdetails">
              <a>Capital Residence Shanagar Pallapatti</a>
              <p>364578 Views</p>
            </div>
            <div className="propcta">
              <button>View</button>
            </div>
          </div>
          <div className="viewedprop">
            <div className="propdetails">
              <a>Capital Residence Shanagar Pallapatti</a>
              <p>364578 Views</p>
            </div>
            <div className="propcta">
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
