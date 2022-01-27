function Ball(size, id) {
  this.width = size;
  this.height = size;

  this.id = id;

  this.create = function (container, position) {
    this.element = document.createElement("div");
    this.element.setAttribute("id", this.id);

    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.borderRadius = "50%";
    this.element.style.background = "red";

    this.element.style.position = "absolute";
    this.element.style.top = position.top + "px";
    this.element.style.left = position.left + "px";

    this.element.addEventListener("click", function () {
      console.log(this.id);
    });

    container.appendChild(this.element);
  };
}
