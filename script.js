

const d = new Date();
document.getElementById("date").innerHTML = d;

let day = d.getDay();
//let day = 0;
document.getElementById("day").innerHTML = day;

const pics = ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunday-quotes-index-1585055167.jpg", "https://www.thefactsite.com/wp-content/uploads/2017/10/monday-facts.jpg", "http://justfunfacts.com/wp-content/uploads/2021/11/tuesday-1.jpg", "https://miro.medium.com/max/800/0*IwtASl5bnsqceOdT.jpg", "https://cdn1.vectorstock.com/i/1000x1000/52/70/icon-page-calendar-day-week-thursday-vector-37535270.jpg", "https://goodlucksymbols.com/wp-content/uploads/2020/09/Friday-meaning-superstitions.jpg", "https://svinews.com/wp-content/uploads/2021/09/Saturday.png"];

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
	document.getElementById("calendar_image").innerHTML = '<img src="' + pics[0] +'">';
}
else if(day == 1){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[1] +'">';
}
else if(day == 2){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[2] +'">';
}
else if(day == 3){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[3] +'">';
}
else if(day == 4){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[4] +'">';
}
else if(day == 5){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[5] +'">';
}
else if(day == 6){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[6] +'">';
}
}
