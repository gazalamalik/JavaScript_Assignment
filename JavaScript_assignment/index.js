alert('monday ');

 let digitalClock = () =>{

	let date = new Date();
	let hours = date.getHours();

	let amorpm = hours >= 12 ? 'pm' : 'am';

    document.getElementId("hours").innerHTML = hours;
    document.getElementId("hours").innerHTML = minutes;


    setTimeout(digitalClock, 500);
}
   digitalClock();