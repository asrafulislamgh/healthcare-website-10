import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    fetch("./services1.json")
      .then((res) => res.json())
      .then((result) => setSingleService(result));
  }, []);
  console.log("The result is: ", singleService);
  return (
    <div>
      <h3>About us</h3>
    </div>
  );
};

export default AboutUs;
