
//******Mode 2 ******

//Animation when Load Claims button is clicked

//Load Claims Main Function

 function mode2_loadclaims_animation(){

		mode2_loadstatus1();
	   	setTimeout(function(){mode2_progressbar1();}, 2500);
	   	mode2_loadstatus3();
	   	setTimeout(function(){mode2_progressbar2();}, 15000);
		mode2_loadingbar1();
		mode2_loadarrow1();
		mode2_loadresult1();
		mode2_loadcompletestatus1();
		mode2_fileload_stats1();
		mode2_fileload_stats2();
		mode2_fileload_totalstats1();
		mode2_fileload_totalstats2();
		
		   }


		function mode2_loadstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Loading EDI 837 Claim Files...' + '<br>';}, 500);
		   }

		function mode2_progressbar1() {
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

		
		function mode2_loadstatus3(){
					   var generateresult = document.getElementById("status");
					   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Validating Claims...' + '<br>';}, 11000);
				   }


		function mode2_progressbar2() {
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
				        elem1.innerHTML = '&nbsp;&nbsp;&nbsp;' + width + "%";
				        if (width == 100) {
				           elem1.innerHTML = '&nbsp;&nbsp;&nbsp;Validation Complete!';
				        }
				      }
				    }
				  }
		}

		function mode2_loadingbar1(){
		   var generatebar = document.getElementById("mode2_greenbar_1");
		   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadgreenbar1"></div>';}, 26000);
			   }



		function mode2_loadarrow1(){
		   var generatearrow = document.getElementById("mode2_arrow_1");
		   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 28000);
		   }

		function mode2_loadresult1(){
		   var generateresult = document.getElementById("mode2_stats_1");
		   setTimeout(function(){generateresult.innerHTML = '<div style="width: 110px; border: 1px dotted #000;padding: 5px;"><span class="badge badge-secondary">Load</span><font style="font-size: 12px;">&nbsp;&nbsp;&nbsp;101 claims</font>';}, 9000);
		   }

		function mode2_loadcompletestatus1(){
		   var generateresult = document.getElementById("status");
		   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Load Process Complete.' + '<br>' + '>>> ' + '<b>101</b> Claims Ready for processing' +'<br>';}, 25000);
		   }

		function mode2_fileload_stats1(){
			var generateresult = document.getElementById("mode2_fileload_passed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>101</center>' + '</b>';}, 16000);
		   }

		function mode2_fileload_stats2(){
			var generateresult = document.getElementById("mode2_fileload_failed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>0</center>' + '</b>';}, 16000);
		   }

		function mode2_fileload_totalstats1(){
			var generateresult = document.getElementById("mode2_total_passed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>101</center>' + '</b>';}, 16000);
		   }

		function mode2_fileload_totalstats2(){
			var generateresult = document.getElementById("mode2_total_failed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>0</center>' + '</b>';}, 16000);
		   }


function mode2_checkeligibility_animation(){

	   mode2_checkstatus1();
	   setTimeout(function(){mode2_progressbar3();}, 2500);
	   mode2_checkstatus2();
	   mode2_checkstatus3();
	   mode2_checkstatus4();
	   mode2_loadingbar2();
	   mode2_loadarrow2();
	   mode2_loadingbar2_1();
	   
	   mode2_loadingbar2_2();
	   mode2_loadarrow2_2();
	   mode2_loadingbar2_3();
	   
	   mode2_loadingbar2_4();
	   mode2_loadarrow2_4();
	   mode2_loadredbar11();
	   mode2_loadarrow11();
	   mode2_loadredbar12();
	   mode2_loadarrow12();
	   mode2_checkeligibility_stats1();
	   mode2_checkeligibility_stats2();
	   mode2_checkeligibility_totalstats1();
	   mode2_checkeligibility_totalstats2();

	   
			   }



	   function mode2_checkstatus1(){
		   var generateresult = document.getElementById("status");
		   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Checking Eligibility...' + '<br>';}, 500);
		   }

	   function mode2_progressbar3() {
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

		function mode2_checkstatus2(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Eligibility Check Complete.' + '<br>';}, 10000);
		   }

		function mode2_checkstatus3(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Exceptions Detected! Listing Now...' + '<br>';}, 12000);
		   }

		function mode2_checkstatus4(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '<div style="background: #E3C7D3;border: 1px solid #333;padding: 5px;margin-top:10px;margin-bottom: 10px;"><font style="background: #E3C7D3;color: #000;font-size:13px">' + 'C212844148: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + 'C344627761: PATIENT CANNOT BE MARKED AS OUR INSURED' + '<br>' + 'C477677199: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + 'C777184714: EXPENSES INCURRED PRIOR TO COVERAGE' + '<br>' + '</font></div>'  ;}, 15000);
				   }

		function mode2_loadingbar2(){
			   var generatebar = document.getElementById("mode2_greenbar_2");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadgreenbar2"></div>';}, 1500);
			   }

		function mode2_loadarrow2(){
			   var generatearrow = document.getElementById("mode2_arrow_2");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 4500);
			   }

		function mode2_loadingbar2_1(){
			   var generatebar = document.getElementById("mode2_greenbar_2_1");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadgreenbar2_1"></div>';}, 4000);
			   }

		function mode2_loadarrow2_1(){
			   var generatearrow = document.getElementById("mode2_arrow_2_1");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/up_green_arrow.png" width="24" height="24"></div>';}, 7500);
			   }

		function mode2_loadingbar2_2(){
			   var generatebar = document.getElementById("mode2_greenbar_2_2");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadgreenbar2_2"></div>';}, 7000);
			   }

		function mode2_loadarrow2_2(){
			   var generatearrow = document.getElementById("mode2_arrow_2_2");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 9500);
			   }

		function mode2_loadingbar2_3(){
			   var generatebar = document.getElementById("mode2_greenbar_2_3");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadgreenbar2_3"></div>';}, 4000);
			   }

		function mode2_loadarrow2_3(){
			   var generatearrow = document.getElementById("mode2_arrow_2_3");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/down_green_arrow.png" width="24" height="24"></div>';}, 7500);
			   }

		function mode2_loadingbar2_4(){
			   var generatebar = document.getElementById("mode2_greenbar_2_4");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadgreenbar2_4"></div>';}, 7000);
			   }

		function mode2_loadarrow2_4(){
			   var generatearrow = document.getElementById("mode2_arrow_2_4");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 9500);
			   }

		function mode2_loadredbar11(){
			   var generateredbar = document.getElementById("mode2_redbar_1_1");
			   setTimeout(function(){generateredbar.innerHTML = '<div class="loadredbar11"></div>';}, 14000);
				   }

		function mode2_loadarrow11(){
			   var generatearrow = document.getElementById("mode2_arrow_1_1");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/down_red_arrow.png" width="24" height="24"></div>';}, 17500);
				   }

		function mode2_loadredbar12(){
				   var generateredbar = document.getElementById("mode2_redbar_1_2");
				   setTimeout(function(){generateredbar.innerHTML = '<div class="mode2_loadredbar12"></div>';}, 16500);
					   }

		function mode2_loadarrow12(){
			   var generatearrow = document.getElementById("mode2_arrow_1_2");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/right_red_arrow.png" width="24" height="24"></div>';}, 21750);
			   }

		function mode2_checkeligibility_stats1(){
					   var generateresult = document.getElementById("mode2_checkeligibility_passed");
					   setTimeout(function(){generateresult.innerHTML = '<center>97</center>';}, 16000);
		   }

		function mode2_checkeligibility_stats2(){
					   var generateresult = document.getElementById("mode2_checkeligibility_failed");
					   setTimeout(function(){generateresult.innerHTML = '<center>4</center>';}, 18000);
		   }

		function mode2_checkeligibility_totalstats1(){
			var generateresult = document.getElementById("mode2_total_passed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>97</center>' + '</b>';}, 16000);
		   }

		function mode2_checkeligibility_totalstats2(){
			var generateresult = document.getElementById("mode2_total_failed");
			setTimeout(function(){generateresult.innerHTML = '<b>' + '<center>4</center>' + '</b>';}, 16000);
		   }
		

function mode2_rulesengine_animation(){

	   mode2_rulesstatus1();
	   setTimeout(function(){mode2_progressbar4();}, 2500);
	   mode2_loadingbar3();
	   mode2_loadarrow3();
	   mode2_rulesstatus2();
	   mode2_rulesstatus3();
	   mode2_loadredbar21();
	   mode2_loadarrow21();
	   mode2_loadresult3();
	   mode2_loadrejectstatus2();
	   }



		function mode2_rulesstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Initiating Rules Engine...' + '<br>';}, 500);
				   }

		function mode2_progressbar4() {
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

		function mode2_rulesstatus2(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Exceptions Detected! Listing Now...' + '<br>';}, 10000);
			   }

		function mode2_rulesstatus3(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'C212844148 => Rejected: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + '>>> ' + 'C344627761 => Rejected: PATIENT CANNOT BE MARKED AS OUR INSURED' + '<br>' + '>>> ' + 'C477677199 => Rejected: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + '>>> ' + 'C777184714 => EXPENSES INCURRED PRIOR TO COVERAGE' + '<br>' ;}, 12000);
			   }


		function mode2_loadingbar3(){
			   var generatebar = document.getElementById("mode2_greenbar_3");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadgreenbar3"></div>';}, 13000);
			   }

		function mode2_loadarrow3(){
			   var generatearrow = document.getElementById("mode2_arrow_3");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 14000);
			   }

		function mode2_loadredbar21(){
			   var generateredbar = document.getElementById("mode2_redbar_2_1");
			   setTimeout(function(){generateredbar.innerHTML = '<div class="loadredbar21"></div>';}, 15000);
					   }

		function mode2_loadarrow21(){
			   var generatearrow = document.getElementById("mode2_arrow_2_1");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/down_red_arrow.png" width="24" height="24"></div>';}, 16500);
			   }


		function mode2_loadresult3(){
			   var generateresult = document.getElementById("mode2_stats_3");
			   setTimeout(function(){generateresult.innerHTML = '<div style="width: 110px; border: 1px dotted #000;padding: 5px;"><span class="badge badge-success">Pass</span><font style="font-size: 12px;">&nbsp;&nbsp;&nbsp;89 claims</font><br><span class="badge badge-danger">Fail</span><font style="font-size: 12px;">&nbsp;&nbsp;&nbsp;8 claims</font>';}, 9500);
		   }

		function mode2_loadrejectstatus2(){
			   var generateresult = document.getElementById("mode2_rejectstatus");
			   setTimeout(function(){generateresult.innerHTML = '<button style="width:115px;height:56px;z-index: 999; font-size: 15px; font-weight: bold;" class="btn-main-rej" type="button" onClick="update();"><div id="rejectstatus">Exceptions: 12</div></button>';}, 18000);
		   }

function mode2_aimlengine_animation(){

	   mode2_aimlstatus1();
	   setTimeout(function(){mode2_progressbar5();}, 2500);
	   mode2_loadingbar4();
	   mode2_loadarrow4();
	   mode2_aimlstatus2();
	   mode2_aimlstatus3();
	   mode2_loadresult4();
	   mode2_loadredbar31();
	   mode2_loadarrow31();
	   mode2_loadredbar32();
	   mode2_loadarrow32();
	   mode2_loadrejectstatus3();
	   }



		function mode2_aimlstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Initiating AI/ML Engine...' + '<br>';}, 500);
				   }

		function mode2_progressbar5() {
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


		function mode2_aimlstatus2(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Exceptions Detected! Listing Now...' + '<br>';}, 10000);
					   }

		function mode2_aimlstatus3(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'C212844148 => Rejected: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + '>>> ' + 'C344627761 => Rejected: PATIENT CANNOT BE MARKED AS OUR INSURED' + '<br>' + '>>> ' + 'C477677199 => Rejected: EXPENSES INCURRED AFTER COVERAGE TERMINATED' + '<br>' + '>>> ' + 'C777184714 => EXPENSES INCURRED PRIOR TO COVERAGE' + '<br>' ;}, 12000);
					   }


		function mode2_loadingbar4(){
			   var generatebar = document.getElementById("mode2_greenbar_4");
			   setTimeout(function(){generatebar.innerHTML = '<div class="loadgreenbar4"></div>';}, 10000);
				   }

		function mode2_loadarrow4(){
			   var generatearrow = document.getElementById("mode2_arrow_4");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/right_green_arrow.png" width="24" height="24"></div>';}, 13000);
				   }

		function mode2_loadredbar31(){
			   var generateredbar = document.getElementById("mode2_redbar_3_1");
			   setTimeout(function(){generateredbar.innerHTML = '<div class="loadredbar31"></div>';}, 10000);
						   }

		function mode2_loadarrow31(){
				var generatearrow = document.getElementById("mode2_arrow_3_1");
				setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/down_red_arrow.png" width="24" height="24"></div>';}, 12500);
			   }

		function mode2_loadredbar32(){
			   var generateredbar = document.getElementById("mode2_redbar_3_2");
			   setTimeout(function(){generateredbar.innerHTML = '<div class="loadredbar32"></div>';}, 12500);
							   }

		function mode2_loadarrow32(){
			   var generatearrow = document.getElementById("mode2_arrow_3_2");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/left_red_arrow.png" width="24" height="24"></div>';}, 14500);
					   }


		function mode2_loadresult4(){
			   var generateresult = document.getElementById("mode2_stats_4");
			   setTimeout(function(){generateresult.innerHTML = '<div style="width: 110px; border: 1px dotted #000;padding: 5px;"><span class="badge badge-success">Pass</span><font style="font-size: 12px;">&nbsp;&nbsp;&nbsp;85 claims</font><br><span class="badge badge-danger">Fail</span><font style="font-size: 12px;">&nbsp;&nbsp;&nbsp;4 claims</font>';}, 15000);
	   }

		function mode2_loadrejectstatus3(){
					   var generateresult = document.getElementById("mode2_rejectstatus");
					   setTimeout(function(){generateresult.innerHTML = '<button style="width:115px;height:56px;z-index: 999; font-size: 15px; font-weight: bold;" class="btn-main-rej" type="button" onClick="update();"><div id="rejectstatus">Exceptions: 16</div></button>';}, 16000);
		   }


function mode2_compilesubmit_animation(){

	   mode2_compilesubmitstatus1();
	   setTimeout(function(){mode2_progressbar6();}, 2500);
	   mode2_loadingbar5();
	   mode2_loadarrow5();
	   mode2_loadingbar51();
	   mode2_loadarrow51();
	   }



		function mode2_compilesubmitstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Initiating Rules Engine...' + '<br>';}, 500);
			   }

		function mode2_progressbar6() {
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

		function mode2_loadingbar5(){
			   var generatebar = document.getElementById("mode2_redbar_4_1");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadredbar41"></div>';}, 1000);
			   }

		function mode2_loadarrow5(){
			   var generatearrow = document.getElementById("mode2_arrow_5");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/down_red_arrow.png" width="24" height="24"></div>';}, 5000);
			   }

		function mode2_loadingbar51(){
			   var generatebar = document.getElementById("mode2_redbar_4_2");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadredbar42"></div>';}, 3500);
			   }

		function mode2_loadarrow51(){
			   var generatearrow = document.getElementById("mode2_arrow_5_1");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/left_red_arrow.png" width="24" height="24"></div>';}, 5000);
			   }

		function mode2_loadresult5(){
			   var generateresult = document.getElementById("mode2_stats_3");
			   setTimeout(function(){generateresult.innerHTML = '<div style="width: 110px; border: 1px dotted #000;padding: 5px;"><span class="badge badge-success">Pass</span><font style="font-size: 12px;">&nbsp;&nbsp;&nbsp;89 claims</font><br><span class="badge badge-danger">Fail</span><font style="font-size: 12px;">&nbsp;&nbsp;&nbsp;8 claims</font>';}, 9000);
			   }



function mode2_comparerejects_animation(){

	   mode2_comparerejectsstatus1();
	   mode2_loadingbar6();
	   mode2_loadarrow6();
	   }



		function mode2_comparerejectsstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Initiating Reject Status...' + '<br>';}, 500);
			   }

		function mode2_progressbar6() {
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

		function mode2_loadingbar6(){
			   var generatebar = document.getElementById("mode2_redbar_5");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadredbar5"></div>';}, 1000);
			   }

		function mode2_loadarrow6(){
			   var generatearrow = document.getElementById("mode2_arrow_6");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob red"><img src="static/images/left_red_arrow.png" width="24" height="24"></div>';}, 5000);
			   }



function mode2_claimsviewer_animation(){

	   mode2_claimsviewerstatus1();
	   mode2_loadingbar7();
	   mode2_loadarrow7();
	   mode2_loadingbar71();
	   mode2_loadarrow71();
	   }



		function mode2_claimsviewerstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Initiating Claim Viewer...' + '<br>';}, 500);
				   }

		function mode2_loadingbar7(){
			   var generatebar = document.getElementById("mode2_greenbar_7");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadgreenbar7"></div>';}, 1000);
			   }

		function mode2_loadarrow7(){
			   var generatearrow = document.getElementById("mode2_arrow_7");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/left_green_arrow.png" width="24" height="24"></div>';}, 5000);
				   }

		function mode2_loadingbar71(){
			   var generatebar = document.getElementById("mode2_greenbar_7_1");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadgreenbar71"></div>';}, 1000);
			   }

		function mode2_loadarrow71(){
			   var generatearrow = document.getElementById("mode2_arrow_7_1");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/up_green_arrow.png" width="24" height="24"></div>';}, 5000);
				   }




function mode2_resubmission_animation(){

	   mode2_resubmissionstatus1();
	   mode2_loadingbar8();
	   mode2_loadarrow8();
	   }



		function mode2_resubmissionstatus1(){
			   var generateresult = document.getElementById("status");
			   setTimeout(function(){generateresult.innerHTML += '>>> ' + 'Resubmitting Claims...' + '<br>';}, 500);
				   }

		function mode2_loadingbar8(){
			   var generatebar = document.getElementById("mode2_greenbar_8");
			   setTimeout(function(){generatebar.innerHTML = '<div class="mode2_loadgreenbar8"></div>';}, 1000);
			}


		function mode2_loadarrow8(){
			   var generatearrow = document.getElementById("mode2_arrow_8");
			   setTimeout(function(){generatearrow.innerHTML = '<div class="blob green"><img src="static/images/up_green_arrow.png" width="24" height="24"></div>';}, 5000);
						   }
