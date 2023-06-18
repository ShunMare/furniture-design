$(document).ready(function() {
  const itemId = localStorage.getItem('selectedItem');
  const pageNo = localStorage.getItem('pageNo');
  const selectedItem = FURNITURE_ITEMS.find(item => item.id == itemId);

  var divTargetElement;
  var imgElement;
  var pElement;
  var aElement;
  
  divTargetElement = $("head");
  pElement = $('<title>', { text: selectedItem.name + " | Furniture Design"});
  divTargetElement.append(pElement);

  divTargetElement = $(".item-title");
  pElement = $('<p>', { text: selectedItem.name });
  divTargetElement.append(pElement);

  divTargetElement = $(".item-content-img");
  imgElement = $('<img>', { src: 'img/item' + selectedItem.id + '.jpg', alt: selectedItem.name});
  divTargetElement.append(imgElement);
  
  divTargetElement = $(".item-content-description-upper");
  pElement = $('<p>', { text: selectedItem.description1 });
  divTargetElement.append(pElement);

  divTargetElement = $(".item-content-description-bottom");
  pElement = $('<p>', { text: selectedItem.description2 });
  divTargetElement.append(pElement);

  divTargetElement = $(".item-content-description-price");
  pElement = $('<p>', { text: '¥' + selectedItem.price.toLocaleString() + ' +tax' });
  divTargetElement.append(pElement);

  divTargetElement = $(".item-content-description-info-size");
  pElement = $('<p>', { text: 'W' + selectedItem.size_W + ' × D' + selectedItem.size_D + ' × H' + selectedItem.size_H });
  divTargetElement.append(pElement);

  divTargetElement = $(".item-content-description-info-color");
  pElement = $('<p>', { text: selectedItem.color });
  divTargetElement.append(pElement);

  divTargetElement = $(".item-content-description-info-material");
  pElement = $('<p>', { text: selectedItem.material });
  divTargetElement.append(pElement);

  divTargetElement = $(".item-back-product");
  pElement = $('<p>');
  aElement = $('<a>', { text: 'Back To Products', href: 'products.html?page=' + pageNo });
  pElement.append(aElement);
  divTargetElement.append(pElement);
});