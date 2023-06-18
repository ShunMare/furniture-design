function displayItemPages() {
  var urlParams = new URLSearchParams(window.location.search);
  var page = urlParams.get('page');
  var start = 0;
  if (page == null) {
    localStorage.setItem('pageNo', 1);
    itemsPerPage = 8;
  } else {
    localStorage.setItem('pageNo', page);
    itemsPerPage = 12;
    start = (page - 1) * itemsPerPage;
  }
  var end = start + itemsPerPage;
  displayItems(start, end);
}

$(document).ready(displayItemPages);

$('.furniture-content-more a').on('click', function(e) {
  displayItemPages();
});

function displayItems(start, end) {
  var itemsToDisplay = FURNITURE_ITEMS.slice(start, end);
  $.each(itemsToDisplay, function(index, product) {
    var ulElement = $(".furniture-content ul");
    var liElement = $('<li>', {id: 'item' + product.id});
    var aElement = $('<a>', { href: 'item.html' });
    var imgElement = $('<img>', { src: 'img/item' + product.id + '.jpg', alt: product.name });
    var pTitleElement = $('<p>', { text: product.name });
    var pPriceElement = $('<p>', { text: '¥' + product.price.toLocaleString() + ' +tax' });
    aElement.append(imgElement);
    liElement.append(aElement, pTitleElement, pPriceElement);
    ulElement.append(liElement);
  });
};

$(".furniture-content ul").on("click", "a", function(event) {
  var parentLiId = $(this).parent('li').attr('id');
  var numericPart = parseInt(parentLiId.replace(/\D/g, '')) - 1;
  localStorage.setItem('selectedItem', FURNITURE_ITEMS[numericPart].id);
});