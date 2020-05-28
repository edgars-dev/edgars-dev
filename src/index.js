// JS Goes here - ES6 supported

import "./css/main.css";
import {Viewer} from "photo-sphere-viewer";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

$(function() {
  $(".content-column-content blockquote").addClass("blockquote");
  $(".content-column-content table").addClass("table");
  $(".content-column-content table").wrap('<div class="table-responsive" />');
  $(".content-column-content table thead").addClass("thead-dark");
  $(".content-column-content pre").wrap('<figure class="highlight" />');
  $(".content-column-content figure > img").addClass("img-fluid");

  $(".content-column-content a").each(function() {
    if ($(this).attr("href") && $(this).attr("href").indexOf("http") === 0) {
      $(this).attr("target", "_blank");
    }
  });

  const params = new URLSearchParams(window.location.search);

  if (params.has("tag") && params.get("tag")) {
    $(".masonry-item[data-tags]").each(function() {
      if ($(this).data("tags").indexOf(params.get("tag")) === -1) {
        $(this).hide();
      }
    });

    const icon = $("<i>", {
      class: "fa fa-times"
    });

    const tag = params.get("tag").length > 10 ? params.get("tag").slice(0, 10) + "..." : params.get("tag");
    const button = $("<button>", {
      text: tag,
      class: "clear-tag-button"
    });

    button.on('click', function () {
      window.location.href = "/portfolio";
    })

    $('.content-column').prepend(button.append(icon));
  }

});
