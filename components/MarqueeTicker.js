"use client";

import {useEffect} from "react";
import {initMarqueeTicker} from "@/app/assets/js/MarqueeTicker";

export default function MarqueeTicker() {
    useEffect(() => {
        const containerId = "marquee-ticker";

        initMarqueeTicker(containerId);

        return () => {
            const el = document.getElementById(containerId);

            if (el) {
                el.innerHTML = "";
            }
        };
    }, []);

    return (
        <div
            id="marquee-ticker"
            className="w-full overflow-hidden"
        />
    );
}
