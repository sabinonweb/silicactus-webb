"use client";

import Link from "next/link";
import { Icons } from "../lib/data";
import { socialLinks } from "../lib/navItems";
import { budget, form, services } from "../lib/contact";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactPage() {
  const [selectedBudget, setSelectedBudget] = useState<number>(-1);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [formInputs, setFormInputs] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  function toggleService(index: number) {
    setSelectedServices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  function handleInputChange(key: string, value: string) {
    setFormInputs((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSendClick() {
    setIsSubmitting(true);
    setNotification(null);

    try {
      // Ensure the "About the project" field is captured correctly
      const aboutProjectKey =
        form.find((f) => f.toLowerCase().includes("project")) ||
        "About the project";

      const aboutProject =
        formInputs[aboutProjectKey]?.trim() || "No details provided";

      const emailData = {
        ...formInputs,
        services: selectedServices.map((i) => services[i]),
        budget: selectedBudget >= 0 ? budget[selectedBudget] : "Not specified",
        [aboutProjectKey]: aboutProject, // dynamically use the correct key
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      const result = await res.json();

      if (result.success) {
        setNotification({
          type: "success",
          message: "Your message was sent successfully.",
        });
        setSelectedServices([]);
        setSelectedBudget(-1);
        setFormInputs({});
      } else {
        setNotification({
          type: "error",
          message: "Failed to send the message. Please try again.",
        });
      }
    } catch (err) {
      setNotification({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 4000);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row text-white flex-1 justify-between align-bottom p-8 lg:p-20 gap-8 min-h-screen">
      {/* Left Sidebar */}
      <div className="lg:flex lg:flex-[0.5] hidden"></div>

      {/* Contact Info */}
      <div className="flex flex-col gap-6 flex-[0.5] lg:fixed lg:py-20 h-auto lg:h-5/6 px-4 lg:px-0">
        {/* Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`w-full rounded-md p-3 text-sm sm:text-base text-white shadow-md ${
                notification.type === "success" ? "bg-black" : "bg-black"
              }`}
            >
              {notification.message}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Email Card */}
        <div className="flex gap-3 bg-[#1c1c26] p-4 sm:p-5 lg:p-6 rounded-lg justify-start w-full">
          <div>
            <h1 className="text-sm sm:text-base lg:text-base">Email</h1>
            <h1 className="text-lg sm:text-2xl lg:text-3xl break-all">
              business.silicactus@gmail.com
            </h1>
          </div>
          <motion.div
            whileHover={{ rotate: 45 }}
            className="flex items-center ml-auto"
          >
            <Icons.PiSunThin
              size={22}
              className="sm:size-[26px] lg:size-[30px]"
            />
          </motion.div>
        </div>

        {/* Phone Card */}
        <div className="flex gap-3 bg-[#1c1c26] p-4 sm:p-5 lg:p-6 rounded-lg justify-start w-full">
          <div>
            <h1 className="text-sm sm:text-base lg:text-base">Phone Number</h1>
            <h1 className="text-lg sm:text-2xl lg:text-3xl">+977 9810643801</h1>
          </div>
          <motion.div
            whileHover={{ rotate: 45 }}
            className="flex items-center ml-auto"
          >
            <Icons.PiSunThin
              size={22}
              className="sm:size-[26px] lg:size-[30px]"
            />
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="bg-[#1c1c26] flex flex-col p-5 sm:p-6 lg:p-8 rounded-lg gap-y-6 sm:gap-y-7 lg:gap-y-8 w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">Connect</h1>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {socialLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="p-2 sm:p-3 text-sm sm:text-base lg:text-lg bg-[#2a2a35] rounded-md hover:bg-[#8a81ee] transition"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="flex flex-col gap-y-8 flex-[0.5]">
        <div className="text-5xl sm:text-6xl lg:text-9xl font-bold leading-tight">
          <h1>Let's start</h1>
          <h1>the ideation</h1>
        </div>

        {/* Services */}
        <div className="flex flex-wrap gap-4">
          <AnimatePresence>
            {services.map((item, i) => (
              <motion.button
                key={i}
                onClick={() => toggleService(i)}
                className="border p-4 rounded-full flex items-center gap-4"
                style={{
                  backgroundColor: selectedServices.includes(i)
                    ? "#8a81ee"
                    : "transparent",
                }}
              >
                <h1 className="text-2xl">{item}</h1>
                <Icons.PiSunThin size={30} />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-y-8">
          {form.map((placeholder, i) => (
            <input
              key={i}
              className="border-b bg-black p-4 text-3xl focus:outline-none"
              placeholder={placeholder}
              value={formInputs[placeholder] || ""}
              onChange={(e) => handleInputChange(placeholder, e.target.value)}
            />
          ))}
        </div>

        {/* Budget */}
        <div className="flex flex-wrap gap-4">
          {budget.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedBudget(i)}
              className={`border p-4 rounded-full text-2xl ${
                selectedBudget === i ? "bg-[#8a81ee]" : ""
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Send Button */}
        <button
          onClick={handleSendClick}
          disabled={isSubmitting}
          className="border p-3 sm:p-4 rounded-full flex items-center gap-3 hover:bg-[#8a81ee] w-fit transition-all"
        >
          <h1 className="text-xl sm:text-2xl">
            {isSubmitting ? "Sending..." : "Send it!"}
          </h1>
          <Icons.VscChevronRight />
        </button>
      </div>
    </div>
  );
}
