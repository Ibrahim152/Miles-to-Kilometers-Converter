(function () {
    'use strict';
    let convertType='miles';
    const heading =document.querySelector('h1');
    const intro=document.querySelector('p');
    const ansDiv=document.getElementById('answer');
    const form=document.getElementById('convert');
    document.addEventListener('keydown',function(event){
        let key = event.code;
        if (key==='KeyK'){
            convertType='kilometer';
            heading.innerHTML='kilometer to miles';
            intro.innerHTML='type the kilometer to convert';	
        }
        else if (key==='KeyM'){
            convertType='miles';
            heading.innerHTML=' miles to kilometer';
            intro.innerHTML='type the miles to convert';
        }
    })
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let distance=parseFloat(document.getElementById('distance').value);
        if (distance){
            if (convertType=='miles'){
                let converted=(distance*1.609344).toFixed(3);
                ansDiv.innerHTML=`${distance} miles = ${converted} kilometer`;
            }
            if (convertType=='kilometer'){
                let converted=(distance*0.6213711).toFixed(3);
                ansDiv.innerHTML=`${distance} kilometer = ${converted} miles`;
            }
        }
        else{
            ansDiv.innerHTML='not valid'
        }
    })
}())