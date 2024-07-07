import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, getLanguages, priceToPriceWithCommase } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";

debugData([
    {
        action: 'setInventory',
        data: [
            {
                "item": "weapon_combatpistol",
                "label": "Combat Pistol",
                "count": 13,
            },
            {
                "item": "weapon_tacticalrifle",
                "label": "Tactical Rifle",
                "count": 4,
            },
        ],
    }
])

debugData([
    {
        action: 'setTradeData',
        data: {
            timeStarted: 652910,
            sender: {
                pseudo: "Loris",
                identifier: "5659567",
                items: [
                    {
                        item: "weapon_combatpistol",
                        label: "WT_TEST",
                        count: 2,
                    },
                ],
                points: 0,
                confirm: false,
                cancel: false,
            },
            recever: {
                pseudo: "Sertinox",
                identifier: "4567345",
                items: [
                    {
                        item: "weapon_combatpistol",
                        label: "WT_TEST",
                        count: 2,
                    },
                ],
                points: 0,
                confirm: false,
                cancel: false,
            }
        },
    }
])

export default function Trade() {
    let history = useHistory()
    const changePage = (page: string) => {
        history.push("/" + page)
    }

    const languages = getLanguages()

    const [userData, setUserData] = useState<any>(null)
    useNuiEvent<any>('setUserData', (data) => {
        setUserData(data)
    })

    const [tradeData, setTradeData] = useState<any>(null)
    useNuiEvent<any>('setTradeData', (data) => {
        setTradeData(data)
    })

    const [inventory, setInventory] = useState<any>(null)
    useNuiEvent<any>('setInventory', (data) => {
        setInventory(data)
    })

    if (tradeData == null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Trade:Reload`, options)
    }

    if (inventory == null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Trade:ReloadInventory`, options)
    }

    const changeSenderStatus = (status: string, points: number, coins: number) => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                status: status,
                points: points || 0,
                coins: coins || 0,
            }),
        };
        fetch(`https://YBN/YBN.Trade:ChangeSenderStatus`, options)
    }

    const changeReceverStatus = (status: string, points: number, coins: number) => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                status: status,
                points: points || 0,
                coins: coins || 0,
            }),
        };
        fetch(`https://YBN/YBN.Trade:ChangeReceverStatus`, options)
    }

    const [pointsSender, setPointsSender] = useState<number>(0)
    const [pointsRecever, setPointsRecever] = useState<number>(0)

    const handleChangePointsSender = (event: any) => {
        setPointsSender(event.target.value);
    };
    useNuiEvent<any>('setPointsSender', (data) => {
        setPointsSender(data)
    })

    const [coinsSender, setCoinsSender] = useState<number>(0)
    const handleChangeCoinsSender = (event: any) => {
        setCoinsSender(event.target.value);
    };
    useNuiEvent<any>('setCoinsSender', (data) => {
        setCoinsSender(data)
    })

    const validSenderCoins = (event: any) => {
        const coins = event.target.value
        
        setCoinsSender(coins)

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                coins: coins || 0,
            }),
        };
        fetch(`https://YBN/YBN.Trade:ChangeSenderCoins`, options)
    }

    const [coinsRecever, setCoinsRecever] = useState<number>(0)
    const handleChangeCoinsRecever = (event: any) => {
        setCoinsRecever(event.target.value);
    };
    useNuiEvent<any>('setCoinsRecever', (data) => {
        setCoinsRecever(data)
    })

    const validReceverCoins = (event: any) => {
        const coins = event.target.value

        setCoinsRecever(coins)

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                coins: coins || 0,
            }),
        };
        fetch(`https://YBN/YBN.Trade:ChangeReceverCoins`, options)
    }

    const handleChangePointsRecever = (event: any) => {
        setPointsRecever(event.target.value);
    };
    useNuiEvent<any>('setPointsRecever', (data) => {
        setPointsRecever(data)
    })

    const validSenderPoints = (event: any) => {
        const points = event.target.value
        
        setPointsSender(points)

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                points: points || 0,
            }),
        };
        fetch(`https://YBN/YBN.Trade:ChangeSenderPoints`, options)
    }

    const validReceverPoints = (event: any) => {
        const points = event.target.value
        
        setPointsRecever(points)

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                points: points || 0,
            }),
        };
        fetch(`https://YBN/YBN.Trade:ChangeReceverPoints`, options)
    }

    return (
        <div className="flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pt-[3%] bg-black bg-opacity-50 bg-center bg-cover gap-[1%]">
            <h1 className='text-white font-Countach 800:text-[25px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-none tracking-wider font- uppercase drop-shadow'>{languages["trade_wait"]}</h1>
    
            {tradeData && tradeData.sender && tradeData.recever && tradeData.timeStarted && (
                <div className='w-full h-full max-h-full overflow-hidden flex flex-row gap-[3%]'>

                    <div className='w-[55%] h-full flex flex-col gap-[4%]'>
                        <div className='flex flex-col h-[48%] bg-black/40 gap-[1%] overflow-hidden'>
                            <h1 className='text-black uppercase leading-none text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[1%] pb-1 rounded-sm'>{languages["inventory"]}</span></h1>
                            <div className='grid grid-cols-8 grid-flow-row auto-rows-max gap-[1%] w-full p-[0.5%] scroll-auto touch-auto overflow-auto h-full'>
                                {inventory && inventory.map((item: any, index: number) => (
                                    <div className={`h-[40px] 800:h-[50px] 1024:h-[70px] 1280:h-[80px] 1440:h-[95px] 1600:h-[110px] 1920:h-[120px] 2560:h-[145px] border border-[#696969] hover:sepia hover:border-white flex flex-col items-end overflow-hidden disableBorder item col-span-2`} style={{
                                        backgroundImage: `linear-gradient(135deg, #696969 6%, #7474746b 6%)`,
                                    }}
                                    onClick={() => {
                                        const options = {
                                            method: 'post',
                                            headers: {
                                                'Content-Type': 'application/json; charset=UTF-8',
                                            },
                                            body: JSON.stringify({
                                                item: item.item,
                                            }),
                                        };
                                        fetch(`https://YBN/YBN.Trade:GiveItem`, options)
                                    }}
                                    >
                                        <div className="w-full h-[85%] p-3">
                                            <div className={`bg-${item.item} w-full h-full bg-contain bg-center bg-no-repeat`}></div>
                                        </div>
                                        <div className='flex justify-between flex-row w-full pl-1 pr-1'>
                                            <h1 className='text-white font-SFProDisplayLightItalic 800:text-[5px] 1024:text-[8px] 1280:text-[10px] 1440:text-[12px] 1600:text-[13px] 1920:text-[16px] 2560:text-[18px]'>{item.label}</h1>
                                            <h1 className='text-white font-SFProDisplayLightItalic 800:text-[5px] 1024:text-[8px] 1280:text-[10px] 1440:text-[12px] 1600:text-[13px] 1920:text-[16px] 2560:text-[18px]'>X{item.count}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full flex justify-around items-center h-[48%] bg-black/40 p-[2%] overflow-hidden'>
                            <div className='flex flex-col h-full justify-center items-center gap-[5%]'>
                                <h1 className='text-black uppercase leading-none text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[1%] pb-1 rounded-sm'>{tradeData.sender.pseudo}</span></h1>
                                <div className='flex flex-col h-[40%] gap-[1%]'>
                                    <h1 className='text-[#bbbcbc] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[18px] font-SFProDisplayLight w-full'>
                                        {languages["points"]}
                                    </h1>
                                    {
                                        tradeData.sender.identifier === userData.identifier ? (
                                            <input 
                                            type='number' 
                                            onChange={handleChangePointsSender}
                                            onBlur={validSenderPoints}
                                            value={pointsSender} 
                                            defaultValue={0} 
                                            className='bg-[#1f1f1f] px-[5%] outline-none text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-full h-[80%] rounded border border-[#393937] overflow-hidden flex flex-row' 
                                            />
                                        ) : (
                                            <input type='number' value={tradeData.sender.points} className='bg-[#1f1f1f] px-[5%] outline-none text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-full h-[80%] rounded border border-[#393937] overflow-hidden flex flex-row' />
                                        )
                                    }

                                    <h1 className='text-[#bbbcbc] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[18px] font-SFProDisplayLight w-full'>
                                        Coins
                                    </h1>

                                    {
                                        tradeData.sender.identifier === userData.identifier ? (
                                            <input 
                                            type='number' 
                                            onChange={handleChangeCoinsSender}
                                            onBlur={validSenderCoins}
                                            value={coinsSender} 
                                            defaultValue={0} 
                                            className='bg-[#1f1f1f] px-[5%] outline-none text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-full h-[80%] rounded border border-[#393937] overflow-hidden flex flex-row' 
                                            />
                                        ) : (
                                            <input type='number' value={tradeData.sender.coins} className='bg-[#1f1f1f] px-[5%] outline-none text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-full h-[80%] rounded border border-[#393937] overflow-hidden flex flex-row' />
                                        )
                                    }
                                </div>
                                <div className={`flex text-center justify-center h-[15%] w-full rounded bg-dark-grey p-[1%] items-center cursor-pointer border-2 border-dark-grey ${tradeData.sender.confirm ? 'border-[#79c370]' : ''} hover:border-[#79c370]`}
                                onClick={() => {
                                    changeSenderStatus('confirm', pointsSender, coinsSender)
                                }}
                                >
                                    <h1 className='uppercase font-SFProDisplayRegular 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] text-[#9aa39a]'>
                                        {languages["trade_confirm"]}
                                    </h1>
                                </div>
                                <div className={`flex text-center justify-center h-[15%] w-full rounded bg-dark-grey p-[1%] items-center cursor-pointer border-2 border-dark-grey ${tradeData.sender.cancel ? 'border-[#8e2421]' : ''} hover:border-[#8e2421]`}
                                onClick={() => {
                                    changeSenderStatus('cancel', pointsSender, coinsSender)
                                }}
                                >
                                    <h1 className='uppercase font-SFProDisplayRegular 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] text-[#9aa39a]'>
                                        {languages["trade_cancel"]}
                                    </h1>
                                </div>
                            </div>
                            
                            <div className='flex flex-col h-full justify-center items-center gap-[5%]'>
                                <h1 className='text-black uppercase leading-none text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[1%] pb-1 rounded-sm'>{tradeData.recever.pseudo}</span></h1>
                                <div className='flex flex-col h-[40%] gap-[1%]'>
                                    <h1 className='text-[#bbbcbc] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[18px] font-SFProDisplayLight w-full'>
                                        {languages["points"]}
                                    </h1>
                                    {
                                        tradeData.recever.identifier === userData.identifier ? (
                                            <input type='number' onChange={handleChangePointsRecever} onBlur={validReceverPoints} value={pointsRecever} defaultValue={0} className='bg-[#1f1f1f] px-[5%] outline-none text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-full h-[80%] rounded border border-[#393937] overflow-hidden flex flex-row' />
                                        ) : (
                                            <input type='number' value={tradeData.recever.points} className='bg-[#1f1f1f] px-[5%] outline-none text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-full h-[80%] rounded border border-[#393937] overflow-hidden flex flex-row' />
                                        )
                                    }

                                    <h1 className='text-[#bbbcbc] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[18px] font-SFProDisplayLight w-full'>
                                        Coins
                                    </h1>

                                    {
                                        tradeData.recever.identifier === userData.identifier ? (
                                            <input type='number' onChange={handleChangeCoinsRecever} onBlur={validReceverCoins} value={coinsRecever} defaultValue={0} className='bg-[#1f1f1f] px-[5%] outline-none text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-full h-[80%] rounded border border-[#393937] overflow-hidden flex flex-row' />
                                        ) : (
                                            <input type='number' value={tradeData.recever.coins} className='bg-[#1f1f1f] px-[5%] outline-none text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-full h-[80%] rounded border border-[#393937] overflow-hidden flex flex-row' />
                                        )
                                    }
                                </div>
                                <div className={`flex text-center justify-center h-[15%] w-full rounded bg-dark-grey p-[1%] items-center cursor-pointer border-2 border-dark-grey ${tradeData.recever.confirm ? 'border-[#79c370]' : ''} hover:border-[#79c370]`}
                                onClick={() => {
                                    changeReceverStatus('confirm', pointsRecever, coinsRecever)
                                }}
                                >
                                    <h1 className='uppercase font-SFProDisplayRegular 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] text-[#9aa39a]'>
                                        {languages["trade_confirm"]}
                                    </h1>
                                </div>
                                <div className={`flex text-center justify-center h-[15%] w-full rounded bg-dark-grey p-[1%] items-center cursor-pointer border-2 border-dark-grey ${tradeData.recever.cancel ? 'border-[#8e2421]' : ''} hover:border-[#8e2421]`}
                                onClick={() => {
                                    changeReceverStatus('cancel', pointsRecever, coinsRecever)
                                }}
                                >
                                    <h1 className='uppercase font-SFProDisplayRegular 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] text-[#9aa39a]'>
                                        {languages["trade_cancel"]}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='w-[35%] h-full flex flex-col gap-[4%]'>
                        <div className='flex flex-col gap-[1%] h-[90%] w-full bg-black/40 overflow-hidden'>
                            <h1 className='text-black uppercase leading-none text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>{tradeData.sender.pseudo}</span></h1>

                            <div className='grid grid-cols-6 grid-flow-row auto-rows-max gap-[1%] w-full p-[1%] scroll-auto touch-auto overflow-auto h-full'>
                                {tradeData.sender.items && tradeData.sender.items.map((item: any, index: number) => (
                                    <div className={`h-[40px] 800:h-[50px] 1024:h-[70px] 1280:h-[80px] 1440:h-[95px] 1600:h-[110px] 1920:h-[120px] 2560:h-[145px] border border-[#696969] hover:sepia hover:border-white flex flex-col items-end overflow-hidden disableBorder item col-span-2`} style={{
                                        backgroundImage: `linear-gradient(135deg, #696969 6%, #7474746b 6%)`,
                                    }}
                                    onClick={() => {
                                        var item = tradeData.sender.items[index] || null;

                                        const options = {
                                            method: 'post',
                                            headers: {
                                                'Content-Type': 'application/json; charset=UTF-8',
                                            },
                                            body: JSON.stringify({
                                                item: item,
                                                actioner: 'sender',
                                            }),
                                        };
                                        fetch(`https://YBN/YBN.Trade:RemoveItem`, options)
                                    }}
                                    >
                                        <div className="w-full h-[85%] p-3">
                                            <div className={`bg-${item.item} w-full h-full bg-contain bg-center bg-no-repeat`}></div>
                                        </div>
                                        <div className='flex justify-between flex-row w-full pl-1 pr-1'>
                                            <h1 className='text-white font-SFProDisplayLightItalic 800:text-[5px] 1024:text-[8px] 1280:text-[10px] 1440:text-[12px] 1600:text-[13px] 1920:text-[16px] 2560:text-[18px]'>{item.label}</h1>
                                            <h1 className='text-white font-SFProDisplayLightItalic 800:text-[5px] 1024:text-[8px] 1280:text-[10px] 1440:text-[12px] 1600:text-[13px] 1920:text-[16px] 2560:text-[18px]'>X{item.count}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className='flex flex-col gap-[1%] h-[90%] w-full bg-black/40 overflow-hidden'>
                            <h1 className='text-black uppercase leading-none text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>{tradeData.recever.pseudo}</span></h1>
                            
                            <div className='grid grid-cols-6 grid-flow-row auto-rows-max gap-[1%] w-full p-[1%] scroll-auto touch-auto overflow-auto h-full'>
                                {tradeData.recever.items && tradeData.recever.items.map((item: any, index: number) => (
                                    <div className={`h-[40px] 800:h-[50px] 1024:h-[70px] 1280:h-[80px] 1440:h-[95px] 1600:h-[110px] 1920:h-[120px] 2560:h-[145px] border border-[#696969] hover:sepia hover:border-white flex flex-col items-end overflow-hidden disableBorder item col-span-2`} style={{
                                        backgroundImage: `linear-gradient(135deg, #696969 6%, #7474746b 6%)`,
                                    }}
                                    onClick={() => {
                                        var item = tradeData.recever.items[index] || null;

                                        const options = {
                                            method: 'post',
                                            headers: {
                                                'Content-Type': 'application/json; charset=UTF-8',
                                            },
                                            body: JSON.stringify({
                                                item: item,
                                                actioner: 'sender',
                                            }),
                                        };
                                        fetch(`https://YBN/YBN.Trade:RemoveItem`, options)
                                    }}
                                    >
                                        <div className="w-full h-[85%] p-3">
                                            <div className={`bg-${item.item} w-full h-full bg-contain bg-center bg-no-repeat`}></div>
                                        </div>
                                        <div className='flex justify-between flex-row w-full pl-1 pr-1'>
                                            <h1 className='text-white font-SFProDisplayLightItalic 800:text-[5px] 1024:text-[8px] 1280:text-[10px] 1440:text-[12px] 1600:text-[13px] 1920:text-[16px] 2560:text-[18px]'>{item.label}</h1>
                                            <h1 className='text-white font-SFProDisplayLightItalic 800:text-[5px] 1024:text-[8px] 1280:text-[10px] 1440:text-[12px] 1600:text-[13px] 1920:text-[16px] 2560:text-[18px]'>X{item.count}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}