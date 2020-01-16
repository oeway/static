(function(){var P$=Clazz.newPackage("io.scif.img"),I$=[[0,'org.scijava.Context','io.scif.config.SCIFIOConfig',['io.scif.config.SCIFIOConfig','.ImgMode'],'io.scif.img.ImgOpener','org.scijava.io.location.FileLocation','io.scif.gui.ImageViewer','java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ViewImg");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'viewImg$java_io_File', function (file) {
var c=Clazz.new_($I$(1,1).c$$I,[3]);
var config=Clazz.new_($I$(2,1)).imgOpenerSetImgModes$io_scif_config_SCIFIOConfig_ImgModeA([$I$(3).ARRAY]);
System.out.println$S("reading " + file);
var cl=Clazz.getClass($I$(4));
var loc=Clazz.new_($I$(5,1).c$$S,[file.getAbsolutePath$()]);
var vwr=Clazz.new_($I$(6,1).c$$org_scijava_Context,[c]);
vwr.setVisible$Z(true);
vwr.open$org_scijava_io_location_Location(loc);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var file=Clazz.new_($I$(7,1).c$$S,["data/benchmark_v1_2018_x64y64z5c2s1t1.ics"]);
System.out.println$S("reading " + file.getAbsolutePath$());
C$.viewImg$java_io_File(file);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
