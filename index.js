function tester() {
  let objs = document.querySelectorAll(".tester");

  objs.forEach(obj => {
    obj.style.boxShadow = `10px 10px`;
  });
}

module.exports.tester = tester;
