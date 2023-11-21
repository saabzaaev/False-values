// 1. False
// 2. 0
// 3. ""
// 4. Undefind
// 5. Null

// False == 0 => true
console.log(false == 0);

// False == "" => true
console.log(false == "");

// False == undefind => false
console.log(false == undefined );

// False == Null => false
console.log(false == null );

// 0 == "" => true
console.log(0 == "");

// 0 == undefind => true
console.log(0 == undefined);

// 0 == null => false
console.log(0 == null);

// "" == undefind => false
console.log("" == undefined);

// "" == null => false
console.log("" == null);

// undefind == null => true
console.log(undefined == null);