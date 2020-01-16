(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.quantization.dequantizer"),I$=[[0,'io.scif.jj2000.j2k.image.invcomptransf.InvCompTransf']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Dequantizer", null, 'io.scif.jj2000.j2k.wavelet.synthesis.MultiResImgDataAdapter', 'io.scif.jj2000.j2k.wavelet.synthesis.CBlkWTDataSrcDec');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=null;
}

Clazz.newMeth(C$, '$init$', function () {
this.rb=(null|0);
this.utrb=(null|0);
}, 1);

C$.$fields$=[['O',['src','io.scif.jj2000.j2k.quantization.dequantizer.CBlkQuantDataSrcDec','rb','int[]','+utrb','cts','io.scif.jj2000.j2k.image.CompTransfSpec','wfs','io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilterSpec']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$IA$io_scif_jj2000_j2k_decoder_DecoderSpecs', function (src, utrb, decSpec) {
;C$.superclazz.c$$io_scif_jj2000_j2k_wavelet_synthesis_MultiResImgData.apply(this,[src]);C$.$init$.apply(this);
if (utrb.length != src.getNumComps$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.src=src;
this.utrb=utrb;
this.cts=decSpec.cts;
this.wfs=decSpec.wfs;
}, 1);

Clazz.newMeth(C$, 'getNomRangeBits$I', function (c) {
return this.rb[c];
});

Clazz.newMeth(C$, 'getSynSubbandTree$I$I', function (t, c) {
return this.src.getSynSubbandTree$I$I(t, c);
});

Clazz.newMeth(C$, 'getCbULX$', function () {
return this.src.getCbULX$();
});

Clazz.newMeth(C$, 'getCbULY$', function () {
return this.src.getCbULY$();
});

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
this.src.setTile$I$I(x, y);
this.tIdx=this.getTileIdx$();
var cttype=0;
if ((this.cts.getTileDef$I(this.tIdx)).intValue$() == 0) cttype=0;
 else {
var nc=this.src.getNumComps$() > 3 ? 3 : this.src.getNumComps$();
var rev=0;
for (var c=0; c < nc; c++) rev+=(this.wfs.isReversible$I$I(this.tIdx, c) ? 1 : 0);

if (rev == 3) {
cttype=1;
} else if (rev == 0) {
cttype=2;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Wavelet transformation " + "and " + "component transformation" + " not coherent in tile" + this.tIdx ]);
}}switch (cttype) {
case 0:
this.rb=this.utrb;
break;
case 1:
this.rb=$I$(1).calcMixedBitDepths$IA$I$IA(this.utrb, 1, null);
break;
case 2:
this.rb=$I$(1).calcMixedBitDepths$IA$I$IA(this.utrb, 2, null);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non JPEG 2000 part I " + "component" + " transformation for tile: " + this.tIdx ]);
}
});

Clazz.newMeth(C$, 'nextTile$', function () {
this.src.nextTile$();
this.tIdx=this.getTileIdx$();
var cttype=(this.cts.getTileDef$I(this.tIdx)).intValue$();
switch (cttype) {
case 0:
this.rb=this.utrb;
break;
case 1:
this.rb=$I$(1).calcMixedBitDepths$IA$I$IA(this.utrb, 1, null);
break;
case 2:
this.rb=$I$(1).calcMixedBitDepths$IA$I$IA(this.utrb, 2, null);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non JPEG 2000 part I " + "component" + " transformation for tile: " + this.tIdx ]);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
