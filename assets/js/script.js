

const chosenDoor; // NOW PAPER

 chooseDoor();
 runThroughDoor(chosenDoor)

function chooseDoor() {
  const doors = ['paper', 'wood', 'wood'];
  const chosenDoorIndex = Math.floor(Math.random() * doors.length);
  chosenDoor = doors[chosenDoorIndex];
}

function runThroughDoor(chosenDoor){
  if (chosenDoor === 'paper') {
    console.log("You made it to the next set of doors!");
    // Here you can proceed to the next level or perform some other action
  } else {
    console.log("You hit the hard door and lose.");
    // Here you can handle what happens when the player loses
  }
}