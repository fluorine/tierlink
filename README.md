# Tierlink

A simple, account-free tier list editor. Open the board, add labels, move them into place, and share your ranking with a link.

**[Try Tierlink](https://fluorine.github.io/tierlink/)**

## Make a list

1. On your first visit, you'll see examples. Edit them, or open **Controls** and choose **New list** to start with an empty board.
2. Select **+** on a tier, enter a label, and save it. The item goes straight into that tier.
3. Drag an item to another tier, or select it to change its label, move it, or delete it. The move option works on mobile too.
4. Tap or click the title above the board to edit it. Open **Controls** to copy a share link. The panel hides after inactivity; select **Controls** at the bottom to open it. Select **Create your own list** at the bottom to expand the instructions.

Your draft is saved in your browser when local storage is available.

## Share and remix

The address updates as you edit. Copy it from your browser or use **Copy share link** to share a snapshot. Someone opening the link can edit their own version and share a new link without changing yours.

The link contains the list itself, including its title and labels. Anyone with the link can read it, so don't include anything you want to keep private. Special characters are encoded safely. Very large lists produce long links, which some browsers or messaging apps may truncate. The editor supports up to 500 items, 160 characters per label, and 120 characters for the title. Older links containing notes keep that data, although notes no longer appear in the editor.

## Run locally

No build or dependencies are needed for the editor. From this folder, start a static server, for example:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. To run the tests, install Node.js 18 or later and run:

```sh
npm test
```

## Deploy your own copy

Enable GitHub Pages in your repository settings and choose **GitHub Actions** as the source. The included workflow tests and deploys the site when changes are pushed to `main`. Tierlink is static: it has no database, accounts, analytics, or backend.
