// Bookmarklet: Reset video speed to 1× (normal)
javascript:(function(){  const videos = document.querySelectorAll('video');  if (videos.length === 0) {    alert('No videos found.');    return;  }  let count = 0;  videos.forEach(v => {    try {      v.playbackRate = 1.0;      count++;    } catch (e) {}  });  alert(`Set ${count} video(s) to 1x speed.`);})();
