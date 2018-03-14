//alert("js");

//=============== api =====================//
var userInput = $("#input").val();




//=========================================//


// global variables 
var topics = ["hello", "boxing", "technology", "travel", "food"]



//add default buttons to page from local array
for (i = 0; i < topics.length; i++) {
    var newBtn = $("<button>").addClass("btn topic-btn");
    $(newBtn).text(topics[i]).attr('id', topics[i]);
    $("#buttonSpace").prepend(newBtn);
    // console.log(topics[i]);
}

///===== Giphy Button Click Function
$("#buttonSpace").on("click", '.topic-btn', function () {
    console.log($(this).attr('id'));
    // console.log("hello from .topic-btn function");
    var btnValue = $(this).attr('id');
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3R77zFDsGdtC9hQOVgcLjDSf7FTDdvB3&q=" + btnValue + "&limit=2&offset=0&rating=PG-13&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
       // console.log(response.data[0].images.fixed_height.url);
        //create a variable to hold the giph url
        var gifURL = response.data[0].images.fixed_height.url;
        //create an img element and assign the url to the attr.
        var newGif = $("<img>").attr('src', gifURL);
        //add new gif to page
        $("#gifContainer").prepend(newGif);
    });

   

});

//capture the user word to be pushed to the array.
$("#submit").on("click", function () {
    if ($("#input").val() === "") {
        alert("Uh Oh! You forgot to enter a topic into the search field");
    } else {
        console.log("hello click from GO button");
        //capture user input
        userInput = $("#input").val();
        //verify user input
        console.log(userInput);
        //push the new word to the arrray
        topics.push(userInput);
        //verify new word has been added to topics[]
        console.log(topics);
        //create new button with user input on it
        var newButton = $("<button></button>").text(userInput).addClass("btn user-btn topic-btn").attr("id", userInput);
        //prepend to button area
        $("#buttonSpace").append(newButton);
        //empty text area
        $("#input").val("");
    }
});

//click function for new user generated buttons
// $(".user-btn").on("click", function () {
//     //console.log($(".user-btn").attr('id'));
//     console.log("hello from .user-btn function");
// });







