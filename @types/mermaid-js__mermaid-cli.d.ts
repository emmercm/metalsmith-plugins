declare module '@mermaid-js/mermaid-cli' {
  // https://www.npmjs.com/package/@mermaid-js/mermaid-cli/v/11.4.0?activeTab=code

  export type ParseMDDOptions = {
    viewport?: puppeteer.Viewport | undefined;
    backgroundColor?: string | undefined;
    mermaidConfig?: import('mermaid').MermaidConfig | undefined;
    myCSS?: string | undefined;
    pdfFit?: boolean | undefined;
    svgId?: string | undefined;
  };
  export type MarkdownImageProps = {
    url: string;
    alt: string;
    title?: string | null | undefined;
  };
  export function run(
    input: `${string}.${'md' | 'markdown'}` | string | undefined,
    output: `${string}.${'md' | 'markdown' | 'svg' | 'png' | 'pdf'}` | '/dev/stdout',
    {
      puppeteerConfig,
      quiet,
      outputFormat,
      parseMMDOptions,
    }?:
      | {
          puppeteerConfig?: puppeteer.LaunchOptions | undefined;
          quiet?: boolean | undefined;
          outputFormat?: 'svg' | 'png' | 'pdf' | undefined;
          parseMMDOptions?: ParseMDDOptions | undefined;
        }
      | undefined,
  ): Promise<void>;
  export function renderMermaid(
    browser: import('puppeteer').Browser | import('puppeteer').BrowserContext,
    definition: string,
    outputFormat: 'svg' | 'png' | 'pdf',
    {
      viewport,
      backgroundColor,
      mermaidConfig,
      myCSS,
      pdfFit,
      svgId,
    }?: ParseMDDOptions | undefined,
  ): Promise<{
    title: string | null;
    desc: string | null;
    data: Uint8Array;
  }>;
  export function cli(): Promise<void>;
  export function error(message: string): never;
  import puppeteer from 'puppeteer';
}
