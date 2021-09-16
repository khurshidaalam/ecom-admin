import { data } from 'autoprefixer';
import React from 'react';

const Data = [
    {
        icon: "$",
        title: "earnings",
        total: 2000,
    },
    {
        icon: "O",
        title: "orders",
        total: 200,
    },
    {
        icon: "P",
        title: "products",
        total: 500,
    },
    {
        icon: "S",
        title: "shipped",
        total: 200,
    },
    {
        icon: "A",
        title: "admins",
        total: 2,
    },
    {
        icon: "#",
        title: "moderators",
        total: 5,
    },
    {
        icon: "@",
        title: "customers",
        total: 500,
    },
    {
        icon: "%",
        title: "out of stock",
        total: 10,
    }

]

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="relative capitalize pb-4 text-xl">welcome admin</h1>
            <h3 className="relative capitalize pb-4 pt-0 text-xl">overview</h3>
            <hr />
            <div className="grid grid-cols-4 gap-4 py-4">
                {
                    Data.map((data, index) => {
                        const { icon, title, total } = data;
                        return (
                            <div className="h-20 rounded-md flex shadow-sm bg-white">
                                <div className="rounded-full bg-red-200 m-4 w-12 text-red-500 flex items-center place-content-center text-xl font-bold">{icon}</div>
                                <div className="p-3 w-auto overflow-hidden">
                                    <h4 className="capitalize text-xl">{title}</h4>
                                    <p className="text-gray-500">{total}</p>
                                </div>
                            </div>
                        );
                    })
                }


            </div>

        </div>
    );
};

export default Dashboard;