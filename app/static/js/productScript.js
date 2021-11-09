 var today = new Date();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 document.getElementById('ruzivo_main_button').disabled = false;
 
 
 function eob835_animation(){
		// 1st Animation
	   setTimeout(function(){step_sorting();}, 2500);
	   
	   setTimeout(function(){identify_eobs();}, 2500);
	   setTimeout(function(){eob835_progressbar_sort();}, 3500);
	   setTimeout(function(){eob835_checkmark_sort();}, 20000);
	   setTimeout(function(){stat_sorting();}, 20100);
	   setTimeout(function(){overall_progress();}, 5000);
	   setTimeout(function(){overall_change_to_25();}, 20100);
	   // 2nd Animation
	   setTimeout(function(){step_banding();}, 25500);
	   
	   setTimeout(function(){band_eobs();}, 25500);
	   setTimeout(function(){eob835_progressbar_banding();}, 26500);
	   setTimeout(function(){eob835_checkmark_banding();}, 43000);
	   setTimeout(function(){stat_banding();}, 43500);
	   setTimeout(function(){overall_change_to_50();}, 43500);
	  
	   // 3rd Animation
	   setTimeout(function(){step_ev();}, 45000);	
	   setTimeout(function(){extract_and_validate();}, 45000);
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
	   setTimeout(function(){generate_835_files();}, 84500);
	   
	   
	   
	   
	      


			   }


		function load_835_images() {
		
		
		document.getElementById("step_load").className = "process_step_1 active";
		
		document.getElementById('load_eob_images_button').disabled = false;
		document.getElementById('convert_eob_images_button').disabled = true;
		document.getElementById('cancel_eob_images_button').disabled = false;
		
		
				
		var generateresult = document.getElementById("fileliststatus");
		setTimeout(function(){generateresult.innerHTML += '<li class="activity-list"><div class="detail-info"><p class="date">Load Images &nbsp;&nbsp;&nbsp;(' + time + ')</p><p class="info">Your images have been successfully processed.</p></div></li>';}, 100);
		}
		
		function confirm_selection(){
			   
		document.getElementById('load_eob_images_button').disabled = true;
		document.getElementById('convert_eob_images_button').disabled = false;
		document.getElementById('cancel_eob_images_button').disabled = true;
		document.getElementById('ruzivo_main_button').disabled = true;	   
			   	   
		}
		
		
		
		function identify_eobs() {

		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var generateresult = document.getElementById("fileliststatus");
		setTimeout(function(){generateresult.innerHTML += '<li class="activity-list"><div class="detail-info"><p class="date">Identify EOBs &nbsp;&nbsp;&nbsp;(' + time + ')</p><p class="info">Classifying and sorting your images...</p></div></li>';}, 100);
		}
		
		function band_eobs() {

		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var generateresult = document.getElementById("fileliststatus");
		setTimeout(function(){generateresult.innerHTML += '<li class="activity-list"><div class="detail-info"><p class="date">Band EOBs &nbsp;&nbsp;&nbsp;(' + time + ')</p><p class="info">Banding EOB images...</p></div></li>';}, 100);
		}
		
		function extract_and_validate() {

		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var generateresult = document.getElementById("fileliststatus");
		setTimeout(function(){generateresult.innerHTML += '<li class="activity-list"><div class="detail-info"><p class="date">Extraction & Validation &nbsp;&nbsp;&nbsp;(' + time + ')</p><p class="info">Ruzivo is extracting and validating EOB information.</p></div></li>';}, 100);
		}
		
		function generate_835_files() {

		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var generateresult = document.getElementById("fileliststatus");
		setTimeout(function(){generateresult.innerHTML += '<li class="activity-list"><div class="detail-info"><p class="date">835 File Generation &nbsp;&nbsp;&nbsp;(' + time + ')</p><p class="info">Your 835 file has been converted successfully. Please select "835 File Viewer" to view your file.</p></div></li>';}, 100);
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
			   
			   setTimeout(function(){document.getElementById('sorting_result').setAttribute('style', 'display: show');}, 100);
		}
		
		function stat_banding(){
			   setTimeout(function(){document.getElementById('banding_result').setAttribute('style', 'display: show');}, 100);
		}
		
		function stat_ev(){
			   setTimeout(function(){document.getElementById('ev_result').setAttribute('style', 'display: show');}, 100);
		}
		
		function stat_generate(){
			   setTimeout(function(){document.getElementById('generate_result').setAttribute('style', 'display: show');}, 100);
		}

		function step_sorting() {

		document.getElementById("step_sort").className = "process_step_2 active";
		
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

		document.getElementById("step_banding").className = "process_step_3 active";
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

		document.getElementById("step_ev").className = "process_step_4 active";
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

		document.getElementById("step_generate").className = "process_step_5 active";
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

		



//Tableau Embed function
function initViz() {
  
 
  
  url = "http://prod-useast-b.online.tableau.com/t/eob835/views/Payers_vs_envs/Dashboard2",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "600px",
  };
  viz = new tableau.Viz(display_viz, url, options);


 

}
