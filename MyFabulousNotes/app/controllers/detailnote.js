var args = arguments[0] || {};

var idNote = args.idNote;

$.noteTitle.value = args.noteTitle || '';
$.noteDescription.value = args.noteDescription || '';


var myNotes = Alloy.Collections.note;

//Method for editing a note
function editNote(){
	
	var moment = require('alloy/moment');
	
	var note= myNotes.get(idNote);
	note.set({
		"noteTitle": $.noteTitle.value,
		"noteDescription": $.noteDescription.value,
		"date": moment().format()
	}).save();
	
	var toast = Ti.UI.createNotification({
		   			 	message:"Note has been succesfully saved",
		    			duration: Ti.UI.NOTIFICATION_DURATION_SHORT
						});
						
				toast.show();
	Alloy.Collections.note.fetch();
	
  $.detailnote.close();
		
}

//Method for deleting a note
function deleteNote(){
	
	$.dialog.show();
	//Dialog before delete a note
	$.dialog.addEventListener('click', function(event) {
	
    switch (event.index) {
        case 0:
        	var note = myNotes.get(args.idNote);
			note.destroy();
				 
			//Show a toast message
			var toast = Ti.UI.createNotification({
				   			 	message:"Note has been successfully deleted",
				    			duration: Ti.UI.NOTIFICATION_DURATION_SHORT
								});
			toast.show();
			$.detailnote.close();
            break;
        case 1:
        	null;
        	break;
	    }
	});
}

//goBack method

function goBack (){
   var goBack = Alloy.createController("index").getView();
   goBack.open();
}




