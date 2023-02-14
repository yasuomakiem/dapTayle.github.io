var rac = document.getElementById('rac')
var ngu = document.getElementById('ngu')
var miss = document.getElementById('miss')
var diem = document.getElementById('diem')
var time = document.getElementById('time')
var start = document.getElementById('start')
var check = false
let i = 0;
let j = 0
let k = 0 
let sum = 0;
let caasd = 30
let cl = 0
let concac
let game
function cac(){
    let a =Math.floor(Math.random() * 90);
    let b =Math.floor(Math.random() * 90);    

    console.log(a,b)
    rac.style.top = `${a}%` ;
    rac.style.left= `${b}%`;
    start.style.display = "none"

   
    
    // console.log(miss)
}
function asd(){
    concac = setInterval((asd),1000)
    caasd = caasd - 1;
    time.innerHTML = caasd
    console.log(caasd)
    if (caasd === 0){
        clearInterval(concac)
        // start.style.display = "block"
    // start.style.display = "block"


    }
    
}

    

function cacc(){
    // start.style.display = "none";

    game = setInterval(cac,1000)
    concac = setInterval(non,1000)
    
    
}
function count_click_icon(){
    //đếm tổng số lần bấm trúng icon = số điểm
    j +=1;
    diem.innerHTML = j
    // cl = j - sum
    // ngu.innerHTML = cl
    // console.log('xx')
    // console.log(j)
    

}
function count_click() {
    //đếm tổng số lần bấm chuột trên màn hình
    k +=1;
    sum = k 
    // miss = k- j
    // miss.innerHTML = sum
    // ngu.innerHTML = j - sum
    // click_miss()
    // console.log('xx')
    // console.log(k)
    console.log(sum)

}



function non(){
   
    caasd = caasd -1
    if(caasd == 0){
        start.style.display = "block"
        alert("Diem cua ban la : " + j)
        clearInterval(concac)
        clearInterval(game)
        caasd = 30
        i = 0
        j = 0 
        k = 0 
        sum = 0
        cl = 0  
        diem.innerHTML = 0
        miss.innerHTML = 0
        ngu.innerHTML = 0
        
        
        
    }
    time.innerHTML = caasd
    // start.style.display = "block"

}

no


