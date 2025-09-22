// https://leetcode.com/problems/number-of-people-aware-of-a-secret/

function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
  let modulo = 1000000007n;
  let total = 1n;
  let sharesOfDay = [1];

  for (let i = 1; i < n; i++) {
    let delayIdx = i - delay;

    if (i - delay < 0) {
      sharesOfDay.push(0);
      continue;
    }

    let today = 0n;
    let forgetIdx = i - forget;

    if (forgetIdx >= 0) {
      total -= BigInt(sharesOfDay[forgetIdx]);
    }

    for (let j = Math.max(forgetIdx + 1, 0); j <= delayIdx; j++) {
      today = (today + BigInt(sharesOfDay[j]) + modulo) % modulo;
    }

    sharesOfDay.push(Number(today));
    total += today;
  }

  return Number(total % modulo);
}
