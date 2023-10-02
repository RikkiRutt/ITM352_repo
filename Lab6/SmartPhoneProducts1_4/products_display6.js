//declare and push to the DOM the store name at top and bottom
const store_name="Rikki Rutt";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
bottom_title.innerHTML=(store_name + "'s Used Smart Phone Store");

let hits= 0;
let spins=0;
let wins;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

function changeClassName(element) {
  
    element.className = 'item rotate';
    spins=spins+1; 
    if(spins<2*hits){
        wins=true;
    } else {
        wins=false;
    }
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}
function resetClassName(element) {
    element.className = 'item';
    hits=hits+=2;
    if(spins<2*hits){
        wins=true;
    } else {
        wins=false;
    }
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}
