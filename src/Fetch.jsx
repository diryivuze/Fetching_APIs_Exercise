import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Fetch() {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://afriton.onrender.com/rate/conversion-rates")
            .then((response) => {
                setData(response.data || {});
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError("Failed to fetch data. Please try again later.");
            });
    }, []);

    // Helper function to render table rows from nested objects
    const renderTableRows = (category, currencies) => {
        return Object.entries(currencies).map(([key, value], index) => (
            <tr key={`${category}-${index}`} className="bg-white odd:bg-gray-50">
                <td className="px-4 py-2 border">{category}</td>
                <td className="px-4 py-2 border">{key.replace(/_/g, ' ')}</td>
                <td className="px-4 py-2 border">{value.split("=")[0]}</td>
                <td className="px-4 py-2 border">{value.split("=")[1]}</td>
                <td className="px-4 py-2 border cols-3">
                <td className=' p-3'><button className='bg-blue-400 p-1 rounded'>Update</button></td>
                <td className=' p-3'><button className='bg-red-400 p-1 rounded items-end'>Delete</button></td>
                </td>
            </tr>
        ));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Fetching API Data with Axios in React
            </h1>
            {error && (
                <div className="bg-red-100 text-red-800 border border-red-400 p-4 rounded mb-6 text-center">
                    {error}
                </div>
            )}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-500 text-white">
                            <tr>
                                <th className="px-4 py-2 border">Category</th>
                                <th className="px-4 py-2 border">Currency</th>
                                <th className="px-4 py-2 border">Conversion Rate</th>
                                <th className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-gray-800">
                            {data && Object.keys(data).length > 0 ? (
                                Object.entries(data).map(([category, currencies]) => {
                                    return renderTableRows(category, currencies);
                                })
                            ) : (
                                <tr>
                                    <td colSpan="3" className="px-4 py-2 border text-center">
                                        Wait ..........................!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            
        </div>
    );
}
export default Fetch;
