/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 */

(function() {

var DateUtils = {

	getCurrentDateTimeStamp: function() {
		var StrUtils = toolbox.utils.StrUtils;
		var date = new Date();
		var day = StrUtils.leftPad0(date.getDate(), 2);
		var month = StrUtils.leftPad0(date.getMonth() + 1, 2);
		var year = StrUtils.leftPad0(date.getFullYear(), 4);
		var hours = StrUtils.leftPad0(date.getHours(), 2);
		var minutes = StrUtils.leftPad0(date.getMinutes(), 2);
		var seconds = StrUtils.leftPad0(date.getSeconds(), 2);
		var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		var weekday = WEEKDAYS[date.getDay()];
		return year + "-" + month + "-" + day + ", " + weekday + ", " + hours + ":" + minutes + ":" + seconds;
	},

};


if (window.toolbox) {
	if (window.toolbox.utils) {
		window.toolbox.utils.DateUtils = DateUtils;
	} else {
		window.toolbox.utils = {
			DateUtils: DateUtils
		};
	}
} else {
	window.toolbox = {
		utils: {
			DateUtils: DateUtils
		}
	};
}

})();
