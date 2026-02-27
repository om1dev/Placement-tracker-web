import { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Rahul Patil",
      company: "TCS",
      role: "Backend Developer",
      status: "Applied",
      score: 78
    }
  ]);

  const updateStatus = (id, newStatus) => {
    const updated = applications.map((app) =>
      app.id === id ? { ...app, status: newStatus } : app
    );
    setApplications(updated);
  };

  return (
    <ApplicationContext.Provider
      value={{ applications, updateStatus }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};