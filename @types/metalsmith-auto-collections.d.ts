declare module 'metalsmith-auto-collections' {
    import Metalsmith from "metalsmith";

    function metalsmithAutoCollections(files: {pattern?: string, settings?: object, collections?: object}): Metalsmith.Plugin;

    export = metalsmithAutoCollections;
}
