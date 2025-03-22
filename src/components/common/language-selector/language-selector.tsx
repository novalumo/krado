'use client';
const locales = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: '日本語',
    code: 'ja',
  },
];

/**
 * LanguageSelector
 */
export const LanguageSelector = () => {
  return (
    <>
      <div className="inline-block w-56">
        <div className="flex flex-col">
          <div className="mb-1 text-sm">Language</div>
          <select
            onChange={(e) => {}}
            className="w-full select-none rounded border bg-gray-700 px-3 py-2 text-sm font-bold text-white outline-none"
          >
            {locales.map((locale, i) => (
              <option key={i}>{locale.name}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
