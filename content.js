console.log("hello");

// var video_id = "Yqk1RwLwcXo"
// var yt_api_key = "AIzaSyAXdSuNOLvC8Dihin_Xtvrn9FGEDMo7jXg"
// yt_snippet_endpoint = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + video_id + "&key=" + yt_api_key;

// var xhr = new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET", yt_snippet_endpoint,true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.onload = function(){
//   var data = JSON.parse(xhr.responseText);
//   console.log(data);
// }
// xhr.send();
// console.log(xhr.status);
// console.log(xhr);
// console.log(xhr.responseType);
// var jqxhr = $.getJSON(yt_snippet_endpoint, function(){
//     console.log("first success");
// })
//   .done(function(data) {
//     console.log("second success callback");
//     var title = getTitle(data);
//     console.log("the title is "+title);
//     // do something with title here
//   })
//   .fail(function(data) {
//     console.log(data.title)
//     console.log("error, see network tab for response details");
//   });

// function getTitle(snippet_json_data){
//   var title = snippet_json_data.title;
//   return title;
// }

