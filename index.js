let countEl = document.getElementById("unread")
let u = document.getElementsByClassName("unreadd").length
let count = u
// let count = 8
let ch = 0
// function click(){
//   {count -= 1
//   countEl.innerText = count
//   console.log(count)}
// }
// countEl.addEventListener("click", click);
let notif = document.getElementsByClassName("notif");

countEl.textContent = count

for(var i =0 ; i<notif.length ; i++){
  let e = notif[i];
  e.addEventListener("click", function(){
    if(this.classList.contains("unreadd")){
      this.classList.add("read")
      this.classList.remove("unreadd")
      count -= 1
      countEl.textContent = count
      if(count === 0){
        countEl.classList.remove("unread")
        countEl.classList.add("default")
        // countEl.textContent = count
      }
    }
  });
}
console.log(notif);
console.log(countEl.innerText)

function mark(){
  for(var i =0 ; i<notif.length ; i++){
    let e = notif[i];
    if(e.classList.contains("unreadd")){
      e.classList.add("read")
      e.classList.remove("unreadd")};
  }
  count = 0
  countEl.classList.remove("unread")
  countEl.classList.add("default")
  countEl.textContent = count



}

// let u = document.getElementsByClassName("unread").length
// countEl.innerText = u
//
