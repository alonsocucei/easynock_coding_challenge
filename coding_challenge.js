areAnyRulesInBoth = function (failedRules, executedRules) {
  if (! (Array.isArray(failedRules) && Array.isArray(executedRules))) {
    throw new TypeError("Both arguments must be of type array.");
  }

  const failedRulesSet = new Set();

  failedRules.forEach(r => failedRulesSet.add(r));
  return executedRules.some(r => failedRulesSet.has(r));
}