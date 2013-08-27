//form 操作

//radio button
```var checked = this.checked;```

//select option
``` JS
function isExistSelect(objSelect, objItemValue){
	var isExit = false;
    for (var i = 0; i < objSelect.options.length; i++) {
        if (objSelect.options[i].value == objItemValue) {
            isExit = true;
            break;
        }
    }
    return isExit;
}
```

``` JS
function addItemToSelect(objSelect, objItemText, objItemValue) {
    //判断是否存在
    if (isExistSelect(objSelect, objItemValue)) {
        return;
    } else {
        var varItem = new Option(objItemText, objItemValue);
        objSelect.options.add(varItem);
    }
}
```
