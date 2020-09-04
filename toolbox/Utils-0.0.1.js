/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 */

(function() {

var Utils = {

	TOOLBOX_VERSION_NUMBER: 2,

	// these values are set once at the startup of the program which contains
	// the Utils and are constant from then onwards
	PROGRAM_TITLE: null,
	VERSION_NUMBER: null,
	VERSION_DATE: null,


	setProgramTitle: function(programTitle) {
		this.PROGRAM_TITLE = programTitle;
	},

	setVersionNumber: function(versionNumber) {
		this.VERSION_NUMBER = versionNumber;
	},

	setVersionDate: function(versionDate) {
		this.VERSION_DATE = versionDate;
	},

	getProgramTitle: function() {
		return PROGRAM_TITLE;
	},

	getVersionNumber: function() {
		return VERSION_NUMBER;
	},

	getVersionDate: function() {
		return VERSION_DATE;
	},

	getFullProgramIdentifier: function() {
		return "A Softer Space " + this.getProgramTitle() + " version " + this.getVersionNumber();
	},

	getFullProgramIdentifierWithDate: function() {
		return this.getFullProgramIdentifier() + " (" + this.getVersionDate() + ")";
	},

	/**
	 * Writes a log line to standard out together with debug information (the current time and JVM heap size)
	 */
	debuglog: function(logline) {

		var machineInfo = "";

		if (navigator && navigator.oscpu) {
			machineInfo = "[" + navigator.oscpu + "]";
		}

		console.log(toolbox.utils.DateUtils.DEFAULT_TIME_FORMAT.format(new Date()) + " " + machineInfo + ": " + logline);
	},

};


if (window.toolbox) {
	window.toolbox.Utils = Utils;
} else {
	window.toolbox = {
		Utils: Utils
	};
}

})();
