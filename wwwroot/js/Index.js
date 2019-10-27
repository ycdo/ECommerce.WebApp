﻿"use strict";

//= require Common.js

var IndexPage = {

    settings: {
        buyButtons: $(".buyButton")
    },

    init: function () {


        this.settings.buyButtons.click(function (e) {
            e.preventDefault();

            var data = $(this).val();
            var product = JSON.parse(data);

            Common.sendPost("/api/basket", data);
            Common.sendProductAdded('商品 ' + product.Name + ' 已添加到购物车。');
        });
    }
};

(function () {

    IndexPage.init();

})();

