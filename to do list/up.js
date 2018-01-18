 $(function(){ //like main
               
            $(window).keypress(function(e){
			
                if(e.keyCode === 13){
				  newItem();
				}
			});
                    function newItem(){
                    var item = $('#to-do').val();
                    if(item != '')  { $('#todos').append('<li>' +item+ '</li>');}
					$('#to-do').val('');
					}
                $('ul').on('click','li',function(e){
				 $(e.target).remove();
				
				});
			});