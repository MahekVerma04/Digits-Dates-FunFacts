const button = document.getElementById('btn');
const input = document.getElementById("io")

const num = document.getElementById('num')
// const type =document.getElementById('type')


// document.addEventListener("click" , removeText);

const radio=document.querySelectorAll("input[name='type']");
const msg=document.getElementById("msg");

button.addEventListener("click", checkInput)

function checkInput(){
   
    const msg=document.getElementById("msg");
    const num = document.getElementById('num')

    if(input.value==="" ){
        msg.innerText="Please enter a number";
        msg.style.color= "white"
        num.innerText="Enter a number to get a fact"


    }
    else{
        console.log("heyyy")
    }
}

// function removeText(){
//     const msg=document.getElementById("msg");
//     msg.innerText=""
// }

msg.style.visibility='none';
radio.forEach(radio => {
    
    radio.addEventListener('click', (event)=>{
        msg.style.fontSize="20px"
        if(event.target.value==='date'){
            // const msg=event.target.value;
            msg.innerText= `Write date in format in MM/DD; 01/10`;
        }
        else if(event.target.value==='math'){
            msg.innerText=`Write a number to get a mind-blowing math related fact`
        }
        else if(event.target.value==='trivia'){
            msg.innerText=`Type a number to get a General Trivia`
        }
        else if(event.target.value==='year'){
            msg.innerText=`Get a year wise fact`
        }
        else{
            // msg.style.display='none';
            msg.style.visibility='none';
        }
        

    })

})



async function getData(number,type) {
const p = await fetch(`http://numbersapi.com/${number}/${type}`)
    return await p.text()
}

button.addEventListener('click', async () => {
    const value =input.value;
    const type=document.querySelector('input[name="type"]:checked');
    // const value1 = input.type;
    const result = await getData(value,type.value)
    console.log(result)
    num.innerText =`${result}`
    
})