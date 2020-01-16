(function(){var P$=Clazz.newPackage("org.scijava.ui.dnd"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "DragAndDropData");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isSupported$Class', function (type) {
return this.getMIMEType$Class(type) != null ;
});

Clazz.newMeth(C$, 'getData$Class', function (type) {
var mimeType=this.getMIMEType$Class(type);
if (mimeType == null ) return null;
var data=this.getData$org_scijava_ui_dnd_MIMEType(mimeType);
return data;
});

Clazz.newMeth(C$, 'getMIMEType$Class', function (type) {
for (var mimeType, $mimeType = this.getMIMETypes$().iterator$(); $mimeType.hasNext$()&&((mimeType=($mimeType.next$())),1);) {
if (mimeType.isCompatible$Class(type)) return mimeType;
}
return null;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
