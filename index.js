function styleswizard(options) {
  let divs = document.querySelectorAll(".styleswizard");

  options.shadow_type === "hard"
    ? (options.shadow_type = "0px")
    : (options.shadow_type = "15px");

  divs.forEach((div) => {
    div.style.boxshadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,1)`;
    options.padding ? (div.style.padding = "1em") : "0";
    options.margin ? (div.style.margin = "1em") : "0";
    div.style.width = options.width || "250px";
    div.style.border = `10px solid ${options.borderColor}` || "blue";
  });
}

module.exports.styleswizard = styleswizard;
