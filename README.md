# Tierlink
A dependency-free static tier-list editor. Add named items and notes, drag between S–F ratings, or click to edit and choose a rating on mobile. Lists are saved locally as drafts. Copy share link creates an independent snapshot encoded as UTF-8 JSON in the URL fragment; recipients can remix and share without modifying the original. No database, analytics, external assets or backend.

## Hosting
Upload this repository to GitHub, then Settings → Pages → Source → GitHub Actions. The included workflow tests and deploys on pushes to main. All paths are relative for GitHub Pages project URLs. To run locally, serve this directory with any static HTTP server. Run tests with `npm test` (Node 18+).

Links contain all list text and are readable by anyone with the link. Large lists produce long URLs which some messaging services truncate. Limits: 500 items, 160 characters per item name, 500 per note, 120 per title. Dragging a card appends it to its destination tier. Share links preserve card order.
