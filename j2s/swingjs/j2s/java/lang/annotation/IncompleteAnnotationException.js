(function(){var P$=Clazz.newPackage("java.lang.annotation"),I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IncompleteAnnotationException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['elementName'],'O',['annotationType','Class']]]

Clazz.newMeth(C$, 'c$$Class$S', function (annotationType, elementName) {
;C$.superclazz.c$$S.apply(this,[$I$(1).getString$S$O$O("annotation.0", elementName, annotationType)]);C$.$init$.apply(this);
this.annotationType=annotationType;
this.elementName=elementName;
}, 1);

Clazz.newMeth(C$, 'annotationType$', function () {
return this.annotationType;
});

Clazz.newMeth(C$, 'elementName$', function () {
return this.elementName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
