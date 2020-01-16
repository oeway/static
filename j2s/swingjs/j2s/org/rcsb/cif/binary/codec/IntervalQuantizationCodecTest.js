(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'org.rcsb.cif.binary.data.EncodedDataFactory','org.rcsb.cif.binary.codec.Codec','org.rcsb.cif.binary.encoding.IntervalQuantizationEncoding']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntervalQuantizationCodecTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testEncode$', function () {
var plainArray=$I$(1).float32Array$DA(Clazz.array(Double.TYPE, -1, [0.5, 1, 1.5, 2, 3, 1.345]));
var expected=$I$(1).int32Array$IA(Clazz.array(Integer.TYPE, -1, [0, 0, 1, 2, 2, 1]));
var encodedData=$I$(2).INTERVAL_QUANTIZATION_CODEC.encode$org_rcsb_cif_binary_data_FloatArray$org_rcsb_cif_binary_encoding_IntervalQuantizationEncoding(plainArray, Clazz.new_($I$(3,1).c$$I$I$I$I,[1, 2, 3, 32]));
org.junit.Assert.assertArrayEquals$IA$IA(expected.getData$(), encodedData.getData$());
});
C$.__ANN__ = [[['M:testEncode','void'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
