// https://leetcode.com/problems/minimum-number-of-people-to-teach/

function minimumTeachings(
  n: number,
  languages: number[][],
  friendships: number[][],
): number {
  let minimum = Number(Infinity);
  let missing: number[][] = [];

  for (let i = 0; i < friendships.length; i++) {
    let canTalk = false;
    const friends = friendships[i];
    const user1Langs = languages[friends[0] - 1];
    const user2Langs = languages[friends[1] - 1];

    for (let l1 = 0; l1 < user1Langs.length; l1++) {
      if (user2Langs.includes(user1Langs[l1])) {
        canTalk = true;
        break;
      }
      if (canTalk) break;
    }

    if (canTalk == false) missing.push(friends);
  }

  for (let lang = 1; lang <= n; lang++) {
    let learned: number[] = [];
    let numTeach = 0;

    for (let i = 0; i < missing.length; i++) {
      const friends = missing[i];

      for (let j = 0; j < 2; j++) {
        const user = friends[j] - 1;
        if (
          languages[user].includes(lang) == false &&
          learned.includes(user) == false
        ) {
          learned.push(user);
          numTeach++;
        }
      }

      if (numTeach > minimum) break;
    }
    if (numTeach < minimum) minimum = numTeach;
  }

  return minimum;
}
