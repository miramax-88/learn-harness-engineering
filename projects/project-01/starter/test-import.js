#!/usr/bin/env node
/**
 * Quick test script to import a document and index it.
 * Usage: node test-import.js <file-path>
 */

const { app } = require('electron');
const path = require('path');
const { DocumentService } = require('./dist/services/document-service.js');
const { IndexingService } = require('./dist/services/indexing-service.js');
const { PersistenceService } = require('./dist/services/persistence-service.js');

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node test-import.js <file-path>');
  process.exit(1);
}

const dataDir = path.join(app.getPath('userData'), 'knowledge-base-data');
const persistence = new PersistenceService(dataDir);
const documentService = new DocumentService(persistence);
const indexingService = new IndexingService(persistence);

console.log(`Importing ${filePath}...`);
const doc = documentService.importDocument(filePath);
console.log('✓ Imported:', doc);

console.log('\nIndexing...');
const status = indexingService.startIndexing(doc.id);
console.log('✓ Indexing status:', status);

console.log('\n✓ Ready to use! Start the app with: npm run dev');
