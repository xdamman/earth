const fs = require("fs");
const _ = require("lodash");
let checkins = JSON.parse(fs.readFileSync("data/checkins.geojson", "utf-8"));

const countries = {};
const calendar = {};

// for (let i = 0; i < 20; i++) {
for (let i = 0; i < checkins.features.length; i++) {
  const checkin = checkins.features[i];
  const date = checkin.properties.date.toString();
  const d = new Date();
  const year = date.substr(0, 4);
  const month = Number(date.substr(4, 2));
  const day = Number(date.substr(6, 2));
  d.setFullYear(year);
  d.setMonth(month - 1);
  d.setDate(day);
  const country = checkin.properties.country;
  calendar[year] = calendar[year] || {};
  calendar[year][month] = calendar[year][month] || {};
  calendar[year][month][day] = country;
  // console.log("Date", date, d, "Country", country);
}

let currentCountry;
const totalDaysPerCountry = {};
console.log(
  "year, month, days in month, days in Belgium, days in the US, elsewhere"
);
for (let y = 2016; y < 2020; y++) {
  totalDaysPerCountry[y] = totalDaysPerCountry[y] || {};
  for (let m = 1; m <= 12; m++) {
    totalDaysPerCountry[y][m] = totalDaysPerCountry[y][m] || {};
    const d = new Date();
    d.setFullYear(y);
    d.setMonth(m);
    d.setDate(0);
    const daysInMonth = d.getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const country = _.get(calendar, `${y}.${m}.${d}`) || currentCountry;
      // console.log("country for ", `${y}.${m}.${d}`, country);
      if (country !== currentCountry) {
        currentCountry = country;
      }
      totalDaysPerCountry[y][m][country] =
        totalDaysPerCountry[y][m][country] || 0;
      totalDaysPerCountry[y][m][country]++;
    }
    console.log(
      `${y},${m},${daysInMonth},${totalDaysPerCountry[y][m]["Belgium"] ||
        0},${totalDaysPerCountry[y][m]["United States"] || 0}`
    );
  }
}

// console.log(">>> countries", countries);
// console.log(">>> calendar", calendar);
console.log(">>> totalDaysPerCountry", totalDaysPerCountry);
