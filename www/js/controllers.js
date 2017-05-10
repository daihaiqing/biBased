angular.module('starter.controllers', [])
.controller("myapp",function($scope,$state){
  //获得当前城市
  var myCity = new BMap.LocalCity();

  myCity.get(myFun);
  function myFun(result){
    if(result.name){
      $scope.thisplace=result.name;
    }else{
      $scope.thisplace="保定市"
    }
  }

  $state.go('first');
  $scope.first=true;
  $scope.second=false;
  $scope.third=false;
  $scope.fourth=false;
  $scope.place=false;
  $scope.hasbar=true;
  $scope.searchplace=false;
  $scope.shadow=false;
  window.onhashchange=function(){
      var hashchange=location.hash;
      switch(hashchange){
        case "#/":
            $scope.first=true;
            $scope.second=false;
            $scope.third=false;
            $scope.fourth=false;
            $scope.place=false;
            $scope.hasbar=true;
            $scope.searchplace=false;
            break;
        case "#/second":
            $scope.first=false;
            $scope.second=true;
            $scope.third=false;
            $scope.fourth=false;
            $scope.place=false;
            $scope.hasbar=true;
            $scope.searchplace=false;
            break;
        case "#/third":
            $scope.place=false;
            $scope.searchplace=false;
            $scope.first=false;
            $scope.second=false;
            $scope.third=true;
            $scope.hasbar=true;
            $scope.fourth=false;
            break;
        case "#/fourth":
            $scope.searchplace=false;
            $scope.first=false;
            $scope.second=false;
            $scope.third=false;
            $scope.fourth=true;
            $scope.place=false;
            $scope.hasbar=true;
            $scope.shadow=false;
            break;
        case "#/five":
            break;
        case "#/six":
            break;
        case "#/seven":break;
        case "#/eight":break;
        case "#/nine":break;
        case "#/place":
            $scope.first=false;
            $scope.second=false;
            $scope.third=false;
            $scope.fourth=false;
            $scope.searchplace=false;
            $scope.place=true;
            $scope.hasbar=true;
            break;
        case "#/searchplace":
            $scope.first=false;
            $scope.second=false;
            $scope.third=false;
            $scope.fourth=false;
            $scope.place=false;
            $scope.searchplace=true;
            $scope.hasbar=true;
            break;
        case "#/collectionplace":
            break;
        case "#/tripdetail":
            $scope.first=false;
            $scope.second=false;
            $scope.third=false;
            $scope.fourth=false;
            $scope.place=false;
            $scope.searchplace=false;
            $scope.hasbar=false;
            break;
        case "#/form":
            $scope.place=false;
            $scope.searchplace=false;
            $scope.first=false;
            $scope.second=false;
            $scope.third=true;
            $scope.hasbar=true;
            $scope.fourth=false;
        default:break;
      }
   }
   $scope.collectionplace=function(){
    alert("收藏景点成功")
   }
   $scope.goselect=function(a){
   	 $scope.shadow=true;

   	 $scope.name=false;
   	 $scope.sex=false;
   	 $scope.age=false;
   	 $scope.hobby=false;
   	 $scope.birthday=false;
   	 $scope.data=false;
   	 $scope.head=false;
   	 switch(a){
   	 	case "name":$scope.name=true;break;
   	 	case "sex":$scope.sex=true;break;
   	 	case "age":$scope.age=true;break;
   	 	case "hobby":$scope.hobby=true;break;
   	 	case "birthday":$scope.birthday=true;break;
   	 	case "data":$scope.data=true;break;
   	 	case "head":$scope.head=true;break;
   	 }
   }
   $scope.closeshdow=function(){
   	$scope.shadow=false;
   }
})
.controller("first",function($scope,$state){
  
})
.controller("second",function($scope,$state){
    $scope.addtrip=function(e){
        alert("添加行程成功");
           // 如果提供了事件对象，则这是一个非IE浏览器
        if ( e && e.stopPropagation ) {
            // 因此它支持W3C的stopPropagation()方法 
            e.stopPropagation();
        } else {
            // 否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
    }
})
.controller("third",function($scope,$state){
    $scope.addforum=function(e){
        alert("添加关注成功");
           // 如果提供了事件对象，则这是一个非IE浏览器
        if ( e && e.stopPropagation ) {
            // 因此它支持W3C的stopPropagation()方法 
            e.stopPropagation();
        } else {
            // 否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
    }
})
.controller("fourth",function($scope,$state){
  
})
.controller("five",function($scope,$state){
  
})
.controller("six",function($scope,$state){
  
})
.controller("seven",function($scope,$state){
  
})
.controller("eight",function($scope,$state){
    $scope.addcolection=function(e){
        alert("添加关注成功");
           // 如果提供了事件对象，则这是一个非IE浏览器
        if ( e && e.stopPropagation ) {
            // 因此它支持W3C的stopPropagation()方法 
            e.stopPropagation();
        } else {
            // 否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
    }
})
.controller("nine",function($scope,$state){
  
})
.controller("place",function($scope,$state){
  
})
.controller("searchplace",function($scope,$state){
  
})
.controller("placedetail",function($scope,$state){
  
})
.controller("collectionplace",function($scope,$state){
  
})
.controller("tripdetail",function($scope,$state){
  
})
.controller("form",function($scope,$state){
  $scope.addcontent=function(){
    var domstr='<label>时间：<input type="text" name="" value="">例：2016.01.7 上午 / 上午</label>'+
    '<label>地点：<input type="text" name="" value="">例：圆明园</label>'+
    '<label>景区或地点简介：<textarea name=""></textarea></label>'+
    '<label>景点或活动名称：<input type="text" name="" value=""></label>'+
    '<label>景点或活动内容：<textarea name=""></textarea></label>'+
    '<label>景点或活动图片：<input type="file" name="" value=""></label>';
    //document.getElementById("addform").append(domstr);
    //angular.element("#addform").append(domstr);
    $("#addform").append(domstr);
     //console.log(element)
  }
  $scope.submitcontent=function(){
    alert("添加成功");
    $state.go('third');
  }
})
.run(['$ionicPlatform', '$ionicPopup','$rootScope','$location', function ($ionicPlatform, $ionicPopup, $rootScope, $location) {  
         
    //主页面显示退出提示框  
    $ionicPlatform.registerBackButtonAction(function (e) {  
        function showConfirm() {  
            var confirmPopup = $ionicPopup.confirm({  
                title: '<strong>退出应用?</strong>',  
                template: '你确定要退出应用吗?',  
                okText: '退出',  
                cancelText: '取消'  
            });  

            confirmPopup.then(function (res) {  
                if (res) {  
                    ionic.Platform.exitApp();  
                } else {  
                    // Don't close  
                }  
            });  
        }  
        if (location.hash == '#/' ) {  
          showConfirm(); 
        }
        history.go(-1);
    }, 101);  

}])  