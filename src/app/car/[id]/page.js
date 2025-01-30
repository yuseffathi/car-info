"use client";
import { useSearchParams } from "next/navigation"; // ✅ Use next/navigation for App Router
import { useState, useEffect } from "react"; // Import hooks for state and effect
import "@/styles/global.css";

// Function to simulate a delay (timeout simulation)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function CarDetails() {
    const params = useSearchParams();
    const vin = params.get('vin');

    // States for storing car data, loading status, and error message
    const [carData, setCarData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(vin);
        if (!vin) {
            setError("No VIN provided.");
            setLoading(false);
            return;
        }

        const fetchCarData = async () => {
            try {
                // Timeout handling with AbortController
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 seconds timeout

                const apiUrl = `https://cors-anywhere.herokuapp.com/https://car.itqan.win/fetch-car-data?chassisNo=${vin}`;
                console.log("Fetching car data:", apiUrl);

                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'connection': 'keep-alive',
                        'Content-Type': 'application/json',

                    },

                });

                clearTimeout(timeoutId); // Clear timeout once fetch is completed

                if (!response.ok) {
                    console.log(response);
                    console.log(response.status);
                    throw new Error("Failed to fetch car data.");
                }

                const data = await response.json();
                console.log(data);
                setCarData(data); // Set the fetched data
            } catch (err) {
                if (err.name === "AbortError") {
                    setError("Request timed out after 60 seconds.");
                } else {
                    setError(err.message || "Failed to fetch car data.");
                }
            } finally {
                setLoading(false); // Ensure loading is set to false once data is fetched or error occurs
            }
        };

        fetchCarData(); // Trigger the data fetch
    }, [vin]); // Re-run this effect if the VIN changes

    // Render loading or error message if necessary
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Render car details if data is available
    return (
        <div className="container">
            <h1>تفاصيل السيارة</h1>

            <div className="car-details">
                <h2>معلومات السيارة</h2>
                <p><strong>رقم الشاصي:</strong> {carData.CHASSIS_NO}</p>
                <p><strong>العلامة التجارية:</strong> {carData.TRADEMARK_OF_VEHICLE}</p>
                <p><strong>الطراز:</strong> {carData.model}</p>
                <p><strong>السنة:</strong> {carData.DATE_OF_FIRST_REGISTRATION}</p>
                <p><strong>اللون:</strong> {carData.COLOR_ENG}</p>
                <p><strong>الحالة:</strong> {carData.DISPLACEMENT}</p>
                {/* Add more fields based on the available data */}
            </div>
        </div>
    );
}
