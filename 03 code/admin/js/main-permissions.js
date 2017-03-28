/**
 * Created by Administrator on 16-6-8.
 */
require(['./main-common'], function (common) {
    require(["initFrameWork","permissionsModel"],function(initFrameWork,permissionsModel){
        permissionsModel.init();
    })
})
