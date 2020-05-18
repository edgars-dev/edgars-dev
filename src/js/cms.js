import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";
import PortfolioPreview from "./cms-preview-templates/portfolio";

CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("portfolio", PortfolioPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();

window.load = function load() {

    $(".content-column-content blockquote", $("iframe").first()[0].contentDocument).addClass("blockquote");
    $(".content-column-content table", $("iframe").first()[0].contentDocument).addClass("table");
    $(".content-column-content table", $("iframe").first()[0].contentDocument).wrap('<div class="table-responsive" />');
    $(".content-column-content table thead", $("iframe").first()[0].contentDocument).addClass("thead-dark");
    $(".content-column-content pre", $("iframe").first()[0].contentDocument).wrap('<figure class="highlight" />');
    $(".content-column-content figure > img", $("iframe").first()[0].contentDocument).addClass("img-fluid");
};
