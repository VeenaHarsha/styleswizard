function styleswizard(options) {
  let images = document.querySelectorAll(".styleswizard");

  options.shadow_type === "hard"
    ? (options.shadow_type = "0px")
    : (options.shadow_type = "15px");

  images.forEach((image) => {
    image.style.boxshadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,1)`;
    options.padding ? (image.style.padding = "1em") : "0";
  });
}

module.exports.styleswizard = styleswizard;
