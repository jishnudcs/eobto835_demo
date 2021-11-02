// Code for EOB 835 Web Page











	 
	   
	   function eob835_animation(){
		// 1st Animation
	   setTimeout(function(){step_sorting();}, 2500);
	   setTimeout(function(){eob835_progressbar_sort();}, 3500);
	   setTimeout(function(){eob835_checkmark_sort();}, 20000);
	   setTimeout(function(){stat_sorting();}, 20100);
	   setTimeout(function(){overall_progress();}, 5000);
	   setTimeout(function(){overall_change_to_25();}, 20100);
	   // 2nd Animation
	   setTimeout(function(){step_banding();}, 25500);
	   setTimeout(function(){eob835_progressbar_banding();}, 26500);
	   setTimeout(function(){eob835_checkmark_banding();}, 43000);
	   setTimeout(function(){stat_banding();}, 43500);
	   setTimeout(function(){overall_change_to_50();}, 43500);
	  
	   // 3rd Animation
	   setTimeout(function(){step_ev();}, 45000);	   
	   setTimeout(function(){eob835_progressbar_ev();}, 45500);
	   setTimeout(function(){eob835_checkmark_ev();}, 62000);
	   setTimeout(function(){stat_ev();}, 62500);
	   setTimeout(function(){overall_change_to_75();}, 62500);
	   
	   // 4th Animation
	   setTimeout(function(){step_generate();}, 64500);	   
	   setTimeout(function(){eob835_progressbar_generate();}, 65000);
	   setTimeout(function(){eob835_checkmark_generate();}, 82000);
	   setTimeout(function(){stat_generate();}, 82500);
	   setTimeout(function(){overall_change_to_100();}, 82500);
	   setTimeout(function(){generate_835_files();}, 83500);
	   
	   
	   
	   
	      


			   }

		function load_835_files() {

		document.getElementById("step_load").className = "active";
		var generateresult = document.getElementById("fileliststatus");
		setTimeout(function(){generateresult.innerHTML += '<li class="activity-list"><div class="detail-info"><p class="date">Load Images</p><p class="info">You have successfully uploaded 1 envelope with 200 images.</p></div></li>';}, 100);
		}
		
		function generate_835_files() {

		document.getElementById("step_load").className = "active";
		var generateresult = document.getElementById("fileliststatus");
		setTimeout(function(){generateresult.innerHTML += '<li class="activity-list"><div class="detail-info"><p class="date">835 File Generation</p><p class="info">Your 835 file has been converted successfully. Please select "835 File Viewer" to view your file.</p></div></li>';}, 100);
		}
	   
	   
		function overall_change_to_25(){
			   document.getElementById('overall_circle').setAttribute('class', 'progress-circle p25');
			   document.getElementById('overall_text').innerHTML = '25%';
			   
			   	   
		}
		
		function overall_change_to_50(){
			   document.getElementById('overall_circle').setAttribute('class', 'progress-circle p50');
			   document.getElementById('overall_text').innerHTML = '50%';
			   
			   	   
		}
		
		function overall_change_to_75(){
			   document.getElementById('overall_circle').setAttribute('class', 'progress-circle over50 p75');
			   document.getElementById('overall_text').innerHTML = '75%';
			   
			   	   
		}
		
		function overall_change_to_100(){
			   document.getElementById('overall_circle').setAttribute('class', 'progress-circle over50 p100');
			   document.getElementById('overall_text').innerHTML = '100%';
			   
			   	   
		}


		function stat_sorting(){
			   var generateresult = document.getElementById("sorting_result");
			   setTimeout(function(){generateresult.innerHTML = '<font style="color: #0078bf;"><center>100 eobs</center></font>';}, 100);
		}
		
		function stat_banding(){
			   var generateresult = document.getElementById("banding_result");
			   setTimeout(function(){generateresult.innerHTML = '<font style="color: #0078bf;"><center>200 claims</center></font>';}, 100);
		}
		
		function stat_ev(){
			   var generateresult = document.getElementById("ev_result");
			   setTimeout(function(){generateresult.innerHTML = '<font style="color: #0078bf;"><center>85 claims</center></font>';}, 100);
		}
		
		function stat_generate(){
			   var generateresult = document.getElementById("generate_result");
			   setTimeout(function(){generateresult.innerHTML = '<font style="color: #0078bf;"><center>85 claims</center></font>';}, 100);
		}

		function step_sorting() {

		document.getElementById("step_sort").className = "active";
		}


	   function eob835_progressbar_sort() {
			  var i = 0;
			  if (i == 0) {
			    i = 1;
			    var elem = document.getElementById("sortingprogressbar");
			    var width = 1;
			    var id = setInterval(frame, 125);
			    function frame() {
			      if (width >= 100) {
			        clearInterval(id);
			        i = 0;
			      } else {
			        width++;
			        elem.style.width = width + "%";
			        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
					if (width == 100) {
						elem.innerHTML = '100%';
						
				        }

			      }
			    }
			  }
		}
		
		function eob835_checkmark_sort(){
			   var checkmark_sort = document.getElementById("sorting_progress");
			   setTimeout(function(){checkmark_sort.innerHTML = '<center><img width="21px" height="21px" src="/static/images/green-check-icon.jpg"></center>';}, 100);
		   }

		function overall_progress() {
			  var i = 0;
			  if (i == 0) {
			    i = 1;
			    var elem = document.getElementById("mainprogressbar");
			    var width = 1;
			    var id = setInterval(frame, 725);
			    function frame() {
			      if (width >= 100) {
			        clearInterval(id);
			        i = 0;
			      } else {
			        width++;
			        elem.style.width = width + "%";
			        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
					if (width == 100) {
						elem.innerHTML = '100%';
						
				        }

			      }
			    }
			  }
		}
		
		
		function step_banding() {

		document.getElementById("step_banding").className = "active";
		}
		
		function eob835_progressbar_banding() {
			  var i = 0;
			  if (i == 0) {
			    i = 1;
			    var elem = document.getElementById("bandingprogressbar");
			    var width = 1;
			    var id = setInterval(frame, 125);
			    function frame() {
			      if (width >= 100) {
			        clearInterval(id);
			        i = 0;
			      } else {
			        width++;
			        elem.style.width = width + "%";
			        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
					if (width == 100) {
						elem.innerHTML = '100%';
						
				        }

			      }
			    }
			  }
		}
		
		function eob835_checkmark_banding(){
			   var checkmark_sort = document.getElementById("banding_progress");
			   setTimeout(function(){checkmark_sort.innerHTML = '<center><img width="21px" height="21px" src="/static/images/green-check-icon.jpg"></center>';}, 100);
		   }

		function overall_update_to_50() {
			  var i = 0;
			  if (i == 0) {
			    i = 1;
			    var elem = document.getElementById("mainprogressbar");
			    var width = 1;
			    var id = setInterval(frame, 500);
			    function frame() {
			      if (width >= 50) {
			        clearInterval(id);
			        i = 0;
			      } else {
			        width++;
			        elem.style.width = width + "%";
			        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
					if (width == 50) {
						elem.innerHTML = '50%';
						
				        }

			      }
			    }
			  }
		}

		function step_ev() {

		document.getElementById("step_ev").className = "active";
		}
		
		function eob835_progressbar_ev() {
			  var i = 0;
			  if (i == 0) {
			    i = 1;
			    var elem = document.getElementById("evprogressbar");
			    var width = 1;
			    var id = setInterval(frame, 125);
			    function frame() {
			      if (width >= 100) {
			        clearInterval(id);
			        i = 0;
			      } else {
			        width++;
			        elem.style.width = width + "%";
			        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
					if (width == 100) {
						elem.innerHTML = '100%';
						
				        }

			      }
			    }
			  }
		}
		
		function eob835_checkmark_ev(){
			   var checkmark_sort = document.getElementById("ev_progress");
			   setTimeout(function(){checkmark_sort.innerHTML = '<center><img width="21px" height="21px" src="/static/images/green-check-icon.jpg"></center>';}, 100);
		   }

		function overall_update_to_75() {
			  var i = 0;
			  if (i == 0) {
			    i = 1;
			    var elem = document.getElementById("mainprogressbar");
			    var width = 1;
			    var id = setInterval(frame, 500);
			    function frame() {
			      if (width >= 75) {
			        clearInterval(id);
			        i = 0;
			      } else {
			        width++;
			        elem.style.width = width + "%";
			        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
					if (width == 75) {
						elem.innerHTML = '75%';
						
				        }

			      }
			    }
			  }
		}

		function step_generate() {

		document.getElementById("step_generate").className = "active";
		}
		
		function eob835_progressbar_generate() {
			  var i = 0;
			  if (i == 0) {
			    i = 1;
			    var elem = document.getElementById("generateprogressbar");
			    var width = 1;
			    var id = setInterval(frame, 125);
			    function frame() {
			      if (width >= 100) {
			        clearInterval(id);
			        i = 0;
			      } else {
			        width++;
			        elem.style.width = width + "%";
			        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
					if (width == 100) {
						elem.innerHTML = '100%';
						
				        }

			      }
			    }
			  }
		}
		
		
		function eob835_checkmark_generate(){
			   var checkmark_sort = document.getElementById("generate_progress");
			   setTimeout(function(){checkmark_sort.innerHTML = '<center><img width="21px" height="21px" src="/static/images/green-check-icon.jpg"></center>';}, 100);
		   }

		function overall_update_to_100() {
			  var i = 0;
			  if (i == 0) {
			    i = 1;
			    var elem = document.getElementById("mainprogressbar");
			    var width = 1;
			    var id = setInterval(frame, 500);
			    function frame() {
			      if (width >= 100) {
			        clearInterval(id);
			        i = 0;
			      } else {
			        width++;
			        elem.style.width = width + "%";
			        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
					if (width == 100) {
						elem.innerHTML = '100%';
						
				        }

			      }
			    }
			  }
		}

		





















		function checkstatus2(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += 'Eligibility Check Complete.' + '<br>';}, 10000);
		   }

		function checkstatus3(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '(4) Exceptions Detected! Listing Now...' + '<br>';}, 12000);
		   }

		function checkstatus4(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '<div style="background: #E3C7D3;border: 1px solid #333;padding: 5px;margin-top:10px;margin-bottom: 10px;"><font style="background: #E3C7D3;color: #000;font-size:13px">' + 'C212844148: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + 'C344627761: PATIENT CANNOT BE MARKED AS OUR INSURED' + '<br>' + 'C477677199: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + 'C777184714: EXPENSES INCURRED PRIOR TO COVERAGE' + '<br>' + '</font></div>' ;}, 15000);
				   }


		function loadingbar2(){
			   var generatebar = document.getElementById("greenbar_2");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadgreenbar2"></div>';}, 500);
			   }

		function loadarrow2(){
			   var generatearrow = document.getElementById("arrow_2");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 18500);
			   }





















// End Code


//Clear status window before animation

function clearstatus(){
		   var generateresult = document.getElementById("status");
		   setTimeout(function(){generateresult.innerHTML = '';}, 100);
		   }















//Animation when Load Claims button is clicked

//Load Claims Main Function

 function loadclaims_animation(){

		clearstatus();
		loadstatus1();
	   	setTimeout(function(){progressbar1();}, 2500);
	   	
	   	loadstatus3();
	   	setTimeout(function(){progressbar2();}, 9000);
		loadingbar1();
		loadarrow1();
		loadcompletestatus1();
		fileload_stats1();
		fileload_stats2();
		fileload_totalstats1();
		fileload_totalstats2();
		   }


		function loadstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += 'Loading EDI 837 Claim Files...' + '<br>';}, 500);
		   }

		function progressbar1() {
			  var i = 0;
			  if (i == 0) {
			    i = 1;
			    var elem = document.getElementById("mainprogressbar");
			    var width = 10;
			    var id = setInterval(frame, 50);
			    function frame() {
			      if (width >= 100) {
			        clearInterval(id);
			        i = 0;
			      } else {
			        width++;
			        elem.style.width = width + "%";
			        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
					if (width == 100) {
						elem.innerHTML = '&nbsp;&nbsp;&nbsp;Load Complete!';
				        }

			      }
			    }
			  }
		}

		

		function loadstatus3(){
					   var generateresult = document.getElementById("status");
					   setTimeout(function(){generateresult.innerHTML += 'Validating Claims...' + '<br>';}, 8000);
				   }


		function progressbar2() {
				  var i = 0;
				  if (i == 0) {
				    i = 1;
				    var elem1 = document.getElementById("mainprogressbar");
				    var width = 1;
				    var id = setInterval(frame, 50);
				    function frame() {
				      if (width >= 100) {
				        clearInterval(id);
				        i = 0;

				      } else {
				        width++;
				        elem1.style.width = width + "%";
				        elem1.innerHTML = '&nbsp;&nbsp;&nbsp;Validating...' + width + "%";
				        if (width == 100) {
				           elem1.innerHTML = '&nbsp;&nbsp;&nbsp;Validation Complete!';
				        }
				      }
				    }
				  }
		}

		function loadingbar1(){
		   var generatebar = document.getElementById("greenbar_1");
		   setTimeout(function(){generatebar.innerHTML = '<div class="loadgreenbar1"></div>';}, 500);
			   }



		function loadarrow1(){
		   var generatearrow = document.getElementById("arrow_1");
		   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 15000);
		   }

		
		function loadcompletestatus1(){
		   var generateresult = document.getElementById("status");
		   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Load Process Complete.' + '<br>' + '>>> ' + '<b>101</b> Claims Ready for processing' +'<br>';}, 15000);
		   }

		function fileload_stats1(){
			var generateresult = document.getElementById("fileload_passed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>101</center>' + '</b>';}, 16000);
		   }

		function fileload_stats2(){
			var generateresult = document.getElementById("fileload_failed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>0</center>' + '</b>';}, 16000);
		   }

		function fileload_totalstats1(){
			var generateresult = document.getElementById("total_passed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>101</center>' + '</b>';}, 16000);
		   }

		function fileload_totalstats2(){
			var generateresult = document.getElementById("total_failed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>0</center>' + '</b>';}, 16000);
		   }


function checkeligibility_animation(){

	   clearstatus();
	   checkstatus1();
	   setTimeout(function(){progressbar3();}, 2500);
	   checkstatus2();
	   checkstatus3();
	   checkstatus4();
	   loadingbar2();
	   loadarrow2();
	   loadredbar11();
	   loadarrow11();
	   loadredbar12();
	   loadarrow12();
	   checkeligibility_stats1();
	   checkeligibility_stats2();
	   checkeligibility_totalstats1();
	   checkeligibility_totalstats2();


			   }




	   function checkstatus1(){
		   var generateresult = document.getElementById("status");
		   setTimeout(function(){generateresult.innerHTML += 'Checking Eligibility...' + '<br>';}, 500);
		   }

	   function progressbar3() {
			var i = 0;
			if (i == 0) {
				    i = 1;
				    var elem = document.getElementById("mainprogressbar");
				    var width = 1;
				    var id = setInterval(frame, 50);
				    function frame() {
				      if (width >= 100) {
				        clearInterval(id);
				        i = 0;
				      } else {
				        width++;
				        elem.style.width = width + "%";
				        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
				        if (width == 100) {
				           elem.innerHTML = '&nbsp;&nbsp;&nbsp;Eligibility Check Complete';
				        }
				      }
				    }
				  }
		}

		function checkstatus2(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += 'Eligibility Check Complete.' + '<br>';}, 10000);
		   }

		function checkstatus3(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '(4) Exceptions Detected! Listing Now...' + '<br>';}, 12000);
		   }

		function checkstatus4(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '<div style="background: #E3C7D3;border: 1px solid #333;padding: 5px;margin-top:10px;margin-bottom: 10px;"><font style="background: #E3C7D3;color: #000;font-size:13px">' + 'C212844148: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + 'C344627761: PATIENT CANNOT BE MARKED AS OUR INSURED' + '<br>' + 'C477677199: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + 'C777184714: EXPENSES INCURRED PRIOR TO COVERAGE' + '<br>' + '</font></div>' ;}, 15000);
				   }


		function loadingbar2(){
			   var generatebar = document.getElementById("greenbar_2");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadgreenbar2"></div>';}, 500);
			   }

		function loadarrow2(){
			   var generatearrow = document.getElementById("arrow_2");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 18500);
			   }



		function loadredbar11(){
			   var generateredbar = document.getElementById("redbar_1_1");
			   setTimeout(function(){generateredbar.innerHTML = '<div class="loadredbar11"></div>';}, 12000);
				   }

		function loadarrow11(){
			   var generatearrow = document.getElementById("arrow_1_1");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/down_red_arrow.png" width="24" height="24"></div>';}, 13500);
				   }

		function loadredbar12(){
				   var generateredbar = document.getElementById("redbar_1_2");
				   setTimeout(function(){generateredbar.innerHTML = '<div class="loadredbar12"></div>';}, 14500);
					   }

		function loadarrow12(){
			   var generatearrow = document.getElementById("arrow_1_2");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/right_red_arrow.png" width="24" height="24"></div>';}, 16000);
			   }


		function checkeligibility_stats1(){
					   var generateresult = document.getElementById("checkeligibility_passed");
					   setTimeout(function(){generateresult.innerHTML = '<center>97</center>';}, 16000);
		   }

		function checkeligibility_stats2(){
					   var generateresult = document.getElementById("checkeligibility_failed");
					   setTimeout(function(){generateresult.innerHTML = '<center>4</center>';}, 18000);
		   }

		function checkeligibility_totalstats1(){
			var generateresult = document.getElementById("total_passed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>97</center>' + '</b>';}, 16000);
		   }

		function checkeligibility_totalstats2(){
			var generateresult = document.getElementById("total_failed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>4</center>' + '</b>';}, 16000);
		   }


function rulesengine_animation(){

	   clearstatus();
	   rulesstatus1();
	   setTimeout(function(){progressbar4();}, 2500);
	   loadingbar3();
	   loadarrow3();
	   rulesstatus2();
	   rulesstatus3();
	   loadredbar21();
	   loadarrow21();
	   rulesengine_stats1();
	   rulesengine_stats2();

	   }



		function rulesstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Initiating Rules Engine...' + '<br>';}, 500);
				   }

		function progressbar4() {
					var i = 0;
					if (i == 0) {
						    i = 1;
						    var elem = document.getElementById("mainprogressbar");
						    var width = 1;
						    var id = setInterval(frame, 50);
						    function frame() {
						      if (width >= 100) {
						        clearInterval(id);
						        i = 0;
						      } else {
						        width++;
						        elem.style.width = width + "%";
						        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
						        if (width == 100) {
						           elem.innerHTML = '&nbsp;&nbsp;&nbsp;Rules Engine Check Complete';
						        }
						      }
						    }
						  }
		}

		function rulesstatus2(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Exceptions Detected! Listing Now...' + '<br>';}, 10000);
			   }

		function rulesstatus3(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '<div style="background: #E3C7D3;border: 1px solid #333;padding: 5px;margin-top:10px;margin-bottom: 10px;"><font style="background: #E3C7D3;color: #000;font-size:13px">' + 'C212844148: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + 'C344627761: PATIENT CANNOT BE MARKED AS OUR INSURED' + '<br>' + 'C477677199: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' +  'C777184714: EXPENSES INCURRED PRIOR TO COVERAGE' + '</font></div>' + '<br>' ;}, 12000);
			   }


		function loadingbar3(){
			   var generatebar = document.getElementById("greenbar_3");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadgreenbar3"></div>';}, 13000);
			   }

		function loadarrow3(){
			   var generatearrow = document.getElementById("arrow_3");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 16000);
			   }

		function loadredbar21(){
			   var generateredbar = document.getElementById("redbar_2_1");
			   setTimeout(function(){generateredbar.innerHTML = '<div class="loadredbar21"></div>';}, 17000);
					   }

		function loadarrow21(){
			   var generatearrow = document.getElementById("arrow_2_1");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/down_red_arrow.png" width="24" height="24"></div>';}, 20000);
			   }


		function rulesengine_stats1(){
					   var generateresult = document.getElementById("rulesengine_passed");
					   setTimeout(function(){generateresult.innerHTML = '<center>89</center>';}, 16000);
		   }

		function rulesengine_stats2(){
					   var generateresult = document.getElementById("rulesengine_failed");
					   setTimeout(function(){generateresult.innerHTML = '<center>8</center>';}, 18000);
		   }


function aimlengine_animation(){

	   clearstatus();
	   aimlstatus1();
	   setTimeout(function(){progressbar5();}, 2500);
	   loadingbar4();
	   loadarrow4();
	   aimlstatus2();
	   aimlstatus3();
	   loadredbar31();
	   loadarrow31();
	   loadredbar32();
	   loadarrow32();
	   aimlengine_stats1();
	   aimlengine_stats2();

	   }



		function aimlstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Initiating AI/ML Engine...' + '<br>';}, 500);
				   }

		function progressbar5() {
					var i = 0;
					if (i == 0) {
						    i = 1;
						    var elem = document.getElementById("mainprogressbar");
						    var width = 1;
						    var id = setInterval(frame, 50);
						    function frame() {
						      if (width >= 100) {
						        clearInterval(id);
						        i = 0;
						      } else {
						        width++;
						        elem.style.width = width + "%";
						        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
						        if (width == 100) {
						           elem.innerHTML = '&nbsp;&nbsp;&nbsp;AI/ML Engine Check Complete';
						        }
						      }
						    }
						  }
		}


		function aimlstatus2(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Exceptions Detected! Listing Now...' + '<br>';}, 10000);
					   }

		function aimlstatus3(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '<div style="background: #E3C7D3;border: 1px solid #333;padding: 5px;margin-top:10px;margin-bottom: 10px;"><font style="background: #E3C7D3;color: #000;font-size:13px">' + 'C212844148: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + 'C344627761: PATIENT CANNOT BE MARKED AS OUR INSURED' + '<br>' + 'C477677199: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + 'C777184714: EXPENSES INCURRED PRIOR TO COVERAGE' + '</font></div>' + '<br>' ;}, 12000);
					   }


		function loadingbar4(){
			   var generatebar = document.getElementById("greenbar_4");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadgreenbar4"></div>';}, 10000);
				   }

		function loadarrow4(){
			   var generatearrow = document.getElementById("arrow_4");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 13000);
				   }

		function loadredbar31(){
			   var generateredbar = document.getElementById("redbar_3_1");
			   setTimeout(function(){generateredbar.innerHTML = '<div class="loadredbar31"></div>';}, 10000);
						   }

		function loadarrow31(){
					   var generatearrow = document.getElementById("arrow_3_1");
					   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/down_red_arrow.png" width="24" height="24"></div>';}, 12500);
			   }

		function loadredbar32(){
			   var generateredbar = document.getElementById("redbar_3_2");
			   setTimeout(function(){generateredbar.innerHTML = '<div class="loadredbar32"></div>';}, 12500);
							   }

		function loadarrow32(){
			   var generatearrow = document.getElementById("arrow_3_2");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/left_red_arrow.png" width="24" height="24"></div>';}, 14500);
					   }


		function aimlengine_stats1(){
					   var generateresult = document.getElementById("aimlengine_passed");
					   setTimeout(function(){generateresult.innerHTML = '<center>85</center>';}, 16000);
		   }

		function aimlengine_stats2(){
					   var generateresult = document.getElementById("aimlengine_failed");
					   setTimeout(function(){generateresult.innerHTML = '<center>4</center>';}, 18000);
		   }


function compilesubmit_animation(){

	   clearstatus();
	   compilesubmitstatus1();
	   setTimeout(function(){progressbar6();}, 2500);
	   loadingbar5();
	   loadarrow5();
	   }



		function compilesubmitstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Compiling Valid Claims...' + '<br>';}, 500);
			   }

		function progressbar6() {
				var i = 0;
				if (i == 0) {
			    i = 1;
			    var elem = document.getElementById("mainprogressbar");
			    var width = 1;
			    var id = setInterval(frame, 50);
				    function frame() {
				      if (width >= 100) {
				        clearInterval(id);
				        i = 0;
				      } else {
				        width++;
				        elem.style.width = width + "%";
				        elem.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
				        if (width == 100) {
				           elem.innerHTML = '&nbsp;&nbsp;&nbsp;Process Complete';
				        }
				      }
				    }
				  }
				}

		function loadingbar5(){
			   var generatebar = document.getElementById("redbar_4_1");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadredbar41"></div>';}, 10000);
			   }

		function loadarrow5(){
			   var generatearrow = document.getElementById("arrow_5");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/down_red_arrow.png" width="24" height="24"></div>';}, 15000);
			   }

		function loadresult5(){
			   var generateresult = document.getElementById("stats_3");
			   setTimeout(function(){generateresult.innerHTML = '<div style="width: 110px; border: 1px dotted #000;padding: 5px;"><span class="badge badge-success">Pass</span><font style="font-size: 12px;">&nbsp;&nbsp;&nbsp;89 claims</font><br><span class="badge badge-danger">Fail</span><font style="font-size: 12px;">&nbsp;&nbsp;&nbsp;8 claims</font>';}, 9000);
			   }



function comparerejects_animation(){

	   clearstatus();
	   comparerejectsstatus1();
	   loadingbar6();
	   loadarrow6();
	   }



		function comparerejectsstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Initiating Reject Status...' + '<br>';}, 500);
			   }



		function loadingbar6(){
			   var generatebar = document.getElementById("redbar_5");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadredbar5"></div>';}, 1000);
			   }

		function loadarrow6(){
			   var generatearrow = document.getElementById("arrow_6");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/left_red_arrow.png" width="24" height="24"></div>';}, 5000);
			   }



function claimsviewer_animation(){

	   clearstatus();
	   claimsviewerstatus1();
	   loadingbar7();
	   loadarrow7();
	   loadingbar71();
	   loadarrow71();
	   }



		function claimsviewerstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Initiating Claim Viewer...' + '<br>';}, 500);
				   }

		function loadingbar7(){
			   var generatebar = document.getElementById("greenbar_7");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadgreenbar7"></div>';}, 1000);
			   }

		function loadarrow7(){
			   var generatearrow = document.getElementById("arrow_7");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/left_green_arrow.png" width="24" height="24"></div>';}, 5000);
				   }

		function loadingbar71(){
			   var generatebar = document.getElementById("greenbar_7_1");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadgreenbar71"></div>';}, 1000);
			   }

		function loadarrow71(){
			   var generatearrow = document.getElementById("arrow_7_1");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/up_green_arrow.png" width="24" height="24"></div>';}, 5000);
				   }




function resubmission_animation(){

	   clearstatus();
	   resubmissionstatus1();
	   loadingbar8();
	   loadarrow8();
	   }



		function resubmissionstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Resubmitting Claims...' + '<br>';}, 500);
				   }

		function loadingbar8(){
			   var generatebar = document.getElementById("greenbar_8");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadgreenbar8"></div>';}, 1000);
			}


		function loadarrow8(){
			   var generatearrow = document.getElementById("arrow_8");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/up_green_arrow.png" width="24" height="24"></div>';}, 5000);
						   }
