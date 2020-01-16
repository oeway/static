(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageio.plugins.jpeg2000.J2KImageReadParam']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "J2KImageReadParamJava", null, 'io.scif.media.imageio.plugins.jpeg2000.J2KImageReadParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.noROIDescaling=true;
this.parsingEnabled=true;
}, 1);

C$.$fields$=[['Z',['noROIDescaling','parsingEnabled']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_ImageReadParam', function (param) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
if (param.hasController$()) {
this.setController$javax_imageio_IIOParamController(param.getController$());
}this.setSourceRegion$java_awt_Rectangle(param.getSourceRegion$());
this.setSourceBands$IA(param.getSourceBands$());
this.setDestinationBands$IA(param.getDestinationBands$());
this.setDestination$java_awt_image_BufferedImage(param.getDestination$());
this.setDestinationOffset$java_awt_Point(param.getDestinationOffset$());
this.setSourceSubsampling$I$I$I$I(param.getSourceXSubsampling$(), param.getSourceYSubsampling$(), param.getSubsamplingXOffset$(), param.getSubsamplingYOffset$());
this.setDestinationType$javax_imageio_ImageTypeSpecifier(param.getDestinationType$());
var j2kParam;
if (Clazz.instanceOf(param, "io.scif.media.imageio.plugins.jpeg2000.J2KImageReadParam")) {
j2kParam=param;
} else {
j2kParam=Clazz.new_($I$(1,1));
}this.setDecodingRate$D(j2kParam.getDecodingRate$());
this.setResolution$I(j2kParam.getResolution$());
}, 1);

Clazz.newMeth(C$, 'setNoROIDescaling$Z', function (value) {
this.noROIDescaling=value;
});

Clazz.newMeth(C$, 'getNoROIDescaling$', function () {
return this.noROIDescaling;
});

Clazz.newMeth(C$, 'setParsingEnabled$Z', function (value) {
this.parsingEnabled=value;
});

Clazz.newMeth(C$, 'getParsingEnabled$', function () {
return this.parsingEnabled;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
