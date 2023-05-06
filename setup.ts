import * as core from "@actions/core";
import * as tc from "@actions/tool-cache";

async function install(archiveUrl: string) {
	core.info(`Setting up ${archiveUrl}...`);

	const archivePath = await tc.downloadTool(archiveUrl);
	const extractedFolder = await tc.extractTar(archivePath);
	core.addPath(extractedFolder);
}

const archives = core.getMultilineInput("archives");
for (const archive of archives) {
	install(archive);
}
