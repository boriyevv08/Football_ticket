let name1 = document.querySelector(".name1")
let name2 = document.querySelector(".name2");
let game = document.querySelector(".game");
let price = document.querySelector(".price");
let btn = document.querySelector("#btn1");
let tbody = document.querySelector(".tbody");




let num =1

btn.addEventListener("click", function(){

  let obj =  {
    numCount: num++,
      firstName: name1.value,
      lastName: name2.value,
      meeting: game.value,
      ticket: price.value,
      date : "18 December"
    }
   

let trow = document.createElement("tr")
let number = document.createElement("td")
let names = document.createElement("td")
let surnames = document.createElement("td")
let games = document.createElement("td")
let prices = document.createElement("td")
let dates = document.createElement("td")
 number.textContent = obj.numCount
    names.textContent = obj.firstName
    surnames.textContent = obj.lastName
    games.textContent = obj.meeting
    prices.textContent = obj.ticket
    dates.textContent = obj.date

trow.append(number, names, surnames, games, prices, dates)
tbody.append(trow)

   
  
  });



// render()
