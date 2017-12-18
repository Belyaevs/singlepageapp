import React from "react";

var participantsInput = {
    name: "Name",
    email: "Email",
    // input: <td><input type='text' className='participants__details' /></td>,
    // btn: <td><button className="participants__remove-add"></button></td>,
    input: <tr className="participants__details-input">
        <td><input type='text' className='participants__details' /></td>
        <td><input type='text' className='participants__details' /></td>
        <td><button className="participants__add">Add</button></td>
        <td><button className="participants__remove">Remove</button></td>
           </tr>,

}
export default class Participants extends React.Component {
    render(){
        return (
            <form action="" className="participants__form">
                <h4 className="hostDetails__party">Add participants</h4>
                <table className="participants">
                        <tr className="participants__details-head">
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        {/*Participants details and contacts*/}
                    {participantsInput.input}

                </table>
            </form>
        )
    }
}    
