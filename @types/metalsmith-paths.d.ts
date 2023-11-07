declare module 'metalsmith-paths' {
    import Metalsmith from "metalsmith";

    function metalsmithPaths(options?: {property?: string, directoryIndex?: boolean, hrefIndex?: boolean, winToUnix?: boolean}): Metalsmith.Plugin;

    export = metalsmithPaths;
}
