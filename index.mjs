import fs from 'fs-extra';
import md from 'showdown';

const contentDir = './content/';
const outputDir	 = './build/';

(async () => {
	try {
		const fileNames	   = await fs.readdir(contentDir);
		const fileContents = await Promise.all(fileNames.map(async f => await fs.readFile(contentDir + f)));
		const converter    = new md.Converter();
		const converted    = fileContents.map(x => converter.makeHtml(x.toString()));
		converted.forEach(async (x, i) => { 
			await fs.outputFile(outputDir + i + '.html', x);
		});
	} catch (e) {
		console.error(' Parsing markdown failed with:\n', e);
	}
})();
