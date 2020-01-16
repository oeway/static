(function(){var P$=Clazz.newPackage("io.scif.img.converters"),I$=[[0,'io.scif.img.cell.loaders.ByteArrayLoader','io.scif.img.cell.loaders.ShortArrayLoader','io.scif.img.cell.loaders.LongArrayLoader','io.scif.img.cell.loaders.CharArrayLoader','io.scif.img.cell.loaders.DoubleArrayLoader','io.scif.img.cell.loaders.FloatArrayLoader','io.scif.img.cell.loaders.IntArrayLoader','io.scif.img.cell.loaders.ByteAccessLoader','net.imglib2.img.basictypeaccess.array.ByteArray','io.scif.img.cell.loaders.ShortAccessLoader','net.imglib2.img.basictypeaccess.array.ShortArray','io.scif.img.cell.loaders.LongAccessLoader','net.imglib2.img.basictypeaccess.array.LongArray','io.scif.img.cell.loaders.CharAccessLoader','net.imglib2.img.basictypeaccess.array.CharArray','io.scif.img.cell.loaders.DoubleAccessLoader','net.imglib2.img.basictypeaccess.array.DoubleArray','io.scif.img.cell.loaders.FloatAccessLoader','net.imglib2.img.basictypeaccess.array.FloatArray','io.scif.img.cell.loaders.IntAccessLoader','net.imglib2.img.basictypeaccess.array.IntArray']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ArrayDataAccessConverter", null, 'io.scif.img.converters.AbstractPlaneConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'populatePlane$io_scif_Reader$I$I$BA$net_imagej_ImgPlus$io_scif_config_SCIFIOConfig', function (reader, imageIndex, planeIndex, source, dest, config) {
var arrayImg=dest.getImg$();
var store=arrayImg.update$O(null);
if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.ByteArray")) {
var loader=Clazz.new_($I$(1,1).c$$io_scif_Reader$io_scif_img_ImageRegion,[reader, config.imgOpenerGetRegion$()]);
loader.convertBytes$net_imglib2_img_basictypeaccess_array_ByteArray$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.ShortArray")) {
var loader=Clazz.new_($I$(2,1).c$$io_scif_Reader$io_scif_img_ImageRegion,[reader, config.imgOpenerGetRegion$()]);
loader.convertBytes$net_imglib2_img_basictypeaccess_array_ShortArray$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.LongArray")) {
var loader=Clazz.new_($I$(3,1).c$$io_scif_Reader$io_scif_img_ImageRegion,[reader, config.imgOpenerGetRegion$()]);
loader.convertBytes$net_imglib2_img_basictypeaccess_array_LongArray$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.CharArray")) {
var loader=Clazz.new_($I$(4,1).c$$io_scif_Reader$io_scif_img_ImageRegion,[reader, config.imgOpenerGetRegion$()]);
loader.convertBytes$net_imglib2_img_basictypeaccess_array_CharArray$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.DoubleArray")) {
var loader=Clazz.new_($I$(5,1).c$$io_scif_Reader$io_scif_img_ImageRegion,[reader, config.imgOpenerGetRegion$()]);
loader.convertBytes$net_imglib2_img_basictypeaccess_array_DoubleArray$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.FloatArray")) {
var loader=Clazz.new_($I$(6,1).c$$io_scif_Reader$io_scif_img_ImageRegion,[reader, config.imgOpenerGetRegion$()]);
loader.convertBytes$net_imglib2_img_basictypeaccess_array_FloatArray$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.IntArray")) {
var loader=Clazz.new_($I$(7,1).c$$io_scif_Reader$io_scif_img_ImageRegion,[reader, config.imgOpenerGetRegion$()]);
loader.convertBytes$net_imglib2_img_basictypeaccess_array_IntArray$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.ByteAccess")) {
var loader=Clazz.new_($I$(8,1).c$$io_scif_Reader$io_scif_img_ImageRegion$java_util_function_IntFunction,[reader, config.imgOpenerGetRegion$(), ((P$.ArrayDataAccessConverter$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ArrayDataAccessConverter$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(9,1).c$$I,[t])});
})()
), Clazz.new_(1,{R:"net.imglib2.img.basictypeaccess.ByteAccess"},P$.ArrayDataAccessConverter$lambda1.$init$, [this, null]))]);
loader.convertBytes$net_imglib2_img_basictypeaccess_ByteAccess$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.ShortAccess")) {
var loader=Clazz.new_($I$(10,1).c$$io_scif_Reader$io_scif_img_ImageRegion$java_util_function_IntFunction,[reader, config.imgOpenerGetRegion$(), ((P$.ArrayDataAccessConverter$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ArrayDataAccessConverter$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(11,1).c$$I,[t])});
})()
), Clazz.new_(1,{R:"net.imglib2.img.basictypeaccess.ShortAccess"},P$.ArrayDataAccessConverter$lambda2.$init$, [this, null]))]);
loader.convertBytes$net_imglib2_img_basictypeaccess_ShortAccess$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.LongAccess")) {
var loader=Clazz.new_($I$(12,1).c$$io_scif_Reader$io_scif_img_ImageRegion$java_util_function_IntFunction,[reader, config.imgOpenerGetRegion$(), ((P$.ArrayDataAccessConverter$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ArrayDataAccessConverter$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(13,1).c$$I,[t])});
})()
), Clazz.new_(1,{R:"net.imglib2.img.basictypeaccess.LongAccess"},P$.ArrayDataAccessConverter$lambda3.$init$, [this, null]))]);
loader.convertBytes$net_imglib2_img_basictypeaccess_LongAccess$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.CharAccess")) {
var loader=Clazz.new_($I$(14,1).c$$io_scif_Reader$io_scif_img_ImageRegion$java_util_function_IntFunction,[reader, config.imgOpenerGetRegion$(), ((P$.ArrayDataAccessConverter$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ArrayDataAccessConverter$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(15,1).c$$I,[t])});
})()
), Clazz.new_(1,{R:"net.imglib2.img.basictypeaccess.CharAccess"},P$.ArrayDataAccessConverter$lambda4.$init$, [this, null]))]);
loader.convertBytes$net_imglib2_img_basictypeaccess_CharAccess$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.DoubleAccess")) {
var loader=Clazz.new_($I$(16,1).c$$io_scif_Reader$io_scif_img_ImageRegion$java_util_function_IntFunction,[reader, config.imgOpenerGetRegion$(), ((P$.ArrayDataAccessConverter$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ArrayDataAccessConverter$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(17,1).c$$I,[t])});
})()
), Clazz.new_(1,{R:"net.imglib2.img.basictypeaccess.DoubleAccess"},P$.ArrayDataAccessConverter$lambda5.$init$, [this, null]))]);
loader.convertBytes$net_imglib2_img_basictypeaccess_DoubleAccess$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.FloatAccess")) {
var loader=Clazz.new_($I$(18,1).c$$io_scif_Reader$io_scif_img_ImageRegion$java_util_function_IntFunction,[reader, config.imgOpenerGetRegion$(), ((P$.ArrayDataAccessConverter$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ArrayDataAccessConverter$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(19,1).c$$I,[t])});
})()
), Clazz.new_(1,{R:"net.imglib2.img.basictypeaccess.FloatAccess"},P$.ArrayDataAccessConverter$lambda6.$init$, [this, null]))]);
loader.convertBytes$net_imglib2_img_basictypeaccess_FloatAccess$BA$I(store, source, planeIndex);
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.IntAccess")) {
var loader=Clazz.new_($I$(20,1).c$$io_scif_Reader$io_scif_img_ImageRegion$java_util_function_IntFunction,[reader, config.imgOpenerGetRegion$(), ((P$.ArrayDataAccessConverter$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ArrayDataAccessConverter$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(21,1).c$$I,[t])});
})()
), Clazz.new_(1,{R:"net.imglib2.img.basictypeaccess.IntAccess"},P$.ArrayDataAccessConverter$lambda7.$init$, [this, null]))]);
loader.convertBytes$net_imglib2_img_basictypeaccess_IntAccess$BA$I(store, source, planeIndex);
}});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.img.converters.ArrayDataAccessConverter',null,['org.scijava.plugin.Plugin']],['type="io.scif.img.converters.PlaneConverter.class" name="ArrayDataAccess" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:44 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
