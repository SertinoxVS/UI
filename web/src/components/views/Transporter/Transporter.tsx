import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, getLanguages } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";

debugData([
    {
        action: 'setTransporterData',
        data: [
            {
                id: 1,
                title: 'Los Santos',
                info: 'Los Santos is the largest city in San Andreas and the state of San Andreas.',
                image: 'back_transporter_1'
            },
            {
                id: 2,
                title: 'Blaine County',
                info: 'Blaine County is a county in the state of San Andreas. It is located in the southwestern part of the state, bordering the state of Los Santos to the north and east. It is the second most populous county in the state, with a population of 1,000,000.',
                image: 'back_transporter_2'
            },
            {
                id: 3,
                title: 'Paleto Bay',
                info: 'Paleto Bay is a small town in the state of San Andreas. It is located in the southwestern part of the state, bordering the state of Los Santos to the north and east. It is the second most populous county in the state, with a population of 1,000,000.',
                image: 'back_transporter_3'
            },
            {
                id: 3,
                title: 'Paleto Bay',
                info: 'Paleto Bay is a small town in the state of San Andreas. It is located in the southwestern part of the state, bordering the state of Los Santos to the north and east. It is the second most populous county in the state, with a population of 1,000,000.',
                image: 'back_transporter_3'
            },
            {
                id: 3,
                title: 'Paleto Bay',
                info: 'Paleto Bay is a small town in the state of San Andreas. It is located in the southwestern part of the state, bordering the state of Los Santos to the north and east. It is the second most populous county in the state, with a population of 1,000,000.',
                image: 'back_transporter_3'
            },
        ]
    }
])

export default function Transporter() {

    // add data to state
    const [data, setData] = useState<any>(null)
    useNuiEvent<any>('setTransporterData', (data) => {
        setData(data)
    })

    const languages = getLanguages()

    const goToPos = (id: number) => {
        const options = {
            method: 'post',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: id,
            }),
        };
        fetch(`https://YBN/YBN.Transporter:Teleport`, options)
    }
    
    if (data === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Transporter:Reload`, options)
    }

    return (
        <>
            <div className="flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] bg-black bg-opacity-50 items-center bg-top bg-cover gap-[3.5%]">
                <div className='flex flex-col items-center'>
                    <h1 className='text-[#adaeae] font-Countach 800:text-[20px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-tight tracking-wider font-normal uppercase drop-shadow'>{languages["location"]}</h1>
                    <h6 className='text-[#7b837c] font-Countach tracking-widest font-light 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[18px] drop-shadow'>{languages["location_desc"]}</h6>
                </div>

                <div className='flex justify-center w-full h-full gap-[1%] scroll-auto touch-auto overflow-auto py-[5%]'>

                    {
                        data && data.map((item: any, ) => {
                            return (
                                <div className={`h-[90%] 800:w-[150px] 1024:w-[175px] 1280:w-[200px] 1440:w-[250px] 1600:w-[300px] 1920:w-[350px] 2560:w-[450px] bg-${item.image} bg-cover bg-center bg-no-repeat flex flex-col justify-between border-y-8 border-[#393937] hover:border-[#79c370] rounded drop-shadow-md cursor-pointer`}
                                    onMouseEnter={() => playSound('hover')}
                                    onClick={() => {goToPos(item.id)}}
                                    >
                                    <div></div>
                                    <div className='flex flex-col items-center text-center w-full gap-2 p-2'>
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
                    <div className='bg-back_transporter_1'></div>
                    <div className='bg-back_transporter_2'></div>
                    <div className='bg-back_transporter_3'></div>
                    <div className='bg-back_transporter_4'></div>
                    <div className='bg-back_transporter_5'></div>
                </div>
            </div>
        </>
    )
}