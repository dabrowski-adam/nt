import fs from 'fs-extra';
import md from 'showdown';

const contentDir = './content/';
const outputDir	 = './build/';

(async () => {
	try {
		const fileNames	   = await fs.readdir(contentDir);
		const fileContents = await Promise.all(fileNames.map(f => fs.readFile(contentDir + f, 'utf8')));
		const converter    = new md.Converter();
		const converted    = fileContents.map(x => converter.makeHtml(x.toString()));
		converted.forEach((x, i) => { 
			fs.outputFile(outputDir + fileNames[i].slice(0, -3) + '.html', x, 'utf8');
		});
	} catch (e) {
		console.error(' Parsing markdown failed with:\n', e);
	}
})();
