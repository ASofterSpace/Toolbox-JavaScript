/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 *
 * This class is not versioned, as it is just used internally for running tests,
 * but not supposed to be shipped to a user.
 */

(function() {

var SortUtilsTest = {

	runAll: function() {

		this.shuffleTest();

		this.reverseTest();

		this.sortNumericallyTest();
	},

	shuffleTest: function() {

		var TestUtils = toolbox.test.TestUtils;

		TestUtils.start("Shuffle");

		var SortUtils = toolbox.utils.SortUtils;

		var list = [];
		list.push("foo");
		list.push("bar");
		list.push("zoink");
		list.push("ploink");
		list.push("woink");

		var maxNum = 100;

		while (maxNum > 0) {
			maxNum--;

			var resList = SortUtils.shuffle(list);

			if (resList[0] != list[0] ||
				resList[1] != list[1] ||
				resList[2] != list[2] ||
				resList[3] != list[3] ||
				resList[4] != list[4]) {
				TestUtils.succeed();
				return;
			}
		}

		TestUtils.fail("After 100 runs, SortUtils.shuffle(list) never produced a result different from list!");
	},

	reverseTest: function() {

		var TestUtils = toolbox.test.TestUtils;

		TestUtils.start("Reverse");

		var SortUtils = toolbox.utils.SortUtils;

		var list = [];
		list.push("foo");
		list.push("bar");
		list.push("zoink");

		var resList = SortUtils.reverse(list);

		if (list[0] != "foo") {
			TestUtils.fail("SortUtils.reverse(list) changed the contents of the list we passed in!");
		}

		var i = 0;

		if (resList[i] != "zoink") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "bar") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "foo") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		TestUtils.succeed();
	},

	sortNumericallyTest: function() {

		var TestUtils = toolbox.test.TestUtils;

		TestUtils.start("Sort Numerically");

		var SortUtils = toolbox.utils.SortUtils;

		var list = [];
		list.push("FOOBAR-1");
		list.push("FOOBAR-11");
		list.push("FOOBAR-2");
		list.push("FOOBAR-47");
		list.push("FOOBAR-5");
		list.push("FOOBAR-16");
		list.push("anloInk");
		list.push("ASLUAR");
		list.push("Xentan");
		list.push("FOOBAR-124");
		list.push("FOOBAR-3");
		list.push("xoro");

		var resList = SortUtils.sortNumerically(list);

		if (list[0] != "FOOBAR-1") {
			TestUtils.fail("SortUtils.sortNumerically(list) changed the contents of the list we passed in!");
		}

		var i = 0;

		if (resList[i] != "anloInk") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "ASLUAR") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "FOOBAR-1") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "FOOBAR-2") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "FOOBAR-3") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "FOOBAR-5") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "FOOBAR-11") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "FOOBAR-16") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "FOOBAR-47") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "FOOBAR-124") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "Xentan") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		if (resList[i] != "xoro") {
			TestUtils.fail("Result #" + i + " is wrong!");
		}
		i++;

		TestUtils.succeed();
	},

};


if (window.toolbox) {
	if (window.toolbox.selftest) {
		window.toolbox.selftest.SortUtilsTest = SortUtilsTest;
	} else {
		window.toolbox.selftest = {
			SortUtilsTest: SortUtilsTest
		};
	}
} else {
	window.toolbox = {
		selftest: {
			SortUtilsTest: SortUtilsTest
		}
	};
}

})();
