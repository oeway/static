(function(){var P$=Clazz.newPackage("net.imglib2.img.basictypeaccess"),I$=[[0,'java.util.Collections','java.util.EnumSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "AccessFlags", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "DIRTY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "VOLATILE", 1, []);
C$.flags_DIRTY_VOLATILE=$I$(1).unmodifiableSet$java_util_Set($I$(2).of$TE$TE(C$.DIRTY, C$.VOLATILE));
C$.flags_DIRTY=$I$(1).unmodifiableSet$java_util_Set($I$(2).of$TE(C$.DIRTY));
C$.flags_VOLATILE=$I$(1).unmodifiableSet$java_util_Set($I$(2).of$TE(C$.VOLATILE));
C$.flags_NONE=$I$(1).unmodifiableSet$java_util_Set($I$(2).noneOf$Class(Clazz.getClass(C$)));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['flags_DIRTY_VOLATILE','java.util.Set','+flags_DIRTY','+flags_VOLATILE','+flags_NONE']]]

Clazz.newMeth(C$, 'ofAccess$O', function (access) {
var dirtyAccesses=(Clazz.instanceOf(access, "net.imglib2.Dirty"));
var volatileAccesses=(Clazz.instanceOf(access, "net.imglib2.img.basictypeaccess.volatiles.VolatileAccess"));
return C$.fromBooleansDirtyVolatile$Z$Z(dirtyAccesses, volatileAccesses);
}, 1);

Clazz.newMeth(C$, 'setOf$', function () {
return C$.flags_NONE;
}, 1);

Clazz.newMeth(C$, 'setOf$net_imglib2_img_basictypeaccess_AccessFlags', function (f1) {
return f1 === C$.DIRTY  ? C$.flags_DIRTY : C$.flags_VOLATILE;
}, 1);

Clazz.newMeth(C$, 'setOf$net_imglib2_img_basictypeaccess_AccessFlags$net_imglib2_img_basictypeaccess_AccessFlags', function (f1, f2) {
return f1 === C$.DIRTY  ? (f2 === C$.DIRTY  ? C$.flags_DIRTY : C$.flags_DIRTY_VOLATILE) : (f2 === C$.DIRTY  ? C$.flags_DIRTY_VOLATILE : C$.flags_VOLATILE);
}, 1);

Clazz.newMeth(C$, 'setOf$net_imglib2_img_basictypeaccess_AccessFlagsA', function (flags) {
var dirtyAccesses=false;
var volatileAccesses=false;
for (var flag, $flag = 0, $$flag = flags; $flag<$$flag.length&&((flag=($$flag[$flag])),1);$flag++) {
if (flag === C$.DIRTY ) dirtyAccesses=true;
 else if (flag === C$.VOLATILE ) volatileAccesses=true;
}
return C$.fromBooleansDirtyVolatile$Z$Z(dirtyAccesses, volatileAccesses);
}, 1);

Clazz.newMeth(C$, 'fromBooleansDirtyVolatile$Z$Z', function (dirtyAccesses, volatileAccesses) {
return dirtyAccesses ? (volatileAccesses ? C$.flags_DIRTY_VOLATILE : C$.flags_DIRTY) : (volatileAccesses ? C$.flags_VOLATILE : C$.flags_NONE);
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
