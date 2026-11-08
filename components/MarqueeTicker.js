"use client";

import {useEffect} from "react";
import {initMarqueeTicker} from "@/app/assets/js/MarqueeTicker";

export default function MarqueeTicker() {
    useEffect(() => {
        const el = document.getElementById("marquee-ticker");
        initMarqueeTicker("marquee-ticker");
        return () => {
            if (el) el.innerHTML = "";
        };
    }, []);

    return <div id="marquee-ticker"/>;
}