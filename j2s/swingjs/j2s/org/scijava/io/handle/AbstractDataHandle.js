(function(){var P$=Clazz.newPackage("org.scijava.io.handle"),I$=[[0,['org.scijava.io.handle.DataHandle','.ByteOrder']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractDataHandle", null, 'org.scijava.plugin.AbstractWrapperPlugin', 'org.scijava.io.handle.DataHandle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.conversionBuffer=Clazz.array(Byte.TYPE, [8]);
this.order=$I$(1).BIG_ENDIAN;
this.encoding="UTF-8";
}, 1);

C$.$fields$=[['S',['encoding'],'O',['conversionBuffer','byte[]','order','org.scijava.io.handle.DataHandle.ByteOrder']]]

Clazz.newMeth(C$, 'conversionBuffer$', function () {
return this.conversionBuffer;
});

Clazz.newMeth(C$, 'getOrder$', function () {
return this.order;
});

Clazz.newMeth(C$, 'setOrder$org_scijava_io_handle_DataHandle_ByteOrder', function (order) {
this.order=order;
});

Clazz.newMeth(C$, 'getEncoding$', function () {
return this.encoding;
});

Clazz.newMeth(C$, 'setEncoding$S', function (encoding) {
this.encoding=encoding;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
