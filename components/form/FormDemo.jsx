'use client'


import React from "react";

const FormEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Enter your email" />
      <button>Try free demo</button>
    </form>
  );
};

export default FormEvent;
