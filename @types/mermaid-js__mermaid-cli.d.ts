declare module '@mermaid-js/mermaid-cli' {
    import {Browser} from "puppeteer";

    function renderMermaid(browser: Browser, definition: string, outputFormat: 'svg' | 'png' | 'pdf', opt: object): Promise<{data: Buffer}>;

    export {renderMermaid}
}
