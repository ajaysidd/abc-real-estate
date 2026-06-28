"use client";

import { useState } from "react";
import { createInquiry } from "@/core/lib/inquiry";


export default function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  try {
    await createInquiry({
      name,
      email,
      phone,
      message,
      status: "NEW",
    });

    alert("Inquiry submitted successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  } catch (error) {
    console.error(error);

    alert("Failed to submit inquiry.");
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label>Name</label>

        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Phone</label>

        <input
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Message</label>

        <textarea
          rows={5}
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Send Inquiry
      </button>
    </form>
  );
}