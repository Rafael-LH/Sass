# Reglas css BEM (Block Element Modifier)

## Block (.class)

 boton con estilos base

 ```
 .btn
 ```   

## Element (.class__element)
 
 pero tenemos otro boton que este a su vez tiene un elemento el cual es un icono por lo tanto lo que hacemos es lo siguiente. base que es *.btn* + *__* porque solo es un elemento mas no un modificador + *elemento* quedaria de la siguiente manera

 ```
 .btn__icon
 ```   

## Modifier (.class--modifier)

tambien tenemos otro boton pero este si sera un modificador el cual va a tener las propiedades base mas otros estilos visuales para que se diferencie de los demas, entonces ponemos base *.btn* + *--*
guiones medios porque este si es un modificador + nombre que lo identifique por ejemplo *warning*
*danger*, *success* etc. quedaria de la siguiente manera

```
.icon--danger
```   

## Estructura

```
.btn {} base
.btn__element {}
.btn--modifier {}
```

## Otro ejemplo

```
.site-search {}  Block 
.site-search__field {} Element 
.site-search--full {}  Modifier
```
