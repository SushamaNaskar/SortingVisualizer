console.log("heap sort");
//heap sort
async function heapify(n,i){
    let bars=document.querySelectorAll(".bar");
let largest=i;
let l=2*i+1;
let r=2*i+2;

bars[i].style.backgroundColor=" #9DC88D";//green
if(l<n && Number(bars[largest].innerHTML)<Number(bars[l].innerHTML)){
    largest=l;
    bars[l].style.backgroundColor="#8076a3";//purple
}

if(r<n && Number(bars[largest].innerHTML)<Number(bars[r].innerHTML)){
    largest=r;
    bars[r].style.backgroundColor="#ffde22";//yellow
}
if(largest!=i){
    var m_height= bars[i].style.height;
                var m_val = bars[i].innerText;
                 bars[i].style.height = bars[largest].style.height;
                 bars[i].innerText = bars[largest].innerText;
                 bars[largest].style.height = m_height;
                bars[largest].innerText = m_val;
                await new Promise((resolve)=>
                   setTimeout(()=>{
                       resolve();
                   },speed)
                   );
                   bars[largest].style.backgroundColor="red";//green
   await heapify(n,largest);
}
}
async function hSort(n){

    let bars=document.querySelectorAll(".bar");
   

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        bars[i].style.backgroundColor=" #9DC88D";//green
 await heapify(n,i);
    }
// // One by one extract an element from heap 
for (let i = n - 1; i > 0; i--) { 
    bars[i].style.backgroundColor=" #9DC88D";//green
    let temp1 = bars[i].style.height; 
    let temp2 = bars[i].innerHTML; 
    bars[i].style.height = bars[0].style.height; 
    bars[i].innerHTML = bars[0].innerHTML; 
    bars[0].style.height = temp1; 
    bars[0].innerHTML = temp2; 

  
    await new Promise((resolve) => 
      setTimeout(() => { 
        resolve(); 
      }, speed) 
    ); 
  
//     // Call max Heapify on the reduced heap 
    await heapify(i, 0); 
  }
    
}
 
function heapSort(){
    let bar=document.querySelectorAll(".bar");
    let n=bar.length;
    hSort(n);
}