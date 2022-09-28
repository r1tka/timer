// node timer1.js 10 3 5 15 9
const times = process.argv.slice(2);


const timer = (timers) => {
  //No numbers are provided:
  if (timers === []) return    
  const sortTimers = timers.sort((a, b) => a - b);
  for (let timer of sortTimers) {
    //An input is not a negative number and input is number 
    const numericalTimer = Number(timer)
    if (numericalTimer > 0 && numericalTimer !== NaN) {
      let sec = numericalTimer * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, sec);
    }
  }
}

timer(times)














// No numbers are provided: It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
