// function displayUserSecond({favoriteColor, firstName : fname})
// const {firstName, favoriteColor} = userObj;
function displayStudentInfo(objUser){
    const {first : fname, last : lname} = objUser
    console.log(`your full name is ${fname} ${lname}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Using the code above, destructure the parameter inside the
//  function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'
