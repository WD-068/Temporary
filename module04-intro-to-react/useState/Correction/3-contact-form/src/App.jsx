import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.tel || !formData.msg) {
      alert("All fields are required");
      return;
    }

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      tel: "",
      msg: "",
    });
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: " .5rem",
        }}
        onSubmit={handleSubmit}
      >
        {/* Input field for name */}
        <label>
          Name:{" "}
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        {/* Input field for email */}
        <label>
          Email:{" "}
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        {/* Input field for telephone */}
        <label>
          Telephone:{" "}
          <input
            name="tel"
            type="text"
            value={formData.tel}
            onChange={handleChange}
          />
        </label>

        {/* Textarea for message */}
        <label>
          Message:{" "}
          <textarea name="msg" value={formData.msg} onChange={handleChange} />
        </label>

        {/* Submit button */}
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default App;
