declare module '@/lib/category-filter.mjs' {
  export type CategoryOption = { name: string; count: number };
  export function buildCategoryOptions(values: readonly string[]): CategoryOption[];
  export function matchesCategory(category: string, active: string): boolean;
}
