(function(){var P$=Clazz.newPackage("io.scif.codec"),p$1={},I$=[[0,'java.util.HashMap','io.scif.codec.BitBuffer','io.scif.codec.BitWriter',['io.scif.codec.HuffmanCodec','.Decoder']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HuffmanCodec", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.codec.AbstractCodec');
C$.$classes$=[['Decoder',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cachedDecoders=Clazz.new_(1,{K:"short[]",V:"io.scif.codec.HuffmanCodec.Decoder"},$I$(1,1));
}, 1);

C$.$fields$=[['I',['leafCounter'],'O',['cachedDecoders','java.util.HashMap']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Huffman encoding not currently supported"]);
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if ($in == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
if (options == null  || !(Clazz.instanceOf(options, "io.scif.codec.HuffmanCodecOptions")) ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Options must be an instance of loci.formats.codec.HuffmanCodecOptions."]);
}var huffman=options;
var pix=Clazz.array(Byte.TYPE, [huffman.maxBytes]);
$in.read$BA(pix);
var bb=Clazz.new_($I$(2,1).c$$BA,[pix]);
var nSamples=((huffman.maxBytes * 8)/huffman.bitsPerSample|0);
var bytesPerSample=(huffman.bitsPerSample/8|0);
if ((huffman.bitsPerSample % 8) != 0) bytesPerSample++;
var out=Clazz.new_($I$(3,1));
for (var i=0; i < nSamples; i++) {
var sample=this.getSample$io_scif_codec_BitBuffer$io_scif_codec_CodecOptions(bb, options);
out.write$I$I(sample, bytesPerSample * 8);
}
return out.toByteArray$();
});

Clazz.newMeth(C$, 'getSample$io_scif_codec_BitBuffer$io_scif_codec_CodecOptions', function (bb, options) {
if (bb == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to handle."]);
}if (options == null  || !(Clazz.instanceOf(options, "io.scif.codec.HuffmanCodecOptions")) ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Options must be an instance of loci.formats.codec.HuffmanCodecOptions."]);
}var huffman=options;
var decoder=this.cachedDecoders.get$O(huffman.table);
if (decoder == null ) {
decoder=Clazz.new_($I$(4,1).c$$HA, [this, null, huffman.table]);
this.cachedDecoders.put$TK$TV(huffman.table, decoder);
}var bitCount=decoder.decode$io_scif_codec_BitBuffer(bb);
if (bitCount == 16) {
return 32768;
}if (bitCount < 0) bitCount=0;
var v=bb.getBits$I(bitCount) & ((Math.pow(2, bitCount)|0) - 1);
if ((v & (1 << (bitCount - 1))) == 0) {
v-=(1 << bitCount) - 1;
}return v;
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.HuffmanCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.HuffmanCodec, "Decoder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.branch=Clazz.array(C$, [2]);
this.leafValue=-1;
}, 1);

C$.$fields$=[['I',['leafValue'],'O',['branch','io.scif.codec.HuffmanCodec.Decoder[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$HA', function (source) {
;C$.$init$.apply(this);
this.this$0.leafCounter=0;
p$1.createDecoder$io_scif_codec_HuffmanCodec_Decoder$HA$I$I.apply(this, [this, source, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'createDecoder$HA$I$I', function (source, start, level) {
var dest=Clazz.new_(C$, [this, null]);
p$1.createDecoder$io_scif_codec_HuffmanCodec_Decoder$HA$I$I.apply(this, [dest, source, start, level]);
return dest;
}, p$1);

Clazz.newMeth(C$, 'createDecoder$io_scif_codec_HuffmanCodec_Decoder$HA$I$I', function (dest, source, start, level) {
var next=0;
var i=0;
while (i <= this.this$0.leafCounter && next < 16 ){
i+=source[start + next++] & 255;
}
if (level < next && next < 16 ) {
dest.branch[0]=p$1.createDecoder$HA$I$I.apply(this, [source, start, level + 1]);
dest.branch[1]=p$1.createDecoder$HA$I$I.apply(this, [source, start, level + 1]);
} else {
i=start + 16 + this.this$0.leafCounter++ ;
if (i < source.length) {
dest.leafValue=source[i] & 255;
}}}, p$1);

Clazz.newMeth(C$, 'decode$io_scif_codec_BitBuffer', function (bb) {
var d=this;
while (d.branch[0] != null ){
var v=bb.getBits$I(1);
if (v < 0) break;
d=d.branch[v];
}
return d.leafValue;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
