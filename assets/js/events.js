/**
 * @file
 * A JavaScript file for the events page.
 */

(function ($) {

    u('.scope-filter a').on('click', function (e) {
        e.preventDefault();
        let id = u(e.target).data("tag")
        filterByScope(id);
    });
    function filterByScope(id) {
        u('.events-list').each(function (node) {
            console.log("list");
            let list = u(node);
            let noevents = true;
            list.find('article').each(function (node) {
                console.log("article");
                let n = u(node);
                if (id == "all" || n.hasClass("event-" + id)) {
                    n.removeClass('hidden');
                    noevents = false;
                } else {
                    n.addClass('hidden');
                }
            });
            if (noevents) {
                list.find('.no-events').removeClass('hidden');
            } else {
                list.find('.no-events').addClass('hidden');
            }
        });
    }
    filterByScope('all');

})(u);