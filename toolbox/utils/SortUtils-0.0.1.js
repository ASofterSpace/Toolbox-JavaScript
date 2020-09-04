/**
 * Unlicensed code created by A Softer Space, 2020
 * www.asofterspace.com/licenses/unlicense.txt
 */

(function() {

var SortUtils = {

	shuffle: function(listToShuffle) {
		var newList = [];
		if (listToShuffle == null) {
			return newList;
		}
		var removeList = listToShuffle.concat([]);
		while (removeList.length > 0) {
			var randIndex = Math.floor(Math.random() * removeList.length);
			newList.push(removeList.splice(randIndex, 1)[0]);
		}
		return newList;
	},

	reverse: function(listToReverse) {
		if (listToReverse == null) {
			return [];
		}
		var newList = listToReverse.concat([]);
		newList.reverse();
		return newList;
	},

	sortNumerically: function(listToSort, stringifier) {

		if (listToSort == null) {
			return [];
		}

		if (stringifier == null) {
			stringifier = toolbox.utils.StringifierLowCase;
		}

		var newList = listToSort.concat([]);

		newList.sort(
			function(a, b) {

				// we want to sort such that ISSUE-2 comes before ISSUE-11, which comes before ISSUE-300...
				// soooo let's see first of all if the first character that is different is a digit -
				// if no, then we can just sort regularly as the letters are sorted alphabetically, fine...
				// if yes, then we carry on gobbling digits, and when there are no more, then we want to
				// add zeroes and THEN compare...
				var bLow = stringifier.getString(b);
				var aLow = stringifier.getString(a);
				for (var i = 0; i < bLow.length; i++) {
					if (i >= aLow.length) {
						return -1;
					}
					var ca = aLow[i];
					var cb = bLow[i];
					if ((ca >= '0') && (ca <= '9') && (cb >= '0') && (cb <= '9')) {
						bLow = bLow.substring(i);
						aLow = aLow.substring(i);
						var aj = 0;
						var bj = 0;
						for (; bj < bLow.length; bj++) {
							if (!((bLow[bj] >= '0') && (bLow[bj] <= '9'))) {
								break;
							}
						}
						for (; aj < aLow.length; aj++) {
							if (!((aLow[aj] >= '0') && (aLow[aj] <= '9'))) {
								break;
							}
						}
						while (aj < bj) {
							aLow = "0" + aLow;
							aj++;
						}
						while (bj < aj) {
							bLow = "0" + bLow;
							bj++;
						}
						for (var j = 0; j < aj; j++) {
							if (aLow[j] != bLow[j]) {
								return aLow[j] - bLow[j];
							}
						}
						aLow = aLow.substring(aj);
						bLow = bLow.substring(bj);
						i = -1;
					} else {
						if (ca == cb) {
							continue;
						}
						return ca.charCodeAt(0) - cb.charCodeAt(0);
					}
				}

				return 1;
			}
		);

		return newList;
	},

};


if (window.toolbox) {
	if (window.toolbox.utils) {
		window.toolbox.utils.SortUtils = SortUtils;
	} else {
		window.toolbox.utils = {
			SortUtils: SortUtils
		};
	}
} else {
	window.toolbox = {
		utils: {
			SortUtils: SortUtils
		}
	};
}

})();
