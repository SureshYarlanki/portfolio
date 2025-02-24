import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "689ce432-4704-4398-80f3-e3d81a7f5467");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("✅ Message Sent Successfully!");
        event.target.reset();
      } else {
        setResult("❌ Error: " + data.message);
      }
    } catch (error) {
      setResult("❌ Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      id="ContactMe"
      className="w-full px-[12%] py-10 font-Ovo"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="text-center mb-2 text-lg text-gray-700">Connect with Me</h4>
      <h2 className="text-5xl text-center font-semibold">Get in Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
        Have questions, feedback, or just want to say hi? Drop me a message below, and I'll get back to you soon!
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg"
      >
        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-black transition"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-black transition"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
            className="w-full p-3 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-black transition"
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className={`py-3 px-8 w-full bg-black text-white rounded-full mt-6 flex items-center justify-center gap-2 transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"
            }`}
          disabled={loading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {loading ? <span className="animate-spin border-2 border-t-transparent border-white rounded-full w-5 h-5"></span> : "Submit Now"}
        </motion.button>

        {result && (
          <motion.p
            className={`mt-4 text-center ${result.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {result}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default Contact;
