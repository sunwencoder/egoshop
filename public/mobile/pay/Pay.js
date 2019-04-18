/*******************************************************************************
 * pageUI
 */


var pageCountSource= null;
function pageUI(pageCount){
    if(pageCount !=null && pageCountSource!=pageCount){
        $("#paginationAddId").html('<ul id="pagination" class="pagination"></ul>');
    }
    pageCountSource = pageCount;
    var obj = $('#pagination').twbsPagination({
        totalPages: pageCount,
        visiblePages: 9,
        onPageClick: function (event, page) {
            getData(page);
        }
    });
}
/**
 * 鍒嗛〉鏁版嵁鍥炶皟
 *
 * @param data
 * @returns
 */
function successPageCallBack(data){
    var totalCounter = data.data.totalCount;
    var pageCount = data.data.pageCount;
    var pageNumber = data.data.pageNumber;
    var pageSize = data.data.pageSize;
    var datas = data.data.result;
    $('#totalCount').html(totalCounter);
    // remove old data
    $("tr[name='autoData']").remove();
    if(!datas || datas.length == 0){
        showOrHidden($("#noDataId"),true);
        pageUI(pageCount);
        return;
    }else{
        showOrHidden($("#noDataId"),false);
    }
    $("#contentId").tmpl(datas).appendTo("#dataTableId");
    pageUI(pageCount);
}

/**
 * 鐩戝惉鍖哄煙鐨勫洖杞︿簨浠�
 *
 * @param selectid
 * @returns
 */
function keyEnter(selectid,callBack){
    $(selectid).bind("keydown",function(e){
        // 鍏煎FF鍜孖E鍜孫pera
        var theEvent = e || window.event;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13 && callBack) {
            callBack();
        }
    });
}


/**
 * 纭鍜屽彇娑堥兘鍙墽琛屽洖璋�
 *
 * @param enterCallBack
 * @param cancelCallBack
 * @returns
 */
function confirmAlert2(enterCallBack,cancelCallBack,titleMsg){
    if(titleMsg == null || titleMsg == ''){
        titleMsg = '纭畾杩涜姝ゆ搷浣滐紵';
    }
    const swalWithBootstrapButtons = swal.mixin({
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger', // theme.css[btn-success] add
        // margin-left: 30px;
        buttonsStyling: false,
    })

    swalWithBootstrapButtons({
        title: titleMsg,
        html: "&nbsp;</br>&nbsp;</br>",
        type: 'question',
        width:360,
        showCancelButton: true,
        confirmButtonText: '纭畾',
        cancelButtonText: '鍙栨秷',
        reverseButtons: true,
    }).then((result) => {
        if (result.value) {
            if(enterCallBack){
                enterCallBack();
            }
        } else if (result.dismiss === swal.DismissReason.cancel) {
            // Read more about handling dismissals
            if(cancelCallBack){
                cancelCallBack();
            }
        }
    })
}// end----

/**
 * 纭杩涜姝ゆ搷浣�,纭鎸夐挳鎵ц鍥炶皟
 *
 * @param confirmCallBack
 * @returns
 */
function confirmAlert(confirmCallBack){
    swal({
        title: '纭畾璇ユ搷浣滃悧锛�',
        html: '&nbsp;</br>&nbsp;</br>',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '纭畾',
        cancelButtonText: '鍙栨秷',
        showLoaderOnConfirm: true,
    }).then(function(data){
        console.log(data.value)
        if(data.value == true ){
            if(confirmCallBack){
                confirmCallBack();
            }
        }
    });
} // end confirmAlert


/** *sweetalert2** */
/**
 *
 * @param data
 * @param successMsg
 * @param successCallBack
 * @param errorCallBack
 * @param timeOutCallBack
 * @returns
 */
function checkDataResult(data,successMsg,successCallBack,errorCallBack,timeOutCallBack) {
    if (data.status == '0') {
        // success;
        showSuccess(successMsg,successCallBack);
    } else if (data.status == '-1') {
        showError('鍥炶瘽瓒呮椂锛�3绉掑悗灏嗚烦杞埌鐧诲綍椤甸潰',timeOutCallBack);
    } else  {
        showError(data.msg,errorCallBack);;
    }
}// end checkDataResult
function showError(errMsg,callback) {
    //瑙ｅ喅寮圭獥鐬棿娑堝け鐨勯棶棰�
    setTimeout(function(){
        swal({
            type : 'error',
            title : errMsg,
            showConfirmButton : true,
            timer : 3000
        }).then((result) => {
            if(callback){
                callback();
            }
        });
    },500);

}// end showError
function showSuccess(msg,callback) {
    if(msg === false){
        callback();
        return;
    }
    if(isNull(msg)){
        msg = '鎿嶄綔鎴愬姛'	;
    }
    swal({
        type: 'success',
        title: msg,
        showConfirmButton: true,
        timer: 2000
    }).then((result) => {
        if(callback){
            callback();
        }
    });
}
/** *sweetalert2** */

function show_detail(target){
    var isMobileFlag  = isMobileDevice();
    if(isMobileFlag){
        return;
    }
    var dis = $(target).next("ul").css("display");
    if("none"==dis){
        $(target).next("ul").slideDown();
    }else{
        $(target).next("ul").slideUp();
    }
};

/**
 * 鍒嗚浆鍏�
 * @param num
 * @returns
 */
function fen2yuan( num ) {
    if ( typeof num !== "number" || isNaN( num ) ) return null;
    return ( num / 100 ).toFixed( 2 );
}
