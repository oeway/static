(function(){var P$=Clazz.newPackage("io.scif.gui"),p$1={},I$=[[0,'javax.swing.border.EmptyBorder','javax.swing.BoxLayout','javax.swing.JLabel','java.awt.Dimension','javax.swing.Box','Thread','javax.swing.SwingUtilities','org.scijava.io.location.FileLocation','javax.swing.ImageIcon','io.scif.gui.AWTImageTools','java.awt.image.BufferedImage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PreviewPane", null, 'javax.swing.JPanel', ['java.beans.PropertyChangeListener', 'Runnable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['loaderAlive'],'S',['loadId','lastId','iconText','formatText','resText','npText','typeText','iconTip','formatTip','resTip','zctTip','typeTip'],'O',['logService','org.scijava.log.LogService','initializeService','io.scif.services.InitializeService','reader','io.scif.Reader','loader','Thread','refresher','Runnable','iconLabel','javax.swing.JLabel','+formatLabel','+resLabel','+zctLabel','+typeLabel','icon','javax.swing.ImageIcon']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$javax_swing_JFileChooser', function (context, jc) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
context.inject$O(this);
this.setBorder$javax_swing_border_Border(Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 10, 0, 10]));
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1).c$$java_awt_Container$I,[this, 1]));
this.iconLabel=Clazz.new_($I$(3,1));
this.iconLabel.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[128, -1]));
this.iconLabel.setAlignmentX$F(0.5);
this.add$java_awt_Component(this.iconLabel);
this.add$java_awt_Component($I$(5).createVerticalStrut$I(7));
this.formatLabel=Clazz.new_($I$(3,1));
this.formatLabel.setAlignmentX$F(0.5);
this.add$java_awt_Component(this.formatLabel);
this.add$java_awt_Component($I$(5).createVerticalStrut$I(5));
this.resLabel=Clazz.new_($I$(3,1));
this.resLabel.setAlignmentX$F(0.5);
this.add$java_awt_Component(this.resLabel);
this.zctLabel=Clazz.new_($I$(3,1));
this.zctLabel.setAlignmentX$F(0.5);
this.add$java_awt_Component(this.zctLabel);
this.typeLabel=Clazz.new_($I$(3,1));
this.typeLabel.setAlignmentX$F(0.5);
this.add$java_awt_Component(this.typeLabel);
var font=this.formatLabel.getFont$();
font=font.deriveFont$F(font.getSize2D$() - 3);
this.formatLabel.setFont$java_awt_Font(font);
this.resLabel.setFont$java_awt_Font(font);
this.zctLabel.setFont$java_awt_Font(font);
this.typeLabel.setFont$java_awt_Font(font);
this.icon=null;
this.iconText=this.formatText=this.resText=this.npText=this.typeText="";
this.iconTip=this.formatTip=this.resTip=this.zctTip=this.typeTip=null;
if (jc != null ) {
jc.setAccessory$javax_swing_JComponent(this);
jc.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.refresher=((P$.PreviewPane$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PreviewPane$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['io.scif.gui.PreviewPane'].iconLabel.setIcon$javax_swing_Icon(this.b$['io.scif.gui.PreviewPane'].icon);
this.b$['io.scif.gui.PreviewPane'].iconLabel.setText$S(this.b$['io.scif.gui.PreviewPane'].iconText);
this.b$['io.scif.gui.PreviewPane'].iconLabel.setToolTipText$S(this.b$['io.scif.gui.PreviewPane'].iconTip);
this.b$['io.scif.gui.PreviewPane'].formatLabel.setText$S(this.b$['io.scif.gui.PreviewPane'].formatText);
this.b$['io.scif.gui.PreviewPane'].formatLabel.setToolTipText$S(this.b$['io.scif.gui.PreviewPane'].formatTip);
this.b$['io.scif.gui.PreviewPane'].resLabel.setText$S(this.b$['io.scif.gui.PreviewPane'].resText);
this.b$['io.scif.gui.PreviewPane'].resLabel.setToolTipText$S(this.b$['io.scif.gui.PreviewPane'].resTip);
this.b$['io.scif.gui.PreviewPane'].zctLabel.setText$S(this.b$['io.scif.gui.PreviewPane'].npText);
this.b$['io.scif.gui.PreviewPane'].zctLabel.setToolTipText$S(this.b$['io.scif.gui.PreviewPane'].zctTip);
this.b$['io.scif.gui.PreviewPane'].typeLabel.setText$S(this.b$['io.scif.gui.PreviewPane'].typeText);
this.b$['io.scif.gui.PreviewPane'].typeLabel.setToolTipText$S(this.b$['io.scif.gui.PreviewPane'].typeTip);
});
})()
), Clazz.new_(P$.PreviewPane$1.$init$, [this, null]));
this.loaderAlive=true;
this.loader=Clazz.new_($I$(6,1).c$$Runnable$S,[this, "Preview"]);
this.loader.start$();
}}, 1);

Clazz.newMeth(C$, 'getPreferredSize$', function () {
var prefSize=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
return Clazz.new_($I$(4,1).c$$I$I,[148, prefSize.height]);
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
var prop=e.getPropertyName$();
if (prop.equals$O("JFileChooserDialogIsClosingProperty")) {
this.loaderAlive=false;
}if (!prop.equals$O("SelectedFileChangedProperty")) return;
var f=e.getNewValue$();
if (f != null  && (f.isDirectory$() || !f.exists$() ) ) f=null;
this.loadId=f == null  ? null : f.getAbsolutePath$();
});

Clazz.newMeth(C$, 'run$', function () {
while (this.loaderAlive){
try {
$I$(6).sleep$J(100);
} catch (exc) {
if (Clazz.exceptionOf(exc,"InterruptedException")){
this.logService.info$O$Throwable("", exc);
} else {
throw exc;
}
}
try {
var id=this.loadId;
if (id == this.lastId) continue;
this.lastId=id;
this.icon=null;
this.iconText=id == null  ? "" : "Reading...";
this.formatText=this.resText=this.npText=this.typeText="";
this.iconTip=id;
this.formatTip=this.resTip=this.zctTip=this.typeTip="";
if (id == null ) {
$I$(7).invokeLater$Runnable(this.refresher);
continue;
}try {
this.reader=this.initializeService.initializeReader$org_scijava_io_location_Location(Clazz.new_($I$(8,1).c$$S,[id]));
this.reader.setNormalized$Z(true);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"io.scif.FormatException")){
var exc = e$$;
{
this.logService.debug$O$Throwable("Failed to initialize " + id, exc);
var badFormat=exc.getMessage$().startsWith$S("Unknown file format");
this.iconText="Unsupported " + (badFormat ? "format" : "file");
this.formatText=this.resText="";
$I$(7).invokeLater$Runnable(this.refresher);
this.lastId=null;
continue;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var exc = e$$;
{
this.logService.debug$O$Throwable("Failed to initialize " + id, exc);
this.iconText="Unsupported file";
this.formatText=this.resText="";
$I$(7).invokeLater$Runnable(this.refresher);
this.lastId=null;
continue;
}
} else {
throw e$$;
}
}
if (id != this.loadId) {
$I$(7).invokeLater$Runnable(this.refresher);
continue;
}this.icon=Clazz.new_($I$(9,1).c$$java_awt_Image,[p$1.makeImage$S.apply(this, ["Loading..."])]);
this.iconText="";
var format=this.reader.getFormat$().getFormatName$();
this.formatText=format;
this.formatTip=format;
var iMeta=this.reader.getMetadata$().get$I(0);
this.resText=p$1.getText$io_scif_ImageMetadata$java_util_List.apply(this, [iMeta, iMeta.getAxesPlanar$()]);
this.npText=p$1.getText$io_scif_ImageMetadata$java_util_List.apply(this, [iMeta, iMeta.getAxesNonPlanar$()]);
$I$(7).invokeLater$Runnable(this.refresher);
var planeIndex=(iMeta.getPlaneCount$()/2|0);
var thumbPlane=null;
try {
thumbPlane=this.reader.openPlane$I$J(0, planeIndex);
} catch (exc) {
if (Clazz.exceptionOf(exc,"io.scif.FormatException") || Clazz.exceptionOf(exc,"java.io.IOException")){
this.logService.debug$O$Throwable("Failed to read thumbnail #" + planeIndex + " from " + id , exc);
} else {
throw exc;
}
}
var thumb=$I$(10).openThumbImage$io_scif_Plane$io_scif_Reader$I$JA$I$I$Z(thumbPlane, this.reader, 0, iMeta.getAxesLengthsPlanar$(), (iMeta.getThumbSizeX$()|0), (iMeta.getThumbSizeY$()|0), false);
this.icon=Clazz.new_($I$(9,1).c$$java_awt_Image,[thumb == null  ? p$1.makeImage$S.apply(this, ["Failed"]) : thumb]);
this.iconText="";
$I$(7).invokeLater$Runnable(this.refresher);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
this.logService.info$O$Throwable("", exc);
this.icon=null;
this.iconText="Thumbnail failure";
this.formatText=this.resText=this.npText=this.typeText="";
this.iconTip=this.loadId;
this.formatTip=this.resTip=this.zctTip=this.typeTip="";
$I$(7).invokeLater$Runnable(this.refresher);
} else {
throw exc;
}
}
}
});

Clazz.newMeth(C$, 'getText$io_scif_ImageMetadata$java_util_List', function (meta, axes) {
var text="";
for (var axis, $axis = axes.iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
if (text.length$() > 0) text += " x ";
text += meta.getAxisLength$net_imagej_axis_CalibratedAxis(axis) + " " + axis.type$().getLabel$() ;
}
return text;
}, p$1);

Clazz.newMeth(C$, 'close$', function () {
if (this.reader != null ) {
this.reader.close$();
}});

Clazz.newMeth(C$, 'makeImage$S', function (message) {
var iMeta=this.reader.getMetadata$().get$I(0);
var w=(iMeta.getThumbSizeX$()|0);
var h=(iMeta.getThumbSizeY$()|0);
if (w < 128) w=128;
if (h < 32) h=32;
var image=Clazz.new_($I$(11,1).c$$I$I$I,[w, h, 1]);
var g=image.createGraphics$();
var r=g.getFont$().getStringBounds$S$java_awt_font_FontRenderContext(message, g.getFontRenderContext$());
g.drawString$S$F$F(message, (w - r.width) / 2, (h - r.height) / 2 + r.height);
g.dispose$();
return image;
}, p$1);
C$.$getAnn$ = function(){ return [
[['logService','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['initializeService','io.scif.services.InitializeService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
