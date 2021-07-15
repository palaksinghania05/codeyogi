import { useEffect } from "react";
import {FC, memo} from "react";

interface Props {}

const AuthHero: FC<Props> = (props) => {
    console.log("AuthHero Rendering");
    useEffect(()=>{
        console.log("AuthHero rendering for the first time..")
    }, []);
    return (
        <div className="h-screen w-1/2 bg-black text-white">
            Logo will go here!!
        </div>
    );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);