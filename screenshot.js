const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: { width: 1280, height: 900 }
    });
    
    await page.goto('file:///Users/fiona/.openclaw/workspace/wrap-studio/index.html');
    await page.waitForTimeout(2000); // 等动画加载
    
    await page.screenshot({ 
        path: '/Users/fiona/.openclaw/workspace/wrap-studio/screenshot.png',
        fullPage: true 
    });
    
    await browser.close();
    console.log('截图已保存');
})();