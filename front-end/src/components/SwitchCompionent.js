import React from 'react'
import {Route , Redirect} from 'react-router-dom';
import Home from './Home'
import Help from './Help'
import Ann from './Announcements'
import Dis from './Discussion'
import Editinfo from './Editinfo'
import Addmentee from './Addmentee'
import ChatBox from './ChatBox'
import Details from './Addmeetingdetail'
function SwitchCompionent() {
    return (
        <div>
            <switch>
                    <Route path='/Dashboard/home' component={Home} />
                     <Route path='/Dashboard/announcements' component={Ann}></Route>
                    <Route path='/Dashboard/discussion' component={Dis}></Route>
                    <Route exact path='/Dashboard/help' component={Help}/>
                    <Route exact path='/Dashboard/editinfo' component={Editinfo}/>
                    <Route exact path='/Dashboard/addmentee' component={Addmentee}/>
                    <Route exact path='/Dashboard/chatbox' component={ChatBox}/>
                    <Route exact path='/Dashboard/addmeetingdetail' component={Details}/>
                    


                </switch>
        </div>
    )
}

export default SwitchCompionent
