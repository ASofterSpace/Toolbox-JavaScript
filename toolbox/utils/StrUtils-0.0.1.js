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

	/**
	 * Replaces all occurrences of findThis in a string with replaceWith
	 * This does NOT use a regex, or any other nonsense - just plain string comparison
	 * Also, this only replaces all once - call replaceAllRepeatedly if you want to ensure
	 * that the result does not contain any occurrences of findThis anymore at all
	 * (With this method, if origStr is "foobar", and findThis is "o" and replaceWith is "oo",
	 * we return "foooobar" instead of looping forever)
	 */
	replaceAll: function(origStr, findThis, replaceWith) {
		if (origStr == null) {
			return null;
		}
		if (findThis == null) {
			return origStr;
		}
		if (replaceWith == null) {
			replaceWith = "";
		}
		var result = "";
		var index = origStr.indexOf(findThis);
		while (index >= 0) {
			result += origStr.substr(0, index);
			result += replaceWith;
			// TODO :: improve speed by not calling substr but keeping track of start!
			origStr = origStr.substr(index + findThis.length);
			index = origStr.indexOf(findThis);
		}
		result += origStr;
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
