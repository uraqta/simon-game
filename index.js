var userclickedpatter = ['go' ];
var computer_patter = ['go' ];
lengt_of_comp = userclickedpatter.length;
current_heading = $("h1").text();
function startgame(){    
    $(document).keypress(function(){
        $("h1").text("start")  
        current_heading = $('h1').text();
        var cli = userclickedpatter[0];
        if( cli === "go"){
            computer_patter.pop("go");
            newsequecny();
            userclickedpatter.pop("go");
            
        };
        
    });

   
}    
  $(".btn").click(function (event){
    let  c = event.target;
    let f = $(c).attr("id");
    userclickedpatter.push(f);
    let press = userclickedpatter.length-1;
    checker(press);
if(current_heading === "start"){
    animate(f);
   
};   
});
startgame();  
function animate(color){

    $("."+color).addClass( "pressed" );
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
    setTimeout(function(){
         $("."+color).removeClass( "pressed" )
  
        },100);
    }
   
function newsequecny(){

   
    let code = Math.floor(Math.random()*4+1);
   
    if(code === 1){
        computer_patter.push('red');
        animate("red");
    }
    else if(code == 2){
        computer_patter.push("yellow");
        animate("yellow");

    }
    else if(code == 3){
        computer_patter.push("green");
        animate("green");
        
    }
    else{
        computer_patter.push("blue");
        animate("blue");
    }
};





function checker(key){
var lev = 2
    if(userclickedpatter[key] === computer_patter[key] && userclickedpatter.length === computer_patter.length){
        console.log("seeh");
        setTimeout(function(){newsequecny();},1000);
        userclickedpatter = [ ];
        $("h1").text("level"+" "+key);
        lev++;
        
    }
    else if(userclickedpatter[key] !== computer_patter[key]){
        computer_patter = ['go'];
        userclickedpatter = ['go'];
        $("h1").text("Press A Key to Start");
        var aud = new Audio("sounds/wrong.mp3");
        aud.play();
        $("body").css("background-color","red");
        setTimeout(function(){ $("body").css("background-color","#011F3F");
    },500)

    }
};
    


