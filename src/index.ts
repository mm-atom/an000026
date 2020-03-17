import an22 from '@mmstudio/an000022';
import fetch from 'node-fetch';

/**
 * 是否包含违法文字
 * @param headers
 * @param text 要检测的文本内容
 * @returns true 违法文字 false 正常文字
 */
export default async function check(text: string) {
	const token = await an22();
	const url = `https://api.weixin.qq.com/wxa/msg_sec_check?access_token=${token}`;
	const str = JSON.stringify({ content: text });
	const res = await fetch(url, {
		body: str,
		method: 'POST'
	});
	if (res.status > 0 && res.status < 300) {
		const result = await res.json() as {
			errcode: number;
			errMsg: string;
		};
		return result.errcode === 87014;
	}
	throw new Error(res.statusText);
}
