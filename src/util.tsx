const formatPennies = (pennies: number) => {
  let pounds = Math.floor(pennies/100);
  let penniesRemaining = pennies % 100;
  return `£${pounds}.${pennies}`
}