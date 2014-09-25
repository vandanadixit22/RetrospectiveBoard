var noteId;
var jsonData;
var abc;
var id = 1;
var txt = 1;
//git hhbxhsbx
$(document).ready(function() {
	notes = $("#notes"); // get references to the 'notes' list

	// clicking the 'New Note' button adds a new note to the list
	$("#btnNew").click(function() {
		addNewNote();
	});

	/*$.ajax({
        url: "/rest/sprintBoard/show/",
        type: "GET",
        crossDomain: true,
        dataType: 'json',
        success: function(response) { jsonData = response; alert("Success"); },
        error: function() { alert('Failed!'); }
	});*/
	
	
	$("li.note").each(function(){
		var newNote;
		$(this).find("textarea.note-content").change(function() {
			newNote.find('img.img2').click(function() {
				cnt = $(this).prev().text();
				cnt = Number(cnt);
				cnt++;
				$(this).prev().text("+" + cnt).css({
					"color" : "green"
				});
			});
		});
	});
	
	$("#save").click(function() {  
	    //Populating the data element
		var notesData = [];
		var n=[];
		$("li.note").each(function(){
			var data = {};
			data.text = $(this).find("textarea.note-content")[0].value;
			data.noOfLikes = Number($(this).find("label.lbl")[0].innerHTML);
			notesData.push(data);
			n=JSON.stringify(notesData);
			console.log(n);
		});
	    $.ajax({
	    	contentType: "application/json",
	    	url : "/rest/sprintBoard/create",
			data : n,
	        type: "POST",
	        crossDomain: true,
	        dataType: 'json',
	        success: function() { alert("Success"); },
	        error: function() { alert('Failed!'); },
	    })
	    return false
	});
	
	$.fn.stack = function(selector, zIndex) {
		zIndex = zIndex || 0;

		// compactify all zIndexes in the managed set
		function compactifyZIndexes() {
			$(selector).sort(function(a, b) {
				// first sort the elements by zIndex...
				var az = parseInt(a.style.zIndex) || 0;
				var bz = parseInt(b.style.zIndex) || 0;
				if (az === bz)
					return 0;
				else if (az < bz)
					return -1;
				else
					return 1;
			}).each(function(i) {
				// then assign sequential zIndexes to them.
				this.style.zIndex = zIndex + i * 10;
			});
		}

		// each time an managed element is clicked, bring it
		// to the top and re-compactify all zIndexes.
		$(this).mousedown(function() {
			this.style.zIndex = 9999999;
			compactifyZIndexes();
		});
		// compactify right away, too.
		compactifyZIndexes();
	}

});

// adds a new note to the 'notes' list
function addNewNote(clas, title, content) {
	// if class is not specified, use a random colour class
	if (!clas) {
		clas = "colour" + Math.ceil(Math.random() * 3);
	}
	
	// add a new note to the end of the list
	notes.append("<li id=li" + id + " class='note'><div class='" + clas + "'>"
			+ "<textarea class='note-content' id=" + txt
			+ " placeholder='Your content here' name='textarea'/>"
			+ "<img class='hide' src='images/close.png'/>"
			+ "<label for='voteUp' class='lbl'>0</label>"
			+ "<img class='img2' id='change' src='images/thumbsUp.png'/>"
			+ "<input type='hidden' name='noteId' value=" + noteId +"/>"
			+ "</div></li>");
	$('#notes > li').each(function() {
		$(this).draggable();
		$(this).stack('#notes > li', 100);
	});

	// get the new note that's just been added and attach the click event
	// handler to its close button
	var newNote = notes.find("li:last");
	newNote.find("img.hide").click(function() {
		newNote.remove();
	});

	// hook up event handlers to show/hide close button as appropriate
	addNoteEvent(newNote);

	var mylist = [];
	var cnt = 0;
	newNote.find(".note-content").change(function() {
		/*var value = $(this).val();
		mylist.push({
			"text" : value,
			"noOfLikes" : cnt
		}) ;
		abc = JSON.stringify(mylist);
		console.log(abc);
		console.log(value);*/

		newNote.find('.img2').click(function() {
			cnt = $(this).prev().text();
			cnt = Number(cnt);
			cnt++;
			$(this).prev().text("+" + cnt).css({
				"color" : "green"
			});
			/*mylist.push({
				"text" : value,
				"noOfLikes" : cnt
			});
			abc = JSON.stringify(mylist);
			console.log(abc);*/
		});
	});

	id++;
	txt++;
	// console.log(notes);
}

function addNoteEvent(noteElement) {
	noteElement.focus(function() {
		$(this).find(".img").removeClass("hide");
	}).hover(function() {
		$(this).find("img").removeClass("hide");
	}, function() {
		$(this).find("img").addClass("hide");
	});
}

function saveNote(eventSrc) {
	var text = $(eventSrc).children(".note-content").val();
	var noOfLikes = event.target.children(".lbl").html();
	var commentData = {
		"text" : text,
		"noOfLikes" : noOfLikes
	};
	$.ajax({
		url : "/rest/sprintBoard/saveComment",
		data : commentData
	});
}