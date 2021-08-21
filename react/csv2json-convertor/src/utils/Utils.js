// Read file utility
export function readFile(files, setFilename, setFileContent) {
  let file = files[0];
  if (!file) return;

  let reader = new FileReader();
  reader.onload = function (e) {
    let content = reader.result;
    setFilename(file.name);
    setFileContent(content);
  };
  reader.readAsText(file);
}

//clean the text
const cleanCSV = (text, delimiter) => {
  //remove ' and "
  let cleanText = text.replace(/['"\\]+/g, "");
  //remove spaces between delimiter
  const removeSpaces = new RegExp(`\\s*${delimiter}\\s*`, "g");
  cleanText = cleanText.replace(removeSpaces, `${delimiter}`);
  return cleanText;
};

// parse a text
const parseText = (text, delimiter) => {
  text = cleanCSV(text, delimiter);
  // if text is empty, throw an error
  if (!text) console.log("Text is empty");
  // check if the first line exists
  let values = [];
  let lines = text.split("\n");
  let keys = lines && lines.shift();
  keys = keys.split(delimiter);
  for (let line of lines) {
    if (line) {
      let dataCount = line.split(delimiter).length;
      if (dataCount === keys.length) values.push(line);
    }
  }
  return { valueLines: values, keys: keys };
};
//construct a JSON object out of text
export const CSV2JSON = (text, delimiter) => {
  // Errors
  let objArr = [];
  let { keys, valueLines } = parseText(text, delimiter);
  let lineObj = {};
  for (let valueLine of valueLines) {
    let values = valueLine.split(delimiter);
    for (let el = 0; el < values.length; el++) {
      lineObj[keys[el]] = values[el].trim();
      objArr.push(lineObj);
    }
  }
  return JSON.stringify(objArr, null, 4);
};
