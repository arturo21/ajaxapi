# ajaxapi
**Librería JS para consultas AJAX (Se integra a general.js)**

## Import library from CDN
```html
	<script src="https://cdn.underdevelopment.work/generaljs/ajaxapi.js">
```
## AJAX Calls
### GET + Callback
```javascript
	ajaxapi
	.get("general.js/README.md")
	.then(function(data){
		console.log("DATA: " + data);
		g("#titulo_widget").html("RESULTADO:");
		g("#mensajes").html(data);
	})
	.catch(function(e){	
		console.log("ERROR:" + e);
	})
```
### GET JSON + Callback
```javascript
	ajaxapi
	.getJSON("http://localhost/sistemapmod/devtools/dev/general.js/config.json")
	.then(function(data){
		console.log("DATA: " + data);
		g("#titulo_widget").html("RESULTADO:");
		g("#mensajesb").html(data);
	})
	.catch(function(e){	
		console.log("ERROR:" + e);
	})
```
## Load asinchronous + Callback
```javascript
	ajaxapi
	.load("http://localhost/sistemapmod/devtools/dev/general.js/README.md")
	.then(function(data){
		console.log("DATA: " + data);
		g("#titulo_widget").html("RESULTADO:");
		g("#mensajesa").html(data);
	})
	.catch(function(e){	
		console.log("ERROR:" + e);
	})
```

### Asynchronous POST for General.JS 
#### Client Side
```javascript
	ajaxapi
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
```

### Asynchronous Files UPLOAD for General.JS 
#### Client Side
```javascript
	let fdata = new FormData();
	fdata.append("file", dataf[0]);
	ajaxapi
	.upload("uploadfile.php",fdata)
	.then(function(data){
		g("#titulo_widget").html("RESULTADO:");
		g("#mensajesb").html(data);
	})
	.catch(function(e){	
		console.log("ERROR:" + e);
	})
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

