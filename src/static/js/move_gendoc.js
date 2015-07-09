/*jslint browser: true, forin: true, eqeq: true, white: true, sloppy: true, vars: true, nomen: true */
/*global $, jQuery, _, asm, common, config, controller, dlgfx, format, header, html, validate */

$(function() {

    var move_gendoc = {

        render: function() {
            return [
                html.content_header(_("Generate documentation")),
                '<div class="ui-state-highlight ui-corner-all" style="margin-top: 5px; padding: 0 .7em;">',
                '<p class="centered"><span class="ui-icon ui-icon-info" style="float: left; margin-right: .3em;"></span>',
                common.base64_decode(controller.message),
                '</p>',
                '</div>',
                '<div id="templatelist">',
                controller.templates,
                '</div>',
                html.content_footer()
            ].join("\n");
        },

        bind: function() {
        },

        destroy: function() {
        },

        name: "move_gendoc",
        animation: "newdata",
        autofocus: "#asm-content a:first",
        title: function() { return _("Generate documentation"); },
        routes: {
            "move_gendoc": function() { common.module_loadandstart("move_gendoc", "move_gendoc?" + this.rawqs); }
        }

    };

    common.module_register(move_gendoc);

});