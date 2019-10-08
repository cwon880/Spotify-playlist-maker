console.log("hello");

var video_id = window.location.search.split('v=')[1];
var ampersandPosition = video_id.indexOf('&');
if(ampersandPosition != -1) {
  video_id = video_id.substring(0, ampersandPosition);
}
var yt_api_key = "AIzaSyAXdSuNOLvC8Dihin_Xtvrn9FGEDMo7jXg"
yt_snippet_endpoint = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + video_id + "&key=" + yt_api_key;

var jqxhr = $.getJSON(yt_snippet_endpoint, function(){
    console.log("first success");
})
  .done(function(data) {
    console.log("second success callback");
    var title = getTitle(data);
    console.log("the title is "+title);
    // do something with title here
  })
  .fail(function(data) {
    console.log(data)
    console.log("error, see network tab for response details");
  });

function getTitle(snippet_json_data){
  var title = snippet_json_data.title;
  return title;
}