const items = [
    "Customize print",
    "Web developer",
    "Seo and scaling",
    "Graphic",
    "Branding & advertising",

];

function createTrackHTML(reverse = false) {
    const repeated = [...items, ...items, ...items];
    const spans = repeated
        .map(
            (item) =>
                `<span>${item}<span style="opacity:0.6; margin: 0 12px">/</span></span>`
        )
        .join("");

    const animationStyle = reverse
        ? "animation: marquee-ltr 30s linear infinite;"
        : "animation: marquee-rtl 26s linear infinite;";

    return `<div style="${animationStyle} display:flex; white-space:nowrap;">${spans}</div>`;
}

export function initMarqueeTicker(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const style = document.createElement("style");
    style.textContent = `
    @keyframes marquee-rtl {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-33.333%); }
    }
    @keyframes marquee-ltr {
      0%   { transform: translateX(-33.333%); }
      100% { transform: translateX(0); }
    }
    #${containerId} span {
      color: #fff;
      font-weight: 600;
      font-size: 17px;
      letter-spacing: 0.02em;
      padding: 0 4px;
      font-family: 'Inter', sans-serif;
    }
  `;
    document.head.appendChild(style);

    container.style.cssText =
        "width:100%; overflow:hidden; padding:32px 0; position:relative;";

    const topStrip = document.createElement("div");
    topStrip.style.cssText = `
    overflow: hidden;
    padding: 10px 0;
    background: linear-gradient(to right, #172e64, #172e64);
    transform: rotate(-2deg) scaleX(1.08);
    margin-bottom: -14px;
  `;
    topStrip.innerHTML = createTrackHTML(false);

    const bottomStrip = document.createElement("div");
    bottomStrip.style.cssText = `
    overflow: hidden;
    padding: 10px 0;
    background: linear-gradient(to right, #21a4d9, #21a4d9);
    transform: rotate(-2deg) scaleX(1.08);
    margin-top: -14px;
  `;
    bottomStrip.innerHTML = createTrackHTML(true);

    container.appendChild(topStrip);
    container.appendChild(bottomStrip);
}


