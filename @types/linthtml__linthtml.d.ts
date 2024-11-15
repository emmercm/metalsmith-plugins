declare module '@linthtml/linthtml' {
  // https://www.npmjs.com/package/@linthtml/linthtml/v/0.9.6?activeTab=code

  import Issue from '@linthtml/linthtml/issue';
  import LegacyLinter from '@linthtml/linthtml/legacy/linter';
  import Linter from '@linthtml/linthtml/linter';
  import * as messages from '@linthtml/linthtml/messages';

  export interface FileLinter {
    file_path: string;
    preset: string | undefined;
    config_path: string | undefined;
    linter: LegacyLinter;
  }
  declare const linthtml: {
    /**
     * Fix https://github.com/linthtml/linthtml/issues/471 which wasn't a problem with
     * TypeScript v5.3.3 but started becoming a problem sometime after TypeScript v5.4.
     */
    default: {
      (html: string, config: LegacyLinterConfig | LinterConfig): Promise<Issue[]>;
      fromConfig: typeof fromConfig;
      create_linters_for_files(globs: string[], config_path?: string): FileLinter[];
      from_config_path(config_path: string): Linter | LegacyLinter;
      Linter: typeof Linter;
      LegacyLinter: typeof LegacyLinter;
      rules: import('./read-config').LegacyRuleDefinition[];
      presets: {
        none: LegacyLinterConfig;
        accessibility: LegacyLinterConfig;
        validate: LegacyLinterConfig;
        default: LegacyLinterConfig;
      };
      messages: typeof messages;
    };
  };
  declare function fromConfig(config: LinterConfig): Linter;
  declare function fromConfig(config: LegacyLinterConfig): LegacyLinter;
  export default linthtml;
  export { config_from_path, find_local_config, LegacyLinterConfig, LinterConfig };
}
