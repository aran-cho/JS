$(function () {
  $(".next").hide();
  let inputD = document.querySelector("#inputDay");
  let inputT = document.querySelector("#inputTxt");

  $("#imgTxt>button").on("click", function () {
    if (inputD.value === "" || inputT.value === "") {
      alert("Please input your diary.");
    } else {
      alert("Your diary registers.");
      $(".next").show();
      document.querySelector("#nextDay").innerText = inputD.value;
      document.querySelector("#nextTxt").innerText = inputT.value;
    }
    console.log(inputD.value);
  });

  //코드 줄여보기 (저번에 배운거 참고)
  $(".btn2").hide();

  $(".btn2").on("click", function () {
    $("#txtImg1").slideDown(1000, function () {
      $(".btn2").hide();
      $(".btn1").show();
    });
  });
  $(".btn1").on("click", function () {
    $("#txtImg1").slideUp(1000, function () {
      $(".btn1").hide();
      $(".btn2").show();
    });
  });

  $(".btn4").hide();

  $(".btn4").on("click", function () {
    $("#txtImg2").slideDown(1000, function () {
      $(".btn4").hide();
      $(".btn3").show();
    });
  });
  $(".btn3").on("click", function () {
    $("#txtImg2").slideUp(1000, function () {
      $(".btn3").hide();
      $(".btn4").show();
    });
  });

  $(".btn6").hide();

  $(".btn6").on("click", function () {
    $("#txtImg3").slideDown(1000, function () {
      $(".btn6").hide();
      $(".btn5").show();
    });
  });
  $(".btn5").on("click", function () {
    $("#txtImg3").slideUp(1000, function () {
      $(".btn5").hide();
      $(".btn6").show();
    });
  });
});
