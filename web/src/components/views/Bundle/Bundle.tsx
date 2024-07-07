import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {debugData} from "../../../utils/debugData";
import { playSound, getLanguages } from "../../../utils/misc";
import {useNuiEvent} from "../../../hooks/useNuiEvent";

debugData([
    {
        action: "setBundle",
        data: {
            name: "Bundle #1",
            description: "This is a bundle description",
            coins: 1000,
            items: [
                {
                    name: "Item #1",
                    item: "item1",
                    type: "weapon",
                },
            ],
        }
    },
]);

export default function Bundle() {
    const [bundle, setBundle] = useState<any>(null);
    useNuiEvent<any>('setBundle', (data) => {
        setBundle(data)
        setCurrentItem(data[0])
    })

    let history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    const languages = getLanguages()

    const[currentItem, setCurrentItem] = useState<any>(null);

    if (bundle === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Store:GetBundle`, options)
    }

    return (
        <div className='flex flex-col h-screen max-h-screen w-screen max-w-screen select-none bg-black bg-opacity-50 bg-center bg-no-repeat bg-cover p-[4%]'>
            <div className='800:h-[20px] 800:w-[15px] 1024:h-[25px] 1024:w-[20px] 1280:h-[35px] 1280:w-[30px] 1600:h-[45px] 1600:w-[40px] 1920:h-[55px] 1920:w-[50px] 2560:h-[65px] 2560:w-[60px] bg-[#141618]/80 border border-dark-grey rounded p-2 cursor-pointer'
            onClick={() => {
                goBack()
            }}
            >
                <div className='bg-arrow bg-contain bg-no-repeat bg-center h-full w-full'></div>
            </div>
        </div>
    )
}