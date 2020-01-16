(function(){var P$=Clazz.newPackage("java.lang.annotation"),I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AnnotationTypeMismatchException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['foundType'],'O',['element','java.lang.reflect.Method']]]

Clazz.newMeth(C$, 'c$$reflect_Method$S', function (element, foundType) {
;C$.superclazz.c$$S.apply(this,[$I$(1).getString$S$O$O("annotation.1", element, foundType)]);C$.$init$.apply(this);
this.element=element;
this.foundType=foundType;
}, 1);

Clazz.newMeth(C$, 'element$', function () {
return this.element;
});

Clazz.newMeth(C$, 'foundType$', function () {
return this.foundType;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
