(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'org.rcsb.cif.binary.data.EncodedDataFactory','org.rcsb.cif.binary.encoding.ByteArrayEncoding']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteArrayCodecTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testForwardInt8$', function () {
var plainArray=$I$(1).int8Array$IA(Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, -128, 127]));
var byteArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
org.junit.Assert.assertArrayEquals$IA$IA(plainArray.getData$(), decodedArray.getData$());
});

Clazz.newMeth(C$, 'testForwardInt16$', function () {
var plainArray=$I$(1).int16Array$IA(Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, -32768, 32767]));
var byteArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
org.junit.Assert.assertArrayEquals$IA$IA(plainArray.getData$(), decodedArray.getData$());
});

Clazz.newMeth(C$, 'testForwardInt32$', function () {
var plainArray=$I$(1).int32Array$IA(Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, -2147483648, 2147483647]));
var byteArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
org.junit.Assert.assertArrayEquals$IA$IA(plainArray.getData$(), decodedArray.getData$());
});

Clazz.newMeth(C$, 'testForwardUint8$', function () {
var plainArray=$I$(1).uint8Array$IA(Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, 0, 255]));
var byteArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
org.junit.Assert.assertArrayEquals$IA$IA(plainArray.getData$(), decodedArray.getData$());
});

Clazz.newMeth(C$, 'testForwardUint16$', function () {
var plainArray=$I$(1).uint16Array$IA(Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, 0, 65535]));
var byteArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
org.junit.Assert.assertArrayEquals$IA$IA(plainArray.getData$(), decodedArray.getData$());
});

Clazz.newMeth(C$, 'testForwardUint32$', function () {
var plainArray=$I$(1).uint32Array$IA(Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, 0, 2147483647]));
var byteArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
org.junit.Assert.assertArrayEquals$IA$IA(plainArray.getData$(), decodedArray.getData$());
});

Clazz.newMeth(C$, 'testForwardFloat32$', function () {
var plainArray=$I$(1).float32Array$DA(Clazz.array(Double.TYPE, -1, [-1.0, 2.3, -3.5, 4, -3.4028235E38, 3.4028235E38]));
var byteArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
org.junit.Assert.assertArrayEquals$DA$DA$D(plainArray.getData$(), decodedArray.getData$(), 0.001);
});

Clazz.newMeth(C$, 'testForwardFloat64$', function () {
var plainArray=$I$(1).float64Array$DA(Clazz.array(Double.TYPE, -1, [-1.0, 2.3, -3.5, 4, -1.7976931348623157E308, 1.7976931348623157E308]));
var byteArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(byteArrayEncoding);
org.junit.Assert.assertArrayEquals$DA$DA$D(plainArray.getData$(), decodedArray.getData$(), 0.001);
});
C$.__ANN__ = [[['M:testForwardInt8','void'],['@Test']],
  [['M:testForwardInt16','.'],['@Test']],
  [['M:testForwardInt32','.'],['@Test']],
  [['M:testForwardUint8','.'],['@Test']],
  [['M:testForwardUint16','.'],['@Test']],
  [['M:testForwardUint32','.'],['@Test']],
  [['M:testForwardFloat32','.'],['@Test']],
  [['M:testForwardFloat64','.'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
