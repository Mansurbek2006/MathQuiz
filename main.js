let sign='';
let sgsc=0;
let example;
let result;
let True=0;
let False=0;
  let buttons=document.querySelectorAll('button');
  buttons.forEach(function(btn){
    btn.addEventListener('click',function(){
      if (sgsc==0){
        sign+=btn.textContent;
        sgsc+=1;
        a()
      }
    })
  })
function a(){
  let m=0;
  let numberOne=Math.floor(Math.random()*100);
  let numberTwo=Math.floor(Math.random()*100);
  if (sign=='+'){
    result=numberOne+numberTwo;
    example=`${numberOne}+${numberTwo}=?`;
  }else if(sign=='-'){
    while (true) {
      let numberOne=Math.floor(Math.random()*100);
      let numberTwo=Math.floor(Math.random()*100);
      if ((numberOne-numberTwo)>=1){
        result=numberOne-numberTwo;
        example=`${numberOne}-${numberTwo}=?`;
        break
      }
    }
  }else if(sign=='×'){
    while (true) {
      let numberOne=Math.floor(Math.random()*100);
      let numberTwo=Math.floor(Math.random()*100);
      if (numberTwo*numberOne<=999){
        result=numberTwo*numberOne;
        example=`${numberTwo}×${numberOne}=?`;
        break
      }
    }
  }else{
    while (true) {
      let numberOne=Math.floor(Math.random()*10);
      let numberTwo=Math.floor(Math.random()*100);
      if (numberTwo/numberOne==parseInt(numberTwo/numberOne)){
        result=numberTwo/numberOne;
        example=`${numberTwo}÷${numberOne}=?`;
        break
      }
    }
  }
  
  



  let btnNumbers=[];
  while(btnNumbers.length!=3){
    let plus=result+(Math.floor(Math.random()*25));
    if(plus!=result){
      btnNumbers.push(plus);
    }
  }
  let t=-1;
  btnNumbers.push(result);
  let btns=['one','two','three','four'];
  let nbtns=[];
  while(nbtns.length!=4){
    let nu=Math.floor(Math.random()*btns.length);
    let aie=btns[nu]
    if(nbtns.indexOf(aie)==-1){
      document.getElementById(`${aie}`).innerHTML=btnNumbers[t+=1]
      nbtns.push(aie)
    }
  }
  document.querySelector('.viewer').innerHTML=example;
  let bts=document.querySelectorAll('.btn');
  let i=0;
  bts.forEach((e)=>{
    e.addEventListener('click',()=>{
      if(i==0 && e.textContent==result){
        True+=1;
        i+=1;
        a()
        score('lime')
      }
      if(i==0 && e.textContent!=result){
        False+=1;
        i+=1;
        a()
        score('red')
      }
    })
  })
  }
  let numScore=0;
  let hrw=0;
  function score(color){
    hrw+=12;
    numScore+=1;
    let hr=document.querySelector('hr')
    hr.width=hrw;
    hr.color=color;
    hr.style=`background-color: ${color};`;
    if(numScore==20){
      document.querySelector('.in-object').innerHTML=`
      <h1>The End</h1>
      <p>Result: ${True/0.2}%</p>
      <p>True: ${True}</p>
      <p>False: ${False}</p>
      <p class='ok'>OK</p>`
    }
    let ok=document.querySelector('.ok')
    if(ok!=null){
      ok.addEventListener('click',function(){
        document.location.reload()
    })
    }
  }
