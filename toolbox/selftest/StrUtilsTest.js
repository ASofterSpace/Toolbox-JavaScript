/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 *
 * This class is not versioned, as it is just used internally for running tests,
 * but not supposed to be shipped to a user.
 */

(function() {

var StrUtilsTest = {

	runAll: function() {

		this.leftPadTest();
	},

	leftPadTest: function() {

		var TestUtils = toolbox.test.TestUtils;

		TestUtils.start("Left Pad");

		var StrUtils = toolbox.utils.StrUtils;

		var result = StrUtils.leftPadW(13, 3);
		if (result != " 13") {
			TestUtils.fail("We called leftPadW(13, 3) and got '" + result + "'!");
		}

		result = StrUtils.leftPadW("27398", 4);
		if (result != "27398") {
			TestUtils.fail("We called leftPadW(\"27398\", 4) and got '" + result + "'!");
		}

		result = StrUtils.leftPad0(27398, -1);
		if (result != "27398") {
			TestUtils.fail("We called leftPad0(27398, -1) and got '" + result + "'!");
		}

		result = StrUtils.leftPad0("27398", 10);
		if (result != "0000027398") {
			TestUtils.fail("We called leftPad0(\"27398\", 10) and got '" + result + "'!");
		}

		result = StrUtils.leftPad(3, 'b', 7);
		if (result != "bbbbbb3") {
			TestUtils.fail("We called leftPad(3, 'b', 7) and got '" + result + "'!");
		}

		result = StrUtils.leftPad("blubb", 'f', 6);
		if (result != "fblubb") {
			TestUtils.fail("We called leftPad(\"blubb\", 'f', 6) and got '" + result + "'!");
		}

		TestUtils.succeed();
	},

};


if (window.toolbox) {
	if (window.toolbox.selftest) {
		window.toolbox.selftest.StrUtilsTest = StrUtilsTest;
	} else {
		window.toolbox.selftest = {
			StrUtilsTest: StrUtilsTest
		};
	}
} else {
	window.toolbox = {
		selftest: {
			StrUtilsTest: StrUtilsTest
		}
	};
}

})();
