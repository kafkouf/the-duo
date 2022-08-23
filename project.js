// the containair of img
// container styling
$('.container').css({
  'height':'1119px',
  'widht':'100%',
  'display':'flex',
  'align-items':'center',
  'justify-content' : 'center'
    })
$('.btn').css({
  'border':'none',
  'outline':'none',
  'background':'#888',
  'padding':'10px 30px',
  'font-size': '20px',
  'color':'#ddd',
  'cursor': 'pointer',
  'margin':'10px auto',      
})
$('.header').css({
  'display':'block',
  'height':'100px',
  'background-color': '#f7f7f7'
      })
$('#logo').css({
  'height':'100px',
  'width':'100px'
  })

$('.logo-container').css({
  'height':'100px',
  'width':'100px',
  'float':'left',
  'background-color':'beige'
  })
$('.most-rated').css({
  'height':'40px',
  'width':'150px',
  'float':'left'
  })
$('.login').css({
  'height':'40px',
  'width':'90px',
  'float':'right'})
$('.sing-up').css({
 'height':'40px',
 'width':'90px',
 'float':'right'
 })
$('.categories').css({
  'height':'40px',
  'width':'90px',
  'float':'left'
 })


$('.slider').css({
  'margin':'50px auto',
  'width':'50%'
})
 
$('.img-box img').css({
  'width':'100%'
})



$('.btn:hover').css({
  'background': '#111'
})


var slider_img = document.querySelector('.slider-img');
var images = ['unnamed.jpg', 'NFT-art.jpg', 'monalisa.jpg' ];
var accounts = []
var currentBets = [0,0,0]
var i = 0;
///aefaefae

function prev(){
  if(i <= 0){ i = images.length; 
  i--}else { i--};
  return setImg();       
}

function next(){
  if(i >= images.length-1){ i = -1;
  i++} else {i++};
  return setImg();       
}

function setImg(){
  var myImage = document.getElementById("mainImage");
  myImage.setAttribute("src","images/" + images[i]);
  //return slider_img.setAttribute('src', "images/"+images[i]);
  
}
function Bet(){
  var bet = document.getElementById("bet");
  var currBet = bet.value;
  console.log(currBet);
  if (currBet > currentBets[i]){
    currentBets[i] = currBet;
  }
}
function returnBet(){
  document.getElementById("currentBet").innerHTML = "The current bet of this art is:" + currentBets[i]; 
}

function checkSignUp(){
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  var passwordConfirm = document.getElementById("password2")
  if (checkPass(password,passwordConfirm) && checkEmail(email)){
    accounts.push([email,password])
    
    var success=document.getElementById("Resultat").innerHTML = "Sign up success!";

    return success;
  }
}
function checkPass(){
  return true;
}
function checkEmail() {
  return true;
}
function checkLogin(){
  var emailLogin = document.getElementById("emailLogin")
  var passwordLogin = document.getElementById("passwordLogin")
  for (var iter = 0; iter<accounts.length();iter++){
    if ( emailLogin === accounts[iter][0] && passwordLogin[iter][1] ){
      document.getElementById("ResultatLogin").innerHTML = "Login success!";
    }
  }
}

function securityCheck(pwd1,pwd2){
            if (/[a-b]/|/[A-B]/|/[0-9]/|/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pwd1)&&
              /[a-b]/|/[A-B]/|/[0-9]/|/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pwd2)&&pwd1.length>7&&pwd1===pwd2){
                       return true           
            }
                  else{
                   return false
                  }
            }
var categorie=$("input[type='radio'][name='drone']:checked").val()
var src =$("input[type='text']").val()
function function_name(categorie,src) {
  var upload=[{categorie:categorie,imgSrc:src}]
  return data.concat(upload)
}
$('.buttonon').click(function_name(categorie,src))


