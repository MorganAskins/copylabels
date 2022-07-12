function pasteLabels(x){
  for(let i=0; i < x.length; i++){
    let a = x[i];
    baseTime = 2000*i
    setTimeout(()=>document.querySelectorAll(".js-details-target-new-label")[0].click(), baseTime);
    setTimeout(()=>document.getElementById("label-name-").value = a.name, baseTime+1000);
    setTimeout(()=>document.getElementById("label-description-").value = a.description, baseTime+1200);
    setTimeout(()=>document.getElementById("label-color-").value = a.color, baseTime+1400);

    setTimeout(()=>document.querySelectorAll(".flex-md-order-2")[0].disabled=false, baseTime+1500);
    setTimeout(()=>document.querySelectorAll(".flex-md-order-2")[0].click(), baseTime+1600);
  }
}
