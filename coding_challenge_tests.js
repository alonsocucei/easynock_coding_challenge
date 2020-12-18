QUnit.test('There is a rule in both.',
  assert => {
    assert.true(areAnyRulesInBoth(["rule1"], ["rule1"]), "Same rule in both arrays.");
    assert.true(areAnyRulesInBoth(["rule1", "rule1"], ["rule1", "rule1"]), "Using repeated rules in both arrays.");
    assert.true(areAnyRulesInBoth(["rule1", "rule2"], ["rule3", "rule2"]), "Just one rule in both arrays.");
    assert.true(areAnyRulesInBoth(["rule1", "rule2"], ["rule1", "rule2"]), "Two rules in both arrays.");
    assert.true(areAnyRulesInBoth(["rule1", "rule2", "rule3"], ["rule1"]), "Three rules first array, one rule in second array.");
    assert.true(areAnyRulesInBoth(["rule1"], ["rule1", "rule2", "rule3"]), "One rule in first array, three rules in second array.");
  }
);

QUnit.test('No rule was in both arguments.',
  assert => {
    assert.false(areAnyRulesInBoth(["rule1"], ["rule2"]), "One rule per array.");
    assert.false(areAnyRulesInBoth(["rule1", "rule3"], ["rule2"]), "First array with 2 rules, second array with 1 rule.");
    assert.false(areAnyRulesInBoth(["rule2"], ["rule1", "rule3"]), "First array with 1 rule, second one with 2 rules.");
    assert.false(areAnyRulesInBoth(["rule1"], ["Rule1"]), "Different rules using uppercase.");
  }
);

QUnit.test('Empty rules.',
  assert => {
    assert.false(areAnyRulesInBoth([], []), "Both rules array are empty.");
    assert.false(areAnyRulesInBoth(["one"], []), "Second rule array is empty.");
    assert.false(areAnyRulesInBoth([], ["two"]), "First rule array is empty.");
  }
);

QUnit.test('Not a valid type.',
  assert => {
    assert.throws(() => areAnyRulesInBoth("", []), new TypeError("Both arguments must be of type array."), "First argument is a String.");
    assert.throws(() => areAnyRulesInBoth([], ""), new TypeError("Both arguments must be of type array."), "Second argument is a String.");
    assert.throws(() => areAnyRulesInBoth("", ""), new TypeError("Both arguments must be of type array."), "Both arguments are Strings.");
    assert.throws(() => areAnyRulesInBoth(undefined, []), new TypeError("Both arguments must be of type array."), "First argument is undefined.");
    assert.throws(() => areAnyRulesInBoth([], undefined), new TypeError("Both arguments must be of type array."), "Second argument is undefined.");
    assert.throws(() => areAnyRulesInBoth(undefined, undefined), new TypeError("Both arguments must be of type array."), "Both arguments are undefined.");
    assert.throws(() => areAnyRulesInBoth(null, []), new TypeError("Both arguments must be of type array."), "First argument is null.");
    assert.throws(() => areAnyRulesInBoth([], null), new TypeError("Both arguments must be of type array."), "Second argument is null.");
    assert.throws(() => areAnyRulesInBoth(null, null), new TypeError("Both arguments must be of type array."), "Both arguments are null.");
    assert.throws(() => areAnyRulesInBoth(null, undefined), new TypeError("Both arguments must be of type array."), "First argument is null and second argument is undefined.");
    assert.throws(() => areAnyRulesInBoth(undefined, null), new TypeError("Both arguments must be of type array."), "First argument is undefined and second argument is null.");
  }
);