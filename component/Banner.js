import Image from "next/image";

function Banner() {
    return (
        <div className="relative max-w-8xl h-[300px] sm:h-[400px] lg:h-[550px] xl:h-[850px] 2xl:h-[1300px]">
            <Image src="https:links.papareact.com/0fm" fill style={{ objectPosition: 'center' }} alt="BannerImage" />
            <div className="absolute w-full top-1/2 text-center">
                <p className="text-sm sm:text-lg py-2"> Explore. Live. Lets go.</p>
                <button className="text-red-400 bg-white  px-10 py-2 rounded-full shadow-md hover:shadow-lg active:scale-90 transition duration-500 active:shadow-xl">Take me</button>
            </div>
        </div>

    )
}

export default Banner
