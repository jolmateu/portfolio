const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week2 notes",
    url: "week2/index.html"
  },
  {
    label: "Week3 notes",
    url: "week3/index.html"
  },
  {
    label: "Week4 notes",
    url: "week4/index.html"
  }
]

for (let link in links){
    var a = document.createElement("a");
    var olist = document.getElementById("list");
    var newItem = document.createElement("li");

    a.textContent = links[link].label;
    a.setAttribute('href', links[link].url);
    newItem.appendChild(a);
    olist.appendChild(newItem);
}

