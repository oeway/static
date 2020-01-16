(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[[0,'org.scijava.util.Types']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NullConverter", null, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'canConvert$org_scijava_convert_ConversionRequest', function (request) {
if (request == null ) return false;
return (request.destType$() == null  && request.destClass$() == null  ) || (request.sourceObject$() == null  && request.sourceClass$() == null  ) ;
});

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
return src == null  || dest == null  ;
});

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
return src == null  || dest == null  ;
});

Clazz.newMeth(C$, 'canConvert$Class$Class', function (src, dest) {
if (src == null ) return false;
return dest == null ;
});

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
if (dest == null ) return null;
if (src == null ) return $I$(1).nullValue$Class(dest);
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Attempting non-null conversion: " + src + " > " + dest + " using NullConverter." ]);
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass(java.lang.Object);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass(java.lang.Object);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.NullConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="1.0E300" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
