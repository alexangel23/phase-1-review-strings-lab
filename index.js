// Write your code in this file!
const currentUser = "Grace Hopper";
// Using interpolation `${}` we can insert currentUser into the welcomeMessage with ` marks 
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
// excitedWelcomeMessage is just set equal to welcomeMessage and uppercased
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// shortGreeting we want welcome and the first intial of currentUser name followed by ! so we use slice to just keep the first intial 
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
