(function () {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json


    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements

    $.ajax("/data/inventory.json").done(function (data) {
        console.log(data);
        let html = " ";
        data.forEach(function (product) {
            html += "<tr>";
            html += "<td>" + product.title + "</td>";
            html += "<td>" + product.quantity + "</td>";
            html += "<td>" + product.price + "</td>";
            html += "<td>" + product.categories + "</td>";
            html += "</tr>";
        });
        $("#insertProducts").html(html);
    });


})();