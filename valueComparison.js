// Find the elements in an array Y, that are equal to a given variable X.
// For example…
// elementsEqualToX(Y, X)
// elementsEqualToX(['a' ,'a' ,'b' ,'f' ,'x' ,'y'], 'a') to return ['a', 'a']
// elementsEqualToX(['t' ,'3' ,3 ,3, '5', 'v'], 3) to return  [3, 3]
// elementsEqualToX([4, 6, 2, 6, 7, '7'], '7') to return ['7']

function elementsEqualToX(array, variable) {
  return array.filter((value) => value === variable);
}
elementsEqualToX(["a", "a", "b", "f", "x", "y"], "a");
elementsEqualToX(["t", "3", 3, 3, "5", "v"], 3);
elementsEqualToX([4, 6, 2, 6, 7, "7"], "7");
