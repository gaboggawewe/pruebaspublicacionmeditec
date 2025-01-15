const dateFormat = (datetime) => {
  const dateTime = new Date(datetime);
  const date = dateTime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  return date;
};

const readingTime = (content) => {
  const WPS = 275 / 60;
  let images = 0;
  const regex = /\w/;
  let words = content.split(" ").filter((word) => {
    if (word.includes("<img")) {
      images += 1;
    }
    return regex.test(word);
  }).length;
  let imageAdjust = images * 4;
  let imageSecs = 0;
  let imageFactor = 12;
  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }
  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);
  if (minutes < 10) {
    if (minutes < 2) {
      return "0" + minutes + ` Min read`;
    } else {
      return "0" + minutes + ` Mins read`;
    }
  } else {
    return minutes + ` Mins read`;
  }
};

export { dateFormat as d, readingTime as r };
