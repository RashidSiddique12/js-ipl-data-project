const csvtojson = require("csvtojson");
const fs = require("fs");
const csvFilePath1 = "./deliveries.csv";

csvtojson()
  .fromFile(csvFilePath1)
  .then((jsonArrayObj) => {
    const jsonFileName = "deliveries.json";
    const jsonFilePath = "./deliveries.json";

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArrayObj, null, 2));
    console.log("Conversion completed! JSON file saved:", jsonFileName);
  })
  .catch((err) => console.log(err));

////////////////////////////////////////////////////////
const csvFilePath2 = "./matches.csv";

csvtojson()
  .fromFile(csvFilePath2)
  .then((jsonArrayObj) => {
    const jsonFileName = "matches.json";
    const jsonFilePath = "./matches.json";

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArrayObj, null, 2));
    console.log("Conversion completed! JSON file saved:", jsonFileName);
  })
  .catch((err) => console.log(err));
