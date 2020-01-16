(function(){var P$=Clazz.newPackage("net.imagej.convert"),I$=[[0,'net.imglib2.view.Views','net.imglib2.IterableInterval','net.imglib2.RandomAccessibleInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConvertRAIToIterableInterval", null, 'org.scijava.convert.AbstractConverter', 'org.scijava.convert.Converter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
return $I$(1).iterable$net_imglib2_RandomAccessibleInterval(src);
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(2),['cursor$','localizingCursor$']);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(3),[]);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.convert.ConvertRAIToIterableInterval',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
