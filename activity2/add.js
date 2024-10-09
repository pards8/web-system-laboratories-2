const firstname = document.getElementById('firstname');

const program = document.getElementById('program');

const button = document.getElementById('button');

const ul = document.getElementById('studentlist');

button.addEventListener('click', ()=>{
    
    const newfirstname = firstname.value;
    const newprogram = program.value;

    
    //create element
    const h4 = document.createElement('h4');
    const small = document.createElement('small');

    //set value to element
    h4.innerHTML = newfirstname;
    small.innerHTML = newprogram;

    //add class to element
    h4.classList.add('Firstnames');
    small.classList.add('programs');

    //create container
    const li = document.createElement('li');

    li.append(h4);
    li.append(small);

    //append list
    ul.append(li);

    console.log(li);


})