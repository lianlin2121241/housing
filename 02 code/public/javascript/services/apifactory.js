'use strict';

angular.module('myApp')
    .factory('apiFactory', function($http, $q, $location) {
        // Service logic
        // ...

        var baseUrl = 'http://' + $location.host() + ':' + $location.port();

        function getQuery(httpFn) {

            return {
                query: function(params) {
                    var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
                    $http(httpFn(params)).
                    then(function(data, status, headers, config) {
                        if (data.errorCode) {
                            //如果未登录跳回登录页面
                            globalFactory.reset();
                            $location.path('/login').replace();
                        }
                        if (data.status == '200') {

                            deferred.resolve(data.data); // 声明执行成功，即http请求数据成功，可以返回数据了
                        } else {
                            deferred.resolve(data.data);
                        }
                    }).
                    catch(function(data, status, headers, config) {
                        deferred.reject(data.data); // 声明执行失败，即服务器返回错误
                    });
                    return deferred.promise; // 返回承诺，这里并不是最终数据，而是访问最终数据的API
                },
                queryCallback: function(params, callback) {
                    this.query(params).then(function(data) {
                        // 调用承诺API获取数据 .resolve
                        callback(data);
                    }, function(data) { // 处理错误 .reject
                        callback(data);
                    });
                }
            }
        };

        // Public API here
        return {
            publicSetting:{
                getAllType: getQuery(function(params) {
                    return {
                        method: 'GET',
                        url: baseUrl + '/publicSetting/getAllType',
                        params: params
                    }
                }),
                save: getQuery(function(params) {
                    return {
                        method: 'POST',
                        url: baseUrl + '/publicSetting/save',
                        data: params
                    }
                }),
                getItemsById: getQuery(function(params) {
                    return {
                        method: 'GET',
                        url: baseUrl + '/publicSetting/getItemsById',
                        params: params
                    }
                }),
                del: getQuery(function(params) {
                    return {
                        method: 'DELETE',
                        url: baseUrl + '/publicSetting/delItem',
                        params: params
                    }
                }),
            },
            neighbourhoods:{
                save: getQuery(function(params) {
                    return {
                        method: 'POST',
                        url: baseUrl + '/neighbourhoods/save',
                        data: params
                    }
                }),
                getNeighbourhoodsById:getQuery(function(params) {
                    return {
                        method: 'GET',
                        url: baseUrl + '/neighbourhoods/update/'+params
                    }
                }),
            }
        }
    });
