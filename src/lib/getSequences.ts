import fs from 'fs';
import path from 'path';

export function getSequenceImages(sequenceName: string) {
  try {
    const dirPath = path.join(process.cwd(), 'public', sequenceName);
    const files = fs.readdirSync(dirPath);
    return files
      .filter(f => f.endsWith('.jpg') || f.endsWith('.png'))
      .sort((a, b) => a.localeCompare(b))
      .map(f => `/${sequenceName}/${f}`);
  } catch (error) {
    console.error(`Failed to read sequence ${sequenceName}:`, error);
    return [];
  }
}
