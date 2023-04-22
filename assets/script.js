const locationFinder = () => {
  const searchData = (data) => {
    var a = document.getElementById("classNo").value;
    var b = document.getElementById("cardOut");
    for (var i = 0; i < data.length; i++) {
      if (data[i].name === a) {
        const card = `
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto">
    <img class="w-full" src="${data[i].img}" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${data[i].name}</div>
      <p class="text-gray-700 text-base">
        ${data[i].desc}
      </p>
    </div>
  </div>
    `;
        b.innerHTML = card;
      } else if (i == data.length - 1) {
        if (data[i].name != a) {
          alert("Invalid Classroom!, Please enter a valid classroom");
        }
      }
    }
  };

  fetch("./assets/data.json", {
    cache: "no-store",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      searchData(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
  return false;
};
