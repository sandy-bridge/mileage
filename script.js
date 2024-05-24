const calculateMileage = (start, end) => Math.abs(start-end);

const setDistance = () => {
    let startMileage = document.getElementById("start").value;
    let endMileage = document.getElementById("end").value;

    let distance = calculateMileage(startMileage, endMileage);
    let template = `Distance: ${distance}`
    document.getElementById("distance").innerHTML = template;
š}
window.onload = setDistance;
