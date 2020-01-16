(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LambdaUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAll$org_apache_logging_log4j_util_SupplierA', function (suppliers) {
if (suppliers == null ) {
return null;
}var result=Clazz.array(java.lang.Object, [suppliers.length]);
for (var i=0; i < result.length; i++) {
result[i]=C$.get$org_apache_logging_log4j_util_Supplier(suppliers[i]);
}
return result;
}, 1);

Clazz.newMeth(C$, 'get$org_apache_logging_log4j_util_Supplier', function (supplier) {
if (supplier == null ) {
return null;
}var result=supplier.get$();
return Clazz.instanceOf(result, "org.apache.logging.log4j.message.Message") ? (result).getFormattedMessage$() : result;
}, 1);

Clazz.newMeth(C$, 'get$org_apache_logging_log4j_util_MessageSupplier', function (supplier) {
if (supplier == null ) {
return null;
}return supplier.get$();
}, 1);

Clazz.newMeth(C$, 'getMessage$org_apache_logging_log4j_util_Supplier$org_apache_logging_log4j_message_MessageFactory', function (supplier, messageFactory) {
if (supplier == null ) {
return null;
}var result=supplier.get$();
return Clazz.instanceOf(result, "org.apache.logging.log4j.message.Message") ? result : messageFactory.newMessage$O(result);
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
