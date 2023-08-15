const fs = require('fs');
const path = require('path');

const getFolderContents = (dirPath) => {
  const contents = [];

  for (const entry of fs.readdirSync(dirPath)) {
    // Skip the .index folder
    if (entry === '.index') continue;

    const entryPath = path.join(dirPath, entry);
    const stats = fs.statSync(entryPath);

    if (stats.isFile()) {
      // For files: [name, size, timestamp]
      contents.push([entry, stats.size, stats.mtimeMs]);
    } else {
      // For directories: [name, 0, timestamp, [sub_contents]]
      contents.push([entry, 0, stats.mtimeMs, getFolderContents(entryPath)]);
    }
  }

  return contents;
};

const publicContents = getFolderContents('./public');

// Save the result to a JSON file
fs.writeFileSync('./public/.index/publicFileInfo.json', JSON.stringify({ fsroot: publicContents, size: publicContents.length, version: 1 }, null, 2));

console.log('퍼블릭 폴더 정보를 json으로 축약합니다.');
