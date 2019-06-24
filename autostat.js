//Health
	function update_hpCalc() {
		document.forms['sheet']['hpCurMax'].value = 
			+document.forms['sheet']['hpPts'].value + +document.forms['sheet']['hpMod'].value;
		document.getElementById('hpCur').max =
			+document.forms['sheet']['hpCurMax'].value;
		document.getElementById('hpPts').max =
			+document.forms['sheet']['hpPtsMax'].value;
		}

//Energy
	function update_enCalc() {
		document.forms['sheet']['enCurMax'].value = 
			+document.forms['sheet']['enPts'].value + +document.forms['sheet']['enMod'].value;
		document.getElementById('enCur').max =
			+document.forms['sheet']['enCurMax'].value;
		document.getElementById('enPts').max =
			+document.forms['sheet']['enPtsMax'].value;
		}
		
//Knowledge
	function update_knCalc() {
		document.forms['sheet']['knCurMax'].value = 
			2 * (+document.forms['sheet']['knPts'].value + +document.forms['sheet']['knMod'].value);
		document.getElementById('knCur').max =
			+document.forms['sheet']['knCurMax'].value;
		document.getElementById('knPts').max =
			+document.forms['sheet']['knPtsMax'].value;
		}
	
//Initiative
	function update_init() {
		document.forms['sheet']['initPts'].value =
			+document.forms['sheet']['spd'].value + +document.forms['sheet']['SKLper'].value;
		document.forms['sheet']['initCur'].value = 
			+document.forms['sheet']['initPts'].value + +document.forms['sheet']['initMod'].value;
		} 

//Attack
	function update_atk() {
		document.forms['sheet']['atk'].value = 
			+document.forms['sheet']['atkPts'].value + +document.forms['sheet']['atkMod'].value;
		document.getElementById('atkPts').max =
			+document.forms['sheet']['atkPtsMax'].value;
	}
//Defence
	function update_def() {
		document.forms['sheet']['def'].value = 
			+document.forms['sheet']['defPts'].value + +document.forms['sheet']['defMod'].value;
		document.getElementById('defPts').max =
			+document.forms['sheet']['defPtsMax'].value;
	}
//Agility
	function update_agi() {
		document.forms['sheet']['agi'].value = 
			+document.forms['sheet']['agiPts'].value + +document.forms['sheet']['agiMod'].value;
		document.getElementById('agiPts').max =
			+document.forms['sheet']['agiPtsMax'].value;
	}
//Speed
	function update_spd() {
		document.forms['sheet']['spd'].value = 
			+document.forms['sheet']['spdPts'].value + +document.forms['sheet']['spdMod'].value;
		document.getElementById('spdPts').max =
			+document.forms['sheet']['spdPtsMax'].value;
	}

//Physical
//Acrobatics
	function update_acro() {
		document.forms['sheet']['acroSkl'].value = 
			+document.forms['sheet']['acroPts'].value + +document.forms['sheet']['acroMod'].value;
	}
//Athletics
	function update_athl() {
		document.forms['sheet']['athlSkl'].value = 
			+document.forms['sheet']['athlPts'].value + +document.forms['sheet']['athlMod'].value;
	}
//Combat
	function update_comb() {
		document.forms['sheet']['combSkl'].value = 
			+document.forms['sheet']['combPts'].value + +document.forms['sheet']['combMod'].value;
	}
//Stealth
	function update_stea() {
		document.forms['sheet']['steaSkl'].value = 
			+document.forms['sheet']['steaPts'].value + +document.forms['sheet']['steaMod'].value;
	}

//Mental
//Investigation
	function update_inve() {
		document.forms['sheet']['inveSkl'].value = 
			+document.forms['sheet']['invePts'].value + +document.forms['sheet']['inveMod'].value;
	}
//Medicine
	function update_medi() {
		document.forms['sheet']['mediSkl'].value = 
			+document.forms['sheet']['mediPts'].value + +document.forms['sheet']['mediMod'].value;
	}
//Perception
	function update_perc() {
		document.forms['sheet']['percSkl'].value = 
			+document.forms['sheet']['percPts'].value + +document.forms['sheet']['percMod'].value;
	}
//Survival
	function update_surv() {
		document.forms['sheet']['survSkl'].value = 
			+document.forms['sheet']['survPts'].value + +document.forms['sheet']['survMod'].value;
	}

//Social
//Command
	function update_comm() {
		document.forms['sheet']['commSkl'].value = 
			+document.forms['sheet']['commPts'].value + +document.forms['sheet']['commMod'].value;
	}
//Deception
	function update_dece() {
		document.forms['sheet']['deceSkl'].value = 
			+document.forms['sheet']['decePts'].value + +document.forms['sheet']['deceMod'].value;
	}
//Intuition
	function update_intu() {
		document.forms['sheet']['intuSkl'].value = 
			+document.forms['sheet']['intuPts'].value + +document.forms['sheet']['intuMod'].value;
	}
//Persuasion
	function update_pers() {
		document.forms['sheet']['persSkl'].value = 
			+document.forms['sheet']['persPts'].value + +document.forms['sheet']['persMod'].value;
	}

//Magic
//Channelling
	function update_chan() {
		document.forms['sheet']['chanSkl'].value = 
			+document.forms['sheet']['chanPts'].value + +document.forms['sheet']['chanMod'].value;
	}
//Divining
	function update_divi() {
		document.forms['sheet']['diviSkl'].value = 
			+document.forms['sheet']['diviPts'].value + +document.forms['sheet']['diviMod'].value;
	}
//Focus
	function update_focu() {
		document.forms['sheet']['focuSkl'].value = 
			+document.forms['sheet']['focuPts'].value + +document.forms['sheet']['focuMod'].value;
	}
//Summoning
	function update_summ() {
		document.forms['sheet']['summSkl'].value = 
			+document.forms['sheet']['summPts'].value + +document.forms['sheet']['summMod'].value;
	}