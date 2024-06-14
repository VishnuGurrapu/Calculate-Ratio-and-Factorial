const ratiofun = requrie("../ratio/index");
const facfun = requrie("../factorial/index");
const ratioAndFactorial = (num1, num2, num3) => {
  const ans1 = ratiofun(num1, num2);
  const ans2 = facfun(num3);
  return { ratio: ans1, factorial: ans2 };
};
module.exports = ratioAndFactorial;
