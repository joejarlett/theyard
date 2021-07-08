/**
 * @file
 * A JavaScript file for the events page.
 */

(function ($) {

    u('.scope-filter a').on('click', function (e) {
        e.preventDefault();
        let id = u(e.target).data("tag")
        filterJournalByTag(id);
    });
    function filterJournalByTag(id) {
        if (id == "all") {
            u('article.section-events.list-view').each(function (node, i) {
                let n = u(node);
                n.removeClass('hidden');
            });
        } else {
            u('article.section-events.list-view').each(function (node, i) {
                let n = u(node);

                if (n.hasClass("event-" + id)) {
                    n.removeClass('hidden');
                } else {
                    n.addClass('hidden');
                }
            });
        }
    }
})(u);