(this["webpackJsonp@banana-cake-pop/main"]=this["webpackJsonp@banana-cake-pop/main"]||[]).push([[8],{395:function(e,t,c){"use strict";c.d(t,"a",(function(){return U})),c.d(t,"b",(function(){return L})),c.d(t,"c",(function(){return X}));var n=c(11),a=c.n(n),r=c(36),i=c(392),o=c(382),u=c(386),d=c(396),s=c(401),l=c(390),b=c(450),f=c(427),O=c(630),p=c(548),v=c.n(p),j=c(410),h=c(20),m=c(426),y=c(406),g=c(636),S=c(403),I=c(425),T=Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},u.d),m.d),S.d),y.d),l.d),I.c),j.d),F=g.a.apply(void 0,Object(h.a)(Object.values(u.b)).concat(Object(h.a)(Object.values(m.b)),Object(h.a)(Object.values(S.b)),Object(h.a)(Object.values(y.b)),Object(h.a)(Object.values(l.b)),Object(h.a)(Object.values(I.b)),Object(h.a)(Object.values(j.b)))),x=c(455),C=c(404),w=Object(f.c)({document:u.e,documentExplorer:x.c,historyExplorer:m.e,preset:S.e,schema:C.c,schemaReference:y.e,shell:s.c,tab:l.e,telemetry:I.d,user:j.e}),R=c(448);function N(){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:return t=e.sent,e.next=5,t.get("state","state");case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(a.a.mark((function e(t){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:return c=e.sent,e.next=5,c.put("state",t,"state");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return Object(R.a)("bcp-state-preview-1",1,{upgrade:function(e){e.createObjectStore("state")}})}var H={document:!0,documentExplorer:!0,historyExplorer:!1,preset:!1,schema:!1,schemaReference:!1,shell:function(e){var t,c;return Object(o.a)(Object(o.a)({},s.b.selectState(e)),{},{activeNodeId:null!==(t=null===(c=e.document.activeDocument)||void 0===c?void 0:c.id)&&void 0!==t?t:null})},tab:function(e){var t=l.c.selectState(e),c=l.c.selectAll(e).map((function(e){return{id:e.id,changes:{activeResponseViewId:"response"!==e.activeResponseViewId&&"logs"!==e.activeResponseViewId?"response":e.activeResponseViewId,executingOperationType:void 0,isExecutingOperation:!1,isFetchingSchema:!1,responseEditorViewState:void 0}}}));return b.b.updateMany(c,t)},telemetry:!0,user:!1},z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d;function U(){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(a.a.mark((function e(){var t,c,n,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,c=Object(O.a)({dependencies:T}),n=z(Object(f.a)(c)),u=Object(f.e)(w,t,n),c.run(F),u.dispatch(S.a.loadPreset()),u.dispatch(j.a.loadUserAccount()),V(u),u.subscribe((function(){var e=u.getState();v()(Object(i.a)(a.a.mark((function t(){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(d.k)(H).filter((function(e){return!!H[e]})).reduce((function(t,c){var n=H[c];return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},c,P(n)?n(e):e[c]))}),{}),t.next=3,E(c);case 3:case"end":return t.stop()}}),t)}))))})),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return"boolean"!==typeof e}function V(e){var t=u.c.selectActiveId(e.getState());t&&e.dispatch(u.a.refetchSchema({documentId:t}))}var _=c(68),B=c(383),J=c(623);function L(e){var t=Object(B.d)(),c=Object(_.useRef)(new J.a(e(t.getState()))),n=Object(_.useRef)(c.current.asObservable());return Object(_.useLayoutEffect)((function(){var n=t.subscribe((function(){var n=e(t.getState());n!==c.current.value&&c.current.next(n)}));return function(){return n()}}),[e,t,c]),n.current}var M=c(21);function X(e,t){var c=e(Object(B.d)().getState()),n=Object(_.useState)(c),a=Object(M.a)(n,2),r=a[0],i=a[1];return(t&&!t(c,r)||c!==r)&&i(c),r}},401:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"c",(function(){return d})),c.d(t,"b",(function(){return b}));var n=c(385),a="[Shell]",r={activateNavigationItem:Object(n.a)("".concat(a," Activate view")),activateNode:Object(n.a)("".concat(a," Change active node")),changeResultDetailWidth:Object(n.a)("".concat(a," Change result detail width")),changeResponseSize:Object(n.a)("".concat(a," Change result size")),changeSchemaInfoWidth:Object(n.a)("".concat(a," Change schema info width")),changeSidebarCollapsed:Object(n.a)("".concat(a," Change sidebar collapsed")),changeSidebarWidth:Object(n.a)("".concat(a," Change sidebar width"))},i=c(382),o=c(386),u={activeNavigationItemId:"document-explorer",activeNodeId:null,isSidebarCollapsed:!0,responseSize:.5,resultDetailWidth:350,schemaInfoWidth:300,sidebarWidth:300},d=Object(n.c)(u,Object(n.d)(o.a.activateDocumentSuccess,(function(e,t){var c=t.document,n=c.id,a=c.isNew;return Object(i.a)(Object(i.a)({},e),{},{activeNodeId:a?null:n})})),Object(n.d)(o.a.createDocumentSuccess,(function(e){return Object(i.a)(Object(i.a)({},e),{},{activeNodeId:null})})),Object(n.d)(o.a.createAndSaveDocumentSuccess,(function(e,t){var c=t.document.id;return Object(i.a)(Object(i.a)({},e),{},{activeNodeId:c})})),Object(n.d)(o.a.deleteDocumentSuccess,(function(e,t){return s(e,t.document)})),Object(n.d)(o.a.activateOrOpenDocumentSuccess,(function(e,t){var c=t.document.id;return Object(i.a)(Object(i.a)({},e),{},{activeNodeId:c})})),Object(n.d)(o.a.closeDocumentSuccess,(function(e,t){return s(e,t.document)})),Object(n.d)(o.a.saveAndCloseDocumentSuccess,(function(e,t){return s(e,t.document)})),Object(n.d)(o.a.saveAndCloseNewDocumentSuccess,(function(e,t){return s(e,t.document)})),Object(n.d)(o.a.saveNewDocumentSuccess,(function(e,t){return s(e,t.document)})),Object(n.d)(o.a.createFolderSuccess,(function(e,t){var c=t.folder.id;return Object(i.a)(Object(i.a)({},e),{},{activeNodeId:c})})),Object(n.d)(r.activateNode,(function(e,t){var c=t.id;return e.activeNodeId===c?e:Object(i.a)(Object(i.a)({},e),{},{activeNodeId:c})})),Object(n.d)(r.activateNavigationItem,(function(e,t){var c=t.id;return Object(i.a)(Object(i.a)({},e),{},{activeNavigationItemId:c,isSidebarCollapsed:e.activeNavigationItemId===c?!e.isSidebarCollapsed:!e.isSidebarCollapsed&&e.isSidebarCollapsed})})),Object(n.d)(r.changeResultDetailWidth,(function(e,t){var c=t.width;return Object(i.a)(Object(i.a)({},e),{},{resultDetailWidth:c})})),Object(n.d)(r.changeResponseSize,(function(e,t){var c=t.size;return Object(i.a)(Object(i.a)({},e),{},{responseSize:c})})),Object(n.d)(r.changeSchemaInfoWidth,(function(e,t){var c=t.width;return Object(i.a)(Object(i.a)({},e),{},{schemaInfoWidth:c})})),Object(n.d)(r.changeSidebarCollapsed,(function(e,t){var c=t.isCollapsed;return Object(i.a)(Object(i.a)({},e),{},{isSidebarCollapsed:c})})),Object(n.d)(r.changeSidebarWidth,(function(e,t){var c=t.width;return Object(i.a)(Object(i.a)({},e),{},{sidebarWidth:c})})));function s(e,t){var c,n=null===t?null:null!==(c=null===t||void 0===t?void 0:t.id)&&void 0!==c?c:e.activeNodeId;return n===e.activeNodeId?e:Object(i.a)(Object(i.a)({},e),{},{activeNodeId:n})}var l=function(e){return e.shell},b={selectState:l,selectActiveNavigationItemId:function(e){return l(e).activeNavigationItemId},selectActiveNodeId:function(e){return l(e).activeNodeId},selectResponseSize:function(e){var t;return null!==(t=l(e).responseSize)&&void 0!==t?t:u.responseSize},selectResultDetailWidth:function(e){return l(e).resultDetailWidth},selectSchemaInfoWidth:function(e){return l(e).schemaInfoWidth},selectIsSidebarCollapsed:function(e){return l(e).isSidebarCollapsed},selectSidebarWidth:function(e){return l(e).sidebarWidth}}},406:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return y})),c.d(t,"d",(function(){return m})),c.d(t,"e",(function(){return x})),c.d(t,"c",(function(){return N}));var n=c(382),a=c(394),r=c(385),i="[SchemaReference]",o=Object(a.b)("filterSchemaReferenceTypes","".concat(i," Filter types")),u=Object(a.b)("initializeSchemaReference","".concat(i," Initialize schema reference")),d=Object(a.b)("navigateToCategory","".concat(i," Navigate to category")),s=Object(a.b)("navigateToType","".concat(i," Navigate to type")),l=Object(r.a)("".concat(i," Back to overview")),b=Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},o),u),d),s),{},{backToOverview:l}),f=c(21),O=c(384),p=c(576),v=c(621),j=c(619),h=c(618),m={getSchemaReference:function(e,t){return O.e.getSchemaReference(e,t)},getTypeFields:function(e,t){return O.e.getFields(e,t)},getItemsByCategory:function(e,t,c){return O.e.getItemsByCategory(e,t,c)}},y={filterSchemaReferenceTypesEpic:Object(r.b)(b.filterSchemaReferenceTypes,(function(e,t,c){return e.pipe(Object(v.a)(t),Object(j.a)((function(e){var t=Object(f.a)(e,2),n=t[0].payload,a=n.documentId,r=n.filter,i=t[1].schemaReference.entities[a],o=(null===r||void 0===r?void 0:r.length)||null===i||void 0===i?void 0:i.activeCategory;return c.getItemsByCategory(a,o,r).then((function(e){return b.filterSchemaReferenceTypesSuccess({documentId:a,filteredItems:e})}))})),Object(h.a)((function(){return Object(p.a)(b.filterSchemaReferenceTypesFailure())})))})),initializeSchemaReferenceEpic:Object(r.b)(b.initializeSchemaReference,(function(e,t,c){return e.pipe(Object(v.a)(t),Object(j.a)((function(e){var t=Object(f.a)(e,2),n=t[0].payload,a=n.documentId,r=n.schemaHash,i=t[1].schemaReference.entities[a];return c.getSchemaReference(a,null===i||void 0===i?void 0:i.filter).then((function(e){return b.initializeSchemaReferenceSuccess(e?{documentId:a,schemaHash:r,activeType:e.activeRootType,activeTypeFields:e.activeRootTypeFields,rootTypes:e.rootTypes,statistics:e.statistics,filteredItems:e.filteredItems}:{documentId:a,schemaHash:r,activeTypeFields:[],rootTypes:[]})}))})),Object(h.a)((function(){return Object(p.a)(b.initializeSchemaReferenceFailure())})))})),navigateToCategoryEpic:Object(r.b)(b.navigateToCategory,(function(e,t,c){return e.pipe(Object(j.a)((function(e){var t=e.payload,n=t.documentId,a=t.category;return c.getItemsByCategory(n,a).then((function(e){return Promise.resolve(b.navigateToCategorySuccess({documentId:n,activeCategory:a,items:e}))}))})),Object(h.a)((function(){return Object(p.a)(b.navigateToCategoryFailure())})))})),navigateToTypeEpic:Object(r.b)(b.navigateToType,(function(e,t,c){return e.pipe(Object(j.a)((function(e){var t=e.payload,n=t.documentId,a=t.activeType,r=t.category;return Promise.all([c.getTypeFields(n,a.name),c.getItemsByCategory(n,r)]).then((function(e){var t=Object(f.a)(e,2),c=t[0],i=t[1];return b.navigateToTypeSuccess({documentId:n,activeType:a,activeTypeFields:null!==c&&void 0!==c?c:[],activeCategory:r,items:i})}))})),Object(h.a)((function(){return Object(p.a)(b.navigateToTypeFailure())})))}))},g=c(20),S=c(442),I=Object(a.a)(),T=Object(S.a)(),F=I.getInitialState(T.getInitialState({})),x=r.c.apply(void 0,[F].concat(Object(g.a)(Object(a.c)(I,o,{load:function(e,t){var c=t.documentId,n=t.filter;return T.updateOne({id:c,changes:{filter:n}},e)},success:function(e,t){var c=t.documentId,n=t.filteredItems;return T.updateOne({id:c,changes:{filteredItems:n}},e)}})),Object(g.a)(Object(a.c)(I,u,(function(e,t){var c,n=t.documentId,a=t.activeType,r=t.activeTypeFields,i=t.filteredItems,o=t.rootTypes,u=t.schemaHash,d=t.statistics;return u===(null===(c=e.entities[n])||void 0===c?void 0:c.schemaHash)?e:T.upsertOne({id:n,schemaHash:u,activeType:a,activeTypeFields:r,categoryScrollPosition:0,detailScrollPosition:0,filteredItems:i,rootTypes:o,showCategoryItems:!1,statistics:d},e)}))),Object(g.a)(Object(a.c)(I,d,(function(e,t){var c=t.documentId,n=t.activeCategory,a=t.items;return T.updateOne({id:c,changes:{activeType:void 0,activeTypeFields:void 0,activeCategory:n,items:a,showCategoryItems:!1}},e)}))),Object(g.a)(Object(a.c)(I,s,(function(e,t){var c=t.documentId,n=t.activeType,a=t.activeTypeFields,r=t.activeCategory,i=t.items;return T.updateOne({id:c,changes:{activeType:n,activeTypeFields:a,activeCategory:r,items:i,showCategoryItems:!!r}},e)}))),[Object(r.d)(b.backToOverview,(function(e,t){var c=t.documentId;return T.updateOne({id:c,changes:{showCategoryItems:!1}},e)}))])),C=c(386),w=function(e){return e.schemaReference},R=function(e){var t=w(e).entities,c=C.c.selectActiveId(e);return c?t[c]:void 0},N=Object(n.a)(Object(n.a)(Object(n.a)({},I.getSelectors(w)),T.getSelectors(w)),{},{selectState:w,selectActive:R,selectFilter:function(e){var t;return null===(t=R(e))||void 0===t?void 0:t.filter}})},410:function(e,t,c){"use strict";c.d(t,"a",(function(){return i})),c.d(t,"b",(function(){return f})),c.d(t,"d",(function(){return b})),c.d(t,"e",(function(){return j})),c.d(t,"c",(function(){return m}));var n=c(382),a=c(394),r=Object(a.b)("loadUserAccount","".concat("[User]"," Load user account")),i=Object(n.a)({},r),o=c(384),u=c(385),d=c(576),s=c(619),l=c(618),b={fetchUserAccount:function(){return o.c.fetchUserAccount()}},f={loadUserAccountEpic:Object(u.b)(i.loadUserAccount,(function(e,t,c){return e.pipe(Object(s.a)((function(){return c.fetchUserAccount().then((function(e){return i.loadUserAccountSuccess({userAccount:e?{userId:e.userId,username:e.username}:void 0})}))})),Object(l.a)((function(){return Object(d.a)(i.loadUserAccountFailure())})))}))},O=c(20),p=Object(a.a)(),v=p.getInitialState({}),j=u.c.apply(void 0,[v].concat(Object(O.a)(Object(a.c)(p,r,(function(e,t){var c=t.userAccount;return Object(n.a)(Object(n.a)({},e),{},{userAccount:c})}))))),h=function(e){return e.user},m=Object(n.a)({selectState:h,selectUserAccount:function(e){return h(e).userAccount}},p.getSelectors())},425:function(e,t,c){"use strict";c.d(t,"a",(function(){return i})),c.d(t,"b",(function(){return j})),c.d(t,"c",(function(){return v})),c.d(t,"d",(function(){return h}));var n=c(382),a=c(394),r=Object(a.b)("pushTelemetry","".concat("[Telemetry]"," Push telemetry")),i=Object(n.a)({},r),o=c(21),u=c(385),d=c(621),s=c(619),l=c(534),b=c(396),f=c(553),O=c(576),p=c(618);var v={pushTelemetry:function(e){var t=b.j?"app":"middleware",c={deviceId:e,operatingSystem:b.l,userAgent:navigator.userAgent,applicationType:t,applicationVersion:b.b};return Object(f.a)(fetch("https://telemetry.chillicream.com/v1/activate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){return e.deviceId}))).pipe(Object(p.a)((function(e){return Object(O.a)(void 0)})))}},j={pushTelemetryEpic:Object(u.b)(i.pushTelemetry,(function(e,t,c){return e.pipe(Object(d.a)(t),Object(s.a)((function(e){var t=Object(o.a)(e,2)[1].telemetry.deviceId;return c.pushTelemetry(t)})),Object(l.a)((function(e){return e?i.pushTelemetrySuccess({deviceId:e,lastUpdate:Date.now()}):i.pushTelemetryFailure()})))}))},h=Object(u.c)({},Object(u.d)(i.pushTelemetrySuccess,(function(e,t){return{deviceId:t.deviceId,lastUpdate:t.lastUpdate}})))},426:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return b})),c.d(t,"d",(function(){return l})),c.d(t,"e",(function(){return v})),c.d(t,"c",(function(){return h}));var n=c(385),a="[HistoryExplorer]",r={changeHistorySearchTerm:Object(n.a)("".concat(a," Change search term")),clearHistory:Object(n.a)("".concat(a," Clear history")),expandFolder:Object(n.a)("".concat(a," Expand folder")),collapseFolder:Object(n.a)("".concat(a," Collapse folder"))},i=c(386),o=c(415),u=c(451),d=c(619),s=c(534),l={clearHistory:u.a},b={clearHistoryEpic:Object(n.b)(r.clearHistory,(function(e,t,c){var n=c.clearHistory;return e.pipe(Object(d.a)((function(){return n().then((function(){var e,t;return null!==(e=null===(t=o.g.get("history"))||void 0===t?void 0:t.reload())&&void 0!==e?e:Promise.resolve()}))})),Object(s.a)((function(){return i.a.closeAllHistoryDocuments()})))}))},f=c(20),O=c(382),p={searchTerm:void 0,expandedFolders:[]},v=Object(n.c)(p,Object(n.d)(r.changeHistorySearchTerm,(function(e,t){var c=t.searchTerm;return Object(O.a)(Object(O.a)({},e),{},{searchTerm:c})})),Object(n.d)(r.clearHistory,(function(e){return Object(O.a)(Object(O.a)({},e),{},{expandedFolders:[]})})),Object(n.d)(r.expandFolder,(function(e,t){var c=t.folderName;return e.expandedFolders.includes(c)?e:Object(O.a)(Object(O.a)({},e),{},{expandedFolders:[].concat(Object(f.a)(e.expandedFolders),[c])})})),Object(n.d)(r.collapseFolder,(function(e,t){var c=t.folderName;return e.expandedFolders.includes(c)?Object(O.a)(Object(O.a)({},e),{},{expandedFolders:e.expandedFolders.filter((function(e){return e!==c}))}):e}))),j=function(e){return e.historyExplorer},h={selectState:j,selectExpandedFolders:function(e){return j(e).expandedFolders},selectSearchTerm:function(e){return j(e).searchTerm}}},455:function(e,t,c){"use strict";c.d(t,"a",(function(){return i})),c.d(t,"c",(function(){return l})),c.d(t,"b",(function(){return O}));var n=c(385),a="[DocumentExplorer]",r=Object(n.a)("".concat(a," Change search term")),i={expandFolder:Object(n.a)("".concat(a," Expand folder")),collapseFolder:Object(n.a)("".concat(a," Collapse folder")),changeDocumentSearchTerm:r},o=c(382),u=c(20),d=c(386),s={searchTerm:void 0,expandedFolders:[]},l=Object(n.c)(s,Object(n.d)(d.a.deleteFolderSuccess,(function(e,t){var c=t.folderId,n=t.affectedFolderIds;return b.apply(void 0,[e,c].concat(Object(u.a)(n)))})),Object(n.d)(i.changeDocumentSearchTerm,(function(e,t){var c=t.searchTerm;return Object(o.a)(Object(o.a)({},e),{},{searchTerm:c})})),Object(n.d)(i.expandFolder,(function(e,t){return function(e,t){return e.expandedFolders.includes(t)?e:Object(o.a)(Object(o.a)({},e),{},{expandedFolders:[].concat(Object(u.a)(e.expandedFolders),[t])})}(e,t.folderId)})),Object(n.d)(i.collapseFolder,(function(e,t){return b(e,t.folderId)})));function b(e){for(var t=arguments.length,c=new Array(t>1?t-1:0),n=1;n<t;n++)c[n-1]=arguments[n];return c.some((function(t){return e.expandedFolders.includes(t)}))?Object(o.a)(Object(o.a)({},e),{},{expandedFolders:e.expandedFolders.filter((function(e){return!e.includes(e)}))}):e}var f=function(e){return e.documentExplorer},O={selectState:f,selectExpandedFolders:function(e){return f(e).expandedFolders},selectSearchTerm:function(e){return f(e).searchTerm}}},628:function(e,t,c){"use strict";c.r(t);var n=c(21),a=c(395),r=c(68),i=c(383),o=c(254),u=c(88);t.default=function(e){var t=e.children,c=Object(r.useState)(),d=Object(n.a)(c,2),s=d[0],l=d[1];return Object(r.useEffect)((function(){Object(a.a)().then(l)}),[l]),s?Object(u.jsx)(i.a,{store:s,children:t}):Object(u.jsx)(o.a,{})}}}]);