let a = 0;
let b = 6
var surpriseButton = document.getElementById('surpriseButton');
var sumCountButton = document.getElementById('sumCount');
var restartButton = document.getElementById('restartButton');
var loadBar = document.getElementById('loadBar');

//screen control
function loadSurprise() {
    surpriseButton.hidden = true;
    sumCountButton.removeAttribute('disabled')
    sumCountButton.hidden = false;
    
    a += 12;
    startTimer();
    barLoad();
}

function restart() {
    surpriseButton.hidden = false;
    sumCountButton.hidden = true;
    restartButton.hidden = true;
    a = 0;
    if (b <= 26) b += 2;
    barLoad();
}

let reload = () => {
    surpriseButton.hidden = true;
    sumCountButton.hidden = true;
    restartButton.hidden = false;
}

//Count control
function degreeCount() { 
    if (a > 0) a -= b;
    barLoad();
}

function sumCount() { 
    a += 8;
    barLoad();
    if (a > 100) {
        stopTimer();
        surprise();
        setTimeout(reload, 1500);
    }
} 

//Timer control
let startTimer = () => {    
    timer = setInterval(degreeCount, 1000)
}

function stopTimer() {
    sumCountButton.setAttribute('disabled','')
    clearInterval(timer);
}


//loadBar control
function barLoad() {
    loadBar.setAttribute("aria-valuenow", a);
    loadBar.style.width = a + "%";
}


//Surprise control 
function surprise() {
    var number = randomNumberInterval(0, 9);
    $('#myLargeModalInfo').modal('show');
    var mydata = JSON.parse(data);
    if (number == 9) {
        $('#imgModal').css("width", "400px");
        $('#imgModal').css("max-width", "400px");
    } else {
        $('#imgModal').css("width", "200px");
        $('#imgModal').css("max-width", "200px");
    }
    $('#modalTitle').text(mydata[number].title);
    $('#modalText').html(mydata[number].text);
    $('#imgModal').attr("src", mydata[number].img);
}

function closeModal() {
    $('#myLargeModalInfo').modal('hide');
}

function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}