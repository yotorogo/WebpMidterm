const d = new Date();
document.getElementById("date").innerHTML = d;

let day = d.getDay();
//let day = 0;
document.getElementById("day").innerHTML = day;

document.getElementById("calendar_image").innerHTML = '<img src="' + pics[day] +'">';



document.getElementById("day_test_button").addEventListener("click", myFunction);

function myFunction (){

	day++;
	console.log(day);
	document.getElementById("day").innerHTML = day;
	//document.getElementById("calendar_image").innerHTML = '<img src="' + pics[day] +'">';
	if(day >= 7){

		day = -1;


	}
	if(day == 0){
	document.getElementById("calendar_image").innerHTML = '<img src="./images/Monday.jpeg' + pics[0] +'">';
}
else if(day == 1){
   document.getElementById("calendar_image").innerHTML = '<img src="./images/Tuesday.jpeg' + pics[1] +'">';
}
else if(day == 2){
   document.getElementById("calendar_image").innerHTML = '<img src="./images/Wednesday.jpeg' + pics[2] +'">';
}
else if(day == 3){
   document.getElementById("calendar_image").innerHTML = '<img src="./images/Thursday.jpeg' + pics[3] +'">';
}
else if(day == 4){
   document.getElementById("calendar_image").innerHTML = '<img src="./images/Friday.jpeg' + pics[4] +'">';
}
else if(day == 5){
   document.getElementById("calendar_image").innerHTML = '<img src="./images/Saturday.jpeg' + pics[5] +'">';
}
else if(day == 6){
   document.getElementById("calendar_image").innerHTML = '<img src="./images/Sunday.jpeg' + pics[6] +'">';
}
}
