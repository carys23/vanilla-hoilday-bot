import {myjson} from './csv.mjs' 

function africa(){
document.getElementById("africa").innerHTML = myjson[3].Continent;
document.getElementById("africa").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("africa").innerHTML = myjson[3].Area;
}
}



function asia(){
    document.getElementById("asia").innerHTML = myjson[0].Continent;
    document.getElementById("asia").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("asia").innerHTML = myjson[3].Area;
}
    }

function aus(){
    document.getElementById("aus").innerHTML = myjson[4].Continent;
    document.getElementById("aus").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("aus").innerHTML = myjson[3].Area;
}
    }
function northA(){
    document.getElementById("northA").innerHTML = myjson[1].Continent;
    document.getElementById("northA").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("northA").innerHTML = myjson[3].Area;
}
    }

function eur(){
    document.getElementById("eur").innerHTML = myjson[2].Continent;
    document.getElementById("eur").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("eur").innerHTML = myjson[3].Area;
}
    }
function ant(){
    document.getElementById("ant").innerHTML = myjson[19].Continent;
    document.getElementById("ant").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("ant").innerHTML = myjson[3].Area;
}
    }
function arc(){
    document.getElementById("arc").innerHTML = myjson[20].Continent;
    document.getElementById("arc").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("arc").innerHTML = myjson[3].Area;
}
    }
// function africaOp(){
//     console.log(myjson[3].Area)
//     document.getElementById("africa").innerHTML = myjson[3].Area;
// }
// function asiaOp(){
//     console.log(myjson[3].Area)
//     document.getElementById("africaOp").innerHTML = myjson[3].Area;
// }
// function ausOp(){
//     console.log(myjson[3].Area)
//     document.getElementById("africaOp").innerHTML = myjson[3].Area;
// }
// function northAOp(){
//     console.log(myjson[3].Area)
//     document.getElementById("africaOp").innerHTML = myjson[3].Area;
// }
// function eurOp(){
//     console.log(myjson[3].Area)
//     document.getElementById("africaOp").innerHTML = myjson[3].Area;
// }

// function arcOp(){
//     console.log(myjson[3].Area)
//     document.getElementById("africaOp").innerHTML = myjson[3].Area;
// }

// function antOp(){
//     console.log(myjson[3].Area)
//     document.getElementById("africaOp").innerHTML = myjson[3].Area;
// }



export {africa};
export {asia};
export {aus};
export {northA};
export {eur};
export {ant};
export {arc};


// export {asiaOp};
// export {ausOp};
// export {northAOp};
// export {eurOp};
// export {antOp};
// export {arcOp};
// export {africaOp};