import Image from "next/image"

function SmallCard({ img, distance, location }) 
    {
    return (
        <div className="flex items-center m-1 p-1 space-x-4 cursor-pointer hover:bg-gray-200 rounded-xl hover:scale-105 transition duration-200 ease-out">
            {/* Left */}
            <div className="relative h-16 w-16">
                <Image
                    src= {img}
                    fill
                    className="rounded-lg"
                    alt=''
                
                />
            </div>

            {/* Right */}
            <div className="">
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>

            </div>

        </div>
    )
}

export default SmallCard
