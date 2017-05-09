function capture (){
  event.preventDefault();
  console.log("Thanks for signing up for our mailing list, " + document.customerInfo.email.value);
}
