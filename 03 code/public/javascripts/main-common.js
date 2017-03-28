/**
 * Created by Administrator on 16-6-8.
 */
'use strict';
require.config({
    baseUrl:"/javascripts/",
    paths:{
        jquery:"libs/jquery/dist/jquery",
        // jqueryUiCore:"libs/jquery-ui/ui/core",
        // jqueryUiWidget:"libs/jquery-ui/ui/widget",
        // jqueryUiPosition:"libs/jquery-ui/ui/position",
        underscore:"libs/underscore/underscore",
        pagination:"plugins/pagination/jquery.pagination",
        plugins_select:"plugins/select/default-style/js/jquery.zl_select_u4",
        plugins_checkbox:"plugins/checkbox/default-style/js/jquery.zl_checkbox_u3",
        initFrameWork:"pages/common/initFrameWork",
        commonFunction:"pages/common/commonFunction",
        userModel:"pages/user/user",
        permissionsModel:"pages/permissions/permissions"
    },
    shim: {
        // "jqueryUiCore":["jquery"],
        // "jqueryUiWidget":["jquery"],
        // "jqueryUiPosition":["jquery"],
        "plugins_select": ["jquery"],
        "plugins_checkbox": ["jquery"],
        "pagination": ["jquery"]
    }

})
