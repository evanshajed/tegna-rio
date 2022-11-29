/* --- */

let estimated_increase_top_line_revenue =0;
let annual_revenue =0;
let rate_improvement_return =0;


let number_salespeople =0;
let average_deal_amount =0;
let increased_revenue_sales_per_month =0;
let increased_revenue_per_sales_year =0;


let increase_pay_performance_revenue =0;
let total_current_revenue =0;
let increased_revenue_per_month =0;
let increased_revenue_per_year =0;


let number_new_deals_closed_year =0;
let annual_each_deal =0;
let automation_return =0;


let number_stations =0;
let amount_saved_credits =0;
let savings_per_month =0;
let operational_return =0;


let platform_1=0;
let platform_2=0;
let platform_3=0;
let combined_savings =0;


let TOTAL_ANNUAL_ROI_VALUE=0;
let ESTIMATED_REV_ANNUAL_COSTS=4000000;
let NET_ROI_VALUE=0;
let ROI_RETURN_X_VALUE=0;

/* --- */

function rate_improvement_return_result(increase,annual_revenue){
    rate_improvement_return_value = (increase/100)*annual_revenue;
    //console.log(rate_improvement_return_value+'--------------');
    return rate_improvement_return_value;

}

/* --- */

function sales_efficiency_per_month(number_of_sales_people,amount_per_deal){

    sales_efficiency_per_month_value = number_of_sales_people*amount_per_deal;

    increased_revenue_per_sales_year = sales_efficiency_per_month_value*12;

    return sales_efficiency_per_month_value;
}



/* --- */

Total_Current_P4P_10Percent_of_Revenue = 1500000000;

function pay_for_performance_per_month(increase_in_p4p,Total_Current_P4P_10Percent_of_Revenue){
    // pay_for_performance_value =
}
function pay_for_performance_return_low(pay_for_performance_per_month_value){
    // pay_for_performance_return_low_value =
}

/* --- */

function automate_multi_market_linear_digital_proposals_return_low(new_deals_closed,amount_each_deal){
    // automate_multi_market_linear_digital_proposals_return_low_value =
}

/* --- */

function operational_efficiency_savings_per_month(stations,savings_per_month){

    savings_per_month = stations*savings_per_month
    operational_return = savings_per_month*12;
    return savings_per_month;
}
function operational_efficiency_return_low(operational_efficiency_per_month_value){
    // operational_efficiency_return_low_value =
}

/* --- */

function cost_savings_summ(platform1,platform2,platform3){
    var sum = parseInt(platform1) + parseInt(platform2) + parseInt(platform3);
    return sum;
}

/* --- */

function TOTAL_ANNUAL_ROI(
    rate_improvement_return_value,
    sales_efficiency_return_low_value,
    pay_for_performance_return_low_value,
    automate_multi_market_linear_digital_proposals_return_low_value,
    cost_savings_return_low_value
){
    // TOTAL_ANNUAL_ROI_VALUE =
}

Estimated_Annual_Costs_for_REV_licenses = -4000000;

function NET_ROI(TOTAL_ANNUAL_ROI_VALUE){
    // NET_ROI_VALUE = TOTAL_ANNUAL_ROI_VALUE + Estimated_Annual_Costs_for_REV_licenses;
}

function ROI_RETURN_X(NET_ROI_VALUE,){
    // ROI_RETURN_X_VALUE = NET_ROI_VALUE / Estimated_Annual_Costs_for_REV_licenses;  // should be ceiling round number;
}

function savePDFrev(){

    var node = document.getElementById('extended_zone');
    //domtoimage.toPng(node)
    domtoimage.toJpeg(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            //document.body.appendChild(img);
            let doc = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4',
            });
            doc.addImage(img,'JPEG', 10, 0, 190, 300);
            doc.save("Marketron_ROI_Calculation.pdf");
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });

}

$(document).ready(function () {

    /* ---------------------------------------------------------------- */

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });


    /* ---------------------------------------------------------------- */
    $("#estimated_increase_top_line_revenue").on({
        focus: function(){

            var str = $(this).val();
            var regex = /[$,%\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                $(this).val('');
                $(this).text('');
            }
        },
        keyup: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            var str_1 = $(this).val();
            //var regex = /[$.,\s]/g;
            var regex_1 = /[$,%\s]/g;
            var stripped_1 = str_1.replace(regex_1, '');
            estimated_increase_top_line_revenue = stripped_1;

            var str_2 = $("#annual_revenue").val();
            //var regex = /[$.,\s]/g;
            var regex_2 = /[$,\s]/g;
            var stripped_2 = str_2.replace(regex_2, '');
            annual_revenue = stripped_2;

            rate_improvement_return = rate_improvement_return_result(estimated_increase_top_line_revenue,annual_revenue);

            $('#rate_improvement_return').val(rate_improvement_return.toFixed(2).replace(/\.00$/, ''));
            //console.log(rate_improvement_return.toFixed(2).replace(/\.00$/, ''));
            $('#rate_improvement_return').text(dollarUS.format(rate_improvement_return).replace(/\.00$/, ''));
            //console.log(dollarUS.format(rate_improvement_return).replace(/\.00$/, ''));
            $('#rate_improvement_return').val(dollarUS.format($('#rate_improvement_return').val()));

            var str_3 = $(this).val();
            var regex_3 = /[$,%\s]/g;
            var stripped_3 = str_3.replace(regex_3, '');
            //console.log("stripped value :" +stripped);

            if(stripped_3 == 0){
                $(this).val('');
                $(this).text('');
            }
            $(this).text(stripped_3+'%');
            $(this).val(stripped_3+'%');


        },
        blur: function () {

            let str = $(this).val();
            let regex = /[$,%\s]/g;
            let stripped = str.replace(regex, '');
            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            let per_str = $(this).val();
            let per_regex = /[$,%\s]/g;
            let per_stripped = per_str.replace(per_regex, '');

            $('#rate_improvement_return').val(dollarUS.format(rate_improvement_return));

            $(this).text(per_stripped+'%');
            $(this).val(per_stripped+'%');
            //console.log("Dollars: " + dollarUS.format(stripped));

            let str_1 = $("#annual_revenue").val();
            //var regex = /[$.,\s]/g;
            var regex_1 = /[$,\s]/g;
            var stripped_1 = str_1.replace(regex_1, '');
            annual_revenue = stripped_1;

            rate_improvement_return = rate_improvement_return_result(estimated_increase_top_line_revenue,annual_revenue);

            $('#rate_improvement_return').val(rate_improvement_return.toFixed(2).replace(/\.00$/, ''));
            $('#rate_improvement_return').text(dollarUS.format(rate_improvement_return).replace(/\.00$/, ''));
            $('#rate_improvement_return').val(dollarUS.format($('#rate_improvement_return').val()).replace(/\.00$/, ''));


        }
    });

    /* ---------------------------------------------------------------- */


    $("#annual_revenue").on({
        focus: function(){
            //console.log("On Focus");
            var str = $(this).val();
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                $(this).val('');
                $(this).text('');
            }
        },
        keyup: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            let str_1 = $("#annual_revenue").val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped_1 = str_1.replace(regex, '');
            annual_revenue = stripped_1;


            let str_2 = $("#estimated_increase_top_line_revenue").val();
            //var regex = /[$.,\s]/g;
            var regex = /[%,\s]/g;
            var stripped_2 = str_2.replace(regex, '');
            estimated_increase_top_line_revenue = stripped_2;


            ///////////////////////////////////////////////////////////////

            rate_improvement_return = rate_improvement_return_result(estimated_increase_top_line_revenue,annual_revenue);

            $('#rate_improvement_return').val(rate_improvement_return.toFixed(2).replace(/\.00$/, ''));
            $('#rate_improvement_return').text(dollarUS.format(rate_improvement_return).replace(/\.00$/, ''));
            $('#rate_improvement_return').val(dollarUS.format($('#rate_improvement_return').val()).replace(/\.00$/, ''));



            $('#total_current_revenue').val(parseInt(annual_revenue).toFixed(2).replace(/\.00$/, ''));
            $('#total_current_revenue').text(dollarUS.format(annual_revenue).replace(/\.00$/, ''));
            //total_current_revenue


            $(this).trigger('change');

        },
        blur: function () {

            let str = $(this).val();
            let regex = /[$,\s]/g;
            let stripped = str.replace(regex, '');
            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });


            let ann_str = $('#annual_revenue').val();
            let ann_regex = /[$,\s]/g;
            let ann_stripped = ann_str.replace(ann_regex, '');
            $('#annual_revenue').text(dollarUS.format(ann_stripped).replace(/\.00$/, ''));
            $('#annual_revenue').val(dollarUS.format(ann_stripped).replace(/\.00$/, ''));


            let per_str = $('#estimated_increase_top_line_revenue').val();
            let per_regex = /[$,\s]/g;
            let per_stripped = per_str.replace(per_regex, '');

            //console.log('---------'+ rate_improvement_return);

            $('#rate_improvement_return').val(dollarUS.format(rate_improvement_return).replace(/\.00$/, ''));

            $('#total_current_revenue').val(dollarUS.format(annual_revenue).replace(/\.00$/, ''));


            $(this).trigger('change');

            //console.log("Dollars: " + dollarUS.format(stripped));

        }
    });

    /* ---------------------------------------------------------------- */

    $('#number_salespeople').on({
        focus: function(){

        },
        keyup: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            let str = $(this).val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            number_salespeople = stripped;

            let str_2 = $('#average_deal_amount').val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped_2 = str_2.replace(regex, '');
            average_deal_amount = stripped_2;

            increased_revenue_sales_per_month = sales_efficiency_per_month(number_salespeople,average_deal_amount);

            $('#increased_revenue_sales_per_month').val(increased_revenue_sales_per_month.toFixed(2).replace(/\.00$/, ''));
            $('#increased_revenue_per_sales_year').val(dollarUS.format(increased_revenue_per_sales_year).replace(/\.00$/, ''));



        },
        blur: function () {

            let str = $(this).val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            number_salespeople = stripped;

            let str_2 = $('#average_deal_amount').val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped_2 = str_2.replace(regex, '');
            average_deal_amount = stripped_2;

            increased_revenue_sales_per_month = sales_efficiency_per_month(number_salespeople,average_deal_amount);

            $('#increased_revenue_sales_per_month').val(increased_revenue_sales_per_month.toFixed(2).replace(/\.00$/, ''));
            $('#increased_revenue_per_sales_year').val(dollarUS.format(increased_revenue_per_sales_year).replace(/\.00$/, ''));


        }
    });

    /* ----------------------------------------------------------------- */
    $("#average_deal_amount").on({
        focus: function(){

            var str = $(this).val();
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                $(this).val('');
                $(this).text('');
            }
        },
        keyup: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            let str_1 = $(this).val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped_1 = str_1.replace(regex, '');
            average_deal_amount = stripped_1;


            ///////////////////////////////////////////////////////////////

            increased_revenue_sales_per_month = sales_efficiency_per_month(number_salespeople,average_deal_amount);

            $('#increased_revenue_sales_per_month').val(increased_revenue_sales_per_month.toFixed(2).replace(/\.00$/, ''));
            $('#increased_revenue_sales_per_month').text(dollarUS.format(increased_revenue_sales_per_month).replace(/\.00$/, ''));
            $('#increased_revenue_sales_per_month').val(dollarUS.format(increased_revenue_sales_per_month).replace(/\.00$/, ''));

            $('#increased_revenue_per_sales_year').val(dollarUS.format(increased_revenue_per_sales_year).replace(/\.00$/, ''));

            $(this).trigger('change');

        },
        blur: function () {

            let str = $(this).val();
            let regex = /[$,\s]/g;
            let stripped = str.replace(regex, '');
            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            increased_revenue_sales_per_month = sales_efficiency_per_month(number_salespeople,average_deal_amount);



            $('#increased_revenue_sales_per_month').val(dollarUS.format(increased_revenue_sales_per_month).replace(/\.00$/, ''));
            $('#increased_revenue_per_sales_year').val(dollarUS.format(increased_revenue_per_sales_year).replace(/\.00$/, ''));

            $(this).val(dollarUS.format(average_deal_amount).replace(/\.00$/, ''));
            $(this).text(dollarUS.format(average_deal_amount).replace(/\.00$/, ''));

            $(this).trigger('change');
        }
    });
    /* ----------------------------------------------------------------- */



    /* ----------------------------------------------------------------- */

    //$("#platform_1,#platform_2,#platform_3").on({
    $(".platform").on({
        focus: function(){
            var str = $(this).val();
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                //console.log('hi');
                /*
                $(this).val('');
                */

                $(this).text(null);
            }
        },
        keyup: function () {

            /*
            $('#combined_savings').val('');
            $('#combined_savings').text('');

             */

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            let str_1 = $('#platform_1').val();
            var regex_1 = /[$,\s]/g;
            var stripped_1 = str_1.replace(regex_1, '');
            platform_1 = stripped_1;
            if(stripped_1 == 0){
                platform_1=0;
            }

            let str_2 = $('#platform_2').val();
            var regex_2 = /[$,\s]/g;
            var stripped_2 = str_2.replace(regex_2, '');
            platform_2 = stripped_2;
            if(stripped_2 == 0){
                platform_2=0;
            }

            let str_3 = $('#platform_3').val();
            var regex_3 = /[$,\s]/g;
            var stripped_3 = str_3.replace(regex_3, '');
            platform_3 = stripped_3;
            if(stripped_3 == 0){
                platform_3=0;
            }

combined_savings =  parseInt(platform_1) + parseInt(platform_2) + parseInt(platform_3);
/*
console.log(platform_1);
console.log(platform_2);
console.log(platform_3);
console.log(combined_savings);
*/
//console.log(parseInt(combined_savings));

$('#combined_savings').val(dollarUS.format(combined_savings).replace(/\.00$/, ''));
$('#combined_savings').text(dollarUS.format(combined_savings).replace(/\.00$/, ''));


        },
        blur: function () {

            $('#combined_savings').val(null);
            $('#combined_savings').text(null);


            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            let str_1 = $('#platform_1').val();
            var regex_1 = /[$,\s]/g;
            var stripped_1 = str_1.replace(regex_1, '');
            platform_1 = stripped_1;
            if(stripped_1 == 0){
                platform_1=0;
            }

            let str_2 = $('#platform_2').val();
            var regex_2 = /[$,\s]/g;
            var stripped_2 = str_2.replace(regex_2, '');
            platform_2 = stripped_2;
            if(stripped_2 == 0){
                platform_2=0;
            }

            let str_3 = $('#platform_3').val();
            var regex_3 = /[$,\s]/g;
            var stripped_3 = str_3.replace(regex_3, '');
            platform_3 = stripped_3;
            if(stripped_3 == 0){
                platform_3=0;
            }

            $('#platform_1').val(dollarUS.format(platform_1).replace(/\.00$/, ''));
            $('#platform_1').text(dollarUS.format(platform_1).replace(/\.00$/, ''));

            $('#platform_2').val(dollarUS.format(platform_2).replace(/\.00$/, ''));
            $('#platform_2').text(dollarUS.format(platform_2).replace(/\.00$/, ''));

            $('#platform_3').val(dollarUS.format(platform_3).replace(/\.00$/, ''));
            $('#platform_3').text(dollarUS.format(platform_3).replace(/\.00$/, ''));

            combined_savings =  parseInt(platform_1) + parseInt(platform_2) + parseInt(platform_3);

            /*
            console.log(platform_1);
            console.log(platform_2);
            console.log(platform_3);
            console.log(combined_savings);
            */

            $('#combined_savings').val(dollarUS.format(combined_savings).replace(/\.00$/, ''));
            $('#combined_savings').text(dollarUS.format(combined_savings).replace(/\.00$/, ''));

        }
    });

    /* ---------------------------------------------------------------- */

    $('#number_stations').on({
        focus: function(){

        },
        keyup: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            let str = $(this).val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            number_stations = stripped;

            let str_2 = $('#average_deal_amount').val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped_2 = str_2.replace(regex, '');
            amount_saved_credits = stripped_2;

            savings_per_month = operational_efficiency_savings_per_month(number_stations,amount_saved_credits);


            $('#savings_per_month').val(savings_per_month.toFixed(2).replace(/\.00$/, ''));
            $('#savings_per_month').val(dollarUS.format(operational_return).replace(/\.00$/, ''));

        },
        blur: function () {

            let str = $(this).val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            number_stations = stripped;

            let str_2 = $('#amount_saved_credits').val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped_2 = str_2.replace(regex, '');
            amount_saved_credits = stripped_2;

            savings_per_month = operational_efficiency_savings_per_month(number_stations,amount_saved_credits);

            $('#savings_per_month').val(savings_per_month.toFixed(2).replace(/\.00$/, ''));
            $('#optional_return').val(dollarUS.format(operational_return).replace(/\.00$/, ''));
        }
    });

    /* ----------------------------------------------------------------- */
    $("#amount_saved_credits").on({
        focus: function(){

            var str = $(this).val();
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                $(this).val('');
                $(this).text('');
            }
        },
        keyup: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            let str_1 = $(this).val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped_1 = str_1.replace(regex, '');
            amount_saved_credits = stripped_1;

            ///////////////////////////////////////////////////////////////

            savings_per_month = operational_efficiency_savings_per_month(number_stations,amount_saved_credits);

            $('#savings_per_month').val(savings_per_month.toFixed(2).replace(/\.00$/, ''));
            $('#savings_per_month').text(dollarUS.format(savings_per_month).replace(/\.00$/, ''));
            $('#savings_per_month').val(dollarUS.format(savings_per_month).replace(/\.00$/, ''));

            $('#optional_return').val(dollarUS.format(operational_return).replace(/\.00$/, ''));


            $(this).trigger('change');

        },
        blur: function () {

            let str = $(this).val();
            let regex = /[$,\s]/g;
            let stripped = str.replace(regex, '');
            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });


            savings_per_month = operational_efficiency_savings_per_month(number_stations,amount_saved_credits);
            $('#savings_per_month').val(dollarUS.format(savings_per_month).replace(/\.00$/, ''));
            $('#optional_return').val(dollarUS.format(operational_return).replace(/\.00$/, ''));

            $(this).val(dollarUS.format(amount_saved_credits).replace(/\.00$/, ''));

            $(this).trigger('change');

        }
    });
    /* ---------------------------P4P Revenue-------------------------------------- */
    /* -----------------------------P4P Revenue------------------------------------ */

    $('#total_current_revenue').on({
        focus:function (){
            var str = $(this).val();
            var regex = /[$,%\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                $(this).val('');
                $(this).text('');
            }
        },
        blur:function () {
            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });


            var str = $(this).val();
            var regex = /[$,%\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                $(this).val('');
                $(this).text('');
            }

var str_ippr = $('#increase_pay_performance_revenue').val();
var regex_ippr = /[$,%\s]/g;
var stripped_ippr = str_ippr.replace(regex_ippr, '');

if(stripped_ippr == 0){
    $(this).val('');
    $(this).text('');
}

increased_revenue_per_month = stripped * (stripped_ippr / 100);
//console.log('---'+increased_revenue_per_month);
increased_revenue_per_year = increased_revenue_per_month * 12;
//console.log('---'+increased_revenue_per_year);

$('#increased_revenue_per_month').val(dollarUS.format(increased_revenue_per_month).replace(/\.00$/, ''));
$('#increased_revenue_per_month').text(dollarUS.format(increased_revenue_per_month).replace(/\.00$/, ''));

$('#increased_revenue_per_year').val(dollarUS.format(increased_revenue_per_year).replace(/\.00$/, ''));
$('#increased_revenue_per_year').text(dollarUS.format(increased_revenue_per_year).replace(/\.00$/, ''));

$('#increased_revenue_per_month').trigger('change');

            $(this).val(dollarUS.format(stripped).replace(/\.00$/, ''));
            $(this).text(dollarUS.format(stripped).replace(/\.00$/, ''));
        }
    });

/* -----------------------------P4P Revenue------------------------------------ */
/* -----------------------------P4P Revenue------------------------------------ */


    $("#increase_pay_performance_revenue").on({
        focus: function(){

            var str = $(this).val();
            var regex = /[$,%\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                $(this).val('');
                $(this).text('');
            }
        },
        keyup: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            var str = $(this).val();
            var regex = /[$,%\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                $(this).val('');
                $(this).text('');
            }

            var str_tcr     = $('#total_current_revenue').val();
            var regex_tcr   = /[$,%\s]/g;
            var stripped_tcr = str_tcr.replace(regex_tcr, '');

            total_current_revenue = stripped_tcr;

            increased_revenue_per_month = total_current_revenue * (stripped / 100);
            increased_revenue_per_year = increased_revenue_per_month * 12;

            $('#increased_revenue_per_month').val(dollarUS.format(increased_revenue_per_month).replace(/\.00$/, ''));
            $('#increased_revenue_per_month').text(dollarUS.format(increased_revenue_per_month).replace(/\.00$/, ''));

            $('#increased_revenue_per_year').val(dollarUS.format(increased_revenue_per_year).replace(/\.00$/, ''));
            $('#increased_revenue_per_year').text(dollarUS.format(increased_revenue_per_year).replace(/\.00$/, ''));


            var str_2 = $(this).val();
            var regex_2 = /[$,%\s]/g;
            var stripped_2 = str_2.replace(regex_2, '');
            //console.log("stripped value :" +stripped);

            if(stripped_2 == 0){
                $(this).val('');
                $(this).text('');
            }
            $(this).text(stripped_2+'%');
            $(this).val(stripped_2+'%');

            $('#increased_revenue_per_month').trigger('change');

        },
        blur: function () {
            $('#increased_revenue_per_month').trigger('change');
        }
    });

    /* ---------------------------------------------------------------- */
    $("#number_new_deals_closed_year").on({
        focus: function(){
            var str = $(this).val();
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                $(this).val('');
                $(this).text('');
            }
        },
        keyup: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            var str = $(this).val();
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            number_new_deals_closed_year = stripped;

            var str2 = $('#annual_each_deal').val();
            var regex2 = /[$,\s]/g;
            var stripped2 = str2.replace(regex2,'');

            if(stripped2 == 0){
                annual_each_deal = stripped2;

                annual_each_deal = annual_each_deal * number_new_deals_closed_year;
                $('#annual_each_deal').val(dollarUS.format(annual_each_deal).replace(/\.00$/, ''));
                $('#annual_each_deal').text(dollarUS.format(annual_each_deal).replace(/\.00$/, ''));
            }

        },
        blur: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            var str = $(this).val();
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            number_new_deals_closed_year = stripped;

            var str2 = $('#annual_each_deal').val();
            var regex2 = /[$,\s]/g;
            var stripped2 = str2.replace(regex2,'');
            if(stripped2 == 0){
                annual_each_deal = stripped2;

                annual_each_deal = annual_each_deal * number_new_deals_closed_year;
                $('#annual_each_deal').val(dollarUS.format(annual_each_deal).replace(/\.00$/, ''));
                $('#annual_each_deal').text(dollarUS.format(annual_each_deal).replace(/\.00$/, ''));
            }
        }
    });

    /* ---------------------------------------------------------------- */
    /* ---------------------------------------------------------------- */
    $("#annual_each_deal").on({
        focus: function(){
            var str = $(this).val();
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            //console.log("stripped value :" +stripped);

            if(stripped == 0){
                $(this).val('');
                $(this).text('');
            }
        },
        keyup: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            let str = $(this).val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            annual_each_deal = stripped;


            let str_2 = $("#number_new_deals_closed_year").val();
            //var regex = /[$.,\s]/g;
            var regex_2 = /[%,\s]/g;
            var stripped_2 = str_2.replace(regex_2, '');
            number_new_deals_closed_year = stripped_2;


            automation_return = annual_each_deal * number_new_deals_closed_year;

            $('#automation_return').val(dollarUS.format(automation_return).replace(/\.00$/, ''));
            $('#automation_return').text(dollarUS.format(automation_return).replace(/\.00$/, ''));


            /*
                $(this).val(dollarUS.format(annual_each_deal));
                $(this).text(dollarUS.format(annual_each_deal));
            */

            $(this).trigger('change');

        },
        blur: function () {

            let dollarUS = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            let str = $(this).val();
            //var regex = /[$.,\s]/g;
            var regex = /[$,\s]/g;
            var stripped = str.replace(regex, '');
            annual_each_deal = stripped;


            let str_2 = $("#number_new_deals_closed_year").val();
            //var regex = /[$.,\s]/g;
            var regex_2 = /[%,\s]/g;
            var stripped_2 = str_2.replace(regex_2, '');
            number_new_deals_closed_year = stripped_2;

            //$(this).val(annual_each_deal.toFixed(2));
            $(this).val(dollarUS.format(annual_each_deal).replace(/\.00$/, ''));
            $(this).text(dollarUS.format(annual_each_deal).replace(/\.00$/, ''));

            automation_return = annual_each_deal * number_new_deals_closed_year;
            $('#automation_return').val(dollarUS.format(automation_return).replace(/\.00$/, ''));
            $('#automation_return').text(dollarUS.format(automation_return).replace(/\.00$/, ''));

            $(this).trigger('change');

        }
    });


    /* ---------------------------------------------------------------- */

});

$(document).on('change','.platform,#annual_revenue,#average_deal_amount,#increased_revenue_per_month,#annual_each_deal,#amount_saved_credits',function(){
    TOTAL_ANNUAL_ROI_VALUE = rate_improvement_return + increased_revenue_per_sales_year+increased_revenue_per_year
    +automation_return+operational_return + combined_savings;

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    $('#total_annual_roi_result').text(dollarUS.format(TOTAL_ANNUAL_ROI_VALUE).replace(/\.00$/, ''));

    NET_ROI_VALUE = TOTAL_ANNUAL_ROI_VALUE - ESTIMATED_REV_ANNUAL_COSTS;

    $('#net_roi_result').text(dollarUS.format(NET_ROI_VALUE).replace(/\.00$/, ''));

    var ROI_RETURN_X = NET_ROI_VALUE / ESTIMATED_REV_ANNUAL_COSTS;

    var ROI_RETURN_X_fraction = (ROI_RETURN_X % 1).toFixed(2);

    //console.log(ROI_RETURN_X_fraction);

    if(ROI_RETURN_X_fraction < 0.5){
        ROI_RETURN_X_VALUE = Math.floor(ROI_RETURN_X);
        //console.log("Less :"+ROI_RETURN_X_VALUE);
    }
    if(ROI_RETURN_X_fraction >= 0.5){
        ROI_RETURN_X_VALUE = Math.ceil(ROI_RETURN_X);
        //console.log("More :"+ROI_RETURN_X_VALUE);
    }

    //console.log(ROI_RETURN_X_VALUE);

    $('#roi_return_result').text(ROI_RETURN_X_VALUE+'x');


});


