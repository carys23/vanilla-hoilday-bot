import {myjson} from './csv.mjs' 

function africa(){
document.getElementById("africa").innerHTML = myjson[3].Continent;
}

function asia(){
    document.getElementById("asia").innerHTML = myjson[0].Continent;
    }

function aus(){
    document.getElementById("aus").innerHTML = myjson[4].Continent;
    }
function northA(){
    document.getElementById("northA").innerHTML = myjson[1].Continent;
    }
function eur(){
    document.getElementById("eur").innerHTML = myjson[2].Continent;
    }
function ant(){
    document.getElementById("ant").innerHTML = myjson[19].Continent;
    }
function arc(){
    document.getElementById("arc").innerHTML = myjson[20].Continent;
    }

export {africa};
export {asia};
export {aus};
export {northA};
export {eur};
export {ant};
export {arc};