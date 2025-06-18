import React,{useRef} from 'react';
 import emailjs from 'emailjs-com';

import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

const Contact_Section = () => {



function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_coam4pv', 'template_ik92tzc', e.target, 'dcFKteG2JbEp_avMa')
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message.");
    });

  e.target.reset();
}


    return (
        <div className='dark:bg-[#1c2230]  overflow-x-hidden dark:text-white py-16 px-6 md:px-16' id='contact'>

        <section className="max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center ">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left side - Contact Details */}
        <div className="space-y-6">
          <p className="text-lg text-gray-400">
            Interested in working together or just want to say hi? Feel free to reach out!
          </p>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-yellow-400" />
            <span>joyasaha440@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-yellow-400" />
            <span>+8801930411269</span>
          </div>
          <div className="flex space-x-4 pt-4">
            <a href="https://www.linkedin.com/in/joyasaha20/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl hover:text-yellow-400 transition" />
            </a>
            <a href="https://github.com/joyasaha1004" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl hover:text-yellow-400 transition" />
            </a>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form className="space-y-6" onSubmit={sendEmail}>
          <div>
            <label className="block mb-2 text-gray-400">Name</label>
            <input type="text"
              name="user_name" 
            className="w-full p-3 rounded dark:bg-[#2a2f40] dark:text-white border-2 border-gray-600 focus:outline-none focus:border-yellow-400" required/>
          </div>
          <div>
            <label className="block mb-2 text-gray-400">Email</label>
            <input type="email"
             name="user_email" 
            className="w-full p-3 rounded dark:bg-[#2a2f40] dark:text-white border-2 border-gray-600 focus:outline-none focus:border-yellow-400" required/>
          </div>
          <div>
            <label className="block mb-2 text-gray-400">Message</label>
            <textarea rows="5"
              name="message" 
            className="w-full p-3 rounded dark:bg-[#2a2f40] dark:text-white border-2 border-gray-600 focus:outline-none focus:border-yellow-400" required></textarea>
          </div>
          <button type="submit" className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded transition font-semibold">
            Send Message <FaPaperPlane/>
          </button>
        </form>
      </div>
    </section>
    </div>
    );
};

export default Contact_Section;