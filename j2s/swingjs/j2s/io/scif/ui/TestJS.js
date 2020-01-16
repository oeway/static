(function(){var P$=Clazz.newPackage("io.scif.ui"),I$=[[0,'net.imglib2.type.numeric.integer.UnsignedIntType','net.imglib2.type.numeric.integer.UnsignedByteType','net.imglib2.position.FunctionRandomAccessible','javax.swing.JFrame','javax.swing.JPanel','java.awt.BorderLayout','net.imglib2.view.Views','net.imglib2.FinalInterval','net.imglib2.display.screenimage.awt.ARGBScreenImage','java.util.ArrayList','net.imglib2.converter.RealARGBConverter','net.imglib2.display.projector.composite.CompositeXYProjector','io.scif.ui.TestJS','javax.swing.JButton','java.io.File','io.scif.config.SCIFIOConfig',['io.scif.config.SCIFIOConfig','.ImgMode'],'io.scif.img.IO','org.scijava.io.location.FileLocation','javax.swing.BoxLayout','javax.imageio.ImageIO','javax.swing.JScrollBar','javax.swing.Timer','net.imagej.axis.Axes','net.imagej.display.ColorTables','net.imglib2.converter.RealLUTConverter','javax.swing.ImageIcon','javax.swing.JLabel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TestJS");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
System.out.println$Z(4294967295 == Clazz.new_($I$(1,1).c$$J,[-1]).getIntegerLong$());
System.out.println$Z(4294967295 == Clazz.new_($I$(1,1).c$$J,[-1]).getIntegerLong$());
};
C$.lastValue=-1;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['lastValue'],'O',['bi','java.awt.image.BufferedImage','timer','javax.swing.Timer']]]

Clazz.newMeth(C$, 'main$SA', function (args) {
var ndim=2;
var scale=Clazz.array(Integer.TYPE, -1, [10]);
var t=Clazz.new_($I$(2,1));
var typeSupplier=((P$.TestJS$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestJS$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (this.$finals$.t);});
})()
), Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedByteType"},P$.TestJS$lambda1.$init$, [this, {t:t}]));
var $function=((P$.TestJS$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestJS$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (l, type) {
var x=200 - l.getLongPosition$I(0) - (this.$finals$.scale[0]/4|0) ;
var y=200 - l.getLongPosition$I(1) - (this.$finals$.scale[0]/4|0) ;
var result=(Math.cos(x / (this.$finals$.scale[0] / 10.0)) + Math.sin(y / (this.$finals$.scale[0] / 10.0))) / 2;
type.setReal$F(((255 * result)|0));
});
})()
), Clazz.new_(1,{T:"net.imglib2.Localizable",U:"net.imglib2.type.numeric.integer.UnsignedByteType"},P$.TestJS$lambda2.$init$, [this, {scale:scale}]));
var ra=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedByteType"},$I$(3,1).c$$I$java_util_function_BiConsumer$java_util_function_Supplier,[2, $function, typeSupplier]);
var frame=Clazz.new_($I$(4,1).c$$S,["ImgLib2"]);
var contentPane=Clazz.new_($I$(5,1));
contentPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
frame.setContentPane$java_awt_Container(contentPane);
var canvas=((P$.TestJS$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TestJS$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
var w=this.getSize$().width;
var h=this.getSize$().height;
var rai=$I$(7).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.$finals$.ra, Clazz.new_($I$(8,1).c$$JA,[[w, h]]));
var image=Clazz.new_($I$(9,1).c$$I$I,[this.getSize$().width, this.getSize$().height]);
var converters=Clazz.new_(1,{E:"net.imglib2.converter.Converter"},$I$(10,1));
var converter=Clazz.new_(1,{R:"net.imglib2.type.numeric.integer.UnsignedByteType"},$I$(11,1).c$$D$D,[0, 255]);
converters.add$TE(converter);
var proj=Clazz.new_(1,{A:"net.imglib2.type.numeric.integer.UnsignedByteType"},$I$(12,1).c$$net_imglib2_RandomAccessibleInterval$net_imglib2_IterableInterval$java_util_ArrayList$I,[rai, image, converters, -1]);
proj.map$();
$I$(13).bi=image.image$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver($I$(13).bi, 0, 0, null);
});
})()
), Clazz.new_($I$(5,1), [this, {ra:ra}],P$.TestJS$1));
var loader=Clazz.new_($I$(14,1).c$$S,["Open File"]);
loader.addActionListener$java_awt_event_ActionListener(((P$.TestJS$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TestJS$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
$I$(13).timer.stop$();
try {
var file=Clazz.new_($I$(15,1).c$$S,["data/out_benchmark_v1_2018_x64y64z5c2s1t1.ids.tif"]);
var fmt=Clazz.new_($I$(16,1)).imgOpenerSetImgModes$io_scif_config_SCIFIOConfig_ImgModeA([$I$(17).AUTO]);
var list=$I$(18).open$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(Clazz.new_($I$(19,1).c$$java_io_File,[file]), fmt);
System.out.println$S(list.size$() + " images found");
var img=list.get$I(0);
P$.TestJS.display$net_imagej_ImgPlus(img);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.out.println$S("???");
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.TestJS$2.$init$, [this, null])));
contentPane.add$java_awt_Component$O(canvas, "Center");
var buttons=Clazz.new_($I$(5,1));
buttons.setLayout$java_awt_LayoutManager(Clazz.new_($I$(20,1).c$$java_awt_Container$I,[buttons, 0]));
buttons.add$java_awt_Component(loader);
var saver=Clazz.new_($I$(14,1).c$$S,["Save PNG"]);
saver.addActionListener$java_awt_event_ActionListener(((P$.TestJS$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TestJS$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
try {
$I$(13).timer.stop$();
var f=Clazz.new_($I$(15,1).c$$S,["data/test.png"]);
$I$(21).write$java_awt_image_RenderedImage$S$java_io_File($I$(13).bi, "PNG", f);
System.out.println$S("image saved as " + f.getAbsolutePath$());
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
});
})()
), Clazz.new_(P$.TestJS$3.$init$, [this, null])));
buttons.add$java_awt_Component(saver);
contentPane.add$java_awt_Component$O(buttons, "North");
var slider=Clazz.new_($I$(22,1).c$$I$I$I$I$I,[0, 10, 0, 10, 1000]);
slider.addAdjustmentListener$java_awt_event_AdjustmentListener(((P$.TestJS$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestJS$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.AdjustmentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'adjustmentValueChanged$', function (e) {
this.$finals$.scale[0]=e.getValue$();
this.$finals$.canvas.invalidate$();
this.$finals$.canvas.repaint$();
});
})()
), Clazz.new_(P$.TestJS$lambda3.$init$, [this, {canvas:canvas,scale:scale}])));
contentPane.add$java_awt_Component$O(slider, "South");
frame.setBounds$I$I$I$I(100, 100, 500, 500);
frame.setVisible$Z(true);
C$.timer=Clazz.new_($I$(23,1).c$$I$java_awt_event_ActionListener,[100, ((P$.TestJS$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TestJS$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if ($I$(13).lastValue > 0 && this.$finals$.slider.getValue$() != $I$(13).lastValue  || this.$finals$.slider.getValue$() >= 1000 ) {
$I$(13).timer.stop$();
return;
}this.$finals$.slider.setValue$I(Math.min($I$(13).lastValue=this.$finals$.slider.getValue$() + 1, 1000));
});
})()
), Clazz.new_(P$.TestJS$4.$init$, [this, {slider:slider}]))]);
C$.timer.start$();
}, 1);

Clazz.newMeth(C$, 'display$net_imagej_ImgPlus', function (img) {
var width=img.dimension$I(0);
var height=img.dimension$I(1);
var cIndex=img.dimensionIndex$net_imagej_axis_AxisType($I$(24).CHANNEL);
var channels=img.dimension$I(cIndex);
System.out.println$S("Data is " + width + " x " + height + " x " + channels );
var scaledWidth=(Math.min(width, 2000)|0);
var scaledHeight=(Math.min(height, 2000)|0);
var converters=Clazz.new_(1,{E:"net.imglib2.converter.Converter"},$I$(10,1));
for (var c=0; c < channels; c++) {
var colorTable;
switch (c) {
case 0:
colorTable=$I$(25).RED;
break;
case 1:
colorTable=$I$(25).GREEN;
break;
case 2:
colorTable=$I$(25).BLUE;
break;
case 3:
colorTable=$I$(25).CYAN;
break;
case 4:
colorTable=$I$(25).MAGENTA;
break;
case 5:
colorTable=$I$(25).YELLOW;
break;
default:
colorTable=$I$(25).GRAYS;
break;
}
var min=0;
var max=255;
converters.add$TE(Clazz.new_(1,{R:"Object"},$I$(26,1).c$$D$D$net_imglib2_display_ColorTable,[0.0, 255.0, colorTable]));
}
var screenImage=Clazz.new_($I$(9,1).c$$I$I,[scaledWidth, scaledHeight]);
var proj=Clazz.new_(1,{A:"Object"},$I$(12,1).c$$net_imglib2_RandomAccessibleInterval$net_imglib2_IterableInterval$java_util_ArrayList$I,[img, screenImage, converters, cIndex]);
proj.setComposite$Z(true);
System.out.println$S("Mapping data to screen image...");
proj.map$();
C$.bi=screenImage.image$();
System.out.println$S("Displaying screen image...");
var frame=Clazz.new_($I$(4,1).c$$S,[img.getName$()]);
var imageIcon=Clazz.new_($I$(27,1).c$$java_awt_Image$S,[C$.bi, img.getName$()]);
frame.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
frame.getContentPane$().add$java_awt_Component$O(Clazz.new_($I$(28,1).c$$javax_swing_Icon,[imageIcon]), "Center");
frame.setDefaultCloseOperation$I(2);
frame.pack$();
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
