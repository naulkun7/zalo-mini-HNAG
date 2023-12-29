// sheetsService.js
import { google } from "googleapis";

let ggSheetID = import.meta.env.VITE_GG_SHEET_ID;
let ggClientID = import.meta.env.VITE_GG_CLIENT_ID;

const fetchSheetData = async () => {
  try {
    const sheets = google.sheets({ version: "v4" });

    const response = await sheets.spreadsheets.values.get({
      auth: { ggClientID }, // Replace with your OAuth2 client
      spreadsheetId: { ggSheetID }, // Replace with your spreadsheet ID
      range: "Sheet1", // Replace with your specific range
    });

    return response.data.values;
  } catch (error) {
    console.error("The API returned an error: " + error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export default fetchSheetData;
