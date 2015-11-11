//ページロード時に今設定してある一覧を表示
document.body.onload = function() {
	
}
//alert("hello");
//saveボタンが押されたら設定内容をsaveする
document.getElementById('save').onclick = function(){
	localStorage['url'] = document.getElementById('url').value;
	localStorage['color'] = document.getElementById('color').value;
}
