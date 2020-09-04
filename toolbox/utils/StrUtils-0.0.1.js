/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 */

(function() {

var StrUtils = {

	leftPadW: function(origStr, length) {
		return this.leftPad(origStr, ' ', length);
	},

	leftPad0: function(origStr, length) {
		return this.leftPad(origStr, '0', length);
	},

	/**
	 * Takes a string, e.g. blubb, and leftpads it with a character, e.g. _,
	 * until it reaches a certain length, e.g. 7 - which would give __blubb.
	 * If length is smaller than the length of origStr, origStr will be
	 * returned without change - it will NOT be truncated!
	 */
	leftPad: function(origStr, padWith, length) {

		var result = "" + origStr;

		while (result.length < length) {
			result = "" + padWith + result;
		}

		return result;
	},

};


if (window.toolbox) {
	if (window.toolbox.utils) {
		window.toolbox.utils.StrUtils = StrUtils;
	} else {
		window.toolbox.utils = {
			StrUtils: StrUtils
		};
	}
} else {
	window.toolbox = {
		utils: {
			StrUtils: StrUtils
		}
	};
}

})();
