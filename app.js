const sections = document.querySelectorAll("section")
const bubble = document.querySelector(".bubble")
const allGradients = [
    "linear-gradient(to right, #ff512f, #dd2476)",
    "linear-gradient(to right, #02aab0, #00cdac)",
    "linear-gradient(to right, #e55d87, #5fc3e4)"
];

const options = {
    threshold: 0.65
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
            bubble.style.background = allGradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
})