# FDS Logbook

A private, device-local progressive web application for mileage, fuel and incident logging. Data is stored in browser localStorage and is not sent to a server.

## GitHub Pages publishing

1. Upload all files and folders from this project to the root of your GitHub repository.
2. In the repository, open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push a commit. The included workflow builds and publishes the site.
5. Open the deployment URL shown by the workflow or in Settings > Pages.

## Local build check

```bash
npm install
npm run build
```

## Privacy note

Records and the optional PIN are stored on the current device and browser profile. Clearing site data removes them. Use Backup Data before changing device or clearing browser data. The PIN is a convenience lock, not encryption.

## Excel exports

Reports are generated as genuine `.xlsx` workbooks in the browser using SheetJS.
