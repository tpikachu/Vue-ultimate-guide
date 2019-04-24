// 1. Put this file in root directory of your App
// 2. Run `npm install --save-dev express puppeteer http-proxy isbot`
// 3. Change const `renderedAppPort` to port of your app (example: 4200 for Angular by default)
// 4. Start serve your app (example: > `ng serve --prod --port=4200`)
// 5. Run `node render.server.js` (It will be launched on port 80)

// If a crawler bot is detected, the page will be rendered. If not, the application will work as usual.

const express = require('express'); // Node Server
const httpProxy = require('http-proxy'); // Proxy Server
const puppeteer = require('puppeteer'); // Chromium Render from Google
const isBot = require('isbot'); // Crawler Bot Detector

const renderApp = express();
const proxy = httpProxy.createProxyServer({});
const renderAppPort = 80;
const renderedAppPort = 4200;

renderApp.use('*', (request, response) => {
    const requestUrl = `${request.protocol}://${request.hostname}:${renderedAppPort}${request.originalUrl}`;
    const crawlerBotIsDetected = isBot(request.headers['user-agent']);

    if (crawlerBotIsDetected) {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(requestUrl);
            
            response.send(await page.content());
    
            await browser.close();
        })();
    } else {
        proxy.web(request, response, { target: requestUrl });
    }
});

console.log('Page will rendered for Crawlers');
renderApp.listen(renderAppPort, () => console.log(`SEO Render started on port ${renderAppPort}`));