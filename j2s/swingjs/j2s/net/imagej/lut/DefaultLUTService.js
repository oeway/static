(function(){var P$=Clazz.newPackage("net.imagej.lut"),p$1={},I$=[[0,'net.imagej.util.AppUtils','java.io.FileInputStream','java.io.ByteArrayInputStream','java.io.BufferedInputStream','net.imglib2.type.numeric.integer.UnsignedByteType','net.imagej.axis.AxisType','net.imagej.axis.Axes','java.util.ArrayList','org.scijava.MenuPath','org.scijava.MenuEntry','java.util.HashMap','org.scijava.command.CommandInfo','org.scijava.table.TableLoader','net.imglib2.display.ColorTable8','java.io.DataInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultLUTService", null, 'org.scijava.service.AbstractService', 'net.imagej.lut.LUTService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['logService','org.scijava.log.LogService','moduleService','org.scijava.module.ModuleService','datasetService','net.imagej.DatasetService','displayService','org.scijava.display.DisplayService','imageDisplayService','net.imagej.display.ImageDisplayService']]]

Clazz.newMeth(C$, 'findLUTs$', function () {
return $I$(1).findResources$S$S(".*\\.lut$", "luts");
});

Clazz.newMeth(C$, 'isLUT$java_io_File', function (file) {
return file.getAbsolutePath$().toLowerCase$().endsWith$S(".lut");
});

Clazz.newMeth(C$, 'loadLUT$java_io_File', function (file) {
var is=Clazz.new_($I$(2,1).c$$java_io_File,[file]);
var length=(Math.min(file.length$(), 2147483647)|0);
var colorTable;
try {
colorTable=this.loadLUT$java_io_InputStream$I(is, length);
} finally {
is.close$();
}
return colorTable;
});

Clazz.newMeth(C$, 'loadLUT$java_net_URL', function (url) {
var is=url.openStream$();
var colorTable;
try {
colorTable=this.loadLUT$java_io_InputStream(is);
} finally {
is.close$();
}
return colorTable;
});

Clazz.newMeth(C$, 'loadLUT$java_io_InputStream', function (is) {
var bytes=Clazz.array(Byte.TYPE, [655360]);
var length=0;
while (true){
var r=is.read$BA$I$I(bytes, length, bytes.length - length);
if (r < 0) break;
length+=r;
}
return this.loadLUT$java_io_InputStream$I(Clazz.new_($I$(3,1).c$$BA$I$I,[bytes, 0, length]), length);
});

Clazz.newMeth(C$, 'loadLUT$java_io_InputStream$I', function (is, length) {
var lut=null;
var bufferedStr=null;
try {
bufferedStr=Clazz.new_($I$(4,1).c$$java_io_InputStream,[is]);
bufferedStr.mark$I(length);
if (length > 768) {
lut=p$1.nihImageBinaryLUT$java_io_InputStream.apply(this, [bufferedStr]);
bufferedStr.reset$();
}if (lut == null  && (length == 0 || length == 768  || length == 970 ) ) {
lut=p$1.legacyBinaryLUT$java_io_InputStream.apply(this, [bufferedStr]);
bufferedStr.reset$();
}if (lut == null  && length > 768 ) {
lut=p$1.legacyTextLUT$java_io_BufferedInputStream.apply(this, [bufferedStr]);
bufferedStr.reset$();
}if (lut == null ) {
lut=p$1.modernLUT$java_io_InputStream.apply(this, [bufferedStr]);
}} finally {
if (bufferedStr != null ) bufferedStr.close$();
is.close$();
}
return lut;
});

Clazz.newMeth(C$, 'createDataset$S$net_imglib2_display_ColorTable', function (title, colorTable) {
var dataset=this.datasetService.create$TT$JA$S$net_imagej_axis_AxisTypeA(Clazz.new_($I$(5,1)), Clazz.array(Long.TYPE, -1, [256, 32]), title, Clazz.array($I$(6), -1, [$I$(7).X, $I$(7).Y]));
p$1.rampFill$net_imagej_Dataset.apply(this, [dataset]);
if (dataset.getColorTableCount$() == 0) dataset.initializeColorTables$I(1);
dataset.setColorTable$net_imglib2_display_ColorTable$I(colorTable, 0);
return dataset;
});

Clazz.newMeth(C$, 'applyLUT$net_imglib2_display_ColorTable$net_imagej_display_ImageDisplay', function (colorTable, display) {
var view=this.imageDisplayService.getActiveDatasetView$net_imagej_display_ImageDisplay(display);
if (view == null ) return;
var channel=view.getIntPosition$net_imagej_axis_AxisType($I$(7).CHANNEL);
view.setColorTable$net_imglib2_display_ColorTable$I(colorTable, channel);
display.update$();
});

Clazz.newMeth(C$, 'initialize$', function () {
this.moduleService.getIndex$().addLater$org_scijava_object_LazyObjects(((P$.DefaultLUTService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultLUTService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.scijava.object.LazyObjects', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'get$', function () {
var luts=this.b$['net.imagej.lut.DefaultLUTService'].findLUTs$.apply(this.b$['net.imagej.lut.DefaultLUTService'], []);
var modules=Clazz.new_(1,{E:"org.scijava.module.ModuleInfo"},$I$(8,1));
for (var key, $key = luts.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
modules.add$TE(p$1.createInfo$S$java_net_URL.apply(this.b$['net.imagej.lut.DefaultLUTService'], [key, luts.get$O(key)]));
}
return modules;
});
})()
), Clazz.new_(P$.DefaultLUTService$1.$init$, [this, null])));
});

Clazz.newMeth(C$, 'createInfo$S$java_net_URL', function (key, url) {
var subPaths=key.split$S("/");
var menuPath=Clazz.new_($I$(9,1));
menuPath.add$TE(Clazz.new_($I$(10,1).c$$S,["Image"]));
menuPath.add$TE(Clazz.new_($I$(10,1).c$$S,["Lookup Tables"]));
for (var i=0; i < subPaths.length - 1; i++) {
menuPath.add$TE(Clazz.new_($I$(10,1).c$$S,[subPaths[i]]));
}
var leaf=Clazz.new_($I$(10,1).c$$S,[p$1.tableName$S.apply(this, [subPaths[subPaths.length - 1]])]);
leaf.setWeight$D(50);
menuPath.add$TE(leaf);
var presets=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(11,1));
presets.put$TK$TV("tableURL", url);
var info=Clazz.new_($I$(12,1).c$$S,["net.imagej.plugins.commands.misc.ApplyLookupTable"]);
info.setPresets$java_util_Map(presets);
info.setMenuPath$org_scijava_MenuPath(menuPath);
return info;
}, p$1);

Clazz.newMeth(C$, 'tableName$S', function (filename) {
var ext=filename.lastIndexOf$S(".lut");
return filename.substring$I$I(0, ext);
}, p$1);

Clazz.newMeth(C$, 'modernLUT$java_io_InputStream', function (is) {
return null;
}, p$1);

Clazz.newMeth(C$, 'nihImageBinaryLUT$java_io_InputStream', function (is) {
return p$1.oldBinaryLUT$Z$java_io_InputStream.apply(this, [false, is]);
}, p$1);

Clazz.newMeth(C$, 'legacyBinaryLUT$java_io_InputStream', function (is) {
return p$1.oldBinaryLUT$Z$java_io_InputStream.apply(this, [true, is]);
}, p$1);

Clazz.newMeth(C$, 'legacyTextLUT$java_io_BufferedInputStream', function (is) {
var table=Clazz.new_($I$(13,1)).valuesFromTextFile$java_io_BufferedInputStream(is);
if (table == null ) return null;
var reds=Clazz.array(Byte.TYPE, [256]);
var greens=Clazz.array(Byte.TYPE, [256]);
var blues=Clazz.array(Byte.TYPE, [256]);
var cols=table.getColumnCount$();
var rows=table.getRowCount$();
if (cols < 3 || cols > 4  || rows < 256  || rows > 258 ) return null;
var x=cols == 4 ? 1 : 0;
var y=rows > 256 ? 1 : 0;
for (var r=0; r < 256; r++) {
reds[r]=((table.getValue$I$I(x + 0, y + r)|0)|0);
greens[r]=((table.getValue$I$I(x + 1, y + r)|0)|0);
blues[r]=((table.getValue$I$I(x + 2, y + r)|0)|0);
}
return Clazz.new_($I$(14,1).c$$BAA,[[reds, greens, blues]]);
}, p$1);

Clazz.newMeth(C$, 'oldBinaryLUT$Z$java_io_InputStream', function (raw, is) {
var f=Clazz.new_($I$(15,1).c$$java_io_InputStream,[is]);
var nColors=256;
if (!raw) {
var id=f.readInt$();
if (id != 1229147980) {
return null;
}f.readShort$();
nColors=f.readShort$();
f.readShort$();
f.readShort$();
f.readLong$();
f.readLong$();
f.readInt$();
}var reds=Clazz.array(Byte.TYPE, [256]);
var greens=Clazz.array(Byte.TYPE, [256]);
var blues=Clazz.array(Byte.TYPE, [256]);
f.read$BA$I$I(reds, 0, nColors);
f.read$BA$I$I(greens, 0, nColors);
f.read$BA$I$I(blues, 0, nColors);
if (nColors < 256) p$1.interpolate$BA$BA$BA$I.apply(this, [reds, greens, blues, nColors]);
return Clazz.new_($I$(14,1).c$$BAA,[[reds, greens, blues]]);
}, p$1);

Clazz.newMeth(C$, 'interpolate$BA$BA$BA$I', function (reds, greens, blues, nColors) {
var r=Clazz.array(Byte.TYPE, [nColors]);
var g=Clazz.array(Byte.TYPE, [nColors]);
var b=Clazz.array(Byte.TYPE, [nColors]);
System.arraycopy$O$I$O$I$I(reds, 0, r, 0, nColors);
System.arraycopy$O$I$O$I$I(greens, 0, g, 0, nColors);
System.arraycopy$O$I$O$I$I(blues, 0, b, 0, nColors);
var scale=nColors / 256.0;
var i1;
var i2;
var fraction;
for (var i=0; i < 256; i++) {
i1=((i * scale)|0);
i2=i1 + 1;
if (i2 == nColors) i2=nColors - 1;
fraction=i * scale - i1;
reds[i]=((((1.0 - fraction) * (r[i1] & 255) + fraction * (r[i2] & 255))|0)|0);
greens[i]=((((1.0 - fraction) * (g[i1] & 255) + fraction * (g[i2] & 255))|0)|0);
blues[i]=((((1.0 - fraction) * (b[i1] & 255) + fraction * (b[i2] & 255))|0)|0);
}
}, p$1);

Clazz.newMeth(C$, 'rampFill$net_imagej_Dataset', function (dataset) {
var accessor=dataset.getImgPlus$().randomAccess$();
for (var x=0; x < 256; x++) {
accessor.setPosition$I$I(x, 0);
for (var y=0; y < 32; y++) {
accessor.setPosition$I$I(y, 1);
accessor.get$().setReal$F(x);
}
}
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.lut.DefaultLUTService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" priority="100.0" ']],
  [['logService','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']],
  [['datasetService','net.imagej.DatasetService',null,['org.scijava.plugin.Parameter']],['']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
