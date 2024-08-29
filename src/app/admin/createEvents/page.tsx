"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const CreateEvent = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    members: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "",
    imageUrl: "",
    tags: "",
    organiser: "",
    sponsers: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const tagsArray = formData.tags.split(",").map((tag) => tag.trim());
      const response = await axios.post("/api/events", {
        ...formData,
        tags: tagsArray,
      });
      if (response.status === 201) {
        router.push("/user/events");
      }
    } catch (error) {
      console.error("Failed to create event", error);
    }
  };

  return (
   <div className="w-full bg-gradient-to-b from-[#FEF6EC] to-[#FBEAD1]">
     <div className="container mx-auto p-6 max-w-4xl ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-gray-800 text-center ">
        Create New Event
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6  p-8 rounded-lg shadow-lg border-2 bg-white border-gray-700"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="col-span-1 max-lg:col-span-2">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-200/60"
              required
            />
          </div>
          <div className="col-span-1 max-lg:col-span-2">
            <label
              htmlFor="members"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Members
            </label>
            <input
              type="text"
              id="members"
              name="members"
              value={formData.members}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-200/60"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-200/60"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-200/60"
            rows={4}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label
              htmlFor="startDate"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-200/60"
              required
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="endDate"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-200/60"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="organiser"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Organizer Name
            </label>
            <input
              type="text"
              id="organiser"
              name="organiser"
              value={formData.organiser}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-200/60"
            />
          </div>
          <div>
            <label
              htmlFor="sponsers"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Sponsers
            </label>
            <input
              type="text"
              id="sponsers"
              name="sponsers"
              value={formData.sponsers}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-200/60"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-200/60"
          />
        </div>
        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-200/60"
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-teal-600 border border-transparent rounded-lg font-semibold text-white shadow-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default CreateEvent;
