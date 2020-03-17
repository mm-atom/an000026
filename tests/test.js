const test = require('ava');

const { default: a } = require('../dist/index');

test('微信-是否为违法文字', async (t) => {
	const flag = await a(`特3456书yuuo莞6543李zxcz蒜7782法fgnv级`);
	t.is(flag, true)
	const flag1 = await a(`测试`);
	t.is(flag1, false)
});
