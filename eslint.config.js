const nextConfig = require('eslint-config-next/core-web-vitals');

module.exports = [
    // Vendored tooling, not project source.
    { ignores: ['.yarn/**'] },
    ...nextConfig,
    {
        // Scoped to the same patterns eslint-config-next registers its plugins
        // for; an unscoped object would also apply to files (e.g. `.cjs`) that
        // the Next config does not match, where `react-hooks` is unavailable.
        files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
        rules: {
            'react/no-unescaped-entities': 'off',
            // react-hooks v7 rule; fires on legitimate one-time mount initialization
            // from localStorage. Proper fix requires useSyncExternalStore + hydration
            // handling — revisit if SSR is ever added.
            'react-hooks/set-state-in-effect': 'warn',
        },
    },
];
