(function(){var P$=Clazz.newPackage("io.scif.img"),I$=[[0,'javax.swing.JFileChooser']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ManualReadImg");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var opener=Clazz.new_($I$(1,1).c$$S,[System.getProperty$S("user.home")]);
var result=opener.showOpenDialog$java_awt_Component(null);
if (result == 0) {
_.ManualReadImg.readImg$java_io_File(opener.getSelectedFile$());
}System.exit$I(0);
}, 1);

Clazz.newMeth(C$, 'readImg$java_io_File', function (file) {
var img;
System.out.println$S("file = " + file);
System.out.println$S("Dimensions:");
for (var d=0; d < img.numDimensions$(); d++) {
var axisType=img.axis$I(d);
var axisLength=img.dimension$I(d);
System.out.println$S("\t" + axisLength + " : " + axisType.type$().getLabel$() );
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:42:21 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
