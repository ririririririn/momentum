const waterUl = document.querySelector(".water-container");

const cups = [];
cups.length = 5;

const emptyCups = Array.from(document.querySelectorAll(".cup")); //btn.cup 배열
console.log(emptyCups);
emptyCups.forEach((cup) =>
  cup.addEventListener("click", () => handleCups(cup))
);

function handleCups(cup) {
  const emptyCup = cup.children[0];
  const fullCup = cup.children[1];
  emptyCup.classList.toggle("hidden");
  fullCup.classList.toggle("hidden");
  const waterCup = {
    done: fullCup.className === "fa-solid fa-glass-water" ? true : false,
    id: emptyCups.indexOf(cup),
  };
  handleSaveCups(waterCup);
}

const savedCups = localStorage.getItem("water");
if (savedCups !== null) {
  const parsedCups = JSON.parse(savedCups);
  localStorage.setItem("cup", parsedCups);
}

function handleSaveCups(waterCup) {
  for (i = 0; i < 5; i++) {}
}

// if (savedCups === null) {
//   for (let i = 0; i < 5; i++) {
//     cups.push(cup);
//     console.log(cups);
//     localStorage.setItem("cups", JSON.stringify(cups));
//   }
// } else {
//   emptyCup.forEach((cup) => {
//     cup.addEventListener("click", handleCups);
//   });
// }

// waterUl.innerHTML = `
// <li>
//   <button class="cup">
// ${cup.icon}
//   </button>
// </li>
// <li>
//   <button class="cup">
// ${cup.icon}
//   </button>
// </li>
// <li>
//   <button class="cup">
// ${cup.icon}
//   </button>
// </li>
// <li>
//   <button class="cup">
// ${cup.icon}
//   </button>
// </li>
// <li>
//   <button class="cup">
// ${cup.icon}
//   </button>
// </li>
// `;
// Array.from(emptyCup);

// function handleCups(e) {
//   cup.active = !cup.active;
//   cup.icon = `<i class="fa-solid fa-glass-water hidden"></i>
//   <i class="fa-solid fa-glass-water"></i>`;
//   Array.from(emptyCup).map((item) => (item.innerHTML = cup.icon));
//   console.log(cups);
//   localStorage.setItem("water", JSON.stringify(cups));
// }

// const emptyCup = document.querySelectorAll(".fa-glass-water-droplet");

// const water = [];
// const fullCup = document.querySelectorAll(".fa-glass-water");

// const waterBtn = document.querySelectorAll(".water");

// waterBtn.forEach((btn) => btn.addEventListener("click", toggleCup));

// function toggleCup(e) {
//   const cupBtn = e.target.parentElement;
//   console.log(cupbtn.innerHTML);
//   const emptyCup = {
//     active: false,
//     cup: cupBtn.innerHTML,
//   };

//   console.log(emptyCup);

//   const fullCup = cupBtn.lastElementChild;
// emptyCup.classList.toggle("hidden");
// fullCup.classList.toggle("hidden");
//}
