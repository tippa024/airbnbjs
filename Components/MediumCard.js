import Image from "next/image"

function MediumCard({img, title}) {
    return (
        <div className="cursor-pointer p-2  hover:scale-105 transform transition duration-300 ease-out hover:bg-grey-">
            <div className="relative h-80 w-80">
                <Image className="rounded-lg" src={img} width='500' height='500' alt={""}/>
            </div>
            <div className="text-2xl mt-3"> 
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default MediumCard
