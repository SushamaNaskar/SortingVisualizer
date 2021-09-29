console.log("selection sort");

//selection sort
async function selectionSort(){
    
    let i,j,min_idx;
    let bars=document.querySelectorAll(".bar");
    let n=bars.length;
    for(i=0;i<n-1;i++){
        min_idx=i;        //pretend i has the min val
        bars[i].style.backgroundColor="#9DC88D";  //green  
        for(j=i+1;j<n;j++){                      //find the value lower than i
         bars[j].style.backgroundColor="#ffde22";  //Purple
            await new Promise((resolve)=>
            setTimeout(()=>{
                resolve();
            },speed)
            );
            var min_val=parseInt(bars[min_idx].innerHTML);   //minimum value
            var curr_val=parseInt(bars[j].innerHTML);        //current index

            if(min_val>curr_val){    //compare
                if(min_val!==i)
                {
                 min_idx=j;
                 bars[min_idx].style.backgroundColor="#ff3a22"; //red
                }
                
             }
         else{
                bars[j].style.backgroundColor="#8076a3"; //yellow
            }
          

        }



             //swap
             
             var m_height= bars[min_idx].style.height;
             var m_val = bars[min_idx].innerText;
              bars[min_idx].style.height = bars[i].style.height;
              bars[min_idx].innerText = bars[i].innerText;
              bars[i].style.height = m_height;
             bars[i].innerText = m_val;

             await new Promise((resolve)=>
                setTimeout(()=>{
                    resolve();
                },speed)
                );
        }

  bars[min_idx].style.backgroundColor =" #9DC88D";  //green
  bars[i].style.backgroundColor ="#9DC88D";        //green
  
    }
    