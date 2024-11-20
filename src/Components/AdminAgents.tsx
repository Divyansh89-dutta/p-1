import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsBell } from "react-icons/bs";
import "./AdminAgents.css";

interface Agent {
  id: number;
  name: string;
  experience: string;
  mobile: string;
  photo: string;  // Added photo URL to Agent interface
}

function AdminAgents() {
  const initialApprovedAgents: Agent[] = [
    { id: 1, name: "Abusaliq Ali", experience: "20+ Years", mobile: "6369056117", photo: "./src/assets/User 1.jpeg" },
    { id: 2, name: "Sarah Connor", experience: "15+ Years", mobile: "9876543210", photo: "./src/assets/User 1.jpeg" },
  ];

  const initialDraftAgents: Agent[] = [
    { id: 3, name: "Jane Doe", experience: "5+ Years", mobile: "5555551234", photo: "./src/assets/User 1.jpeg" },
    { id: 4, name: "Jake Peralta", experience: "8+ Years", mobile: "5555554321", photo: "./src/assets/User 1.jpeg" },
  ];

  const initialBinAgents: Agent[] = [
    { id: 5, name: "Tony Stark", experience: "25+ Years", mobile: "5555556789", photo: "./src/assets/User 1.jpeg" },
  ];

  const initialUnapprovedAgents: Agent[] = [
    { id: 6, name: "Bruce Wayne", experience: "30+ Years", mobile: "5555559876", photo: "./src/assets/User 1.jpeg" },
  ];

  const [approvedAgents, setApprovedAgents] = useState<Agent[]>(initialApprovedAgents);
  const [draftAgents, setDraftAgents] = useState<Agent[]>(initialDraftAgents);
  const [binAgents, setBinAgents] = useState<Agent[]>(initialBinAgents);
  const [unapprovedAgents, setUnapprovedAgents] = useState<Agent[]>(initialUnapprovedAgents);

  const deleteAgent = (id: number) => {
    const agent = approvedAgents.find((agent) => agent.id === id);
    if (agent) {
      setApprovedAgents(approvedAgents.filter((agent) => agent.id !== id));
      setBinAgents([...binAgents, agent]);
    }
  };

  const approveAgentFromDraft = (id: number) => {
    const agent = draftAgents.find((agent) => agent.id === id);
    if (agent) {
      setDraftAgents(draftAgents.filter((agent) => agent.id !== id));
      setApprovedAgents([...approvedAgents, agent]);
    }
  };

  const restoreAgentFromBin = (id: number) => {
    const agent = binAgents.find((agent) => agent.id === id);
    if (agent) {
      setBinAgents(binAgents.filter((agent) => agent.id !== id));
      setApprovedAgents([...approvedAgents, agent]);
    }
  };

  const approveAgentFromUnapproved = (id: number) => {
    const agent = unapprovedAgents.find((agent) => agent.id === id);
    if (agent) {
      setUnapprovedAgents(unapprovedAgents.filter((agent) => agent.id !== id));
      setApprovedAgents([...approvedAgents, agent]);
    }
  };

  return (
    <div className="adminagents">
      <div className="adminpropheader">
        <div className="headertitle">
          <h1>Agents</h1>
          <button className="add-new-btn">+ Add New</button>
        </div>
        <div>
          <BsBell />
          <img src="./src/assets/User 1.jpeg" alt="Profile" />
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Approved</Tab>
          <Tab>Draft</Tab>
          <Tab>Bin</Tab>
          <Tab>Agent Requests</Tab>
        </TabList>

        {/* Approved Tab */}
        <TabPanel>
          <div className="agent-grid">
            {approvedAgents.length > 0 ? (
              approvedAgents.map((agent) => (
                <div key={agent.id} className="agent-card">
                  <img className="agent-photo" src={agent.photo} alt={agent.name} />
                  <div className="agent-info">
                    <p className="agent-name"><strong>Name:</strong> {agent.name}</p>
                    <p className="agent-experience"><strong>Experience:</strong> {agent.experience}</p>
                    <p className="agent-mobile"><strong>Mobile:</strong> {agent.mobile}</p>
                  </div>
                  <div className="action-buttons">
                    <button className="action-btn view-btn">View Agent</button>
                    <button className="action-btn delete-btn" onClick={() => deleteAgent(agent.id)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-agents">No approved agents.</p>
            )}
          </div>
        </TabPanel>

        {/* Draft Tab */}
        <TabPanel>
          <div className="agent-grid">
            {draftAgents.length > 0 ? (
              draftAgents.map((agent) => (
                <div key={agent.id} className="agent-card">
                  <img className="agent-photo" src={agent.photo} alt={agent.name} />
                  <div className="agent-info">
                    <p className="agent-name"><strong>Name:</strong> {agent.name}</p>
                    <p className="agent-experience"><strong>Experience:</strong> {agent.experience}</p>
                    <p className="agent-mobile"><strong>Mobile:</strong> {agent.mobile}</p>
                  </div>
                  <div className="action-buttons">
                    <button className="action-btn view-btn">View Agent</button>
                    <button className="action-btn approve-btn" onClick={() => approveAgentFromDraft(agent.id)}>Approve</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-agents">No draft agents.</p>
            )}
          </div>
        </TabPanel>

        {/* Bin Tab */}
        <TabPanel>
          <div className="agent-grid">
            {binAgents.length > 0 ? (
              binAgents.map((agent) => (
                <div key={agent.id} className="agent-card">
                  <img className="agent-photo" src={agent.photo} alt={agent.name} />
                  <div className="agent-info">
                    <p className="agent-name"><strong>Name:</strong> {agent.name}</p>
                    <p className="agent-experience"><strong>Experience:</strong> {agent.experience}</p>
                    <p className="agent-mobile"><strong>Mobile:</strong> {agent.mobile}</p>
                  </div>
                  <div className="action-buttons">
                    <button className="action-btn view-btn">View Agent</button>
                    <button className="action-btn restore-btn" onClick={() => restoreAgentFromBin(agent.id)}>Restore</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-agents">No agents in the bin.</p>
            )}
          </div>
        </TabPanel>

        {/* Unapproved Tab */}
        <TabPanel>
          <div className="agent-grid">
            {unapprovedAgents.length > 0 ? (
              unapprovedAgents.map((agent) => (
                <div key={agent.id} className="agent-card">
                  <img className="agent-photo" src={agent.photo} alt={agent.name} />
                  <div className="agent-info">
                    <p className="agent-name"><strong>Name:</strong> {agent.name}</p>
                    <p className="agent-experience"><strong>Experience:</strong> {agent.experience}</p>
                    <p className="agent-mobile"><strong>Mobile:</strong> {agent.mobile}</p>
                  </div>
                  <div className="action-buttons">
                    <button className="action-btn view-btn">View Agent</button>
                    <button className="action-btn approve-btn" onClick={() => approveAgentFromUnapproved(agent.id)}>Approve</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-agents">No unapproved agents.</p>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default AdminAgents;
