	$('.speeder').on('change',function(){
		if($('.speeder').val()==0){
			speed1=1000;
			speed2=1400;
			speed3=1800;
			speed4=2200;
			speed5=2600;
			speedtirai=2600;
			speedrotate=2;
			speedrotateclone=2000;
			speedanimate=500;
			speeder = 500;
		}else if($('.speeder').val()==1){
			speed1=900;
			speed2=1200;
			speed3=1500;
			speed4=1800;
			speed5=2100;
			speedtirai=2100;
			speedrotate=1.5;
			speedrotateclone=1500;
			speedanimate=400;
			speeder = 400;
		}else if($('.speeder').val()==2){
			speed1=800;
			speed2=1000;
			speed3=1200;
			speed4=1400;
			speed5=1600;
			speedtirai=1600;
			speedrotate=1.1;
			speedrotateclone=1100;
			speedanimate=300;
			speeder = 300;
		}else if($('.speeder').val()==3){
			speed1=700;
			speed2=850;
			speed3=1000;
			speed4=1150;
			speed5=1300;
			speedtirai=1300;
			speedrotate=.7;
			speedrotateclone=700;
			speedanimate=200;
			speeder = 200;
		}
	})

	$('.hard').on('change',function(){
		var valt=$('.hard').val();
		console.log(valt);
		if(valt=='mudah'){
			persulit=false;
		}else{
			persulit=true;
		}
	})

	$('.spinotomatis').on('click',function(){
		jumlahspin=$(this).data('spinotomatis');
		$('#startspin').click();
		$('#stopspin').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;top:0;">'+(Number(jumlahspin))+'</span></sup>');
		spinoto=true;
	})