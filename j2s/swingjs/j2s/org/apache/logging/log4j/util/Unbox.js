(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'ThreadLocal','StringBuilder','org.apache.logging.log4j.util.Unbox','org.apache.logging.log4j.status.StatusLogger',['org.apache.logging.log4j.util.Unbox','.WebSafeState'],'org.apache.logging.log4j.util.PropertiesUtil',['org.apache.logging.log4j.util.Unbox','.State'],'org.apache.logging.log4j.util.Constants']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Unbox", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LOGGER=$I$(4).getLogger$();
C$.RINGBUFFER_SIZE=C$.calculateRingBufferSize$S("log4j.unbox.ringbuffer.size");
C$.MASK=C$.RINGBUFFER_SIZE - 1;
C$.threadLocalState=Clazz.new_(1,{T:"org.apache.logging.log4j.util.Unbox.State"},$I$(1,1));
C$.webSafeState=Clazz.new_($I$(5,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['BITS_PER_INT','RINGBUFFER_MIN_SIZE','RINGBUFFER_SIZE','MASK'],'O',['LOGGER','org.apache.logging.log4j.Logger','threadLocalState','ThreadLocal','webSafeState','org.apache.logging.log4j.util.Unbox.WebSafeState']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calculateRingBufferSize$S', function (propertyName) {
var userPreferredRBSize=$I$(6).getProperties$().getStringProperty$S$S(propertyName, String.valueOf$I(32));
try {
var size=Integer.parseInt$S(userPreferredRBSize);
if (size < 32) {
size=32;
C$.LOGGER.warn$S$O$O$O("Invalid {} {}, using minimum size {}.", propertyName, userPreferredRBSize, new Integer(32));
}return C$.ceilingNextPowerOfTwo$I(size);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.LOGGER.warn$S$O$O$O("Invalid {} {}, using default size {}.", propertyName, userPreferredRBSize, new Integer(32));
return 32;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'ceilingNextPowerOfTwo$I', function (x) {
return 1 << (32 - Integer.numberOfLeadingZeros$I(x - 1));
}, 1);

Clazz.newMeth(C$, 'box$F', function (value) {
return C$.getSB$().append$F(value);
}, 1);

Clazz.newMeth(C$, 'box$D', function (value) {
return C$.getSB$().append$D(value);
}, 1);

Clazz.newMeth(C$, 'box$H', function (value) {
return C$.getSB$().append$I(value);
}, 1);

Clazz.newMeth(C$, 'box$I', function (value) {
return C$.getSB$().append$I(value);
}, 1);

Clazz.newMeth(C$, 'box$C', function (value) {
return C$.getSB$().append$C(value);
}, 1);

Clazz.newMeth(C$, 'box$J', function (value) {
return C$.getSB$().append$J(value);
}, 1);

Clazz.newMeth(C$, 'box$B', function (value) {
return C$.getSB$().append$I(value);
}, 1);

Clazz.newMeth(C$, 'box$Z', function (value) {
return C$.getSB$().append$Z(value);
}, 1);

Clazz.newMeth(C$, 'getState$', function () {
var state=C$.threadLocalState.get$();
if (state == null ) {
state=Clazz.new_($I$(7,1));
C$.threadLocalState.set$TT(state);
}return state;
}, 1);

Clazz.newMeth(C$, 'getSB$', function () {
return $I$(8).ENABLE_THREADLOCALS ? C$.getState$().getStringBuilder$() : C$.webSafeState.getStringBuilder$();
}, 1);

Clazz.newMeth(C$, 'getRingbufferSize$', function () {
return C$.RINGBUFFER_SIZE;
}, 1);
C$.$getAnn$ = function(){ return [
[[null,'org.apache.logging.log4j.util.Unbox',null,['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']],
  [['M:box','StringBuilder','box$F',['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']],
  [['M:box','.','box$D',['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']],
  [['M:box','.','box$H',['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']],
  [['M:box','.','box$I',['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']],
  [['M:box','.','box$C',['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']],
  [['M:box','.','box$J',['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']],
  [['M:box','.','box$B',['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']],
  [['M:box','.','box$Z',['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Unbox, "WebSafeState", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ringBuffer=Clazz.new_(1,{T:"StringBuilder[]"},$I$(1,1));
this.current=Clazz.new_(1,{T:"int[]"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['ringBuffer','ThreadLocal','+current']]]

Clazz.newMeth(C$, 'getStringBuilder$', function () {
var array=this.ringBuffer.get$();
if (array == null ) {
array=Clazz.array($I$(2), [$I$(3).RINGBUFFER_SIZE]);
for (var i=0; i < array.length; i++) {
array[i]=Clazz.new_($I$(2,1).c$$I,[21]);
}
this.ringBuffer.set$TT(array);
this.current.set$TT(Clazz.array(Integer.TYPE, [1]));
}var index=this.current.get$();
var result=array[$I$(3).MASK & index[0]++];
result.setLength$I(0);
return result;
});

Clazz.newMeth(C$, 'isBoxedPrimitive$StringBuilder', function (text) {
var array=this.ringBuffer.get$();
if (array == null ) {
return false;
}for (var i=0; i < array.length; i++) {
if (text === array[i] ) {
return true;
}}
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Unbox, "State", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ringBuffer=Clazz.array($I$(2), [$I$(3).RINGBUFFER_SIZE]);
}, 1);

C$.$fields$=[['I',['current'],'O',['ringBuffer','StringBuilder[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
for (var i=0; i < this.ringBuffer.length; i++) {
this.ringBuffer[i]=Clazz.new_($I$(2,1).c$$I,[21]);
}
}, 1);

Clazz.newMeth(C$, 'getStringBuilder$', function () {
var result=this.ringBuffer[$I$(3).MASK & this.current++];
result.setLength$I(0);
return result;
});

Clazz.newMeth(C$, 'isBoxedPrimitive$StringBuilder', function (text) {
for (var i=0; i < this.ringBuffer.length; i++) {
if (text === this.ringBuffer[i] ) {
return true;
}}
return false;
});
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
