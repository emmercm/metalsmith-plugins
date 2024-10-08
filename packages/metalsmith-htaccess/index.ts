import deepmerge from 'deepmerge';
import Metalsmith from 'metalsmith';

export interface Options {
  core?: {
    options?: {
      followSymlinks?: boolean;
      indexes?: boolean;
      multiViews?: boolean;
    };
    defaultCharset?: string;
    serverSignature?: boolean;
    errorDocuments?: { [key: string]: string };
  };
  deflate?: {
    mimeTypes?: string[];
  };
  dir?: {
    index?: string;
  };
  environment?: {
    serverAdminEmail?: string;
    timezone?: string;
  };
  expires: {
    default?: string;
    types?: {
      [key: string]: string;
    };
  };
  gzip?: {
    canNegotiate?: boolean;
    dechunk?: boolean;
    include?: string[];
    exclude?: string[];
  };
  headers?: {
    etag: boolean;
  };
  mime?: {
    defaultLanguage?: string;
    languages?: { [key: string]: string };
    charsets?: { [key: string]: string };
    types?: { [key: string]: string };
  };
  rewrite?: {
    options?: string;
    allowedMethods?: string[];
    '404'?: boolean;
    httpsRedirect?: boolean;
  };
  spelling?: {
    check?: boolean;
  };
}

const generate = (options: Options) => {
  let htaccess = '';

  /* ***** Core ***** */

  htaccess += '<Files .htaccess>\n';
  htaccess += '\tOrder Allow,Deny\n';
  htaccess += '\tDeny from all\n';
  htaccess += '</Files>\n';

  if (options.core) {
    if (options.core.options) {
      if (options.core.options.followSymlinks) {
        htaccess += 'Options +FollowSymlinks\n';
      } else {
        htaccess += 'Options -FollowSymlinks\n';
      }

      if (options.core.options.indexes) {
        htaccess += 'Options +Indexes\n';
      } else {
        htaccess += 'Options -Indexes\n';
      }

      if (options.core.options.multiViews) {
        htaccess += 'Options +MultiViews\n';
      } else {
        htaccess += 'Options -MultiViews\n';
      }
    }

    if (options.core.defaultCharset) {
      htaccess += `AddDefaultCharset ${options.core.defaultCharset}\n`;
    }

    if (options.core.serverSignature) {
      htaccess += 'ServerSignature On\n';
    } else {
      htaccess += 'ServerSignature Off\n';
    }

    const { errorDocuments } = options.core;
    if (errorDocuments && Object.keys(errorDocuments).length) {
      Object.keys(errorDocuments).forEach((code) => {
        htaccess += `ErrorDocument ${code} ${errorDocuments[code]}\n`;
      });
    }
  }

  if (options.headers && options.headers.etag) {
    htaccess += `FileETag ${options.headers.etag}\n`;
  } else {
    htaccess += 'FileETag none\n';
  }

  /* ***** mod_deflate ***** */

  if (options.deflate) {
    htaccess += '<IfModule mod_deflate.c>\n';

    if (options.deflate.mimeTypes && options.deflate.mimeTypes.length) {
      htaccess += `\tAddOutputFilterByType DEFLATE ${options.deflate.mimeTypes.join(' ')}\n`;
    }

    // https://gtmetrix.com/enable-gzip-compression.html
    htaccess += '\tBrowserMatch ^Mozilla/4 gzip-only-text/html\n';
    htaccess += '\tBrowserMatch ^Mozilla/4\\.0[678] no-gzip\n';
    htaccess += '\tBrowserMatch \\bMSIE !no-gzip !gzip-only-text/html\n';
    htaccess += '\tHeader append Vary User-Agent\n';

    htaccess += '</IfModule>\n';
  }

  /* ***** mod_dir ***** */

  if (options.dir) {
    htaccess += '<IfModule mod_dir.c>\n';

    if (options.dir.index) {
      htaccess += `\tDirectoryIndex ${options.dir.index}\n`;
    }

    htaccess += '</IfModule>\n';
  }

  /* ***** Environment ***** */

  if (options.environment) {
    if (options.environment.serverAdminEmail) {
      htaccess += `SetEnv SERVER_ADMIN ${options.environment.serverAdminEmail}\n`;
    }

    // https://www.inmotionhosting.com/support/website/general-server-setup/tz-ref-table
    if (options.environment.timezone) {
      htaccess += `SetEnv TZ ${options.environment.timezone}\n`;
    }
  }

  /* ***** mod_expires ***** */

  if (options.expires) {
    htaccess += '<IfModule mod_expires.c>\n';
    htaccess += '\tExpiresActive On\n';

    if (options.expires.default) {
      htaccess += `\tExpiresDefault "${options.expires.default}"\n`;
    }

    const { types } = options.expires;
    if (types && Object.keys(types).length) {
      Object.keys(types).forEach((type) => {
        const time = types[type];
        htaccess += `\tExpiresByType ${type} "${time}"\n`;
      });
    }

    htaccess += '</IfModule>\n';
  }

  /* ***** mod_gzip ***** */

  if (options.gzip) {
    htaccess += '<IfModule mod_gzip.c>\n';
    htaccess += '\tmod_gzip_on Yes\n';

    if (options.gzip.canNegotiate) {
      htaccess += '\tmod_gzip_can_negotiate Yes\n';
    } else {
      htaccess += '\tmod_gzip_can_negotiate No\n';
    }

    if (options.gzip.dechunk) {
      htaccess += '\tmod_gzip_dechunk Yes\n';
    } else {
      htaccess += '\tmod_gzip_dechunk No\n';
    }

    if (options.gzip.include && options.gzip.include.length) {
      options.gzip.include.forEach((include) => {
        htaccess += `\tmod_gzip_item_include ${include}\n`;
      });
    }

    if (options.gzip.exclude && options.gzip.exclude.length) {
      options.gzip.exclude.forEach((exclude) => {
        htaccess += `\tmod_gzip_item_exclude ${exclude}\n`;
      });
    }

    htaccess += '</IfModule>\n';
  }

  /* ***** mod_headers ***** */

  if (options.headers) {
    htaccess += '<IfModule mod_headers.c>\n';

    // https://htaccessbook.com/disable-etags/
    if (options.headers.etag) {
      htaccess += `\tHeader set ETag ${options.headers.etag}\n`;
    } else {
      htaccess += '\tHeader unset ETag\n';
    }

    htaccess += '</IfModule>\n';
  }

  /* ***** mod_mime ***** */

  if (options.mime) {
    htaccess += '<IfModule mod_mime.c>\n';

    if (options.mime.defaultLanguage) {
      htaccess += `\tDefaultLanguage ${options.mime.defaultLanguage}\n`;
    }

    const { languages } = options.mime;
    if (languages && Object.keys(languages).length) {
      Object.keys(languages).forEach((language) => {
        htaccess += `\tAddLanguage ${language} ${languages[language]}\n`;
      });
    }

    const { charsets } = options.mime;
    if (charsets && Object.keys(charsets).length) {
      Object.keys(charsets).forEach((charset) => {
        htaccess += `\tAddCharset ${charset} ${charsets[charset]}\n`;
      });
    }

    const { types } = options.mime;
    if (types && Object.keys(types).length) {
      Object.keys(types).forEach((type) => {
        htaccess += `\tAddType ${type} ${types[type]}\n`;
      });
    }

    htaccess += '</IfModule>\n';
  }

  /* ***** mod_rewrite ***** */

  if (options.rewrite) {
    htaccess += '<IfModule mod_rewrite.c>\n';
    htaccess += '\tRewriteEngine on\n';

    if (options.rewrite.options) {
      htaccess += `\tRewriteOptions ${options.rewrite.options}\n`;
    }

    // https://htaccessbook.com/control-request-methods/
    if (options.rewrite.allowedMethods && options.rewrite.allowedMethods.length) {
      htaccess += `\tRewriteCond %{REQUEST_METHOD} !^(${options.rewrite.allowedMethods.join('|')}) [NC]\n`;
      htaccess += '\tRewriteRule (.*) - [F,L]\n';
    }

    if (options.rewrite['404']) {
      htaccess += '\tRewriteCond %{REQUEST_FILENAME} !-f\n';
      htaccess += '\tRewriteCond %{REQUEST_FILENAME} !-d\n';
      htaccess += `\tRewriteRule ^(.*)$ ${options.rewrite['404']} [L]\n`;
    }

    if (options.rewrite.httpsRedirect) {
      htaccess += '\tRewriteCond %{HTTPS} off\n';
      htaccess += '\tRewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301,NE]\n';
    }

    htaccess += '</IfModule>\n';
  }

  /* ***** mod_speling ***** */

  if (options.spelling) {
    // (Yes, it really is spelled this way)
    htaccess += '<IfModule mod_speling.c>\n';

    if (options.spelling.check) {
      htaccess += '\tCheckSpelling on\n';
    } else {
      htaccess += '\tCheckSpelling off\n';
    }

    htaccess += '</IfModule>\n';
  }

  /* ***** ***** ***** */

  return htaccess;
};

export default (options = {}): Metalsmith.Plugin => {
  /**
   * Defaults are set with recommendations from the following websites:
   *  - https://htaccessbook.com/useful-htaccess-rules
   *  - https://perishablepress.com/stupid-htaccess-tricks
   *  - https://varvy.com/pagespeed/enable-compression.html
   *  - https://help.dreamhost.com/hc/en-us/articles/216363157-How-can-I-cache-my-site-with-an-htaccess-file-
   *  - https://help.dreamhost.com/hc/en-us/articles/215747758-Force-your-site-to-load-securely-with-an-htaccess-file
   */
  const defaultedOptions = deepmerge(
    {
      core: {
        options: {
          followSymlinks: true,
          indexes: false,
          multiViews: false,
        },
        defaultCharset: 'utf-8',
        serverSignature: false,
      },
      deflate: {
        mimeTypes: [
          'image/svg+xml',
          'application/javascript',
          'application/rss+xml',
          'application/vnd.ms-fontobject',
          'application/x-font',
          'application/x-font-opentype',
          'application/x-font-otf',
          'application/x-font-truetype',
          'application/x-font-ttf',
          'application/x-javascript',
          'application/xhtml+xml',
          'application/xml',
          'font/opentype',
          'font/otf',
          'font/ttf',
          'image/x-icon',
          'text/css',
          'text/html',
          'text/javascript',
          'text/plain',
          'text/xml',
        ],
      },
      dir: {
        index: 'index.html index.htm index.php index.cgi',
      },
      expires: {
        default: 'access plus 2 days',
        types: {
          'image/jpg': 'access plus 1 month',
          'image/svg+xml': 'access 1 month',
          'image/gif': 'access plus 1 month',
          'image/jpeg': 'access plus 1 month',
          'image/png': 'access plus 1 month',
          'text/css': 'access plus 1 month',
          'text/javascript': 'access plus 1 month',
          'application/javascript': 'access plus 1 month',
          'application/x-shockwave-flash': 'access plus 1 month',
          'image/ico': 'access plus 1 month',
          'image/x-icon': 'access plus 1 month',
          'text/html': 'access plus 600 seconds',
        },
      },
      headers: {
        etag: false,
      },
      rewrite: {
        options: 'Inherit',
      },
    } satisfies Options,
    options || {},
    { arrayMerge: (destinationArray, sourceArray) => sourceArray },
  );

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-htaccess');
    debug('running with options: %O', defaultedOptions);

    const htaccess = generate(defaultedOptions);

    files['.htaccess'] = {
      contents: Buffer.from(htaccess),
    };

    done();
  };
};
