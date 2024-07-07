// import React, {useState} from 'react';
// import { render } from 'react-dom'
// import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
// import {useNuiEvent} from "../../../hooks/useNuiEvent";
// import { playSound, getLanguages, priceToPriceWithCommase } from "../../../utils/misc";
// import {debugData} from "../../../utils/debugData";
// import ProgressBar from "@ramonak/react-progress-bar";

// debugData([
//     {
//         action: 'setInventory',
//         data: [
//             {
//                 "item": "weapon_combatpistol",
//                 "label": "Combat Pistol",
//                 "count": 13,
//             },
//             {
//                 "item": "weapon_tacticalrifle",
//                 "label": "Tactical Rifle",
//                 "count": 4,
//             },
//         ],
//     }
// ])

// debugData([
//     {
//         action: 'setMyOffers',
//         data: [
//             {
//                 "item": "weapon_combatpistol",
//                 "label": "Combat Pistol",
//                 "price": 3000,
//             },
//             {
//                 "item": "weapon_tacticalrifle",
//                 "label": "Tactical Rifle",
//                 "price": 45000,
//             },
//         ],
//     }
// ])

// debugData([
//     {
//         action: 'setOffersArticle',
//         data: [
//             {
//                 "owner": "5233",
//                 "pseudo": "Loris",
//                 "price": 3000,
//             },
//             {
//                 "owner": "5233",
//                 "pseudo": "Loris",
//                 "price": 3000,
//             },
//         ],
//     }
// ])

// debugData([
//     {
//         action: 'setCountOffer',
//         data: "2/3"
//     }
// ])

// export default function Market_Own() {
//     let history = useHistory()
//     const changePage = (page: string) => {
//         history.push("/" + page)
//     }

//     const goBack = () => {
//         history.goBack()
//     }

//     const [countOffer, setCountOffer] = useState<any>(null)
//     useNuiEvent<any>('setCountOffer', (data) => {
//         setCountOffer(data)
//     })

//     const languages = getLanguages()

//     const [userData, setUserData] = useState<any>(null)
//     useNuiEvent<any>('setUserData', (data) => {
//         setUserData(data)
//     })

//     const [inventory, setInventory] = useState<any>(null)
//     useNuiEvent<any>('setInventory', (data) => {
//         setInventory(data)
//         // setActualArticle(data[0])
//         // getOffersForArticle(data[0].item)
//     })

//     if (inventory == null) {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({}),
//         };
//         fetch(`https://YBN/YBN.Market:Reload`, options)
//     }

//     const [offersArticle, setOffersArticle] = useState<any>(null)
//     useNuiEvent<any>('setOffersArticle', (data) => {
//         setOffersArticle(data)
//     })

//     useNuiEvent<any>('setOffersArticle2', (data) => {
//         setOffersArticle(data.offers)
//         getOffersForArticle(data.item)
//     })

//     const [myOffers, setMyOffers] = useState<any>(null)
//     useNuiEvent<any>('setMyOffers', (data) => {
//         setMyOffers(data)
//     })
    
//     if (myOffers == null) {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({}),
//         };
//         fetch(`https://YBN/YBN.Market:ReloadMyOffers`, options)
//     }

//     const [actualArticle, setActualArticle] = useState<any>(null)
//     useNuiEvent<any>('setActualArticle', (data) => {
//         setActualArticle(data)
//     })

//     const [price, setPrice] = useState<number>(0)
//     const [count, setCount] = useState<number>(1)

//     const handleChangePrice = (event: any) => {
//         setPrice(event.target.value);
//     };

//     const getOffersForArticle = (item: string) => {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({
//                 item: item,
//             }),
//         };
//         fetch(`https://YBN/YBN.Market:GetOffersForArticle`, options)
//     }

//     const handleChangeCount = (event: any) => {
//         setCount(event.target.value);
//     };

//     return (
//         <div className="flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pt-[3%] bg-black bg-opacity-50 bg-center bg-cover gap-[1%]">
//             <div className='flex flex-row gap-[1%] items-end'>
//                 <div className='800:h-[20px] 800:w-[15px] 1024:h-[25px] 1024:w-[20px] 1280:h-[35px] 1280:w-[30px] 1600:h-[45px] 1600:w-[40px] 1920:h-[55px] 1920:w-[50px] 2560:h-[65px] 2560:w-[60px] bg-[#141618]/80 border border-dark-grey rounded p-2 cursor-pointer'
//                 onClick={() => {
//                     goBack()
//                 }}
//                 >
//                     <div className='bg-arrow bg-contain bg-no-repeat bg-center h-full w-full'></div>
//                 </div>
//                 <h1 className='text-white font-Countach 800:text-[25px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-none tracking-wider font- uppercase drop-shadow'>{languages["market"]}</h1>
//             </div>
//             <h1 className='text-light-yellow w-auto uppercase 800:text-[13px] 1024:text-[15px] 1280:text-[20px] 1440:text-[22px] 1600:text-[25px] 1920:text-[30px] 2560:text-[40px] font-Countach tracking-wide drop-shadow'>
//                 <span className='bg-dark-grey border border-dark-grey px-2 pb-1 rounded'>{languages["points2"]} <a className='text-yellow'>
//                     {userData && priceToPriceWithCommase(userData.points)}
//                 </a></span>
//             </h1>
//             <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>{languages["inventory"]}</span></h1>
            
//             <div className='w-full h-full max-h-full overflow-hidden flex flex-row gap-[3%]'>

//                 <div className='flex flex-col w-[55%] h-full max-h-full overflow-hidden gap-[1%]'>
//                     <div className='grid grid-cols-8 grid-flow-row auto-rows-max gap-[1%] w-full bg-black/40 p-[1%] scroll-auto touch-auto overflow-auto h-[40%]'>
//                         {inventory && inventory.map((item: any, index: number) => (
//                             <div className={`h-[40px] 800:h-[50px] 1024:h-[70px] 1280:h-[80px] 1440:h-[95px] 1600:h-[110px] 1920:h-[120px] 2560:h-[145px] border border-[#696969] ${actualArticle && actualArticle.item == item.item ? 'border-white' : ''} hover:sepia hover:border-white flex flex-col items-end overflow-hidden disableBorder item col-span-2`} style={{
//                                 backgroundImage: `linear-gradient(135deg, #696969 6%, #7474746b 6%)`,
//                             }}
//                             onClick={() => {
//                                 setActualArticle(item)

//                                 getOffersForArticle(item.item)
//                             }}
//                             >
//                                 <div className="w-full h-[85%] p-3">
//                                     <div className={`bg-${item.item} w-full h-full bg-contain bg-center bg-no-repeat`}></div>
//                                 </div>
//                                 <div className='flex justify-between flex-row w-full pl-1 pr-1'>
//                                     <h1 className='text-white font-SFProDisplayLightItalic 800:text-[5px] 1024:text-[8px] 1280:text-[10px] 1440:text-[12px] 1600:text-[13px] 1920:text-[16px] 2560:text-[18px]'>{item.label}</h1>
//                                     <h1 className='text-white font-SFProDisplayLightItalic 800:text-[5px] 1024:text-[8px] 1280:text-[10px] 1440:text-[12px] 1600:text-[13px] 1920:text-[16px] 2560:text-[18px]'>X{item.count}</h1>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {
//                         countOffer && (
//                             <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>{languages["my_offers"] + ":  " + countOffer}</span></h1>
//                         )
//                     }
//                     <div className='flex flex-col gap-[1%] w-full bg-black/40 p-[1%] scroll-auto touch-auto overflow-auto h-[55%]'>
//                         <div className='flex flex-row w-full text-center border-b border-white/40'>
//                             <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-[20%]'>
//                                 {languages["actions"]}
//                             </h1>
//                             <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-[30%]'>
//                                 {languages["name"]}
//                             </h1>
//                             <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-[30%]'>
                                
//                             </h1>
//                             <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-[20%]'>
//                                 {languages["points"]}
//                             </h1>
//                         </div>

//                         <div className='grid grid-cols-1 grid-flow-row auto-rows-max gap-[1%] scroll-auto touch-auto overflow-auto max-h-[90%] h-[90%]'>
//                             {myOffers && myOffers.map((offer: any, index: number) => {
//                                 return (
//                                     <div className='bg-[#1f1e1e] h-[30px] 800:h-[40px] 1024:h-[50px] 1280:h-[60px] 1600:h-[70px] 1920:h-[80px] 2560:h-[90px] w-full rounded border border-[#393937] overflow-hidden flex flex-row'>
//                                         <div className='bg-[#191918] text-center w-full h-full flex flex-row justify-start items-center p-[1%]'>
//                                             <div className='flex text-center justify-center h-full w-[20%] rounded bg-dark-grey items-center cursor-pointer border-2 border-dark-grey hover:border-light-blue hover:bg-dark-blue hover:text-light-blue'
//                                             onClick={() => {
//                                                 const options = {
//                                                     method: 'POST',
//                                                     headers: {
//                                                         'Content-Type': 'application/json'
//                                                     },
//                                                     body: JSON.stringify({
//                                                         idOffer: offer.idOffer,
//                                                         item: offer.item,
//                                                     })
//                                                 }
//                                                 fetch(`https://YBN/YBN.Market:Delete`, options)
//                                             }}
//                                             >
//                                                 <h1 className='uppercase font-SFProDisplayRegular 800:text-[12px] 1024:text-[15px] 1280:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[24px] text-light-yellow'>
//                                                     {languages["delete"]}
//                                                 </h1>
//                                             </div>
//                                             <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] w-[30%] font-SFProDisplayLight'>{offer.label}</h1>
//                                             <div className={`bg-${offer.item} w-[30%] h-full bg-center bg-no-repeat bg-contain`}>
//                                             </div>
//                                             <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] w-[20%] font-SFProDisplayLight'>{priceToPriceWithCommase(offer.price)}</h1>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>


//                 <div className='flex flex-col gap-[1%] h-full w-[35%] bg-black/40'>
//                     <h1 className='text-black uppercase leading-none text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>Information</span></h1>

//                     <div className='flex flex-col gap-[5%] p-[2%] h-full w-full items-center justify-center'>
//                         {actualArticle && (
//                             <div className='flex flex-col gap-[3%] w-full h-full'>

//                                 <div className='flex flex-row gap-[5%] w-full h-[15%] items-center justify-center'>
//                                     <p className='text-left font-Countach tracking-wider uppercase leading 800:text-[10px] 1024:text-[15px] 1280:text-[20px] 1440:text-[25px] 1600:text-[30px] 1920:text-[40px] 2560:text-[50px] text-[#bbbcbc]'>{actualArticle.label}</p>
//                                     <div className={`bg-${actualArticle.item} bg-center bg-no-repeat bg-contain h-full w-[40%]`}></div>
//                                 </div>
                                
//                                 <div className='flex flex-col gap-[1%] w-full h-[10%] items-center justify-center'>
//                                     <div className='flex flex-row text-left w-full'>
//                                         <h1 className='text-[#bbbcbc] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] font-SFProDisplayLight w-[35%]'>
//                                             {languages["points"]}
//                                         </h1>
//                                         <h1 className='text-[#bbbcbc] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] font-SFProDisplayLight w-[25%]'>
//                                             {languages["quantity"]}
//                                         </h1>
//                                     </div>

//                                     <div className='flex flex-row w-full h-full gap-[5%]'>
//                                         <input onChange={handleChangePrice} value={price} type='number' id='market_price' defaultValue={0} className='bg-[#1f1f1f] px-[1%] outline-none text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-[30%] h-full rounded border border-[#393937] overflow-hidden flex flex-row' />
//                                         <input onChange={handleChangeCount} value={count} type='number' id='market_quantity' defaultValue={1} className='bg-[#1f1f1f] px-[1%] outline-none text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-[25%] h-full rounded border border-[#393937] overflow-hidden flex flex-row' />
//                                         <div className='flex text-center justify-center h-full w-[30%] rounded bg-dark-grey items-center cursor-pointer border-2 border-dark-grey hover:border-light-blue hover:bg-dark-blue hover:text-light-blue'
//                                         onClick={() => {
//                                             const options = {
//                                                 method: 'post',
//                                                 headers: {
//                                                     'Content-Type': 'application/json; charset=UTF-8',
//                                                 },
//                                                 body: JSON.stringify({
//                                                     item: actualArticle.item,
//                                                     price: price,
//                                                     quantity: count,
//                                                 }),
//                                             };
//                                             fetch(`https://YBN/YBN.Market:CreateOffer`, options)
//                                         }}
//                                         >
//                                             <h1 className='uppercase font-SFProDisplayRegular 800:text-[12px] 1024:text-[15px] 1280:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[24px] text-light-yellow'>
//                                                 {languages["confirm"]}
//                                             </h1>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className='flex flex-row text-center border-b border-white/40'>
//                                     <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-[30%]'>
//                                         {languages["actions"]}
//                                     </h1>
//                                     <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-[35%]'>
//                                         {languages["nickname"]}
//                                     </h1>
//                                     <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayLight w-[35%]'>
//                                         {languages["points"]}
//                                     </h1>
//                                 </div>
                                
//                                 <div className='grid grid-cols-1 grid-flow-row auto-rows-max gap-[1%] scroll-auto touch-auto overflow-auto max-h-[60%] h-[60%]'>
//                                     {offersArticle && offersArticle.map((offer: any, index: number) => {
//                                         return (
//                                             <div className='bg-[#1f1e1e] h-[30px] 800:h-[40px] 1024:h-[50px] 1280:h-[60px] 1600:h-[70px] 1920:h-[80px] 2560:h-[90px] w-full rounded border border-[#393937] overflow-hidden flex flex-row'>
//                                                 <div className='bg-[#191918] text-center w-full h-full flex flex-row justify-start items-center p-[2%]'>
//                                                     <div className='flex text-center justify-center h-full w-[30%] rounded bg-dark-grey items-center cursor-pointer border-2 border-dark-grey hover:border-light-blue hover:bg-dark-blue hover:text-light-blue'
//                                                     onClick={() => {
//                                                         const options = {
//                                                             method: 'POST',
//                                                             headers: {
//                                                                 'Content-Type': 'application/json'
//                                                             },
//                                                             body: JSON.stringify({
//                                                                 idOffer: offer.idOffer,
//                                                                 item: actualArticle.item,
//                                                                 owner: offer.owner,
//                                                                 label: actualArticle.label,
//                                                             })
//                                                         }
//                                                         fetch(`https://YBN/YBN.Market:Buy`, options)
//                                                     }}
//                                                     >
//                                                         <h1 className='uppercase font-SFProDisplayRegular 800:text-[12px] 1024:text-[15px] 1280:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[24px] text-light-yellow'>
//                                                             {languages["buy"]}
//                                                         </h1>
//                                                     </div>
//                                                     <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] w-[35%] font-SFProDisplayLight'>{offer.pseudo}</h1>
//                                                     <h1 className='text-white 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[18px] 1920:text-[23px] 2560:text-[24px] w-[35%] font-SFProDisplayLight'>{priceToPriceWithCommase(offer.price)}</h1>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }