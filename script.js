// use this to run it all together if you have problems 
//$(document).ready(function() {
//})

var currentDay = moment();
var saveLocation = $("#save-notification")*************
var saveAlert = $("<p>");
$("#current-day").text(currentDay.format("MMM Do, YYYY"));

$(".save-btn").on("click", function() {
    console.log("clicked", $(this).attr("name"))
    console.log($("#" + $(this).attr("name")).val())
    localStorage.setItem($(this).attr("name"),$("#" + $(this).attr("name")).val())  

    saveAlert.text("Your plan is saved during hour " + $(this).attr("name")) 
    saveLocation.append(saveAlert);
    $('#8 .to-do').val(localStorage.getItem('hr-8'))
    $('#9 .to-do').val(localStorage.getItem('hr-9'))
    $('#10 .to-do').val(localStorage.getItem('hr-10'))
    $('#11 .to-do').val(localStorage.getItem('hr-11'))
    $('#12 .to-do').val(localStorage.getItem('hr-12'))
    $('#13 .to-do').val(localStorage.getItem('hr-13'))
    $('#14 .to-do').val(localStorage.getItem('hr-14'))
    $('#15 .to-do').val(localStorage.getItem('hr-15'))
    $('#16 .to-do').val(localStorage.getItem('hr-16'))
})

function colorUpdate() {
    var momentTime = moment().hours();
    $('.row').each(function() {
        var rowHour = $(this).attr('id');
        if(momentTime > rowHour){
            $(this).addClass('past')
        }
        else if (momentTime == rowHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })   
 }
colorUpdate();

var pageRefresh = setInterval(colorUpdate, 15000)


    // and then do the conditional statements

//colorUpdate => {  
//}

// to fix getitem => wrap in document.ready
// q              => change location of where getitem is called



