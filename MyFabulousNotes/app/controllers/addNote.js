//making available moment.js library
var moment = require('alloy/moment');

var args = arguments[0] || {};

var myNote=Alloy.Collections.note;
	
//Function to save a note and not allow to repeat the same content either in title or description.
function saveNote(){
	
			var title = Alloy.createCollection('note');
			var description = Alloy.createCollection('note');

			//var table = notes.config.adapter.collection_name;
			title.fetch({query:'SELECT * from note where noteTitle="' + $.noteTitle.value + '"'});
			description.fetch({query:'SELECT * from note where noteDescription="' + $.noteDescription.value + '"'});
						
			if(title.length !=0 || description.length !=0){
		   		alert("Note already exist!");
		   		
		   	}else{
		   		var note = Alloy.createModel('note',{
		    	noteTitle: $.noteTitle.value,
		    	noteDescription: $.noteDescription.value,
		    	date: moment().format() //or can save it with format moment().format("MM-DD-YYYY")
			    });
			 	myNote.add(note);
		    	note.save();
		    	
		    	note.fetch();
	    
			    var toast = Ti.UI.createNotification({
					   			 	message:"Note has been succesfully saved",
					    			duration: Ti.UI.NOTIFICATION_DURATION_SHORT
									});
									
							toast.show();
						
		   		$.addNote.close();
		   	}
	   	
 }

function goBack(){
   var goBack = Alloy.createController("index").getView();
   goBack.open();
}

  
                
               
