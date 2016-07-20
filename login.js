function check(form){
 
 	if(form.userid.value == "QA" && form.pswrd.value == "101")
  {
    window.open('yearup.html')
  }
 	else
 {
   alert("Wrong Password or Username")
  }
}
		$(document).ready(function() {
		
			$curtainopen = false;
		
			$(".rope").click(function(){
				$(this).blur();
				if ($curtainopen == false){ 
					$(this).stop().animate({top: '0px' }, {queue:false, duration:350, easing:'easeOutBounce'}); 
					$(".leftcurtain").stop().animate({width:'60px'}, 2000 );
					$(".rightcurtain").stop().animate({width:'60px'},2000 );
					$curtainopen = true;
				}else{
					$(this).stop().animate({top: '-40px' }, {queue:false, duration:350, easing:'easeOutBounce'}); 
					$(".leftcurtain").stop().animate({width:'50%'}, 2000 );
					$(".rightcurtain").stop().animate({width:'51%'}, 2000 );
					$curtainopen = false;
				}
				return false;
			});
			
		});