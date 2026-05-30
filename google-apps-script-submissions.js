const SHEET_NAME = 'Submissions';
const HEADERS = [
  'Timestamp',
  'Source',
  'Name',
  'Phone',
  'Condition',
  'URL',
  'TeleCRM',
];

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const body = e && e.postData && e.postData.contents
      ? JSON.parse(e.postData.contents)
      : {};

    const row = Array.isArray(body.row)
      ? body.row
      : [
          body.timestamp || new Date(),
          body.source || '',
          body.name || '',
          body.phone || '',
          body.concern || body.condition || '',
          body.pageUrl || body.url || '',
          body.telecrm || '',
        ];

    getSheet().appendRow(row);

    return jsonResponse({
      success: true,
      message: 'Submission saved',
      row,
    });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: error && error.message ? error.message : String(error),
    });
  }
}

function doGet() {
  try {
    const sheet = getSheet();
    const values = sheet.getDataRange().getValues();

    return jsonResponse({
      success: true,
      headers: values[0] || HEADERS,
      rows: values.slice(1),
    });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: error && error.message ? error.message : String(error),
    });
  }
}
