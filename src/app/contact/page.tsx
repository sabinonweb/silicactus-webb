"use client";
import Link from "next/link";
import { Icons } from "../lib/data";
import { socialLinks } from "../lib/navItems";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { budget, form, services } from "../lib/contact";
import { useState } from "react";
import { sendContactEmail } from "../../../server/node";

export default function Home() {
  const [selectedBudget, setSelectedBudget] = useState(-1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formInputs, setFormInputs] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleBudgetSelect(index) {
    console.log("index, ", index);
    setSelectedBudget(index);
    console.log("selectred ", selectedBudget);
  }

  function toggleService(index) {
    setSelectedServices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  function handleInputChange(placeholder, value) {
    setFormInputs((prev) => ({ ...prev, [placeholder]: value }));
  }

  async function handleSendClick() {
    setIsSubmitting(true);
    try {
      const emailData = {
        services: selectedServices.map((i) => services[i]),
        budget: selectedBudget >= 0 ? budget[selectedBudget] : "Not specified",
        ...formInputs,
      };

      const result = await sendContactEmail(emailData);

      if (result.success) {
        alert("Email sent successfully!");
        // Reset form
        setSelectedServices([]);
        setSelectedBudget(-1);
        setFormInputs({});
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex text-white flex-1 justify-between p-20 h-screen flex-col lg:flex-row gap-12">
      <div className="lg:flex lg:flex-[0.5] hidden"></div>
      <div className="flex flex-col justify-end h-5/6 gap-y-8 flex-[0.5] lg:fixed lg:py-20">
        <div className="flex gap-4 bg-[#1c1c26] p-6 rounded-lg justify-between w-full">
          <div>
            <h1>Email</h1>
            <h1 className="text-white text-3xl">
              business.silicactus@gmail.com
            </h1>
          </div>
          <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 45 }}>
            <Icons.PiSunThin color="white" size={30} />
          </motion.div>
        </div>

        <div className="flex gap-4 bg-[#1c1c26] p-6 rounded-lg justify-between w-full">
          <div>
            <h1>Phone Number</h1>
            <h1 className="text-white text-3xl">+977 9810643801</h1>
          </div>
          <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 45 }}>
            <Icons.PiSunThin color="white" size={30} />
          </motion.div>
        </div>

        <div className="bg-[#1c1c26] flex flex-col p-8 rounded-lg gap-y-8 w-full">
          <h1 className="text-4xl">Connect</h1>
          <div className="flex">
            {socialLinks.map((data, index) => (
              <Link
                key={index}
                className="text-white p-2 text-lg"
                href={data.href}
              >
                {data.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 flex-[0.5]">
        <div className="text-9xl">
          <h1>Let's start </h1>
          <h1>the ideation</h1>
        </div>

        <div className="flex flex-col gap-y-16 p-8">
          <h1>What are you Interested in?</h1>
          <div className="flex flex-wrap gap-4">
            <AnimatePresence>
              {services.map((data, index) => (
                <motion.button
                  key={index}
                  className="border flex items-center p-4 rounded-full gap-4"
                  onClick={() => toggleService(index)}
                  whileHover={{
                    backgroundColor: "#8a81ee",

                    transition: { duration: 1, type: "spring" },
                  }}
                  exit={{
                    backgroundColor: "#1c1c26",
                    transition: { duration: 1, ease: "easeIn" },
                  }}
                  whileTap={{ backgroundColor: "#8a81ee" }}
                  style={{
                    backgroundColor: selectedServices.includes(index)
                      ? "#8a81ee"
                      : "transparent",
                  }}
                >
                  <motion.h1 key={index} className="text-2xl">
                    {data}
                  </motion.h1>

                  <Icons.PiSunThin color="white" size={30} />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-y-8">
            {form.map((data, index) => (
              <form key={index}>
                <input
                  className="border-b focus:outline-none border-b-gray-500 bg-black w-full p-4 text-3xl"
                  placeholder={data}
                  value={formInputs[data] || ""}
                  onChange={(e) => handleInputChange(data, e.target.value)}
                />
              </form>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-8">
          <h1 className="text-2xl">What's the budget of your project?</h1>
          <div className="flex flex-wrap gap-4">
            {budget.map((data, index) => (
              <motion.button
                key={index}
                className={`border p-4 rounded-full text-2xl ${
                  selectedBudget === index
                    ? "bg-[#8a81ee] transition ease-in-out duration-1000 animate-pulse"
                    : ""
                }`}
                onClick={() => setSelectedBudget(index)}
              >
                {data}
              </motion.button>
            ))}
          </div>
        </div>
        <div className="py-8">
          <button
            onClick={handleSendClick}
            disabled={isSubmitting}
            className="flex items-center p-5 transition transform duration-700 rounded-full gap-x-4 border hover:bg-[#8a81ee] disabled:opacity-50"
          >
            <h1 className="text-2xl">
              {isSubmitting ? "Sending..." : "Send it!"}
            </h1>
            <Icons.VscChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
