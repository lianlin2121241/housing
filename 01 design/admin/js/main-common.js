/**
 * Created by Administrator on 16-6-8.
 */
'use strict';
require.config({
    baseUrl:"./js/",
    paths:{
        jquery:"libs/jquery-1.11.1.min",
        jqueryUiCore:"libs/ui/jquery.ui.core.min",
        jqueryUiWidget:"libs/ui/jquery.ui.widget.min",
        jqueryUiPosition:"libs/ui/jquery.ui.position.min",
        underscore:"plugins/underscore/underscore",
        pagination:"plugins/pagination/jquery.pagination",
        plugins_select:"plugins/select/default-style/js/jquery.zl_select_u4",
        plugins_checkbox:"plugins/checkbox/default-style/js/jquery.zl_checkbox_u3",
        initFrameWork:"views/common/initFrameWork",
        userModel:"views/user/user",
        permissionsModel:"views/permissions/permissions"
    },
    shim: {
        "jqueryUiCore":["jquery"],
        "jqueryUiWidget":["jquery"],
        "jqueryUiPosition":["jquery"],
        "plugins_select": ["jquery"],
        "plugins_checkbox": ["jquery"],
        "pagination": ["jquery"]
    }

})
