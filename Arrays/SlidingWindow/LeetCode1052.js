/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */

/* Strategy
    1. Find the range in which I will get maximum dissatisfied customers.
    2. Loop through the array
    3. For all the indexes outside that range do the following
      3.1 - maxCustomers = if grumpy[i] = 0, maxCustomers += customers[i];
    4. For all customers within the range, maxCustomers += customers[i];
  */

let getMaxProfitRange = (customers, grumpy, minutes) => {
    let start = 0;
    let end = minutes - 1;
    let dissatisfiedCustomers = 0;


    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] === 1) {
            dissatisfiedCustomers += customers[i];
        }
    }

    let maxDissatisfiedCustomers = dissatisfiedCustomers;

    for (let i = minutes; i < customers.length; i++) {
        if (grumpy[i] === 1) {
            dissatisfiedCustomers = customers[i] + dissatisfiedCustomers

        }
        if (grumpy[i - minutes] === 1) {
            dissatisfiedCustomers -= customers[i - minutes];
        }

        if (dissatisfiedCustomers > maxDissatisfiedCustomers) {
            start = i - minutes + 1;
            end = i;
            maxDissatisfiedCustomers = dissatisfiedCustomers;
        }
    }

    return [start, end];
}
var maxSatisfied = function (customers, grumpy, minutes) {
    let [start, end] = getMaxProfitRange(customers, grumpy, minutes);
    console.log(`start = ${start} end = ${end}`);
    let maxSatisfiedCustomers = 0;
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 1 && (i < start || i > end)) {
            continue;
        } else {
            maxSatisfiedCustomers += customers[i];
        }


    }
    return maxSatisfiedCustomers;
};

let customers = [1, 0, 1, 2, 1, 1, 7, 5];
let grumpy = [0, 1, 0, 1, 0, 1, 0, 1];
let minutes = 3;
console.log(maxSatisfied(customers, grumpy, minutes));