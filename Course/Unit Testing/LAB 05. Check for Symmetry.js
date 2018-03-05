function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone + reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;
}

module.exports = {isSymmetric};

// console.log(isSymmetric([1,2,1]));
// console.log(isSymmetric([1,2]));

