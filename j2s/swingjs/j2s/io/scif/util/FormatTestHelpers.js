(function(){var P$=Clazz.newPackage("io.scif.util"),I$=[[0,'org.scijava.io.nio.ByteBufferByteBank','java.nio.ByteBuffer','java.nio.ByteOrder','org.scijava.io.location.BytesLocation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FormatTestHelpers");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createLittleEndianHandle$I$org_scijava_io_handle_DataHandleService', function (capacity, dataHandleService) {
try {
return _.FormatTestHelpers.createLittleEndianHandle$I$org_scijava_io_handle_DataHandleService$Z(capacity, dataHandleService, false);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'createLittleEndianHandle$I$org_scijava_io_handle_DataHandleService$Z', function (capacity, dataHandleService, zerofill) {
var buffer=Clazz.new_($I$(1,1).c$$java_util_function_Function$I,[(P$.FormatTestHelpers$lambda1$||(P$.FormatTestHelpers$lambda1$=(((P$.FormatTestHelpers$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "FormatTestHelpers$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (cap) {
return $I$(2).allocate$I((cap).valueOf()).order$java_nio_ByteOrder($I$(3).LITTLE_ENDIAN);
});
})()
), Clazz.new_(1,{R:"Integer",T:"java.nio.ByteBuffer"},P$.FormatTestHelpers$lambda1.$init$, [this, null]))))), capacity]);
var handle=dataHandleService.create$TD(Clazz.new_($I$(4,1).c$$org_scijava_io_ByteBank,[buffer]));
if (zerofill) {
handle.write$BA(Clazz.array(Byte.TYPE, [capacity]));
handle.seek$J(0);
}handle.setLittleEndian$Z(true);
return handle;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:42:21 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
