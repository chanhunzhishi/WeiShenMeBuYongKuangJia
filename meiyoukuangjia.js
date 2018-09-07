/**
 *  checkList 检查列表，{id:name:class}检查时会依次匹配id,name,class，如未找到则放过，对象中可存放其他额外参数以供失败时调用。
 *  success 成功时回调函数，会将config对象传入
 *  fail 失败时回调函数，会将该条目传入
 *
 */
function checkValue(config) {
    var checkList = config['checkList'];
    var success = config['success'];
    var fail = config['fail'];

    for (var i = 0; i < checkList.length; i++) {
        var itemSelecter = checkList[i];
        var item = null;
        if(itemSelecter.id && (item =$('#'+itemSelecter.id)).length>0){
            idCheck(item);
        }
        else if(item!=null && itemSelecter.name && (item =$('[name=' + itemSelecter.name + ']'))){

        }
        else if(item!=null && itemSelecter.class && (item = $('.'+itemSelecter.class))){

        }
        if(item==null){
            console.log(name + '未找到');
            continue;
        }


        if (!item.val() || item.val().length === 0) {
            fail(item);
            return;
        }
    }
    success(config);

    function nameCheck(inputObj) {
        if (inputObj.is('input') && inputObj.attr('type') === 'radio') {
            inputObj = $('[name=' + name + ']:checked');
        }else {
            inputObj = $('[name=' + name + ']')
        }
    }

    function idCheck(inputObj) {

    }

    function classCheck(inputObj) {
        if (inputObj.is('input') && inputObj.attr('type') === 'radio') {
            inputObj = $('[name=' + name + ']:checked');
        }
    }
}

