import { useContext } from "react";
import { FlagContext } from "../../context/flag.context";

const isFlagObjectValid = (flags) => Boolean(flags && typeof flags === 'object' && Object.keys(flags).length);

const isFlagEnabled = function (flags, flagName) {
    return flags[flagName] && flags[flagName] === "true";
}

const GREET_FLAG = 'greet';

const FlagReader = () => {

    const { flags } = useContext(FlagContext);
    
    console.log("🚀 ~ file: flag-reader.component.jsx:7 ~ FlagReader ~ flags:", flags, isFlagObjectValid(flags));
    
    let isGreetEnabled = false;
    
    if (isFlagObjectValid(flags)) {
        isGreetEnabled = isFlagEnabled(flags, GREET_FLAG);
        console.log("🚀 ~ file: flag-reader.component.jsx:22 ~ FlagReader ~ isGreetEnabled :", isGreetEnabled )
    }

    return (
        <div>
            {isGreetEnabled ? <span>Hi</span> : <span>Bye</span>}
        </div>
    );
}

export default FlagReader;