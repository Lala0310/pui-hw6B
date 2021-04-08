
	//Changes main product image according to color selection//

	var img1 = new Image().src = "p22.png";
	var img2 = new Image().src = "sav2.png";
	var img3 = new Image().src = "sav3.png";
	var img4 = new Image().src = "sav4.png";

	function setImage(imageSelect) {
		theImageIndex = imageSelect.options[imageSelect.selectedIndex].value;
		if (document.images)
			document.images[4].src = this.eval("img" + theImageIndex);
	}

	//Changes filling image according to color selection//

	var fill1 = new Image().src = "dd.png";
	var fill2 = new Image().src = "hp.png";
	var fill3 = new Image().src = "mf.png";

	function setFill(imageSelect) {
		theImageIndex = imageSelect.options[imageSelect.selectedIndex].value;
		if (document.images)
			document.images[8].src = this.eval("fill" + theImageIndex);
	}

	//Updates cart by indication number of items//

	var $button = document.querySelector('.add');
	var $counter = document.querySelector('.counter');

	$button.addEventListener('click', function(){
	  $counter.value = parseInt($counter.value) + 1;
	}, false);

	//Adjusts product quantity amount with text and + or - buttons//

	function up(max) {
    document.getElementById("quantity","quantity2").value = parseInt(document.getElementById("quantity").value) + 1;
    if (document.getElementById("quantity","quantity2").value >= parseInt(max)) {
        document.getElementById("quantity","quantity2").value = max;
    }
}
	function down(min) {
    document.getElementById("quantity","quantity2").value = parseInt(document.getElementById("quantity").value) - 1;
    if (document.getElementById("quantity","quantity2").value <= parseInt(min)) {
        document.getElementById("quantity","quantity2").value = min;
    }
}

	//Start cart process

	var shopcart = [];
	
	var Product = function(name, color, size, count, fill) {
		this.name = name;
		this.color = color;
		this.size = size;
		this.count = count;
		this.fill = fill;
	}

  	// Save cart

 	function savecart() {
		localStorage.setItem('shopcart', JSON.stringify(shopcart));
	}

	//Add items to cart

	function loadcart() {
    	var shopcart = JSON.parse(localStorage.getItem('shopcart'));
  	// }
  		if (localStorage.getItem("shopcart") != null) {
    		loadcart();
  		}

	  	var name = document.getElementById("itemname1");
	  	console.log(name);
	  	var size = document.getElementById("itemsize1");
		console.log(size);
		var color = document.getElementById("itemcolor1");
		console.log(color);
		var count = document.getElementById("itemqty1");
		console.log(count);
		var fill = document.getElementById("itemfill1");
		console.log(fill);

		var newproduct = new Product(name, color, size, count, fill);
		shopcart.items.push(newproduct);

		savecart();
	}

	//Remove items

	function removetheItem() {
 		var rem = document.getElementById('firstitem');
    	rem.parentNode.removeChild(rem);
    	return false;
    }

	function removetheItem2() {
 		var rem = document.getElementById('seconditem');
    	rem.parentNode.removeChild(rem);
    	return false;
    }

	function cancelallitems(name) {
		for(var item in cart) {
			if(shopcart[item].name === name) {
				cart.splice(item,1);
			}
			break;
		}
		savecart();
	}


// var delay = 3000; //ms

// var slides = document.querySelector(".slides");
// var slidesCount = slides.childElementCount;
// var maxLeft = (slidesCount - 1) * 100 * -1;

// let current = 0;

// function changeSlide(next = true) {
//   if (next) {
//     current += current > maxLeft ?-100 : current * -1;
//   } else {
//     current = current < 0 ? current + 100 : maxLeft;
//   }

// }

// // Controls
// document.querySelector(".next-slide").addEventListener("click", function() {
//   changeSlide();
//   restart();
// });

// document.querySelector(".prev-slide").addEventListener("click", function() {
//   changeSlide(false);
//   restart();
// });

// (function () {
// 	var slides = document.querySelectorAll('.testimonial-item'),
// 		 arrows = document.querySelectorAll('.lnr'),
// 		 carouselCount = 0,
// 		 scrollInterval,
// 		 interval = 5000;

// 	arrows[0].addEventListener('click', function (slide) {
// 		carouselCount -= 100;
//  {
// 			clearInterval(scrollInterval);
// 		}
// 	});
// 	arrows[1].addEventListener('click', sliderEvent);
	
// 	function sliderEvent(slide) {
// 		carouselCount += 100;
// 		slider();	
// 	}
	
// 	function slider() {
// 		switch (carouselCount) {
// 			case -100:
// 				carouselCount = 0;
// 				break;
// 			case 300:
// 				carouselCount = 0;
// 				break;
// 			default:
// 				break;
// 		}
// 		console.log(carouselCount);
// 		for (var i = 0; i < slides.length; i += 1) {
// 			slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
// 		}
// 	}
	
// })();

	// var cartTotalSize = parseInt(localStorage.getItem("cartSize"));
	// console.log("cartTotalSize: " + cartTotalSize);

	// if (typeof(cartTotalSize) === "undefined" || cartTotalSize === null || isNaN(cartTotalSize)) {
	// 	cartTotalSize = 0;
	// }

	// cartTotalSize += parseInt(quantity);
	// localStorage.setItem("cartSize", cartTotalSize);
	// localStorage.setItem("cart", JSON.stringify(cart));

	// var itemCost = parseInt(newItem.quantity) * 10.00;
	// console.log("itemCost: " + itemCost);

	// var totalPrice = localStorage.getItem("price");
	// console.log(totalPrice);

	// if (totalPrice === null || typeof(totalPrice) === "undefined" ) {
	// 	totalPrice = 0;
	// 	console.log(itemTotal);
	// }

	// totalPrice = parseInt(totalPrice);
	// totalPrice += itemCost;
	// console.log("price: " + totalPrice);
	// localStorage.setItem("price", totalPrice);
	// console.log(localStorage.getItem("price"));


// var tableSize = 1;


// function displayCart() {

// 	var table = document.getElementById("cart-table");

// 	var shopcart = JSON.parse(localStorage.getItem("shopcart"));

// 	console.log(shopcart);

// 	if (shopcart != null) {

// 		for (i in shopcart.items) {

// 			var item = shopcart.items[i];

// 			var newRow = table.insertRow(tableSize);

// 			tableSize += 1;

// 			var itemCol = newRow.insertCell(0);
// 			var descriptionCol = newRow.insertCell(1);
// 			var quantityCol = newRow.insertCell(2);
// 			var deleteCol = newRow.insertCell(3);
// 			var priceCol = newRow.insertCell(4);

		
//       		var btn = document.createElement('input');
// 			btn.type = "button";
// 			btn.id = "btn" + i;
// 			btn.value = "Delete"
// 			btn.onclick = "removeRow(this)";
//       		deleteCol.appendChild(btn);

//    //    		document.getElementById("btn" + i).addEventListener("click", function(e) {
// 			// 	removeRow(this);
// 			// });
		
// 			// itemCol.innerHTML = item.name;
// 			// descriptionCol.innerHTML = item.color + " and " +  item.size;
// 			// quantityCol.innerHTML = parseInt(item.quantity);
// 			// priceCol.innerHTML = "$ " + (parseInt(item.quantity) * 10.00);

// 		}

// 		// var currentPrice = localStorage.getItem("price");

// 		// console.log("currentPrice: " + currentPrice);

// 		// if (typeof(currentPrice) === "undefined" || currentPrice === null) {
// 		// 	console.log("set price to 0");
// 		// 	currentPrice = 0;
// 		// }

// 		// document.getElementById("total").innerHTML = "Total: $" + currentPrice;
// 		// document.getElementById('final-cost').innerHTML = "Your Cost: $" + Math.round(((parseInt(currentPrice) + 5.99) + Number.EPSILON) * 100) / 100;

// 		// updateNavBar();
// 	}

	
// }










	// 	var itemselection = plusitem(name, price, count);
	// 	cart.push(itemselection);
	// 	savecart();

	// }

	  // Add to cart
  // obj.addItemToCart = function(name, price, count) {
  //   for(var item in shopcart) {
  //     if(shopcart[item].name === name) {
  //       shopcart[item].count ++;
  //       savecart();
  //       return;
  //     }
  //   }
  //   var item = new Item(name, price, count);
  //   cart.push(item);
  //   savecart();
  // }
  // // Set count from item
  // obj.setCountForItem = function(name, count) {
  //   for(var i in cart) {
  //     if (cart[i].name === name) {
  //       cart[i].count = count;
  //       break;
  //     }
  //   }
  // };





  


  		// var shoppingCart = (function() {
 //  // =============================
 //  // Private methods and propeties
 //  // =============================
 //  	cart = [];
  
 //  // Constructor
 //  	function Item(name, price, count) {
 //    this.name = name;
 //    this.price = price;
 //    this.count = count;
 //  	}



  // // Count cart 
  // obj.totalCount = function() {
  //   var totalCount = 0;
  //   for(var item in cart) {
  //     totalCount += cart[item].count;
  //   }
  //   return totalCount;
  // }

  //   // List cart
  // obj.listCart = function() {
  //   var cartCopy = [];
  //   for(i in cart) {
  //     item = cart[i];
  //     itemCopy = {};
  //     for(p in item) {
  //       itemCopy[p] = item[p];

  //     }
  //     itemCopy.total = Number(item.price * item.count).toFixed(2);
  //     cartCopy.push(itemCopy)
  //   }
  //   return cartCopy;
  // }

  // Add item
// $('.add-to-cart').click(function(event) {
//   event.preventDefault();
//   var name = $(this).data('name');
//   var price = Number($(this).data('price'));
//   shoppingCart.addItemToCart(name, price, 1);
//   displayCart();
// });

