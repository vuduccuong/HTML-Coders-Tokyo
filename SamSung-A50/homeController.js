(function ($) {

    const link = '';
    const campaignId = 595;
    const listSku = '00481904,00481905';
    const fDate = '2017-01-01';
    const tDate = '2019-12-01';
    const numberrecord = 12;
    const loading = false;
    const type = 2;
    const ver = 1;

    $(document).ready(function () {
        $(".loading").hide();
        $("#btnShowPopup").off('click').on('click', function () {
            $("#frmCustInfo").re
            $("#poporder").modal("show");
        });
        
        $("#frmCustInfo").validate({
            rules: {
                nameCust: {
                    required: true,
                    minlength: 2,
                    maxlength: 30,
                    noSpace: true
                },
                phoneCust: {
                    required: true,
                    minlength: 10,
                    maxlength: 11,
                    number: true,
                    rgphone: true
                },
                emailCust: {
                    email: true
                }
            },
            messages: {
                nameCust: {
                    required: "Bạn cần nhập đầy đủ họ tên",
                    minlength: "Tên của bạn quá ngắn",
                    maxlength: "Tên của bạn quá dài",
                    noSpace: "Nhập tên sai định dạng"
                },
                phoneCust: {
                    required: "Bạn cần nhập số điện thoại",
                    minlength: "Số điện thoại tối thiểu 10 số",
                    maxlength: "Số điện thoại tối đa 11 số",
                    number: "Vui lòng nhập đúng định dạng"
                },
                emailCust: {
                    email: "Vui lòng nhập đúng định dạng email"
                }
            },
            submitHandler: function () {
                $('.loading').show();
                var txtpayname = $('#nameCust').val();
                var txtpayphone = $('#phoneCust').val();
                var txtpaymail = $('#emailCust').val();
                var data = {
                SourceName: link,
                CampaignId: campaignId,
                TotalPriceCampaignOrder: '7990000',
                ProductVariantId: '',
                ProductId:'00481904',
                Gender: 'true',
                Name: txtpayname,
                Email: txtpaymail,
                Phone: txtpayphone,
                Address: '',
                City: 0,
                District: 0,
                CouponCode: '',
                Accessories: '',
                TalesSales: '',
                ArrPromotioID: '',
                TypePayment: 'boxselectShop',
                Refered: '',
                Shopname:"",
                Storeid:0,
                Sendoid:'',
                CodeEmployee:''
            };
                 $.post('/Home/AddOrder',
                     {
                         data: JSON.stringify(data) 
                     }, function (odata) {
                 $('#tracking').html(odata.Messenger);
                 $('#nameCust').val('');
                 $('#phoneCust').val('');
                 $('#emailCust').val('');
                 $('.loading').removeClass("active");
                 $('.pd-ftbtn').val('Tiến hành đặt hàng');
                 $(".pd-ftbtn").attr("disabled", false);
                 $("#ok-final").modal("show");
                 }).complete(function () {
                 $("#poporder").modal("hide");
                 });
            }
        });
    });

    jQuery.validator.addMethod("rgphone", function (value, element) {
        return this.optional(element) || /^(098|095|097|096|039|038|0167|037|035|034|033|032|090|093|077|076|078|079|070|091|094|083|084|085|081|082|092|058|056|099|059|086|088|089|087)[0-9]{7}$/.test(value);
    }, "Số điện thoại không đúng định dạng");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.trim() != "";
    }, "Không được để khoàng trống");

    $(window).load(function () {
        $("#poporder").modal("hide"); 
        $("#ok-final").modal("hide");
        $('.loading').hide();
        var a = 0;
        var b = 0;

        $.get(link + "/Home/GetListOrderedNew", { listSku: listSku, campaignId: campaignId, fDate: fDate, tDate: tDate, page: 1, recordPerpage: 20, v: ver }, function (data) {
            $("dataCust").html(data.view);
            $('.pagingOrder').show();
            if (parseInt(data.total) <= 20) {
                $('.pagingOrder').hide();
            }

            a = data.total;
        });

        $.get(link + "/Home/GetListCustomerDepositNewVer2", { listSku: listSku, type: type, fDate: fDate, tDate: tDate, page: 1, recordPerpage: 20, v: ver }, function (data) {
            $("#dataCust").html(data.view);
            $('.pagingOrderDeposit').show();
            $('#totalDeposit').text(data.total);
            $('#totalDeposit1').text(data.total);
            if (parseInt(data.total) <= 20) {
                $('.pagingOrderDeposit').hide();
            }

            b = data.total;
            var total = 0;
            total = b;
            
            $('#totalOrder').text(total);
            $('#totalOrder1').text(total);
            $('#totalOrderTop1').text(total);
            $('#totalOrderTop').text(total);
        });
    });

})(window.jQuery);
