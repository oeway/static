(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.image.AreaAveragingScaleFilter','java.awt.image.ReplicateScaleFilter','java.awt.image.FilteredImageSource','java.awt.Toolkit']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Image");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.UndefinedProperty= Clazz.new_();
}

Clazz.newMeth(C$, '$init$', function () {
this.accelerationPriority=0.5;
}, 1);

C$.$fields$=[['F',['accelerationPriority']]
,['O',['UndefinedProperty','java.lang.Object']]]

Clazz.newMeth(C$, 'getScaledInstance$I$I$I', function (width, height, hints) {
var filter;
if ((hints & (20)) != 0) {
filter=Clazz.new_($I$(1,1).c$$I$I,[width, height]);
} else {
filter=Clazz.new_($I$(2,1).c$$I$I,[width, height]);
}var prod;
prod=Clazz.new_($I$(3,1).c$$java_awt_image_ImageProducer$java_awt_image_ImageFilter,[this.getSource$(), filter]);
return $I$(4).getDefaultToolkit$().createImage$java_awt_image_ImageProducer(prod);
});

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'setAccelerationPriority$F', function (priority) {
});

Clazz.newMeth(C$, 'getAccelerationPriority$', function () {
return this.accelerationPriority;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
