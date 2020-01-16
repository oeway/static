(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.encoder"),I$=[[0,'io.scif.jj2000.j2k.entropy.encoder.EBCOTRateAllocator','io.scif.jj2000.j2k.entropy.encoder.LayersInfo','java.io.StreamTokenizer','java.io.StringReader','Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PostCompRateAllocator", null, 'io.scif.jj2000.j2k.image.ImgDataAdapter');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["Aptype", "[<tile idx>] res|layer|res-pos|pos-comp|comp-pos [res_start comp_start layer_end res_end comp_end prog] [[res_start comp_start ly_end res_end comp_end prog] ...] [[<tile-component idx>] ...]", "Specifies which type of progression should be used when generating the codestream. The \'res\' value generates a resolution progressive codestream with the number of layers specified by \'Alayers\' option. The \'layer\' value generates a layer progressive codestream with multiple layers. In any case the rate-allocation algorithm optimizes for best quality in each layer. The quality measure is mean squared error (MSE) or a weighted version of it (WMSE). If no progression type is specified or imposed by other modules, the default value is \'layer\'.\nIt is also possible to describe progression order changes. In this case, \'res_start\' is the index (from 0) of the first resolution level, \'comp_start\' is the index (from 0) of the first component, \'ly_end\' is the index (from 0) of the first layer not included, \'res_end\' is the index (from 0) of the first resolution level not included, \'comp_end\' is index (from 0) of the first component not included and \'prog\' is the progression type to be used for the rest of the tile/image. Several progression order changes can be specified, one after the other.", null]), Clazz.array(String, -1, ["Alayers", "<rate> [+<layers>] [<rate [+<layers>] [...]]", "Explicitly specifies the codestream layer formation parameters. The <rate> parameter specifies the bitrate to which the first layer should be optimized. The <layers> parameter, if present, specifies the number of extra layers that should be added for scalability. These extra layers are not optimized. Any extra <rate> and <layers> parameters add more layers, in the same way. An additional layer is always added at the end, which is optimized to the overall target bitrate of the bit stream. Any layers (optimized or not) whose target bitrate is higher that the overall target bitrate are silently ignored. The bitrates of the extra layers that are added through the <layers> parameter are approximately log-spaced between the other target bitrates. If several <rate> [+<layers>] constructs appear the <rate> parameters must appear in increasing order. The rate allocation algorithm ensures that all coded layers have a minimal reasonable size, if not these layers are silently ignored.", "0.015 +20 2.0 +10"])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numLayers'],'O',['src','io.scif.jj2000.j2k.entropy.encoder.CodedCBlkDataSrcEnc','wp','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriteParamJava','bsWriter','io.scif.jj2000.j2k.codestream.writer.CodestreamWriter','headEnc','io.scif.jj2000.j2k.codestream.writer.HeaderEncoder']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_entropy_encoder_CodedCBlkDataSrcEnc$I$io_scif_jj2000_j2k_codestream_writer_CodestreamWriter$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava', function (src, nl, bw, wp) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[src]);C$.$init$.apply(this);
this.src=src;
this.wp=wp;
this.numLayers=nl;
this.bsWriter=bw;
}, 1);

Clazz.newMeth(C$, 'setHeaderEncoder$io_scif_jj2000_j2k_codestream_writer_HeaderEncoder', function (headEnc) {
this.headEnc=headEnc;
});

Clazz.newMeth(C$, 'getNumLayers$', function () {
return this.numLayers;
});

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$, 'createInstance$io_scif_jj2000_j2k_entropy_encoder_CodedCBlkDataSrcEnc$F$io_scif_jj2000_j2k_codestream_writer_CodestreamWriter$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava', function (src, rate, bw, wp) {
var lyropt=wp.getLayers$();
if (lyropt == null ) {
if (wp.getROIs$().getSpecified$() == null ) {
lyropt="res";
} else {
lyropt="layer";
}}var lyrs=C$.parseAlayers$S$F(lyropt, rate);
var nTiles=wp.getNumTiles$();
var nComp=wp.getNumComponents$();
var numLayers=lyrs.getTotNumLayers$();
wp.setProgressionType$io_scif_jj2000_j2k_entropy_encoder_LayersInfo$S(lyrs, wp.getProgressionName$());
return Clazz.new_($I$(1,1).c$$io_scif_jj2000_j2k_entropy_encoder_CodedCBlkDataSrcEnc$io_scif_jj2000_j2k_entropy_encoder_LayersInfo$io_scif_jj2000_j2k_codestream_writer_CodestreamWriter$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava,[src, lyrs, bw, wp]);
}, 1);

Clazz.newMeth(C$, 'parseAlayers$S$F', function (params, rate) {
var lyrs;
var stok;
var islayer;
var ratepending;
var r;
lyrs=Clazz.new_($I$(2,1).c$$F,[rate]);
stok=Clazz.new_($I$(3,1).c$$java_io_Reader,[Clazz.new_($I$(4,1).c$$S,[params])]);
stok.eolIsSignificant$Z(false);
try {
stok.nextToken$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(5,1).c$$S,["An IOException has ocurred where it should never occur"]);
} else {
throw e;
}
}
ratepending=false;
islayer=false;
r=0;
while (stok.ttype != $I$(3).TT_EOF){
switch (stok.ttype) {
case -2:
if (islayer) {
try {
lyrs.addOptPoint$F$I(r, (stok.nval|0));
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Error in 'Alayers' " + "option: " + e.getMessage$() ]);
} else {
throw e;
}
}
ratepending=false;
islayer=false;
} else {
if (ratepending) {
try {
lyrs.addOptPoint$F$I(r, 0);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Error in 'Alayers' " + "option: " + e.getMessage$() ]);
} else {
throw e;
}
}
}r=stok.nval;
ratepending=true;
}break;
case 43:
if (!ratepending || islayer ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Layer parameter without previous rate parameter in \'Alayers\' option"]);
}islayer=true;
break;
case -3:
try {
stok.nextToken$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(5,1).c$$S,["An IOException has ocurred where it should never occur"]);
} else {
throw e;
}
}
if (stok.ttype != $I$(3).TT_EOF) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\'sl\' argument of \'-Alayers\' option must be used alone."]);
}break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Error parsing \'Alayers\' option"]);
}
try {
stok.nextToken$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(5,1).c$$S,["An IOException has ocurred where it should never occur"]);
} else {
throw e;
}
}
}
if (islayer) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Error parsing \'Alayers\' option"]);
}if (ratepending) {
try {
lyrs.addOptPoint$F$I(r, 0);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Error in 'Alayers' " + "option: " + e.getMessage$() ]);
} else {
throw e;
}
}
}return lyrs;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
