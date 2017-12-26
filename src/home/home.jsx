import React from "react";
import ParticipantsDetails from "../input/input";
import Host from "../host/host";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-success">Metus dui bibendum</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
               <Host/>
                <form action="">
                    <h4 className="hostDetails__party">Tell us about your party</h4>
                       <p>Location of your Secret Santa party</p>
                          <input type="text" required/>
                        <p>When is your party?</p>
                           <input type="date" required />
                        <p>Amount to spend</p>
                    <input type="text" placeholder="$20" required />   
                    <input type="submit" defaultValue="Submit" />
                </form>
               <ParticipantsDetails/>
               
            </div>
        );
    }
}
