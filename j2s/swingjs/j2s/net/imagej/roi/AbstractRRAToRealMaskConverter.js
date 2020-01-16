(function(){var P$=Clazz.newPackage("net.imagej.roi"),I$=[[0,'net.imagej.roi.MaskConversionUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractRRAToRealMaskConverter", null, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$reflect_Type.apply(this, [src, dest]) && $I$(1).isBoolType$net_imglib2_RealRandomAccessible(src) ;
});

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$Class.apply(this, [src, dest]) && $I$(1).isBoolType$net_imglib2_RealRandomAccessible(src) ;
});

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
if (!this.getInputType$().isInstance$O(src)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot convert " + src.getClass$() + " to " + this.getOutputType$() ]);
if (!dest.isAssignableFrom$Class(this.getOutputType$())) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid destination class " + dest]);
return this.convert$TR(src);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
