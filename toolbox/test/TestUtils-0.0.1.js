/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 */

(function() {

/**
 * Utility class used for testing stuff
 */
var TestUtils = {

	testsRun: 0,
	testsSuccess: 0,
	testsFailed: 0,

	// 0 .. no info
	// 1 .. fail
	// 2 .. success
	currentVerdict: 0,

	currentTest: "none",

	logFunction: {
		log: function(logline) {
			console.log(logline);
		},
	},


	/**
	 * Starts a Test run with a given name
	 */
	start: function(testName) {

		this.finalizePreviousTest();

		this.currentVerdict = 0;
		this.currentTest = testName;

		this.logFunction.log("Starting the " + this.currentTest + " Test...");
	},

	/**
	 * Indicates that the last test was a success, unless fail or succeed
	 * has already been called before
	 */
	succeed: function() {

		if (this.currentVerdict == 0) {
			this.currentVerdict = 2;

			this.logFunction.log("The " + this.currentTest + " Test succeeded! Whoop whoop!");
			this.logFunction.log("");
		}
	},

	/**
	 * Indicates that the last test was a failure, unless fail or succeed
	 * has already been called before
	 */
	fail(reason) {

		if (this.currentVerdict == 0) {
			this.currentVerdict = 1;

			this.logFunction.log("The " + this.currentTest + " Test failed... oh no!");
			this.logFunction.log("Reason: " + reason);
			this.logFunction.log("");
		}
	},

	/**
	 * Starts a Test Suite consisting of several tests
	 */
	startSuite() {

		this.testsRun = 0;
		this.testsSuccess = 0;
		this.testsFailed = 0;
		this.currentVerdict = -1;

		this.logFunction.log("");
		this.logFunction.log("------------------------------");
		this.logFunction.log("The test suite is starting...");
		this.logFunction.log("------------------------------");
		this.logFunction.log("");
	},

	/**
	 * Runs a test within the test suite
	 */
	run: function(test) {

		try {

			test.runAll();

		} catch (t) {

			this.fail("There was an exception:\n" + t);
			this.logFunction.log("");
		}
	},

	/**
	 * Ends a Test Suite consisting of several tests
	 */
	endSuite: function() {

		this.finalizePreviousTest();

		this.logFunction.log("------------------------------");
		this.logFunction.log("The test suite has finished!");
		var testsRunStr = "";
		if (this.testsRun == 1) {
			testsRunStr = "1 test has";
		} else {
			testsRunStr = this.testsRun + " tests have";
		}
		this.logFunction.log(testsRunStr + " been run.");
		var testResultStr = "There ";
		if (this.testsSuccess + this.testsFailed == 1) {
			testResultStr += "was ";
		} else {
			testResultStr += "were ";
		}
		if (this.testsSuccess == 1) {
			testResultStr += "1 success";
		} else {
			testResultStr += this.testsSuccess + " successes";
		}
		testResultStr += " and ";
		if (this.testsFailed == 1) {
			testResultStr += "1 failure.";
		} else {
			testResultStr += this.testsFailed + " failures.";
		}
		this.logFunction.log(testResultStr);
		this.logFunction.log("------------------------------");
	},

	/**
	 * Were all the tests that have been run (so far) successful?
	 */
	allWereSuccessful: function() {
		return this.testsSuccess == this.testsRun;
	},

	finalizePreviousTest: function() {

		// we already call finalizePreviousTest() as the start of the very first test... do nothing then!
		if (this.currentVerdict < 0) {
			return;
		}

		this.testsRun++;

		if (this.currentVerdict == 0) {
			this.fail("TestUtils.succeed() was not reached!");
		}

		if (this.currentVerdict == 1) {
			this.testsFailed++;
		}

		if (this.currentVerdict == 2) {
			this.testsSuccess++;
		}

		this.currentVerdict = 0;
	},

	setLogFunction: function(logFunction) {
		this.logFunction = logFunction;
	},

};


if (window.toolbox) {
	if (window.toolbox.test) {
		window.toolbox.test.TestUtils = TestUtils;
	} else {
		window.toolbox.test = {
			TestUtils: TestUtils
		};
	}
} else {
	window.toolbox = {
		test: {
			TestUtils: TestUtils
		}
	};
}

})();
