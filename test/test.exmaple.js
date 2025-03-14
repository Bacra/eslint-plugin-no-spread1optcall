/* eslint-disable brace-style, prefer-arrow-callback */

/**
 * 使用node14.17.3 运行
 *
 * 例如: npm run test:example
 */

function func(..._args) {
  // console.log(_args);
}

func.exists = function func(..._args) {
  // console.log(_args);
};

const arr = [3, 4];

function runTest(func) {
  try {
    func();
  } catch (err) {
    console.log(err.message);
    console.log(func.toString());
  }
}


runTest(function () { func(1, 2); });
runTest(function () { func(1, ...arr); });
runTest(function () { func(1, ...arr, ...[]); });
runTest(function () { func(1, ...arr, ...[], 10); });
runTest(function () { func(1, ...[]); });
runTest(function () { func(1, ...[], 2); });
runTest(function () { func(1, ...[], ...[]); });

runTest(function () { func.exists(1, 2); });
runTest(function () { func.exists(1, ...arr); });
runTest(function () { func.exists(1, ...arr, ...[]); });
runTest(function () { func.exists(1, ...arr, ...[], 10); });
runTest(function () { func.exists(1, ...[]); });
runTest(function () { func.exists(1, ...[], 2); });
runTest(function () { func.exists(1, ...[], ...[]); });

runTest(function () { func?.exists(1, 2); });
runTest(function () { func?.exists(1, ...arr); });
runTest(function () { func?.exists(1, ...arr, ...[]); });
runTest(function () { func?.exists(1, ...arr, ...[], 10); });
runTest(function () { func?.exists(1, ...[]); });
runTest(function () { func?.exists(1, ...[], 2); });
runTest(function () { func?.exists(1, ...[], ...[]); });

runTest(function () { func.exists?.(1, 2); });
runTest(function () { func.exists?.(1, ...arr); });
runTest(function () { func.exists?.(1, ...arr, ...[]); });
runTest(function () { func.exists?.(1, ...arr, ...[], 10); });
runTest(function () { func.exists?.(1, ...[]); });
runTest(function () { func.exists?.(1, ...[], 2); });
runTest(function () { func.exists?.(1, ...[], ...[]); });

runTest(function () { func.noexists?.(1, 2); });
runTest(function () { func.noexists?.(1, ...arr); });
runTest(function () { func.noexists?.(1, ...arr, ...[]); });
runTest(function () { func.noexists?.(1, ...arr, ...[], 10); });
runTest(function () { func.noexists?.(1, ...[]); });
runTest(function () { func.noexists?.(1, ...[], 2); });
runTest(function () { func.noexists?.(1, ...[], ...[]); });

runTest(function () { func?.noexists?.(1, 2); });
runTest(function () { func?.noexists?.(1, ...arr); });
runTest(function () { func?.noexists?.(1, ...arr, ...[]); });
runTest(function () { func?.noexists?.(1, ...arr, ...[], 10); });
runTest(function () { func?.noexists?.(1, ...[]); });
runTest(function () { func?.noexists?.(1, ...[], 2); });
runTest(function () { func?.noexists?.(1, ...[], ...[]); });
