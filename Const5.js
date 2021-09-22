const obj = {
    name: "Aachal",
  };
  
  obj.name = "Updated";
  
  console.log(obj.name); // "Updated"


  //Elements of a constant object can be updated.
  //when we assign an object to a constant variable, only the reference 
  //of the object is saved in the variable. 
  //Even when we update the object elements,the reference does not change.
  // When the reference is kept constant, there will not be any error.