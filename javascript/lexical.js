function main(a) {
  return function () {
    console.log(a);
  };
}

var closure = main(100); // function() { console.log(a) }

closure();

// function Ball() {
//   this.element = null;

//   this.create = function (container) {
//     this.element = document.createElement("div");
//     this.element.innerHTML = "Hey";
//     container.appendChild(this.element);
//   };
// }

// var ball = new Ball();

// ball.create(document.body);
