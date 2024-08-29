"use client";
import { Card } from "flowbite-react";
import Link from "next/link";
import { BsCalendarEvent } from "react-icons/bs";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const data = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Registrations',
      data: [50, 75, 150, 200],
      fill: false,
      backgroundColor: 'rgb(99, 102, 241)',
      borderColor: 'rgba(99, 102, 241, 0.2)',
    },
  ],
};

const Page = () => {
  return (
    <>
      <div className="flex justify-between pt-6 py-4 lg:px-8 px-3 bg-slate-50">
          <h1 className="text-3xl font-bold text-purple-600 lg:ml-0 max-sm:ml-8 sm:ml-8">Admin Dashboard</h1>
          <Link href={"admin/createEvents"}>
            <button className="bg-purple-300 hover:bg-purple-400 rounded-full px-4 py-2">
              <span className="block lg:hidden text-xl font-bold">+</span>
              <span className="hidden lg:block font-semibold">+ Add Event</span>
            </button>
          </Link>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-2 px-4">
        <div className="p-2">
          <Card className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl lg:text-3xl font-bold">Events</h1>
              <div className="bg-purple-200 p-2 rounded-lg">
                <BsCalendarEvent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">28</h1>
              <h1 className="text-sm lg:text-lg text-gray-500 mt-2">2 Completed</h1>
            </div>
          </Card>
        </div>

        <div className="p-2">
          <Card className="flex flex-col max-sm:justify-between justify-evenly h-full">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl lg:text-3xl font-bold">Events</h1>
              <div className="bg-purple-200 p-2 rounded-lg">
                <BsCalendarEvent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">28</h1>
              <h1 className="text-sm lg:text-lg text-gray-500 mt-2">2 Completed</h1>
            </div>
          </Card>
        </div>

        <div className="p-2">
          <Card className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl lg:text-3xl font-bold">Users</h1>
              <div className="bg-purple-200 p-2 rounded-lg">
                <BsCalendarEvent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">28</h1>
              <h1 className="text-sm lg:text-lg text-gray-500 mt-2">2 Completed</h1>
            </div>
          </Card>
        </div>

        <div className="p-2">
          <Card className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl lg:text-3xl font-bold">Events</h1>
              <div className="bg-purple-200 p-2 rounded-lg">
                <BsCalendarEvent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">28</h1>
              <h1 className="text-sm lg:text-lg text-gray-500 mt-2">2 Completed</h1>
            </div>
          </Card>
        </div>
      </div>
      <div className="w-1/2 px-6">
        <Card>
          <h2 className="text-xl font-bold mb-4">Registration Trends</h2>
          <Line data={data} />
        </Card>
      </div>
    </>
  );
};

export default Page;