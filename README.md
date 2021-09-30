# ajaxapi
**Librería JS para consultas AJAX**
Librería JS para el manejo de peticiones AJAX

## Import library from CDN
```html
	<script src="https://cdn.underdevelopment.work/generaljs/ajaxapi.js">
```
## AJAX Calls
### GET + Callback
```javascript
	let ajaxobj=genrl.ajaxapi;
	g("#getbtn").click(function(){
		ajaxobj
		.get("general.js/README.md")
		.then(function(data){
			console.log("DATA: " + data);
			g("#titulo_widget").html("RESULTADO:");
			g("#mensajes").html(data);
		})
		.catch(function(e){	
			console.log("ERROR:" + e);
		})
	});
```
### GET JSON + Callback
```javascript
	let ajaxobj=genrl.ajaxapi;
	g("#getjbtn").click(function(){
		ajaxobj
		.getJSON("http://localhost/sistemapmod/devtools/dev/general.js/config.json")
		.then(function(data){
			console.log("DATA: " + data);
			g("#titulo_widget").html("RESULTADO:");
			g("#mensajesb").html(data);
		})
		.catch(function(e){	
			console.log("ERROR:" + e);
		})
	});
```
## Load asinchronous + Callback
```javascript
	let ajaxobj=genrl.ajaxapi;
	g("#loadbtn").click(function(){
		ajaxobj
		.load("http://localhost/sistemapmod/devtools/dev/general.js/README.md")
		.then(function(data){
			console.log("DATA: " + data);
			g("#titulo_widget").html("RESULTADO:");
			g("#mensajesa").html(data);
		})
		.catch(function(e){	
			console.log("ERROR:" + e);
		})
	});
```

### Asynchronous POST for General.JS 
#### Client Side
```javascript
	let ajaxobj=genrl.ajaxapi;
	g("#namebtn").click(function(){
		let strdata={'nombre':'arturo'};
		datos=strdata;
		ajaxobj
		.post("socketd.php",datos)
		.then(function(data){
			console.log("DATA RECIBIDA: ");
			console.log(data);
			g("#titulo_widget").html("RESULTADO:");
			g("#mensajesa").html(data);
		})
		.catch(function(e){	
			console.log("ERROR:" + e);
		})
	});
```

### Asynchronous Files UPLOAD for General.JS 
#### Client Side
```javascript
	let ajaxobj=genrl.ajaxapi;
	g('#archivo').change(function(e){
		console.log("Cambió el campo");
		dataf=g('#archivo').getFiles();
	});
	g("#filebtn").click(function(){
		let fdata = new FormData();
		fdata.append("file", dataf[0]);
		ajaxobj
		.upload("uploadfile.php",fdata)
		.then(function(data){
			g("#titulo_widget").html("RESULTADO:");
			g("#mensajesb").html(data);
		})
		.catch(function(e){	
			console.log("ERROR:" + e);
		})
	});
```
#### Server Side
```php
<?php
	session_start();
    if (move_uploaded_file($_FILES["file"]["tmp_name"], "uploads/".$_FILES['file']['name'])) {
        //more code here...
        echo("uploads/".$_FILES['file']['name']);
    }
?>
```

