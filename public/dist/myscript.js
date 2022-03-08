
let messages = [];
const addMessage = (ev)=>{
    // ev.preventDefault();
    
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value;
    var mail= document.getElementById('email').value;
    var text= document.getElementById('msg').value;

    if(fname != "" && mail != "" && text != ""){
        
        let message ={
            name : fname+" "+lname,
            email : mail,
            text : text
        }
        messages.push(message);
        document.forms[0].reset();

        console.warn('added', {messages});  //display

// selecting first letter of first name and last name 
            var fletter= message.name.split(" ")[0].split("")[0];
            var lletter=message.name.split(" ")[1].split("")[0];
            var avatar=fletter+lletter;
            
// adding div block for new messages
        var div = document.createElement('div');
        div.setAttribute('class','flex bg-white shadow-lg pr-10 pl-3 rounded hover:bg-gray-100 items-center justify-center md:justify-start');
        div.innerHTML = document.getElementById('blockofstuffs').innerHTML;

        div.innerHTML = div.innerHTML
            .replace(/{avatar}/g,avatar)
            .replace(/{name}/g, message.name)
            .replace(/{message}/g, message.text)

        document.getElementById('userMessages').appendChild(div);

        setBg();
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sendbtn').addEventListener('click',addMessage);
});

const setBg = () => {
    const bg = document.getElementsByClassName("innerColor");
    const bgOuter= document.getElementsByClassName("outerColor");
    let last = bg.length - 1;
    let lastOuter = bgOuter.length - 1;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColorOuter = randomColor + 33;
    bg[last].style.backgroundColor = "#" + randomColor;
    bgOuter[lastOuter].style.backgroundColor = "#" + randomColorOuter;


}