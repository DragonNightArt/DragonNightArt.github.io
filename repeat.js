var attrs = ['for', 'id', 'name'];
function resetAttributeNames(section) {
    var tags = section.find('input, div, select'), idx = section.index();
    tags.each(function() {
      var $this = $(this);
      $.each(attrs, function(i, attr) {
        var attr_val = $this.attr(attr);
        if (attr_val) {
            $this.attr(attr, attr_val.replace(/_\d+$/, '_'+(idx + 1)))
        }
      })
    })
}

$('.add').click(function(e) {
  e.preventDefault();

  var classes = e.currentTarget.classList;
  var target = ".repeating" + classes[0];

  var lastRepeatingGroup = $(target).last();
  var cloned = lastRepeatingGroup.clone(true)
  cloned.insertAfter(lastRepeatingGroup);
  resetAttributeNames(cloned)
});


// Delete
$('.del').click(function(e){
		alert('delete');
        e.preventDefault();
        var current_set = $(this).parent('div');
        var other_set = current_set.siblings('.repeatingGroup');
        if (other_set.length === 0) {
            alert("Cannot delete last entry");
            return;
        }
        current_set.slideUp('slow', function() {
            current_set.remove();

            // reset indexes
            other_set.each(function() {
               resetAttributeNames($(this)); 
            })  
        })
    });

//Collapse
$('.hide').click(function(e) {
		alert('hide');
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
//		ITEMS
//Add
$('.itemAdd').click(function(e){
        e.preventDefault();
        var lastRepeatingGroup = $('.repeatingItems').last();
        var cloned = lastRepeatingGroup.clone(true)  
        cloned.insertAfter(lastRepeatingGroup);
        resetAttributeNames(cloned)
    });
                    
// Delete
$('.itemDel').click(function(e){
        e.preventDefault();
        var current_item = $(this).parent('div');
        var other_items = current_item.siblings('.repeatingItems');
        if (other_items.length === 0) {
            alert("Cannot delete last entry");
            return;
        }
        current_item.slideUp('slow', function() {
            current_item.remove();

            // reset indexes
            other_items.each(function() {
               resetAttributeNames($(this));
            })
        })
    });

//		GEAR
// Add
$('.gearAdd').click(function(e){
        e.preventDefault();
        var lastRepeatingGroup = $('.repeatingGear').last();
        var cloned = lastRepeatingGroup.clone(true)  
        cloned.insertAfter(lastRepeatingGroup);
        resetAttributeNames(cloned)
    });
                    
// Delete
$('.gearDel').click(function(e){
        e.preventDefault();
        var current_gear = $(this).parent('div');
        var other_gear = current_gear.siblings('.repeatingGear');
        if (other_gear.length === 0) {
            alert("Cannot delete last entry");
            return;
        }
        current_gear.slideUp('slow', function() {
            current_gear.remove();
            
            // reset indexes
            other_gear.each(function() {
               resetAttributeNames($(this)); 
            })  
        })
    });

//Collapse
$('.gearHide').click(function(e) {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});

// //		ITEMS
// //Add
// $('.itemAdd').click(function(e){
//         e.preventDefault();
//         var lastRepeatingGroup = $('.repeatingItems').last();
//         var cloned = lastRepeatingGroup.clone(true)
//         cloned.insertAfter(lastRepeatingGroup);
//         resetAttributeNames(cloned)
//     });
//
// // Delete
// $('.itemDel').click(function(e){
//         e.preventDefault();
//         var current_item = $(this).parent('div');
//         var other_items = current_item.siblings('.repeatingItems');
//         if (other_items.length === 0) {
//             alert("Cannot delete last entry");
//             return;
//         }
//         current_item.slideUp('slow', function() {
//             current_item.remove();
//
//             // reset indexes
//             other_items.each(function() {
//                resetAttributeNames($(this));
//             })
//         })
//     });
//
// //		GEAR
// // Add
// $('.gearAdd').click(function(e){
//         e.preventDefault();
//         var lastRepeatingGroup = $('.repeatingGear').last();
//         var cloned = lastRepeatingGroup.clone(true)
//         cloned.insertAfter(lastRepeatingGroup);
//         resetAttributeNames(cloned)
//     });
//
// // Delete
// $('.gearDel').click(function(e){
//         e.preventDefault();
//         var current_gear = $(this).parent('div');
//         var other_gear = current_gear.siblings('.repeatingGear');
//         if (other_gear.length === 0) {
//             alert("Cannot delete last entry");
//             return;
//         }
//         current_gear.slideUp('slow', function() {
//             current_gear.remove();
//
//             // reset indexes
//             other_gear.each(function() {
//                resetAttributeNames($(this));
//             })
//         })
//     });
//
// //Collapse
// $('.gearHide').click(function(e) {
// 		this.classList.toggle("active");
// 		var content = this.nextElementSibling;
// 		if (content.style.display === "block") {
// 			content.style.display = "none";
// 		} else {
// 			content.style.display = "block";
// 		}
// 	});
// //		CONDITION
// // Add
// $('.conAdd').click(function(e){
//         e.preventDefault();
//         var lastRepeatingGroup = $('.repeatingCondition').last();
//         var cloned = lastRepeatingGroup.clone(true)
//         cloned.insertAfter(lastRepeatingGroup);
//         resetAttributeNames(cloned)
//     });
//
// // Delete
// $('.conDel').click(function(e){
//         e.preventDefault();
//         var current_con = $(this).parent('div');
//         var other_con = current_con.siblings('.repeatingCondition');
//         if (other_con.length === 0) {
//             alert("Cannot delete last entry");
//             return;
//         }
//         current_con.slideUp('slow', function() {
//             current_con.remove();
//
//             // reset indexes
//             other_con.each(function() {
//                resetAttributeNames($(this));
//             })
//         })
//     });
//
// //Collapse
// $('.conHide').click(function(e) {
// 		this.classList.toggle("active");
// 		var content = this.nextElementSibling;
// 		if (content.style.display === "block") {
// 			content.style.display = "none";
// 		} else {
// 			content.style.display = "block";
// 		}
// 	});
//
// //		BUFF
// // Add
// $('.buffAdd').click(function(e){
//         e.preventDefault();
//         var lastRepeatingGroup = $('.repeatingBuff').last();
//         var cloned = lastRepeatingGroup.clone(true)
//         cloned.insertAfter(lastRepeatingGroup);
//         resetAttributeNames(cloned)
//     });
//
// // Delete
// $('.buffDel').click(function(e){
//         e.preventDefault();
//         var current_buff = $(this).parent('div');
//         var other_buff = current_buff.siblings('.repeatingBuff');
//         if (other_buff.length === 0) {
//             alert("Cannot delete last entry");
//             return;
//         }
//         current_buff.slideUp('slow', function() {
//             current_buff.remove();
//
//             // reset indexes
//             other_buff.each(function() {
//                resetAttributeNames($(this));
//             })
//         })
//     });
//
// //Collapse
// $('.buffHide').click(function(e) {
// 		this.classList.toggle("active");
// 		var content = this.nextElementSibling;
// 		if (content.style.display === "block") {
// 			content.style.display = "none";
// 		} else {
// 			content.style.display = "block";
// 		}
// 	});
