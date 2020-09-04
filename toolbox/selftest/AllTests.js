/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 *
 * This class is not versioned, as it is just used internally for running tests,
 * but not supposed to be shipped to a user.
 */

(function() {

var AllTests = {

	main: function(args) {

		var TestUtils = toolbox.test.TestUtils;

		TestUtils.startSuite();

		TestUtils.run(toolbox.selftest.StrUtilsTest);

		TestUtils.run(toolbox.selftest.SortUtilsTest);

		TestUtils.endSuite();

		if (TestUtils.allWereSuccessful()) {
			return 0;
		} else {
			return 1;
		}
	},

};


if (window.toolbox) {
	if (window.toolbox.selftest) {
		window.toolbox.selftest.AllTests = AllTests;
	} else {
		window.toolbox.selftest = {
			AllTests: AllTests
		};
	}
} else {
	window.toolbox = {
		selftest: {
			AllTests: AllTests
		}
	};
}

})();
