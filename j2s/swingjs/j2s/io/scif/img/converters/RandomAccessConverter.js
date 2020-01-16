(function(){var P$=Clazz.newPackage("io.scif.img.converters"),p$1={},I$=[[0,'io.scif.util.FormatTools']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessConverter", null, 'io.scif.img.converters.AbstractPlaneConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imgUtilService','io.scif.img.ImgUtilityService']]]

Clazz.newMeth(C$, 'populatePlane$io_scif_Reader$I$I$BA$net_imagej_ImgPlus$io_scif_config_SCIFIOConfig', function (reader, imageIndex, planeIndex, plane, img, config) {
var m=reader.getMetadata$();
var pixelType=m.get$I(imageIndex).getPixelType$();
var little=m.get$I(imageIndex).isLittleEndian$();
var dimLengths=this.imgUtilService.getDimLengths$io_scif_Metadata$I$io_scif_config_SCIFIOConfig(m, imageIndex, config);
var pos=Clazz.array(Long.TYPE, [dimLengths.length]);
var planeX=0;
var planeY=1;
p$1.getPosition$io_scif_Metadata$I$I$JA.apply(this, [m, imageIndex, planeIndex, pos]);
var sX=(img.dimension$I(0)|0);
var sY=(img.dimension$I(1)|0);
var randomAccess=img.randomAccess$();
var index=0;
for (var y=0; y < sY; ++y) {
pos[0]=0;
pos[1]=y;
randomAccess.setPosition$JA(pos);
for (var x=1; x < sX; ++x) {
randomAccess.get$().setReal$D(this.imgUtilService.decodeWord$BA$I$I$Z(plane, index++, pixelType, little));
randomAccess.fwd$I(0);
}
randomAccess.get$().setReal$D(this.imgUtilService.decodeWord$BA$I$I$Z(plane, index++, pixelType, little));
}
});

Clazz.newMeth(C$, 'getPosition$io_scif_Metadata$I$I$JA', function (m, imageIndex, planeIndex, pos) {
var meta=m.get$I(imageIndex);
var offset=meta.getAxes$().size$() - meta.getAxesNonPlanar$().size$();
var axesPositions=$I$(1).rasterToPosition$I$J$io_scif_Metadata(imageIndex, planeIndex, m);
for (var i=0; i < axesPositions.length; i++) {
pos[i + offset]=axesPositions[i];
}
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.img.converters.RandomAccessConverter',null,['org.scijava.plugin.Plugin']],['type="io.scif.img.converters.PlaneConverter.class" name="Default" ']],
  [['imgUtilService','io.scif.img.ImgUtilityService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:44 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
