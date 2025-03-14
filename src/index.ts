import type { Rule } from 'eslint';
import type { TSESTree } from '@typescript-eslint/utils';


export = {
  rules: {
    'no-optional-call-with-spread': {
      create(context: Rule.RuleContext) {
        return {
          CallExpression(node: TSESTree.CallExpression) {
            if (
              node.callee.type === 'MemberExpression'
              && node.callee.object         // 必须是对象调用链
              && node.optional              // 必须是可选链调用
              && node.arguments.length > 1  // 需要多个参数
              && node.arguments.slice(0, -1).some(arg => arg.type === 'SpreadElement')  // 排除最后一个参数，数组中，有一个是展开语法
            ) {
              context.report({
                node: node.callee as any,
                message: '禁止使用 obj.fun?.(...[], 1) 语法。如果方法一定存在，则直接使用 obj.fun(...[], 1)即可',
              });
            }
          },
        };
      },
    } as Rule.RuleModule,
  },
};
