const papers = document.querySelectorAll(".paper");
const book = document.getElementById("book");

let currentPage = 0;
const totalPages = papers.length;

// Inicializa z-index
function setZIndex() {
  papers.forEach((paper, index) => {
    paper.style.zIndex = totalPages - index;
  });
}

setZIndex();

// Mantém livro centralizado visualmente
function updateBookPosition() {

  // livro fechado
  if (currentPage === 0) {
    book.style.transform = "translateX(0)";
  }

  // livro aberto (qualquer página no meio)
  else if (currentPage > 0 && currentPage < totalPages) {
    book.style.transform = "translateX(210px)";
  }

  // livro totalmente finalizado
  else if (currentPage === totalPages) {
    book.style.transform = "translateX(420px)";
  }
}

updateBookPosition();

function nextPage() {
  if (currentPage >= totalPages) return;

  papers[currentPage].classList.add("flipped");

  papers[currentPage].style.zIndex = currentPage;

  currentPage++;

  updateBookPosition();
}

function prevPage() {
  if (currentPage <= 0) return;

  currentPage--;

  papers[currentPage].classList.remove("flipped");

  papers[currentPage].style.zIndex = totalPages - currentPage;

  updateBookPosition();
}