/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 */

(function() {

var StringifierGeneric = {

	getString: function(orig) {
		if (orig == null) {
			return "";
		}
		return "" + orig;
	},

};


if (window.toolbox) {
	if (window.toolbox.utils) {
		window.toolbox.utils.StringifierGeneric = StringifierGeneric;
	} else {
		window.toolbox.utils = {
			StringifierGeneric: StringifierGeneric
		};
	}
} else {
	window.toolbox = {
		utils: {
			StringifierGeneric: StringifierGeneric
		}
	};
}

})();
