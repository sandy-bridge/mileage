const calculateMileage = (start, end) => Math.abs(start-end);
let totalDistance = 0;

const setDistance = () => {
    let segments = Array.from(document.getElementsByClassName("segment"));
    totalDistance = 0;
    segments.forEach(
        segment => totalDistance += calculateMileage(segment.getElementsByTagName("input")[0].value, segment.getElementsByTagName("input")[1].value)
    );
    document.getElementById("distance").innerText = `Distance: ${totalDistance}`;
}
const addSegment = () => {
    
    let segments = document.getElementsByClassName("segment");
    let newSegment = segments[0].cloneNode(true);
    newSegment.getElementsByTagName("input")[0].id = `start-${segments.length+1}`;
    newSegment.getElementsByTagName("input")[1].id = `end-${segments.length+1}`;
    newSegment.getElementsByTagName("h2")[0].innerText = `Segment ${segments.length+1}`
    document.getElementById("segments").appendChild(newSegment);
}
window.onload = setDistance;
