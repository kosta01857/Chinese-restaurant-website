var i = 0;
function swap() {
  $(".background").fadeOut(300, function () {
    $(".background").find("img").attr("src", `../resources/b${i}.jpg`);
    $(this).fadeIn(300);
  });

  i = (i + 1) % 4;
}
function swap_images() {
  $(".background").find("img").attr("src", `../resources/b0.jpg`);
  setInterval(swap, 5000);
}
