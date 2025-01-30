"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Use next/navigation for App Router
import "@/styles/global.css";
import { v4 as uuidv4 } from 'uuid';


export default function CarCheck() {
    const [vin, setVin] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // ✅ Added loading state
    const router = useRouter();

    const handleSearch = async () => {
        const trimmedVin = vin.trim(); // ✅ Trim spaces

        if (!trimmedVin) {
            setError("يرجى إدخال رقم الشاصي");
            return;
        }
        console.log(trimmedVin);
        setError("");

        const newUuid = uuidv4();
        // Redirect to the car details page with the unique ID
        router.push(`/car/${newUuid}?vin=${trimmedVin}`,);


    };

    return (
        <div className="container">
            <h1>
                <i className="fas fa-car"></i> تحقق من بيانات السيارة
            </h1>
            <p>قبل شراء سيارة، تحقق من حالتها باستخدام رقم الشاصي.</p>

            <div className="search-box">
                <input
                    type="text"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                    placeholder="أدخل رقم الشاصي هنا"
                />
                <button
                    onClick={handleSearch}
                    className="btn"
                    disabled={loading} // ✅ Disable button when searching
                >
                    {loading ? "جاري البحث..." : "بحث"}
                </button>
            </div>

            {error && <p className="error">{error}</p>}
        </div>
    );
}
