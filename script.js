// Define the local JSON data
var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "./assets/men_sweatshirt_1.jpg",
    "photos": [
        "./assets/men_sweatshirt_1.jpg",
        "./assets/men_sweatshirt_2.jpg",
        "./assets/men_sweatshirt_3.jpg",
        "./assets/men_sweatshirt_4.jpg",
        "./assets/men_sweatshirt_5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [1, 1, 0, 1, 0],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
};

// Function to create the product page with provided data
function createProductPage(data) {
    // Product Image
    var productImg = document.getElementById("productImg");
    productImg.src = data.preview;

    // Product Name
    var productName = document.getElementById("name");
    productName.innerHTML = data.name;

    // Product Brand
    var productBrand = document.getElementById("brand");
    productBrand.innerHTML = data.brand;

    // Product Price
    var productPrice = document.getElementById("price");
    productPrice.innerHTML = data.price;

    // Product Description
    var productDescription = document.getElementById("description");
    productDescription.innerHTML = data.description;

    // Product Preview Images
    for (var i = 0; i < data.photos.length; i++) {
        var photo = document.getElementById("img" + i);
        if (photo) {
            photo.src = data.photos[i];
        }
    }

    // Set the first small image as active and load it in the preview
    var firstPhoto = document.getElementById("img0");
    if (firstPhoto) {
        firstPhoto.classList.add("active");
        productImg.src = firstPhoto.src;
    }

    // Change preview image on small image click
    document.querySelectorAll(".previewImg img").forEach(function (img) {
        img.addEventListener("click", function () {
            productImg.src = img.src;
            document.querySelector(".active").classList.remove("active");
            img.classList.add("active");
        });
    });
}

// Call the function to create the product page with the provided data
createProductPage(productData);
