(function(){var P$=Clazz.newPackage("gnu.trove"),I$=[[0,'gnu.trove.impl.unmodifiable.TUnmodifiableDoubleCollection','gnu.trove.impl.unmodifiable.TUnmodifiableFloatCollection','gnu.trove.impl.unmodifiable.TUnmodifiableIntCollection','gnu.trove.impl.unmodifiable.TUnmodifiableLongCollection','gnu.trove.impl.unmodifiable.TUnmodifiableByteCollection','gnu.trove.impl.unmodifiable.TUnmodifiableShortCollection','gnu.trove.impl.unmodifiable.TUnmodifiableCharCollection','gnu.trove.impl.unmodifiable.TUnmodifiableDoubleSet','gnu.trove.impl.unmodifiable.TUnmodifiableFloatSet','gnu.trove.impl.unmodifiable.TUnmodifiableIntSet','gnu.trove.impl.unmodifiable.TUnmodifiableLongSet','gnu.trove.impl.unmodifiable.TUnmodifiableByteSet','gnu.trove.impl.unmodifiable.TUnmodifiableShortSet','gnu.trove.impl.unmodifiable.TUnmodifiableCharSet','gnu.trove.impl.unmodifiable.TUnmodifiableRandomAccessDoubleList','gnu.trove.impl.unmodifiable.TUnmodifiableDoubleList','gnu.trove.impl.unmodifiable.TUnmodifiableRandomAccessFloatList','gnu.trove.impl.unmodifiable.TUnmodifiableFloatList','gnu.trove.impl.unmodifiable.TUnmodifiableRandomAccessIntList','gnu.trove.impl.unmodifiable.TUnmodifiableIntList','gnu.trove.impl.unmodifiable.TUnmodifiableRandomAccessLongList','gnu.trove.impl.unmodifiable.TUnmodifiableLongList','gnu.trove.impl.unmodifiable.TUnmodifiableRandomAccessByteList','gnu.trove.impl.unmodifiable.TUnmodifiableByteList','gnu.trove.impl.unmodifiable.TUnmodifiableRandomAccessShortList','gnu.trove.impl.unmodifiable.TUnmodifiableShortList','gnu.trove.impl.unmodifiable.TUnmodifiableRandomAccessCharList','gnu.trove.impl.unmodifiable.TUnmodifiableCharList','gnu.trove.impl.unmodifiable.TUnmodifiableDoubleDoubleMap','gnu.trove.impl.unmodifiable.TUnmodifiableDoubleFloatMap','gnu.trove.impl.unmodifiable.TUnmodifiableDoubleIntMap','gnu.trove.impl.unmodifiable.TUnmodifiableDoubleLongMap','gnu.trove.impl.unmodifiable.TUnmodifiableDoubleByteMap','gnu.trove.impl.unmodifiable.TUnmodifiableDoubleShortMap','gnu.trove.impl.unmodifiable.TUnmodifiableDoubleCharMap','gnu.trove.impl.unmodifiable.TUnmodifiableFloatDoubleMap','gnu.trove.impl.unmodifiable.TUnmodifiableFloatFloatMap','gnu.trove.impl.unmodifiable.TUnmodifiableFloatIntMap','gnu.trove.impl.unmodifiable.TUnmodifiableFloatLongMap','gnu.trove.impl.unmodifiable.TUnmodifiableFloatByteMap','gnu.trove.impl.unmodifiable.TUnmodifiableFloatShortMap','gnu.trove.impl.unmodifiable.TUnmodifiableFloatCharMap','gnu.trove.impl.unmodifiable.TUnmodifiableIntDoubleMap','gnu.trove.impl.unmodifiable.TUnmodifiableIntFloatMap','gnu.trove.impl.unmodifiable.TUnmodifiableIntIntMap','gnu.trove.impl.unmodifiable.TUnmodifiableIntLongMap','gnu.trove.impl.unmodifiable.TUnmodifiableIntByteMap','gnu.trove.impl.unmodifiable.TUnmodifiableIntShortMap','gnu.trove.impl.unmodifiable.TUnmodifiableIntCharMap','gnu.trove.impl.unmodifiable.TUnmodifiableLongDoubleMap','gnu.trove.impl.unmodifiable.TUnmodifiableLongFloatMap','gnu.trove.impl.unmodifiable.TUnmodifiableLongIntMap','gnu.trove.impl.unmodifiable.TUnmodifiableLongLongMap','gnu.trove.impl.unmodifiable.TUnmodifiableLongByteMap','gnu.trove.impl.unmodifiable.TUnmodifiableLongShortMap','gnu.trove.impl.unmodifiable.TUnmodifiableLongCharMap','gnu.trove.impl.unmodifiable.TUnmodifiableByteDoubleMap','gnu.trove.impl.unmodifiable.TUnmodifiableByteFloatMap','gnu.trove.impl.unmodifiable.TUnmodifiableByteIntMap','gnu.trove.impl.unmodifiable.TUnmodifiableByteLongMap','gnu.trove.impl.unmodifiable.TUnmodifiableByteByteMap','gnu.trove.impl.unmodifiable.TUnmodifiableByteShortMap','gnu.trove.impl.unmodifiable.TUnmodifiableByteCharMap','gnu.trove.impl.unmodifiable.TUnmodifiableShortDoubleMap','gnu.trove.impl.unmodifiable.TUnmodifiableShortFloatMap','gnu.trove.impl.unmodifiable.TUnmodifiableShortIntMap','gnu.trove.impl.unmodifiable.TUnmodifiableShortLongMap','gnu.trove.impl.unmodifiable.TUnmodifiableShortByteMap','gnu.trove.impl.unmodifiable.TUnmodifiableShortShortMap','gnu.trove.impl.unmodifiable.TUnmodifiableShortCharMap','gnu.trove.impl.unmodifiable.TUnmodifiableCharDoubleMap','gnu.trove.impl.unmodifiable.TUnmodifiableCharFloatMap','gnu.trove.impl.unmodifiable.TUnmodifiableCharIntMap','gnu.trove.impl.unmodifiable.TUnmodifiableCharLongMap','gnu.trove.impl.unmodifiable.TUnmodifiableCharByteMap','gnu.trove.impl.unmodifiable.TUnmodifiableCharShortMap','gnu.trove.impl.unmodifiable.TUnmodifiableCharCharMap','gnu.trove.impl.unmodifiable.TUnmodifiableDoubleObjectMap','gnu.trove.impl.unmodifiable.TUnmodifiableFloatObjectMap','gnu.trove.impl.unmodifiable.TUnmodifiableIntObjectMap','gnu.trove.impl.unmodifiable.TUnmodifiableLongObjectMap','gnu.trove.impl.unmodifiable.TUnmodifiableByteObjectMap','gnu.trove.impl.unmodifiable.TUnmodifiableShortObjectMap','gnu.trove.impl.unmodifiable.TUnmodifiableCharObjectMap','gnu.trove.impl.unmodifiable.TUnmodifiableObjectDoubleMap','gnu.trove.impl.unmodifiable.TUnmodifiableObjectFloatMap','gnu.trove.impl.unmodifiable.TUnmodifiableObjectIntMap','gnu.trove.impl.unmodifiable.TUnmodifiableObjectLongMap','gnu.trove.impl.unmodifiable.TUnmodifiableObjectByteMap','gnu.trove.impl.unmodifiable.TUnmodifiableObjectShortMap','gnu.trove.impl.unmodifiable.TUnmodifiableObjectCharMap','gnu.trove.impl.sync.TSynchronizedDoubleCollection','gnu.trove.impl.sync.TSynchronizedFloatCollection','gnu.trove.impl.sync.TSynchronizedIntCollection','gnu.trove.impl.sync.TSynchronizedLongCollection','gnu.trove.impl.sync.TSynchronizedByteCollection','gnu.trove.impl.sync.TSynchronizedShortCollection','gnu.trove.impl.sync.TSynchronizedCharCollection','gnu.trove.impl.sync.TSynchronizedDoubleSet','gnu.trove.impl.sync.TSynchronizedFloatSet','gnu.trove.impl.sync.TSynchronizedIntSet','gnu.trove.impl.sync.TSynchronizedLongSet','gnu.trove.impl.sync.TSynchronizedByteSet','gnu.trove.impl.sync.TSynchronizedShortSet','gnu.trove.impl.sync.TSynchronizedCharSet','gnu.trove.impl.sync.TSynchronizedRandomAccessDoubleList','gnu.trove.impl.sync.TSynchronizedDoubleList','gnu.trove.impl.sync.TSynchronizedRandomAccessFloatList','gnu.trove.impl.sync.TSynchronizedFloatList','gnu.trove.impl.sync.TSynchronizedRandomAccessIntList','gnu.trove.impl.sync.TSynchronizedIntList','gnu.trove.impl.sync.TSynchronizedRandomAccessLongList','gnu.trove.impl.sync.TSynchronizedLongList','gnu.trove.impl.sync.TSynchronizedRandomAccessByteList','gnu.trove.impl.sync.TSynchronizedByteList','gnu.trove.impl.sync.TSynchronizedRandomAccessShortList','gnu.trove.impl.sync.TSynchronizedShortList','gnu.trove.impl.sync.TSynchronizedRandomAccessCharList','gnu.trove.impl.sync.TSynchronizedCharList','gnu.trove.impl.sync.TSynchronizedDoubleDoubleMap','gnu.trove.impl.sync.TSynchronizedDoubleFloatMap','gnu.trove.impl.sync.TSynchronizedDoubleIntMap','gnu.trove.impl.sync.TSynchronizedDoubleLongMap','gnu.trove.impl.sync.TSynchronizedDoubleByteMap','gnu.trove.impl.sync.TSynchronizedDoubleShortMap','gnu.trove.impl.sync.TSynchronizedDoubleCharMap','gnu.trove.impl.sync.TSynchronizedFloatDoubleMap','gnu.trove.impl.sync.TSynchronizedFloatFloatMap','gnu.trove.impl.sync.TSynchronizedFloatIntMap','gnu.trove.impl.sync.TSynchronizedFloatLongMap','gnu.trove.impl.sync.TSynchronizedFloatByteMap','gnu.trove.impl.sync.TSynchronizedFloatShortMap','gnu.trove.impl.sync.TSynchronizedFloatCharMap','gnu.trove.impl.sync.TSynchronizedIntDoubleMap','gnu.trove.impl.sync.TSynchronizedIntFloatMap','gnu.trove.impl.sync.TSynchronizedIntIntMap','gnu.trove.impl.sync.TSynchronizedIntLongMap','gnu.trove.impl.sync.TSynchronizedIntByteMap','gnu.trove.impl.sync.TSynchronizedIntShortMap','gnu.trove.impl.sync.TSynchronizedIntCharMap','gnu.trove.impl.sync.TSynchronizedLongDoubleMap','gnu.trove.impl.sync.TSynchronizedLongFloatMap','gnu.trove.impl.sync.TSynchronizedLongIntMap','gnu.trove.impl.sync.TSynchronizedLongLongMap','gnu.trove.impl.sync.TSynchronizedLongByteMap','gnu.trove.impl.sync.TSynchronizedLongShortMap','gnu.trove.impl.sync.TSynchronizedLongCharMap','gnu.trove.impl.sync.TSynchronizedByteDoubleMap','gnu.trove.impl.sync.TSynchronizedByteFloatMap','gnu.trove.impl.sync.TSynchronizedByteIntMap','gnu.trove.impl.sync.TSynchronizedByteLongMap','gnu.trove.impl.sync.TSynchronizedByteByteMap','gnu.trove.impl.sync.TSynchronizedByteShortMap','gnu.trove.impl.sync.TSynchronizedByteCharMap','gnu.trove.impl.sync.TSynchronizedShortDoubleMap','gnu.trove.impl.sync.TSynchronizedShortFloatMap','gnu.trove.impl.sync.TSynchronizedShortIntMap','gnu.trove.impl.sync.TSynchronizedShortLongMap','gnu.trove.impl.sync.TSynchronizedShortByteMap','gnu.trove.impl.sync.TSynchronizedShortShortMap','gnu.trove.impl.sync.TSynchronizedShortCharMap','gnu.trove.impl.sync.TSynchronizedCharDoubleMap','gnu.trove.impl.sync.TSynchronizedCharFloatMap','gnu.trove.impl.sync.TSynchronizedCharIntMap','gnu.trove.impl.sync.TSynchronizedCharLongMap','gnu.trove.impl.sync.TSynchronizedCharByteMap','gnu.trove.impl.sync.TSynchronizedCharShortMap','gnu.trove.impl.sync.TSynchronizedCharCharMap','gnu.trove.impl.sync.TSynchronizedDoubleObjectMap','gnu.trove.impl.sync.TSynchronizedFloatObjectMap','gnu.trove.impl.sync.TSynchronizedIntObjectMap','gnu.trove.impl.sync.TSynchronizedLongObjectMap','gnu.trove.impl.sync.TSynchronizedByteObjectMap','gnu.trove.impl.sync.TSynchronizedShortObjectMap','gnu.trove.impl.sync.TSynchronizedCharObjectMap','gnu.trove.impl.sync.TSynchronizedObjectDoubleMap','gnu.trove.impl.sync.TSynchronizedObjectFloatMap','gnu.trove.impl.sync.TSynchronizedObjectIntMap','gnu.trove.impl.sync.TSynchronizedObjectLongMap','gnu.trove.impl.sync.TSynchronizedObjectByteMap','gnu.trove.impl.sync.TSynchronizedObjectShortMap','gnu.trove.impl.sync.TSynchronizedObjectCharMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TCollections");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'unmodifiableCollection$gnu_trove_TDoubleCollection', function (c) {
return Clazz.new_($I$(1,1).c$$gnu_trove_TDoubleCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableCollection$gnu_trove_TFloatCollection', function (c) {
return Clazz.new_($I$(2,1).c$$gnu_trove_TFloatCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableCollection$gnu_trove_TIntCollection', function (c) {
return Clazz.new_($I$(3,1).c$$gnu_trove_TIntCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableCollection$gnu_trove_TLongCollection', function (c) {
return Clazz.new_($I$(4,1).c$$gnu_trove_TLongCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableCollection$gnu_trove_TByteCollection', function (c) {
return Clazz.new_($I$(5,1).c$$gnu_trove_TByteCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableCollection$gnu_trove_TShortCollection', function (c) {
return Clazz.new_($I$(6,1).c$$gnu_trove_TShortCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableCollection$gnu_trove_TCharCollection', function (c) {
return Clazz.new_($I$(7,1).c$$gnu_trove_TCharCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableSet$gnu_trove_set_TDoubleSet', function (s) {
return Clazz.new_($I$(8,1).c$$gnu_trove_set_TDoubleSet,[s]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableSet$gnu_trove_set_TFloatSet', function (s) {
return Clazz.new_($I$(9,1).c$$gnu_trove_set_TFloatSet,[s]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableSet$gnu_trove_set_TIntSet', function (s) {
return Clazz.new_($I$(10,1).c$$gnu_trove_set_TIntSet,[s]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableSet$gnu_trove_set_TLongSet', function (s) {
return Clazz.new_($I$(11,1).c$$gnu_trove_set_TLongSet,[s]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableSet$gnu_trove_set_TByteSet', function (s) {
return Clazz.new_($I$(12,1).c$$gnu_trove_set_TByteSet,[s]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableSet$gnu_trove_set_TShortSet', function (s) {
return Clazz.new_($I$(13,1).c$$gnu_trove_set_TShortSet,[s]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableSet$gnu_trove_set_TCharSet', function (s) {
return Clazz.new_($I$(14,1).c$$gnu_trove_set_TCharSet,[s]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableList$gnu_trove_list_TDoubleList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(15,1).c$$gnu_trove_list_TDoubleList,[list]) : Clazz.new_($I$(16,1).c$$gnu_trove_list_TDoubleList,[list]));
}, 1);

Clazz.newMeth(C$, 'unmodifiableList$gnu_trove_list_TFloatList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(17,1).c$$gnu_trove_list_TFloatList,[list]) : Clazz.new_($I$(18,1).c$$gnu_trove_list_TFloatList,[list]));
}, 1);

Clazz.newMeth(C$, 'unmodifiableList$gnu_trove_list_TIntList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(19,1).c$$gnu_trove_list_TIntList,[list]) : Clazz.new_($I$(20,1).c$$gnu_trove_list_TIntList,[list]));
}, 1);

Clazz.newMeth(C$, 'unmodifiableList$gnu_trove_list_TLongList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(21,1).c$$gnu_trove_list_TLongList,[list]) : Clazz.new_($I$(22,1).c$$gnu_trove_list_TLongList,[list]));
}, 1);

Clazz.newMeth(C$, 'unmodifiableList$gnu_trove_list_TByteList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(23,1).c$$gnu_trove_list_TByteList,[list]) : Clazz.new_($I$(24,1).c$$gnu_trove_list_TByteList,[list]));
}, 1);

Clazz.newMeth(C$, 'unmodifiableList$gnu_trove_list_TShortList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(25,1).c$$gnu_trove_list_TShortList,[list]) : Clazz.new_($I$(26,1).c$$gnu_trove_list_TShortList,[list]));
}, 1);

Clazz.newMeth(C$, 'unmodifiableList$gnu_trove_list_TCharList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(27,1).c$$gnu_trove_list_TCharList,[list]) : Clazz.new_($I$(28,1).c$$gnu_trove_list_TCharList,[list]));
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TDoubleDoubleMap', function (m) {
return Clazz.new_($I$(29,1).c$$gnu_trove_map_TDoubleDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TDoubleFloatMap', function (m) {
return Clazz.new_($I$(30,1).c$$gnu_trove_map_TDoubleFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TDoubleIntMap', function (m) {
return Clazz.new_($I$(31,1).c$$gnu_trove_map_TDoubleIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TDoubleLongMap', function (m) {
return Clazz.new_($I$(32,1).c$$gnu_trove_map_TDoubleLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TDoubleByteMap', function (m) {
return Clazz.new_($I$(33,1).c$$gnu_trove_map_TDoubleByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TDoubleShortMap', function (m) {
return Clazz.new_($I$(34,1).c$$gnu_trove_map_TDoubleShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TDoubleCharMap', function (m) {
return Clazz.new_($I$(35,1).c$$gnu_trove_map_TDoubleCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TFloatDoubleMap', function (m) {
return Clazz.new_($I$(36,1).c$$gnu_trove_map_TFloatDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TFloatFloatMap', function (m) {
return Clazz.new_($I$(37,1).c$$gnu_trove_map_TFloatFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TFloatIntMap', function (m) {
return Clazz.new_($I$(38,1).c$$gnu_trove_map_TFloatIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TFloatLongMap', function (m) {
return Clazz.new_($I$(39,1).c$$gnu_trove_map_TFloatLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TFloatByteMap', function (m) {
return Clazz.new_($I$(40,1).c$$gnu_trove_map_TFloatByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TFloatShortMap', function (m) {
return Clazz.new_($I$(41,1).c$$gnu_trove_map_TFloatShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TFloatCharMap', function (m) {
return Clazz.new_($I$(42,1).c$$gnu_trove_map_TFloatCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TIntDoubleMap', function (m) {
return Clazz.new_($I$(43,1).c$$gnu_trove_map_TIntDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TIntFloatMap', function (m) {
return Clazz.new_($I$(44,1).c$$gnu_trove_map_TIntFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TIntIntMap', function (m) {
return Clazz.new_($I$(45,1).c$$gnu_trove_map_TIntIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TIntLongMap', function (m) {
return Clazz.new_($I$(46,1).c$$gnu_trove_map_TIntLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TIntByteMap', function (m) {
return Clazz.new_($I$(47,1).c$$gnu_trove_map_TIntByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TIntShortMap', function (m) {
return Clazz.new_($I$(48,1).c$$gnu_trove_map_TIntShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TIntCharMap', function (m) {
return Clazz.new_($I$(49,1).c$$gnu_trove_map_TIntCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TLongDoubleMap', function (m) {
return Clazz.new_($I$(50,1).c$$gnu_trove_map_TLongDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TLongFloatMap', function (m) {
return Clazz.new_($I$(51,1).c$$gnu_trove_map_TLongFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TLongIntMap', function (m) {
return Clazz.new_($I$(52,1).c$$gnu_trove_map_TLongIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TLongLongMap', function (m) {
return Clazz.new_($I$(53,1).c$$gnu_trove_map_TLongLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TLongByteMap', function (m) {
return Clazz.new_($I$(54,1).c$$gnu_trove_map_TLongByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TLongShortMap', function (m) {
return Clazz.new_($I$(55,1).c$$gnu_trove_map_TLongShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TLongCharMap', function (m) {
return Clazz.new_($I$(56,1).c$$gnu_trove_map_TLongCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TByteDoubleMap', function (m) {
return Clazz.new_($I$(57,1).c$$gnu_trove_map_TByteDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TByteFloatMap', function (m) {
return Clazz.new_($I$(58,1).c$$gnu_trove_map_TByteFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TByteIntMap', function (m) {
return Clazz.new_($I$(59,1).c$$gnu_trove_map_TByteIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TByteLongMap', function (m) {
return Clazz.new_($I$(60,1).c$$gnu_trove_map_TByteLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TByteByteMap', function (m) {
return Clazz.new_($I$(61,1).c$$gnu_trove_map_TByteByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TByteShortMap', function (m) {
return Clazz.new_($I$(62,1).c$$gnu_trove_map_TByteShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TByteCharMap', function (m) {
return Clazz.new_($I$(63,1).c$$gnu_trove_map_TByteCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TShortDoubleMap', function (m) {
return Clazz.new_($I$(64,1).c$$gnu_trove_map_TShortDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TShortFloatMap', function (m) {
return Clazz.new_($I$(65,1).c$$gnu_trove_map_TShortFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TShortIntMap', function (m) {
return Clazz.new_($I$(66,1).c$$gnu_trove_map_TShortIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TShortLongMap', function (m) {
return Clazz.new_($I$(67,1).c$$gnu_trove_map_TShortLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TShortByteMap', function (m) {
return Clazz.new_($I$(68,1).c$$gnu_trove_map_TShortByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TShortShortMap', function (m) {
return Clazz.new_($I$(69,1).c$$gnu_trove_map_TShortShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TShortCharMap', function (m) {
return Clazz.new_($I$(70,1).c$$gnu_trove_map_TShortCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TCharDoubleMap', function (m) {
return Clazz.new_($I$(71,1).c$$gnu_trove_map_TCharDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TCharFloatMap', function (m) {
return Clazz.new_($I$(72,1).c$$gnu_trove_map_TCharFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TCharIntMap', function (m) {
return Clazz.new_($I$(73,1).c$$gnu_trove_map_TCharIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TCharLongMap', function (m) {
return Clazz.new_($I$(74,1).c$$gnu_trove_map_TCharLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TCharByteMap', function (m) {
return Clazz.new_($I$(75,1).c$$gnu_trove_map_TCharByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TCharShortMap', function (m) {
return Clazz.new_($I$(76,1).c$$gnu_trove_map_TCharShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TCharCharMap', function (m) {
return Clazz.new_($I$(77,1).c$$gnu_trove_map_TCharCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TDoubleObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(78,1).c$$gnu_trove_map_TDoubleObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TFloatObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(79,1).c$$gnu_trove_map_TFloatObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TIntObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(80,1).c$$gnu_trove_map_TIntObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TLongObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(81,1).c$$gnu_trove_map_TLongObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TByteObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(82,1).c$$gnu_trove_map_TByteObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TShortObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(83,1).c$$gnu_trove_map_TShortObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TCharObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(84,1).c$$gnu_trove_map_TCharObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TObjectDoubleMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(85,1).c$$gnu_trove_map_TObjectDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TObjectFloatMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(86,1).c$$gnu_trove_map_TObjectFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TObjectIntMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(87,1).c$$gnu_trove_map_TObjectIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TObjectLongMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(88,1).c$$gnu_trove_map_TObjectLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TObjectByteMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(89,1).c$$gnu_trove_map_TObjectByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TObjectShortMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(90,1).c$$gnu_trove_map_TObjectShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$gnu_trove_map_TObjectCharMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(91,1).c$$gnu_trove_map_TObjectCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TDoubleCollection', function (c) {
return Clazz.new_($I$(92,1).c$$gnu_trove_TDoubleCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TDoubleCollection$O', function (c, mutex) {
return Clazz.new_($I$(92,1).c$$gnu_trove_TDoubleCollection$O,[c, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TFloatCollection', function (c) {
return Clazz.new_($I$(93,1).c$$gnu_trove_TFloatCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TFloatCollection$O', function (c, mutex) {
return Clazz.new_($I$(93,1).c$$gnu_trove_TFloatCollection$O,[c, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TIntCollection', function (c) {
return Clazz.new_($I$(94,1).c$$gnu_trove_TIntCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TIntCollection$O', function (c, mutex) {
return Clazz.new_($I$(94,1).c$$gnu_trove_TIntCollection$O,[c, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TLongCollection', function (c) {
return Clazz.new_($I$(95,1).c$$gnu_trove_TLongCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TLongCollection$O', function (c, mutex) {
return Clazz.new_($I$(95,1).c$$gnu_trove_TLongCollection$O,[c, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TByteCollection', function (c) {
return Clazz.new_($I$(96,1).c$$gnu_trove_TByteCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TByteCollection$O', function (c, mutex) {
return Clazz.new_($I$(96,1).c$$gnu_trove_TByteCollection$O,[c, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TShortCollection', function (c) {
return Clazz.new_($I$(97,1).c$$gnu_trove_TShortCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TShortCollection$O', function (c, mutex) {
return Clazz.new_($I$(97,1).c$$gnu_trove_TShortCollection$O,[c, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TCharCollection', function (c) {
return Clazz.new_($I$(98,1).c$$gnu_trove_TCharCollection,[c]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$gnu_trove_TCharCollection$O', function (c, mutex) {
return Clazz.new_($I$(98,1).c$$gnu_trove_TCharCollection$O,[c, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TDoubleSet', function (s) {
return Clazz.new_($I$(99,1).c$$gnu_trove_set_TDoubleSet,[s]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TDoubleSet$O', function (s, mutex) {
return Clazz.new_($I$(99,1).c$$gnu_trove_set_TDoubleSet$O,[s, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TFloatSet', function (s) {
return Clazz.new_($I$(100,1).c$$gnu_trove_set_TFloatSet,[s]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TFloatSet$O', function (s, mutex) {
return Clazz.new_($I$(100,1).c$$gnu_trove_set_TFloatSet$O,[s, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TIntSet', function (s) {
return Clazz.new_($I$(101,1).c$$gnu_trove_set_TIntSet,[s]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TIntSet$O', function (s, mutex) {
return Clazz.new_($I$(101,1).c$$gnu_trove_set_TIntSet$O,[s, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TLongSet', function (s) {
return Clazz.new_($I$(102,1).c$$gnu_trove_set_TLongSet,[s]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TLongSet$O', function (s, mutex) {
return Clazz.new_($I$(102,1).c$$gnu_trove_set_TLongSet$O,[s, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TByteSet', function (s) {
return Clazz.new_($I$(103,1).c$$gnu_trove_set_TByteSet,[s]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TByteSet$O', function (s, mutex) {
return Clazz.new_($I$(103,1).c$$gnu_trove_set_TByteSet$O,[s, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TShortSet', function (s) {
return Clazz.new_($I$(104,1).c$$gnu_trove_set_TShortSet,[s]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TShortSet$O', function (s, mutex) {
return Clazz.new_($I$(104,1).c$$gnu_trove_set_TShortSet$O,[s, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TCharSet', function (s) {
return Clazz.new_($I$(105,1).c$$gnu_trove_set_TCharSet,[s]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$gnu_trove_set_TCharSet$O', function (s, mutex) {
return Clazz.new_($I$(105,1).c$$gnu_trove_set_TCharSet$O,[s, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TDoubleList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(106,1).c$$gnu_trove_list_TDoubleList,[list]) : Clazz.new_($I$(107,1).c$$gnu_trove_list_TDoubleList,[list]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TDoubleList$O', function (list, mutex) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(106,1).c$$gnu_trove_list_TDoubleList$O,[list, mutex]) : Clazz.new_($I$(107,1).c$$gnu_trove_list_TDoubleList$O,[list, mutex]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TFloatList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(108,1).c$$gnu_trove_list_TFloatList,[list]) : Clazz.new_($I$(109,1).c$$gnu_trove_list_TFloatList,[list]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TFloatList$O', function (list, mutex) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(108,1).c$$gnu_trove_list_TFloatList$O,[list, mutex]) : Clazz.new_($I$(109,1).c$$gnu_trove_list_TFloatList$O,[list, mutex]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TIntList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(110,1).c$$gnu_trove_list_TIntList,[list]) : Clazz.new_($I$(111,1).c$$gnu_trove_list_TIntList,[list]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TIntList$O', function (list, mutex) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(110,1).c$$gnu_trove_list_TIntList$O,[list, mutex]) : Clazz.new_($I$(111,1).c$$gnu_trove_list_TIntList$O,[list, mutex]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TLongList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(112,1).c$$gnu_trove_list_TLongList,[list]) : Clazz.new_($I$(113,1).c$$gnu_trove_list_TLongList,[list]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TLongList$O', function (list, mutex) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(112,1).c$$gnu_trove_list_TLongList$O,[list, mutex]) : Clazz.new_($I$(113,1).c$$gnu_trove_list_TLongList$O,[list, mutex]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TByteList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(114,1).c$$gnu_trove_list_TByteList,[list]) : Clazz.new_($I$(115,1).c$$gnu_trove_list_TByteList,[list]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TByteList$O', function (list, mutex) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(114,1).c$$gnu_trove_list_TByteList$O,[list, mutex]) : Clazz.new_($I$(115,1).c$$gnu_trove_list_TByteList$O,[list, mutex]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TShortList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(116,1).c$$gnu_trove_list_TShortList,[list]) : Clazz.new_($I$(117,1).c$$gnu_trove_list_TShortList,[list]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TShortList$O', function (list, mutex) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(116,1).c$$gnu_trove_list_TShortList$O,[list, mutex]) : Clazz.new_($I$(117,1).c$$gnu_trove_list_TShortList$O,[list, mutex]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TCharList', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(118,1).c$$gnu_trove_list_TCharList,[list]) : Clazz.new_($I$(119,1).c$$gnu_trove_list_TCharList,[list]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$gnu_trove_list_TCharList$O', function (list, mutex) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(118,1).c$$gnu_trove_list_TCharList$O,[list, mutex]) : Clazz.new_($I$(119,1).c$$gnu_trove_list_TCharList$O,[list, mutex]));
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TDoubleDoubleMap', function (m) {
return Clazz.new_($I$(120,1).c$$gnu_trove_map_TDoubleDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TDoubleFloatMap', function (m) {
return Clazz.new_($I$(121,1).c$$gnu_trove_map_TDoubleFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TDoubleIntMap', function (m) {
return Clazz.new_($I$(122,1).c$$gnu_trove_map_TDoubleIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TDoubleLongMap', function (m) {
return Clazz.new_($I$(123,1).c$$gnu_trove_map_TDoubleLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TDoubleByteMap', function (m) {
return Clazz.new_($I$(124,1).c$$gnu_trove_map_TDoubleByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TDoubleShortMap', function (m) {
return Clazz.new_($I$(125,1).c$$gnu_trove_map_TDoubleShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TDoubleCharMap', function (m) {
return Clazz.new_($I$(126,1).c$$gnu_trove_map_TDoubleCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TFloatDoubleMap', function (m) {
return Clazz.new_($I$(127,1).c$$gnu_trove_map_TFloatDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TFloatFloatMap', function (m) {
return Clazz.new_($I$(128,1).c$$gnu_trove_map_TFloatFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TFloatIntMap', function (m) {
return Clazz.new_($I$(129,1).c$$gnu_trove_map_TFloatIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TFloatLongMap', function (m) {
return Clazz.new_($I$(130,1).c$$gnu_trove_map_TFloatLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TFloatByteMap', function (m) {
return Clazz.new_($I$(131,1).c$$gnu_trove_map_TFloatByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TFloatShortMap', function (m) {
return Clazz.new_($I$(132,1).c$$gnu_trove_map_TFloatShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TFloatCharMap', function (m) {
return Clazz.new_($I$(133,1).c$$gnu_trove_map_TFloatCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TIntDoubleMap', function (m) {
return Clazz.new_($I$(134,1).c$$gnu_trove_map_TIntDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TIntFloatMap', function (m) {
return Clazz.new_($I$(135,1).c$$gnu_trove_map_TIntFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TIntIntMap', function (m) {
return Clazz.new_($I$(136,1).c$$gnu_trove_map_TIntIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TIntLongMap', function (m) {
return Clazz.new_($I$(137,1).c$$gnu_trove_map_TIntLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TIntByteMap', function (m) {
return Clazz.new_($I$(138,1).c$$gnu_trove_map_TIntByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TIntShortMap', function (m) {
return Clazz.new_($I$(139,1).c$$gnu_trove_map_TIntShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TIntCharMap', function (m) {
return Clazz.new_($I$(140,1).c$$gnu_trove_map_TIntCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TLongDoubleMap', function (m) {
return Clazz.new_($I$(141,1).c$$gnu_trove_map_TLongDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TLongFloatMap', function (m) {
return Clazz.new_($I$(142,1).c$$gnu_trove_map_TLongFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TLongIntMap', function (m) {
return Clazz.new_($I$(143,1).c$$gnu_trove_map_TLongIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TLongLongMap', function (m) {
return Clazz.new_($I$(144,1).c$$gnu_trove_map_TLongLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TLongByteMap', function (m) {
return Clazz.new_($I$(145,1).c$$gnu_trove_map_TLongByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TLongShortMap', function (m) {
return Clazz.new_($I$(146,1).c$$gnu_trove_map_TLongShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TLongCharMap', function (m) {
return Clazz.new_($I$(147,1).c$$gnu_trove_map_TLongCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TByteDoubleMap', function (m) {
return Clazz.new_($I$(148,1).c$$gnu_trove_map_TByteDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TByteFloatMap', function (m) {
return Clazz.new_($I$(149,1).c$$gnu_trove_map_TByteFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TByteIntMap', function (m) {
return Clazz.new_($I$(150,1).c$$gnu_trove_map_TByteIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TByteLongMap', function (m) {
return Clazz.new_($I$(151,1).c$$gnu_trove_map_TByteLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TByteByteMap', function (m) {
return Clazz.new_($I$(152,1).c$$gnu_trove_map_TByteByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TByteShortMap', function (m) {
return Clazz.new_($I$(153,1).c$$gnu_trove_map_TByteShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TByteCharMap', function (m) {
return Clazz.new_($I$(154,1).c$$gnu_trove_map_TByteCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TShortDoubleMap', function (m) {
return Clazz.new_($I$(155,1).c$$gnu_trove_map_TShortDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TShortFloatMap', function (m) {
return Clazz.new_($I$(156,1).c$$gnu_trove_map_TShortFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TShortIntMap', function (m) {
return Clazz.new_($I$(157,1).c$$gnu_trove_map_TShortIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TShortLongMap', function (m) {
return Clazz.new_($I$(158,1).c$$gnu_trove_map_TShortLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TShortByteMap', function (m) {
return Clazz.new_($I$(159,1).c$$gnu_trove_map_TShortByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TShortShortMap', function (m) {
return Clazz.new_($I$(160,1).c$$gnu_trove_map_TShortShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TShortCharMap', function (m) {
return Clazz.new_($I$(161,1).c$$gnu_trove_map_TShortCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TCharDoubleMap', function (m) {
return Clazz.new_($I$(162,1).c$$gnu_trove_map_TCharDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TCharFloatMap', function (m) {
return Clazz.new_($I$(163,1).c$$gnu_trove_map_TCharFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TCharIntMap', function (m) {
return Clazz.new_($I$(164,1).c$$gnu_trove_map_TCharIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TCharLongMap', function (m) {
return Clazz.new_($I$(165,1).c$$gnu_trove_map_TCharLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TCharByteMap', function (m) {
return Clazz.new_($I$(166,1).c$$gnu_trove_map_TCharByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TCharShortMap', function (m) {
return Clazz.new_($I$(167,1).c$$gnu_trove_map_TCharShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TCharCharMap', function (m) {
return Clazz.new_($I$(168,1).c$$gnu_trove_map_TCharCharMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TDoubleObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(169,1).c$$gnu_trove_map_TDoubleObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TFloatObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(170,1).c$$gnu_trove_map_TFloatObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TIntObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(171,1).c$$gnu_trove_map_TIntObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TLongObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(172,1).c$$gnu_trove_map_TLongObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TByteObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(173,1).c$$gnu_trove_map_TByteObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TShortObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(174,1).c$$gnu_trove_map_TShortObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TCharObjectMap', function (m) {
return Clazz.new_(1,{V:"Object"},$I$(175,1).c$$gnu_trove_map_TCharObjectMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TObjectDoubleMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(176,1).c$$gnu_trove_map_TObjectDoubleMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TObjectFloatMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(177,1).c$$gnu_trove_map_TObjectFloatMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TObjectIntMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(178,1).c$$gnu_trove_map_TObjectIntMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TObjectLongMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(179,1).c$$gnu_trove_map_TObjectLongMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TObjectByteMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(180,1).c$$gnu_trove_map_TObjectByteMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TObjectShortMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(181,1).c$$gnu_trove_map_TObjectShortMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$gnu_trove_map_TObjectCharMap', function (m) {
return Clazz.new_(1,{K:"Object"},$I$(182,1).c$$gnu_trove_map_TObjectCharMap,[m]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
