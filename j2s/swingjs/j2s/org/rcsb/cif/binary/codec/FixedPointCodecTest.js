(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'org.rcsb.cif.binary.data.EncodedDataFactory','org.rcsb.cif.binary.encoding.FixedPointEncoding']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FixedPointCodecTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testForward$', function () {
var factor=1000;
var plainArray=$I$(1).float64Array$DA(Clazz.array(Double.TYPE, -1, [-1, 2.04, -100.5893, 42, 2147483647 / factor, -2147483648 / factor]));
var fixedPointEncoding=Clazz.new_($I$(2,1).c$$I,[factor]);
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_FixedPointEncoding(fixedPointEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_FixedPointEncoding(fixedPointEncoding);
org.junit.Assert.assertArrayEquals$DA$DA$D(plainArray.getData$(), decodedArray.getData$(), 0.001);
});

Clazz.newMeth(C$, 'testFixedPoint$', function () {
var intArray=$I$(1).int32Array$IA(Clazz.array(Integer.TYPE, -1, [10001, 100203, 124542]));
var testFloatArray=$I$(1).float64Array$DA(Clazz.array(Double.TYPE, -1, [10.001, 100.203, 124.542]));
var floatArray=intArray.decode$org_rcsb_cif_binary_encoding_FixedPointEncoding(Clazz.new_($I$(2,1).c$$I$I,[1000, 3]));
org.junit.Assert.assertArrayEquals$DA$DA$D(testFloatArray.getData$(), floatArray.getData$(), 0.001);
});
C$.__ANN__ = [[['M:testForward','void'],['@Test']],
  [['M:testFixedPoint','.'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
