import React from "react";
import Graph from "./graph";
import {  useNavigate } from "react-router-dom";
import { STRINGS } from "../../../constants/CommonString";

const drivers = [
  { id: 1, name: "Driver 1", latitude: 37.7749, longitude: -122.4194 },
  { id: 2, name: "Driver 2", latitude: 34.0522, longitude: -118.2437 },
  { id: 3, name: "Driver 3", latitude: 40.7128, longitude: -74.006 },
  { id: 4, name: "Driver 4", latitude: 51.5074, longitude: -0.1278 },
  { id: 5, name: "Driver 5", latitude: 48.8566, longitude: 2.3522 },
];


export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col px-6 py-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">{STRINGS?.DRIVER_LOCATION}</h1>
        <button className="bg-blue-400 text-white px-2 py-2 font-bold text-xl rounded-none" onClick={() => navigate("/map")}>Click here map view</button>
      </div>

      <div>
        <Graph />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        {drivers.map((driver) => (
          <div key={driver.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">{driver.name}</h2>
            <p className="text-gray-600">
              Latitude: {driver.latitude}, Longitude: {driver.longitude}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
