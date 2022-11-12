// function show() {
//   const start = +document.getElementById("start").value;
//   const end = +document.getElementById("end").value;
//   const from = +document.getElementById("from").value;
//   const upto = +document.getElementById("upto").value;
//   const div = document.getElementById("div1");
//   let myHTML = "";

//   for (let num = start; num <= end; num++) {
//     const heading = `<div><h3 class="text-red-500 bg-yellow-300 text-xl p-2">${num} ka table start</h3>`;
//     myHTML += heading;
//     for (let i = from; i <= upto; i++) {
//       const row = `<p1>${num} x ${i} = ${num * i}</p1>`;
//       myHTML += `<h3 class="flex flex-col text-green-600">${row}</h3>`;
//     }
//     const footer = `<h3 class="text-gray-500 bg-pink-300 text-xl p-2">${num} ka table khatam</h3></div>`;

//     myHTML += footer;
//   }

//   div.innerHTML = myHTML;
//   e.stopImmediatePropagation();
// }
