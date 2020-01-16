(function(){var P$=Clazz.newPackage("net.imagej.app"),p$1={},I$=[[0,'java.util.LinkedList','org.scijava.util.Colors','net.imagej.axis.AxisType','net.imagej.axis.Axes','java.io.File','org.scijava.util.MersenneTwisterFast','net.imagej.ChannelCollection','net.imagej.DrawingTool',['net.imagej.render.TextRenderer','.TextJustification'],'java.util.Calendar','java.util.regex.Pattern','java.io.FileInputStream','java.io.DataInputStream','java.io.BufferedReader','java.io.InputStreamReader','org.scijava.util.ColorRGB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AboutImageJ", null, 'org.scijava.command.ContextCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.attributionStrings=Clazz.new_(1,{E:"String"},$I$(1,1));
this.textColor=$I$(2).YELLOW;
this.outlineColor=$I$(2).BLACK;
this.largestFontSize=35;
this.textChannels=null;
this.outlineChannels=null;
}, 1);

C$.$fields$=[['I',['largestFontSize'],'O',['log','org.scijava.log.LogService','appService','org.scijava.app.AppService','ioSrv','org.scijava.io.IOService','dataSrv','net.imagej.DatasetService','dispSrv','org.scijava.display.DisplayService','rendSrv','net.imagej.render.RenderingService','display','org.scijava.display.Display','attributionStrings','java.util.List','textColor','org.scijava.util.ColorRGB','+outlineColor','textChannels','net.imagej.ChannelCollection','+outlineChannels']]]

Clazz.newMeth(C$, 'run$', function () {
var dataset=p$1.createDataset.apply(this, []);
p$1.drawTextOverImage$net_imagej_Dataset.apply(this, [dataset]);
var title=p$1.getApp.apply(this, []).getTitle$();
this.display=this.dispSrv.createDisplay$S$O("About " + title, dataset);
});

Clazz.newMeth(C$, 'getDisplay$', function () {
return this.display;
});

Clazz.newMeth(C$, 'createDataset', function () {
var imageFile=p$1.getRandomAboutImagePath.apply(this, []);
var source=imageFile != null  ? imageFile.getAbsolutePath$() : "About ImageJ&pixelType=uint16&axisTypes=X,Y&axisLengths=512,512.fake";
var title="About " + p$1.getApp.apply(this, []).getTitle$();
var ds=null;
try {
var obj=this.ioSrv.open$S(source);
if (Clazz.instanceOf(obj, "net.imagej.Dataset")) ds=obj;
 else {
this.log.error$O(obj.getClass$().getName$() + " is not a Dataset: " + source );
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log.error$Throwable(e);
} else {
throw e;
}
}
if (ds != null ) {
var validImage=true;
validImage&=(ds.numDimensions$() == 3);
if (validImage) {
p$1.loadAttributes$java_io_File.apply(this, [imageFile]);
} else {
ds=null;
}}if (ds == null ) {
this.log.warn$O("Could not load a 3 channel unsigned 8 bit image as backdrop");
ds=this.dataSrv.create$JA$S$net_imagej_axis_AxisTypeA$I$Z$Z(Clazz.array(Long.TYPE, -1, [500, 500, 3]), title, Clazz.array($I$(3), -1, [$I$(4).X, $I$(4).Y, $I$(4).CHANNEL]), 8, false, false);
}ds.setName$S(title);
try {
ds.setRGBMerged$Z(true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
this.log.debug$Throwable(e);
} else {
throw e;
}
}
return ds;
}, p$1);

Clazz.newMeth(C$, 'getRandomAboutImagePath', function () {
var imagesDir=Clazz.new_($I$(5,1).c$$java_io_File$S,[this.appService.getApp$().getBaseDirectory$(), "images"]);
var aboutDir=Clazz.new_($I$(5,1).c$$java_io_File$S,[imagesDir, "about"]);
if (!aboutDir.exists$()) {
this.log.warn$O("About folder '" + aboutDir.getPath$() + "' does not exist." );
return null;
}var aboutFiles=aboutDir.listFiles$java_io_FileFilter(((P$.AboutImageJ$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AboutImageJ$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FileFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$java_io_File','accept$'], function (pathname) {
return !pathname.getName$().toLowerCase$().endsWith$S(".txt");
});
})()
), Clazz.new_(P$.AboutImageJ$1.$init$, [this, null])));
var rng=Clazz.new_($I$(6,1));
var index=rng.nextInt$I(aboutFiles.length);
return aboutFiles[index];
}, p$1);

Clazz.newMeth(C$, 'drawTextOverImage$net_imagej_Dataset', function (ds) {
this.textChannels=Clazz.new_($I$(7,1).c$$org_scijava_util_ColorRGB,[this.textColor]);
this.outlineChannels=Clazz.new_($I$(7,1).c$$org_scijava_util_ColorRGB,[this.outlineColor]);
var tool=Clazz.new_($I$(8,1).c$$net_imagej_Dataset$net_imagej_render_RenderingService,[ds, this.rendSrv]);
tool.setUAxis$I(0);
tool.setVAxis$I(1);
var width=ds.dimension$I(0);
var x=(width/2|0);
var y=50;
tool.setTextAntialiasing$Z(true);
tool.setFontSize$I(this.largestFontSize);
p$1.drawOutlinedText$net_imagej_DrawingTool$J$J$S$net_imagej_render_TextRenderer_TextJustification$net_imagej_ChannelCollection$net_imagej_ChannelCollection.apply(this, [tool, x, y, p$1.getApp.apply(this, []).getTitle$(), $I$(9).CENTER, this.textChannels, this.outlineChannels]);
y+=(5 * tool.getFontSize$()/4|0);
tool.setFontSize$I((Math.round(0.6 * this.largestFontSize)|0));
for (var line, $line = p$1.getTextBlock.apply(this, []).iterator$(); $line.hasNext$()&&((line=($line.next$())),1);) {
p$1.drawOutlinedText$net_imagej_DrawingTool$J$J$S$net_imagej_render_TextRenderer_TextJustification$net_imagej_ChannelCollection$net_imagej_ChannelCollection.apply(this, [tool, x, y, line, $I$(9).CENTER, this.textChannels, this.outlineChannels]);
y+=(5 * tool.getFontSize$()/4|0);
}
}, p$1);

Clazz.newMeth(C$, 'drawOutlinedText$net_imagej_DrawingTool$J$J$S$net_imagej_render_TextRenderer_TextJustification$net_imagej_ChannelCollection$net_imagej_ChannelCollection', function (tool, x, y, text, just, textValues, outlineValues) {
tool.setChannels$net_imagej_ChannelCollection(outlineValues);
for (var dx=-1; dx <= 1; dx++) {
for (var dy=-1; dy <= 1; dy++) {
if (dx == 0 && dy == 0 ) continue;
tool.drawText$J$J$S$net_imagej_render_TextRenderer_TextJustification(x + dx, y + dy, text, just);
}
}
tool.setChannels$net_imagej_ChannelCollection(textValues);
tool.drawText$J$J$S$net_imagej_render_TextRenderer_TextJustification(x, y, text, just);
}, p$1);

Clazz.newMeth(C$, 'getTextBlock', function () {
var mft=p$1.getApp.apply(this, []).getManifest$();
var stringList=Clazz.new_(1,{E:"String"},$I$(1,1));
stringList.add$TE("Version: " + p$1.getApp.apply(this, []).getVersion$());
if (mft != null ) {
var build=mft.getImplementationBuild$();
stringList.add$TE("Build: " + (build == null  || build.length$() < 10  ? build : build.substring$I$I(0, 10)));
stringList.add$TE("Date: " + mft.getImplementationDate$());
}stringList.add$TE("Open source image processing software");
var year=$I$(10).getInstance$().get$I(1);
stringList.add$TE("Copyright 2010 - " + year);
stringList.add$TE("http://imagej.net/Contributors");
stringList.addAll$java_util_Collection(this.attributionStrings);
return stringList;
}, p$1);

Clazz.newMeth(C$, 'loadAttributes$java_io_File', function (baseFile) {
if (baseFile == null ) return;
var fileName=baseFile.getAbsolutePath$() + ".txt";
var file=Clazz.new_($I$(5,1).c$$S,[fileName]);
if (file.exists$()) {
var attributionPattern=$I$(11).compile$S("attribution\\s+(.*)");
var colorPattern=$I$(11).compile$S("color\\s+([0-9]+)\\s+([0-9]+)\\s+([0-9]+)");
var fontsizePattern=$I$(11).compile$S("fontsize\\s+([1-9][0-9]*)");
try {
var fstream=Clazz.new_($I$(12,1).c$$java_io_File,[file]);
var $in=Clazz.new_($I$(13,1).c$$java_io_InputStream,[fstream]);
var br=Clazz.new_($I$(14,1).c$$java_io_Reader,[Clazz.new_($I$(15,1).c$$java_io_InputStream,[$in])]);
var strLine;
while ((strLine=br.readLine$()) != null ){
var attributionMatcher=attributionPattern.matcher$CharSequence(strLine);
if (attributionMatcher.matches$()) {
this.attributionStrings.add$TE(attributionMatcher.group$I(1).trim$());
}var colorMatcher=colorPattern.matcher$CharSequence(strLine);
if (colorMatcher.matches$()) {
try {
var r=Integer.parseInt$S(colorMatcher.group$I(1));
var g=Integer.parseInt$S(colorMatcher.group$I(2));
var b=Integer.parseInt$S(colorMatcher.group$I(3));
this.textColor=Clazz.new_($I$(16,1).c$$I$I$I,[r, g, b]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}var fontsizeMatcher=fontsizePattern.matcher$CharSequence(strLine);
if (fontsizeMatcher.matches$()) {
try {
this.largestFontSize=Integer.parseInt$S(fontsizeMatcher.group$I(1));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}
$in.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}, p$1);

Clazz.newMeth(C$, 'getApp', function () {
return this.appService.getApp$();
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.app.AboutImageJ',null,['org.scijava.plugin.Plugin']],['type="org.scijava.command.Command.class" label="About ImageJ..." iconPath="/icons/commands/information.png" menu={"@Menu(label = Help, weight = 1.0E7, mnemonic = h)"  "@Menu(label = About ImageJ..., weight = 43)"  } headless="true" attrs={"@Attr(name = no-legacy)"  "@Attr(name = app-command)"  } ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['appService','org.scijava.app.AppService',null,['org.scijava.plugin.Parameter']],['']],
  [['ioSrv','org.scijava.io.IOService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataSrv','net.imagej.DatasetService',null,['org.scijava.plugin.Parameter']],['']],
  [['dispSrv','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['rendSrv','net.imagej.render.RenderingService',null,['org.scijava.plugin.Parameter']],['']],
  [['display','org.scijava.display.Display',null,['org.scijava.plugin.Parameter']],['type="org.scijava.ItemIO.OUTPUT" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
