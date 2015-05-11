
Alloy.Collections.note.fetch();

//Function used to take me add a new note
function addNote(){
	var goAddNote = Alloy.createController("addNote").getView();
	goAddNote.open();
}
//Show the complete note
function showNote(event){
	var itemSection = $.listNotes.sections[event.sectionIndex]; 
	var item = itemSection.getItemAt(event.itemIndex);
	var args= {
		idNote: item.properties.idNote,
		noteTitle: item.properties.noteTitle, 
		noteDescription: item.properties.noteDescription,
		date: item.properties.date
	};
	var noteDetail = Alloy.createController("detailnote", args).getView();
	noteDetail.open();	
}
//Function to show the date in a special format
function dateFormat(model){
	//Special format to date using moment
	var moment = require('alloy/moment'); //Important if it is declared outside the function got undefined function
	
	var transform = model.toJSON();
	transform.date = moment(transform.date).calendar();
	
	//
	transform.date.comparator = function(obj) {
	  return transform.date;
	};
	//
	
	return transform;
}

//Order date descendent
var notes = Alloy.Collections.note;
 
notes.fetch();
 
function reverseSortBy(sortByFunction) {
  return function(left, right) {
    var l = sortByFunction(left);
    var r = sortByFunction(right);
 
    if (l === void 0) return -1;
    if (r === void 0) return 1;
 
    return l < r ? 1 : l > r ? -1 : 0;
  };
}
 
notes.comparator = function(note) {
  return note.get('date');
};
 
notes.comparator = reverseSortBy(notes.comparator);
Alloy.Collections.note.fetch();

$.index.open();
