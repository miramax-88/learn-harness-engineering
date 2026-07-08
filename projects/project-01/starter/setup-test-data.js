#!/usr/bin/env node
/**
 * Setup script to create and import a test document
 * Run from starter directory: node setup-test-data.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Create test data directory
const testDir = path.join(os.tmpdir(), 'kb-test-docs');
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
}

// Create test documents
const doc1 = path.join(testDir, 'architecture.txt');
fs.writeFileSync(doc1, `Knowledge Base Architecture

The knowledge base system is built with Electron, React, and TypeScript.

Main Components:
- Main Process: Manages windows, IPC, and file operations
- Renderer: React UI with document list and Q&A interface
- Services: DocumentService, IndexingService, QaService, PersistenceService
- Preload: Secure bridge between main and renderer via contextBridge

Data Storage:
All documents are stored locally in the user's application data directory.
No cloud storage or external dependencies required.

IPC Communication:
The preload script exposes a typed API through window.knowledgeBase.
All IPC channels are defined as constants for type safety.`);

const doc2 = path.join(testDir, 'features.txt');
fs.writeFileSync(doc2, `Knowledge Base Features

Document Management:
- Import documents from local filesystem
- View document metadata (title, size, import date)
- Delete documents
- Track indexing status

Indexing:
- Automatic document chunking at paragraph boundaries
- Each chunk is ~500 characters with metadata
- Full-text search support
- Metadata extraction (word count, character count)

Q&A System:
- Ask natural language questions
- Get answers grounded in indexed documents
- Receive citations showing source passages
- View Q&A conversation history
- Confidence scoring for answers

Search Capabilities:
- Keyword-based retrieval
- Ranked results by relevance
- Fast local search without external API calls`);

console.log('✓ Created test documents:');
console.log(`  - ${doc1}`);
console.log(`  - ${doc2}`);
console.log('\nTo import these documents:');
console.log('1. Open the Knowledge Base app');
console.log('2. Open DevTools (Cmd+Opt+I)');
console.log('3. In the Console, run:');
console.log(`\nawait window.knowledgeBase.documents.import('${doc1}');\nawait window.knowledgeBase.documents.import('${doc2}');\nawait window.knowledgeBase.indexing.start();\n`);
console.log('4. Click Refresh in the app to see documents');
