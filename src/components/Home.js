import React from "react";

function Home() {

    return (
        <div className="home">
            <div className="row">
                <a href="/login">Log in</a>
                <a href="/logout">Log out</a>
                <a href="/register">Sign up</a>
            </div>
            <h1>Personal Instinct</h1>
        </div>
    )
}
export default Home;
