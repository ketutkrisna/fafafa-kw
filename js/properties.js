	var randaimage=['<img src="assets/img/item/wild.png" width="100%" height="100%">',
					'<img src="assets/img/item/koin.png" width="100%" height="100%">',
					'<img src="assets/img/item/petasan.png" width="100%" height="100%">',
					'<img src="assets/img/item/liontin.png" width="100%" height="100%">',
					'<img src="assets/img/item/kendang.png" width="100%" height="100%">',
					'<img src="assets/img/item/bocilping.png" width="100%" height="100%">',
					'<img src="assets/img/item/bocilijo.png" width="100%" height="100%">',
					'<img src="assets/img/item/kakekbiru.png" width="100%" height="100%">',
					'<img src="assets/img/item/kakekmerah.png" width="100%" height="100%">',
					'<img src="assets/img/item/koin.png" width="100%" height="100%">',
					'<img src="assets/img/item/scatter.png" width="100%" height="100%">'];
	var randaimagetirai=['<img src="assets/img/item/wild.png" width="100%" height="100%">',
					'<img src="assets/img/item/koin.png" width="100%" height="100%">',
					'<img src="assets/img/item/petasan.png" width="100%" height="100%">',
					'<img src="assets/img/item/liontin.png" width="100%" height="100%">',
					'<img src="assets/img/item/kendang.png" width="100%" height="100%">',
					'<img src="assets/img/item/bocilping.png" width="100%" height="100%">',
					'<img src="assets/img/item/bocilijo.png" width="100%" height="100%">',
					'<img src="assets/img/item/kakekbiru.png" width="100%" height="100%">',
					'<img src="assets/img/item/kakekmerah.png" width="100%" height="100%">',
					'<img src="assets/img/item/koin.png" width="100%" height="100%">',
					'<img src="assets/img/item/tirai.png" width="100%" height="100%">',
					'<img src="assets/img/item/scatter.png" width="100%" height="100%">'];
	var bonusalltheway=['Semoga beruntung','Rezeki melimpah','Jangan lupa sedekah','Bonus all the way'];
	var randa=[0,1,2,3,4,5,6,7,8,1,50];
	var randatirai=[0,1,2,3,4,5,6,7,8,1,100,50];
	var ran0,ran1,ran2,ran3,ran4,ran5,ran6,ran7,ran8,ran9,ran10,ran11,ran12,ran13,ran14;
	var data0_1Lbounce,data0_1Rbounce;
	var baruarr1;
	var tampunghasil;
	var spinkolom1,spinkolom2,spinkolom3,spinkolom4,spinkolom5;
	var data0_1L,data0_1R;
	var cek0_1L,cek0_1R;
	var data0_2L,data0_2R;
	var cek0_2L,cek0_2R;
	var data0_3L,data0_3R;
	var cek0_3L,cek0_3R;
	var data1_1L,data1_1R;
	var cek1_1L,cek1_1R;
	var data1_2L,data1_2R;
	var cek1_2L,cek1_2R;
	var data1_3L,data1_3R;
	var cek1_3L,cek1_3R;
	var data2_1L,data2_1R;
	var cek2_1L,cek2_1R;
	var data2_2L,data2_2R;
	var cek2_2L,cek2_2R;
	var data2_3L,data2_3R;
	var cek2_3L,cek2_3R;
	var timetampung;

	var speed1=1000;
	var speed2=1400;
	var speed3=1800;
	var speed4=2200;
	var speed5=2600;
	var speedtirai=2600;
	var speedrotate=2;
	var speedrotateclone=2000;
	var speedanimate=500;
	var speeder = 500;
	var intervalspin;
	var jumlahspin=0; 
	var spincount=0;
	var timeanimate;

	var spinoto=false;
	var freespin=false;

	// ========================================

	
	var arrinti;
	var gift=document.getElementById('gift');
	var gift1=document.getElementById('gift1');
	var gift2=document.getElementById('gift2');
	var reelstop=document.getElementById('reelstop');
	var btn_spin=document.getElementById('btn_spin');
	var btn_stop=document.getElementById('btn_stop');
	var midwin=document.getElementById('midwin');
	var increcount=0;
	var stopini1;
	var indextirai;
	var data0_1tirai;
	var cek0_1tirai;
	var datatirai;
	var indexdatatirai;
	var cekdatatirai;
	var arrscatter;
	var jumlahscatter;

	var acakjikaadatirai1;
	var acakjikaadatirai2;
	var acakjikaadatirai3;
	var acakjikaadatirai4;
	var acakjikaadatirai5;
	var indexscatter;

	var jumlahfreespin=0;
	var oke=0;
	var persulit=true;
