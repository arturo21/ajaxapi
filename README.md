# ⚡ ajaxapi.js

**Librería JavaScript para consultas AJAX asincrónicas**  
Integración directa con [`general.js`](https://cdn.underdevelopment.work/generaljs/general.js)

<p align="center">
  <img src="https://img.shields.io/badge/version-1.1.0-blue.svg" alt="Versión">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="Licencia">
</p>

---

## 📦 Instalación

### CDN estándar
```html
<script src="https://cdn.underdevelopment.work/generaljs/ajaxapi.js"></script>

## Si quieres que el catch ejecute funciones, importa esta URL:
```html
	<script src="https://cdn.underdevelopment.work/generaljs/alt/ajaxapi.js">
```

## 🧠 Métodos disponibles

| Método       | Descripción                                      |
|--------------|--------------------------------------------------|
| `.get()`     | Realiza una petición GET                         |
| `.getJSON()` | Realiza una petición GET y parsea JSON           |
| `.load()`    | Carga contenido asincrónico                      |
| `.post()`    | Envía datos vía POST                             |
| `.upload()`  | Envía archivos vía `FormData`                    |


## ✨ Cambios recientes

| Versión | Mejoras aplicadas                                                                 |
|---------|------------------------------------------------------------------------------------|
| `v1.1.0`| Se agrega soporte para `upload()` con `FormData`                                  |
| `v1.0.9`| `.catch()` ahora puede ejecutar funciones personalizadas (versión `alt`)          |
| `v1.0.8`| Se integran `.load()` y `.getJSON()` con compatibilidad extendida                 |
| `v1.0.7`| `.post()` soporta objetos complejos y serialización automática                    |
| `v1.0.6`| Se refactoriza `.get()` para mayor estabilidad y compatibilidad con `general.js`  |

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

### Si deseas colaborar, haz clic en el enlace abajo:
### if do you like to to collab, you can do it by clicking the link below:
### --Paypal-- 
[![paypal-btn-image-pay](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/paypalme/avsolucionesweb)

