if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
  itemsPerPage = 8;
  localStorage.setItem('itemPageNo', -1);
  var start = 0;
  var end = start + itemsPerPage;
} else {
  itemsPerPage = 12;
  const itemPageNo = localStorage.getItem('itemPageNo');
  if (itemPageNo == -1) {
    var start = 0;
  } else {
    var start = itemPageNo * itemsPerPage;
  }
  var end = start + itemsPerPage;
  console.log(start, end);
}
displayItems(start, end);


$('.footer-content-more a').on('click', function(e) {
  if (isNaN($(this).text())) {
    return;
  }
  e.preventDefault();
  var pageNumber = $(this).text() - 1;
  localStorage.setItem('itemPageNo', pageNumber);
  var start = pageNumber * itemsPerPage;
  var end = start + itemsPerPage;
  $(".furniture-content ul").empty();
  displayItems(start, end);
});

function displayItems(start, end) {
  var itemsToDisplay = FURNITURE_ITEMS.slice(start, end);
  $.each(itemsToDisplay, function(index, product) {
    var ulElement = $(".furniture-content ul");
    var liElement = $('<li>');
    var aElement = $('<a>', { href: 'item.html' });
    var imgElement = $('<img>', { src: 'img/item' + product.id + '.jpg' });
    var pTitleElement = $('<p>', { text: product.name });
    var pPriceElement = $('<p>', { text: '¥' + product.price.toLocaleString() + ' +tax' });
    aElement.append(imgElement);
    liElement.append(aElement, pTitleElement, pPriceElement);
    ulElement.append(liElement);
  });
};

$(".furniture-content ul").on("click", "a", function() {
  const itemPageNo = localStorage.getItem('itemPageNo');
  var selectedItemId;
  if (itemPageNo == -1 || itemPageNo == 0) {
    selectedItemId = $(this).parent().index();
  } else if (itemPageNo == 1) {
    selectedItemId = $(this).parent().index() + 12;
  }
  localStorage.setItem('selectedItem', FURNITURE_ITEMS[selectedItemId].id);
});