(function(){var P$=Clazz.newPackage("net.imglib2.display.projector.specialized"),I$=[[0,'net.imglib2.util.IntervalIndexer','net.imglib2.display.projector.specialized.PlanarImgContainerSamplerImpl']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PlanarImgXYShortProjector", null, 'net.imglib2.display.projector.AbstractProjector2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isSigned'],'D',['$min','normalizationFactor'],'O',['source','net.imglib2.img.planar.PlanarImg','targetArray','short[]','dims','long[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarImg$net_imglib2_img_array_ArrayImg$D$D', function (source, target, normalizationFactor, min) {
;C$.superclazz.c$$I.apply(this,[source.numDimensions$()]);C$.$init$.apply(this);
this.isSigned=source.firstElement$().getMinValue$() < 0 ;
this.targetArray=target.update$O(null).getCurrentStorageArray$();
this.normalizationFactor=normalizationFactor;
this.$min=min;
this.dims=Clazz.array(Long.TYPE, [this.n]);
source.dimensions$JA(this.dims);
this.source=source;
}, 1);

Clazz.newMeth(C$, 'map$', function () {
var minCopy=this.$min;
var offset=0;
var planeIndex;
if (this.position.length > 2) {
var tmpPos=Clazz.array(Long.TYPE, [this.position.length - 2]);
var tmpDim=Clazz.array(Long.TYPE, [this.position.length - 2]);
for (var i=0; i < tmpDim.length; i++) {
tmpPos[i]=this.position[i + 2];
tmpDim[i]=this.source.dimension$I(i + 2);
}
planeIndex=($I$(1).positionToIndex$JA$JA(tmpPos, tmpDim)|0);
} else {
planeIndex=0;
}var sourceArray=this.source.update$O(Clazz.new_($I$(2,1).c$$I,[planeIndex])).getCurrentStorageArray$();
System.arraycopy$O$I$O$I$I(sourceArray, 0, this.targetArray, 0, this.targetArray.length);
if (this.isSigned) {
for (var i=0; i < this.targetArray.length; i++) {
this.targetArray[i]=((this.targetArray[i] - 32768)|0);
}
minCopy += 32768;
}if (this.normalizationFactor != 1 ) {
for (var i=0; i < this.targetArray.length; i++) {
this.targetArray[i]=(Math.min(65535, Math.max(0, (Math.round(((this.targetArray[i] & 65535) - minCopy) * this.normalizationFactor))))|0);
}
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
