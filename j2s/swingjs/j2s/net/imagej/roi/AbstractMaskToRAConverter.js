(function(){var P$=Clazz.newPackage("net.imagej.roi"),p$1={},I$=[[0,'net.imagej.roi.MaskConversionUtil','net.imglib2.roi.mask.integer.RandomAccessibleAsMask','net.imglib2.roi.mask.integer.RandomAccessibleIntervalAsMaskInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractMaskToRAConverter", null, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'canConvert$Class$reflect_Type', function (src, dest) {
return C$.superclazz.prototype.canConvert$Class$reflect_Type.apply(this, [src, dest]) && $I$(1).isBoolType$reflect_Type(dest) && p$1.isWrapperMatch$Class.apply(this, [src])  ;
});

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$reflect_Type.apply(this, [src, dest]) && $I$(1).isBoolType$reflect_Type(dest) && p$1.isWrapperMatch$O.apply(this, [src])  ;
});

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$Class.apply(this, [src, dest]) && p$1.isWrapperMatch$O.apply(this, [src]) ;
});

Clazz.newMeth(C$, 'canConvert$Class$Class', function (src, dest) {
return C$.superclazz.prototype.canConvert$Class$Class.apply(this, [src, dest]) && p$1.isWrapperMatch$Class.apply(this, [src]) ;
});

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
if (!this.getInputType$().isInstance$O(src)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot convert " + src.getClass$() + " to " + this.getOutputType$() ]);
if (!dest.isAssignableFrom$Class(this.getOutputType$())) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid destination class " + dest]);
return this.convert$TM(src);
});

Clazz.newMeth(C$, 'isWrapperMatch$Class', function (src) {
if ((src.equals$O(Clazz.getClass($I$(2))) && !src.equals$O(this.getInputType$()) )) return false;
if (src.equals$O(Clazz.getClass($I$(3))) && !src.equals$O(this.getInputType$()) ) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'isWrapperMatch$O', function (src) {
return p$1.isWrapperMatch$Class.apply(this, [src.getClass$()]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
