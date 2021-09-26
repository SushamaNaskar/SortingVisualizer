console.log("quick sort");
//quicksort
async function partition(l,r){
    let bars=document.querySelectorAll(".bar");
    let pi=parseInt(bars[r].innerHTML);
    
    bars[r].style.backgroundColor="red";
    let i=l-1;       //i will point to the last number which is less then pi
  
   
    for(let j=l;j<r;j++){
        bars[j].style.backgroundColor="yellow";
        await new Promise((resolve)=>
                   setTimeout(()=>{
                       resolve();
                   },300)
                   );
        if(parseInt(bars[j].innerHTML)<pi){
            i=i+1;
            
            bars[j].style.backgroundColor="pink";
            // swap(i,j);
            var m_height= bars[i].style.height;
                var m_val = bars[i].innerText;
                 bars[i].style.height = bars[j].style.height;
                 bars[i].innerText = bars[j].innerText;
                 bars[j].style.height = m_height;
                bars[j].innerText = m_val;

                await new Promise((resolve)=>
                   setTimeout(()=>{
                       resolve();
                   },300)
                   );
           
        }
        bars[j].style.backgroundColor="green";
    }
    // swap(i+1,r);    //place the pi at its corrct position
  
    bars[i+1].style.backgroundColor="gray";
    var m_height= bars[r].style.height;
                var m_val = bars[r].innerText;
                 bars[r].style.height = bars[i+1].style.height;
                 bars[r].innerText = bars[i+1].innerText;
                 bars[i+1].style.height = m_height;
                bars[i+1].innerText = m_val;

                await new Promise((resolve)=>
                   setTimeout(()=>{
                       resolve();
                   },300)
                   );
                   bars[i+1].style.backgroundColor="green";
                   bars[r].style.backgroundColor="green";
       
    return i+1;
}
      async function qSort(l,r){
  
        if(l<r){
       var pi=await partition(l,r);
    
       await qSort(l,pi-1);
       await qSort(pi+1,r);
    }
      }
 function quickSort(){
     let bar=document.querySelectorAll(".bar");
     let n=bar.length;
     qSort(0,n-1);
 }