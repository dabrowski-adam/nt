import fs  from 'fs-extra';
import md  from 'showdown';
import tpl from 'mustache';

const contentDir  = './content/';
const templateDir = './templates/';
const outputDir	  = './build/';

(async () => {
	try {
		// Parse markdown files
		const fileNames	   = await fs.readdir(contentDir);
		const fileContents = await Promise.all(fileNames.map(f => fs.readFile(contentDir + f, 'utf8')));
		const converter    = new md.Converter();
		converter.setOption('noHeaderId', 'true');
		const converted    = fileContents.map(x => converter.makeHtml(x));
		
		/*converted.forEach((x, i) => { 
			fs.outputFile(outputDir + fileNames[i].slice(0, -3) + '.html', x, 'utf8');
		});*/

		// Render mustache template
		const template = await fs.readFile(templateDir + 'index.html', 'utf8');
		const rendered = tpl.render(template, { reports: converted });
		fs.outputFile(outputDir + 'index.html', rendered, 'utf8');

	} catch (e) {
		console.error(' Build failed with:\n', e);
	}
})();
