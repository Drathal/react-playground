process.env.BABEL_ENV = 'TEST';

module.exports = (wallaby) => {
    return {
        files: [
            {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
            {pattern: 'node_modules/ignore-styles/lib/ignore-styles.js', instrument: false},
            {pattern: 'src/**/*.json', load: false},
            {pattern: 'src/**/*.jpg', load: false},
            {pattern: 'src/**/*.png', load: false},
            {pattern: 'src/**/*.gif', load: false},
            {pattern: 'src/**/*.svg', load: false},
            {pattern: 'src/**/*.css', load: false},
            {pattern: 'src/**/*.scss', load: false},
            {pattern: 'config/*.js'},
            {pattern: 'src/**/*.js'},
            {pattern: 'test/test_helper.js'},
            {pattern: 'test/i18n.js'},
            {pattern: '!src/**/*.spec.js'}
        ],
        tests: [
            {pattern: 'src/**/*.spec.js'},
        ],
        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },
        env: {
            type: 'node'
        },
        'testFramework': 'mocha',
        bootstrap: function(w) {
            require('./test/test_helper.js')
        },
        debug: true
    };
};
