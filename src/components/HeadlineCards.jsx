import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1040px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='relative rounded-xl overflow-hidden'>
            {/* overlay */}
            <div className='w-full h-full absolute bg-black/50 text-white  '>
                <p className='font-bold text-2xl px-2 pt-4'>Sun{" ' "}s Out, BOGO{" ' "}s Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white mx-2  text-black px-4 py-2 rounded-xl absolute bottom-4'>
                    Order Now
                </button>
            </div>
            <img  className='w-full h-full object-cover max-h-[160px]' src={img1} alt="/" />
        </div>

        <div className='relative rounded-xl overflow-hidden'>
            {/* overlay */}
            <div className='w-full h-full absolute bg-black/50 text-white  '>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white mx-2  text-black px-4 py-2 rounded-xl absolute bottom-4'>
                    Order Now
                </button>
            </div>
            <img  className='w-full h-full object-cover max-h-[160px]' src={img2} alt="/" />
        </div>

        <div className='relative rounded-xl overflow-hidden'>
            {/* overlay */}
            <div className='w-full h-full absolute bg-black/50 text-white  '>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white bg-white mx-2  text-black px-4 py-2 rounded-xl absolute bottom-4'>
                    Order Now
                </button>
            </div>
            <img  className='w-full h-full object-cover max-h-[160px]' src={img3} alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards