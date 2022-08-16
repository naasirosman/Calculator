



var sevenNumberButton = document.querySelector(".sevenbtn")

    sevenNumberButton.addEventListener("click", function() {
        if (parseInt(document.querySelector(".sum-box").innerHTML) === 0) {
        document.querySelector(".sum-box").innerHTML = document.querySelector(".sevenbtn").innerHTML
        }
        else {
            document.querySelector(".sum-box").innerHTML += document.querySelector(".sevenbtn").innerHTML
    }})


var eightNumberButton = document.querySelector(".eightbtn")

    eightNumberButton.addEventListener("click", function() {
        if (parseInt(document.querySelector(".sum-box").innerHTML) === 0) {
        document.querySelector(".sum-box").innerHTML = document.querySelector(".eightbtn").innerHTML
        }
        else {
            document.querySelector(".sum-box").innerHTML += document.querySelector(".eightbtn").innerHTML
 }})
 


 var nineNumberButton = document.querySelector(".ninebtn")
    nineNumberButton.addEventListener("click", function() {
    if (parseInt(document.querySelector(".sum-box").innerHTML) === 0) {
            document.querySelector(".sum-box").innerHTML = document.querySelector(".ninebtn").innerHTML 
    }
    else {
        document.querySelector(".sum-box").innerHTML += document.querySelector(".ninebtn").innerHTML
    }
        })
    

var fourNumberButton = document.querySelector(".fourbtn")
        fourNumberButton.addEventListener("click", function() {
        if (parseInt(document.querySelector(".sum-box").innerHTML) === 0) {
                document.querySelector(".sum-box").innerHTML = document.querySelector(".fourbtn").innerHTML 
        }
        else {
            document.querySelector(".sum-box").innerHTML += document.querySelector(".fourbtn").innerHTML
        }
            })
        




var fiveNumberButton = document.querySelector(".fivebtn")
            fiveNumberButton.addEventListener("click", function() {
            if (parseInt(document.querySelector(".sum-box").innerHTML) === 0) {
                    document.querySelector(".sum-box").innerHTML = document.querySelector(".fivebtn").innerHTML 
            }
            else {
                document.querySelector(".sum-box").innerHTML += document.querySelector(".fivebtn").innerHTML
            }
                })



 var sixNumberButton = document.querySelector(".sixbtn")
    sixNumberButton.addEventListener("click", function() {
    if (parseInt(document.querySelector(".sum-box").innerHTML) === 0) {
            document.querySelector(".sum-box").innerHTML = document.querySelector(".sixbtn").innerHTML 
    }
    else {
        document.querySelector(".sum-box").innerHTML += document.querySelector(".sixbtn").innerHTML
    }
        })



 var oneNumberButton = document.querySelector(".onebtn")
    oneNumberButton.addEventListener("click", function() {
    if (parseInt(document.querySelector(".sum-box").innerHTML) === 0) {
            document.querySelector(".sum-box").innerHTML = document.querySelector(".onebtn").innerHTML 
    }
    else {
        document.querySelector(".sum-box").innerHTML += document.querySelector(".onebtn").innerHTML
    }
        })




 var twoNumberButton = document.querySelector(".twobtn")
    twoNumberButton.addEventListener("click", function() {
    if (parseInt(document.querySelector(".sum-box").innerHTML) === 0) {
            document.querySelector(".sum-box").innerHTML = document.querySelector(".twobtn").innerHTML 
    }
    else {
        document.querySelector(".sum-box").innerHTML += document.querySelector(".twobtn").innerHTML
    }
        })




 var threeNumberButton = document.querySelector(".threebtn")
    threeNumberButton.addEventListener("click", function() {
    if (parseInt(document.querySelector(".sum-box").innerHTML) === 0) {
            document.querySelector(".sum-box").innerHTML = document.querySelector(".threebtn").innerHTML 
    }
    else {
        document.querySelector(".sum-box").innerHTML += document.querySelector(".threebtn").innerHTML
    }
        })



 var zeroNumberButton = document.querySelector(".zerobtn")
    zeroNumberButton.addEventListener("click", function() {
    if (parseInt(document.querySelector(".sum-box").innerHTML) === 0) {
            document.querySelector(".sum-box").innerHTML = document.querySelector(".zerobtn").innerHTML 
    }
    else {
        document.querySelector(".sum-box").innerHTML += document.querySelector(".zerobtn").innerHTML
    }
        })



var pointNumberButton = document.querySelector(".pointbtn")
pointNumberButton.addEventListener("click", function() {
    document.querySelector(".sum-box").innerHTML += document.querySelector(".pointbtn").innerHTML
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
       document.querySelector(".sum-box").innerHTML = parseInt(preMinusOperation) - parseInt(document.querySelector(".sum-box").innerHTML)
    })

})


