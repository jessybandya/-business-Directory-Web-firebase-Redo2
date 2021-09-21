import React from "react";


const ContactLink = () => {
  return (
    <a href="tel:1999" className="tel-link">
      <img className="url-icon" alt="CallIcon" src="https://i.pinimg.com/originals/22/83/0f/22830f7ff21eb0e9700e0993076dc006.png" />
      <h1 className="tel-header"> Call 1999 </h1>
    </a>
  );
};

export default ContactLink;
