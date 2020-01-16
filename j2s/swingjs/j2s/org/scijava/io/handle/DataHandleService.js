(function(){var P$=Clazz.newPackage("org.scijava.io.handle"),I$=[[0,'org.scijava.io.handle.DataHandle','org.scijava.io.location.Location','org.scijava.io.handle.ReadBufferDataHandle','org.scijava.io.handle.WriteBufferDataHandle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "DataHandleService", null, null, ['org.scijava.plugin.WrapperService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(1),['available$J','checksum$','conversionBuffer$','ensureReadable$J','ensureWritable$J','exists$','findString$SA','findString$Z$SA','findString$I$SA','findString$Z$I$SA','getEncoding$','getOrder$','isBigEndian$','isLittleEndian$','isReadable$','isWritable$','lastModified$','length$','offset$','read$','read$BA','read$BA$I$I','readBoolean$','readCString$','readChar$','readDouble$','readFloat$','readFully$BA','readFully$BA$I$I','readInt$','readLine$','readLong$','readShort$','readString$I','readString$S','readUTF$','readUnsignedByte$','readUnsignedShort$','seek$J','setEncoding$S','setLength$J','setLittleEndian$Z','setOrder$org_scijava_io_handle_DataHandle_ByteOrder','skip$J','skipBytes$I','write$BA','writeBoolean$Z','writeByte$I','writeBytes$S','writeChar$I','writeChars$S','writeDouble$D','writeFloat$F','writeInt$I','writeLine$S','writeLong$J','writeShort$I','writeUTF$S']);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(2),['defaultName$','getName$','getURI$']);
});

Clazz.newMeth(C$, 'exists$org_scijava_io_location_Location', function (location) {
if (Clazz.instanceOf(location, "org.scijava.io.location.FileLocation")) {
return (location).getFile$().exists$();
}try {
var handle=this.create$TD(location);
/*try*/ {
return handle == null  ? false : handle.exists$();
}
}finally{/*res*/
try{handle&&handle.close$&&handle.close$()}catch(_){}}
});

Clazz.newMeth(C$, 'readBuffer$org_scijava_io_handle_DataHandle', function (handle) {
return handle == null  ? null : Clazz.new_($I$(3,1).c$$org_scijava_io_handle_DataHandle,[handle]);
});

Clazz.newMeth(C$, 'readBuffer$org_scijava_io_location_Location', function (location) {
var handle=this.create$TD(location);
return handle == null  ? null : Clazz.new_($I$(3,1).c$$org_scijava_io_handle_DataHandle,[handle]);
});

Clazz.newMeth(C$, 'writeBuffer$org_scijava_io_handle_DataHandle', function (handle) {
return handle == null  ? null : Clazz.new_($I$(4,1).c$$org_scijava_io_handle_DataHandle,[handle]);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
