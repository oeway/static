(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'org.rcsb.cif.binary.data.EncodedDataFactory','org.rcsb.cif.binary.encoding.RunLengthEncoding']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RunLengthCodecTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testForward$', function () {
var plainArray=$I$(1).int32Array$IA(Clazz.array(Integer.TYPE, -1, [15, 15, 15, 100, 100, 111, 111, 111, 111, 10000, 10000, 10000, 10000, 10000, 10000]));
var runLengthEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_RunLengthEncoding(runLengthEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_RunLengthEncoding(runLengthEncoding);
org.junit.Assert.assertArrayEquals$IA$IA(plainArray.getData$(), decodedArray.getData$());
});

Clazz.newMeth(C$, 'testEncode$', function () {
var expected=Clazz.array(Integer.TYPE, -1, [1, 3, 2, 1, 3, 2]);
var plainArray=$I$(1).int8Array$IA(Clazz.array(Integer.TYPE, -1, [1, 1, 1, 2, 3, 3]));
var runLengthEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_RunLengthEncoding(runLengthEncoding);
org.junit.Assert.assertArrayEquals$IA$IA(expected, encodedData.getData$());
});

Clazz.newMeth(C$, 'testDecode$', function () {
var expected=Clazz.array(Integer.TYPE, -1, [15, 15, 15, 100, 100, 111, 111, 111, 111, 10000, 10000, 10000, 10000, 10000, 10000]);
var encodedArray=$I$(1).int32Array$IA(Clazz.array(Integer.TYPE, -1, [15, 3, 100, 2, 111, 4, 10000, 6]));
var plainData=encodedArray.decode$org_rcsb_cif_binary_encoding_RunLengthEncoding(Clazz.new_($I$(2,1).c$$I$I,[3, expected.length]));
org.junit.Assert.assertArrayEquals$IA$IA(expected, plainData.getData$());
});
C$.__ANN__ = [[['M:testForward','void'],['@Test']],
  [['M:testEncode','.'],['@Test']],
  [['M:testDecode','.'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:54 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
