// Функция проверки готовности работы скрипта на сайте
$(document).ready(function () {
  console.log("ready")
});

// Функция проверки клика на этаж
// $(document).ready(function () {
//   $(".home-img path").on("click", function () {
//     console.log("click")
//   });
// });

// Функция отображает номер этажа в консоле (переменная "data-floor")
// $(document).ready(function () {
//   $(".home-img path").on("click", function () {
//     console.log($(this).attr('data-floor'))
//   });
// });

// Сохраняем номер этажа ПРИ КЛИКЕ в переменную "currentFloor"
// и отображаем значение на странице в тексте (класс .counter)
// $(document).ready(function () {
//   var currentFloor = 2 // объявляем переменную и присваиваем значение
//   $(".home-img path").on("click", function () {
//     currentFloor = $(this).attr('data-floor');
//   $(".counter").text(currentFloor);
//   });
// });

// Сохраняем номер этажа ПРИ НАВЕДЕНИИ в переменную "currentFloor"
// и отображаем значение на странице в тексте (класс .counter)
// $(document).ready(function () {
//   $(".home-img path").on("mouseover", function () {
//     currentFloor = $(this).attr('data-floor');
//   $(".counter").text(currentFloor);
//   });
// });

// Jтображаем значение на странице в тексте (класс .counter) 
// при нажатии на кнопки формы .counter-btn-up/.counter-btn-down
// $(document).ready(function () {
//   $(".home-img path").on("mouseover", function () {
//     floorPath.removeClass("current-floor");
//     currentFloor = $(this).attr('data-floor');
//   $(".counter").text(currentFloor);
//   });
// });

// Выводим значение этажа в консоль при КЛИКЕ
// $(document).ready(function () {
//   var counterUp = $(".counter-up")
//   counterUp.on("click", function () {
//     console.log("clicked up btn");
//   });
// });  

// Увеличиваем значение этажа в консоль при КЛИКЕ на стрелку вверх на 1
// Начальное значение этажа 2
$(document).ready(function () {
  var counterUp = $(".counter-up")
  var counterDown = $(".counter-down")
  var currentFloor = 2
  var floorPath = $(".home-img path")
  
    counterUp.on("click", function () {
      if (currentFloor < 18) {
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString('en-US', 
        {minimumIntegerDigits: 2, useGrouping: false});
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
      }
    });
  
    counterDown.on("click", function () {
      if (currentFloor > 2) {
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString('en-US', 
        {minimumIntegerDigits: 2, useGrouping: false})
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
      };
    
    $(floorPath).on("mouseover", function () {
      floorPath.removeClass("current-floor");
      currentFloor = $(this).attr('data-floor');
      $(".counter").text(currentFloor);
    });

  });
  
});