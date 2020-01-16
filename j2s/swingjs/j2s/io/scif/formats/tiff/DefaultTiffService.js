(function(){var P$=Clazz.newPackage("io.scif.formats.tiff"),I$=[[0,'org.scijava.util.Bytes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultTiffService", null, 'org.scijava.service.AbstractService', 'io.scif.formats.tiff.TiffService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'difference$BA$io_scif_formats_tiff_IFD', function (input, ifd) {
var predictor=ifd.getIFDIntValue$I$I(317, 1);
if (predictor == 2) {
this.log.debug$O("performing horizontal differencing");
var bitsPerSample=ifd.getBitsPerSample$();
var width=ifd.getImageWidth$();
var little=ifd.isLittleEndian$();
var planarConfig=ifd.getPlanarConfiguration$();
var bytes=ifd.getBytesPerSample$()[0];
var len=bytes * (planarConfig == 2 ? 1 : bitsPerSample.length);
for (var b=input.length - bytes; b >= 0; b-=bytes) {
if ((b/len|0) % width == 0) continue;
var value=$I$(1).toInt$BA$I$I$Z(input, b, bytes, little);
value-=$I$(1).toInt$BA$I$I$Z(input, b - len, bytes, little);
$I$(1).unpack$J$BA$I$I$Z(value, input, b, bytes, little);
}
} else if (predictor != 1) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unknown Predictor (" + predictor + ")" ]);
}});

Clazz.newMeth(C$, 'undifference$BA$io_scif_formats_tiff_IFD', function (input, ifd) {
var predictor=ifd.getIFDIntValue$I$I(317, 1);
if (predictor == 2) {
this.log.debug$O("reversing horizontal differencing");
var bitsPerSample=ifd.getBitsPerSample$();
var len=bitsPerSample.length;
var width=ifd.getImageWidth$();
var little=ifd.isLittleEndian$();
var planarConfig=ifd.getPlanarConfiguration$();
var bytes=ifd.getBytesPerSample$()[0];
if (planarConfig == 2 || bitsPerSample[len - 1] == 0 ) len=1;
len*=bytes;
for (var b=0; b <= input.length - bytes; b+=bytes) {
if ((b/len|0) % width == 0) continue;
var value=$I$(1).toInt$BA$I$I$Z(input, b, bytes, little);
value+=$I$(1).toInt$BA$I$I$Z(input, b - len, bytes, little);
$I$(1).unpack$J$BA$I$I$Z(value, input, b, bytes, little);
}
} else if (predictor != 1) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unknown Predictor (" + predictor + ")" ]);
}});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.tiff.DefaultTiffService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
