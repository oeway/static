(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.jpeg2000"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "J2KImageWriteParam", null, 'javax.imageio.ImageWriteParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numDecompositionLevels=5;
this.encodingRate=1.7976931348623157E308;
this.lossless=true;
this.componentTransformation=true;
this.filter="w5x3";
this.codeBlockSize=Clazz.array(Integer.TYPE, -1, [64, 64]);
this.progressionType="layer";
this.EPH=false;
this.SOP=false;
this.writeCodeStreamOnly=false;
}, 1);

C$.$fields$=[['Z',['lossless','componentTransformation','EPH','SOP','writeCodeStreamOnly'],'D',['encodingRate'],'I',['numDecompositionLevels'],'S',['filter','progressionType'],'O',['codeBlockSize','int[]']]]

Clazz.newMeth(C$, 'c$$java_util_Locale', function (locale) {
;C$.superclazz.c$$java_util_Locale.apply(this,[locale]);C$.$init$.apply(this);
p$1.setDefaults.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
p$1.setDefaults.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'setDefaults', function () {
this.canOffsetTiles=true;
this.canWriteTiles=true;
this.canOffsetTiles=true;
this.compressionTypes=Clazz.array(String, -1, ["JPEG2000"]);
this.canWriteCompressed=true;
this.tilingMode=2;
}, p$1);

Clazz.newMeth(C$, 'setNumDecompositionLevels$I', function (numDecompositionLevels) {
if (numDecompositionLevels < 0 || numDecompositionLevels > 32 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["numDecompositionLevels < 0 || numDecompositionLevels > 32"]);
}this.numDecompositionLevels=numDecompositionLevels;
});

Clazz.newMeth(C$, 'getNumDecompositionLevels$', function () {
return this.numDecompositionLevels;
});

Clazz.newMeth(C$, 'setEncodingRate$D', function (rate) {
this.encodingRate=rate;
if (this.encodingRate != 1.7976931348623157E308 ) {
this.lossless=false;
this.filter="w9x7";
} else {
this.lossless=true;
this.filter="w5x3";
}});

Clazz.newMeth(C$, 'getEncodingRate$', function () {
return this.encodingRate;
});

Clazz.newMeth(C$, 'setLossless$Z', function (lossless) {
this.lossless=lossless;
});

Clazz.newMeth(C$, 'getLossless$', function () {
return this.lossless;
});

Clazz.newMeth(C$, 'setFilter$S', function (value) {
this.filter=value;
});

Clazz.newMeth(C$, 'getFilter$', function () {
return this.filter;
});

Clazz.newMeth(C$, 'setComponentTransformation$Z', function (value) {
this.componentTransformation=value;
});

Clazz.newMeth(C$, 'getComponentTransformation$', function () {
return this.componentTransformation;
});

Clazz.newMeth(C$, 'setCodeBlockSize$IA', function (value) {
this.codeBlockSize=value;
});

Clazz.newMeth(C$, 'getCodeBlockSize$', function () {
return this.codeBlockSize;
});

Clazz.newMeth(C$, 'setSOP$Z', function (value) {
this.SOP=value;
});

Clazz.newMeth(C$, 'getSOP$', function () {
return this.SOP;
});

Clazz.newMeth(C$, 'setEPH$Z', function (value) {
this.EPH=value;
});

Clazz.newMeth(C$, 'getEPH$', function () {
return this.EPH;
});

Clazz.newMeth(C$, 'setProgressionType$S', function (value) {
this.progressionType=value;
});

Clazz.newMeth(C$, 'getProgressionType$', function () {
return this.progressionType;
});

Clazz.newMeth(C$, 'setWriteCodeStreamOnly$Z', function (value) {
this.writeCodeStreamOnly=value;
});

Clazz.newMeth(C$, 'getWriteCodeStreamOnly$', function () {
return this.writeCodeStreamOnly;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
