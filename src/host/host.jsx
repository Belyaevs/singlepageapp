import React from "react";

export default class Host extends React.Component {
    render() {
        return (
            <form action="">
                <p className="hostDetails__input">Host name:</p>
                <input type="text" name="Host" placeholder="Jo Bransky" required />
                <p className="hostDetails__input" >Email:</p>
                <input type="email" name="Email" placeholder="example@gmail.com" required />
                <input type="submit" defaultValue="Submit" required />
            </form>
        )
    }
}