const Application = require('spectron').Application;
const assert = require('assert');
const electronPath = require('electron'); // Require Electron from the binaries included in node_modules.
const path = require('path');
const baseDir = path.join(__dirname, '..');
const entry1 = 20;
const entry2 = 10;

describe('Application launch', function () {
    this.timeout(30000);

    const app = new Application({
      path: electronPath,
      // The following line tells spectron to look and use the main.js file
      // and the package.json located 1 level above.
      args: [baseDir]
    });


    beforeEach(() => {
        return app.start()
    });
    afterEach(() => {
        if(app && app.isRunning()) {
            return app.stop
        }
    });
    
    
    it('shows an initial window', async () => { 
        const count = await app.client.getWindowCount()
        assert.strictEqual(count, 1)
        // Please note that getWindowCount() will return 2 if `dev tools` are opened.
        // assert.equal(count, 2)
    });
    
    it('has the correct title', async () => {
        const title = await app.client.waitUntilWindowLoaded().getTitle();
        return assert.equal(title, 'Hello Calculator!');
    });

    it('does not have the developer tools open', async () => {
        const devToolsAreOpen = await app.client.waitUntilWindowLoaded().browserWindow.isDevToolsOpened();
        return assert.equal(devToolsAreOpen, false);
    });

    it('inputting 20 + 30 into fields', async () => {
        app.client.getRenderProcessLogs().then(function (log) {
            console.log("\tserver is ready")
        })
        await app.client.setValue('#formula1', entry1);
        await app.client.setValue('#formula2', entry2);
        await app.client.click('#solve');
        await app.client.pause(2000);
        let result = await app.client.getText('#result')
        return assert.equal(result, 30);
    })

});