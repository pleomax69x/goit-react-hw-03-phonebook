import React, { useState } from "react";
const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => setName(e.currentTarget.value);
  const handleNumberChange = (e) => setNumber(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      alert("Some field is empty");
      return;
    }

    onSubmit(name, number);

    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Enter Number"
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
export default ContactForm;
