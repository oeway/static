(function(){var P$=Clazz.newPackage("org.scijava.ui"),I$=[[0,'java.io.File','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "UserInterface", null, null, ['org.scijava.plugin.RichPlugin', 'org.scijava.Disposable']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'show$O', function (o) {
this.show$S$O(null, o);
});

Clazz.newMeth(C$, 'getDesktop$', function () {
return null;
});

Clazz.newMeth(C$, 'getApplicationFrame$', function () {
return null;
});

Clazz.newMeth(C$, 'getToolBar$', function () {
return null;
});

Clazz.newMeth(C$, 'getStatusBar$', function () {
return null;
});

Clazz.newMeth(C$, 'getConsolePane$', function () {
return null;
});

Clazz.newMeth(C$, 'getSystemClipboard$', function () {
return null;
});

Clazz.newMeth(C$, 'chooseFile$java_io_File$S', function (file, style) {
var title;
if (style.equals$O("directory")) title="Choose a directory";
 else if (style.equals$O("open")) title="Open";
 else if (style.equals$O("save")) title="Save";
 else title="Choose a file";
return this.chooseFile$S$java_io_File$S(title, file, style);
});

Clazz.newMeth(C$, 'chooseFile$S$java_io_File$S', function (title, file, style) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'chooseFiles$java_io_File$java_io_FileA$java_io_FileFilter$S', function (parent, files, filter, style) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'chooseFiles$java_io_File$java_util_List$java_io_FileFilter$S', function (parent, fileList, filter, style) {
var initialFiles=fileList.toArray$TTA(Clazz.array($I$(1), [fileList.size$()]));
var chosenFiles=this.chooseFiles$java_io_File$java_io_FileA$java_io_FileFilter$S(parent, initialFiles, filter, style);
return chosenFiles == null  ? null : $I$(2).asList$TTA(chosenFiles);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
