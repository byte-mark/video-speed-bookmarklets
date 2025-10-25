# 🔖 Bookmarklets Collection

A small set of browser bookmarklets you can use to quickly adjust playback speed (or other functions) directly from your bookmarks bar. Clicking the bookmarklets will automatically speed up or slowdown most videos, even if there is no player controls that are present. 

---

## 🚀 How to Install

1. Visit the GitHub Pages version of this repo:  
   👉 **[Open the Bookmarklet Page](https://byte-mark.github.io/video-speed-bookmarklets)**

2. Drag any of the buttons (e.g., “1.5× Speed”) to your bookmarks bar.

3. That’s it — click it anytime while watching a video to apply the change!

---

## 🧠 Notes

- Works in most browsers: Chrome, Edge, Brave, and Firefox.
- On Safari, you may need to enable “Show Favorites Bar” first.
- If you edit the code, remember to prefix with `javascript:` and URL-encode if you embed directly in markdown.

---

### Example (for reference only)

```js
javascript:(function(){   const videos = document.querySelectorAll('video');   if (videos.length === 0) {     alert('No videos found.');     return;   }   let count = 0;   videos.forEach(v => {     try {       v.playbackRate = 1.5;       count++;     } catch (e) {}   });   alert(`Set ${count} video(s) to 1.5x speed.`); })();
