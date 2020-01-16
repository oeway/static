(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[[0,'StringBuffer','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.border.EmptyBorder','javax.swing.BoxLayout','javax.swing.Box','javax.swing.JSlider','javax.swing.JLabel','io.scif.gui.AWTImageTools','javax.swing.ImageIcon','javax.swing.JScrollPane','javax.swing.border.BevelBorder','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','org.scijava.io.location.FileLocation','javax.swing.ProgressMonitor','java.awt.image.BufferedImage','io.scif.BufferedImagePlane','Thread','javax.swing.JOptionPane','io.scif.util.FormatTools','java.awt.Cursor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImageViewer", null, 'javax.swing.JFrame', ['java.awt.event.ActionListener', 'javax.swing.event.ChangeListener', 'java.awt.event.KeyListener', 'java.awt.event.MouseMotionListener', 'Runnable', 'java.awt.event.WindowListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.anim=false;
this.fps=10;
this.canCloseReader=true;
this.sb=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['Z',['anim','canCloseReader'],'I',['fps'],'S',['filename'],'O',['context','org.scijava.Context','logService','org.scijava.log.LogService','formatService','io.scif.services.FormatService','initializeService','io.scif.services.InitializeService','guiService','io.scif.gui.GUIService','myReader','io.scif.Reader','myWriter','io.scif.Writer','pane','javax.swing.JPanel','icon','javax.swing.ImageIcon','iconLabel','javax.swing.JLabel','sliderPanel','javax.swing.JPanel','nSlider','javax.swing.JSlider','probeLabel','javax.swing.JLabel','fileView','javax.swing.JMenuItem','+fileSave','images','java.awt.image.BufferedImage[]','sb','StringBuffer']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.superclazz.c$$S.apply(this,["SCIFIO Viewer"]);C$.$init$.apply(this);
context.inject$O(this);
this.setDefaultCloseOperation$I(2);
this.addWindowListener$java_awt_event_WindowListener(this);
this.pane=Clazz.new_($I$(2,1));
this.pane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.setContentPane$java_awt_Container(this.pane);
this.setSize$I$I(350, 350);
this.sliderPanel=Clazz.new_($I$(2,1));
this.sliderPanel.setVisible$Z(false);
this.sliderPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(4,1).c$$I$I$I$I,[5, 3, 5, 3]));
this.sliderPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1).c$$java_awt_Container$I,[this.sliderPanel, 1]));
this.pane.add$S$java_awt_Component("South", this.sliderPanel);
var nPanel=Clazz.new_($I$(2,1));
nPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1).c$$java_awt_Container$I,[nPanel, 0]));
this.sliderPanel.add$java_awt_Component(nPanel);
this.sliderPanel.add$java_awt_Component($I$(6).createVerticalStrut$I(2));
this.nSlider=Clazz.new_($I$(7,1).c$$I$I,[1, 1]);
this.nSlider.setEnabled$Z(false);
this.nSlider.addChangeListener$javax_swing_event_ChangeListener(this);
nPanel.add$java_awt_Component(Clazz.new_($I$(8,1).c$$S,["N"]));
nPanel.add$java_awt_Component($I$(6).createHorizontalStrut$I(3));
nPanel.add$java_awt_Component(this.nSlider);
var ztcPanel=Clazz.new_($I$(2,1));
ztcPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1).c$$java_awt_Container$I,[ztcPanel, 0]));
this.sliderPanel.add$java_awt_Component(ztcPanel);
var dummy=$I$(9).makeImage$BAA$I$I$Z(Clazz.array(Byte.TYPE, [1, 1]), 1, 1, false);
this.icon=Clazz.new_($I$(10,1).c$$java_awt_Image,[dummy]);
this.iconLabel=Clazz.new_($I$(8,1).c$$javax_swing_Icon$I,[this.icon, 2]);
this.iconLabel.setVerticalAlignment$I(1);
this.pane.add$java_awt_Component(Clazz.new_($I$(11,1).c$$java_awt_Component,[this.iconLabel]));
this.probeLabel=Clazz.new_($I$(8,1).c$$S,[" "]);
this.probeLabel.setHorizontalAlignment$I(0);
this.probeLabel.setBorder$javax_swing_border_Border(Clazz.new_($I$(12,1).c$$I,[0]));
this.pane.add$S$java_awt_Component("North", this.probeLabel);
this.iconLabel.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
var menubar=Clazz.new_($I$(13,1));
var file=Clazz.new_($I$(14,1).c$$S,["File"]);
file.setMnemonic$C("f");
menubar.add$javax_swing_JMenu(file);
var fileOpen=Clazz.new_($I$(15,1).c$$S,["Open..."]);
fileOpen.setMnemonic$C("o");
fileOpen.setActionCommand$S("open");
fileOpen.addActionListener$java_awt_event_ActionListener(this);
file.add$javax_swing_JMenuItem(fileOpen);
this.fileSave=Clazz.new_($I$(15,1).c$$S,["Save..."]);
this.fileSave.setMnemonic$C("s");
this.fileSave.setEnabled$Z(false);
this.fileSave.setActionCommand$S("save");
this.fileSave.addActionListener$java_awt_event_ActionListener(this);
file.add$javax_swing_JMenuItem(this.fileSave);
this.fileView=Clazz.new_($I$(15,1).c$$S,["View Metadata..."]);
var fileExit=Clazz.new_($I$(15,1).c$$S,["Exit"]);
fileExit.setMnemonic$C("x");
fileExit.setActionCommand$S("exit");
fileExit.addActionListener$java_awt_event_ActionListener(this);
file.add$javax_swing_JMenuItem(fileExit);
var options=Clazz.new_($I$(14,1).c$$S,["Options"]);
options.setMnemonic$C("p");
menubar.add$javax_swing_JMenu(options);
var optionsFPS=Clazz.new_($I$(15,1).c$$S,["Frames per Second..."]);
optionsFPS.setMnemonic$C("f");
optionsFPS.setActionCommand$S("fps");
optionsFPS.addActionListener$java_awt_event_ActionListener(this);
options.add$javax_swing_JMenuItem(optionsFPS);
var help=Clazz.new_($I$(14,1).c$$S,["Help"]);
help.setMnemonic$C("h");
menubar.add$javax_swing_JMenu(help);
var helpAbout=Clazz.new_($I$(15,1).c$$S,["About..."]);
helpAbout.setMnemonic$C("a");
helpAbout.setActionCommand$S("about");
helpAbout.addActionListener$java_awt_event_ActionListener(this);
help.add$javax_swing_JMenuItem(helpAbout);
this.nSlider.addKeyListener$java_awt_event_KeyListener(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$Z', function (context, canCloseReader) {
C$.c$$org_scijava_Context.apply(this, [context]);
this.canCloseReader=canCloseReader;
}, 1);

Clazz.newMeth(C$, 'open$S', function (id) {
this.open$org_scijava_io_location_Location(Clazz.new_($I$(16,1).c$$S,[id]));
});

Clazz.newMeth(C$, 'open$org_scijava_io_location_Location', function (id) {
this.wait$Z(true);
try {
this.canCloseReader=true;
this.myReader=this.initializeService.initializeReader$org_scijava_io_location_Location(id);
var planeCount=this.myReader.getMetadata$().get$I(0).getPlaneCount$();
var progress=Clazz.new_($I$(17,1).c$$java_awt_Component$O$S$I$I,[this, "Reading " + id, null, 0, 1]);
progress.setProgress$I(1);
var img=Clazz.array($I$(18), [(planeCount|0)]);
for (var planeIndex=0; planeIndex < planeCount; planeIndex++) {
if (progress.isCanceled$()) break;
var plane=this.myReader.openPlane$I$J(0, planeIndex);
img[(planeIndex|0)]=$I$(9).openImage$io_scif_Plane$io_scif_Reader$I(plane, this.myReader, 0);
}
progress.setProgress$I(2);
this.setImages$io_scif_Reader$java_awt_image_BufferedImageA(this.myReader, img);
this.myReader.close$Z(true);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"io.scif.FormatException")){
var exc = e$$;
{
this.logService.info$O$Throwable("", exc);
this.wait$Z(false);
return;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var exc = e$$;
{
this.logService.info$O$Throwable("", exc);
this.wait$Z(false);
return;
}
} else {
throw e$$;
}
}
this.wait$Z(false);
});

Clazz.newMeth(C$, 'save$S', function (id) {
this.save$org_scijava_io_location_Location(Clazz.new_($I$(16,1).c$$S,[id]));
});

Clazz.newMeth(C$, 'save$org_scijava_io_location_Location', function (id) {
if (this.images == null ) return;
this.wait$Z(true);
try {
this.myWriter.setDest$org_scijava_io_location_Location(id);
var stack=this.myWriter.canDoStacks$();
var progress=Clazz.new_($I$(17,1).c$$java_awt_Component$O$S$I$I,[this, "Saving " + id, null, 0, stack ? this.images.length : 1]);
if (stack) {
for (var i=0; i < this.images.length; i++) {
progress.setProgress$I(i);
var canceled=progress.isCanceled$();
this.myWriter.savePlane$I$J$io_scif_Plane(0, i, this.getPlane$java_awt_image_BufferedImage(this.images[i]));
if (canceled) break;
}
progress.setProgress$I(this.images.length);
} else {
this.myWriter.savePlane$I$J$io_scif_Plane(0, 0, this.getPlane$java_awt_image_BufferedImage(this.getImage$()));
progress.setProgress$I(1);
}this.myWriter.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"io.scif.FormatException") || Clazz.exceptionOf(exc,"java.io.IOException")){
this.logService.info$O$Throwable("", exc);
} else {
throw exc;
}
}
this.wait$Z(false);
});

Clazz.newMeth(C$, 'setImages$java_awt_image_BufferedImageA', function (img) {
this.setImages$io_scif_Reader$java_awt_image_BufferedImageA(null, img);
});

Clazz.newMeth(C$, 'setImages$io_scif_Reader$java_awt_image_BufferedImageA', function (reader, img) {
this.filename=reader == null  ? null : reader.getCurrentLocation$().getName$();
this.myReader=reader;
this.images=img;
this.fileView.setEnabled$Z(true);
this.fileSave.setEnabled$Z(true);
this.nSlider.removeChangeListener$javax_swing_event_ChangeListener(this);
this.nSlider.setValue$I(1);
this.nSlider.setMaximum$I(this.images.length);
this.nSlider.setEnabled$Z(this.images.length > 1);
this.nSlider.addChangeListener$javax_swing_event_ChangeListener(this);
this.sliderPanel.setVisible$Z(this.images.length > 1);
this.updateLabel$I$I(-1, -1);
this.sb.setLength$I(0);
if (this.filename != null ) {
this.sb.append$S(reader.getCurrentLocation$().getName$());
this.sb.append$S(" ");
}var format=reader == null  ? null : reader.getFormat$().getFormatName$();
if (format != null ) {
this.sb.append$S("(");
this.sb.append$S(format);
this.sb.append$S(")");
this.sb.append$S(" ");
}if (this.filename != null  || format != null  ) this.sb.append$S("- ");
this.sb.append$S("SCIFIO Viewer");
this.setTitle$S(this.sb.toString());
if (this.images != null ) this.icon.setImage$java_awt_Image(this.images[0]);
this.pack$();
});

Clazz.newMeth(C$, 'getImage$', function () {
var ndx=this.getPlaneIndex$();
return this.images == null  || ndx >= this.images.length  ? null : this.images[ndx];
});

Clazz.newMeth(C$, 'getPlane$java_awt_image_BufferedImage', function (image) {
var plane=Clazz.new_($I$(19,1));
plane.setData$java_awt_image_BufferedImage(image);
return plane;
});

Clazz.newMeth(C$, 'getPlaneIndex$', function () {
return this.nSlider.getValue$() - 1;
});

Clazz.newMeth(C$, 'setVisible$Z', function (visible) {
C$.superclazz.prototype.setVisible$Z.apply(this, [visible]);
Clazz.new_($I$(20,1).c$$Runnable,[this]).start$();
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var cmd=e.getActionCommand$();
if ("open".equals$O(cmd)) {
this.wait$Z(true);
var chooser=this.guiService.buildFileChooser$java_util_Collection(this.formatService.getAllFormats$());
this.wait$Z(false);
var rval=chooser.showOpenDialog$java_awt_Component(this);
if (rval == 0) {
var file=chooser.getSelectedFile$();
if (file != null ) this.open$S$io_scif_Reader(file.getAbsolutePath$(), this.myReader);
}} else if ("save".equals$O(cmd)) {
this.wait$Z(true);
var chooser=this.guiService.buildFileChooser$java_util_Collection(this.formatService.getOutputFormats$());
this.wait$Z(false);
var rval=chooser.showSaveDialog$java_awt_Component(this);
if (rval == 0) {
if (this.myWriter != null ) {
try {
this.myWriter.close$();
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
this.logService.error$Throwable(e1);
} else {
throw e1;
}
}
}var file=chooser.getSelectedFile$();
try {
this.myWriter=this.initializeService.initializeWriter$io_scif_Metadata$org_scijava_io_location_Location(this.myReader.getMetadata$(), Clazz.new_($I$(16,1).c$$java_io_File,[file]));
} catch (e1) {
if (Clazz.exceptionOf(e1,"io.scif.FormatException") || Clazz.exceptionOf(e1,"java.io.IOException")){
this.logService.error$O(e);
} else {
throw e1;
}
}
if (file != null ) this.save$S$io_scif_Writer(file.getAbsolutePath$(), this.myWriter);
}} else if ("exit".equals$O(cmd)) this.dispose$();
 else if ("fps".equals$O(cmd)) {
this.setDefaultCloseOperation$I(3);
var result=$I$(21).showInputDialog$java_awt_Component$O$O(this, "Animate using space bar. How many frames per second?", "" + this.fps);
try {
this.fps=Integer.parseInt$S(result);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
this.logService.debug$O$Throwable("Could not parse fps " + this.fps, exc);
} else {
throw exc;
}
}
} else if ("about".equals$O(cmd)) {
this.setDefaultCloseOperation$I(3);
var msg="<html>SCIFIO core for reading and converting file formats.<br>Copyright (C) 2005 - 2013 Open Microscopy Environment:<ul><li>Board of Regents of the University of Wisconsin-Madison</li><li>Glencoe Software, Inc.</li><li>University of Dundee</li></ul><br><br>See <a href=\"http://loci.wisc.edu/software/scifio\">http://loci.wisc.edu/software/scifio</a><br>for help with using SCIFIO.";
$I$(21).showMessageDialog$java_awt_Component$O$S$I(null, "<html>SCIFIO core for reading and converting file formats.<br>Copyright (C) 2005 - 2013 Open Microscopy Environment:<ul><li>Board of Regents of the University of Wisconsin-Madison</li><li>Glencoe Software, Inc.</li><li>University of Dundee</li></ul><br><br>See <a href=\"http://loci.wisc.edu/software/scifio\">http://loci.wisc.edu/software/scifio</a><br>for help with using SCIFIO.", "SCIFIO", 1);
}});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
var outOfBounds=false;
this.updateLabel$I$I(-1, -1);
var image=false ? null : this.getImage$();
if (image == null ) {
this.iconLabel.setIcon$javax_swing_Icon(null);
this.iconLabel.setText$S("No image plane");
} else {
this.icon.setImage$java_awt_Image(image);
this.iconLabel.setIcon$javax_swing_Icon(this.icon);
this.iconLabel.setText$S(null);
}});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
if (e.getKeyChar$() == " ") this.anim=!this.anim;
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
this.updateLabel$I$I(e.getX$(), e.getY$());
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
this.updateLabel$I$I(e.getX$(), e.getY$());
});

Clazz.newMeth(C$, 'run$', function () {
while (this.isVisible$()){
try {
$I$(20).sleep$J((1000/this.fps|0));
} catch (exc) {
if (Clazz.exceptionOf(exc,"InterruptedException")){
this.logService.debug$O$Throwable("", exc);
} else {
throw exc;
}
}
}
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
try {
if (this.myWriter != null ) {
this.myWriter.close$();
}if (this.canCloseReader && this.myReader != null  ) {
this.myReader.close$();
}} catch (io) {
if (Clazz.exceptionOf(io,"java.io.IOException")){
} else {
throw io;
}
}
});

Clazz.newMeth(C$, 'updateLabel$I$I', function (x, y) {
if (this.images == null ) return;
var ndx=this.getPlaneIndex$();
this.sb.setLength$I(0);
if (this.images.length > 1) {
this.sb.append$S("N=");
this.sb.append$I(ndx + 1);
this.sb.append$S("/");
this.sb.append$I(this.images.length);
}var image=this.images[ndx];
var w=image == null  ? -1 : image.getWidth$();
var h=image == null  ? -1 : image.getHeight$();
if (x >= w) x=w - 1;
if (y >= h) y=h - 1;
if (x >= 0 && y >= 0 ) {
if (this.images.length > 1) this.sb.append$S("; ");
this.sb.append$S("X=");
this.sb.append$I(x);
if (w > 0) {
this.sb.append$S("/");
this.sb.append$I(w);
}this.sb.append$S("; Y=");
this.sb.append$I(y);
if (h > 0) {
this.sb.append$S("/");
this.sb.append$I(h);
}if (image != null ) {
var r=image.getRaster$();
var pix=r.getPixel$I$I$DA(x, y, null);
this.sb.append$S("; value");
this.sb.append$S(pix.length > 1 ? "s=(" : "=");
for (var i=0; i < pix.length; i++) {
if (i > 0) this.sb.append$S(", ");
this.sb.append$D(pix[i]);
}
if (pix.length > 1) this.sb.append$S(")");
this.sb.append$S("; type=");
var pixelType=$I$(9).getPixelType$java_awt_image_BufferedImage(image);
this.sb.append$S($I$(22).getPixelTypeString$I(pixelType));
}}this.sb.append$S(" ");
this.probeLabel.setText$S(this.sb.toString());
});

Clazz.newMeth(C$, 'wait$Z', function (wait) {
this.setCursor$java_awt_Cursor(wait ? $I$(23).getPredefinedCursor$I(3) : null);
});

Clazz.newMeth(C$, 'open$S$io_scif_Reader', function (id, r) {
((P$.ImageViewer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageViewer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.b$['io.scif.gui.ImageViewer'].myReader.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
this.b$['io.scif.gui.ImageViewer'].logService.info$O$Throwable("", exc);
} else {
throw exc;
}
}
this.b$['io.scif.gui.ImageViewer'].myReader=this.$finals$.r;
this.b$['io.scif.gui.ImageViewer'].open$S.apply(this.b$['io.scif.gui.ImageViewer'], [this.$finals$.id]);
});
})()
), Clazz.new_($I$(20,1).c$$S, [this, {id:id,r:r}, "ImageViewer-Opener"],P$.ImageViewer$1)).start$();
});

Clazz.newMeth(C$, 'save$S$io_scif_Writer', function (id, w) {
((P$.ImageViewer$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageViewer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.b$['io.scif.gui.ImageViewer'].myWriter.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
this.b$['io.scif.gui.ImageViewer'].logService.info$O$Throwable("", exc);
} else {
throw exc;
}
}
this.b$['io.scif.gui.ImageViewer'].myWriter=this.$finals$.w;
this.b$['io.scif.gui.ImageViewer'].save$S.apply(this.b$['io.scif.gui.ImageViewer'], [this.$finals$.id]);
});
})()
), Clazz.new_($I$(20,1).c$$S, [this, {w:w,id:id}, "ImageViewer-Saver"],P$.ImageViewer$2)).start$();
});
C$.$getAnn$ = function(){ return [
[['context','org.scijava.Context',null,['org.scijava.plugin.Parameter']],['']],
  [['logService','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']],
  [['initializeService','io.scif.services.InitializeService',null,['org.scijava.plugin.Parameter']],['']],
  [['guiService','io.scif.gui.GUIService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
