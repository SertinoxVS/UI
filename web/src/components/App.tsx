import React, {useState} from 'react';
import './App.css'
import {debugData} from "../utils/debugData";
import {fetchNui} from "../utils/fetchNui";
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../hooks/useNuiEvent";

import Home from './views/Home'
import Transporter from './views/Transporter/Transporter'
// import Inventory from './views/Inventory'
import Navbar from './views/Assets/Navbar'
import Profile from './views/Profile/Profile'
import Shop from './views/Shop/Shop'
import Shop_weapons from './views/Shop/Shop_weapons'
import Shop_darkzone from './views/Shop/Shop_darkzone';
import Shop_gears from './views/Shop/Shop_gears'
import Shop_vehicles from './views/Shop/Shop_vehicles'
import Shop_sell from './views/Shop/Shop_sell'
import Leaderboard_Kills from './views/Leaderboard/Leaderboard_Kills'
import Leaderboard_Points from './views/Leaderboard/Leaderboard_Points'
import Leaderboard_Zombies from './views/Leaderboard/Leaderboard_Zombies'
import Leaderboard_CrewKills from './views/Leaderboard/Leaderboard_CrewKills'
import Leaderboard_CrewZombies from './views/Leaderboard/Leaderboard_CrewZombies'
import Leaderboard_Darkzone from './views/Leaderboard/Leaderboard_Darkzone';
import Squad from './views/Squad/Squad'
import Party from './views/Party/Party'
import Store from './views/Store/Store'
import Friends from './views/Friends/Friends'
import InviteFriendToParty from './views/Invite/InviteFriendToParty'
import InviteFriendToTeam from './views/Invite/InviteFriendToTeam'
import Airdrop from './views/Airdrop/Airdrop'
import Lobby from './views/Lobby/Lobby'
import Modes from './views/Modes/Modes';
import Kits from './views/Kits/Kits'
import Banner from './views/Banner/Banner'
import Market from './views/Market/Market'
import Market_Own from './views/Market/Market_Own'
import Notify from './views/Notify/Notify'
import Trade from './views/Trade/Trade'
import Settings from './views/Settings/Settings';
import Bundle from './views/Bundle/Bundle';
import News from './views/News/News';
import VotesMap from './views/Maps/VotesMap';
import Maps from './views/Maps/Maps';
import Help from './views/Help/Help';
import PublicParty from './views/Party/PublicParty';

// This will set the NUI to visible if we are
// developing in browser
debugData([
    {
        action: 'setVisible',
        data: true,
    }
])

const App: React.FC = () => {
    // const history = useHistory()
    // useNuiEvent<string>('setPage', (page) => {
    //     history.push("/" + page)
    // })

    // disable the tab key
    document.onkeydown = function (e) {
        if (e.keyCode === 9) {
            e.preventDefault();
        }
        if (e.keyCode === 90) {
            e.preventDefault();
        }
        if (e.keyCode === 16) {
            e.preventDefault();
        }
    }

    // bg-[url('https://wallpapercave.com/wp/wp11711531.jpg')] bg-top bg-cover bg-no-repeat

    return (
        <div className="h-screen w-screen overflow-hidden">
            <Help />
            <Navbar />
            <Notify />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/web/build/index.html" component={Home} />
                <Route exact path="/transporter" component={Transporter} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/shop_weapons" component={Shop_weapons} />
                <Route exact path="/shop_darkzone" component={Shop_darkzone} />
                <Route exact path="/shop_gears" component={Shop_gears} />
                <Route exact path="/shop_vehicles" component={Shop_vehicles} />
                <Route exact path="/shop_sell" component={Shop_sell} />
                <Route exact path="/leaderboard_kills" component={Leaderboard_Kills} />
                <Route exact path="/leaderboard_points" component={Leaderboard_Points} />
                <Route exact path="/leaderboard_zombies" component={Leaderboard_Zombies} />
                <Route exact path="/leaderboard_crewkills" component={Leaderboard_CrewKills} />
                <Route exact path="/leaderboard_crewzombies" component={Leaderboard_CrewZombies} />
                <Route exact path="/leaderboard_darkzone" component={Leaderboard_Darkzone} />
                <Route exact path="/squad" component={Squad} />
                <Route exact path="/store" component={Store} />
                <Route exact path="/friends" component={Friends} />
                <Route exact path="/invite_friend_to_party" component={InviteFriendToParty} />
                <Route exact path="/party" component={Party} />
                <Route exact path="/invite_friend_to_team" component={InviteFriendToTeam} />
                <Route exact path="/airdrop" component={Airdrop} />
                <Route exact path="/lobby" component={Lobby} />
                <Route exact path="/modes" component={Modes} />
                <Route exact path="/kits" component={Kits} />
                <Route exact path="/banner" component={Banner} />
                <Route exact path="/market" component={Market} />
                <Route exact path="/market_own" component={Market_Own} />
                <Route exact path="/trade" component={Trade} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/bundle" component={Bundle} />
                <Route exact path="/news" component={News} />
                <Route exact path="/votesmap" component={VotesMap} />
                <Route exact path="/maps" component={Maps} />
                <Route exact path="/publicparty" component={PublicParty} />
            </Switch>
        </div>
    );
}

export default App;