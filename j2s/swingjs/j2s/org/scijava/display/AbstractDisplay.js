(function(){var P$=Clazz.newPackage("org.scijava.display"),I$=[[0,'java.util.ArrayList','StringBuilder','org.scijava.display.event.DisplayUpdatedEvent',['org.scijava.display.event.DisplayUpdatedEvent','.DisplayUpdateLevel'],'org.scijava.display.event.DisplayDeletedEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractDisplay", null, 'org.scijava.plugin.AbstractRichPlugin', 'org.scijava.display.Display');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isClosed=false;
}, 1);

C$.$fields$=[['Z',['structureChanged','isClosed'],'S',['name'],'O',['type','Class','objects','java.util.ArrayList','eventService','org.scijava.event.EventService','displayService','org.scijava.display.DisplayService']]]

Clazz.newMeth(C$, 'c$$Class', function (type) {
Clazz.super_(C$, this);
this.type=type;
this.objects=Clazz.new_(1,{E:"Object"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'rebuild$', function () {
this.structureChanged=true;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(2,1).c$$S,[C$.superclazz.prototype.toString.apply(this, [])]);
sb.append$S(": type=" + this.type);
sb.append$S(", name=" + this.name);
sb.append$S(", objects={");
var first=true;
for (var object, $object = this.objects.iterator$(); $object.hasNext$()&&((object=($object.next$())),1);) {
if (first) first=false;
 else sb.append$S(", ");
sb.append$O(object);
}
sb.append$S("}");
return sb.toString();
});

Clazz.newMeth(C$, 'canDisplay$Class', function (c) {
return this.type.isAssignableFrom$Class(c);
});

Clazz.newMeth(C$, 'display$O', function (o) {
this.checkObject$O(o);
var typedObj=o;
this.add$TT(typedObj);
});

Clazz.newMeth(C$, 'update$', function () {
if (this.eventService != null  && !this.isClosed ) {
this.eventService.publish$TE(Clazz.new_($I$(3,1).c$$org_scijava_display_Display$org_scijava_display_event_DisplayUpdatedEvent_DisplayUpdateLevel,[this, this.structureChanged ? $I$(4).REBUILD : $I$(4).UPDATE]));
}this.structureChanged=false;
});

Clazz.newMeth(C$, 'close$', function () {
if (this.isClosed) return;
if (this.displayService != null  && this.displayService.getActiveDisplay$() === this  ) {
this.displayService.setActiveDisplay$org_scijava_display_Display(null);
}if (this.eventService != null ) {
this.eventService.publish$TE(Clazz.new_($I$(5,1).c$$org_scijava_display_Display,[this]));
}this.isClosed=true;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, ['add$I$TT','add$I$TE'], function (index, element) {
this.objects.add$I$TE(index, element);
this.noteStructureChange$();
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
var changed=this.objects.addAll$I$java_util_Collection(index, c);
if (changed) this.noteStructureChange$();
return changed;
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.objects.get$I(index);
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
return this.objects.indexOf$O(o);
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
return this.objects.lastIndexOf$O(o);
});

Clazz.newMeth(C$, 'listIterator$', function () {
return this.objects.listIterator$();
});

Clazz.newMeth(C$, 'listIterator$I', function (index) {
return this.objects.listIterator$I(index);
});

Clazz.newMeth(C$, 'remove$I', function (index) {
var result=this.objects.remove$I(index);
if (result != null ) this.noteStructureChange$();
return result;
});

Clazz.newMeth(C$, ['set$I$TT','set$I$TE'], function (index, element) {
var result=this.objects.set$I$TE(index, element);
if (result != null ) this.noteStructureChange$();
return result;
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return this.objects.subList$I$I(fromIndex, toIndex);
});

Clazz.newMeth(C$, ['add$TT','add$TE'], function (o) {
this.checkObject$O(o);
var changed=this.objects.add$TE(o);
if (changed) this.noteStructureChange$();
return changed;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
this.checkObject$O(o);
}
var changed=this.objects.addAll$java_util_Collection(c);
if (changed) this.noteStructureChange$();
return changed;
});

Clazz.newMeth(C$, 'clear$', function () {
var changed=this.objects.size$() > 0;
this.objects.clear$();
if (changed) this.noteStructureChange$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.objects.contains$O(o);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return this.objects.containsAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.objects.isEmpty$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.objects.iterator$();
});

Clazz.newMeth(C$, 'remove$O', function (o) {
var changed=this.objects.remove$O(o);
if (changed) this.noteStructureChange$();
return changed;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var changed=this.objects.removeAll$java_util_Collection(c);
if (changed) this.noteStructureChange$();
return changed;
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
var changed=this.objects.retainAll$java_util_Collection(c);
if (changed) this.noteStructureChange$();
return changed;
});

Clazz.newMeth(C$, 'size$', function () {
return this.objects.size$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.objects.toArray$();
});

Clazz.newMeth(C$, ['toArray$TUA'], function (a) {
return this.objects.toArray$TTA(a);
});

Clazz.newMeth(C$, 'checkObject$O', function (o) {
if (!this.canDisplay$Class(o.getClass$())) {
var typeName=o.getClass$().getName$();
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported type: " + typeName]);
}if (!this.canDisplay$O(o)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported object: " + o]);
}});

Clazz.newMeth(C$, 'noteStructureChange$', function () {
this.structureChanged=true;
});
C$.$getAnn$ = function(){ return [
[['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
