const startBtn = document.getElementById("start") as HTMLButtonElement;
const boxes = document.querySelectorAll(".box") as any;
const sigDiv = document.getElementById("sig") as HTMLDivElement;
const gameInfoButton = document.getElementById("info") as HTMLButtonElement;
const makeNotesBtn = document.getElementById("makeNotes") as HTMLButtonElement;
let levelInfo = document.getElementById("levelInfo")as HTMLParagraphElement;
let totalCoins = document.getElementById("totalCoins") as HTMLParagraphElement;
let currentCoins = document.getElementById("currentCoins") as HTMLParagraphElement;
let currentLevelWin : number = 0;
let gameInfo = document.getElementById("gameInfo") as HTMLDivElement;
let nextLevelBtn = document.getElementById("nextLevel") as HTMLButtonElement;
let levelTracker : number = 0;
let currentBoxesWithoutBombs : number = 0;
const winOrLose = document.getElementById("winOrLose") as HTMLDivElement;
const notesBoxOuter = document.getElementById("notes-box-outer") as HTMLDivElement;


gameInfo.style.display = "none";
nextLevelBtn.disabled = true;
makeNotesBtn.disabled = true;
winOrLose.style.display = "none";
boxes.forEach((el : any) => el.disabled = true);


//creates img elements and assigns the necessary classNames etc ready for use
let scoreOneNoteImg = document.createElement("img");
      scoreOneNoteImg.src = "https://www.svgrepo.com/show/535521/number-1-alt.svg"
      scoreOneNoteImg.classList.add("notes-img");
let scoreTwoNoteImg = document.createElement("img");
      scoreTwoNoteImg.src = "https://www.svgrepo.com/show/535522/number-2-alt.svg"
      scoreTwoNoteImg.classList.add("notes-img");
let scoreThreeNoteImg = document.createElement("img");
      scoreThreeNoteImg.src = "https://www.svgrepo.com/show/535523/number-3-alt.svg"
      scoreThreeNoteImg.classList.add("notes-img");
let scoreBombNoteImg = document.createElement("img");
      scoreBombNoteImg.src = "https://www.svgrepo.com/show/535222/bomb.svg"
      scoreBombNoteImg.classList.add("notes-img-bomb", "notes-img");


const notesBoxOuterImgs = document.getElementsByClassName("notes-img") as any;


function startGame() {
  
  winOrLose.style.display = "none";
  levelTracker += 1;
  boxes.forEach((el : any) => el.disabled = false); //removes disabled flag on reset
  currentCoins.innerText = "";
  levelInfo.innerText = `${levelTracker}`;
  pointsVal.length = 0;
  currentLevelWin = 0;
  let alertNotice : boolean = false;
  startBtn.disabled = true;
  nextLevelBtn.disabled = true;
  makeNotesBtn.disabled = false;
  
  
  for (let i : number = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("boom", "phew");
    boxes[i].classList.add("box");
    boxes[i].innerText = "";
    let boxArr = [];
    boxArr.push(boxes);
    boxArr.forEach(function(nodelist) {     //assigning id's to each box instead of having to manually type and organise each time
      for (const nodeList in boxes) {
        !document.getElementById(`${i+1}`) ? boxes[i].setAttribute("id", `${i+1}`): "";
      } //sets individual "id"'s for every box so it doesnt have to be done manually
    })
  }
 
  //Sets each box up so a value can be added later on. boxes go from top left to bottom right in order...
  let box1 = document.getElementById("1") as any;
  let box2 = document.getElementById("2") as any;
  let box3 = document.getElementById("3") as any;
  let box4 = document.getElementById("4") as any;
  let box5 = document.getElementById("5") as any;
  let box6 = document.getElementById("6") as any;
  let box7 = document.getElementById("7") as any;
  let box8 = document.getElementById("8") as any;
  let box9 = document.getElementById("9") as any;
  let box10 = document.getElementById("10") as any;
  let box11 = document.getElementById("11") as any;
  let box12 = document.getElementById("12") as any;
  let box13 = document.getElementById("13") as any;
  let box14 = document.getElementById("14") as any;
  let box15 = document.getElementById("15") as any;
  let box16 = document.getElementById("16") as any;
  let box17 = document.getElementById("17") as any;
  let box18 = document.getElementById("18") as any;
  let box19 = document.getElementById("19") as any;
  let box20 = document.getElementById("20") as any;
  let box21 = document.getElementById("21") as any;
  let box22 = document.getElementById("22") as any;
  let box23 = document.getElementById("23") as any;
  let box24 = document.getElementById("24") as any;
  let box25 = document.getElementById("25") as any;

  //assigns each box on the grid with the four imgs that are used to make notes
      boxes.forEach((box) => box.append(scoreOneNoteImg.cloneNode(true), scoreTwoNoteImg.cloneNode(true), scoreThreeNoteImg.cloneNode(true), scoreBombNoteImg.cloneNode(true)))
  
  //hides the newly issued imgs until ready
  for (const img of notesBoxOuterImgs) {img.style.visibility = "hidden"}
      
  
  //------------------------------------------------------------

  //Assigning the max available scores for each row and column below so the player can see where and how to avoid Voltorb booms
  //Rows
 const redRowInfo = document.getElementById("maxScore1") as HTMLDivElement;
 const greenRowInfo = document.getElementById("maxScore2") as HTMLDivElement;
 const yellowRowInfo = document.getElementById("maxScore3") as HTMLDivElement;
 const blueRowInfo = document.getElementById("maxScore4") as HTMLDivElement;
 const purpleRowInfo = document.getElementById("maxScore5") as HTMLDivElement;
 //Columns
 const redColumnInfo = document.getElementById("maxScore6") as HTMLDivElement;
 const greenColumnInfo = document.getElementById("maxScore7") as HTMLDivElement;
 const yellowColumnInfo = document.getElementById("maxScore8") as HTMLDivElement;
 const blueColumnInfo = document.getElementById("maxScore9") as HTMLDivElement;
 const purpleColumnInfo = document.getElementById("maxScore10") as HTMLDivElement;
 //Voltorb row number info
 const redRowVoltorb = document.getElementById("voltorb1") as HTMLDivElement;
 const greenRowVoltorb = document.getElementById("voltorb2") as HTMLDivElement;
 const yellowRowVoltorb = document.getElementById("voltorb3") as HTMLDivElement;
 const blueRowVoltorb = document.getElementById("voltorb4") as HTMLDivElement;
 const purpleRowVoltorb = document.getElementById("voltorb5") as HTMLDivElement;
 //Voltorb column number info
 const redColumnVoltorb = document.getElementById("voltorb6") as HTMLDivElement;
 const greenColumnVoltorb = document.getElementById("voltorb7") as HTMLDivElement;
 const yellowColumnVoltorb = document.getElementById("voltorb8") as HTMLDivElement;
 const blueColumnVoltorb = document.getElementById("voltorb9") as HTMLDivElement;
 const purpleColumnVoltorb = document.getElementById("voltorb10") as HTMLDivElement;
//Bomb options below, 0 represents bomb to allow to math algorithms to work
const options : number[] = [0, 1, 2, 3];
//const bombShelter = [];
  
function getRandomResult() {
  return options[Math.floor(Math.random() * options.length)];
  //grabs a random number between 0 - 3
}
  
  //assigns each box a random value from 0 -3... 0 represents a bomb.
  for (let i : number = 1; i < 25; i++) {
    (document.getElementById(`${i}`) as any).value = getRandomResult();
  }

      //assigns the correct total value to each row and column so the player can see how many points are available.
  for (let i : number = 0 ; i < boxes.length; i++) {
    
    //Score row numbers generated below --------------------------
    
    let redRow : number[] = [Number(box1.value), Number(box2.value), Number(box3.value), Number(box4.value), Number(box5.value)];
        let redRowTotal = redRow.reduce((acc, el) => acc + el, 0);
        redRowInfo.innerText = `${redRowTotal}`;
    
    let greenRow : number[] = [Number(box6.value), Number(box7.value), Number(box8.value), Number(box9.value), Number(box10.value)];
        let greenRowTotal = greenRow.reduce((acc, el) => acc + el, 0);
        greenRowInfo.innerText = `${greenRowTotal}`;
    
    let yellowRow : number[] = [Number(box11.value), Number(box12.value), Number(box13.value), Number(box14.value), Number(box15.value)];
        let yellowRowTotal = yellowRow.reduce((acc, el) => acc + el, 0);
        yellowRowInfo.innerText = `${yellowRowTotal}`;
    
    let blueRow : number[] = [Number(box16.value), Number(box17.value), Number(box18.value), Number(box19.value), Number(box20.value)];
        let blueRowTotal = blueRow.reduce((acc, el) => acc + el, 0);
        blueRowInfo.innerText = `${blueRowTotal}`;
    
    let purpleRow : number[] = [Number(box21.value), Number(box22.value), Number(box23.value), Number(box24.value), Number(box25.value)];
        let purpleRowTotal = purpleRow.reduce((acc, el) => acc + el, 0);
        purpleRowInfo.innerText = `${purpleRowTotal}`;
    
    //Score column numbers generated below ----------------------------
    
    let redColumn : number[] = [Number(box1.value), Number(box6.value), Number(box11.value), Number(box16.value), Number(box21.value)];
        let redColumnTotal = redColumn.reduce((acc, el) => acc + el, 0);
        redColumnInfo.innerText = `${redColumnTotal}`;
    
    let greenColumn : number[] = [Number(box2.value), Number(box7.value), Number(box12.value), Number(box17.value), Number(box22.value)];
        let greenColumnTotal = greenColumn.reduce((acc, el) => acc + el, 0);
        greenColumnInfo.innerText = `${greenColumnTotal}`;
    
    let yellowColumn : number[] = [Number(box3.value), Number(box8.value), Number(box13.value), Number(box18.value), Number(box23.value)];
        let yellowColumnTotal = yellowColumn.reduce((acc, el) => acc + el, 0);
        yellowColumnInfo.innerText = `${yellowColumnTotal}`;
    
    let blueColumn : number[] = [Number(box4.value), Number(box9.value), Number(box14.value), Number(box19.value), Number(box24.value)];
        let blueColumnTotal = blueColumn.reduce((acc, el) => acc + el, 0);
        blueColumnInfo.innerText = `${blueColumnTotal}`;
    
    let purpleColumn : number[] = [Number(box5.value), Number(box10.value), Number(box15.value), Number(box20.value), Number(box25.value)];
        let purpleColumnTotal = purpleColumn.reduce((acc, el) => acc + el, 0);
        purpleColumnInfo.innerText = `${purpleColumnTotal}`;
    
    
    //Total number of points available to win generated below ----------------------------
    
    
    let currentLevelCoins : number[] = [...redRow, ...greenRow, ...yellowRow, ...blueRow, ...purpleRow];
    let currentLevelTotal = currentLevelCoins.reduce((acc, el) => acc + el, 0);
    currentBoxesWithoutBombs = currentLevelCoins.filter(el => el !== 0).length;
    currentLevelWin = currentLevelTotal;
    console.log(...redRow, "GAP", ...greenRow, "GAP", ...yellowRow, "GAP", ...blueRow, "GAP", ...purpleRow);
    
    
    //Voltorb row number information generated below -------------------
    
    
   
    let row1Voltorb : number[] = [...redRow];
         let row1VoltorbTotal = row1Voltorb.filter(el => el === 0).length;
             //filter finds every instance of the number 0 which represents a bomb and returns that number using (acc, el) method
         redRowVoltorb.innerText = `${row1VoltorbTotal}`;
    
    let row2Voltorb : number[] = [...greenRow];
         let row2VoltorbTotal = row2Voltorb.filter(el => el === 0).length;
         greenRowVoltorb.innerText = `${row2VoltorbTotal}`;
    
    let row3Voltorb : number[] = [...yellowRow];
         let row3VoltorbTotal = row3Voltorb.filter(el => el === 0).length;
         yellowRowVoltorb.innerText = `${row3VoltorbTotal}`;
    
    let row4Voltorb : number[] = [...blueRow];
         let row4VoltorbTotal = row4Voltorb.filter(el => el === 0).length;
         blueRowVoltorb.innerText = `${row4VoltorbTotal}`;
    
    let row5Voltorb : number[] = [...purpleRow];
         let row5VoltorbTotal = row5Voltorb.filter(el => el === 0).length;
         purpleRowVoltorb.innerText = `${row5VoltorbTotal}`;

    //Voltorb column numbers generated below -------------------
    
    
    let column1Voltorb : number[] = [...redColumn];
         let column1VoltorbTotal = column1Voltorb.filter(el => el === 0).length;
         redColumnVoltorb.innerText = `${column1VoltorbTotal}`;
    
    let column2Voltorb : number[] = [...greenColumn];
         let column2VoltorbTotal = column2Voltorb.filter(el => el === 0).length;
         greenColumnVoltorb.innerText = `${column2VoltorbTotal}`;
    
    let column3Voltorb : number[] = [...yellowColumn];
         let column3VoltorbTotal = column3Voltorb.filter(el => el === 0).length;
         yellowColumnVoltorb.innerText = `${column3VoltorbTotal}`;
    
    let column4Voltorb : number[] = [...blueColumn];
         let column4VoltorbTotal = column4Voltorb.filter(el => el === 0).length;
         blueColumnVoltorb.innerText = `${column4VoltorbTotal}`;
    
    let column5Voltorb : number[] = [...purpleColumn];
         let column5VoltorbTotal = column5Voltorb.filter(el => el === 0).length;
         purpleColumnVoltorb.innerText = `${column5VoltorbTotal}`;     
      }
};

//adds up points earned in the level
let pointsVal : number[] = [];
let currentLevelPoints = 0;

for (let i : number = 0; i < boxes.length; i++) {

//Win or Lose condition checks below  
boxes[i].addEventListener("click", () => {
 
  let previousPoint = pointsVal[pointsVal.length - 1];
  
    if (boxes[i].value == 0)
    {
        startBtn.disabled = false;
        makeNotesBtn.disabled = true;
        levelTracker = Math.max(0, levelTracker -2);    //prevents player going negative in levels
        currentCoins.innerText = "";      //resets possible coins earned on loss
        currentLevelPoints = 0;
        winOrLose.style.display = "block";
        winOrLose.innerText = "Game Over!";
        winOrLose.style.background = "#dc7059";
        totalCoins.innerText = `${Math.floor(Number(totalCoins.innerText) / 2)}`;    //punishes players total coins by half on loss
        boxes[i].innerHTML = "";
        boxes[i].classList.remove("box");
        boxes[i].classList.add("boom");
          let elem = document.createElement("img");
              elem.classList.add("voltorb");
              boxes[i].appendChild(elem);
              elem.src="https://img.itch.zone/aW1nLzEyOTA5NTUxLnBuZw==/315x250%23c/yslQia.png";   //adds a nice picture of voltorb to show a boom
                 boxes.forEach((el : any) => el.disabled = true); //works to disable game after boom.
        return;
    }
  else if (boxes[i].value == 1)
  {
      pointsVal.push(1);  //adds 1 point
      boxes[i].innerText = boxes[i].value;
      boxes[i].classList.remove("box");
      boxes[i].classList.add("phew");
      currentLevelPoints += 1;
      boxes[i].disabled = true;
  } else if (boxes[i].value == 2)
    {
       if (previousPoint == 2)
       {
            pointsVal.push(2,2); //bonus points
       }
       else
       {
          pointsVal.push(2);  //adds 2 points
       }
          boxes[i].innerText = boxes[i].value;
          boxes[i].classList.remove("box");
          boxes[i].classList.add("phew");
          currentLevelPoints += 1;
          boxes[i].disabled = true;
     }
     else if (boxes[i].value == 3)
     {
        if (previousPoint == 3)
        {
            pointsVal.push(3,3); //bonus points
        }
        else
        {
            pointsVal.push(3);  //adds 3 points
        }  
            boxes[i].innerText = boxes[i].value;
            boxes[i].classList.remove("box");
            boxes[i].classList.add("phew");
            currentLevelPoints += 1;
            boxes[i].disabled = true;
      }
  
    const currentLevelCoins = pointsVal.reduce((acc, el) => acc + el, 0);
    currentCoins.innerText = `${currentLevelCoins}`;
      if (currentLevelPoints >= currentBoxesWithoutBombs)
      {
        winOrLose.style.display = "block";
        winOrLose.innerText = "You Win!";
        winOrLose.style.background = "#33a366";
        totalCoins.innerText = `${Number(totalCoins.innerText) + currentLevelCoins}`;
        boxes.forEach((el : any) => el.disabled = true);
        nextLevelBtn.disabled = false;
        currentLevelPoints = 0;
        
        for (const img of notesBoxOuterImgs)            {img.style.display = "none"}
        
         //This will put a voltorb in each remaining slot to show how many the player successfully dodges on a win.
          boxes.forEach((box : any) => {
            if (box.value == 0)
            {
              box.classList.remove("box");
              box.classList.add("boom");
              box.clicked = true;  
              let elem = document.createElement("img");
                  elem.classList.add("voltorb");
                  box.appendChild(elem);
                  elem.src="https://img.itch.zone/aW1nLzEyOTA5NTUxLnBuZw==/315x250%23c/yslQia.png";
            }
        })
      }
   });
}

function makeNotes() {
  console.log("CLICK")

  for (const img of notesBoxOuterImgs) {
      img.addEventListener("click", () => {
      img.style.opacity == "1" ? img.style.opacity = "0.3" : img.style.opacity = "1";
    })
  }
  
  if (notesBoxOuter.style.visibility == "hidden")
  {
    notesBoxOuter.style.visibility = "visible";
    boxes.forEach((box) => {box.disabled = true;})
    for (const img of notesBoxOuterImgs) {img.style.visibility = "visible"}
  }
  else if (notesBoxOuter.style.visibility == "visible")
  {
    notesBoxOuter.style.visibility = "hidden";
    boxes.forEach((box) => {box.disabled = false;})
    for (const img of notesBoxOuterImgs) {
      img.style.opacity < 1 ? img.style.visibility = "hidden" : img.style.visibility = "visible";
    }
  }
}

notesBoxOuter.addEventListener("click", () => {alert("Click the symbol you wish to mark on a desired box to keep track of possible points or Voltorbs!")})


function information() {
  if (gameInfo.style.display === "none")
  {
    gameInfo.style.display = "block";
    gameInfoButton.innerText = "Click again to hide.";
    sigDiv.style.display = "none";
  }
  else
  {
    gameInfo.style.display = "none";
    gameInfoButton.innerText = "Click for game info!";
    sigDiv.style.display = "block";
  } 
}
