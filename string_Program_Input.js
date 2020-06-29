const countwords=() =>{
    let numbofchar = document.getElementById('words').value.length;
    alert(numbofchar);
    document.getElementById('showdata').innerHTML = numbofchar;
}