(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'swingjs.JSUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GraphicsEnvironment");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['localEnv','java.awt.GraphicsEnvironment']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLocalGraphicsEnvironment$', function () {
if (C$.localEnv == null ) {
C$.localEnv=$I$(1).getInstance$S("swingjs.JSGraphicsEnvironment");
}return C$.localEnv;
}, 1);

Clazz.newMeth(C$, 'isHeadless$', function () {
return false;
}, 1);

Clazz.newMeth(C$, 'getHeadlessProperty$', function () {
return false;
}, 1);

Clazz.newMeth(C$, 'checkHeadless$', function () {
}, 1);

Clazz.newMeth(C$, 'isHeadlessInstance$', function () {
return C$.getHeadlessProperty$();
});

Clazz.newMeth(C$, 'registerFont$java_awt_Font', function (font) {
return true;
});

Clazz.newMeth(C$, 'preferLocaleFonts$', function () {
});

Clazz.newMeth(C$, 'preferProportionalFonts$', function () {
});

Clazz.newMeth(C$, 'getCenterPoint$', function () {
return null;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
