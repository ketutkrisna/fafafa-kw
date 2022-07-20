	function starts(){
		$('#tunggus').hide();
		$('#starts').show();
		$('#stops').hide();
	}
	function tunggus(){
		$('#tunggus').show();
		$('#starts').hide();
		$('#stops').hide();
	}
	function stops(){
		$('#tunggus').hide();
		$('#stops').show();
		$('#starts').hide();
	}

	function spinotomatis(timespin,incre){
		if(timespin==0){
			if(indexscatter.length>2){
				setTimeout(function(){
					$('#startspin').click();
				},speedanimate*timespin+speeder+speedrotateclone);
			}else{
				setTimeout(function(){
					$('#startspin').click();
				},speedanimate*timespin+speeder);
			}
		}else if(timespin==500){
			if(indexscatter.length>2){
				setTimeout(function(){
					$('#startspin').click();
				},speedanimate*1+speeder+speeder+speeder+speeder+speeder+speedrotateclone);
			}else{
				setTimeout(function(){
					$('#startspin').click();
				},speedanimate*1+speeder+speeder+speeder+speeder+speeder);
			}
		}else{
			if(indexscatter.length>2){
				setTimeout(function(){
					$('#startspin').click();
				},speedanimate*timespin+speeder+speeder+speeder+speeder+speeder+speeder+speedrotateclone);
			}else{
				setTimeout(function(){
					$('#startspin').click();
				},speedanimate*timespin+speeder+speeder+speeder+speeder+speeder+speeder);
			}
		}
	}

	function animaterotate(dataimgrotate,timeanimate,gelape){
		if(indexscatter.length>2){
			speedrotateclone=speedrotateclone+speedrotateclone+speeder;
		}else{
			speedrotateclone=speedrotateclone;
		}
		$('.normal img').css({
			'filter':'grayscale(10%)'
		})
		dataimgrotate.css({
			'filter':'blur(0px)'
		})
		setTimeout(function() {
			if(freespin==true){
				$('.item0,.item1,.item2,.item3,.item4,.item5,.item6,.item7,.item8,.item9,.item10,.item11,.item12,.item13,.item14').css({
					'color':'orange',
					'background-color':'#616161',
					'box-shadow':'-2px -2px 4px rgba(0,0,0,.3)'
				});
			}else{
				$('.item0,.item1,.item2,.item3,.item4,.item5,.item6,.item7,.item8,.item9,.item10,.item11,.item12,.item13,.item14').css({
					'color':'orange',
					'background-color':'#04e0dd',
					'box-shadow':'-2px -2px 4px rgba(0,0,0,.3)'
				});
			}
			gelape.hide();
			dataimgrotate.css({
				'filter':'blur(0px)'
			})
			$('.fillclip').hide();
			$('#midwin')[0].play();
			dataimgrotate.css('animation','bounce7 '+speedrotate+'s ease');
			setTimeout(function() {
				dataimgrotate.addClass('bounce7');
				setTimeout(function() {
					if(spinoto==true){
						if(indexscatter.length>2){

						}else{
							stops();
						}
					}else{
						if(indexscatter.length>2){

						}else{
							starts();
						}
					}
				}, speedrotateclone);
			}, speeder);
		}, speedanimate*timeanimate+speeder);
	}



	function matchallitem(timeexecute){
		stopini1 = setTimeout(function() {
			data0_1tirai=[randatirai[ran0],randatirai[ran1],randatirai[ran2],randatirai[ran3],randatirai[ran4]];
			indextirai=[];
			cek0_1tirai=data0_1tirai.filter(function(element,index){
				return element==100;
			})
			data0_1tirai.filter(function(element,index){
				if(cek0_1tirai.length>1){
					if (element==100) {
						if(index==0){
							indextirai.push(0,5,10);
							ran0=10;
							ran5=0;
							ran10=0;
						}else if(index==1){
							indextirai.push(1,6,11);
							ran1=10;
							ran6=0;
							ran11=0;
						}else if(index==2){
							indextirai.push(2,7,12);
							ran2=10;
							ran7=0;
							ran12=0;
						}else if(index==3){
							indextirai.push(3,8,13);
							ran3=10;
							ran8=0;
							ran13=0;
						}else if(index==4){
							indextirai.push(4,9,14);
							ran4=10;
							ran9=0;
							ran14=0;
						}
					}
				}
			})



			if(indextirai.length>1){
				setTimeout(function() {
					indextirai.map(function(el,ind){
						$('.itemtirai'+el).show();
						setTimeout(function() {
							$('.tiraihide').fadeOut(100);
							$('.item'+el).html('<img src="assets/img/item/tirai.png" width="100%" height="100%">');
							// $('.itemtirai'+el).html('<img src="assets/img/item/tirai.png" width="100%" height="100%">');
						}, speeder+speeder+speeder);
						if(el==0||el==1||el==2||el==3||el==4){
							$('.itemtirai'+el).css({
								'transform':'translateY(0px)',
								'transition': (speeder+speeder+speeder)+'ms'
							})
						}else if(el==5||el==6||el==7||el==8||el==9){
							$('.itemtirai'+el).css({
								'transform':'translateY(65px)',
								'transition': (speeder+speeder+speeder)+'ms'
							})
						}else if(el==10||el==11||el==12||el==13||el==14){
							$('.itemtirai'+el).css({
								'transform':'translateY(130px)',
								'transition': (speeder+speeder+speeder)+'ms'
							})
						}
					})
				}, speeder+speeder);
			}

			if(indexscatter.length>2&&indextirai.length>1){
				// indexscatter.filter(function(elt,indt){
				// 	$('.item'+elt).css('animation','bounce8 '+speedrotate+'s ease');
				// })
				setTimeout(function() {
					indexscatter.filter(function(el,ind){
						$('.item'+el).addClass('bounce8');
					})

					setTimeout(function() {
						$('.normal').removeClass('bounce8');
					}, speedrotateclone);
				}, speedanimate*tampunghasil.length+speeder+speeder+speeder+speeder+speeder+speeder);
			}else if(indexscatter.length>2&&indextirai.length<2){
				setTimeout(function() {
					indexscatter.filter(function(el,ind){
						$('.item'+el).addClass('bounce8');
					})

					setTimeout(function() {
						$('.normal').removeClass('bounce8');
					}, speedrotateclone);
				}, speedanimate*tampunghasil.length+speeder);
			}

			console.log(tampunghasil.length)




			//data0_1 ===================================================================
			data0_1L=[randatirai[ran0],randatirai[ran1],randatirai[ran2],randatirai[ran3],randatirai[ran4]];
			cek0_1L=data0_1L.filter(function(element,index){
				return element!=0&&element!=100&&element!=50;
			})
			data0_1L.filter(function(element,index){
				if(cek0_1L.length==0){
					data0_1L.splice(index, index+1, index+55);
				}else if(element==0||element==100){
						data0_1L.splice(index, 1, cek0_1L[0]);
				}
			})
			data0_1R=[randatirai[ran0],randatirai[ran1],randatirai[ran2],randatirai[ran3],randatirai[ran4]];
			cek0_1R=data0_1R.filter(function(element,index){
				return element!=0&&element!=100&&element!=50;
			})
			data0_1R.filter(function(element,index){
				if(cek0_1R.length==0){
					data0_1R.splice(index, index+1, index+55);
				}else if(element==0||element==100){
						data0_1R.splice(index, 1, cek0_1R[cek0_1R.length-1]);	
				}
			})
			if(data0_1L[0]==data0_1L[1]&&data0_1L[0]==data0_1L[2]&&data0_1L[0]==data0_1L[3]&&data0_1L[0]==data0_1L[4]){
				if(data0_1L[0]!=50&&data0_1L[0]!=0){
					data0_1L.push('0_1LFULL5');
					tampunghasil.push(data0_1L);
				}
			}else{
				if(data0_1L[0]==data0_1L[1]&&data0_1L[0]==data0_1L[2]&&data0_1L[0]==data0_1L[3]){
					if(data0_1L[0]!=50&&data0_1L[0]!=0){
						data0_1L.push('0_1LFULL4');
						tampunghasil.push(data0_1L);
					}
				}else if(data0_1L[0]==data0_1L[1]&&data0_1L[0]==data0_1L[2]){
					if(data0_1L[0]!=50&&data0_1L[0]!=0){
						data0_1L.push('0_1LFULL3');
						tampunghasil.push(data0_1L);
					}
				}
				if(data0_1R[4]==data0_1R[3]&&data0_1R[4]==data0_1R[2]&&data0_1R[4]==data0_1R[1]){
					if(data0_1R[4]!=50&&data0_1R[4]!=0){
						data0_1R.push('0_1RFULL4');
						tampunghasil.push(data0_1R);
					}
				}else if(data0_1R[4]==data0_1R[3]&&data0_1R[4]==data0_1R[2]){
					if(data0_1R[4]!=50&&data0_1R[4]!=0){
						data0_1R.push('0_1RFULL3');
						tampunghasil.push(data0_1R);
					}
				}
			}
			//tutup data0_1 ===================================================================

			//data0_2 ===================================================================
			data0_2L=[randatirai[ran0],randatirai[ran1],randa[ran7],randatirai[ran3],randatirai[ran4]];
			cek0_2L=data0_2L.filter(function(element,index){
				return element!=0&&element!=100&&element!=50;
			})
			data0_2L.filter(function(element,index){
				if(cek0_2L.length==0){
					data0_2L.splice(index, index+1, index+55);
				}else if(element==0||element==100){
						data0_2L.splice(index, 1, cek0_2L[0]);
				}
			})
			data0_2R=[randatirai[ran0],randatirai[ran1],randa[ran7],randatirai[ran3],randatirai[ran4]];
			cek0_2R=data0_2R.filter(function(element,index){
				return element!=0&&element!=100&&element!=50;
			})
			data0_2R.filter(function(element,index){
				if(cek0_2R.length==0){
					data0_2R.splice(index, index+1, index+55);
				}else if(element==0||element==100){
						data0_2R.splice(index, 1, cek0_2R[cek0_2R.length-1]);
				}
			})
			if(data0_2L[0]==data0_2L[1]&&data0_2L[0]==data0_2L[2]&&data0_2L[0]==data0_2L[3]&&data0_2L[0]==data0_2L[4]){
				if(data0_2L[0]!=50&&data0_2L[0]!=0){
					data0_2L.push('0_2LFULL5');
					tampunghasil.push(data0_2L);
				}
			}else{
				if(data0_2L[0]==data0_2L[1]&&data0_2L[0]==data0_2L[2]&&data0_2L[0]==data0_2L[3]){
					if(data0_2L[0]!=50&&data0_2L[0]!=0){
						data0_2L.push('0_2LFULL4');
						tampunghasil.push(data0_2L);
					}
				}else if(data0_2L[0]==data0_2L[1]&&data0_2L[0]==data0_2L[2]){
					if(data0_2L[0]!=50&&data0_2L[0]!=0){
						data0_2L.push('0_2LFULL3');
						tampunghasil.push(data0_2L);
					}
				}
				if(data0_2R[4]==data0_2R[3]&&data0_2R[4]==data0_2R[2]&&data0_2R[4]==data0_2R[1]){
					if(data0_2R[4]!=50&&data0_2R[4]!=0){
						data0_2R.push('0_2RFULL4');
						tampunghasil.push(data0_2R);
					}
				}else if(data0_2R[4]==data0_2R[3]&&data0_2R[4]==data0_2R[2]){
					if(data0_2R[4]!=50&&data0_2R[4]!=0){
						data0_2R.push('0_2RFULL3');
						tampunghasil.push(data0_2R);
					}
				}
			}
			//tutup data0_2 ===================================================================

			//data0_3 ===================================================================
			data0_3L=[randatirai[ran0],randa[ran6],randa[ran12],randa[ran8],randatirai[ran4]];
			cek0_3L=data0_3L.filter(function(element,index){
				return element!=0&&element!=100&&element!=50;
			})
			data0_3L.filter(function(element,index){
				if(cek0_3L.length==0){
					data0_3L.splice(index, index+1, index+55);
				}else if(element==0||element==100){
					data0_3L.splice(index, 1, cek0_3L[0]);	
				}
			})
			data0_3R=[randatirai[ran0],randa[ran6],randa[ran12],randa[ran8],randatirai[ran4]];
			cek0_3R=data0_3R.filter(function(element,index){
				return element!=0&&element!=100&&element!=50;
			})
			data0_3R.filter(function(element,index){
				if(cek0_3R.length==0){
					data0_3R.splice(index, index+1, index+55);
				}else if(element==0||element==100){
					data0_3R.splice(index, 1, cek0_3R[cek0_3R.length-1]);	
				}
			})
			if(data0_3L[0]==data0_3L[1]&&data0_3L[0]==data0_3L[2]&&data0_3L[0]==data0_3L[3]&&data0_3L[0]==data0_3L[4]){
				if(data0_3L[0]!=50&&data0_3L[0]!=0){
					data0_3L.push('0_3LFULL5');
					tampunghasil.push(data0_3L);
				}
			}else{
				if(data0_3L[0]==data0_3L[1]&&data0_3L[0]==data0_3L[2]&&data0_3L[0]==data0_3L[3]){
					if(data0_3L[0]!=50&&data0_3L[0]!=0){
						data0_3L.push('0_3LFULL4');
						tampunghasil.push(data0_3L);
					}
				}else if(data0_3L[0]==data0_3L[1]&&data0_3L[0]==data0_3L[2]){
					if(data0_3L[0]!=50&&data0_3L[0]!=0){
						data0_3L.push('0_3LFULL3');
						tampunghasil.push(data0_3L);
					}
				}
				if(data0_3R[4]==data0_3R[3]&&data0_3R[4]==data0_3R[2]&&data0_3R[4]==data0_3R[1]){
					if(data0_3R[4]!=50&&data0_3R[4]!=0){
						data0_3R.push('0_3RFULL4');
						tampunghasil.push(data0_3R);
					}
				}else if(data0_3R[4]==data0_3R[3]&&data0_3R[4]==data0_3R[2]){
					if(data0_3R[4]!=50&&data0_3R[4]!=0){
						data0_3R.push('0_3RFULL3');
						tampunghasil.push(data0_3R);
					}
				}
			}
			//tutup data0_3 ===================================================================

			//data1_1 ===================================================================
			data1_1L=[randa[ran5],randatirai[ran1],randatirai[ran2],randatirai[ran3],randa[ran9]];
			cek1_1L=data1_1L.filter(function(element,index){
				return element!=0&&element!=100&&element!=50;
			})
			data1_1L.filter(function(element,index){
				if(cek1_1L.length==0){
					data1_1L.splice(index, index+1, index+55);
				}else if(element==0||element==100){
					data1_1L.splice(index, 1, cek1_1L[0]);	
				}
			})
			data1_1R=[randa[ran5],randatirai[ran1],randatirai[ran2],randatirai[ran3],randa[ran9]];
			cek1_1R=data1_1R.filter(function(element,index){
				return element!=0&&element!=100&&element!=50;
			})
			data1_1R.filter(function(element,index){
				if(cek1_1R.length==0){
					data1_1R.splice(index, index+1, index+55);
				}else if(element==0||element==100){
					data1_1R.splice(index, 1, cek1_1R[cek1_1R.length-1]);	
				}
			})
			if(data1_1L[0]==data1_1L[1]&&data1_1L[0]==data1_1L[2]&&data1_1L[0]==data1_1L[3]&&data1_1L[0]==data1_1L[4]){
				if(data1_1L[0]!=50&&data1_1L[0]!=0){
					data1_1L.push('1_1LFULL5');
					tampunghasil.push(data1_1L);
				}
			}else{
				if(data1_1L[0]==data1_1L[1]&&data1_1L[0]==data1_1L[2]&&data1_1L[0]==data1_1L[3]){
					if(data1_1L[0]!=50&&data1_1L[0]!=0){
						data1_1L.push('1_1LFULL4');
						tampunghasil.push(data1_1L);
					}
				}else if(data1_1L[0]==data1_1L[1]&&data1_1L[0]==data1_1L[2]){
					if(data1_1L[0]!=50&&data1_1L[0]!=0){
						data1_1L.push('1_1LFULL3');
						tampunghasil.push(data1_1L);
					}
				}
				if(data1_1R[4]==data1_1R[3]&&data1_1R[4]==data1_1R[2]&&data1_1R[4]==data1_1R[1]){
					if(data1_1R[4]!=50&&data1_1R[4]!=0){
						data1_1R.push('1_1RFULL4');
						tampunghasil.push(data1_1R);
					}
				}else if(data1_1R[4]==data1_1R[3]&&data1_1R[4]==data1_1R[2]){
					if(data1_1R[4]!=50&&data1_1R[4]!=0){
						data1_1R.push('1_1RFULL3');
						tampunghasil.push(data1_1R);
					}
				}
			}
			//tutup data1_1 ===================================================================
			//data1_2 ===================================================================
			data1_2L=[randa[ran5],randa[ran6],randa[ran7],randa[ran8],randa[ran9]];
			cek1_2L=data1_2L.filter(function(element,index){
				return element!=0&&element!=50;
			})
			data1_2L.filter(function(element,index){
				if(cek1_2L.length==0){
					data1_2L.splice(index, index+1, index+55);
				}else if(element==0){
					data1_2L.splice(index, 1, cek1_2L[0]);	
				}
			})
			data1_2R=[randa[ran5],randa[ran6],randa[ran7],randa[ran8],randa[ran9]];
			cek1_2R=data1_2R.filter(function(element,index){
				return element!=0&&element!=50;
			})
			data1_2R.filter(function(element,index){
				if(cek1_2R.length==0){
					data1_2R.splice(index, index+1, index+55);
				}else if(element==0){
					data1_2R.splice(index, 1, cek1_2R[cek1_2R.length-1]);	
				}
			})
			if(data1_2L[0]==data1_2L[1]&&data1_2L[0]==data1_2L[2]&&data1_2L[0]==data1_2L[3]&&data1_2L[0]==data1_2L[4]){
				if(data1_2L[0]!=50&&data1_2L[0]!=0){
					data1_2L.push('1_2LFULL5');
					tampunghasil.push(data1_2L);
				}
			}else{
				if(data1_2L[0]==data1_2L[1]&&data1_2L[0]==data1_2L[2]&&data1_2L[0]==data1_2L[3]){
					if(data1_2L[0]!=50&&data1_2L[0]!=0){
						data1_2L.push('1_2LFULL4');
						tampunghasil.push(data1_2L);
					}
				}else if(data1_2L[0]==data1_2L[1]&&data1_2L[0]==data1_2L[2]){
					if(data1_2L[0]!=50&&data1_2L[0]!=0){
						data1_2L.push('1_2LFULL3');
						tampunghasil.push(data1_2L);
					}
				}
				if(data1_2R[4]==data1_2R[3]&&data1_2R[4]==data1_2R[2]&&data1_2R[4]==data1_2R[1]){
					if(data1_2R[4]!=50&&data1_2R[4]!=0){
						data1_2R.push('1_2RFULL4');
						tampunghasil.push(data1_2R);
					}
				}else if(data1_2R[4]==data1_2R[3]&&data1_2R[4]==data1_2R[2]){
					if(data1_2R[4]!=50&&data1_2R[4]!=0){
						data1_2R.push('1_2RFULL3');
						tampunghasil.push(data1_2R);
					}
				}
			}
			//tutup data1_2 ===================================================================
			//data1_3 ===================================================================
			data1_3L=[randa[ran5],randa[ran11],randa[ran12],randa[ran13],randa[ran9]];
			cek1_3L=data1_3L.filter(function(element,index){
				return element!=0&&element!=50;
			})
			data1_3L.filter(function(element,index){
				if(cek1_3L.length==0){
					data1_3L.splice(index, index+1, index+55);
				}else if(element==0){
					data1_3L.splice(index, 1, cek1_3L[0]);	
				}
			})
			data1_3R=[randa[ran5],randa[ran11],randa[ran12],randa[ran13],randa[ran9]];
			cek1_3R=data1_3R.filter(function(element,index){
				return element!=0&&element!=50;
			})
			data1_3R.filter(function(element,index){
				if(cek1_3R.length==0){
					data1_3R.splice(index, index+1, index+55);
				}else if(element==0){
					data1_3R.splice(index, 1, cek1_3R[cek1_3R.length-1]);	
				}
			})
			if(data1_3L[0]==data1_3L[1]&&data1_3L[0]==data1_3L[2]&&data1_3L[0]==data1_3L[3]&&data1_3L[0]==data1_3L[4]){
				if(data1_3L[0]!=50&&data1_3L[0]!=0){
					data1_3L.push('1_3LFULL5');
					tampunghasil.push(data1_3L);
				}
			}else{
				if(data1_3L[0]==data1_3L[1]&&data1_3L[0]==data1_3L[2]&&data1_3L[0]==data1_3L[3]){
					if(data1_3L[0]!=50&&data1_3L[0]!=0){
						data1_3L.push('1_3LFULL4');
						tampunghasil.push(data1_3L);
					}
				}else if(data1_3L[0]==data1_3L[1]&&data1_3L[0]==data1_3L[2]){
					if(data1_3L[0]!=50&&data1_3L[0]!=0){
						data1_3L.push('1_3LFULL3');
						tampunghasil.push(data1_3L);
					}
				}
				if(data1_3R[4]==data1_3R[3]&&data1_3R[4]==data1_3R[2]&&data1_3R[4]==data1_3R[1]){
					if(data1_3R[4]!=50&&data1_3R[4]!=0){
						data1_3R.push('1_3RFULL4');
						tampunghasil.push(data1_3R);
					}
				}else if(data1_3R[4]==data1_3R[3]&&data1_3R[4]==data1_3R[2]){
					if(data1_3R[4]!=50&&data1_3R[4]!=0){
						data1_3R.push('1_3RFULL3');
						tampunghasil.push(data1_3R);
					}
				}
			}
			//tutup data1_3 ===================================================================
			//data2_1 ===================================================================
			data2_1L=[randa[ran10],randa[ran6],randatirai[ran2],randa[ran8],randa[ran14]];
			cek2_1L=data2_1L.filter(function(element,index){
				return element!=0&&element!=100&&element!=50;
			})
			data2_1L.filter(function(element,index){
				if(cek2_1L.length==0){
					data2_1L.splice(index, index+1, index+55);
				}else if(element==0||element==100){
					data2_1L.splice(index, 1, cek2_1L[0]);	
				}
			})
			data2_1R=[randa[ran10],randa[ran6],randatirai[ran2],randa[ran8],randa[ran14]];
			cek2_1R=data2_1R.filter(function(element,index){
				return element!=0&&element!=100&&element!=50;
			})
			data2_1R.filter(function(element,index){
				if(cek2_1R.length==0){
					data2_1R.splice(index, index+1, index+55);
				}else if(element==0||element==100){
					data2_1R.splice(index, 1, cek2_1R[cek2_1R.length-1]);	
				}
			})
			if(data2_1L[0]==data2_1L[1]&&data2_1L[0]==data2_1L[2]&&data2_1L[0]==data2_1L[3]&&data2_1L[0]==data2_1L[4]){
				if(data2_1L[0]!=50&&data2_1L[0]!=0){
					data2_1L.push('2_1LFULL5');
					tampunghasil.push(data2_1L);
				}
			}else{
				if(data2_1L[0]==data2_1L[1]&&data2_1L[0]==data2_1L[2]&&data2_1L[0]==data2_1L[3]){
					if(data2_1L[0]!=50&&data2_1L[0]!=0){
						data2_1L.push('2_1LFULL4');
						tampunghasil.push(data2_1L);
					}
				}else if(data2_1L[0]==data2_1L[1]&&data2_1L[0]==data2_1L[2]){
					if(data2_1L[0]!=50&&data2_1L[0]!=0){
						data2_1L.push('2_1LFULL3');
						tampunghasil.push(data2_1L);
					}
				}
				if(data2_1R[4]==data2_1R[3]&&data2_1R[4]==data2_1R[2]&&data2_1R[4]==data2_1R[1]){
					if(data2_1R[4]!=50&&data2_1R[4]!=0){
						data2_1R.push('2_1RFULL4');
						tampunghasil.push(data2_1R);
					}
				}else if(data2_1R[4]==data2_1R[3]&&data2_1R[4]==data2_1R[2]){
					if(data2_1R[4]!=50&&data2_1R[4]!=0){
						data2_1R.push('2_1RFULL3');
						tampunghasil.push(data2_1R);
					}
				}
			}
			//tutup data2_1 ===================================================================
			//data2_2 ===================================================================
			data2_2L=[randa[ran10],randa[ran11],randa[ran7],randa[ran13],randa[ran14]];
			cek2_2L=data2_2L.filter(function(element,index){
				return element!=0&&element!=50;
			})
			data2_2L.filter(function(element,index){
				if(cek2_2L.length==0){
					data2_2L.splice(index, index+1, index+55);
				}else if(element==0){
					data2_2L.splice(index, 1, cek2_2L[0]);	
				}
			})
			data2_2R=[randa[ran10],randa[ran11],randa[ran7],randa[ran13],randa[ran14]];
			cek2_2R=data2_2R.filter(function(element,index){
				return element!=0&&element!=50;
			})
			data2_2R.filter(function(element,index){
				if(cek2_2R.length==0){
					data2_2R.splice(index, index+1, index+55);
				}else if(element==0){
					data2_2R.splice(index, 1, cek2_2R[cek2_2R.length-1]);	
				}
			})
			if(data2_2L[0]==data2_2L[1]&&data2_2L[0]==data2_2L[2]&&data2_2L[0]==data2_2L[3]&&data2_2L[0]==data2_2L[4]){
				if(data2_2L[0]!=50&&data2_2L[0]!=0){
					data2_2L.push('2_2LFULL5');
					tampunghasil.push(data2_2L);
				}
			}else{
				if(data2_2L[0]==data2_2L[1]&&data2_2L[0]==data2_2L[2]&&data2_2L[0]==data2_2L[3]){
					if(data2_2L[0]!=50&&data2_2L[0]!=0){
						data2_2L.push('2_2LFULL4');
						tampunghasil.push(data2_2L);
					}
				}else if(data2_2L[0]==data2_2L[1]&&data2_2L[0]==data2_2L[2]){
					if(data2_2L[0]!=50&&data2_2L[0]!=0){
						data2_2L.push('2_2LFULL3');
						tampunghasil.push(data2_2L);
					}
				}
				if(data2_2R[4]==data2_2R[3]&&data2_2R[4]==data2_2R[2]&&data2_2R[4]==data2_2R[1]){
					if(data2_2R[4]!=50&&data2_2R[4]!=0){
						data2_2R.push('2_2RFULL4');
						tampunghasil.push(data2_2R);
					}
				}else if(data2_2R[4]==data2_2R[3]&&data2_2R[4]==data2_2R[2]){
					if(data2_2R[4]!=50&&data2_2R[4]!=0){
						data2_2R.push('2_2RFULL3');
						tampunghasil.push(data2_2R);
					}
				}
			}
			//tutup data2_2 ===================================================================
			//data2_3 ===================================================================
			data2_3L=[randa[ran10],randa[ran11],randa[ran12],randa[ran13],randa[ran14]];
			cek2_3L=data2_3L.filter(function(element,index){
				return element!=0&&element!=50;
			})
			data2_3L.filter(function(element,index){
				if(cek2_3L.length==0){
					data2_3L.splice(index, index+1, index+55);
				}else if(element==0){
					data2_3L.splice(index, 1, cek2_3L[0]);	
				}
			})
			data2_3R=[randa[ran10],randa[ran11],randa[ran12],randa[ran13],randa[ran14]];
			cek2_3R=data2_3R.filter(function(element,index){
				return element!=0&&element!=50;
			})
			data2_3R.filter(function(element,index){
				if(cek2_3R.length==0){
					data2_3R.splice(index, index+1, index+55);
				}else if(element==0){
					data2_3R.splice(index, 1, cek2_3R[cek2_3R.length-1]);	
				}
			})
			if(data2_3L[0]==data2_3L[1]&&data2_3L[0]==data2_3L[2]&&data2_3L[0]==data2_3L[3]&&data2_3L[0]==data2_3L[4]){
				if(data2_3L[0]!=50&&data2_3L[0]!=0){
					data2_3L.push('2_3LFULL5');
					tampunghasil.push(data2_3L);
				}
			}else{
				if(data2_3L[0]==data2_3L[1]&&data2_3L[0]==data2_3L[2]&&data2_3L[0]==data2_3L[3]){
					if(data2_3L[0]!=50&&data2_3L[0]!=0){
						data2_3L.push('2_3LFULL4');
						tampunghasil.push(data2_3L);
					}
				}else if(data2_3L[0]==data2_3L[1]&&data2_3L[0]==data2_3L[2]){
					if(data2_3L[0]!=50&&data2_3L[0]!=0){
						data2_3L.push('2_3LFULL3');
						tampunghasil.push(data2_3L);
					}
				}
				if(data2_3R[4]==data2_3R[3]&&data2_3R[4]==data2_3R[2]&&data2_3R[4]==data2_3R[1]){
					if(data2_3R[4]!=50&&data2_3R[4]!=0){
						data2_3R.push('2_3RFULL4');
						tampunghasil.push(data2_3R);
					}
				}else if(data2_3R[4]==data2_3R[3]&&data2_3R[4]==data2_3R[2]){
					if(data2_3R[4]!=50&&data2_3R[4]!=0){
						data2_3R.push('2_3RFULL3');
						tampunghasil.push(data2_3R);
					}
				}
			}
	//tutup data2_3 ===================================================================
		}, timeexecute);
	}

	function prosesmatchitem(timeproses){
		timetampung = setTimeout(function() {
		tampunghasil.map(function(data,incre){
			timeanimate=Number(tampunghasil.length);
			if(jumlahspin>0){
				if((incre+1)==timeanimate){
					spinotomatis(timeanimate,incre+1);
				}
			}
			if(tampunghasil.length!=0){
				tunggus();
			}
			// console.log(timeanimate);
			setTimeout(function() {
				increcount++;
				$('.increcount').html(increcount+'x bonus');

				if(data[5]=='0_1LFULL5'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item0_0,.item1_1,.item2_2,.item3_3,.item4_4').hide();
					$('.item0,.item1,.item2,.item3,.item4').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl1').show();
					animaterotate($('.item0 img,.item1 img,.item2 img,.item3 img,.item4 img'),(timeanimate-incre),$('.item0_0,.item1_1,.item2_2,.item3_3,.item4_4'),$('.item0,.item1,.item2,.item3,.item4'));
				}
				if(data[5]=='0_1LFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item0_0,.item1_1,.item2_2,.item3_3').hide();
					$('.item0,.item1,.item2,.item3').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl1').show();
					animaterotate($('.item0 img,.item1 img,.item2 img,.item3 img'),(timeanimate-incre),$('.item0_0,.item1_1,.item2_2,.item3_3'),$('.item0,.item1,.item2,.item3'))
				}
				if(data[5]=='0_1LFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item0_0,.item1_1,.item2_2').hide();
					$('.item0,.item1,.item2').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl1').show();
					animaterotate($('.item0 img,.item1 img,.item2 img'),(timeanimate-incre),$('.item0_0,.item1_1,.item2_2'),$('.item0,.item1,.item2'))
				}
				if(data[5]=='0_1RFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item4_4,.item3_3,.item2_2,.item1_1').hide();
					$('.item4,.item3,.item2,.item1').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl1').show();
					animaterotate($('.item4 img,.item3 img,.item2 img,.item1 img'),(timeanimate-incre),$('.item4_4,.item3_3,.item2_2,.item1_1'),$('.item4,.item3,.item2,.item1'))
				}
				if(data[5]=='0_1RFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item4_4,.item3_3,.item2_2').hide();
					$('.item4,.item3,.item2').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl1').show();
					animaterotate($('.item4 img,.item3 img,.item2 img'),(timeanimate-incre),$('.item4_4,.item3_3,.item2_2'),$('.item4,.item3,.item2'))
				}
				// =========================================================================
				if(data[5]=='0_2LFULL5'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item0_0,.item1_1,.item7_7,.item3_3,.item4_4').hide();
					$('.item0,.item1,.item7,.item3,.item4').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl2').show();
					animaterotate($('.item0 img,.item1 img,.item7 img,.item3 img,.item4 img'),(timeanimate-incre),$('.item0_0,.item1_1,.item7_7,.item3_3,.item4_4'),$('.item0,.item1,.item7,.item3,.item4'))
				}
				if(data[5]=='0_2LFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item0_0,.item1_1,.item7_7,.item3_3').hide();
					$('.item0,.item1,.item7,.item3').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl2').show();
					animaterotate($('.item0 img,.item1 img,.item7 img,.item3 img'),(timeanimate-incre),$('.item0_0,.item1_1,.item7_7,.item3_3'),$('.item0,.item1,.item7,.item3'))
				}
				if(data[5]=='0_2LFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item0_0,.item1_1,.item7_7').hide();
					$('.item0,.item1,.item7').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl2').show();
					animaterotate($('.item0 img,.item1 img,.item7 img'),(timeanimate-incre),$('.item0_0,.item1_1,.item7_7'),$('.item0,.item1,.item7'))
				}
				if(data[5]=='0_2RFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item4_4,.item3_3,.item7_7,.item1_1').hide();
					$('.item4,.item3,.item7,.item1').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl2').show();
					animaterotate($('.item4 img,.item3 img,.item7 img,.item1 img'),(timeanimate-incre),$('.item4_4,.item3_3,.item7_7,.item1_1'),$('.item4,.item3,.item7,.item1'))
				}
				if(data[5]=='0_2RFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item4_4,.item3_3,.item7_7').hide();
					$('.item4,.item3,.item7').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl2').show();
					animaterotate($('.item4 img,.item3 img,.item7 img'),(timeanimate-incre),$('.item4_4,.item3_3,.item7_7'),$('.item4,.item3,.item7'))
				}
				// =========================================================================
				if(data[5]=='0_3LFULL5'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item0_0,.item6_6,.item12_12,.item8_8,.item4_4').hide();
					$('.item0,.item6,.item12,.item8,.item4').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl3').show();
					animaterotate($('.item0 img,.item6 img,.item12 img,.item8 img,.item4 img'),(timeanimate-incre),$('.item0_0,.item6_6,.item12_12,.item8_8,.item4_4'),$('.item0,.item6,.item12,.item8,.item4'))
				}
				if(data[5]=='0_3LFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item0_0,.item6_6,.item12_12,.item8_8').hide();
					$('.item0,.item6,.item12,.item8').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl3').show();
					animaterotate($('.item0 img,.item6 img,.item12 img,.item8 img'),(timeanimate-incre),$('.item0_0,.item6_6,.item12_12,.item8_8'),$('.item0,.item6,.item12,.item8'))
				}
				if(data[5]=='0_3LFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item0_0,.item6_6,.item12_12').hide();
					$('.item0,.item6,.item12').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl3').show();
					animaterotate($('.item0 img,.item6 img,.item12 img'),(timeanimate-incre),$('.item0_0,.item6_6,.item12_12'),$('.item0,.item6,.item12'))
				}
				if(data[5]=='0_3RFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item4_4,.item8_8,.item12_12,.item6_6').hide();
					$('.item4,.item8,.item12,.item6').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl3').show();
					animaterotate($('.item4 img,.item8 img,.item12 img,.item6 img'),(timeanimate-incre),$('.item4_4,.item8_8,.item12_12,.item6_6'),$('.item4,.item8,.item12,.item6'))
				}
				if(data[5]=='0_3RFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item4_4,.item8_8,.item12_12').hide();
					$('.item4,.item8,.item12').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl3').show();
					animaterotate($('.item4 img,.item8 img,.item12 img'),(timeanimate-incre),$('.item4_4,.item8_8,.item12_12'),$('.item4,.item8,.item12'))
				}
				// =========================================================================
				if(data[5]=='1_1LFULL5'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item5_5,.item1_1,.item2_2,.item3_3,.item9_9').hide();
					$('.item5,.item1,.item2,.item3,.item9').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl4').show();
					animaterotate($('.item5 img,.item1 img,.item2 img,.item3 img,.item9 img'),(timeanimate-incre),$('.item5_5,.item1_1,.item2_2,.item3_3,.item9_9'),$('.item5,.item1,.item2,.item3,.item9'))
				}
				if(data[5]=='1_1LFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item5_5,.item1_1,.item2_2,.item3_3').hide();
					$('.item5,.item1,.item2,.item3').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl4').show();
					animaterotate($('.item5 img,.item1 img,.item2 img,.item3 img'),(timeanimate-incre),$('.item5_5,.item1_1,.item2_2,.item3_3'),$('.item5,.item1,.item2,.item3'))
				}
				if(data[5]=='1_1LFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item5_5,.item1_1,.item2_2').hide();
					$('.item5,.item1,.item2').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl4').show();
					animaterotate($('.item5 img,.item1 img,.item2 img'),(timeanimate-incre),$('.item5_5,.item1_1,.item2_2'),$('.item5,.item1,.item2'))

				}
				if(data[5]=='1_1RFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item9_9,.item3_3,.item2_2,.item1_1').hide();
					$('.item9,.item3,.item2,.item1').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl4').show();
					animaterotate($('.item9 img,.item3 img,.item2 img,.item1 img'),(timeanimate-incre),$('.item9_9,.item3_3,.item2_2,.item1_1'),$('.item9,.item3,.item2,.item1'))
				}
				if(data[5]=='1_1RFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item9_9,.item3_3,.item2_2').hide();
					$('.item9,.item3,.item2').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl4').show();
					animaterotate($('.item9 img,.item3 img,.item2 img'),(timeanimate-incre),$('.item9_9,.item3_3,.item2_2'),$('.item9,.item3,.item2'))
				}
				// =========================================================================
				if(data[5]=='1_2LFULL5'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item5_5,.item6_6,.item7_7,.item8_8,.item9_9').hide();
					$('.item5,.item6,.item7,.item8,.item9').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl5').show();
					animaterotate($('.item5 img,.item6 img,.item7 img,.item8 img,.item9 img'),(timeanimate-incre),$('.item5_5,.item6_6,.item7_7,.item8_8,.item9_9'),$('.item5,.item6,.item7,.item8,.item9'))
				}
				if(data[5]=='1_2LFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item5_5,.item6_6,.item7_7,.item8_8').hide();
					$('.item5,.item6,.item7,.item8').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl5').show();
					animaterotate($('.item5 img,.item6 img,.item7 img,.item8 img'),(timeanimate-incre),$('.item5_5,.item6_6,.item7_7,.item8_8'),$('.item5,.item6,.item7,.item8'))
				}
				if(data[5]=='1_2LFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item5_5,.item6_6,.item7_7').hide();
					$('.item5,.item6,.item7').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl5').show();
					animaterotate($('.item5 img,.item6 img,.item7 img'),(timeanimate-incre),$('.item5_5,.item6_6,.item7_7'),$('.item5,.item6,.item7'))
				}
				if(data[5]=='1_2RFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item9_9,.item8_8,.item7_7,.item6_6').hide();
					$('.item9,.item8,.item7,.item6').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl5').show();
					animaterotate($('.item9 img,.item8 img,.item7 img,.item6 img'),(timeanimate-incre),$('.item9_9,.item8_8,.item7_7,.item6_6'),$('.item9,.item8,.item7,.item6'))
				}
				if(data[5]=='1_2RFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item9_9,.item8_8,.item7_7').hide();
					$('.item9,.item8,.item7').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl5').show();
					animaterotate($('.item9 img,.item8 img,.item7 img'),(timeanimate-incre),$('.item9_9,.item8_8,.item7_7'),$('.item9,.item8,.item7'))
				}
				// =========================================================================
				if(data[5]=='1_3LFULL5'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item5_5,.item11_11,.item12_12,.item13_13,.item9_9').hide();
					$('.item5,.item11,.item12,.item13,.item9').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl6').show();
					animaterotate($('.item5 img,.item11 img,.item12 img,.item13 img,.item9 img'),(timeanimate-incre),$('.item5_5,.item11_11,.item12_12,.item13_13,.item9_9'),$('.item5,.item11,.item12,.item13,.item9'))
				}
				if(data[5]=='1_3LFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item5_5,.item11_11,.item12_12,.item13_13').hide();
					$('.item5,.item11,.item12,.item13').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl6').show();
					animaterotate($('.item5 img,.item11 img,.item12 img,.item13 img'),(timeanimate-incre),$('.item5_5,.item11_11,.item12_12,.item13_13'),$('.item5,.item11,.item12,.item13'))
				}
				if(data[5]=='1_3LFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item5_5,.item11_11,.item12_12').hide();
					$('.item5,.item11,.item12').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl6').show();
					animaterotate($('.item5 img,.item11 img,.item12 img'),(timeanimate-incre),$('.item5_5,.item11_11,.item12_12'),$('.item5,.item11,.item12'))
				}
				if(data[5]=='1_3RFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item9_9,.item13_13,.item12_12,.item11_11').hide();
					$('.item9,.item13,.item12,.item11').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl6').show();
					animaterotate($('.item9 img,.item13 img,.item12 img,.item11 img'),(timeanimate-incre),$('.item9_9,.item13_13,.item12_12,.item11_11'),$('.item9,.item13,.item12,.item11'))
				}
				if(data[5]=='1_3RFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item9_9,.item13_13,.item12_12').hide();
					$('.item9,.item13,.item12').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl6').show();
					animaterotate($('.item9 img,.item13 img,.item12 img'),(timeanimate-incre),$('.item9_9,.item13_13,.item12_12'),$('.item9,.item13,.item12'))
				}
				// =========================================================================
				if(data[5]=='2_1LFULL5'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item10_10,.item6_6,.item2_2,.item8_8,.item14_14').hide();
					$('.item10,.item6,.item2,.item8,.item14').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl7').show();
					animaterotate($('.item10 img,.item6 img,.item2 img,.item8 img,.item14 img'),(timeanimate-incre),$('.item10_10,.item6_6,.item2_2,.item8_8,.item14_14'),$('.item10,.item6,.item2,.item8,.item14'))
				}
				if(data[5]=='2_1LFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item10_10,.item6_6,.item2_2,.item8_8').hide();
					$('.item10,.item6,.item2,.item8').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl7').show();
					animaterotate($('.item10 img,.item6 img,.item2 img,.item8 img'),(timeanimate-incre),$('.item10_10,.item6_6,.item2_2,.item8_8'),$('.item10,.item6,.item2,.item8'))
				}
				if(data[5]=='2_1LFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item10_10,.item6_6,.item2_2').hide();
					$('.item10,.item6,.item2').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl7').show();
					animaterotate($('.item10 img,.item6 img,.item2 img'),(timeanimate-incre),$('.item10_10,.item6_6,.item2_2'),$('.item10,.item6,.item2'))
				}
				if(data[5]=='2_1RFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item14_14,.item8_8,.item2_2,.item6_6').hide();
					$('.item14,.item8,.item2,.item6').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl7').show();
					animaterotate($('.item14 img,.item8 img,.item2 img,.item6 img'),(timeanimate-incre),$('.item14_14,.item8_8,.item2_2,.item6_6'),$('.item14,.item8,.item2,.item6'))
				}
				if(data[5]=='2_1RFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item14_14,.item8_8,.item2_2').hide();
					$('.item14,.item8,.item2').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl7').show();
					animaterotate($('.item14 img,.item8 img,.item2 img'),(timeanimate-incre),$('.item14_14,.item8_8,.item2_2'),$('.item14,.item8,.item2'))
				}
				// =========================================================================
				if(data[5]=='2_2LFULL5'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item10_10,.item11_11,.item7_7,.item13_13,.item14_14').hide();
					$('.item10,.item11,.item7,.item13,.item14').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl8').show();
					animaterotate($('.item10 img,.item11 img,.item7 img,.item13 img,.item14 img'),(timeanimate-incre),$('.item10_10,.item11_11,.item7_7,.item13_13,.item14_14'),$('.item10,.item11,.item7,.item13,.item14'))
				}
				if(data[5]=='2_2LFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item10_10,.item11_11,.item7_7,.item13_13').hide();
					$('.item10,.item11,.item7,.item13').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl8').show();
					animaterotate($('.item10 img,.item11 img,.item7 img,.item13 img'),(timeanimate-incre),$('.item10_10,.item11_11,.item7_7,.item13_13'),$('.item10,.item11,.item7,.item13'))
				}
				if(data[5]=='2_2LFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item10_10,.item11_11,.item7_7').hide();
					$('.item10,.item11,.item7').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl8').show();
					animaterotate($('.item10 img,.item11 img,.item7 img'),(timeanimate-incre),$('.item10_10,.item11_11,.item7_7'),$('.item10,.item11,.item7'))
				}
				if(data[5]=='2_2RFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item14_14,.item13_13,.item7_7,.item11_11').hide();
					$('.item14,.item13,.item7,.item11').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl8').show();
					animaterotate($('.item14 img,.item13 img,.item7 img,.item11 img'),(timeanimate-incre),$('.item14_14,.item13_13,.item7_7,.item11_11'),$('.item14,.item13,.item7,.item11'))
				}
				if(data[5]=='2_2RFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item14_14,.item13_13,.item7_7').hide();
					$('.item14,.item13,.item7').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl8').show();
					animaterotate($('.item14 img,.item13 img,.item7 img'),(timeanimate-incre),$('.item14_14,.item13_13,.item7_7'),$('.item14,.item13,.item7'))
				}
				// =========================================================================
				if(data[5]=='2_3LFULL5'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item10_10,.item11_11,.item12_12,.item13_13,.item14_14').hide();
					$('.item10,.item11,.item12,.item13,.item14').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl9').show();
					animaterotate($('.item10 img,.item11 img,.item12 img,.item13 img,.item14 img'),(timeanimate-incre),$('.item10_10,.item11_11,.item12_12,.item13_13,.item14_14'),$('.item10,.item11,.item12,.item13,.item14'))
				}
				if(data[5]=='2_3LFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item10_10,.item11_11,.item12_12,.item13_13').hide();
					$('.item10,.item11,.item12,.item13').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl9').show();
					animaterotate($('.item10 img,.item11 img,.item12 img,.item13 img'),(timeanimate-incre),$('.item10_10,.item11_11,.item12_12,.item13_13'),$('.item10,.item11,.item12,.item13'))
				}
				if(data[5]=='2_3LFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item10_10,.item11_11,.item12_12').hide();
					$('.item10,.item11,.item12').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl9').show();
					animaterotate($('.item10 img,.item11 img,.item12 img'),(timeanimate-incre),$('.item10_10,.item11_11,.item12_12'),$('.item10,.item11,.item12'))
				}
				if(data[5]=='2_3RFULL4'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					if(freespin==true){
						$('.normal').css({
							'color':'orange',
							'background-color':'#616161'
						});
					}else{
						$('.normal').css({
							'color':'orange',
							'background-color':'#04e0dd'
						});
					}
					$('.gelap').show();
					$('.item14_14,.item13_13,.item12_12,.item11_11').hide();
					$('.item14,.item13,.item12,.item11').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl9').show();
					animaterotate($('.item14 img,.item13 img,.item12 img,.item11 img'),(timeanimate-incre),$('.item14_14,.item13_13,.item12_12,.item11_11'),$('.item14,.item13,.item12,.item11'))
				}
				if(data[5]=='2_3RFULL3'){
					if(incre==0){
						$('#gift')[0].play();
						gift.currentTime=0;
					}else if(incre==1){
						$('#gift1')[0].play();
						gift1.currentTime=0;
					}else{
						$('#gift2')[0].play();
						gift2.currentTime=0;
					}
					$('.normal').css({
						'color':'orange',
						'background-color':'#04e0dd'
					});
					$('.gelap').show();
					$('.item14_14,.item13_13,.item12_12').hide();
					$('.item14,.item13,.item12').css({
						'color':'red',
						'background-color':'orange',
					});
					$('.fillclip').hide();
					$('.cl9').show();
					animaterotate($('.item14 img,.item13 img,.item12 img'),(timeanimate-incre),$('.item14_14,.item13_13,.item12_12'),$('.item14,.item13,.item12'))
				}
			}, speedanimate*(incre+1));
		})
		}, timeproses);
	}