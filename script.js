
let generatedOTP="";

const prices={
"Cebu":3500,
"Singapore":8000,
"Japan":15000,
"Palawan":4500,
"Maldives":20000
};

// PRICE AUTO DISPLAY
document.getElementById("destination").addEventListener("change", function(){

let price = prices[this.value] || 0;

document.getElementById("priceDisplay").innerText =
"Price: ₱"+price;

});

// BOOKING CONFIRM
document.getElementById("bookingForm").addEventListener("submit", function(e){
e.preventDefault();
alert("Flight Booked Successfully!");
});

// LOGIN FUNCTIONS
function openLogin(){
document.getElementById("loginModal").style.display="block";
}

function closeLogin(){
document.getElementById("loginModal").style.display="none";
}

// OTP DEMO
function sendOTP(){

let email = document.getElementById("emailInput").value;

if(email==""){
alert("Enter Email");
return;
}

generatedOTP = Math.floor(100000 + Math.random()*900000);

document.getElementById("otpDisplay").innerText =
"Demo OTP: "+generatedOTP;

document.getElementById("otpSection").style.display="block";
}

function verifyOTP(){

let userOTP = document.getElementById("otpInput").value;

if(userOTP == generatedOTP){
alert("Login Success!");
closeLogin();
}else{
alert("Wrong Code");
}
}

// SCROLL BOOKING
function scrollBooking(){
document.getElementById("booking").scrollIntoView({
behavior:"smooth"
});
}
