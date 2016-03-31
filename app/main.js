requirejs.config({
    baseUrl: 'app',
    paths: {
        mithril: '//cdnjs.cloudflare.com/ajax/libs/mithril/0.1.28/mithril',
        lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash'
    }
});

requirejs(['mithril', 'view-model', 'view'], function (m, ViewModel, view) {
    m.module(document.querySelector('.root'), {
        controller: ViewModel,
        view: view
    });
});