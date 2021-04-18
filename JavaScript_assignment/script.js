
class state{
	constructor(startTimestemp, diffrence, suspended) {
		this.startTimestemp = startTimestemp;
		this.diffrence = diffrence;
		this.suspended = suspended;

	}

	static ready(){
		return new state(null, 0, 0);

	}

}
class stopwatch {
	constructor(state){
		this.state = state;
		this.requestAnimationId = null;
		this.handleClickStart = this.handleClickStart.bind(this);
		document
		.getElementById("start")
		.addEventListener("click", this.handleClickStart);

		this.handleClickstop = this.handleClickStart.bind(this);
		document
		.getElementById("stop")
		.addEventListener("click", this.handleClickStart);

		this.handleClickReset = this.handleClickStart.bind(this);
		document
		.getElementById("reset")
		.addEventListener("click", this.handleClickStart);

		this.tick = this.tick.bind(this);
		this.render();
	}

	static ready() {
		return new stopwatch(state.ready());

	}
	setstate(newstate){
		this.state = {...this.state, ...newstate};
		this.render();

	}
	tick(){
		this.setstate({
			diffrence: new Date(new Date() - this.state.startTimestemp);
		});
		this.requestAnimationId = requestAnimationId(this.tick);

	}
	handleClickStart(){
		if(this.state.startTimestemp){
			return;
		}
		this.setstate({
			startTimestemp: new Date() - this.state.suspended,
			suspended:0
		});
		this.requestAnimationId = requestAnimationFrame(this.tick);

	}
	handleClickStop(){
		cancelAnimationFrame(this.requestAnimationId);
		this.setstate({
			startTimestemp: null;
			suspended: this.state.diffrence
		});
	}
	handleClickReset(){
		cancelAnimationFrame(this.requestAnimationId);
		this.setstate(state.ready());

	}

	render(){
		const {diffrence} = this.state;
		const handredths =(diffrence
			? Math.floor(diffrence.getMilliseconds() / 10)
			: 0
			)
		.toString()
		.padStart(2, "0");

		const seconds =(diffrence ? Math.floor(diffrence.getseconds()):0)
			
		.toString()
		.padStart(2, "0");
		
		const minuts =(diffrence ? Math.floor(diffrence.getMinuts()):0)


		.toString()
		.padStart(2, "0");
		
   document.getElementById("minuts").textContent = minuts;
   document.getElementById("seconds").textContent = seconds;
   document.getElementById("handredths").textContent = handredths;


	}
}
const STOPWATCH = stopwatch.ready();
