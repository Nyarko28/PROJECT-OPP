function post(){
    const formname= document.querySelector('.name');
   const formage= document.querySelector('.age');
   const formarea= document.querySelector('.area')
   const formgender= document.querySelector('.gender')

   const onidage= document.querySelector('.idage')
   const onidname= document.querySelector('.idname')
   const onidarea= document.querySelector('.idarea');
  const onidgender= document.querySelector('.idgender');
   onidname.innerHTML=formname.value;
   onidage.innerHTML=formage.value + '  years';
   onidarea.innerHTML=formarea.value;
   onidgender.innerHTML=formgender.value;
// check 
   let unqualified;
   if(formage.value>=18){
       document.querySelector('.card').
       style.display='block';
       document.querySelector('.card').
       style.display='flex';
       document.querySelector('.card').
       style.flexDirection='row';
       
       
}else if(formage.value<<18){
    document.querySelector('.not').style.display='block';
    document.querySelector('.warn').innerHTML=formname.value +
     ` 
     you are  unqualified `
     ;

    document.querySelector('.card').style.display='none'
    let video=document.querySelector('.vid');
    video.style.display='block'
    video.load();
    video.play();

    
   }
   let randomid= ( Math.trunc(Math.random()*formage.value *185768787987));
   if(formgender.value=='female'){
    document.querySelector('.gender_pic').style.background="url('FB_IMG_17037813031590210.jpg')"
    document.querySelector('.gender_pic').style.backgroundSize='cover';
   document.querySelector('.idname').innerHTML = 'Miss ' + document.querySelector('.idname').innerHTML;
   document.querySelector('.idgender').innerHTML= '  ID:' +randomid;

   
   }else if(formgender.value=='male'){
    document.querySelector('.gender_pic').style.background="url('FB_IMG_17039229196061031.jpg')  no-repeat center"
    document.querySelector('.gender_pic').style.backgroundSize='cover';
    document.querySelector('.idname').innerHTML = 'Mr ' + document.querySelector('.idname').innerHTML;
    document.querySelector('.idgender').innerHTML= '  ID:'+ randomid;
   };
}post()
function closing(){
 
    let alert=document.querySelector('.not');
    if(alert.style.display==='none'){
        alert.style.display='block';
    }else{
        alert.style.display='none';
        let video=document.querySelector('.vid');
        video.style.display='none'
        video.pause();
        let runing=document.querySelector('.why');
        runing.play();
    }
  
}

 
