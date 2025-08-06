import { useState } from "react";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-2">Join as a volunteer</h2>
      <p className="mb-8 text-gray-500 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius
        enim in eros elementum tristique.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        {/* Name fields side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border-b border-black focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border-b border-black focus:outline-none py-2"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email Id</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-b border-black focus:outline-none py-2"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your Message"
            rows="5"
            className="w-full border rounded-md p-3 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
