function doGet() {
  const url = 'https://cdn.jsdelivr.net/gh/woolisbest-4520/WOOLtube-global@refs/heads/main/index.html';

  const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  const html = response.getContentText();

  return HtmlService.createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
