(function(){var P$=Clazz.newPackage("org.scijava.script.process"),p$1={},I$=[[0,'java.util.HashMap','org.scijava.ItemIO','org.scijava.module.DefaultMutableModuleItem','org.scijava.ItemVisibility','java.util.ArrayList','java.util.List']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ParameterScriptProcessor", null, null, 'org.scijava.script.process.ScriptProcessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['header'],'O',['scriptService','org.scijava.script.ScriptService','convertService','org.scijava.convert.ConvertService','parser','org.scijava.parse.ParseService','log','org.scijava.log.LogService','info','org.scijava.script.ScriptInfo']]]

Clazz.newMeth(C$, 'begin$org_scijava_script_ScriptInfo', function (scriptInfo) {
this.info=scriptInfo;
this.info.setReturnValueAppended$Z(true);
this.header=true;
});

Clazz.newMeth(C$, 'process$S', function (line) {
if (line.matches$S("^#@.*")) {
var at=line.indexOf$I("@");
return p$1.process$S$S.apply(this, [line, line.substring$I(at + 1)]);
}if (this.header) {
if (line.matches$S("^[^\\w]*@.*")) {
var at=line.indexOf$I("@");
return p$1.process$S$S.apply(this, [line, line.substring$I(at + 1)]);
} else if (line.matches$S(".*\\w.*")) this.header=false;
}return line;
});

Clazz.newMeth(C$, 'end$', function () {
if (this.info.isReturnValueAppended$()) {
var attrs=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
attrs.put$TK$TV("type", "OUTPUT");
p$1.addItem$S$Class$java_util_Map$Z.apply(this, ["result", Clazz.getClass(java.lang.Object), attrs, false]);
}});

Clazz.newMeth(C$, 'process$S$S', function (line, param) {
if (p$1.parseParam$S.apply(this, [param])) return "";
this.log.warn$O("Ignoring invalid parameter: " + param);
return line;
}, p$1);

Clazz.newMeth(C$, 'parseParam$S', function (param) {
var lParen=param.indexOf$S("(");
var rParen=param.lastIndexOf$S(")");
if (rParen < lParen) return false;
if (lParen < 0) return p$1.parseParam$S$java_util_Map.apply(this, [param, p$1.parseAttrs$S.apply(this, ["()"])]);
var cutParam=param.substring$I$I(0, lParen) + param.substring$I(rParen + 1);
var attrs=param.substring$I$I(lParen + 1, rParen);
return p$1.parseParam$S$java_util_Map.apply(this, [cutParam, p$1.parseAttrs$S.apply(this, [attrs])]);
}, p$1);

Clazz.newMeth(C$, 'parseParam$S$java_util_Map', function (param, attrs) {
var tokens=param.trim$().split$S("[ \t\n]+");
if (tokens.length < 1) return false;
var typeName;
var varName;
var maybeIOType=tokens[0].toUpperCase$();
if (p$1.isIOType$S.apply(this, [maybeIOType])) {
if (tokens.length == 2) {
typeName="Object";
varName=tokens[1];
} else if (tokens.length == 3) {
typeName=tokens[1];
varName=tokens[2];
} else return false;
attrs.put$TK$TV("type", maybeIOType);
} else {
if (tokens.length < 2) return false;
typeName=tokens[0];
varName=tokens[1];
}try {
var type=this.scriptService.lookupClass$S(typeName);
p$1.addItem$S$Class$java_util_Map$Z.apply(this, [varName, type, attrs, true]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"javax.script.ScriptException")){
this.log.warn$O$Throwable("Invalid class: " + typeName, exc);
return false;
} else {
throw exc;
}
}
if ("result".equals$O(varName)) {
this.info.setReturnValueAppended$Z(false);
}return true;
}, p$1);

Clazz.newMeth(C$, 'parseAttrs$S', function (attrs) {
return this.parser.parse$S$Z(attrs, false).asMap$();
}, p$1);

Clazz.newMeth(C$, 'isIOType$S', function (token) {
return this.convertService.convert$O$Class(token.toUpperCase$(), Clazz.getClass($I$(2))) != null ;
}, p$1);

Clazz.newMeth(C$, 'addItem$S$Class$java_util_Map$Z', function (name, type, attrs, explicit) {
var item=Clazz.new_(1,{T:"Object"},$I$(3,1).c$$org_scijava_module_ModuleInfo$S$Class,[this.info, name, type]);
for (var key, $key = attrs.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=attrs.get$O(key);
p$1.assignAttribute$org_scijava_module_DefaultMutableModuleItem$S$O.apply(this, [item, key, value]);
}
if (item.isInput$()) this.info.registerInput$org_scijava_module_ModuleItem(item);
if (item.isOutput$()) {
this.info.registerOutput$org_scijava_module_ModuleItem(item);
if (explicit) this.info.setReturnValueAppended$Z(false);
}}, p$1);

Clazz.newMeth(C$, 'assignAttribute$org_scijava_module_DefaultMutableModuleItem$S$O', function (item, k, v) {
if (p$1.is$S$S.apply(this, [k, "callback"])) item.setCallback$S(p$1.as$O$Class.apply(this, [v, Clazz.getClass(String)]));
 else if (p$1.is$S$S.apply(this, [k, "choices"])) item.setChoices$java_util_List(p$1.asList$O$Class.apply(this, [v, item.getType$()]));
 else if (p$1.is$S$S.apply(this, [k, "columns"])) item.setColumnCount$I((p$1.as$O$Class.apply(this, [v, Integer.TYPE])).valueOf());
 else if (p$1.is$S$S.apply(this, [k, "description"])) item.setDescription$S(p$1.as$O$Class.apply(this, [v, Clazz.getClass(String)]));
 else if (p$1.is$S$S.apply(this, [k, "initializer"])) item.setInitializer$S(p$1.as$O$Class.apply(this, [v, Clazz.getClass(String)]));
 else if (p$1.is$S$S.apply(this, [k, "validater"])) item.setValidater$S(p$1.as$O$Class.apply(this, [v, Clazz.getClass(String)]));
 else if (p$1.is$S$S.apply(this, [k, "type"])) item.setIOType$org_scijava_ItemIO(p$1.as$O$Class.apply(this, [v, Clazz.getClass($I$(2))]));
 else if (p$1.is$S$S.apply(this, [k, "label"])) item.setLabel$S(p$1.as$O$Class.apply(this, [v, Clazz.getClass(String)]));
 else if (p$1.is$S$S.apply(this, [k, "max"])) item.setMaximumValue$TT(p$1.as$O$Class.apply(this, [v, item.getType$()]));
 else if (p$1.is$S$S.apply(this, [k, "min"])) item.setMinimumValue$TT(p$1.as$O$Class.apply(this, [v, item.getType$()]));
 else if (p$1.is$S$S.apply(this, [k, "name"])) item.setName$S(p$1.as$O$Class.apply(this, [v, Clazz.getClass(String)]));
 else if (p$1.is$S$S.apply(this, [k, "persist"])) item.setPersisted$Z((p$1.as$O$Class.apply(this, [v, Boolean.TYPE])).valueOf());
 else if (p$1.is$S$S.apply(this, [k, "persistKey"])) item.setPersistKey$S(p$1.as$O$Class.apply(this, [v, Clazz.getClass(String)]));
 else if (p$1.is$S$S.apply(this, [k, "required"])) item.setRequired$Z((p$1.as$O$Class.apply(this, [v, Boolean.TYPE])).valueOf());
 else if (p$1.is$S$S.apply(this, [k, "softMax"])) item.setSoftMaximum$TT(p$1.as$O$Class.apply(this, [v, item.getType$()]));
 else if (p$1.is$S$S.apply(this, [k, "softMin"])) item.setSoftMinimum$TT(p$1.as$O$Class.apply(this, [v, item.getType$()]));
 else if (p$1.is$S$S.apply(this, [k, "stepSize"])) item.setStepSize$Number(p$1.as$O$Class.apply(this, [v, Double.TYPE]));
 else if (p$1.is$S$S.apply(this, [k, "style"])) item.setWidgetStyle$S(p$1.as$O$Class.apply(this, [v, Clazz.getClass(String)]));
 else if (p$1.is$S$S.apply(this, [k, "visibility"])) item.setVisibility$org_scijava_ItemVisibility(p$1.as$O$Class.apply(this, [v, Clazz.getClass($I$(4))]));
 else if (p$1.is$S$S.apply(this, [k, "value"])) item.setDefaultValue$TT(p$1.as$O$Class.apply(this, [v, item.getType$()]));
 else item.set$S$S(k, v.toString());
}, p$1);

Clazz.newMeth(C$, 'is$S$S', function (key, desired) {
return desired.equalsIgnoreCase$S(key);
}, p$1);

Clazz.newMeth(C$, 'as$O$Class', function (v, type) {
var converted=this.convertService.convert$O$Class(v, type);
if (converted != null ) return converted;
return this.convertService.convert$O$Class(v.toString(), type);
}, p$1);

Clazz.newMeth(C$, 'asList$O$Class', function (v, type) {
var result=Clazz.new_(1,{E:"Object"},$I$(5,1));
var list=p$1.as$O$Class.apply(this, [v, Clazz.getClass($I$(6),['add$TE','add$I$TE','addAll$java_util_Collection','addAll$I$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','get$I','hashCode$','indexOf$O','isEmpty$','iterator$','lastIndexOf$O','listIterator$','listIterator$I','remove$O','remove$I','removeAll$java_util_Collection','replaceAll$java_util_function_UnaryOperator','retainAll$java_util_Collection','set$I$TE','size$','sort$java_util_Comparator','spliterator$','subList$I$I','toArray$','toArray$TTA'])]);
for (var item, $item = list.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
result.add$TE(p$1.as$O$Class.apply(this, [item, type]));
}
return result;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.script.process.ParameterScriptProcessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.script.process.ScriptProcessor.class" ']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']],
  [['convertService','org.scijava.convert.ConvertService',null,['org.scijava.plugin.Parameter']],['']],
  [['parser','org.scijava.parse.ParseService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
