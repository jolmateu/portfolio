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
  },
  {
    label: "Week5 notes",
    url: "week5/index.html"
  },
  {
    label: "Week6 notes",
    url: "week6/index.html"
  },
  {
    label: "Week7 notes",
    url: "week7/index.html"
  },
  {
    label: "Week8 notes",
    url: "week8/index.html"
  },
  {
    label: "Week9 notes",
    url: "week9/index.html"
  },
  {
    label: "Week10 notes",
    url: "week10/index.html"
  },
  {
    label: "Final Project",
    url: "finalproject/index.html"
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