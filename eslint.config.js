const nextConfig = require('eslint-config-next/core-web-vitals');

module.exports = [
    ...nextConfig,
    {
        rules: {
            'react/no-unescaped-entities': 'off',
            // react-hooks v7 rule; fires on legitimate one-time mount initialization
            // from localStorage. Proper fix requires useSyncExternalStore + hydration
            // handling — revisit if SSR is ever added.
            'react-hooks/set-state-in-effect': 'warn',
        },
    },
];
