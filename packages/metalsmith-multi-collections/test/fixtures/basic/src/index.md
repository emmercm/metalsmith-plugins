{{#each collections}}
{{@key}}:{{#each this}}{{replace this.path '\' "/"}}{{/each}}
{{/each}}
