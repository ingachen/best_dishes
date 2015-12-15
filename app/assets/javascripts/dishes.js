$(document).ready(function() {
  var selectedCategory = 'All Categories';
  var selectedCity = 'All Cities';
  var $dishes = $('.dish-card');
  var $addDishCategoryField = $('.add-dish-category-field');
  var $addDishSelectCategoryDropdown = $('.add-dish-select-category-dropdown');
  var $emptyStateMessage = $('.empty-state-message');
  var $emptyStateCategory = $('.empty-state-category');
  var $emptyStateCity = $('.empty-state-city');

  function filterDishes() {
    $dishes.hide();

    var runningRank = 1;

    Array.from($dishes).forEach(function(dish) {
      var hasCategory = selectedCategory === 'All Categories' || $(dish).data('category') === selectedCategory;
      var hasCity = selectedCity === 'All Cities' || $(dish).data('city') === selectedCity;

      if (hasCategory && hasCity) {
        $(dish).show();
        $(dish).find('.dish-rank').text(runningRank);
        runningRank++;
      }
    });

    if (!$('.dish-card:visible').length) {
      $emptyStateCategory.text(selectedCategory);
      $emptyStateCity.text(selectedCity);
      $emptyStateMessage.show();
    } else {
      $emptyStateMessage.hide();
    }
  }

  $('.category-select').on('click', function() {
    selectedCategory = $(this).data('category');
    filterDishes();
    
    var dropdownContent = selectedCategory + ' <span class="caret"></span>';
    $('.category-dropdown').html(dropdownContent);
  });

  $('.city-select').on('click', function() {
    selectedCity = $(this).data('city');
    filterDishes();

    var dropdownContent = selectedCity + ' <span class="caret"></span>';
    $('.city-dropdown').html(dropdownContent);
  });

  $('.add-dish-category-select').on('click', function() {
    var addDishSelectedCategory = $(this).data('category');
    $addDishCategoryField.val(addDishSelectedCategory);

    var dropdownContent = addDishSelectedCategory + ' <span class="caret"></span>';
    $addDishSelectCategoryDropdown.html(dropdownContent);
  });

  $('.add-dish-create-category').on('click', function() {
      $addDishCategoryField.show();
      $addDishSelectCategoryDropdown.hide();
  });
});