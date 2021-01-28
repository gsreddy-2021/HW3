function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride)

  if (ride.length > 1 || ride[0].numberofPassengers == 1) {
    levelOfService = 'Noober Pool'      //Single riders can be part of Noober pool
  } else if (ride[0].purpleRequested == true) {
    levelOfService = 'Noober Purple'    //If the passenger requests level of service as purple
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'        //If the ride opts for a larger car with more than 3 passengers
  } else {levelOfService = 'Noober X'}  //This is the normal level of service without any exceptions


  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  // levelOfService
  //Sets the title of the page
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}