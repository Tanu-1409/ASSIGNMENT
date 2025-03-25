const fs = require("fs");

fs.rename("old.txt", "new.txt", (err) => {
  if (err) {
    console.error("Error renaming file:", err);
  } else {
    console.log("File renamed successfully!");
  }
});
