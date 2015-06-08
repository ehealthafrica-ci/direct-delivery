/**
 * Created by ehealthafrica on 3/19/15.
 */

angular.module('home.returned')
  .controller('ReturnedCtrl', function(dailySchedule, dbService, $state, scheduleService, AuthService){
    var vm = this;
    var totalDelivered = {};
    var totalRetrieved = {};
    var packedProductJson = {};

    vm.productLength = 0;

    function calcFaciltyBalance(products){

      dailySchedule.facilityRounds.forEach(function(round){
        round.packedProduct.forEach(function(product){
          var bal;
          products[product.productID].totalRetrieved += !isNaN(product.returnedQty) ? product.returnedQty: 0;
          products[product.productID].totalDelivered += !isNaN(product.deliveredQty) ? product.deliveredQty: 0;

          bal = (products[product.productID].packedQty +products[product.productID].totalRetrieved) - products[product.productID].totalDelivered;

          products[product.productID].balance = !isNaN(bal) ? bal : 0;
        });
      });
    }
    function reset(schedule){
      if(schedule.packingList){
        schedule.packingList.forEach(function(product){
          packedProductJson[product.productID] = {
            totalRetrieved : 0,
            totalDelivered: 0,
            packedQty: (parseInt(product.packedQty)) || 0,
            balance: 0,
            id: product.productID
          };
        });
        calcFaciltyBalance(packedProductJson);
        vm.productLength = Object.keys(packedProductJson).length;
        vm.packedProducts = packedProductJson;
      }
    }
    reset(dailySchedule);

    vm.setDate = function(date){
      packedProductJson = {};
      scheduleService.getDaySchedule(AuthService.currentUser.name,date)
        .then(function(response){
          console.log(response);
          reset(response);
        });
      vm.productLength = Object.keys(packedProductJson).length;
    };
    vm.save = function(){

      dailySchedule.balance = vm.packedProducts;
      dbService.save(dailySchedule);
      $state.go('home.schedule')
    }
  });