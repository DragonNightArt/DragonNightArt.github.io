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
        e.preventDefault();

        var classes = this.classList;
        var target = ".repeating" + classes[0];

        var current_item = $(this).parent('div');
        var other_items = current_item.siblings(target);
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

//Collapse
$('.hide').click(function(e) {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
