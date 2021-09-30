let ajaxsck;
let apisc;

ajaxapi=(function(global,factory){
	let ajax_=getSocket();
	let bitget=0;
	let bitpost=0;
	let bitgetjson=0;
	let bitupload=0;
	let bitload=0;
	let protocol='get';
	let errormessage="";
	//write code below
	function getSocket(){
		// code for modern browsers
		xmlhttp = new XMLHttpRequest();
		return xmlhttp;
	};
return{
    getAjax:function(){
		let sockajax=getSocket();
		return sockajax;
  	},
	load:function(url){
		let options;
		let respjson;
		let objeto;
		let x,y,valor,indice;
		var params = "action=load";
		bitget=0;
		bitpost=0;
		bitgetjson=0;
		bitupload=0;
		bitload=1;
		if(bitload==1){
			console.log("BITLOAD=1");
			ajax_.open("GET", url, true);
			ajax_.send(null);
			return this;
		}
	},
  	get:function(url){
		let options;
		let respjson;
		let objeto;
		let x,y,valor,indice;
		var params = "action=get";
		bitget=1;
		bitpost=0;
		bitgetjson=0;
		bitupload=0;
		bitload=0;
		if(bitget==1){
			console.log("BITGET=1");
			ajax_.open("GET", url, true);
			ajax_.send(null);
			return this;
		}
  	},
  	getJSON:function(url){
		let options;
		let respjson;
		let objeto;
		let x,y,valor,indice;
		var params="action=getjson";
		bitget=0;
		bitpost=0;
		bitgetjson=1;
		bitupload=0;
		bitload=0;
		if(bitgetjson==1){
			console.log("BITJSON=1");
			ajax_.open("GET", url, true);
			ajax_.send(null);
			return this;
		}
  	},
  	post:function(url,data){
		let options;
		let respjson;
		let objeto;
		let x,y,valor,indice;
		protocol="post";
		bitget=0;
		bitpost=1;
		bitgetjson=0;
		bitupload=0;
		bitload=0;
		ajax_=getSocket();
		ajax_.open("POST", url, true);
		ajax_.response='json';
		ajax_.send(data);
		return this;
  	},
  	upload:function(url,data){
		let options;
		let respjson;
		let objeto;
		let x,y,valor,indice;
		protocol="post";
		bitget=0;
		bitpost=0;
		bitgetjson=0;
		bitupload=1;
		bitload=0;
		ajax_=getSocket();
		ajax_.open("POST", url, true);
		ajax_.response='text';
		ajax_.send(data);
		return this;
  	},
	then:function(callback){
		ajax_.onreadystatechange = function(){
			if(ajax_.readyState==4){
				if(ajax_.status==200){
					callback(ajax_.response);
					return this;
				}
				else{
					errormessage=ajax_.statusText;
					ajaxapi.catch(errormessage);
					return this;
				}
			}
		};
		return this;
	},
	catch:function(e){
		console.log(e);
	}
  }
}(window));
