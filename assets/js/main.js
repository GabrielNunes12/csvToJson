const csv = document.querySelector('.csvToBeConverted');
const form = document.querySelector('.form');
const result = document.querySelector('.result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const csvToBeConverted = event.target.querySelector('.csvToBeConverted');

  const resultCsvToBeConverted = csvToBeConverted.value;

  if(!resultCsvToBeConverted) return;

  const csvJson = (csv) => {
    let lines = csv.split('\n');
    let headers = lines[0].split(',');
    const result = [];

    for( let i = 1; i < lines.length; i++) {
      if(!lines[i]) continue;
      const obj = {};
      const currentLine = lines[i].split(',');

      for(let j = 0; j < currentLine.length; j++){
        obj[headers[j]] = currentLine[j];
      }
      result.push(obj);
      return JSON.stringify(result);
    }
  }
  result.innerHTML = csvJson(resultCsvToBeConverted);
})