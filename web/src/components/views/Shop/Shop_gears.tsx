import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, getLanguages, priceToPriceWithCommase } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";
import ProgressBar from "@ramonak/react-progress-bar";

debugData([
    {
        action: 'setShopDataGears',
        data: [
            {
                "item": "plate",
                "label": "Armor Plate",
                "price": 1000,
                "type": "Equipement",
                "description": "A plate that can be used to protect yourself from bullets."
            },
        ]
    }
])

debugData([
    {
        action: 'setCartData',
        data: [
            {
                "item": "plate",
                "label": "Armor Plate",
                "price": 1000,
                "priceTotal": 2000,
                "quantity": 2
            },
            {
                "item": "plate",
                "label": "Armor Plate",
                "price": 1000,
                "priceTotal": 2000,
                "quantity": 2
            },
            {
                "item": "plate",
                "label": "Armor Plate",
                "price": 1000,
                "priceTotal": 2000,
                "quantity": 2
            },
            {
                "item": "plate",
                "label": "Armor Plate",
                "price": 1000,
                "priceTotal": 2000,
                "quantity": 2
            },
        ]
    }
])

export default function Shop_gears() {
    const [shopData, setShopData] = useState<any>(null)
    useNuiEvent<any>('setShopDataGears', (data) => {
        setShopData(data)
    })

    const languages = getLanguages()

    let history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    const [itemInfo, setItemInfo] = useState<any>(null)

    const [cartData, setCartData] = useState<any>(null)
    useNuiEvent<any>('setCartData', (data) => {
        setCartData(data)
    })

    const [userData, setUserData] = useState<any>(null)
    useNuiEvent<any>('setUserData', (data) => {
        setUserData(data)
    })

    if (shopData === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Shops:Reload`, options)
    }

    const renderShopData = () => {
        const items: any[] = []

        if (shopData === null) {
            return items
        }

        for (let i = 0; i < shopData.length; i++) {
            const data = shopData[i]
            const item = data.item
            const label = data.label
            const price = data.price
            const type = data.type
            const level = data.level || 0
            const access = data.access

            items.push(
                <div className={`800:h-[80px] 1024:h-[110px] 1280:h-[140px] 1600:h-[175px] 1920:h-[200px] 2560:h-[250px] bg-gradient-to-b 
                ${access ? 'from-[#4c4c4b] to-[#232222]' : 'from-[#3c3c3b] to-[#1a1a1a]'}
                from-[#4c4c4b] to-[#232222] rounded-md overflow-hidden border-t-4 group hover:border-[#cdcdcd] hover:border-x border-dark-grey flex flex-col drop-shadow cursor-pointer`}
                onClick={() => {
                    if (!access) {
                        // playSound('error')
                        return
                    }
                    AddItemToCart(data)
                }}
                onMouseEnter={() => {
                    setItemInfo(data)
                    // playSound('hover')
                }}
                onMouseLeave={() => {
                    setItemInfo(null)
                }}
                >
                    <div className='w-full h-[10%] flex justify-end items-end items drop-shadow p-[2%]'></div>
                    <div className='w-full h-[50%] drop-shadow'>
                        <div className={`bg-${item} ${access ? 'grayscale-0' : 'grayscale opacity-75'} bg-center bg-no-repeat bg-contain h-full w-full`}></div>
                    </div>
                    <div className='p-[2%] drop-shadow'>
                        <h1 className={`uppercase font-Countach tracking-widest leading-none 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] ${access ? 'text-[#898988]' : 'text-[#434343]'}`}>{label}</h1>
                        <h4 className={`uppercase font-Countach tracking-widest 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] ${access ? 'text-[#605f5f]' : 'text-[#3c3c3c]'}`}>{type}</h4>
                    </div>
                    <div className='w-full h-[18%] flex justify-end items-center bg-[#3b3b3a] group-hover:bg-[#cdcdcd] drop-shadow p-[2%]'>
                        {
                            access ? (
                                <h1 className='text-white font-Countach tracking-widest leading-none 800:text-[11px] 1024:text-[14px] 1280:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] group-hover:text-[#141313] font-thin'>${priceToPriceWithCommase(price)}</h1>
                            ) : (
                                <h1 className='text-[#ec4444] font-Countach tracking-widest leading-none 800:text-[11px] 1024:text-[14px] 1280:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] font-thin'>{languages["level"]} {level}</h1>
                            )
                        }
                    </div>
                </div>
            )
        }

        return items
    }

    const renderCartData = () => {
        const items: any[] = []

        if (cartData === null) {
            return items
        }

        for (let i = 0; i < cartData.length; i++) {
            const data = cartData[i]
            const item = data.item
            const label = data.label
            const price = data.price
            const priceTotal = data.priceTotal
            const quantity = data.quantity
            
            items.push(
                <div className='800:h-[80px] 1024:h-[110px] 1280:h-[140px] 1600:h-[175px] 1920:h-[200px] 2560:h-[250px] bg-gradient-to-b from-[#4c4c4b] to-[#232222] rounded-md overflow-hidden flex flex-col drop-shadow cursor-pointer'
                onClick={() => {
                    RemoveItemCart(item)
                }}
                >
                    <div className='w-full h-[10%] flex justify-end items-end items drop-shadow p-[2%]'></div>
                    <div className='w-full h-[50%] drop-shadow'>
                        <div className={`bg-${item} bg-center bg-no-repeat bg-contain h-full w-full`}></div>
                    </div>
                    <div className='p-[2%] drop-shadow'>
                        <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] text-[#898988]'>{label}</h1>
                        <h4 className='uppercase font-Countach tracking-widest 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] text-[#605f5f]'>{languages["quantity"]}: {quantity}</h4>
                    </div>
                    <div className='w-full h-[18%] flex justify-between items-center bg-[#3b3b3a] drop-shadow p-[2%]'>
                        <div className='flex flex-row gap-3 items-center w-auto'>
                            <h1 className='bg-[#3b3b3a] 800:p-0 1280:p-1.5 p-0 800:px-3 1280:px-4 px-2 leading-none rounded text-white font-SFPro 2560:text-[30px] hover:bg-[#cdcdcd] hover:text-[#141313] cursor-pointer' onClick={() => {RemoveItemCart(data)}}>-</h1>
                            <h1 className='bg-[#3b3b3a] 800:p-0 1280:p-1.5 p-0 800:px-3 1280:px-4 px-2 leading-none rounded text-white font-Countach 2560:text-[30px] hover:bg-[#cdcdcd] hover:text-[#141313] cursor-pointer' onClick={() => {AddItemToCart(data)}}>+</h1>
                        </div>
                        <h1 className='text-white font-Countach tracking-widest leading-none 800:text-[11px] 1024:text-[14px] 1280:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] font-thin'>${priceToPriceWithCommase(priceTotal)}</h1>
                    </div>
                </div>
            )
        }

        return items
    }

    const AddItemToCart = (item: any) => {
        const options = {
            method: 'post',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                item: item,
            }),
        };

        fetch('https://YBN/YBN.Shops:AddItemToCart', options)
    }

    const RemoveItemCart = (item: any) => {
        const options = {
            method: 'post',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                item: item,
            }),
        };

        fetch('https://YBN/YBN.Shops:RemoveItemFromCart', options)
    }

    const getTotalPriceCart = () => {
        if (cartData === null) {
            return 0
        }
        let total = 0
        for (let i = 0; i < cartData.length; i++) {
            total += cartData[i].priceTotal
        }
        return total
    }
    
    const checkOut = () => {
        const options = {
            method: 'post',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };

        fetch('https://YBN/YBN.Shops:CheckOut', options)
    }

    const SellCart = () => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };

        fetch('https://YBN/YBN.Shops:SellCart', options)
    }

    const getTotalPriceToSell = () => {
        if (cartData === null) {
            return 0
        }

        let total = 0
        for (let i = 0; i < cartData.length; i++) {
            total += cartData[i].sellpriceTotal
        }
        
        total = Math.floor(total)
        return total
    }

    return (
        <div className="flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pt-[3%] bg-black bg-opacity-50 bg-center bg-cover gap-[1%]">
            <div className='flex flex-row gap-[1%] items-end'>
                <div className='800:h-[20px] 800:w-[15px] 1024:h-[25px] 1024:w-[20px] 1280:h-[35px] 1280:w-[30px] 1600:h-[45px] 1600:w-[40px] 1920:h-[55px] 1920:w-[50px] 2560:h-[65px] 2560:w-[60px] bg-[#141618]/80 border border-dark-grey rounded p-2 cursor-pointer'
                onClick={() => {
                    goBack()
                }}
                >
                    <div className='bg-arrow bg-contain bg-no-repeat bg-center h-full w-full'></div>
                </div>
                <h1 className='text-white font-Countach 800:text-[25px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-none tracking-wider font- uppercase drop-shadow'>Buy Station</h1>
            </div>
            <h1 className='text-[#9aa39a] uppercase 800:text-[13px] 1024:text-[15px] 1280:text-[20px] 1440:text-[22px] 1600:text-[25px] 1920:text-[30px] 2560:text-[40px] font-Countach tracking-wide drop-shadow'><span className='bg-dark-grey border border-dark-grey px-[0.5%] pb-1 rounded'>{languages["points2"]} <a className='text-yellow'>{userData && priceToPriceWithCommase(userData.points)}</a></span></h1>
            <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>{languages["gear"]}</span></h1>
            
            <div className='w-full h-full flex flex-row gap-[1%]'>
                <div className='grid grid-cols-5 grid-flow-row auto-rows-max gap-[1%] w-[57%] bg-black/40 p-[1%]'>
                    {renderShopData()}
                </div>


                <div className='gap-[3%] w-[42%] flex flex-col'>
                    {/* <div className='flex flex-col gap-[5%] h-[38%] bg-black/40'>
                        <h1 className='text-black uppercase leading-none text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>Information</span></h1>

                        <div className='flex flex-col gap-[5%] p-[5%] h-full w-full items-center justify-center'>
                            {
                                itemInfo !== null ? (
                                    <p className='text-center font-Countach tracking-wider font-light 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] text-[#9aa39a]'>{itemInfo.description}</p>
                                ) : (
                                    <p className='text-center font-Countach tracking-wider font-light 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] text-[#9aa39a]'>Spend cash to purchase items. Each Buy Station you visit around the map will include same items.</p>
                                )
                            }
                        </div>
                    </div> */}

                    <div className='flex flex-col justify-around gap-[2%] h-full bg-black/40'>
                        <h1 className='text-black uppercase leading-none text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>Cart</span></h1>

                        {
                            cartData !== null ? (
                                <div className='grid grid-cols-3 grid-flow-row auto-rows-max gap-[1%] px-[2%] pt-[1%] h-[80%] scroll-auto touch-auto overflow-auto'>
                                    {renderCartData()}
                                </div>
                            ) : (
                                <div className='flex flex-col gap-[5%] p-[5%] h-full w-full items-center justify-center'>
                                    <p className='text-center font-Countach tracking-wider font-light 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] text-[#9aa39a]'>Spend cash to purchase items. Each Buy Station you visit around the map will include same items.</p>
                                </div>
                            )
                        }

                        {
                            getTotalPriceCart() !== 0 ? (
                                <div className='flex flex-row justify-end items-center p-[1%] px-[2%]'>
                                    {/* <h1 className='text-[#9aa39a] uppercase 800:text-[13px] 1024:text-[16px] 1280:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] font-Countach tracking-wide drop-shadow'>{languages["total"]}: <a className='text-yellow'>${priceToPriceWithCommase(getTotalPriceCart())}</a></h1> */}
                                    
                                    {/* <div className='flex flex-row gap-[3%] w-[70%] justify-end'>
                                        <h1 className='text-[#9aa39a] uppercase 800:text-[13px] 1024:text-[16px] 1280:text-[18px] 1600:text-[22px] 1920:text-[24px] 2560:text-[30px] font-Countach tracking-wide drop-shadow bg-dark-grey border border-dark-grey px-[0.5%] pb-1 rounded cursor-pointer'
                                        onClick={() => {SellCart()}}
                                        >{languages["sell"]}: <a className='text-[#ec4444]'>${priceToPriceWithCommase(getTotalPriceToSell())}</a></h1>

                                        <h1 className='text-[#9aa39a] uppercase 800:text-[13px] 1024:text-[16px] 1280:text-[18px] 1600:text-[22px] 1920:text-[24px] 2560:text-[30px] font-Countach tracking-wide drop-shadow bg-dark-grey border border-dark-grey px-[0.5%] pb-1 rounded cursor-pointer'
                                        onClick={() => {checkOut()}}
                                        >{languages["buy"]}: <a className='text-yellow'>${priceToPriceWithCommase(getTotalPriceCart())}</a></h1>
                                    </div> */}
                                    <h1 className='text-[#9aa39a] h-[4vh] w-[6vw] items-center justify-center flex uppercase 800:text-[10px] 1024:text-[11px] 1280:text-[13px] 1600:text-[15px] 1920:text-[17px] 2560:text-[25px] font-Countach tracking-wide drop-shadow bg-dark-grey border border-dark-grey px-[0.5%] pb-1 rounded cursor-pointer'
                                    onClick={() => {checkOut()}}
                                    >{languages["buy"]}: <a className='text-yellow'>${priceToPriceWithCommase(getTotalPriceCart())}</a></h1>
                                </div>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}