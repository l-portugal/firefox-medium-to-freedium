# Medium to Freedium Redirect

Extensión para Firefox que redirige automáticamente cualquier enlace de **medium.com** hacia **freedium.cfd**.

## 🚀 Instalación
1. Descarga el `.zip` desde [web-ext-artifacts](https://github.com/l-portugal/firefox-medium-to-freedium/tree/main/web-ext-artifacts).


2. En firefox ingresar en URL `about:config` y setear 


```
xpinstall.signatures.required = false
```

3. Instala manualmente desde `about:addons` → **Instalar complemento desde archivo** → Seleccionar archivo `.zip` descargado

## 🛠 Desarrollo
Clona el repo y carga como complemento temporal desde URL `about:debugging#/runtime/this-firefox`

Codea como un campeón.

### Empaquetar la extensión

Es necesario tener Node.js instalado

Validar la extensión
```bash
npx web-ext lint
```

Empaquetar
```bash
npx web-ext build
```

**Esto genera el archivo empaquetado como .zip dentro del directorio /web-ext-artifacts/**
