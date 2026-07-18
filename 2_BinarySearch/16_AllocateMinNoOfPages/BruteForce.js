function calculateStudents(books, maxPages) {
  let studentsUsed = 1;
  let currentPages = 0;

  for (let pages of books) {
    if (currentPages + pages <= maxPages) {
      currentPages += pages;
    } else {
      studentsUsed++;
      currentPages = pages;
    }
  }

  return studentsUsed;
}

function allocateMinNoOfPages(books = [], students) {
  let start = Math.max(...books);
  let end = books.reduce((sum, book) => sum + book, 0);

  for (let i = start; i <= end; i++) {
    let studentsNeeded = calculateStudents(books, i);

    if (studentsNeeded <= students) return i;
  }

  return -1;
}
