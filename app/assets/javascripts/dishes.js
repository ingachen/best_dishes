$(document).ready(function() {
  var selectedCategory = 'All Categories';
  var selectedCity = 'All Cities';
  var $dishes = $('.dish-card');
  var $addDishCategoryField = $('.add-dish-category-field');
  var $addDishSelectCategoryDropdown = $('.add-dish-select-category-dropdown');

  function filterDishes() {
    $dishes.hide();

    Array.from($dishes).filter(function(dish) {
      var hasCategory = selectedCategory === 'All Categories' || $(dish).data('category') === selectedCategory;
      var hasCity = selectedCity === 'All Cities' || $(dish).data('city') === selectedCity;

      if (hasCategory && hasCity) {
        $(dish).show();
      }
    });
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
    var selectedCategory = $(this).data('category');
    $addDishCategoryField.val(selectedCategory);

    var dropdownContent = selectedCategory + ' <span class="caret"></span>';
    $addDishSelectCategoryDropdown.html(dropdownContent);
  });

  $('.add-dish-create-category').on('click', function() {
      $addDishCategoryField.show();
      $addDishSelectCategoryDropdown.hide();
  });
});