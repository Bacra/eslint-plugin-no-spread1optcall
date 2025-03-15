import type { Rule } from 'eslint';
import type { TSESTree } from '@typescript-eslint/utils';


export = {
  rules: {
    'no-spread1optcall': {
      meta: {
        docs: {
          description: "针对node16以下对可选链操作符的兼容问题，进行eslint提示",
          category: "Compatibility",
          url: "https://node.green/#ES2020",
          recommended: false,
        },
        type: "problem",
        // schema: [],
        // messages: {
        //   noOptionalCallWithSpread: '禁止使用 obj.fun?.(...[], 1) 语法；如果方法一定存在，可直接使用 obj.fun(...[], 1)',
        // },
      },

      create(context: Rule.RuleContext) {
        return {
          CallExpression(node: TSESTree.CallExpression) {
            if (
              node.callee.type === 'MemberExpression'
              && node.callee.object         // 必须是对象调用链
              && node.optional              // 必须是可选链调用
              && node.arguments.length > 1  // 需要多个参数
            ) {
              // 排除最后一个参数，如果还有一个是展开语法，则报错
              const spreadNode = node.arguments.slice(0, -1)
                .find((arg: TSESTree.CallExpressionArgument) => arg.type === 'SpreadElement');

              if (spreadNode) {
                context.report({
                  node: spreadNode as any,
                  message: 'a.b?.(...[],1)运行报错;可判空后再a.b(...[],1)',
                  // messageId: 'noOptionalCallWithSpread',
                });
              }
            }
          },
        };
      },
    } as Rule.RuleModule,
  },
};
