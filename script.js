const container = document.querySelector(".data-container");
const about = document.querySelector(".about");
about.style.display ="none";
const about1 = document.querySelector(".about1");
about1.style.display ="none";
const about2 = document.querySelector(".about2");
about2.style.display ="none";
const about3 = document.querySelector(".about3");
about3.style.display ="none";

function generate()
{
  window.location.reload();
  generatebars();
}

// function to enable the button
function enableBtn(){
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button3").disabled = false;
    document.getElementById("Button4").disabled = false;
    document.getElementById("Button5").disabled = false;
    document.getElementById("Button6").disabled = false;
}


// function to disable the button
function disableBtn(){

    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
    document.getElementById("Button3").disabled = true;
    document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
    document.getElementById("Button4").disabled = true;
    document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
    document.getElementById("Button5").disabled = true;
    document.getElementById("Button5").style.backgroundColor = "#d8b6ff";
    document.getElementById("Button6").disabled = true;
    document.getElementById("Button6").style.backgroundColor = "#d8b6ff";
    }

// function to generate bars
generatebars();
function generatebars(numOfBars = 20) {
   
        for (let i = 0; i < numOfBars; i++  ) {

            const value = Math.floor(Math.random() * 100) + 1;           
            // To create element "div"
            const bar = document.createElement("div");
                  bar.classList.add("bar");
                  bar.style.height = `${value * 3}px`;
                  bar.style.width = `28px`;
                  bar.style.borderTopLeftRadius = `28px`;
                  bar.style.borderTopRightRadius = `28px`;
                  bar.style.transform = `translateX(${i * 30}px)`;
        
            const barLabel = document.createElement("label");
                  barLabel.classList.add("bar_id");
                  barLabel.innerHTML = value;
                  barLabel.style.color = "white";
                  barLabel.style.backgroundColor = "grey"
                  barLabel.style.borderRadius = "100%"
                  bar.appendChild(barLabel);
                  container.appendChild(bar);
        }
}

// asynchronous function to perform "Selection Sort"
async function SelectionSort() {

    document.querySelector('#heading').innerHTML="Selection Sort";
          about1.style.display ="block";
          about.style.display ="block";

    let bars = document.querySelectorAll(".bar");
    let min_idx = 0;
    for (let i = 0; i < bars.length-1; i++) {

        min_idx = i;

        bars[min_idx].style.backgroundColor = "darkblue";
        
        for (let j = i + 1; j < bars.length; j++) {

    
        bars[j].style.backgroundColor = "red";
            
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) => setTimeout(() => {  resolve() }, 300) );

	// To store the integer value of jth bar to var1
	let val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	let val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
		}
		min_idx = j;
	} else {

		bars[j].style.backgroundColor = "rgb(24, 190, 255)";
	 }
	}

	// To swap ith and (min_idx)th bar
	let temp1 = bars[min_idx].style.height;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;

	let temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
	
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) => setTimeout(() => {resolve()}, 300));

	// Provide skyblue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	// Provide lightgreen color to the ith bar
	bars[i].style.backgroundColor = "rgb(49, 226, 13)";
}
 

enableBtn();

}



// asynchronous function to perform "Bubble Sort"
async function bubbleSort() {  
          about2.style.display ="block";
          about.style.display ="block";

     document.querySelector('#heading').innerHTML="Bubble Sort"
    let bars = document.querySelectorAll(".bar");
   
    for (let i = 0; i < bars.length-1; i++) {
        
        for (let j = 0; j < bars.length-i-1; j++) {

            bars[j].style.backgroundColor = "darkblue";  
            bars[j+1].style.backgroundColor = "red";
            
        // delay
         await new Promise((resolve) => setTimeout(() => {  resolve() }, 500));

	// To store value
	   var val1 = parseInt(bars[j].childNodes[0].innerHTML);
	   var val2 = parseInt(bars[j+1].childNodes[0].innerHTML);
         
       
        await new Promise((resolve) =>{

                if (val1 > val2) {
                // To swap
                let temp1 = bars[j+1].style.height;
                bars[j+1].style.height = bars[j].style.height;
                bars[j].style.height = temp1;
            
                let temp2 = bars[j+1].childNodes[0].innerText;
                bars[j+1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
                bars[j].childNodes[0].innerText = temp2;

                }
                bars[j+1].style.backgroundColor = "rgb(49, 226, 13)";
            resolve();
        })         
	 }
    
	// delay
	await new Promise((resolve) =>setTimeout(() => {resolve()}, 300));	
 }
 enableBtn();

}

// Asynchronous function to perform "Insertion Sort"
 async function InsertionSort() {

    document.querySelector('#heading').innerHTML="Insertion Sort"
    let bars = document.querySelectorAll(".bar");
    
     about2.style.display ="block";
     about.style.display ="block";      
    // Provide lightgreen colour to 0th bar
    bars[0].style.backgroundColor = " rgb(49, 226, 13)";

    for (let i = 1; i < bars.length; i++) {
    
      let j = i - 1;
     
      let key = parseInt(bars[i].childNodes[0].innerHTML);
      let val = bars[i].style.height;

      bars[i].style.backgroundColor = "darkblue";
        
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>setTimeout(() => { resolve()}, 600) );
    
      // For placing selected element at its correct position 
      while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
          
            // Provide darkblue color to the jth bar
            bars[j].style.backgroundColor = "darkblue";
            
            // For placing jth element over (j+1)th element
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].childNodes[0].innerText = 
            bars[j].childNodes[0].innerText;
        
            j--;
        
            // To pause the execution of code for 600 milliseconds
            await new Promise((resolve) => setTimeout(() => { resolve()}, 600) );
            
            // Provide lightgreen color to the sorted part
            for(var k=i;k>=0;k--){
            bars[k].style.backgroundColor = " rgb(49, 226, 13)";
            }
      }
    
      // Placing the selected element to its correct position
      bars[j + 1].style.height = val;
      bars[j + 1].childNodes[0].innerHTML = key;
         
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) => setTimeout(() => { resolve()}, 600));
        
      // Provide light green color to the ith bar
      bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    
    enableBtn();
    
  }

