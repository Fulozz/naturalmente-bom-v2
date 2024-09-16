"use client"
import React from 'react';

const Page = () => {
  // Simulate data fetching (replace with your actual data fetching logic)
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      // Simulate API call or data retrieval
      const response = await new Promise((resolve) => setTimeout(() => resolve(['Item 1', 'Item 2', 'Item 3']), 1000));
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test Page</h1>
      {/* Check if data is available before rendering */}
      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {/* Display loading state or message if data is not available */}
      {data.length === 0 && <p>Loading data...</p>}
    </div>
  );
};

export default Page;