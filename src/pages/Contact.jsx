import React from 'react';
import { useForm } from 'react-hook-form'; // Import React Hook Form
import { motion } from 'framer-motion'; // Import Framer Motion

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize useForm hook

  const onSubmit = (data) => {
    // Here you can handle form submission (send to your backend, or use email services)
    console.log(data);
    alert('Your message has been submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h1>
        
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-gray-700 mb-2">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Please enter a valid email address'
                }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg w-full mt-4 hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default Contact;
