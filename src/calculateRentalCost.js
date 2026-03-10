/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRent = 40;
  let discount = 0;
  if (days >= 7) {
    discount = 50;
  }
  if (days >= 3) {
    discount = 20;
  }

  return days * dailyRent - discount;
}

module.exports = calculateRentalCost;
