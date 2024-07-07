// import React, {useState} from 'react';
// import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
// import {useNuiEvent} from "../../../hooks/useNuiEvent";
// import { playSound, getLanguages, priceToPriceWithCommase, stringUpperToFirst } from "../../../utils/misc";
// import {debugData} from "../../../utils/debugData";

// debugData([
//     {
//         action: 'setArticles',
//         data: [
//             {
//                 id: 1,
//                 label: 'Service Carbine',
//                 item: 'weapon_carbinerifle',
//                 quantity: 1,
//                 type: 'weapon',
//                 offers: [
//                     {
//                         owner: "561710",
//                         pseudo: "Loris",
//                         price: 50000,
//                     },
//                     {
//                         owner: "561710",
//                         pseudo: "Loris 2",
//                         price: 55000,
//                     },
//                     {
//                         owner: "561710",
//                         pseudo: "Loris 2",
//                         price: 55000,
//                     },
//                 ]
//             },
//             {
//                 id: 1,
//                 label: 'Marksman Rifle MK2',
//                 item: 'weapon_marksmanrifle_mk2',
//                 quantity: 1,
//                 type: 'weapon',
//                 offers: [
//                     {
//                         owner: "561710",
//                         pseudo: "Loris",
//                         price: 3000000,
//                     },
//                 ]
//             },
//             {
//                 id: 1,
//                 label: 'RUINER2',
//                 item: 'vehicle_ruiner2',
//                 quantity: 1,
//                 type: 'vehicle',
//                 offers: []
//             },
//             {
//                 id: 1,
//                 label: 'Medikit',
//                 item: 'medikit',
//                 quantity: 1,
//                 type: 'gears',
//                 offers: []
//             },
//         ]
//     }
// ])

// export default function Market() {
//     let history = useHistory()
//     const changePage = (page: string) => {
//         history.push("/" + page)
//     }

//     const languages = getLanguages()

//     const [userData, setUserData] = useState<any>(null)
//     useNuiEvent<any>('setUserData', (data) => {
//         setUserData(data)
//     })

//     const [articles, setArticles] = useState<any>(null)
//     const [showArticles, setShowArticles] = useState<any>(null)
//     useNuiEvent<any>('setArticles', (data) => {
//         setArticles(data)
//         setShowArticles(data)
//         setActualArticle(data[0])
//     })

//     if (articles == null) {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({}),
//         };
//         fetch(`https://YBN/YBN.Market:Reload`, options)
//     }

//     const [actualArticle, setActualArticle] = useState<any>(null)
//     useNuiEvent<any>('setActualArticle', (data) => {
//         setActualArticle(data)
//     })

//     return (
//         <div className="flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pt-[3%] bg-black bg-opacity-50 bg-center bg-cover gap-[1%]">
//             <h1 className='text-white font-Countach 800:text-[25px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-none tracking-wider font- uppercase drop-shadow'>{languages["market"]}</h1>
//             <div className='flex flex-row justify-between w-[55%] items-center'>
//                 <h1 className='text-light-yellow w-auto uppercase 800:text-[13px] 1024:text-[15px] 1280:text-[20px] 1440:text-[22px] 1600:text-[25px] 1920:text-[30px] 2560:text-[40px] font-Countach tracking-wide drop-shadow'>
//                     <span className='bg-dark-grey border border-dark-grey px-2 pb-1 rounded'>{languages["points2"]} <a className='text-yellow'>
//                         {userData && priceToPriceWithCommase(userData.points)}
//                     </a></span>
//                 </h1>
                
//                 <h1 className='text-light-yellow w-auto uppercase 800:text-[13px] 1024:text-[15px] 1280:text-[20px] 1440:text-[22px] 1600:text-[25px] 1920:text-[30px] 2560:text-[40px] font-Countach tracking-wide drop-shadow'>
//                     <span className='bg-dark-grey cursor-pointer hover:border-light-blue hover:bg-dark-blue border border-dark-grey px-2 pb-1 rounded'
//                     onMouseEnter={() => playSound('hover')}
//                     onClick={() => {
//                         changePage('market_own')
//                     }}
//                     >{languages["my_offers"]}</span>
//                 </h1>

//                 <input className='w-[40%] placeholder-light-yellow 800:text-[11px] 1024:text-[12px] 1280:text-[14px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] h-[30px] 800:h-[40px] 1024:h-[50px] 1280:h-[60px] 1600:h-[70px] 1920:h-[80px] 2560:h-[54px] text-center bg-dark-grey border border-dark-grey rounded text-light-yellow leading-none font-SFPro drop-shadow outline-none'
//                 placeholder={stringUpperToFirst(languages["search"])}
//                 onChange={(e) => {
//                     var reserch_word = e.target.value
//                     if (reserch_word == '') {
//                         setShowArticles(articles)
//                     } else {
//                         var newArticles: any = []
//                         articles.map((article: any, index: number) => {
//                             if (article.label.toLowerCase().includes(reserch_word.toLowerCase())) {
//                                 newArticles.push(article)
//                             }
//                         })
//                         setShowArticles(newArticles)
//                     }
//                 }}
//                 />
//             </div>

//             <div className='flex flex-row w-full h-auto gap-[2%] items-end'>
//                 <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] font-Countach'><span className='bg-extreme-light-grey px-1 pb-1 rounded-sm'>{languages["articles"]}</span></h1>
                
//                 <select className='w-auto cursor-pointer outline-none 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded-sm font-Countach text-black bg-extreme-light-grey px-1 pb-1'
//                 onChange={(e) => {
//                     const options = {
//                         method: 'post',
//                         headers: {
//                             'Content-Type': 'application/json; charset=UTF-8',
//                         },
//                         body: JSON.stringify({
//                             type: e.target.value
//                         }),
//                     };
//                     fetch(`https://YBN/YBN.Market:Reload`, options)
//                 }}
//                 >
//                     <option value='all'>{languages["all"]}</option>
//                     <option value='weapons'>{languages["weapons"]}</option>
//                     <option value='vehicles'>{languages["vehicles"]}</option>
//                     <option value='gear'>{languages["gear"]}</option>
//                 </select>
//             </div>
            
//             <div className='w-full h-full max-h-full overflow-hidden flex flex-row gap-[3%]'>
//                 <div className='grid grid-cols-5 grid-flow-row auto-rows-max gap-[1%] w-[55%] bg-black/40 p-[1%] scroll-auto touch-auto overflow-auto h-full'>
//                     {showArticles && showArticles.map((article: any, index: number) => (
//                         <div className={`800:h-[80px] 1024:h-[110px] 1280:h-[140px] 1600:h-[175px] 1920:h-[200px] 2560:h-[250px] bg-gradient-to-b from-[#4c4c4b] to-[#232222] 
//                         ${actualArticle && actualArticle.item == article.item ? 'border-[#cdcdcd] border-x' : 'border-dark-grey border-2'}
//                         rounded-md overflow-hidden border-t-4 group hover:border-[#cdcdcd] hover:border-x border-dark-grey flex flex-col drop-shadow cursor-pointer`}
//                         onClick={
//                             () => {
//                                 setActualArticle(article)
//                             }
//                         }
//                         >
//                             <div className='w-full h-[10%] flex justify-end items-end items drop-shadow p-[2%]'></div>
//                             <div className='w-full h-[50%] drop-shadow'>
//                                 <div className={`bg-${article.item} bg-center bg-no-repeat bg-contain h-full w-full`}></div>
//                             </div>
//                             <div className='p-[2%] drop-shadow'>
//                                 <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] text-[#898988]'>{article.label}</h1>
//                                 <h4 className='uppercase font-Countach tracking-widest 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] text-[#605f5f]'>{article.type}</h4>
//                             </div>
//                             <div className={`w-full h-[18%] flex justify-end items-center bg-[#3b3b3a] ${actualArticle && actualArticle.item == article.item ? 'bg-[#cdcdcd]' : ''} group-hover:bg-[#cdcdcd] drop-shadow p-[2%]`}>
//                                 <h1 className={`text-white font-Countach tracking-widest leading-none 800:text-[11px] 1024:text-[14px] 1280:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] ${actualArticle && actualArticle.item == article.item ? 'text-[#141313]' : ''} group-hover:text-[#141313] font-thin`}>x{article.offers.length}</h1>
//                             </div>
//                         </div>
//                     ))}
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
                                
//                                 <div className='grid grid-cols-1 grid-flow-row auto-rows-max gap-[1%] scroll-auto touch-auto overflow-auto max-h-[70%] h-[70%]'>
//                                     {actualArticle.offers && actualArticle.offers.map((offer: any, index: number) => {
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