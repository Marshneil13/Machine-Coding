let CoordArr = [];
let RadArr = [];

document.addEventListener('click', (e) => {
    const totalCircles = document.querySelectorAll(".circle");

    if(totalCircles.length === 2){
        totalCircles.forEach(circ => {
            document.body.removeChild(circ);
            CoordArr = [];
            RadArr = [];
        })
    }
    const x = e.clientX;
    const y = e.clientY;
    const radius = (Math.random() * 100) + 10;
    CoordArr.push({
        x,
        y
    });
    RadArr.push(radius);

    const circle = document.createElement("div");
    circle.style.width = 2*radius + "px";
    circle.style.height = 2*radius + "px";
    circle.style.top = y-radius + "px";
    circle.style.left = x-radius + "px";
    circle.classList.add("circle");
    document.body.appendChild(circle);

    if(totalCircles.length === 1){
        checkIntersection(CoordArr[0].x, CoordArr[0].y, CoordArr[1].x, CoordArr[1].y, RadArr[0], RadArr[1]);
    }
})

function checkIntersection(x1, y1, x2, y2, rad1, rad2){
    const d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
    if(d>(rad1+rad2)){
        console.log("Circles are NOT Intersecting");
    }else if(d === (rad1+rad2)){
        console.log("Circles are Intersecting at ONE point");
    }else if(d<(rad1+rad2) && d>Math.abs(rad1-rad2)){
        console.log("Circles are Intersecting at TWO points");   
    }else if(d<Math.abs(rad1-rad2)){
        console.log("CONTAINED Circles");
    }
}