# Google Sheets Integration Setup Guide for Niora Birth

To automatically save every patient lead directly into your Google Sheet without a database, follow this 2-minute setup guide:

---

### Step 1: Create Your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a **Blank Spreadsheet**.
2. Name the sheet: **Niora Birth Leads**.
3. Copy and paste these **17 Column Headers** into Row 1:

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Lead ID | Date | Time | Full Name | Phone | WhatsApp | Email | Age | City | Treatment | Preferred Branch | Preferred Date | Preferred Time | Message | Status | Source | Remarks |

---

### Step 2: Add Google Apps Script Webhook

1. In your Google Sheet top menu, click **Extensions** ➔ **Apps Script**.
2. Erase any default code in `Code.gs` and paste the following script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var contents = JSON.parse(e.postData.contents);
    
    // Append the 17-column lead row
    if (contents.data && Array.isArray(contents.data)) {
      sheet.appendRow(contents.data);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Step 3: Deploy Script as Web App

1. Click the blue **Deploy** button (top right) ➔ Select **New deployment**.
2. Click the gear icon next to *Select type* and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `Niora Birth Webhook`
   - **Execute as**: `Me (your google account)`
   - **Who has access**: `Anyone` *(IMPORTANT: Must be set to Anyone so website leads can post without authentication errors)*
4. Click **Deploy**.
5. Authorize access if Google prompts you (Click *Advanced* ➔ *Go to Niora Script (unsafe)* ➔ *Allow*).
6. Copy the generated **Web App URL** (starts with `https://script.google.com/macros/s/...`).

---

### Step 4: Add URL to `.env.local`

Paste the copied URL into your [.env.local](file:///d:/niora%20birth%20backup/niora-birth-clinic/.env.local) file:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_COPIED_WEBHOOK_ID/exec
```

Now, every lead submitted on the website will be **instantly appended to your Google Sheet** AND **emailed to both the patient and `Niorabirth@gmail.com` / `nioraartbank@gmail.com`**!
