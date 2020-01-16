(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[[0,'org.scijava.util.Types']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CastingConverter", null, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
return $I$(1).isInstance$O$Class(src, dest);
});

Clazz.newMeth(C$, 'canConvert$Class$Class', function (src, dest) {
return dest != null  && $I$(1).isAssignable$reflect_Type$reflect_Type(src, dest) ;
});

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
var c=$I$(1).raw$reflect_Type(dest);
return $I$(1).cast$O$Class(src, c);
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass(java.lang.Object);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass(java.lang.Object);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.CastingConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="1000000.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
