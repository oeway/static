(function(){var P$=Clazz.newPackage("org.scijava.ui.dnd"),I$=[[0,'java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultDragAndDropData", null, 'org.scijava.ui.dnd.AbstractDragAndDropData');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['mime','org.scijava.ui.dnd.MIMEType','data','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$org_scijava_ui_dnd_MIMEType$O', function (context, mimeType, data) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(context);
this.mime=mimeType;
this.data=data;
}, 1);

Clazz.newMeth(C$, 'isSupported$org_scijava_ui_dnd_MIMEType', function (mimeType) {
return this.mime.equals$O(mimeType);
});

Clazz.newMeth(C$, 'getData$org_scijava_ui_dnd_MIMEType', function (mimeType) {
return this.isSupported$org_scijava_ui_dnd_MIMEType(mimeType) ? this.data : null;
});

Clazz.newMeth(C$, 'getMIMETypes$', function () {
return $I$(1).singletonList$TT(this.mime);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
