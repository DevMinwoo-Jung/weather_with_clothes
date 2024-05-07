export function renderSeparatedObjects(obj) {
	const rnStPairs: any = [];
	const rainParis: any = [];
	const wfPairs: any = [];

	// 주어진 객체를 순회하면서 rnSt와 wf로 시작하는 키를 분리
	for (const key in obj) {
		if (key.startsWith('rnSt')) {
			rnStPairs.push(obj[key]);
		} else if (key.startsWith('wf')) {
			wfPairs.push(obj[key]);
		}
	}

	for (let i = 0; i < rnStPairs.length; i = i + 2) {
		rainParis.push([rnStPairs[i] + rnStPairs[i + 1] / 2]);
	}

	// // rnSt 객체 렌더링
	// const rnStHTML = rnStPairs.map(pair => `<p>${pair[0]}: ${pair[1]}</p>`).join('');
	// const rnStRenderedHTML = `<div>${rnStHTML}</div>`;
	// // wf 객체 렌더링
	// const wfHTML = wfPairs.map(pair => `<p>${pair[0]}: ${pair[1]}</p>`).join('');
	// const wfRenderedHTML = `<div>${wfHTML}</div>`;
	return { rnStPairs, wfPairs };
}
