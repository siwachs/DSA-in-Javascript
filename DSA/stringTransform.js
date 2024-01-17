const str = "IN_PROGRESS_striNG";
let result = "";
let capitalizeNext = true;

for (const char of str) {
  if (char === "_") {
    result += " ";
    capitalizeNext = true;
  } else {
    result += capitalizeNext ? char.toUpperCase() : char.toLocaleLowerCase();
    capitalizeNext = false;
  }
}

console.log(result);
