(function(){var P$=Clazz.newPackage("org.scijava.script.process"),I$=[[0,'java.util.regex.Pattern','java.util.Collections','java.util.ArrayList','java.util.List']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DirectiveScriptProcessor", null, null, 'org.scijava.script.process.ScriptProcessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.p=$I$(1).compile$S("^#@(\\w*)\\s*(\\((.*)\\))?\\s*(.*)$");
}, 1);

C$.$fields$=[['O',['p','java.util.regex.Pattern','convertService','org.scijava.convert.ConvertService','parser','org.scijava.parse.ParseService','info','org.scijava.script.ScriptInfo','directivesToMatch','java.util.function.Predicate']]]

Clazz.newMeth(C$, 'c$$java_util_function_Predicate', function (directivesToMatch) {
;C$.$init$.apply(this);
this.directivesToMatch=directivesToMatch;
}, 1);

Clazz.newMeth(C$, 'begin$org_scijava_script_ScriptInfo', function (scriptInfo) {
this.info=scriptInfo;
});

Clazz.newMeth(C$, 'process$S', function (line) {
if (!line.startsWith$S("#@")) return line;
var m=this.p.matcher$CharSequence(line);
if (!m.matches$()) return line;
var directive=m.group$I(1);
if (!this.directivesToMatch.test$(directive)) return line;
var attrString=m.group$I(3);
var attrs=attrString == null  ? $I$(2).emptyMap$() : this.parser.parse$S$Z(attrString, false).asMap$();
var theRest=m.group$I(4);
return this.process$S$java_util_Map$S(directive, attrs, theRest);
});

Clazz.newMeth(C$, 'info$', function () {
return this.info;
});

Clazz.newMeth(C$, 'is$S$S', function (key, desired) {
return desired.equalsIgnoreCase$S(key);
});

Clazz.newMeth(C$, 'as$O$Class', function (v, type) {
var converted=this.convertService.convert$O$Class(v, type);
if (converted != null ) return converted;
return this.convertService.convert$O$Class(v.toString(), type);
});

Clazz.newMeth(C$, 'asList$O$Class', function (v, type) {
var result=Clazz.new_(1,{E:"Object"},$I$(3,1));
var list=this.as$O$Class(v, Clazz.getClass($I$(4),['add$TE','add$I$TE','addAll$java_util_Collection','addAll$I$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','get$I','hashCode$','indexOf$O','isEmpty$','iterator$','lastIndexOf$O','listIterator$','listIterator$I','remove$O','remove$I','removeAll$java_util_Collection','replaceAll$java_util_function_UnaryOperator','retainAll$java_util_Collection','set$I$TE','size$','sort$java_util_Comparator','spliterator$','subList$I$I','toArray$','toArray$TTA']));
for (var item, $item = list.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
result.add$TE(this.as$O$Class(item, type));
}
return result;
});
C$.$getAnn$ = function(){ return [
[['convertService','org.scijava.convert.ConvertService',null,['org.scijava.plugin.Parameter']],['']],
  [['parser','org.scijava.parse.ParseService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
