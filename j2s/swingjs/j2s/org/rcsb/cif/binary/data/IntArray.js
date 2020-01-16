(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.data"),I$=[[0,'org.rcsb.cif.binary.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "IntArray", null, null, 'org.rcsb.cif.binary.data.NumberArray');

C$.$clinit$=1;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'length$', function () {
return this.getData$().length;
});

Clazz.newMeth(C$, 'encode$org_rcsb_cif_binary_encoding_RunLengthEncoding', function (encoding) {
return $I$(1).RUN_LENGTH_CODEC.encode$org_rcsb_cif_binary_data_IntArray$org_rcsb_cif_binary_encoding_RunLengthEncoding(this, encoding);
});

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_encoding_IntegerPackingEncoding', function (encoding) {
return $I$(1).INTEGER_PACKING_CODEC.decode$org_rcsb_cif_binary_data_IntArray$org_rcsb_cif_binary_encoding_IntegerPackingEncoding(this, encoding);
});
};})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
