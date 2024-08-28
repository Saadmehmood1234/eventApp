import { Card } from "flowbite-react";
import { BsCalendarEvent } from "react-icons/bs";

const page = () => {
  return (
    <div className="flex p-4 gap-4">
        <Card className="w-2/5 p-2">
            <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">Events</h1>
            <BsCalendarEvent className="h-12 w-12 bg-purple-200 p-2 rounded-lg"/>
            </div>
            <h1 className="text-4xl font-bold">28</h1>
            <h1 className="text-lg text-gray-500 mt-2">2 Completed</h1>
        </Card>
        <Card className="w-2/5 p-2">
            <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">Events</h1>
            <BsCalendarEvent className="h-12 w-12 bg-purple-200 p-2 rounded-lg"/>
            </div>
            <h1 className="text-4xl font-bold">28</h1>
            <h1 className="text-lg text-gray-500 mt-2">2 Completed</h1>
        </Card>
        <Card className="w-2/5 p-2">
            <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">Events</h1>
            <BsCalendarEvent className="h-12 w-12 bg-purple-200 p-2 rounded-lg"/>
            </div>
            <h1 className="text-4xl font-bold">28</h1>
            <h1 className="text-lg text-gray-500 mt-2">2 Completed</h1>
        </Card>
        <Card className="w-2/5 p-2">
            <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">Events</h1>
            <BsCalendarEvent className="h-12 w-12 bg-purple-200 p-2 rounded-lg"/>
            </div>
            <h1 className="text-4xl font-bold">28</h1>
            <h1 className="text-lg text-gray-500 mt-2">2 Completed</h1>
        </Card>
    </div>
  )
}

export default page