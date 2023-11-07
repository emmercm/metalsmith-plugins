declare module 'metalsmith-hbt-md' {
    import Metalsmith from "metalsmith";

    function metalsmithHbtMd(handlebars: object, options?: {pattern: string}): Metalsmith.Plugin;

    export = metalsmithHbtMd;
}
