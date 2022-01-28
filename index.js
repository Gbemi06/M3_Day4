window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((loadBooks) => {
      console.log(loadBooks);

      const row = document.querySelector(".book_content");

      loadBooks.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col-3");

        col.innerHTML = `
                            <div class="card my-2 d-flex">
                            <img src=${book.img} class="card-img-top w-100 img-fluid" style: object-fit = cover; alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">${book.category}</p>
                                
                                <button onclick="addToCartItem(event)" class="btn cart-item">add to cart</button>
                                <button onclick="skip(event)" class="btn skip-item">skip</button>
                            </div>
                            </div>
                        `;
        row.appendChild(col);
      });
    });
};

const skip = (event) => event.target.closest(".card").remove();
console.log(skip);

const addToCart = document.getElementsByClassName("cart-item");
console.log(addToCart);

for (let i = 0; i < addToCart.length; i++) {
  let button = addToCart[i];
  button.addEventListener("click", addToCartItem);
}
console.log(addToCart);

const addToCartItem = (event) => {
  let button = event.target.closest(".card-body").book.title;
  button.console.log(button);
};
