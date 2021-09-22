import { data } from 'autoprefixer';
import React from 'react';
import Chart1 from "./Chart1";
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';


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
        <div className="p-4 h-87 overflow-y-scroll">
            <h1 className="relative capitalize pb-4 text-xl">welcome admin</h1>
            <h3 className="relative capitalize pb-4 pt-0 text-xl">overview</h3>
            <hr />
            {
                // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                //     {
                //         Data.map((data, index) => {
                //             const { icon, title, total } = data;
                //             return (
                //                 <div className="h-20 rounded-md flex shadow-sm bg-white">
                //                     <div className="rounded-full bg-red-200 m-4 w-12 text-red-500 flex items-center place-content-center text-xl font-bold">{icon}</div>
                //                     <div className="p-3 w-auto overflow-hidden">
                //                         <h4 className="capitalize text-md">{title}</h4>
                //                         <p className="text-gray-500">{total}</p>
                //                     </div>
                //                 </div>
                //             );
                //         })
                //     }


                // </div>
            }
            <h4 className="relative capitalize pt-4 text-xl">graphical overview</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 ">
                <div className=" h-36 bg-white overflow-hidden">
                    <div className="flex items-center justify-between p-2">
                        <div className="">
                            <h3 className="capitalize font-semibold text-sm">sells graph</h3>
                            <h1 className="capitalize font-semibold text-lg">$2200</h1>
                        </div>
                        <div className="right-0 bg-gray-900 rounded-full text-white px-2">
                        <p>{Math.random().toFixed(2)}%</p>
                        </div>
                    </div>
                    <div className="">
                    <Chart1/>
                    </div>
                    
                    

                </div>
            </div>


        </div>
    );
};

export default Dashboard;