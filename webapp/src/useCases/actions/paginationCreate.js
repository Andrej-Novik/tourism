/* eslint-disable eqeqeq */
export function createPages(pages, pagesCount, currentPage) {
  if (pagesCount > 4) {
    if (currentPage > 2) {
      for (let i = currentPage - 2; i <= currentPage; i++) {
        if (i == pagesCount) break;
        pages.push(i);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    }
  } else {
    for (let i = 0; i < pagesCount; i++) {
      pages.push(i);
    }
  }
}