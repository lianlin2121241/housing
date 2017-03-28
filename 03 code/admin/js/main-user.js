/**
 * Created by Administrator on 16-6-8.
 */
require(['./main-common'], function (common) {
    require(["initFrameWork","userModel"],function(initFrameWork,userModel){
        userModel.init();
    })
})
