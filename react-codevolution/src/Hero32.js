import React from "react";

function Hero32({ heroName }) {
    if (heroName === "Bad man") {
        console.log("Bad man given");

        throw new Error("Bad man given");
    }
    return <div > Hero name is { heroName }. < /div>;
}

export default Hero32;