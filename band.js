const bands1 = ["DragonForce", "Alestorm", "Ensiferum", "Equilibrium", "Firewind", "HammerFall", "Iron Savior",
 "Powerwolf", "Rhapsody", "Sonata Arctica", "Stratovarius", "Korpiklaani"];
const bands2 = ["Babymetal", "Rotting Christ", "TrollfesT", "Turisas", "Yaşru", "Soil Work", "Stormlord", "Metsatöll"];
let band1Len = bands1.length;
let band2Len = bands2.length;

function sleep(delay)
{
	var start = new Date().getTime();
	while (new Date().getTime() < start + delay);
};

function bandSelector(){
sleep(1000);
let band1 = bands1[Math.floor(Math.random() * band1Len)];
let band2 = bands2[Math.floor(Math.random() * band2Len)];
document.getElementById("result").innerHTML = band1;
document.getElementById("result2").innerHTML = band2;
};

function clear(){
window.location.reload();
document.getElementById('result').innerHTML = "  "
};
