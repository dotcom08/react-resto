
import { categories } from "../data"


const Category = () => {

  return (
    <div className="max-w-[1040px] mx-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center mb-10">Top Rated Menu Items</h1>

        {/* categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
            {
                categories.map((item, index)=>(
                    <div key={index} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center relative">
                        <h2 className="font-bold sm:text-xl ">{item.name}</h2>
                        <img 
                        className="w-20"
                        src={item.image} alt={item.name} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category