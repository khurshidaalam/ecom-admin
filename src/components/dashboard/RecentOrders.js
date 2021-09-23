import React from 'react';

const dress = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8G3dpj2uT90QDPFueZ6w0p8ijE_cGlm5VA&usqp=CAU";
const shirt = "https://static-01.daraz.com.bd/p/f4032e107d55a0373973cc19cb7baa29.jpg";
const watch = "https://images.bewakoof.com/uploads/grid/app/different-types-of-watches-for-men-bewakoof-blog-1-1614076641.jpg";
const books = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOqlFLPOqMm-MnxYJOpHFZJu8ui-GsHRV-6lWQ38QT8W_Hwm5NpZBX6Hh4uwPU_xshKw&usqp=CAU";
const jwellery = "https://images-static.nykaa.com/media/catalog/product/8/7/87401b42724ngldpf1000_a1.jpg?tr=w-500,pr-true";

const Items = [
    {
        name: "dress",
        image: dress,
        price: 350,
        productid: 121213
    },
    {
        name: "shirt",
        image: shirt,
        price: 350,
        productid: 121213
    },
    {
        name: "books",
        image: books,
        price: 350,
        productid: 121213
    },
    {
        name: "watch",
        image: watch,
        price: 350,
        productid: 121213
    },
    {
        name: "jwellery",
        image: jwellery,
        price: 350,
        productid: 121213
    }
]

export const RecentOrders = () => {
    return (
        <div className="bg-white shadow-md">
            <div className="p-6 flex justify-between items-center">
                <h1 className="font-bold">RECENT ORDERS REQUESTED</h1>
                <button className="bg-red-400 hover:bg-red-500 border-red-700 rounded capitalize text-white px-4 py-2">view all</button>
            </div>
            <hr />
            <div className="my-4 p-6">
                <table className="rec-orders w-full capitalize text-left">
                    <thead>
                        <tr>
                            <th>product</th>
                            <th>price</th>
                            <th>product id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Items.map((item) => {
                                const { name, price, productid, image } = item;
                                return (
                                    <tr>
                                        <td className="w-2/5">
                                        <div className="w-full flex items-center">
                                        <div className=" w-11 h-11 mr-8 rounded-full overflow-hidden">
                                        <img src={image} alt="product"/>
                                        </div>
                                        <p>{name}</p>
                                        </div>
                                        
                                        </td>
                                        <td>${price}</td>
                                        <td>{productid}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
