/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 */

(function() {

var DateUtils = {

	DAY_NAMES: ["Sunday", "Monday",
		"Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],

	MONTH_NAMES: ["January", "February", "March",
		"April", "May", "June", "July", "August", "September", "October", "November", "December"],


	now: function() {
		return new Date();
	},

	/**
	 * Serializes a date-time as e.g. 12th of October 2020, 15:37
	 * (when we are unsure about the date, we probably don't need the seconds and milliseconds!)
	 */
	serializeDateTimeLong: function(datetime) {
		return this.serializeDateTimeLong(datetime, null, null);
	},

	/**
	 * Serializes a date-time as e.g. 12<span class="sup">th</span> of October 2020, 15:37
	 */
	serializeDateTimeLong: function(datetime, beforeUp, afterUp) {

		if (datetime == null) {
			return null;
		}

		var day = this.getDayOfMonth(datetime);

		var result = "";

		result += day;

		if (beforeUp != null) {
			result += beforeUp;
		}

		switch (day) {
			case 1:
			case 21:
			case 31:
				result += "st";
				break;
			case 2:
			case 22:
			case 32:
				result += "nd";
				break;
			case 3:
			case 23:
			case 33:
				result += "rd";
				break;
			default:
				result += "th";
				break;
		}

		if (afterUp != null) {
			result += afterUp;
		}

		result += " of ";

		result += this.getMonthNameEN(datetime);
		result += " ";
		result += this.getYear(datetime);

		return result + ", " + this.serializeTimeShort(datetime);
	},

	serializeTimeShort: function(time) {

		if (time == null) {
			return null;
		}

		var StrUtils = toolbox.utils.StrUtils;
		return StrUtils.leftPad0(time.getHours(), 2) + ":" + StrUtils.leftPad0(time.getMinutes(), 2);
	},

	getDayOfMonth: function(date) {
		if (date == null) {
			return null;
		}
		return date.getDate();
	},

	getDayOfWeek: function(someDate) {
		if (someDate == null) {
			return null;
		}
		return someDate.getDay();
	},

	getDayOfWeekNameEN: function(someDate) {
		var val = this.getDayOfWeek(someDate);
		if (val == null) {
			return "Nonday";
		}
		return this.DAY_NAMES[val];
	},

	/**
	 * Gets the month number, January is 1
	 */
	getMonth: function(date) {
		if (date == null) {
			return null;
		}
		return date.getMonth() + 1;
	},

	getMonthNameEN: function(date) {
		var val = this.getMonth(date);
		if (val == null) {
			return "Nonuary";
		}
		return this.MONTH_NAMES[val - 1];
	},

	getYear: function(date) {
		if (date == null) {
			return null;
		}
		return date.getFullYear();
	},

	getCurrentDateTimeStamp: function() {
		var StrUtils = toolbox.utils.StrUtils;
		var date = new Date();
		var day = StrUtils.leftPad0(date.getDate(), 2);
		var month = StrUtils.leftPad0(date.getMonth() + 1, 2);
		var year = StrUtils.leftPad0(date.getFullYear(), 4);
		var hours = StrUtils.leftPad0(date.getHours(), 2);
		var minutes = StrUtils.leftPad0(date.getMinutes(), 2);
		var seconds = StrUtils.leftPad0(date.getSeconds(), 2);
		var weekday = this.DAY_NAMES[date.getDay()];
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
