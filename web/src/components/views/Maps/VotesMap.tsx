import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, getLanguages } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";

debugData([
    {
        action: 'setVotesData',
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
            }
        ]
    }
])

export default function VotesMap() {
    const [data, setData] = useState<any>(null)
    useNuiEvent<any>('setVotesData', (data) => {
        setData(data)
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
        fetch(`https://YBN/YBN.Lobby:ChooseMap`, options)
    }
    
    if (data === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Lobby:ReloadMap`, options)
    }

    return (
        <>
            <div className="flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] bg-black bg-opacity-50 items-center bg-top bg-cover gap-[3.5%]">
                <div className='flex flex-col items-center'>
                    <h1 className='text-[#adaeae] font-Countach 800:text-[20px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-tight tracking-wider font-normal uppercase drop-shadow'>{languages["location"]}</h1>
                    <h6 className='text-[#7b837c] font-Countach tracking-widest font-light 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[18px] drop-shadow'>{languages["location_desc"]}</h6>
                </div>

                <div className='flex justify-center w-full h-full gap-[1%] scroll-auto touch-auto overflow-auto py-[1%]'>

                    {
                        data && data.map((item: any) => {
                            return (
                                <div className={`h-[90%] 800:w-[250px] 1024:w-[275px] 1280:w-[300px] 1440:w-[350px] 1600:w-[400px] 1920:w-[450px] 2560:w-[550px] bg-cover bg-center bg-no-repeat flex flex-col justify-between border-y-8 border-[#393937] hover:border-light-blue rounded drop-shadow-md cursor-pointer`}
                                    onMouseEnter={() => playSound('hover')}
                                    onClick={() => {voteMap(item.id)}}
                                    style={{backgroundImage: `url(${item.img})`}}
                                    >
                                    <div></div>
                                    <div className='flex flex-col items-center text-center w-full gap-2 p-2'>
                                        <div className='flex flex-row w-full items-center justify-center gap-2'>
                                            <div className='h-full 800:w-[150px] 1024:w-[175px] 1280:w-[200px] 1440:w-[250px] 1600:w-[300px] 1920:w-[350px] 2560:w-[80px] bg-contain bg-center bg-no-repeat bg-card'>
                                            </div>
                                            <h1 className='font-Countach text-white uppercase leading-none 800:text-[15px] 1024:text-[20px] 1280:text-[30px] 1440:text-[40px] 1600:text-[45px] 1920:text-[60px] 2560:text-[45px] drop-shadow'>{item.votes}</h1>
                                        </div>
                                        <div className='bg-[#252323]/90 w-auto px-[2%] pb-[1.5%] drop-shadow'>
                                            <h1 className='font-Countach text-white uppercase leading-none 800:text-[15px] 1024:text-[20px] 1280:text-[30px] 1440:text-[40px] 1600:text-[45px] 1920:text-[60px] 2560:text-[75px] drop-shadow'>{item.title}</h1>
                                        </div>
                                        <p className='text-white 800:text-[6px] 1024:text-[8px] 1280:text-[10px] 1440:text-[12px] 1600:text-[13px] 1920:text-[15px] 2560:text-[17px] font-Countach drop-shadow-md font-thin tracking-wider'>{item.info}</p>
                                    </div>
                                    <div className='w-full bg-black/30 h-[7%] flex items-center justify-center'>
                                        <h1 className='text-white uppercase font-SFProDisplayRegular border rounded px-[1%] font-thin tracking-widest 800:text-[5px] 1024:text-[7px] 1280:text-[7px] 1440:text-[9px] 1600:text-[10px] 1920:text-[11px] 2560:text-[12px]'>{languages["active"]}</h1>
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