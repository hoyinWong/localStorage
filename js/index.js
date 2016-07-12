/*
** author@hoyin 
*  页面自动刷新20次
*  计算平均值作为参考
*
*/
var loadBefore = endTime - startTime,
	loadcomplete,
	loadTime;

window.onload = function(){
	loadTime = new Date();
	loadcomplete = loadTime - startTime;
	if(localStorage){
		if(localStorage.obj){
			var obj =JSON.parse(localStorage.obj);
			obj.loadBefore.push(loadBefore);
			obj.loadcomplete.push(loadcomplete);
			localStorage.obj = JSON.stringify(obj);
		}else {
			var timeObj = {
				loadBefore: [loadBefore],
				loadcomplete: [loadcomplete]
			};

			timeObj = JSON.stringify(timeObj);
			localStorage.obj = timeObj;
		}
		console.log(localStorage.obj )
	}
}