import { data } from 'autoprefixer';
import React from 'react';
import ChartData from "./ChartData";
import Data from "./Data";
import { MonthlyRevnw } from './MonthlyRevnw';
import { RecentOrders } from './RecentOrders';
import "./dashboard.css";


// const ChartData = Data.map((chartdata, index) => {
//     const {Charts} = chartdata;
//     return [Charts];
// });


const Dashboard = () => {
    return (
        <div className="p-4 h-87 overflow-y-scroll">
            <h1 className="relative capitalize pb-2 font-semibold text-2xl">welcome admin</h1>
            <h3 className="relative capitalize  pt-0 text-xl">overview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 my-4 ">
                {
                     ChartData.map((cdata, index) => {
                        const { about, amount, chart } = cdata;
                        return (
                            <div key="index" className=" h-36 bg-white overflow-hidden shadow-md" >
                                <div className="flex items-center justify-between p-2">
                                    <div className="">
                                        <h3 className="capitalize font-semibold text-sm">{about}</h3>
                                        <h1 className="capitalize font-semibold text-lg">{amount}</h1>
                                    </div>
                                    <div className="right-0 bg-gray-900 rounded-full text-white px-2">
                                        <p>{Math.random().toFixed(2)}%</p>
                                    </div>
                                </div>
                                <div className="">
                                    {chart}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 py-4">
                {
                    Data.map((data, index) => {
                        const { icon, title, total } = data;
                        return (
                            <div className="h-20 rounded-md flex shadow-md bg-white">
                                <div className="rounded-full bg-red-200 m-4 w-12 text-red-500 flex items-center place-content-center text-xl font-bold">{icon}</div>
                                <div className="p-3 w-auto overflow-hidden">
                                    <h4 className="capitalize text-md">{title}</h4>
                                    <p className="text-gray-500">{total}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-10 my-4">
            <RecentOrders/>
            <MonthlyRevnw/>
            </div>


        </div >
    );
};

export default Dashboard;