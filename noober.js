function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride)

  // levelOfService
  // Sets the title of the page

  if (ride.length > 1 || ride[0].numberofPassengers == 1) {
    levelOfService = 'HW3 Noober Pool'      //Single riders can be part of Noober pool
  } else if (ride[0].purpleRequested == true) {
    levelOfService = 'HW3 Noober Purple'    //If the passenger requests level of service as purple
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'HW3 Noober XL'        //If the ride opts for a larger car with more than 3 passengers
  } else {levelOfService = 'HW3 Noober X'}  //This is the normal level of service without any exceptions

  console.log(levelOfService)

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable
  
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers (went with rubric instructions and put this at last)
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2

  // Now we start setting the passenger or ride details such as Name, Phone, Pickup & Dropoff location and #ofpassengers by ride

  if (ride.length == 1){
    passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
    passenger1Phone = ride[0].passengerDetails.phoneNumber
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address
    passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
    passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip
    passenger1NumberOfPassengers = ride[0].numberOfPassengers
    console.log(passenger1Name)
    console.log(passenger1Phone)
    console.log(passenger1PickupAddressLine1)
    console.log(passenger1PickupAddressLine2)
    console.log(passenger1DropoffAddressLine1)
    console.log(passenger1DropoffAddressLine2)
    console.log(passenger1NumberOfPassengers)

  } else if (ride.length == 2) {
    passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
    passenger1Phone = ride[0].passengerDetails.phoneNumber
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address
    passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
    passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip
    passenger1NumberOfPassengers = ride[0].numberOfPassengers
    console.log(passenger1Name)
    console.log(passenger1Phone)
    console.log(passenger1PickupAddressLine1)
    console.log(passenger1PickupAddressLine2)
    console.log(passenger1DropoffAddressLine1)
    console.log(passenger1DropoffAddressLine2)
    console.log(passenger1NumberOfPassengers)
    
    passenger2Name = ride[1].passengerDetails.first + ' ' + ride[1].passengerDetails.last
    passenger2Phone = ride[1].passengerDetails.phoneNumber
    passenger2NumberOfPassengers = ride[1].numberOfPassengers
    passenger2PickupAddressLine2 = ride[1].pickupLocation.city + ', ' + ride[1].pickupLocation.state + ' ' + ride[1].pickupLocation.zip
    passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
    passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + ', ' + ride[1].dropoffLocation.state + ' ' + ride[1].dropoffLocation.zip
    passenger2PickupAddressLine1 = ride[1].pickupLocation.address
    console.log(passenger1Name)
    console.log(passenger1Phone)
    console.log(passenger1PickupAddressLine1)
    console.log(passenger1PickupAddressLine2)
    console.log(passenger1DropoffAddressLine1)
    console.log(passenger1DropoffAddressLine2)
    console.log(passenger1NumberOfPassengers)

  } else if (ride.length == 3)  {
    passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
    passenger1Phone = ride[0].passengerDetails.phoneNumber
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address
    passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
    passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip
    passenger1NumberOfPassengers = ride[0].numberOfPassengers
    console.log(passenger1Name)
    console.log(passenger1Phone)
    console.log(passenger1PickupAddressLine1)
    console.log(passenger1PickupAddressLine2)
    console.log(passenger1DropoffAddressLine1)
    console.log(passenger1DropoffAddressLine2)
    console.log(passenger1NumberOfPassengers)
    
    passenger2Name = ride[1].passengerDetails.first + ' ' + ride[1].passengerDetails.last
    passenger2Phone = ride[1].passengerDetails.phoneNumber
    passenger2PickupAddressLine1 = ride[1].pickupLocation.address
    passenger2PickupAddressLine2 = ride[1].pickupLocation.city + ', ' + ride[1].pickupLocation.state + ' ' + ride[1].pickupLocation.zip
    passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
    passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + ', ' + ride[1].dropoffLocation.state + ' ' + ride[1].dropoffLocation.zip
    passenger2NumberOfPassengers = ride[1].numberOfPassengers
    console.log(passenger1Name)
    console.log(passenger1Phone)
    console.log(passenger1PickupAddressLine1)
    console.log(passenger1PickupAddressLine2)
    console.log(passenger1DropoffAddressLine1)
    console.log(passenger1DropoffAddressLine2)
    console.log(passenger1NumberOfPassengers)
    
    passenger3Name = ride[2].passengerDetails.first + ' ' + ride[0].passengerDetails.last
    passenger3Phone = ride[2].passengerDetails.phoneNumber
    passenger3PickupAddressLine1 = ride[2].pickupLocation.address
    passenger3PickupAddressLine2 = ride[2].pickupLocation.city + ', ' + ride[2].pickupLocation.state + ' ' + ride[2].pickupLocation.zip
    passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address
    passenger3DropoffAddressLine2 = ride[2].dropoffLocation.city + ', ' + ride[2].dropoffLocation.state + ' ' + ride[2].dropoffLocation.zip
    passenger3NumberOfPassengers = ride[2].numberOfPassengers
    console.log(passenger1Name)
    console.log(passenger1Phone)
    console.log(passenger1PickupAddressLine1)
    console.log(passenger1PickupAddressLine2)
    console.log(passenger1DropoffAddressLine1)
    console.log(passenger1DropoffAddressLine2)
    console.log(passenger1NumberOfPassengers)
  }

    
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}