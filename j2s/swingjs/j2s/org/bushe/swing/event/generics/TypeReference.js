(function(){var P$=Clazz.newPackage("org.bushe.swing.event.generics"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TypeReference");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['type','java.lang.reflect.Type','constructor','java.lang.reflect.Constructor']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
var superclass=this.getClass$().getGenericSuperclass$();
if (Clazz.instanceOf(superclass, "java.lang.Class")) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Missing type parameter."]);
}this.type=(superclass).getActualTypeArguments$()[0];
}, 1);

Clazz.newMeth(C$, 'newInstance$', function () {
if (this.constructor == null ) {
var rawType=Clazz.instanceOf(this.type, "java.lang.Class") ? this.type : (this.type).getRawType$();
this.constructor=rawType.getConstructor$ClassA([]);
}return this.constructor.newInstance$OA([]);
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
