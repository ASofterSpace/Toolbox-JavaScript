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

	// insert generic text to an open textarea based on an event
	insertText: function(textarea, toInsert, event) {
		var start = textarea.selectionStart;
		var end = textarea.selectionEnd;
		textarea.value =
			textarea.value.substring(0, start) +
			toInsert +
			textarea.value.substring(end);
		textarea.selectionStart = start + toInsert.length;
		textarea.selectionEnd = start + toInsert.length;
	},

	// add a date-time-stamp to an open textarea based on an event
	addDateTimeStamp: function(textarea, event) {
		var datetimestamp = toolbox.utils.DateUtils.getCurrentDateTimeStamp();
		this.insertText(textarea, datetimestamp, event);
	},

	// indent or unindent several lines in an open textarea based on an event
	indentOrUnindent(textarea, event) {
		var start = textarea.selectionStart;
		var end = textarea.selectionEnd;
		var val = textarea.value;
		// if this comes back as -1, we add 1 and are at 0, which is exactly what we want :)
		start = val.lastIndexOf("\n", start) + 1;
		var indented = val.substring(start, end).split("\n");
		for (var i = 0; i < indented.length; i++) {
			if (event.shiftKey) {
				// un-indent
				if (indented[i].substring(0, 1) == "\t") {
					indented[i] = indented[i].substring(1);
				} else if (indented[i].substring(0, 4) == "    ") {
					indented[i] = indented[i].substring(4);
				} else if (indented[i].substring(0, 3) == "   ") {
					indented[i] = indented[i].substring(3);
				} else if (indented[i].substring(0, 2) == "  ") {
					indented[i] = indented[i].substring(2);
				} else if (indented[i].substring(0, 1) == " ") {
					indented[i] = indented[i].substring(1);
				}
			} else {
				// indent
				if (indented[i].trim() != "") {
					indented[i] = "\t" + indented[i];
				}
			}
		}
		var indentedVal = indented.join("\n");
		textarea.value =
			val.substring(0, start) +
			indentedVal +
			val.substring(end);
		textarea.selectionStart = start;
		textarea.selectionEnd = start + indentedVal.length;
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
