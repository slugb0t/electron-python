const Application = require('spectron').Application;
const assert = require('assert');
const electronPath = require('electron'); // Require Electron from the binaries included in node_modules.
const path = require('path');
const baseDir = path.join(__dirname, '..');
const entries = [20, 10, 700, 400, 25, 5];
const blankEntry = ""

describe('Application launch', function () {
    this.timeout(30000);

    const app = new Application({
      path: electronPath,
      // The following line tells spectron to look and use the main.js file
      // and the package.json located 1 level above.
      args: [baseDir]
    });


    before(() => app.start());

    after(() => app.stop());
    
    
    it('shows an initial window', async () => { 
        app.client.getRenderProcessLogs().then(function (log) {
            console.log("\tserver is ready")
        })
        const count = await app.client.getWindowCount()
        assert.strictEqual(count, 1)
        // Please note that getWindowCount() will return 2 if `dev tools` are opened.
        // assert.equal(count, 2)
    });

    //check title of window
    it('has the correct title', async () => {
        const title = await app.client.waitUntilWindowLoaded().getTitle();
        return assert.equal(title, 'Hello Calculator!');
    });

    //to turn on developer tools modify main.js as well
    it('does not have the developer tools open', async () => {
        const devToolsAreOpen = await app.client.waitUntilWindowLoaded().browserWindow.isDevToolsOpened();
        return assert.equal(devToolsAreOpen, false);
    });

    //25 + 5
    it('inputting 20 + 10 into fields', async () => {
        await app.client.setValue('#formula1', entries[4]);
        await app.client.setValue('#formula2', entries[5]);
        await app.client.click('#solve');
        await app.client.pause(2000);
        let result = await app.client.getText('#result')
        app.client.getRenderProcessLogs().then(function (log) {
            console.log("\t25 + 5 = 30?")
        })
        return assert.equal(result, 30);
    })

    //700 + 400
    it('inputting 700 + 400 into fields', async () => {
        await app.client.setValue('#formula1', entries[2]);
        await app.client.setValue('#formula2', entries[3]);
        await app.client.click('#solve');
        await app.client.pause(2000);
        let result = await app.client.getText('#result')
        app.client.getRenderProcessLogs().then(function (log) {
            console.log("\t700 + 400 = 1100?")
        })
        return assert.equal(result, 1100);
    })

    it('inputting 20 + 10 into fields', async () => {
        await app.client.setValue('#formula1', entries[0]);
        await app.client.setValue('#formula2', entries[1]);
        await app.client.click('#solve');
        await app.client.pause(2000);
        let result = await app.client.getText('#result')
        app.client.getRenderProcessLogs().then(function (log) {
            console.log("\t20 + 10 = 30?")
        })
        return assert.equal(result, 30);
    })

    //submitting with an empty field
    it('inputting 20 + (null) into fields', async () => {
        await app.client.setValue('#formula1', entries[0]);
        await app.client.setValue('#formula2', blankEntry);
        await app.client.click('#solve');
        await app.client.pause(2000);
        let result = await app.client.getText('#result')
        app.client.getRenderProcessLogs().then(function (log) {
            console.log("\t20 + (null) = input is blank")
        })
        return assert.equal(result, "input is blank");
    })
    it('inputting (null) + 10 into fields', async () => {
        await app.client.setValue('#formula1', blankEntry);
        await app.client.setValue('#formula2', entries[1]);
        await app.client.click('#solve');
        await app.client.pause(2000);
        let result = await app.client.getText('#result')
        app.client.getRenderProcessLogs().then(function (log) {
            console.log("\t(null) + 10 = input is blank")
        })
        return assert.equal(result, "input is blank");
    })

    //if input is not a number
    it('inputting letter into field1 (q + 1)', async () => {
        await app.client.setValue('#formula1', 'q');
        await app.client.setValue('#formula2', entries[0]);
        await app.client.click('#solve');
        await app.client.pause(2000);
        let result = await app.client.getText('#result')
        app.client.getRenderProcessLogs().then(function (log) {
            console.log("\tq + 20 = input 1 is is not a number")
        })
        return assert.equal(result, "input 1 is not a number");
    })
    it('inputting letter into field2', async () => {
        await app.client.setValue('#formula1', entries[0]);
        await app.client.setValue('#formula2', 'q');
        await app.client.click('#solve');
        await app.client.pause(2000);
        let result = await app.client.getText('#result')
        app.client.getRenderProcessLogs().then(function (log) {
            console.log("\t20 + q = input 2 is not a number")
        })
        return assert.equal(result, "input 2 is not a number");
    })

});