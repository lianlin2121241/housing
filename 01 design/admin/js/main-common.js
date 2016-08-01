/**
 * Created by Administrator on 16-6-8.
 */
'use strict';
require.config({
    baseUrl:"./js/",
    paths:{
        jquery:"libs/jquery-1.11.1.min",
        underscore:"plugins/underscore/underscore",
        plugins_select:"plugins/select/default-style/js/jquery.zl_select_u4",
        initFrameWork:"views/common/initFrameWork",
        userModel:"views/user/user"
    },
    shim: {
        "plugins_select": ["jquery"]
    }

})
