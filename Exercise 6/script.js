
(function() {
     var menuData = {
      "2342153": {
        productName: "Chicken Biryani",
        price: 299
      },
  
      "12364324": {
        productName: "Butter Chicken",
        price: 259
      },
  
      "7893424": {
        productName: "Chicken Tikka Masala",
        price: 350
      }
    };
  
    var cartData = {};
  
    var menuArea = document.getElementById("menu-area");
  
    var cartList = document.getElementById("cart-list");
    var totalAmount = document.getElementById("total-amount");
  
    var setMenu = function() {
      for (var sku in menuData) {
        var menuItem = createMenuItem(sku);
        menuArea.appendChild(menuItem);
      }
    };
  
    var createMenuItem = function(sku) {
      var data = menuData[sku];
  
      var menuItem = document.createElement("div");
      menuItem.className = "menu-item";
  
      var menuText = document.createElement("span");
      menuText.className = "menu-text";
      menuText.innerText = `${data.productName} - ₹ ${data.price}`;
  
      // handling the plus button
      var menuActionSpan = document.createElement("span");
      menuActionSpan.className = "menu-action";
  
      var menuActionButton = document.createElement("button");
      menuActionButton.innerText = "+";
      menuActionButton.setAttribute("data-sku", sku);
  
      menuActionButton.onclick = addToCart;
  
      menuActionSpan.appendChild(menuActionButton);
  
      // appending both to the menu div
      menuItem.appendChild(menuText);
      menuItem.appendChild(menuActionSpan);
  
      return menuItem;
    };
  
    // when an event gets triggered
    // additional data is sent by the browser
    // hence the argument e to use the extra info.
    var addToCart = function(e) {
      var button = e.target;
      var sku = button.getAttribute("data-sku");
  
      if (sku in cartData) cartData[sku] += 1;
      else cartData[sku] = 1;
  
      setCart();
    };
  
    var reduceCartCount = function(e) {
      var button = e.target;
      var sku = button.getAttribute("data-sku");
  
      if (sku in cartData) {
        cartData[sku] -= 1;
  
        // if less than 0 delete the item
        if (cartData[sku] < 1) delete cartData[sku];
      }
  
      setCart();
    };
  
    var setCart = function() {
      // we empty it to avoid duplicates
      cartList.innerHTML = "";
  
      var total = 0;
      for (var sku in cartData) {
        // getting product details from menu data
        // getting qty from cart data
        var details = menuData[sku];
        var qty = cartData[sku];
  
        var cartItem = createCartItem(sku);
  
        total += qty * details.price;
        cartList.appendChild(cartItem);
      }
  
      totalAmount.innerText = total;
    };
  
    var createCartItem = function(sku) {
      var data = menuData[sku];
      var qty = cartData[sku];
  
      var cartItemDiv = document.createElement("div");
      cartItemDiv.className = "cart-item";
  
      // creating item text
      var itemText = document.createElement("span");
      itemText.className = "item-text";
      itemText.innerText = data.productName + " x " + qty;
  
      // creating item total
      var itemTotal = document.createElement("span");
      itemTotal.className = "item-total";
      itemTotal.innerText = "₹" + data.price * qty;
  
      // creating the remove button
      var removeButton = document.createElement("button");
      removeButton.className = "remove-button";
      removeButton.innerText = "-";
      removeButton.setAttribute("data-sku", sku);
      removeButton.onclick = reduceCartCount;
  
      // appending all the nodes to the cartItemDiv
      cartItemDiv.appendChild(itemText);
      cartItemDiv.appendChild(itemTotal);
      cartItemDiv.appendChild(removeButton);
  
      return cartItemDiv;
    };
  
    // we need to set menu during page load itself.
    // cart is empty by default so we needn't
    setMenu();
  })();