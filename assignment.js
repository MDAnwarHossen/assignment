
// --Feet to mile conversion--
function feetToMile(feet) {

    if (feet >= 0) {
      let result = feet / 5280; //divide the length value by 5280
      result = result.toFixed(5);
      return result;
    }
    else {
      return "Distance cannot be negative!"; // Because distance should be always greater than zero.
    }
  }
  console.log("Distance is: "+feetToMile(25000));
  // --Feet to mile conversion END--
  
  
  
  
  
  // --Wood Cft Calculator--
  function woodCalculator(chair, table, bed) {
  
  if (chair >= 0  && table >= 0 && bed >= 0) {
  
    chair = parseInt(chair) * 1;  // Because 1 cft wood needed for 1 chair.
    table = parseInt(table) * 3;  // Because 3 cft wood needed for 1 table.
    bed = parseInt(bed) * 5;      // Because 5 cft wood needed for 1 bed.
  
    totalWood = chair + table + bed; // Addition
  
    return totalWood;
  
  } else {
      return "Please provide a valid number! The negative number can't be reasonable.";
  }
  }
  console.log("Lumber volume: "+woodCalculator(5, 10, 1));
  // --Wood Cft Calculator END--
  
  

  
  
  // --Brick Calculator-- 
  function brickCalculator(totalFloor) {

    if(totalFloor <= 0) {
        return "Please provide a valid number!";}

        else if (totalFloor <= 10) {
        return totalFloor * 15 * 1000;} //Function to calculate less than equal 10 floors.
            
        else if(totalFloor <= 20){
        return (10 * 15 * 1000) + (totalFloor - 10) * 12 * 1000;} //Function to calculate less than equal 20 floors.
    
    else{
      return (10 * 15 * 1000) + (10 * 12 * 1000) + (totalFloor-20) *10 * 1000;} //Function to calculate higher than 20 floors.
    }
  console.log("Total Bricks needed: "+brickCalculator(11));
  // --Brick Calculator END --
  
  
  
  

   //--Tiny Friend Function --
  function tinyFriend(names) {

    //If empty element found in names[0], this code will increase it's value
      if (names[0] == " " ){
        tiny = names[0] +10;}
      else{ tiny = names[0];}

    
        //Loop iteration
      for (let i = 0; i < names.length; i++) {
            let tinyName = names[i];
         
        //comparison 
        if (tinyName.length < tiny.length && tinyName != " ") {
            tiny = tinyName;
        } 
      }
      return tiny;
  }
  console.log("Your tiny friend name is :"+tinyFriend([" ", "Anwar", "Sakib", " ", "Apu", "Deva", "Shifter", "AN", "Triton","Betod", "Nelihr"]));
  //--Tiny Friend Function END--
  