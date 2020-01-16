(function(){var P$=Clazz.newPackage("net.imglib2.loops"),I$=[[0,'net.imglib2.Positionable','AssertionError',['net.imglib2.loops.SyncedPositionables','.Forwarder1'],['net.imglib2.loops.SyncedPositionables','.Forwarder2'],['net.imglib2.loops.SyncedPositionables','.Forwarder3'],['net.imglib2.loops.SyncedPositionables','.Forwarder4'],['net.imglib2.loops.SyncedPositionables','.Forwarder5'],['net.imglib2.loops.SyncedPositionables','.GeneralForwarder'],'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SyncedPositionables", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Forwarder',10],['Forwarder1',10],['Forwarder2',10],['Forwarder3',10],['Forwarder4',10],['Forwarder5',10],['GeneralForwarder',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'create$java_util_List', function (positionables) {
switch (positionables.size$()) {
case 0:
throw Clazz.new_($I$(2,1));
case 1:
return Clazz.new_($I$(3,1).c$$java_util_List,[positionables]);
case 2:
return Clazz.new_($I$(4,1).c$$java_util_List,[positionables]);
case 3:
return Clazz.new_($I$(5,1).c$$java_util_List,[positionables]);
case 4:
return Clazz.new_($I$(6,1).c$$java_util_List,[positionables]);
case 5:
return Clazz.new_($I$(7,1).c$$java_util_List,[positionables]);
default:
return Clazz.new_($I$(8,1).c$$java_util_List,[positionables]);
}
}, 1);

Clazz.newMeth(C$, 'createSlow$java_util_List', function (positionables) {
return Clazz.new_($I$(8,1).c$$java_util_List,[positionables]);
}, 1);

Clazz.newMeth(C$, 'create$net_imglib2_PositionableA', function (positionables) {
return C$.create$java_util_List($I$(9).asList$TTA(positionables));
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.SyncedPositionables, "Forwarder", function(){
}, null, 'net.imglib2.Positionable');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'bck$I', function (d) {
this.move$I$I(-1, d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var i=0; i < localizable.numDimensions$(); i++) this.move$J$I(localizable.getLongPosition$I(i), i);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var i=0; i < distance.length; i++) this.move$J$I(distance[i], i);

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var i=0; i < distance.length; i++) this.move$J$I(distance[i], i);

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'numDimensions$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
};})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SyncedPositionables, "Forwarder1", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imglib2.loops.SyncedPositionables','net.imglib2.loops.SyncedPositionables.Forwarder']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['a','net.imglib2.Positionable']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (values) {
;C$.$init$.apply(this);
this.a=values.get$I(0);
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.a.fwd$I(d);
});

Clazz.newMeth(C$, 'move$J$I', function (offset, d) {
this.a.move$J$I(offset, d);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SyncedPositionables, "Forwarder2", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imglib2.loops.SyncedPositionables','net.imglib2.loops.SyncedPositionables.Forwarder']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['a','net.imglib2.Positionable','+b']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (values) {
;C$.$init$.apply(this);
this.a=values.get$I(0);
this.b=values.get$I(1);
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.a.fwd$I(d);
this.b.fwd$I(d);
});

Clazz.newMeth(C$, 'move$J$I', function (offset, d) {
this.a.move$J$I(offset, d);
this.b.move$J$I(offset, d);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SyncedPositionables, "Forwarder3", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imglib2.loops.SyncedPositionables','net.imglib2.loops.SyncedPositionables.Forwarder']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['a','net.imglib2.Positionable','+b','+c']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (values) {
;C$.$init$.apply(this);
this.a=values.get$I(0);
this.b=values.get$I(1);
this.c=values.get$I(2);
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.a.fwd$I(d);
this.b.fwd$I(d);
this.c.fwd$I(d);
});

Clazz.newMeth(C$, 'move$J$I', function (offset, d) {
this.a.move$J$I(offset, d);
this.b.move$J$I(offset, d);
this.c.move$J$I(offset, d);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SyncedPositionables, "Forwarder4", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imglib2.loops.SyncedPositionables','net.imglib2.loops.SyncedPositionables.Forwarder']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['a','net.imglib2.Positionable','+b','+c','+d']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (values) {
;C$.$init$.apply(this);
this.a=values.get$I(0);
this.b=values.get$I(1);
this.c=values.get$I(2);
this.d=values.get$I(3);
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.a.fwd$I(d);
this.b.fwd$I(d);
this.c.fwd$I(d);
this.d.fwd$I(d);
});

Clazz.newMeth(C$, 'move$J$I', function (offset, d) {
this.a.move$J$I(offset, d);
this.b.move$J$I(offset, d);
this.c.move$J$I(offset, d);
this.d.move$J$I(offset, d);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SyncedPositionables, "Forwarder5", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imglib2.loops.SyncedPositionables','net.imglib2.loops.SyncedPositionables.Forwarder']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['a','net.imglib2.Positionable','+b','+c','+d','+e']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (values) {
;C$.$init$.apply(this);
this.a=values.get$I(0);
this.b=values.get$I(1);
this.c=values.get$I(2);
this.d=values.get$I(3);
this.e=values.get$I(4);
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.a.fwd$I(d);
this.b.fwd$I(d);
this.c.fwd$I(d);
this.d.fwd$I(d);
this.e.fwd$I(d);
});

Clazz.newMeth(C$, 'move$J$I', function (offset, d) {
this.a.move$J$I(offset, d);
this.b.move$J$I(offset, d);
this.c.move$J$I(offset, d);
this.d.move$J$I(offset, d);
this.e.move$J$I(offset, d);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SyncedPositionables, "GeneralForwarder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imglib2.loops.SyncedPositionables','net.imglib2.loops.SyncedPositionables.Forwarder']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['values','net.imglib2.Positionable[]']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (values) {
;C$.$init$.apply(this);
this.values=values.toArray$TTA(Clazz.array($I$(1), [values.size$()]));
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
for (var positionable, $positionable = 0, $$positionable = this.values; $positionable<$$positionable.length&&((positionable=($$positionable[$positionable])),1);$positionable++) positionable.fwd$I(d);

});

Clazz.newMeth(C$, 'move$J$I', function (offset, d) {
for (var positionable, $positionable = 0, $$positionable = this.values; $positionable<$$positionable.length&&((positionable=($$positionable[$positionable])),1);$positionable++) positionable.move$J$I(offset, d);

});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
