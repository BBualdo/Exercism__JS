const responses = {
  "question": "Sure.",
  "yell": "Whoa, chill out!",
  "yell_question": "Calm down, I know what I'm doing!",
  "silence": "Fine. Be that way!",
  "default": "Whatever."
};

export const hey = (message) => {
  let key = "default";
  
  message = message.trim();

  if (message.length === 0) {
    key = "silence";
  }
  
  if (message.endsWith('?')) {
    const filteredStrArr = Array.from(filterString(message));
    if (filteredStrArr.length !== 0 && filteredStrArr.every(c => isUpper(c))) {
      key = "yell_question";
    } else {
      key = "question";
    }
  } else {
    const filteredStrArr = Array.from(filterString(message));
    if (filteredStrArr.length !== 0 && filteredStrArr.every(c => isUpper(c))) {
      key = "yell";
    }
  }

  return responses[key];
};

function isUpper(char) {
  return char === char.toUpperCase();
}

function filterString(str) {
  return str.match(/[a-zA-Z]/g)?.join("") ?? "";
}