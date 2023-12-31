// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

function endsWithA(students) {
  return students.filter((stud) => stud.ime.endsWith("a"));
}

function sortByName(students) {
  return students.sort((a, b) => {
    if (a.ime < b.ime) {
      return -1;
    } else if (a.ime > b.ime) {
      return 1;
    } else {
      return 0;
    }
  });
}

function sortByProsek(students) {
  return students.sort((a, b) => a.prosek - b.prosek);
}

module.exports = {
  sortByName,
  sortByProsek,
};
