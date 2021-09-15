import React from 'react';

const Sidebar = () => {
    return (
        <div className="relative bg-white border-r border-gray-300 h-screen w-1/5 p-4 hidden sm:inline-block md:inline-block lg:inline-block xl:inline-block 2xl:inline-block">
        <h1 className="text-2xl font-bold capitalize font-sans p-3"><span className="text-red-600">my</span> shop</h1>
        <hr />
            <ul className="capitalize ">
                <li className="border-b pb-5 pt-5">Dashboard</li>
                <li className="border-b pb-5 pt-5">manage orders</li>
                <li className="border-b pb-5 pt-5">manage products</li>
                <li className="border-b pb-5 pt-5">manage customers</li>
                <li className="border-b pb-5 pt-5">logout</li>
            </ul>
        </div>
    );
};

export default Sidebar;