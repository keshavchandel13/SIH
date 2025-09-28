import React from "react";
import { FaLeaf } from "react-icons/fa";

export default function Logo(){
    return(
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500">
            <FaLeaf className="h-6 w-6 text-white" />
        </div>
    );
}