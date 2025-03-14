const { RuleTester } = require('eslint');
const { rules } = require('../');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});


ruleTester.run('no-optional-call-with-spread', rules['no-optional-call-with-spread'], {
  valid: [`
    func(1, 2);
    func(1, ...arr);
    func(1, ...arr, ...[]);
    func(1, ...arr, ...[], 10);
    func(1, ...[]);
    func(1, ...[], 2);
    func(1, ...[], ...[]);

    func.exists(1, 2);
    func.exists(1, ...arr);
    func.exists(1, ...arr, ...[]);
    func.exists(1, ...arr, ...[], 10);
    func.exists(1, ...[]);
    func.exists(1, ...[], 2);
    func.exists(1, ...[], ...[]);

    func?.exists(1, 2);
    func?.exists(1, ...arr);
    func?.exists(1, ...arr, ...[]);
    func?.exists(1, ...arr, ...[], 10);
    func?.exists(1, ...[]);
    func?.exists(1, ...[], 2);
    func?.exists(1, ...[], ...[]);

    func.noexists?.(1, 2);
    func.noexists?.(1, ...arr);
    // func.noexists?.(1, ...arr, ...[]);
    // func.noexists?.(1, ...arr, ...[], 10);
    func.noexists?.(1, ...[]);
    // func.noexists?.(1, ...[], 2);
    // func.noexists?.(1, ...[], ...[]);

    func?.noexists?.(1, 2);
    func?.noexists?.(1, ...arr);
    // func?.noexists?.(1, ...arr, ...[]);
    // func?.noexists?.(1, ...arr, ...[], 10);
    func?.noexists?.(1, ...[]);
    // func?.noexists?.(1, ...[], 2);
    // func?.noexists?.(1, ...[], ...[]);
  `,
  ],
  invalid: [{
    code: `
      func.noexists?.(1, ...arr, ...[]);
      func.noexists?.(1, ...arr, ...[], 10);
      func.noexists?.(1, ...[], 2);
      func.noexists?.(1, ...[], ...[]);

      func?.noexists?.(1, ...arr, ...[]);
      func?.noexists?.(1, ...arr, ...[], 10);
      func?.noexists?.(1, ...[], 2);
      func?.noexists?.(1, ...[], ...[]);
    `,
    errors: [
      { line: 2 },
      { line: 3 },
      { line: 4 },
      { line: 5 },

      { line: 7 },
      { line: 8 },
      { line: 9 },
      { line: 10 },
    ],
  }],
});
