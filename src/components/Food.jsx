import { useState } from "react"
import { data } from "../data.js"

const Food = () => {
    const [foods, setFoods] = useState(data)

    const filterType = (category) =>{
        setFoods(
            data.filter((item)=>{
                return item.category === category
            })
        )
    };

    const filterPrice = (price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price === price
            })
        )
    }
  return (
    <div className="max-w-[1040px] mx-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center mb-10">Top Rated Menu Items</h1>
        {/* filter row */}
        <div className="flex flex-col lg:flex-row justify-between">
            {/* filter category */}
            <div className="">
                <p className="font-bold text-gray-700">Filter Types</p>
                <div className="flex flex-wrap justify-between max-w-[390px] w-full">
                    <button onClick={()=>setFoods(data)} className="m-1 px-4 py-1 border-orange-500 rounded-full border text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
                    <button onClick={()=>filterType('burger')} className="m-1 px-4 py-1 border-orange-500 rounded-full border text-orange-600 hover:bg-orange-600 hover:text-white">Burger</button>
                    <button onClick={()=>filterType('pizza')} className="m-1 px-4 py-1 border-orange-500 rounded-full border text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
                    <button onClick={()=>filterType('salad')} className="m-1 px-4 py-1 border-orange-500 rounded-full border text-orange-600 hover:bg-orange-600 hover:text-white">Salads</button>
                    <button onClick={()=>filterType('chicken')} className="m-1 px-4 py-1 border-orange-500 rounded-full border text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
                </div>
            </div>
            {/* filter price */}
            <div>
                <p className="font-bold text-gray-700">Filter Types</p>
                <div className="flex  flex-wrap  justify-between max-w-[390px] w-full">
                    <button onClick={()=>filterPrice('$')} className="m-1 px-4 py-1 border border-orange-500 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                    <button onClick={()=>filterPrice('$$')} className="m-1 px-4 py-1 border border-orange-500 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                    <button onClick={()=>filterPrice('$$$')} className="m-1 px-4 py-1 border border-orange-500 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className="m-1 px-4 py-1 border border-orange-500 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
                </div>
            </div>
        </div>
        {/* display food */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {

                foods.map((item, index)=>(
                    <div key={index} className="border rounded-lg shadow-lg hover:scale-105 duration-300 overflow-hidden">
                        <img src={item.image} alt={item.name} 
                        className="w-full h-[150px] object-cover "
                        />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">
                                {item.name}
                            </p>
                            <p>
                                <span className="bg-orange-500 text-white px-4 py-1 rounded-xl">{item.price}</span>
                            </p>
                        </div>
                    </div>
                ) )
            }
        </div>
    </div>
  )
}

export default Food