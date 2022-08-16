

var sevenNumberButton = document.querySelector(".sevenbtn")
//console.log('btn', numberButton.innerHTML)

sevenNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".sevenbtn").innerHTML
})







var sumBox = parseInt(document.querySelector(".sum-box").innerHTML) 
console.log(sumBox)
var eightNumberButton = document.querySelector(".eightbtn")
//if (sumBox == 0) {
//    eightNumberButton.addEventListener("click", function() {
//        document.querySelector(".sum-box").innerHTML = document.querySelector(".eightbtn").innerHTML})
//} else {
    eightNumberButton.addEventListener("click", function() {
        document.querySelector(".sum-box").innerHTML += document.querySelector(".eightbtn").innerHTML})
//}













var nineNumberButton = document.querySelector(".ninebtn")

nineNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".ninebtn").innerHTML
})



var fourNumberButton = document.querySelector(".fourbtn")

fourNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".fourbtn").innerHTML
})



var fiveNumberButton = document.querySelector(".fivebtn")

fiveNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".fivebtn").innerHTML
})



var sixNumberButton = document.querySelector(".sixbtn")

sixNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".sixbtn").innerHTML
})



var oneNumberButton = document.querySelector(".onebtn")

oneNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".onebtn").innerHTML
})



var twoNumberButton = document.querySelector(".twobtn")

twoNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".twobtn").innerHTML
})



var threeNumberButton = document.querySelector(".threebtn")

threeNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".threebtn").innerHTML
})



var zeroNumberButton = document.querySelector(".zerobtn")

zeroNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".zerobtn").innerHTML
})



var pointNumberButton = document.querySelector(".pointbtn")
pointNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".pointbtn").innerHTML
})



var acNumberButton = document.querySelector(".acbtn")

acNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML = document.querySelector(".zerobtn").innerHTML
})



var plusMinusNumberButton = document.querySelector(".plusminusbtn")

plusMinusNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML = `-${document.querySelector(".sum-box").innerHTML}`
})









var percentNumberButton = document.querySelector(".percentbtn")

percentNumberButton.addEventListener("click", function() {
    var prePercentOperation = document.querySelector(".sum-box").innerHTML;
    document.querySelector(".sum-box").innerHTML = document.querySelector(".zerobtn").innerHTML
    
    var equalNumberButton = document.querySelector(".equalbtn")
    
    equalNumberButton.addEventListener("click", function() {
       document.querySelector(".sum-box").innerHTML = parseInt(prePercentOperation) * 100 / parseInt(document.querySelector(".sum-box").innerHTML)
    })

})



var divideNumberButton = document.querySelector(".dividebtn")

divideNumberButton.addEventListener("click", function() {
    var preDivideOperation = document.querySelector(".sum-box").innerHTML;
    document.querySelector(".sum-box").innerHTML = document.querySelector(".zerobtn").innerHTML
    
    var equalNumberButton = document.querySelector(".equalbtn")
    
    equalNumberButton.addEventListener("click", function() {
       document.querySelector(".sum-box").innerHTML = parseInt(preDivideOperation) / parseInt(document.querySelector(".sum-box").innerHTML)
    })

})



var timesNumberButton = document.querySelector(".timesbtn")

timesNumberButton.addEventListener("click", function() {
    var preTimesOperation = document.querySelector(".sum-box").innerHTML;
    document.querySelector(".sum-box").innerHTML = document.querySelector(".zerobtn").innerHTML
    
    var equalNumberButton = document.querySelector(".equalbtn")
    
    equalNumberButton.addEventListener("click", function() {
       document.querySelector(".sum-box").innerHTML = parseInt(preTimesOperation) * parseInt(document.querySelector(".sum-box").innerHTML)
    })

})



var plusNumberButton = document.querySelector(".plusbtn")

plusNumberButton.addEventListener("click", function() {
    var prePlusOperation = document.querySelector(".sum-box").innerHTML;
    document.querySelector(".sum-box").innerHTML = document.querySelector(".zerobtn").innerHTML
    
    var equalNumberButton = document.querySelector(".equalbtn")
    
    equalNumberButton.addEventListener("click", function() {
       document.querySelector(".sum-box").innerHTML = parseInt(prePlusOperation) + parseInt(document.querySelector(".sum-box").innerHTML)
    })

})



var minusNumberButton = document.querySelector(".minusbtn")

minusNumberButton.addEventListener("click", function() {
    var preMinusOperation = document.querySelector(".sum-box").innerHTML;
    document.querySelector(".sum-box").innerHTML = document.querySelector(".zerobtn").innerHTML
    
    var equalNumberButton = document.querySelector(".equalbtn")
    
    equalNumberButton.addEventListener("click", function() {
       document.querySelector(".sum-box").innerHTML = parseInt(preMinusOperation) * 100 / parseInt(document.querySelector(".sum-box").innerHTML)
    })

})






/* let simonText = document.getElementById("simon").innerHTML;
// let david = document.getElementById("david").innerHTML  // this is only selecting 7
const davidBtn = document.getElementById("david")
console.log(simon)
//console.log(david)
console.log(davidBtn)

davidBtn.addEventListener("click", function() {
    document.getElementById("simon").innerHTML += "david";
  });

console.log(simon) */





//  btn.querySelector('.btn').addEventListener('click', function() {
//                sum.innerText = btn.value;});

//const btn = document.querySelector(".numbtn");
//btn.addEventListener("click", function() {
//document.querySelector(".sum-box").innerHTML = btn.value; });

/* let sum = 0
const btn = document.querySelector(".numbtn");

if (btn.addEventListener("click", function() {
    sum += btn.value

}))
console.log(sum)
document.querySelector(".sum-box").innerHTML = sum; */

//let sum = 0
//console.log(sum)

//let helloElement = document.getElementById("hello").innerHTMl
//let byeElement = document.getElementById("bye").innerHTML

//console.log(helloElement)
//console.log(byeElement)

//helloElement = byeElement;

//console.log(byeElement.value)



