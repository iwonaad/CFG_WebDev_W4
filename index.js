var newsletter = prompt(
  "Welcome on our bookshop website! Would you like to sign up to our newsletter to stay up to date?"
);
var emailAddress = [];

if (newsletter === "yes") {
  var email = prompt("Fantastic! Please enter your email address");
  alert("Thanks! Check your inbox");
  emailAddress.push(email);
} else {
  alert("Not to worry, keep browsing");
}

console.log(newsletter);
console.log(emailAddress);
