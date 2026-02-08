import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toISOString().replace('T', ' ').slice(0, 19));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Current Date and Time (UTC): {currentTime}</p>
    </div>
  );
};

export default Dashboard;