function importCSVFromGoogleDrive() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var file = DriveApp.getFilesByName("users.csv").next();
  var csvData = Utilities.parseCsv(file.getBlob().getDataAsString());
  sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData);
}
