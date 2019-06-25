//roll calc
var dice_cnt = 1;
var dice_list = [];
var dice_wins = 0;
var win_min = 4;

function dice_roll() {
	//Reset values
	dice_list = [];
	dice_wins = 0;
	var dice_temp = 0;
	
	//generate random number list
	while (dice_temp < dice_cnt) {
		//gen random numbers 1-6 and add to list
		dice_list.push(Math.floor(Math.random() * 6) + 1);
		dice_temp += 1;
	}
	dice_list.forEach(win_counter);
}

function win_counter(value) {
	if (value >= win_min) {
		dice_wins += 1;
	};
}

//Initiative
//Attack
function roll_atk() {
	dice_cnt = +document.forms['sheet']['atk'].value;
	//add buff modifier
	dice_roll();
	alert(dice_wins + " Successes!");
}
//Defence
//Agility
//Speed

//Skills
//Acrobatics, Athletics, Combat, Stealth
//Investigate, Medicine, Perception, Survival
//Command, Deception, Intuition, Persuasion
//Channelling, Divining, Focus, Summoning

//Item use
//Gear say
//Condition roll
//buff roll
//ability say/roll
//move roll
//feat say