let products = [
  {
    produtcName: "Regular White T-Shirt",
    category: "Topwear",
    price: "30",
    image: "images/1680392991271-cover.jpeg"
  },

  {
    produtcName: "Beige Short Skirt",
    category: "Bottomwear",
    price: "49",
    image: "images/1680402295928-cover.jpeg"
  },

  {
    produtcName: "Sporty Smart Watch",
    category: "Watch",
    price: "99",
    image: "images/th.jpeg"
  },

  {
    produtcName: "Basic knitted Top",
    category: "Topwear",
    price: "29",
    image: "images/1680402563605-cover.jpeg"
  },

  {
    produtcName: "Black Leather Jacket",
    category: "Jacket",
    price: "129",
    image: "images/1680401528864-cover.jpeg"
  },

  {
    produtcName: "Stylish Pink Trousers",
    category: "Bottomwear",
    price: "89",
    image: "images/1680403397402-cover.jpeg"
  },

  {
    produtcName: "Brown Men's Jacket ",
    category: "Jacket",
    price: "189",
    image: "images/1680401893316-cover.jpeg"
  },

  {
    produtcName: "Comfy Gray Pants",
    category: "Bottomwear",
    price: "49",
    image: "images/1680399913757-cover.jpeg"
  }
];

products.forEach(product => {
  let card = document.createElement("div");
  card.classList.add("card", product.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container")

  let image = document.createElement("img");
  image.setAttribute("src", product.image);

  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h4");
  name.classList.add("product-name");
  name.innerText = product.produtcName.toUpperCase();

  let price = document.createElement("h5");
  price.classList.add("product-price");
  price.innerText = "$ " + product.price;

  container.appendChild(name);
  container.appendChild(price);

  card.appendChild(container);

  document.getElementById("products").appendChild(card);
});


function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");

  buttons.forEach(button => {
    if(value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  

  let element = document.querySelectorAll(".card");
  element.forEach((e) => {
    if(value == "all") {
      e.classList.remove("hide");
    } else if(e.classList.contains(value)) {
      e.classList.remove("hide");
    } else {
      e.classList.add("hide");
    }
  });

}


document.querySelector("#search").addEventListener("click", function() {
  let searchInput = document.querySelector("#searchInput").value;

  let element = document.querySelectorAll(".card");
  element.forEach((e) => {
    if(e.children[1].innerText.toUpperCase().includes(searchInput.toUpperCase())) {
      e.classList.remove("hide");
    } else {
      e.classList.add("hide");
    }
  })
  
})





window.onload = () => {
  filterProduct("all");
}