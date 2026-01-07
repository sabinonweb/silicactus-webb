"use client";

import Link from "next/link";
import { Icons } from "../lib/data";
import { socialLinks } from "../lib/navItems";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { budget, form, services } from "../lib/contact";
import { useState } from "react";

export default function ContactPage() {
  const [selectedBudget, setSelectedBudget] = useState<number>(-1);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [formInputs, setFormInputs] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    try {
      const emailData = {
        services: selectedServices.map((i) => services[i]),
        budget: selectedBudget >= 0 ? budget[selectedBudget] : "Not specified",
        ...formInputs,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      const result = await res.json();

      if (result.success) {
        alert("Email sent successfully!");
        setSelectedServices([]);
        setSelectedBudget(-1);
        setFormInputs({});
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex text-white flex-1 justify-between p-20 h-screen flex-col lg:flex-row gap-12">
      <div className="lg:flex lg:flex-[0.5] hidden"></div>

      <div className="flex flex-col justify-end gap-y-6 flex-[0.5] lg:fixed lg:py-20 h-auto lg:h-5/6 px-4 lg:px-0">
        {/* Email Card */}
        <div className="flex gap-3 bg-[#1c1c26] p-4 sm:p-5 lg:p-6 rounded-lg justify-between w-full">
          <div>
            <h1 className="text-sm sm:text-base lg:text-base">Email</h1>
            <h1 className="text-lg sm:text-2xl lg:text-3xl break-all">
              business.silicactus@gmail.com
            </h1>
          </div>
          <motion.div whileHover={{ rotate: 45 }} className="flex items-center">
            <Icons.PiSunThin
              size={22}
              className="sm:size-[26px] lg:size-[30px]"
            />
          </motion.div>
        </div>

        {/* Phone Card */}
        <div className="flex gap-3 bg-[#1c1c26] p-4 sm:p-5 lg:p-6 rounded-lg justify-between w-full">
          <div>
            <h1 className="text-sm sm:text-base lg:text-base">Phone Number</h1>
            <h1 className="text-lg sm:text-2xl lg:text-3xl">+977 9810643801</h1>
          </div>
          <motion.div whileHover={{ rotate: 45 }} className="flex items-center">
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

      <div className="flex flex-col gap-y-8 flex-[0.5]">
        <div className="text-9xl">
          <h1>Let's start</h1>
          <h1>the ideation</h1>
        </div>

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

        <button
          onClick={handleSendClick}
          disabled={isSubmitting}
          className="border p-5 rounded-full flex items-center gap-4 hover:bg-[#8a81ee] w-40"
        >
          <h1 className="text-2xl">
            {isSubmitting ? "Sending..." : "Send it!"}
          </h1>
          <Icons.VscChevronRight />
        </button>
      </div>
    </div>
  );
}
