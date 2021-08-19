export function readFile(e, setFilename, setFileContent) {
  let file = e.target.files[0];
  if (!file) return;
  let reader = new FileReader();
  reader.onload = function (e) {
    let contents = reader.result;
    setFilename(file.name);
    setFileContent(contents);
  };
  reader.readAsText(file);
}
