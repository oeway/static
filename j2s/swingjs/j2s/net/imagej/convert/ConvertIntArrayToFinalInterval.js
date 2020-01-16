(function(){var P$=Clazz.newPackage("net.imagej.convert"),I$=[[0,'net.imglib2.FinalInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConvertIntArrayToFinalInterval", null, 'org.scijava.convert.AbstractConverter', 'net.imagej.convert.ConvertIntArrayToDimensions');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
var $in=src;
var out=Clazz.array(Long.TYPE, [$in.length]);
for (var i=0; i < $in.length; i++) {
out[i]=$in[i];
}
return Clazz.new_($I$(1,1).c$$JA,[out]);
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(1));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.array(Integer.TYPE, -1);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.convert.ConvertIntArrayToFinalInterval',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
