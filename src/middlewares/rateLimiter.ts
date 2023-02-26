export function throttleAsync(fn: any, wait: number) {
	const lastRun = 0;

	async function throttled(...args: any) {
		const currentWait = lastRun + wait - Date.now();
		const shouldRun = currentWait <= 0;

		if (shouldRun) {
			return await fn(...args);
		} else {
			return await new Promise(function (resolve) {
				setTimeout(function () {
					resolve(throttled(...args));
				}, currentWait);
			});
		}
	}
	return throttled;
}
