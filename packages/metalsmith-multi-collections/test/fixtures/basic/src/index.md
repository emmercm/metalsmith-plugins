{{#each collections}}
{{@key}}:{{#each this}}{{#replace "\" "/"}}{{this.path}}{{/replace}}{{/each}}
{{/each}}
