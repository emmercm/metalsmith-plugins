declare module 'assert-dir-equal' {
  function assertDirEqual(
    actual: string,
    expected: string,
    options?: {
      filter?: (name: string) => boolean;
    },
  ): void;
  export = assertDirEqual;
}
