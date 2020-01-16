(function(){var P$=Clazz.newPackage("io.scif.img.converters"),I$=[[0,'io.scif.util.FormatTools','org.scijava.util.Bytes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PlanarAccessConverter", null, 'io.scif.img.converters.AbstractPlaneConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imgUtilService','io.scif.img.ImgUtilityService']]]

Clazz.newMeth(C$, 'populatePlane$io_scif_Reader$I$I$BA$net_imagej_ImgPlus$io_scif_config_SCIFIOConfig', function (reader, imageIndex, planeIndex, plane, planarImg, config) {
var m=reader.getMetadata$();
var planarAccess=this.imgUtilService.getPlanarAccess$net_imagej_ImgPlus(planarImg);
var pixelType=m.get$I(imageIndex).getPixelType$();
var bpp=$I$(1).getBytesPerPixel$I(pixelType);
var fp=$I$(1).isFloatingPoint$I(pixelType);
var little=m.get$I(imageIndex).isLittleEndian$();
var planeArray=$I$(2).makeArray$BA$I$Z$Z(plane, bpp, fp, little);
if (planeArray === plane ) {
var planeCopy=Clazz.array(Byte.TYPE, [plane.length]);
System.arraycopy$O$I$O$I$I(plane, 0, planeCopy, 0, plane.length);
planeArray=planeCopy;
}planarAccess.setPlane$I$TA(planeIndex, this.imgUtilService.makeArray$O(planeArray));
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.img.converters.PlanarAccessConverter',null,['org.scijava.plugin.Plugin']],['type="io.scif.img.converters.PlaneConverter.class" name="PlanarAccess" ']],
  [['imgUtilService','io.scif.img.ImgUtilityService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:44 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
