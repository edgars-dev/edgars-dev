// JS Goes here - ES6 supported

import "./css/main.css";


// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

$(function() {
  $(".content-column-content blockquote").addClass("blockquote");
  $(".content-column-content table").addClass("table");
  $(".content-column-content table").wrap('<div class="table-responsive" />');
  $(".content-column-content table thead").addClass("thead-dark");
  $(".content-column-content pre").wrap('<figure class="highlight" />');
  $(".content-column-content figure > img").addClass("img-fluid");

  $(".content-column-content a:not(.badge)").each(function() {
    if ($(this).attr("href") && $(this).attr("href").indexOf("http") === 0) {
      $(this).attr("target", "_blank");
    }
  });

  loadMasonry();
  offCanvas();
  highlightCurrentPage();
  makeImagesResponsive();

  $(window).resize();
});

function highlightCurrentPage() {
  $("a[href='" + location.href + "']").parent().addClass("active");
}
function makeImagesResponsive() {
  $("img").addClass("img-responsive");
}
/* =========================================
 *  masonry
 *  =======================================*/
function loadMasonry() {
  let grid = $('.grid');

  if (!grid[0]) {
    return;
  }

  new ImagesLoaded(grid, () => {
    let msnry = new Masonry( grid[0], {
      itemSelector: '.masonry-item',
    })
  })
}
/* =========================================
 *  Off-canvas menu
 *  =======================================*/
function offCanvas() {
  $(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
      $('.row-offcanvas').toggleClass('active')
    });
  });
}

$.fn.alignElementsSameHeight = function () {
  $('.same-height-row').each(function () {
    var maxHeight = 0;
    var children = $(this).find('.same-height');
    children.height('auto');
    if ($(window).width() > 768) {
      children.each(function () {
        if ($(this).innerHeight() > maxHeight) {
          maxHeight = $(this).innerHeight();
        }
      });
      children.innerHeight(maxHeight);
    }
    maxHeight = 0;
    children = $(this).find('.same-height-always');
    children.height('auto');
    children.each(function () {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).innerHeight();
      }
    });
    children.innerHeight(maxHeight);
  });
}

let windowWidth;
let newWindowWidth;

$(document).on('load', function () {
  windowWidth = $(document).width();
  $(this).alignElementsSameHeight();
});

$(window).on('resize', function () {
  newWindowWidth = $(window).width();
  if (windowWidth !== newWindowWidth) {
    setTimeout(function () {
      $(this).alignElementsSameHeight();
    }, 205);
    windowWidth = newWindowWidth;
  }
});
