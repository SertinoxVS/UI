import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, getLanguages } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";

debugData([
    {
        action: 'setMapsData',
        data: [
            {
                id: 1,
                title: 'Desert',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104148289726722168/image.png",
                votes: 0,
            },
            {
                id: 2,
                title: 'Forest',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104149123223007322/image.png",
                votes: 0,
            },
            {
                id: 1,
                title: 'Desert',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104148289726722168/image.png",
                votes: 0,
            },
            {
                id: 2,
                title: 'Forest',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104149123223007322/image.png",
                votes: 0,
            },
            {
                id: 1,
                title: 'Desert',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104148289726722168/image.png",
                votes: 0,
            },
            {
                id: 2,
                title: 'Forest',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104149123223007322/image.png",
                votes: 0,
            },
            {
                id: 1,
                title: 'Desert',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104148289726722168/image.png",
                votes: 0,
            },
            {
                id: 2,
                title: 'Forest',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104149123223007322/image.png",
                votes: 0,
            },
            {
                id: 1,
                title: 'Desert',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104148289726722168/image.png",
                votes: 0,
            },
            {
                id: 2,
                title: 'Forest',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104149123223007322/image.png",
                votes: 0,
            },
            {
                id: 1,
                title: 'Desert',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104148289726722168/image.png",
                votes: 0,
            },
            {
                id: 2,
                title: 'Forest',
                img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104149123223007322/image.png",
                votes: 0,
            },
        ]
    }
])

export default function Maps() {
    const [mapData, setMapsData] = useState<any>(null)
    useNuiEvent<any>('setMapsData', (data) => {
        setMapsData(data)
    })

    const languages = getLanguages()

    const voteMap = (id: number) => {
        const options = {
            method: 'post',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: id,
            }),
        };
        fetch(`https://YBN/YBN.Maps:ChooseMap`, options)
    }
    
    if (mapData === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Maps:ReloadMaps`, options)
    }

    return (
        <>
            <div className="flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] bg-black bg-opacity-50 bg-top bg-cover gap-[3.5%]">
                <div className='flex flex-row items-left'>
                    <div className='bg-logo_redzone bg-no-repeat bg-contain bg-center 800:w-[50px] 1024:w-[70px] 1280:w-[85px] 1440:w-[100px] 1600:w-[125px] 1920:w-[150px] 2560:w-[175px] scale-150' />
                    <div className='flex flex-col items-left'>
                        <h6 className='text-[#cac5a9] leading-none font-Countach tracking-widest font-light 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[18px] drop-shadow'>{languages["location_desc"]}</h6>
                        <h1 className='text-[#f8f2f0] font-StratumBold 800:text-[20px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-none tracking-wider font-normal uppercase drop-shadow'>{languages["location"]}</h1>
                    </div>
                </div>

                <div className='justify-center 800:gap-1 1024:gap-2 1440:gap-5 w-full max-h-full h-full gap-[1%] scroll-auto touch-auto overflow-auto grid grid-cols-5 grid-flow-row auto-rows-max py-[1%]'>
                    {
                        mapData !== null && mapData.map((map: any) => {
                            return (
                                <div className={`pb-[5%] bg-cover bg-center bg-no-repeat 800:h-[115px] 1024:h-[150px] 1280:h-[175px] 1440:h-[215px] 1600:h-[250px] 1920:h-[300px] 2560:h-[325px] flex flex-col justify-between border border-[#393937] hover:border-light-blue rounded cursor-pointer`}
                                    onMouseEnter={() => playSound('hover')}
                                    onClick={() => {voteMap(map.id)}}
                                    style={{backgroundImage: `url(${map.img})`}}
                                    >
                                    <div></div>
                                    <div className='w-full bg-gradient-to-r from-transparent to-dark-blue/80 flex flex-row items-center justify-between p-[1%] drop-shadow'>
                                        <h1 className='text-light-yellow leading-none uppercase font-StratumBold 800:text-[16px] 1024:text-[19px] 1280:text-[22px] 1440:text-[25px] 1600:text-[28px] 1920:text-[32px] 2560:text-[35px] drop-shadow'>{map.votes}</h1>
                                        <h1 className='text-white leading-none uppercase font-StratumMedium 800:text-[16px] 1024:text-[19px] 1280:text-[22px] 1440:text-[25px] 1600:text-[28px] 1920:text-[32px] 2560:text-[35px] drop-shadow'>{map.title}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='hidden'>
                </div>
            </div>
        </>
    )
}