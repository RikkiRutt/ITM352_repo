//declare and push to the DOM the store name at top and bottom
const store_name="Rikki Rutt";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
bottom_title.innerHTML=(store_name + "'s Used Smart Phone Store");

let hits= 0;
let spins=0;
//let wins;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

function changeClassName(element) {
    if(element.className=='item'){
        spins=spins+1;
        element.className = 'item rotate';

    }
  
    //spins=spins+1; 
    if(spins<2*hits&&hits<spins){
        //wins=true
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML = wins;
    win_span.innerHTML = over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=(hits/spins).toFixed(2)
}
function resetClassName(element) {
    if(element.className=='item rotate'){
        hits=hits+2;
        element.className = 'item';
    } else {
        changeClassName(element);
    }
 
    if(spins<2*hits&&hits<spins){
        //wins=true
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML = wins;
    win_span.innerHTML = over_half;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}