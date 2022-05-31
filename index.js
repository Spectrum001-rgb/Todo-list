let ad = document.getElementById("t");
const new_div = document.getElementById("nt");

function add() {
  var para = document.createElement("p");
  para.classList.add('nn');
  para.innerText = ad.value;
  new_div.appendChild(para);
  ad.value = "";
  var check =0
  para.addEventListener("click", function () {
    if(check==0)
    {
      para.style.textDecoration = "line-through";
      check=1;
    }

    else{

      para.style.textDecoration = "none";
      check=0;

    }
    
    
  })

  para.addEventListener("dblclick", function () {

    new_div.removeChild(para);
    
  })
}
