import React from 'react';

export default function App() {
  return (
  <div className="min-h-screen bg-gray-50">
    <h1 className="bg-blue-500 text-3xl font-bold text-center py-8 text-white">Student Attendance Dashboard</h1>
    <div className="bg-sky-200 shadow-md rounded-lg p-6 mb-6 max-w-lg mx-auto mt-4">
        <p className="text-center font-semibold">Name: Hardik Gupta </p>
        <p className="text-center font-semibold">Register No: 2500032616</p>
        <p className="text-center font-semibold">Department: Computer Science</p>
    </div>

    <div className=" bg-purple-100 max-w-4xl mx-auto  shadow-md rounded-lg p-8 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="bg-blue-100 text-xl font-semibold p-2 rounded">Attendance Records</h2>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Above 75% - Green */}
        <div className="bg-green-200 p-4 rounded shadow">
          <h2 className="font-semibold">Mathematics</h2>
          <p className="text-xl font-bold">85%</p>
        </div>

        {/* 60–75% - Yellow */}
        <div className="bg-yellow-200 p-4 rounded shadow">
          <h2 className="font-semibold">Physics</h2>
          <p className="text-xl font-bold">70%</p>
        </div>

        {/* Below 60% - Red */}
        <div className="bg-red-200 p-4 rounded shadow">
          <h2 className="font-semibold">Chemistry</h2>
          <p className="text-xl font-bold">55%</p>
        </div>

        <div className="bg-green-200 p-4 rounded shadow">
          <h2 className="font-semibold">Data Structures</h2>
          <p className="text-xl font-bold">90%</p>
        </div>

        <div className="bg-yellow-200 p-4 rounded shadow">
          <h2 className="font-semibold">Operating Systems</h2>
          <p className="text-xl font-bold">65%</p>
        </div>

      </div>
      </div>
      </div>
  </div>
  );
}