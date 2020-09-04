/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 */

(function() {

var StringifierLowCase = {

	getString: function(orig) {
		if (orig == null) {
			return "";
		}
		var res = "" + orig;
		return res.toLowerCase();
	},

};


if (window.toolbox) {
	if (window.toolbox.utils) {
		window.toolbox.utils.StringifierLowCase = StringifierLowCase;
	} else {
		window.toolbox.utils = {
			StringifierLowCase: StringifierLowCase
		};
	}
} else {
	window.toolbox = {
		utils: {
			StringifierLowCase: StringifierLowCase
		}
	};
}

})();
