/**
 * Editor notes are intentionally hidden across the site.
 * This keeps the underlying content intact while removing only the visible
 * editorial note UI from the public experience.
 */
export function PlaceholderNote({ text, dark }: { text: string; dark?: boolean }) {
	void text;
	void dark;

	return null;
}
