
// console.log("test..........")

// donate card start..


document.getElementById("donate-one-btn").addEventListener("click",function(){
    // const totalDonateOne = Number(document.getElementById("donate-one").innerText);
    // const donateInputOne = Number(document.getElementById("donate-input-one").value);
    // const balance = Number(document.getElementById("balance").innerText);
    const totalDonateOne = document.getElementById("donate-one").innerText;
    const donateInputOne = document.getElementById("donate-input-one").value;
    const balance = document.getElementById("balance").innerText;
// console.log(balance)
// console.log(totalDonateOne)
// console.log(donateInputOne)

    if(Number(balance) < Number( donateInputOne)){
        alert("your account does not have sufficient balance");
        document.getElementById("donate-input-one").value= "";
        return;
    }

    else if( donateInputOne < 1 ||isNaN(Number(donateInputOne)) || Number(balance) < Number(donateInputOne)) {
        alert("invalid donation amount");
        
        document.getElementById("donate-input-one").value= "";
        return;
    }


    const newTotalDonateOne = Number(totalDonateOne) + Number(donateInputOne);
    console.log(newTotalDonateOne)


    document.getElementById("donate-one").innerText = newTotalDonateOne;


    document.getElementById("donate-input-one").value="";


    const newBalance = Number(balance) - donateInputOne;
    // console.log(newBalance)
    // console.log(typeof newBalance)

    document.getElementById("balance").innerText = newBalance;
});

// --------------------------->card 2<-------------------->


document.getElementById("donate-two-btn").addEventListener("click",function(){


    const donateInputTwo = document.getElementById("donate-input-two").value;
    const totalDonateTwo = document.getElementById("donate-two").innerText;
    const balance = document.getElementById("balance").innerText;
    // console.log("test.....")
    // console.log(donateInputTwo)
    // console.log(totalDonateTwo)
    // console.log( balance)


    if(Number(balance) < Number( donateInputTwo)){
        alert("your account does not have sufficient balance");
        document.getElementById("donate-input-two").value= "";
        return;
    }

    else if( donateInputTwo < 1 ||isNaN(Number(donateInputTwo)) || Number(balance) < Number(donateInputTwo)) {
        alert("invalid donation amount");
        
        document.getElementById("donate-input-one").value= "";
        return;
    }

    const newTotalDonateTwo = Number(totalDonateTwo) + Number(donateInputTwo);
    console.log(newTotalDonateTwo)


    document.getElementById("donate-two").innerText = newTotalDonateTwo;


    document.getElementById("donate-input-two").value="";


    const newBalance = Number(balance) - donateInputTwo;


    document.getElementById("balance").innerText = newBalance;
});


// ------------>card 3---<---------------->



document.getElementById("donate-three-btn").addEventListener("click",function(){


    const donateInputThree = document.getElementById("donate-input-three").value;
    const totalDonateThree = document.getElementById("donate-three").innerText;
    const balance = document.getElementById("balance").innerText;
    // console.log("test.....")
    // console.log(donateInputThree)
    // console.log(newTotalDonateThree)
    // console.log( balance)


    if(Number(balance) < Number( donateInputThree)){
        alert("your account does not have sufficient balance");
        document.getElementById("donate-input-three").value= "";
        return;
    }

    else if( donateInputThree < 1 ||isNaN(Number(donateInputThree)) || Number(balance) < Number(donateInputThree)) {
        alert("invalid donation amount");
        
        document.getElementById("donate-input-three").value= "";
        return;
    }


    const newTotalDonateThree = Number(totalDonateThree) + Number(donateInputThree);
    console.log(newTotalDonateThree)


    document.getElementById("donate-three").innerText = newTotalDonateThree;


    document.getElementById("donate-input-three").value="";


    const newBalance = Number(balance) - donateInputThree;


    document.getElementById("balance").innerText = newBalance;
});



// ----------------->TODO: history section strat........<--------------->



