

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
};


$( document ).ready(function() {
    var params = getUrlParameter('q');
    // if (params === "undefined") {
    //     params = getUrlParameter('#q');
    // }

    console.log("load " + params);
    $( '<iframe src="https://www.springermedizin.de/search?q.query=' + params +'" width="350" height="500"></iframe>' ).insertBefore ("#rhs_block");

});


// $("#lst-ib").bind("change", function() {
//     var params = $(this).val()
//     console.log("load " + params);
//     $( '<iframe src="https://www.springermedizin.de/search?q.query="' + params +'></iframe>' ).insertBefore ("#rhs_block");
// });


