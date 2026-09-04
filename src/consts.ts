// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = '노무사의 단상';
export const SITE_DESCRIPTION = '15년차 노무사가 현장에서 느낀 것들';

// 블로그 카테고리 (표시 순서 = 이 배열 순서)
// color는 카테고리를 구분하는 포인트 컬러로만 가볍게 사용합니다.
export const CATEGORIES = [
	{ slug: 'business', label: '사업편', emoji: '💼', color: '#2f7a63' },
	{ slug: 'staff', label: '직원편', emoji: '🤝', color: '#c9821f' },
	{ slug: 'system', label: '시스템편', emoji: '⚙️', color: '#4a5fb0' },
	{ slug: 'personal', label: '개인편', emoji: '💭', color: '#a24b72' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export function categoryLabel(slug: string): string {
	return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export function categoryInfo(slug: string) {
	return CATEGORIES.find((c) => c.slug === slug);
}
