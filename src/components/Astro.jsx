import React from 'react'
import AstroThree from './Three/AstroThree'

function Astro() {
    return (
        <>
            <div className="w-full flex items-center justify-center flex-col">
                <AstroThree/>
                <div className="text-3xl self-start ml-32">

                    Lorem ipsum dolor sit

                </div>
                <div className='w-4/5 h-screen flex justify-between items-center'>
                    <div className="flex-col w-[380px]">
                        <div className="text-">
                            <div className="text-2xl">Science in Space</div>
                            <div className="border-l-4 w-[280px] text-left font-light px-2 my-2 border-[#FF3666] text-manatee"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. ntore ex dolorum cum, ipsa animi fugit earum ut.</div>
                        </div>
                        <div className="text-3xl my-40">Offering thns to Space</div>
                        <div className="text-3xl">Offering the MostSpace</div>
                    </div>
                    <div className="flex-col w-[380px]">
                        <div className="text-sm font-light flex-col">
                            <div className="span text-manatee">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam nobis dicta autem adipisci </div>
                            <button className="mt-2 bg-radical-red text-white px-4 py-3 border-none rounded-sm cursor-pointer mr-4">Explore More</button>

                        </div>
                        <div className="text-3xl my-40">Offering thns to Space</div>
                        <div className="text-3xl">Offering the MostSpace</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Astro