/**
 * Created by Administrator on 16-6-8.
 */
require(['./main-common'], function (common) {
    require(["initFrameWork","publicSetModel"],function(initFrameWork,publicSetModel){
        publicSetModel.init();
    })
})
