// // "use client";
// // import { Avatar, Button, Card, Modal } from "flowbite-react";
// // import { useState, ChangeEvent } from "react";

// // // Define a type for personal information
// // interface PersonalInfo {
// //   label: string;
// //   value: string;
// // }

// // const UserProfile: React.FC = () => {
// //   const [modalOpen, setModalOpen] = useState<boolean>(false);
// //   const [personalInfo, setPersonalInfo] = useState({
// //     name: "Saad Mehmood",
// //     email: "saad.@gmail.com",
// //     phone: "123-456-7890",
// //     address: "D-27 Shaheen Bagh Okhla new delhi 110025",
// //     dob: "15-03-2003",
// //     avatar: "https://avatar.iran.liara.run/public/boy",
// //     password: "**********", // Password placeholder
// //   });

// //   const personalInfoFields: PersonalInfo[] = [
// //     { label: "Date of Birth", value: personalInfo.dob },
// //     { label: "Email", value: personalInfo.email },
// //     { label: "Phone", value: personalInfo.phone },
// //     { label: "Address", value: personalInfo.address },
// //   ];

// //   const handleEditClick = () => {
// //     setModalOpen(true);
// //   };

// //   const handleSave = () => {
// //     setModalOpen(false);
// //   };

// //   const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setPersonalInfo((prev) => ({
// //           ...prev,
// //           avatar: reader.result as string,
// //         }));
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
// //       <Card className="w-full max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg p-4 md:p-6">
// //         <div className="flex flex-col md:flex-row items-center mb-6">
// //           <Avatar
// //             img={personalInfo.avatar}
// //             alt="User Avatar"
// //             size="lg"
// //             className="mb-4 md:mb-0 md:mr-6 w-24 h-24"
// //           />
// //           <div className="text-center md:text-left">
// //             <h2 className="text-xl md:text-2xl font-bold mb-2">
// //               {personalInfo.name}
// //             </h2>
// //           </div>
// //         </div>

// //         <div className="w-full mb-6">
// //           <h3 className="text-lg md:text-xl font-semibold mb-4">
// //             Personal Information
// //           </h3>
// //           <div className="sm:grid sm:grid-cols-2 flex flex-col gap-4">
// //             {personalInfoFields.map((info, index) => (
// //               <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
// //                 <h4 className="text-base font-medium text-gray-800">
// //                   {info.label}
// //                 </h4>
// //                 <p className="text-gray-600 mt-1">{info.value}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="space-y-2 w-full">
// //           <Button
// //             className="w-full bg-blue-500"
// //             color="blue"
// //             onClick={handleEditClick}
// //           >
// //             Edit Profile
// //           </Button>
// //         </div>
// //       </Card>

// //       <Modal
// //         show={modalOpen}
// //         onClose={() => setModalOpen(false)}
// //         className="fixed inset-0 flex justify-center items-center p-4"
// //       >
// //         <Modal.Header className="text-xl flex justify-center mt-4 gap-8 font-semibold text-gray-800">
// //           Edit Profile
// //         </Modal.Header>
// //         <Modal.Body className="w-full justify-center flex items-center">
// //           <div className="space-y-6 shadow-lg p-8">
// //             <div className="flex flex-col items-center">
// //               <Avatar
// //                 img={personalInfo.avatar}
// //                 alt="User Avatar"
// //                 size="lg"
// //                 className="mb-4 w-24 h-24"
// //               />
// //               <input
// //                 id="avatar"
// //                 type="file"
// //                 accept="image/*"
// //                 onChange={handleAvatarChange}
// //                 className="mt-2 block w-full"
// //               />
// //             </div>

// //             <div className="space-y-4">
// //               <div>
// //                 <label
// //                   htmlFor="name"
// //                   className="block text-sm font-medium text-gray-700"
// //                 >
// //                   Name
// //                 </label>
// //                 <input
// //                   id="name"
// //                   type="text"
// //                   value={personalInfo.name}
// //                   onChange={(e) =>
// //                     setPersonalInfo({ ...personalInfo, name: e.target.value })
// //                   }
// //                   className="form-input mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="dob"
// //                   className="block text-sm font-medium text-gray-700"
// //                 >
// //                   Date of Birth
// //                 </label>
// //                 <input
// //                   id="dob"
// //                   type="date"
// //                   value={personalInfo.dob}
// //                   onChange={(e) =>
// //                     setPersonalInfo({ ...personalInfo, dob: e.target.value })
// //                   }
// //                   className="form-input mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="email"
// //                   className="block text-sm font-medium text-gray-700"
// //                 >
// //                   Email
// //                 </label>
// //                 <input
// //                   id="email"
// //                   type="email"
// //                   value={personalInfo.email}
// //                   onChange={(e) =>
// //                     setPersonalInfo({ ...personalInfo, email: e.target.value })
// //                   }
// //                   className="form-input mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="phone"
// //                   className="block text-sm font-medium text-gray-700"
// //                 >
// //                   Phone
// //                 </label>
// //                 <input
// //                   id="phone"
// //                   type="tel"
// //                   value={personalInfo.phone}
// //                   onChange={(e) =>
// //                     setPersonalInfo({ ...personalInfo, phone: e.target.value })
// //                   }
// //                   className="form-input mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="address"
// //                   className="block text-sm font-medium text-gray-700"
// //                 >
// //                   Address
// //                 </label>
// //                 <textarea
// //                   id="address"
// //                   value={personalInfo.address}
// //                   onChange={(e) =>
// //                     setPersonalInfo({
// //                       ...personalInfo,
// //                       address: e.target.value,
// //                     })
// //                   }
// //                   className="form-input mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// //                 />
// //               </div>
// //             </div>
// //             <div className="w-full flex-col flex gap-2">
// //               <Button
// //                 color="blue"
// //                 className="w-full bg-blue-500"
// //                 onClick={handleSave}
// //               >
// //                 Save
// //               </Button>
// //               <Button
// //                 color="gray"
// //                 className="w-full text-white bg-gray-500"
// //                 onClick={() => setModalOpen(false)}
// //               >
// //                 Cancel
// //               </Button>
// //             </div>
// //           </div>
// //         </Modal.Body>
// //         <Modal.Footer></Modal.Footer>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default UserProfile;

// "use client";
// import { Avatar, Button, Card, Modal } from "flowbite-react";
// import { useState, useEffect, ChangeEvent } from "react";
// import axios from "axios";

// // Define a type for user profile data
// interface UserProfileData {
//   fullname: string;
//   email: string;
//   username: string;
//   phone: string;
//   address: string;
//   dob: string;
//   profilePic: string;
// }

// const UserProfile: React.FC = () => {
//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [personalInfo, setPersonalInfo] = useState<UserProfileData>({
//     fullname: "",
//     email: "",
//     username: "",
//     phone: "",
//     address: "",
//     dob: "",
//     profilePic: "",
//   });

//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const userId = "66d0c1f6cdc0921afcbb6523";

//     axios
//       .get(`/api/users/${userId}`)
//       .then((response) => {
//         setPersonalInfo(response.data.user);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//         setError("Failed to load user data.");
//         setLoading(false);
//       });
//   }, []);

//   const handleEditClick = () => {
//     setModalOpen(true);
//   };

//   const handleSave = () => {
//     setModalOpen(false);
//     // You can add API call here to save updated data
//   };

//   const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPersonalInfo((prev) => ({
//           ...prev,
//           profilePic: reader.result as string,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   if (loading) {
//     return (
//         <div className="flex justify-center items-center min-h-[300px]">
//       <div className="w-16 h-16 border-4 border-t-4 border-purple-600 border-solid rounded-full animate-spin"></div>
//     </div>
//     );
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <Card className="w-full max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg p-4 md:p-6">
//         <div className="flex flex-col md:flex-row items-center mb-6">
//           <Avatar
//             img={personalInfo.profilePic || "https://via.placeholder.com/150"}
//             alt="User Avatar"
//             size="lg"
//             className="mb-4 md:mb-0 md:mr-6 w-24 h-24"
//           />
//           <div className="text-center md:text-left">
//             <h2 className="text-xl md:text-2xl font-bold mb-2">
//               {personalInfo.fullname || "Name not available"}
//             </h2>
//           </div>
//         </div>

//         <div className="w-full mb-6">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">
//             Personal Information
//           </h3>
//           <div className="sm:grid sm:grid-cols-2 flex flex-col gap-4">
//             {[
//               { label: "Username", value: personalInfo.username || "N/A" },
//               { label: "Date of Birth", value: personalInfo.dob || "N/A" },
//               { label: "Email", value: personalInfo.email || "N/A" },

//               { label: "Phone", value: personalInfo.phone || "N/A" },
//               { label: "Address", value: personalInfo.address || "N/A" },
//             ].map((info, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
//                 <h4 className="text-base font-medium text-gray-800">
//                   {info.label}
//                 </h4>
//                 <p className="text-gray-600 mt-1">{info.value}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="space-y-2 w-full">
//           <Button
//             className="w-full bg-blue-500"
//             color="blue"
//             onClick={handleEditClick}
//           >
//             Edit Profile
//           </Button>
//         </div>
//       </Card>

//       <Modal
//         show={modalOpen}
//         onClose={() => setModalOpen(false)}
//         className="fixed inset-0 flex justify-center items-center p-4"
//       >
//         <Modal.Header className="text-xl flex justify-center mt-4 gap-8 font-semibold text-gray-800">
//           Edit Profile
//         </Modal.Header>
//         <Modal.Body className="w-full justify-center flex items-center">
//           <div className="space-y-6 shadow-lg p-8">
//             <div className="flex flex-col items-center">
//               <Avatar
//                 img={
//                   personalInfo.profilePic || "https://via.placeholder.com/150"
//                 }
//                 alt="User Avatar"
//                 size="lg"
//                 className="mb-4 w-24 h-24"
//               />
//               <input
//                 id="avatar"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleAvatarChange}
//                 className="mt-2 block w-full"
//               />
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   value={personalInfo.fullname}
//                   onChange={(e) =>
//                     setPersonalInfo({
//                       ...personalInfo,
//                       fullname: e.target.value,
//                     })
//                   }
//                   className="form-input mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="dob"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Date of Birth
//                 </label>
//                 <input
//                   id="dob"
//                   type="date"
//                   value={personalInfo.dob}
//                   onChange={(e) =>
//                     setPersonalInfo({ ...personalInfo, dob: e.target.value })
//                   }
//                   className="form-input mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={personalInfo.email}
//                   onChange={(e) =>
//                     setPersonalInfo({ ...personalInfo, email: e.target.value })
//                   }
//                   className="form-input mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   id="phone"
//                   type="tel"
//                   value={personalInfo.phone}
//                   onChange={(e) =>
//                     setPersonalInfo({ ...personalInfo, phone: e.target.value })
//                   }
//                   className="form-input mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="address"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address
//                 </label>
//                 <textarea
//                   id="address"
//                   value={personalInfo.address}
//                   onChange={(e) =>
//                     setPersonalInfo({
//                       ...personalInfo,
//                       address: e.target.value,
//                     })
//                   }
//                   className="form-input mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//             <div className="w-full flex-col flex gap-2">
//               <Button
//                 color="blue"
//                 className="w-full bg-blue-500"
//                 onClick={handleSave}
//               >
//                 Save
//               </Button>
//               <Button
//                 color="gray"
//                 className="w-full text-white bg-gray-500"
//                 onClick={() => setModalOpen(false)}
//               >
//                 Cancel
//               </Button>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer></Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default UserProfile;
