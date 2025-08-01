// import { useState } from 'react';

// const ContactForm = () => {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [status, setStatus] = useState('');

  // const handleChange = (e: { target: { name: any; value: any; }; }) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault(); // ✅ Prevent reload
  //   setStatus("Sending...");
  //   console.log("Submitting form:", formData);

  //   try {
  //     const res = await fetch("http://localhost:5000/send", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const result = await res.json();
  //     if (result.success) {
  //       setStatus("✅ Message sent!");
  //       setFormData({ name: '', email: '', message: '' });
  //     } else {
  //       setStatus("❌ Failed to send message.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setStatus("⚠️ Something went wrong.");
  //   }
  // };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//       <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
//       <button type="submit">Send</button>
//       {status && <p>{status}</p>}
//     </form>
//   );
// };

// export default ContactForm;
