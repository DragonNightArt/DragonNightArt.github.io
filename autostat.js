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

//Strength
	function update_atk() {
		document.forms['sheet']['atk'].value = 
			+document.forms['sheet']['atkPts'].value + +document.forms['sheet']['atkMod'].value;
		if (document.getElementById('atkVit').checked == true) {
			+document.forms['sheet']['atk'].value ++};
		document.getElementById('atkPts').max =
			+document.forms['sheet']['atkPtsMax'].value;
		}
	function update_SKLcomb() {
		document.forms['sheet']['SKLcomb'].value = 
			+document.forms['sheet']['SKLcombPts'].value + +document.forms['sheet']['SKLcombMod'].value;
		document.getElementById('SKLcombPts').max =
			+document.forms['sheet']['SKLcombPtsMax'].value;
		}
	function update_SKLinti() {
		document.forms['sheet']['SKLinti'].value = 
			+document.forms['sheet']['SKLintiPts'].value + +document.forms['sheet']['SKLintiMod'].value;
		document.getElementById('SKLintiPts').max =
			+document.forms['sheet']['SKLintiPtsMax'].value;
		}

//Vitality
	function update_def() {
		document.forms['sheet']['def'].value = 
			+document.forms['sheet']['defPts'].value + +document.forms['sheet']['defMod'].value;
		if (document.getElementById('defVit').checked == true) {
			+document.forms['sheet']['def'].value ++};
		document.getElementById('atkPts').max =
			+document.forms['sheet']['defPtsMax'].value;
		}
	function update_SKLathl() {
		document.forms['sheet']['SKLathl'].value = 
			+document.forms['sheet']['SKLathlPts'].value + +document.forms['sheet']['SKLathlMod'].value;
		document.getElementById('SKLathlPts').max =
			+document.forms['sheet']['SKLathlPtsMax'].value;
		}
	function update_SKLsurv() {
		document.forms['sheet']['SKLsurv'].value = 
			+document.forms['sheet']['SKLsurvPts'].value + +document.forms['sheet']['SKLsurvMod'].value;
		document.getElementById('SKLsurvPts').max =
			+document.forms['sheet']['SKLsurvPtsMax'].value;
		}
	
//Spirit
	function update_satk() {
		document.forms['sheet']['satk'].value = 
			+document.forms['sheet']['satkPts'].value + +document.forms['sheet']['atkMod'].value;
		if (document.getElementById('satkVit').checked == true) {
			+document.forms['sheet']['satk'].value ++};
		document.getElementById('satkPts').max =
			+document.forms['sheet']['satkPtsMax'].value;
		}
	function update_SKLcha() {
		document.forms['sheet']['SKLcha'].value = 
			+document.forms['sheet']['SKLchaPts'].value + +document.forms['sheet']['SKLchaMod'].value;
		document.getElementById('SKLchaPts').max =
			+document.forms['sheet']['SKLchaPtsMax'].value;
		}
	function update_SKLcomm() {
		document.forms['sheet']['SKLcomm'].value = 
			+document.forms['sheet']['SKLcommPts'].value + +document.forms['sheet']['SKLcommMod'].value;
		document.getElementById('SKLcommPts').max =
			+document.forms['sheet']['SKLcommPtsMax'].value;
		}
	function update_SKLfoc() {
		document.forms['sheet']['SKLfoc'].value = 
			+document.forms['sheet']['SKLfocPts'].value + +document.forms['sheet']['SKLfocMod'].value;
		document.getElementById('SKLfocPts').max =
			+document.forms['sheet']['SKLfocPtsMax'].value;
		}
	function update_SKLgui() {
		document.forms['sheet']['SKLgui'].value = 
			+document.forms['sheet']['SKLguiPts'].value + +document.forms['sheet']['SKLguiMod'].value;
		document.getElementById('SKLguiPts').max =
			+document.forms['sheet']['SKLguiPtsMax'].value;
		}
	function update_SKLintu() {
		document.forms['sheet']['SKLintu'].value = 
			+document.forms['sheet']['SKLintuPts'].value + +document.forms['sheet']['SKLintuMod'].value;
		document.getElementById('SKLintuPts').max =
			+document.forms['sheet']['SKLintuPtsMax'].value;
		}
	
//Intelligence
	function update_sdef() {
		document.forms['sheet']['sdef'].value = 
			+document.forms['sheet']['sdefPts'].value + +document.forms['sheet']['sdefMod'].value;
		if (document.getElementById('sdefVit').checked == true) {
			+document.forms['sheet']['sdef'].value ++};
		document.getElementById('sdefPts').max =
			+document.forms['sheet']['sdefPtsMax'].value;
		}
	function update_SKLgen() {
		document.forms['sheet']['SKLgen'].value = 
			+document.forms['sheet']['SKLgenPts'].value + +document.forms['sheet']['SKLgenMod'].value;
		document.getElementById('SKLgenPts').max =
			+document.forms['sheet']['SKLgenPtsMax'].value;
		}
	function update_SKLmed() {
		document.forms['sheet']['SKLmed'].value = 
			+document.forms['sheet']['SKLmedPts'].value + +document.forms['sheet']['SKLmedMod'].value;
		document.getElementById('SKLmedPts').max =
			+document.forms['sheet']['SKLmedPtsMax'].value;
		}
	function update_SKLocc() {
		document.forms['sheet']['SKLocc'].value = 
			+document.forms['sheet']['SKLoccPts'].value + +document.forms['sheet']['SKLoccMod'].value;
		document.getElementById('SKLoccPts').max =
			+document.forms['sheet']['SKLoccPtsMax'].value;
		}
	function update_SKLtech() {
		document.forms['sheet']['SKLtech'].value = 
			+document.forms['sheet']['SKLtechPts'].value + +document.forms['sheet']['SKLtechMod'].value;
		document.getElementById('SKLtechPts').max =
			+document.forms['sheet']['SKLtechPtsMax'].value;
		}
	function update_SKLpoke() {
		document.forms['sheet']['SKLpoke'].value = 
			+document.forms['sheet']['SKLpokePts'].value + +document.forms['sheet']['SKLpokeMod'].value;
		document.getElementById('SKLcpokePts').max =
			+document.forms['sheet']['SKLpokePtsMax'].value;
		}
	function update_SKLper() {
		document.forms['sheet']['SKLper'].value = 
			+document.forms['sheet']['SKLperPts'].value + +document.forms['sheet']['SKLperMod'].value;
		document.getElementById('SKLperPts').max =
			+document.forms['sheet']['SKLperPtsMax'].value;
		update_init();
		}
	function roll_SKLper() {
		}
	
//Dexterity
	function update_spd() {
		document.forms['sheet']['spd'].value = 
			+document.forms['sheet']['spdPts'].value + +document.forms['sheet']['spdMod'].value;
		if (document.getElementById('spdVit').checked == true) {
			+document.forms['sheet']['spd'].value ++};
		document.getElementById('spdPts').max =
			+document.forms['sheet']['spdPtsMax'].value;
		update_init();
		}
	function update_SKLacro() {
		document.forms['sheet']['SKLacro'].value = 
			+document.forms['sheet']['SKLacroPts'].value + +document.forms['sheet']['SKLacroMod'].value;
		document.getElementById('SKLacroPts').max =
			+document.forms['sheet']['SKLacroPtsMax'].value;
		}
	function update_SKLeva() {
		document.forms['sheet']['SKLeva'].value = 
			+document.forms['sheet']['SKLevaPts'].value + +document.forms['sheet']['SKLevaMod'].value;
		document.getElementById('SKLevaPts').max =
			+document.forms['sheet']['SKLevaPtsMax'].value;
		}
	function update_SKLstl() {
		document.forms['sheet']['SKLstl'].value = 
			+document.forms['sheet']['SKLstlPts'].value + +document.forms['sheet']['SKLstlMod'].value;
		document.getElementById('SKLstlPts').max =
			+document.forms['sheet']['SKLstlPtsMax'].value;
		}