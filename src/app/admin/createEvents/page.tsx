
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const CreateEvent = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    imageUrl: '',
    tags: '',
    organiser: '', 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const tagsArray = formData.tags.split(',').map(tag => tag.trim());
      const response = await axios.post('/api/events', {
        ...formData,
        tags: tagsArray,
      });
      if (response.status === 201) {
        router.push('/user/events');
      }
    } catch (error) {
      console.error('Failed to create event', error);
    }
  };

  return (
    <>
    <div className="flex justify-between pt-6 py-4 lg:px-8 px-3 bg-slate-50">
          <h1 className="text-3xl font-bold text-red-400 lg:ml-0 max-sm:ml-8 sm:ml-8">Create New Event</h1>
          <Link href={"/admin"}>
            <button className="bg-red-300 hover:bg-red-400 rounded-full px-4 py-2">
              <span className="block lg:hidden text-xl font-bold">+</span>
              <span className="hidden lg:block font-semibold">Dashboard</span>
            </button>
          </Link>
        </div>
    <div className="container mx-auto p-6 max-w-4xl">
      <form onSubmit={handleSubmit} className="space-y-6  p-8 rounded-lg shadow-lg bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows={4}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700 mb-2">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-semibold text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="tags" className="block text-sm font-semibold text-gray-700 mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="organiser" className="block text-sm font-semibold text-gray-700 mb-2">
            Organizer Name
          </label>
          <input
            type="text"
            id="organiser"
            name="organiser"
            value={formData.organiser}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
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
    </>
  );
};

export default CreateEvent;
