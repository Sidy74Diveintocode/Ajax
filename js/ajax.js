let number = 0;
const button = $("#btn");
const title = $("#title");
const content = $("#content");
const video = $("#video");

function getData() {
  return ($.ajax('ajax.json', {
    type: 'GET'
  }))
  // ajax.jsonからデータを取得する処理を記述
}

function changeVideo() {
  button.click(function (){
    getData().then(function (data) {
      console.log(data)
      video.attr('src',data[number].url);
      title.html(data[number].title);
      content.html(data[number].content);
      number == 2 ? number = 0 : number++
    })
  })
}


window.onload = changeVideo;
