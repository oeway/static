(function(){var P$=Clazz.newPackage("swingjs.xml"),p$1={},I$=[[0,'java.util.Hashtable','java.util.HashMap','javax.xml.namespace.QName','java.util.ArrayList','javajs.util.Rdr','java.io.BufferedInputStream','javajs.util.PT','swingjs.xml.JSJAXBField','swingjs.api.Interface']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSJAXBClass", null, null, 'Cloneable');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.marshallerNamespacePrefixes=Clazz.new_(1,{K:"String",V:"String"},$I$(1,1));
C$.adapterMap=Clazz.new_(1,{K:"String",V:"javax.xml.bind.annotation.adapters.XmlAdapter"},$I$(2,1));
C$.prefixIndex=1;
}

Clazz.newMeth(C$, '$init$', function () {
this.accessorType=2;
this.qname=Clazz.new_($I$(3,1).c$$S$S$S,["", "##default", ""]);
this.propOrder=Clazz.new_(1,{E:"String"},$I$(4,1));
this.fields=Clazz.new_(1,{E:"swingjs.xml.JSJAXBField"},$I$(4,1));
this.marshallerFieldMap=Clazz.new_(1,{K:"String",V:"swingjs.xml.JSJAXBField"},$I$(1,1));
this.unmarshallerFieldMap=Clazz.new_(1,{K:"String",V:"swingjs.xml.JSJAXBField"},$I$(1,1));
this.haveXMLTypeNamespace=true;
}, 1);

C$.$fields$=[['Z',['isMarshaller','isAnonymous','isXmlIDREF','isEnum','isInnerClass','haveXMLTypeNamespace'],'I',['accessorType'],'S',['unmarshallerDefaultNamespace','enumClassType'],'O',['qname','javax.xml.namespace.QName','+qualifiedTypeName','tagField','swingjs.xml.JSJAXBField','+xmlIDField','propOrder','java.util.List','+fields','marshallerFieldMap','java.util.Map','+enumMap','xmlValueField','swingjs.xml.JSJAXBField','unmarshallerFieldMap','java.util.Map','javaClass','Class','javaObject','java.lang.Object','seeAlso','java.util.List','tagObject','java.lang.Object','declaredTypeName','javax.xml.namespace.QName']]
,['I',['prefixIndex'],'S',['packageNamespace','packageAccessorType'],'O',['marshallerNamespacePrefixes','java.util.Map','+adapterMap']]]

Clazz.newMeth(C$, 'clearStatics$', function () {
C$.prefixIndex=1;
C$.packageNamespace=null;
C$.packageAccessorType=null;
C$.marshallerNamespacePrefixes.clear$();
C$.adapterMap.clear$();
}, 1);

Clazz.newMeth(C$, 'getDefaultNamespaceFromPackageInfo$Class', function (javaClass) {
if (C$.packageNamespace != null ) return;
C$.packageNamespace="";
var is=javaClass.getResourceAsStream$S("_$.js");
if (is != null ) {
var data=$I$(5).streamToUTF8String$java_io_BufferedInputStream(Clazz.new_($I$(6,1).c$$java_io_InputStream,[is]));
data=$I$(7).getQuotedAttribute$S$S(data, "namespace");
if (data != null ) C$.packageNamespace=data;
}}, 1);

Clazz.newMeth(C$, 'c$$Class$O$Z$Z$javax_xml_namespace_QName', function (javaClass, javaObject, isXmlIDREF, isMarshaller, qname) {
;C$.$init$.apply(this);
this.isMarshaller=isMarshaller;
this.javaClass=javaClass;
this.isInnerClass=!!javaClass.$clazz$.__CLASS_NAME$__ ||false;
this.javaObject=javaObject;
this.qname=qname;
C$.checkC$__ANN__$swingjs_xml_JSJAXBClass$Class$Z$Z(this, javaClass, javaObject != null  || javaClass.isEnum$() , isXmlIDREF);
this.isXmlIDREF=isXmlIDREF;
}, 1);

Clazz.newMeth(C$, 'checkC$__ANN__$swingjs_xml_JSJAXBClass$Class$Z$Z', function (jsjaxbClass, javaClass, haveJavaObject, isXmlIDREF) {
C$.getDefaultNamespaceFromPackageInfo$Class(javaClass);
var isTop=true;
while (javaClass != null ){
var clazz=(javaClass.$clazz$ ||null);
if (clazz == null ) break;
var jsdata=(clazz.$getAnn$ && clazz.$getAnn$() ||null);
var className=(clazz.__CLASS$NAME__ || clazz.__CLASS_NAME__ ||null);
if (!isTop) {
className=null;
}if (jsdata != null ) {
if (jsjaxbClass == null ) return true;
jsjaxbClass.addTypeData$OAAA$O$Z(jsdata, clazz, haveJavaObject);
}isTop=false;
javaClass=javaClass.getSuperclass$();
}
return false;
}, 1);

Clazz.newMeth(C$, 'addTypeData$OAAA$O$Z', function (jsdata, clazz, haveJavaObject) {
var n=(haveJavaObject ? jsdata.length : 1);
var isSuperclass=(this.fields.size$() > 0);
var lastClassName=null;
for (var i=0; i < n; i++) {
var adata=jsdata[i];
if (adata[0][1].equals$O(".")) adata[0][1]=lastClassName;
 else lastClassName=adata[0][1];
var field=Clazz.new_($I$(8,1).c$$swingjs_xml_JSJAXBClass$OAA$O$I$java_util_List,[this, adata, clazz, this.fields.size$(), this.propOrder]);
if (i == 0 && !isSuperclass  || field.javaName != null  ) p$1.addField$swingjs_xml_JSJAXBField.apply(this, [field]);
}
return this;
});

Clazz.newMeth(C$, 'addSeeAlso$SA', function (javaClassName) {
if (this.seeAlso == null ) this.seeAlso=Clazz.new_(1,{E:"String"},$I$(4,1));
for (var i=0; i < javaClassName.length; i++) this.seeAlso.add$TE(javaClassName[i]);

});

Clazz.newMeth(C$, 'addField$swingjs_xml_JSJAXBField', function (field) {
if (field.listFields != null ) {
for (var i=field.listFields.size$(); --i >= 0; ) p$1.addField$swingjs_xml_JSJAXBField.apply(this, [field.listFields.get$I(i)]);

}this.fields.add$TE(field);
if (this.isMarshaller && field.javaName != null  ) this.marshallerFieldMap.put$TK$TV(field.javaName, field);
}, p$1);

Clazz.newMeth(C$, 'getFieldFromJavaNameForMarshaller$S', function (javaName) {
return this.marshallerFieldMap.get$O(javaName);
});

Clazz.newMeth(C$, 'getXmlNameFromClassName$S', function (className) {
className=className.substring$I(className.lastIndexOf$S(".") + 1);
if (className.indexOf$S("$") > 1) className=className.substring$I(className.indexOf$S("$") + 1);
return className;
}, 1);

Clazz.newMeth(C$, 'getPrefixFor$S', function (namespace) {
var prefix=(namespace.length$() == 0 ? "" : C$.marshallerNamespacePrefixes.get$O(namespace));
if (prefix == null ) C$.marshallerNamespacePrefixes.put$TK$TV(namespace, prefix="ns" + (++C$.prefixIndex));
return prefix;
}, 1);

Clazz.newMeth(C$, 'getAdapter$S', function (adapterClass) {
var adapter=C$.adapterMap.get$O(adapterClass);
if (adapter == null  && !C$.adapterMap.containsKey$O(adapterClass) ) {
C$.adapterMap.put$TK$TV(adapterClass, adapter=$I$(9).getInstance$S$Z(adapterClass, false));
}return adapter;
}, 1);

Clazz.newMeth(C$, 'setUnmarshallerDefaultNamespace$S', function (namespace) {
if (namespace != null ) this.unmarshallerDefaultNamespace=namespace;
});

Clazz.newMeth(C$, 'getUnmarshallerDefaultNamespace$', function () {
return this.unmarshallerDefaultNamespace;
});

Clazz.newMeth(C$, 'getQName$', function () {
return this.qname;
});

Clazz.newMeth(C$, 'setQName$javax_xml_namespace_QName', function (qualifiedName) {
if (this.qname.getPrefix$().length$() > 0) return;
this.qname=qualifiedName;
});

Clazz.newMeth(C$, 'getJavaObject$', function () {
return this.javaObject;
});

Clazz.newMeth(C$, 'initEnum$S', function (data) {
this.enumClassType=data;
this.isEnum=true;
this.enumMap=Clazz.new_(1,{K:"java.lang.Object",V:"java.lang.Object"},$I$(1,1));
});

Clazz.newMeth(C$, 'hasAnnotations$O', function (value) {
if (value == null ) return false;
try {
var cl=value.getClass$();
return (value.$clazz$ && value.$clazz$.$getAnn$ && cl.$clazz$ && !!cl.$clazz$.$getAnn$ ||false);
} catch (t) {
return false;
}
}, 1);

Clazz.newMeth(C$, 'finalizeFieldQName$javax_xml_namespace_QName$S$I', function (qName, defaultName, type) {
if (qName == null ) qName=Clazz.new_($I$(3,1).c$$S$S$S,["##default", "##default", ""]);
var namespace=qName.getNamespaceURI$();
if (namespace.equals$O("##default")) namespace=p$1.getDefaultNamespace$I.apply(this, [type]);
var name=qName.getLocalPart$();
if (name.equals$O("##default")) {
switch (type) {
case 1:
if (this.qname != null ) {
name=this.qname.getLocalPart$();
break;
}case 2:
name=C$.getXmlNameFromClassName$S(defaultName);
break;
case 3:
case 4:
name=defaultName;
break;
}
}var qname=Clazz.new_($I$(3,1).c$$S$S$S,[namespace, name, C$.getPrefixFor$S(namespace)]);
switch (type) {
case 1:
return this.qname=qname;
case 2:
return this.qname=this.qualifiedTypeName=qname;
default:
case 3:
case 4:
return qname;
}
});

Clazz.newMeth(C$, 'getDefaultNamespace$I', function (type) {
switch (type) {
case 1:
return (this.isInnerClass || this.qname == null   ? C$.packageNamespace : this.qname.getNamespaceURI$());
case 2:
this.haveXMLTypeNamespace=false;
return this.qname.getNamespaceURI$();
case 3:
return "";
default:
case 4:
return (this.haveXMLTypeNamespace ? this.qname.getNamespaceURI$() : C$.packageNamespace);
}
}, p$1);

Clazz.newMeth(C$, 'clone$', function () {
try {
var jaxbClass=Clazz.clone(this);
jaxbClass.fields=Clazz.new_(1,{E:"swingjs.xml.JSJAXBField"},$I$(4,1));
for (var i=0, n=this.fields.size$(); i < n; i++) {
p$1.addField$swingjs_xml_JSJAXBField.apply(jaxbClass, [this.fields.get$I(i).clone$()]);
}
return jaxbClass;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
