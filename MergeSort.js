console.log("merge sort");

async function merge(l,mid,r){
    let bar=document.querySelectorAll(".bar");
    var n1=parseInt(mid-l+1);
    var n2= parseInt(r-mid);
    var a=new Array(n1);

    var b=new Array(n2);
    for(let i=0;i<n1;i++){
        bar[l+i].style.backgroundColor="yellow";
        a[i]=parseInt(bar[l+i].innerHTML);
    }
    
    for(let i=0;i<n2;i++){
        bar[mid+1+i].style.backgroundColor="yellow";
        b[i]=parseInt(bar[mid+1+i].innerHTML);
    }
    let i=0;
    let j=0;
    let k=l;
    while(i<n1 && j<n2){
        await new Promise((resolve)=>
        setTimeout(()=>{
            resolve();
        },100)
        );
        if(a[i]<b[j]){
            bar[k].style.backgroundColor="red";
            await new Promise((resolve)=>
            setTimeout(()=>{
                resolve();
            },100)
            );
         bar[k].innerHTML=a[i];
         bar[k].style.height=`${a[i]*3}px`;
         bar[k].style.backgroundColor="green";
         k++;
            i++;
        }else{
            bar[k].style.backgroundColor="red";
            await new Promise((resolve)=>
            setTimeout(()=>{
                resolve();
            },100)
            );
            bar[k].innerHTML=b[j];
            bar[k].style.height=`${b[j]*3}px`;
            bar[k].style.backgroundColor="green";
            k++;
            j++;
        }
       
    }
     while(i<n1){
        bar[k].style.backgroundColor="red";
        await new Promise((resolve)=>
        setTimeout(()=>{
            resolve();
        },100)
        );
        bar[k].innerHTML=a[i];
        bar[k].style.height=`${a[i]*3}px`;
        bar[k].style.backgroundColor="green";
            k++;
            i++;
        }
         while(j<n2){
            bar[k].style.backgroundColor="red";
            await new Promise((resolve)=>
            setTimeout(()=>{
                resolve();
            },100)
            );
            bar[k].innerHTML=b[j];
            bar[k].style.height=`${b[j]*3}px`;
            bar[k].style.backgroundColor="green";
            k++;
            j++;
        }
        
        console.log(a);
}
async function msort(l, r){
    if(l<r){
        let mid=l+parseInt((r-l)/2);
        
       await msort(l,mid);
       await msort(mid+1,r);
        
        await merge(l,mid,r);
    }
}

 async function mergeSort(){

let bar=document.querySelectorAll(".bar");
   msort(0,19);

}
