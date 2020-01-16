(function(){var P$=Clazz.newPackage("java.awt.datatransfer"),I$=[[0,'java.awt.datatransfer.DataFlavor','java.io.StringReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StringSelection", null, null, ['java.awt.datatransfer.Transferable', 'java.awt.datatransfer.ClipboardOwner']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.flavors=Clazz.array($I$(1), -1, [$I$(1).stringFlavor, $I$(1).plainTextFlavor]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['data']]
,['O',['flavors','java.awt.datatransfer.DataFlavor[]']]]

Clazz.newMeth(C$, 'c$$S', function (data) {
;C$.$init$.apply(this);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$', function () {
return C$.flavors.clone$();
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor', function (flavor) {
for (var i=0; i < C$.flavors.length; i++) {
if (flavor.equals$java_awt_datatransfer_DataFlavor(C$.flavors[i])) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor', function (flavor) {
if (flavor.equals$java_awt_datatransfer_DataFlavor(C$.flavors[0])) {
return this.data;
} else if (flavor.equals$java_awt_datatransfer_DataFlavor(C$.flavors[1])) {
return Clazz.new_($I$(2,1).c$$S,[this.data == null  ? "" : this.data]);
} else {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
}});

Clazz.newMeth(C$, ['lostOwnership$java_awt_datatransfer_Clipboard$java_awt_datatransfer_Transferable','lostOwnership$'], function (clipboard, contents) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
