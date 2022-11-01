const fs = require("fs");

const https = require("https");

const file = fs.createWriteStream("data.txt");


export const getDataProduct = () => {

  return https.get("https://challenges.coode.sh/food/data/json/data-fields.txt", (response: any) => {

    var stream = response.pipe(file);

    stream.on("finish", function () {

      const resultBuffer = fs.readFileSync('data.txt');

      return resultBuffer.toString().trim();
    });
  });
}

