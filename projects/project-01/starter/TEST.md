# Testing Project 01

The Electron knowledge base app is now fully functional with document management and Q&A capabilities.

## Running the App

```sh
npm run dev
```
// Import the test document
await window.knowledgeBase.documents.import('/tmp/test-document.txt');

// Index it
await window.knowledgeBase.indexing.start();

// Ask a question
const ans = await window.knowledgeBase.qa.ask('What is the main process?');
console.log(ans);
This will:
1. Compile TypeScript (main process + preload)
2. Build the React renderer with Vite
3. Launch Electron

## Testing the Features

### 1. Import a Document

In the Electron DevTools console (Cmd+Option+I), run:

```javascript
// Import a document from a file path
await window.knowledgeBase.documents.import('/path/to/your/document.txt');

// Refresh the list
await window.knowledgeBase.documents.list();
```

Example with test document:
```javascript
await window.knowledgeBase.documents.import('/tmp/test-document.txt');
```

### 2. Start Indexing

After importing, index all documents:

```javascript
// Start indexing
await window.knowledgeBase.indexing.start();

// Check status
await window.knowledgeBase.indexing.status();
```

### 3. Ask a Question

Once indexed, you can ask questions:

```javascript
const response = await window.knowledgeBase.qa.ask('What is the main process?');
console.log(response);
```

### 4. View Q&A History

```javascript
const history = await window.knowledgeBase.qa.history();
console.log(history);
```

## App Architecture

- **Main Process** (`src/main/main.ts`): Electron window and IPC setup
- **Preload** (`src/preload/preload.ts`): Secure API bridge
- **Renderer** (`src/renderer/App.tsx`): React UI with document list and Q&A panel
- **Services**:
  - `DocumentService`: Document import and metadata
  - `IndexingService`: Document chunking and indexing
  - `QaService`: Q&A with mock patterns and citation retrieval
  - `PersistenceService`: Local file I/O

## Data Storage

All data is stored in `~/Library/Application Support/knowledge-base/knowledge-base-data/`:
- `documents-meta.json`: Document metadata
- `content/`: Raw document text
- `chunks/`: Indexed chunks with metadata
- `qa-history.json`: Q&A conversation history
