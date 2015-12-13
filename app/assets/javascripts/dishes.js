$(document).ready(function() {
  $('.category-select').on('click', function() {
    var selectedCategory = $(this).data('category');
    var dishes = $('.dish-card[data-category="' + selectedCategory + '"]');
    $('.dish-card').hide();
    $('.dish-card[data-category="' + selectedCategory + '"]').show();

    var dishRanks = $('.dish-rank:visible');
    Array.from(dishRanks).forEach(function(dishRank, i) {
      $(dishRank).text(i + 1);
    });

    var dropdownContent = selectedCategory + ' <span class="caret"></span>';
    $('.category-dropdown').html(dropdownContent);
  });

  $('.add-dish-category-select').on('click', function() {
    var selectedCategory = $(this).data('category');
    $('.add-dish-category-field').val(selectedCategory);

    var dropdownContent = selectedCategory + ' <span class="caret"></span>';
    $('.add-dish-select-category-dropdown').html(dropdownContent);

  });
});