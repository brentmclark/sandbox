
var $videoArea = $("#youtube-video");

$videoArea.pPlayer({
    youtubeVideoId: "9nqe27MiIa4",
    autoplay: 0,
    origin: "http://sandbox.com",
});

$('.video-button').on('click', function() {
    $videoArea.toggle();
});