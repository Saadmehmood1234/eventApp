import Image from "next/image";

export default function EventRegistrationForm() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#FEF6EC] to-[#FBEAD1] p-6">
      {/* Header */}
      <div className="text-center mb-6 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src="/innovation.png"
            width={70}
            height={70}
            alt="Innovation Logo"
          />
          <h3 className="text-lg font-semibold mt-1 lg:mt-2 lg:-ml-6">
            Creative Events
          </h3>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-gray-800 text-center lg:text-left">
          Event Registration Form
        </h1>
      </div>

      {/* Form Card */}
      <div className="bg-white border-2 border-black rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-4xl">
        <div className="p-4 rounded-md mb-6 flex flex-row max-sm:flex-col justify-between border-b-4 border-black">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              About This Event
            </h2>
            <ul className="text-lg text-gray-600 space-y-2">
              <li>
                <strong>Event Name:</strong> Social Media Creative
              </li>
              <li>
                <strong>Date:</strong> August 29, 2030
              </li>
              <li>
                <strong>Time:</strong> 1:00 PM - 3:00 PM
              </li>
              <li>
                <strong>Organizer:</strong> Creative Event
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="Speaker Michelle Erica"
              className="w-30 h-30 rounded-full mb-3"
            />
            <span className="text-xl font-extrabold text-gray-700 text-center">
              Michelle Erica
            </span>
          </div>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-[black] sm:text-sm bg-[#fcf5e8]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Enrollment No
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-[black] sm:text-sm bg-[#fcf5e8]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Course
            </label>
            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-[black] sm:text-sm bg-[#fcf5e8]">
              <option>BCA</option>
              <option>BBA</option>
              <option>B.Com</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Semester
            </label>
            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-[black] sm:text-sm bg-[#fcf5e8]">
              <option>First</option>
              <option>Second</option>
              <option>Third</option>
              <option>Fourth</option>
              <option>Fifth</option>
              <option>Sixth</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-[black] sm:text-sm bg-[#fcf5e8]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-[black] sm:text-sm bg-[#fcf5e8]"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 text-sm text-gray-500 mb-4">
            <p>
              I understand that participation in this event may involve some
              degree of risk. I release WebianPro LLC from any liability for
              injury, loss, or damage to personal property.
            </p>
            <div className="flex items-center mt-4 gap-1">
              <input
                id="agreement"
                type="checkbox"
                className="form-checkbox text-[#F59E0B] h-6 w-6 rounded-md"
              />
              <label htmlFor="agreement" className="ml-2 text-lg text-gray-700">
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2 text-right mt-2">
            <p className="text-sm text-gray-700">Date: August 29, 2030</p>
            <div className="mt-1 border-t border-gray-300"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
