(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{179:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return IconButton}));var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(245),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(495),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react_icons_fa__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(327),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=arr&&("undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"]);if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var IconButton=function IconButton(_ref){var ariaLabel=_ref.ariaLabel,onClick=_ref.onClick,variant=_ref.variant,_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(),2),icon=_useState2[0],setIcon=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){setIcon(function getIcon(){switch(variant){case"add":return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.a,{as:react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.b,"data-testid":"FaPlus"});case"plane":return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.a,{as:react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.a,"data-testid":"FaPlane"})}}())}),[variant]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,_objectSpread(_objectSpread({colorScheme:"teal","aria-label":ariaLabel,size:"lg",fontSize:"2xl"},icon?{icon:icon}:{}),{},{isRound:!0,onClick:onClick,"data-testid":"IconButton"}))};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"`IconButton` composes the Button component except that it renders only an icon.\n\nSince `IconButton` only renders an icon, you must pass the `ariaLabel` prop, so screen readers\ncan give meaning to the `button`.",displayName:"IconButton",props:{ariaLabel:{defaultValue:null,description:"A11y: A label that describes the button.",name:"ariaLabel",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The icon variant to render.\n@todo Remove `plane` after another icon was added",name:"variant",required:!0,type:{name:'"add" | "plane"'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"packages/buttons/src/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},180:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return MenuButton}));var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(246),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(495),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(245),react_icons_io5__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(53),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15),MenuButton=function MenuButton(_ref){var color=_ref.color,menuItems=_ref.menuItems;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.b,{as:_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,"aria-label":"Options",icon:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{as:react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.b}),variant:"unstyled",color:color,"data-testid":"MenuButton"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.d,{children:menuItems.map((function(item,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.c,{icon:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{as:item.icon}),onClick:item.onClick,color:item.color||"gray.900","data-testid":"MenuItem",children:item.title},index)}))})]})};try{MenuButton.displayName="MenuButton",MenuButton.__docgenInfo={description:"An accessible dropdown menu for the common dropdown menu button design pattern. `Menu` uses\nroving `tabIndex` for focus management.\n\nThis special `Menu` is set with the `IoEllipsisVertical` icon.",displayName:"MenuButton",props:{menuItems:{defaultValue:null,description:"The list of menu items.",name:"menuItems",required:!0,type:{name:"MenuListItem[]"}},color:{defaultValue:null,description:"The color of the `IoEllipsisVertical` icon.",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/MenuButton.tsx#MenuButton"]={docgenInfo:MenuButton.__docgenInfo,name:"MenuButton",path:"packages/buttons/src/MenuButton.tsx#MenuButton"})}catch(__react_docgen_typescript_loader_error){}},242:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return IconButton.a})),__webpack_require__.d(__webpack_exports__,"b",(function(){return MenuButton.a}));var IconButton=__webpack_require__(179),MenuButton=__webpack_require__(180)},519:function(module,exports,__webpack_require__){__webpack_require__(520),__webpack_require__(677),__webpack_require__(678),__webpack_require__(884),__webpack_require__(885),__webpack_require__(890),__webpack_require__(891),__webpack_require__(888),__webpack_require__(887),__webpack_require__(892),__webpack_require__(886),module.exports=__webpack_require__(879)},587:function(module,exports){},678:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(375)},879:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(375).configure)([__webpack_require__(880),__webpack_require__(881)],module,!1)}).call(this,__webpack_require__(172)(module))},880:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=880},881:function(module,exports,__webpack_require__){var map={"./buttons/stories/IconButton.stories.tsx":882,"./buttons/stories/MenuButton.stories.tsx":883,"./cards/stories/AddNewItemCard.stories.tsx":893,"./cards/stories/TemplateCard.stories.tsx":889};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=881},882:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithClickEvent",(function(){return WithClickEvent}));var _src_IconButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(179),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_exports__.default={title:"Components/Buttons/IconButton",component:_src_IconButton__WEBPACK_IMPORTED_MODULE_0__.a,args:{ariaLabel:"New survey",variant:"plane"}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_IconButton__WEBPACK_IMPORTED_MODULE_0__.a,_objectSpread({},args))},Default=Template.bind({}),WithClickEvent=Template.bind({});WithClickEvent.args={variant:"add",onClick:function onClick(){return alert("Button clicked!")}},Default.parameters=_objectSpread({storySource:{source:"(args) => <IconButton {...args} />"}},Default.parameters),WithClickEvent.parameters=_objectSpread({storySource:{source:"(args) => <IconButton {...args} />"}},WithClickEvent.parameters)},883:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react_icons_io5__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(53),_src_MenuButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(180),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_exports__.default={title:"Components/Buttons/MenuButton",component:_src_MenuButton__WEBPACK_IMPORTED_MODULE_1__.a,args:{menuItems:[{icon:react_icons_io5__WEBPACK_IMPORTED_MODULE_0__.a,title:"Duplicate"},{icon:react_icons_io5__WEBPACK_IMPORTED_MODULE_0__.c,title:"Move"},{icon:react_icons_io5__WEBPACK_IMPORTED_MODULE_0__.e,title:"Assign tags"},{icon:react_icons_io5__WEBPACK_IMPORTED_MODULE_0__.d,title:"Save as template"},{icon:react_icons_io5__WEBPACK_IMPORTED_MODULE_0__.g,title:"Delete",color:"red.500"}]}};var Default=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_MenuButton__WEBPACK_IMPORTED_MODULE_1__.a,_objectSpread({},args))}.bind({});Default.parameters=_objectSpread({storySource:{source:"(args) => <MenuButton {...args} />"}},Default.parameters)},886:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));var client_api=__webpack_require__(921),esm=__webpack_require__(7),chakra_provider=(__webpack_require__(870),__webpack_require__(919)),extend_theme=__webpack_require__(911),component=__webpack_require__(244),theme={colors:{black:"#303540",gray:{50:"#F6F6F6",100:"#EFEFEF",200:"#EAEAEA",300:"#DDDDDD",400:"#C3C3C3",500:"#A9A9A9",600:"#989898",700:"#7F7F7F",800:"#656565",900:"#545454"},pink:{50:"#FF3B7C",100:"#FF2970",200:"#FF0558",300:"#E0004B",400:"#BD003F",500:"#990033",600:"#750027",700:"#52001B",800:"#2E000F",900:"#0A0003"},teal:{50:"#48FDFD",100:"#36FDFD",200:"#13FCFC",300:"#03E9E9",400:"#02C5C5",500:"#02A2A2",600:"#027F7F",700:"#015B5B",800:"#013838",900:"#001515"}},fonts:{heading:'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},styles:{global:function global(props){return{body:{fontFamily:"body",color:Object(component.a)("black","whiteAlpha.900")(props),bg:Object(component.a)("white","black")(props),transition:"background-color 0.2s",lineHeight:"base"},"*::placeholder":{color:Object(component.a)("gray.400","whiteAlpha.400")(props)},"*, *::before, &::after":{borderColor:Object(component.a)("gray.200","whiteAlpha.300")(props),wordWrap:"break-word"}}}}},jsx_runtime=(__webpack_require__(1),__webpack_require__(15)),parameters={actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{default:"light",values:[{name:"light",value:"#EFEFEF"}]},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},layout:"centered"},decorators=[function withChakra(StoryFn){return Object(jsx_runtime.jsx)(chakra_provider.a,{theme:Object(extend_theme.a)(theme),children:Object(jsx_runtime.jsx)(StoryFn,{})})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},889:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"NonPublished",(function(){return NonPublished})),__webpack_require__.d(__webpack_exports__,"Limits",(function(){return Limits}));var index_esm=__webpack_require__(53),link_box=__webpack_require__(917),esm_image=__webpack_require__(922),box=__webpack_require__(916),esm=__webpack_require__(235),heading=__webpack_require__(918),esm_text=__webpack_require__(915),stack=__webpack_require__(920),icon=__webpack_require__(245),buttons=__webpack_require__(242),jsx_runtime=__webpack_require__(15),StateDot_StateDot=function StateDot(_ref){var state=_ref.state,getValuesFromState=function getValuesFromState(){var color,title;switch(state){case"initialized":color="gray.500",title="initialized";break;case"paused":color="yellow.500",title="paused";break;case"closed":color="red.500",title="closed";break;case"published":color="teal.500",title="published"}return{color:color,title:title}};return Object(jsx_runtime.jsx)(box.a,{w:"12px",h:"12px",rounded:"full",bgColor:getValuesFromState().color,title:getValuesFromState().title,zIndex:"docked","data-testid":"StateDot"})};try{StateDot_StateDot.displayName="StateDot",StateDot_StateDot.__docgenInfo={description:"",displayName:"StateDot",props:{state:{defaultValue:null,description:"The current state of the template.",name:"state",required:!0,type:{name:'"initialized" | "published" | "paused" | "closed"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/cards/src/utils/StateDot.tsx#StateDot"]={docgenInfo:StateDot_StateDot.__docgenInfo,name:"StateDot",path:"packages/cards/src/utils/StateDot.tsx#StateDot"})}catch(__react_docgen_typescript_loader_error){}var TemplateCard_TemplateCard=function TemplateCard(_ref){var href=_ref.href,title=_ref.title,imageSrc=_ref.imageSrc,views=_ref.views,menuItems=_ref.menuItems,state=_ref.state;return Object(jsx_runtime.jsxs)(link_box.a,{as:"article",w:"220px",h:"".concat(250,"px"),boxShadow:"lg",rounded:"base",_hover:{boxShadow:"xl"},"data-testid":"TemplateCard",title:title,children:[Object(jsx_runtime.jsx)(esm_image.a,{src:imageSrc,alt:title,pos:"absolute",top:"0",right:"0",bottom:"".concat(48,"px"),left:"0",objectFit:"cover",borderTopRadius:"base",zIndex:"hide"}),Object(jsx_runtime.jsx)(box.a,{pos:"absolute",top:"1",title:"options",right:"1",zIndex:esm.theme.zIndices.docked+1,children:Object(jsx_runtime.jsx)(buttons.b,{color:"white",menuItems:menuItems})}),Object(jsx_runtime.jsx)(box.a,{bgColor:"rgba(0,0,0,0.6)",h:"".concat(202,"px"),px:"4",pt:"10",pb:"8",borderTopRadius:"base",children:Object(jsx_runtime.jsx)(heading.a,{size:"base",fontWeight:"normal",color:"white",children:Object(jsx_runtime.jsx)(link_box.b,{href:href,children:Object(jsx_runtime.jsx)(esm_text.a,{noOfLines:3,children:title})})})}),Object(jsx_runtime.jsxs)(stack.a,{bgColor:"white",height:"".concat(48,"px"),justifyContent:"space-between",px:"4",borderBottomRadius:"base",children:[Object(jsx_runtime.jsx)(StateDot_StateDot,{state:state}),views&&Object(jsx_runtime.jsxs)(stack.a,{color:"gray.700","data-testid":"views",children:[Object(jsx_runtime.jsx)(esm_text.a,{as:"span",zIndex:"docked",title:"".concat(views),fontSize:"sm",isTruncated:!0,maxWidth:145,children:views}),Object(jsx_runtime.jsx)(icon.a,{as:index_esm.f,title:"survey stats",zIndex:"docked",w:"3",h:"3"})]})]})]})};try{TemplateCard_TemplateCard.displayName="TemplateCard",TemplateCard_TemplateCard.__docgenInfo={description:"`TemplateCard` is a Card component for displaying the state, stats and preview of the available templates.",displayName:"TemplateCard",props:{href:{defaultValue:null,description:"The hyperlink to the template.",name:"href",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"The title of the template.",name:"title",required:!0,type:{name:"string"}},imageSrc:{defaultValue:null,description:"The image src attribute.",name:"imageSrc",required:!0,type:{name:"string"}},views:{defaultValue:null,description:"The number of views.",name:"views",required:!1,type:{name:"number"}},menuItems:{defaultValue:null,description:"The list of menu items.",name:"menuItems",required:!0,type:{name:"MenuListItem[]"}},state:{defaultValue:null,description:"The current state of the template.",name:"state",required:!0,type:{name:'"initialized" | "published" | "paused" | "closed"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/cards/src/TemplateCard.tsx#TemplateCard"]={docgenInfo:TemplateCard_TemplateCard.__docgenInfo,name:"TemplateCard",path:"packages/cards/src/TemplateCard.tsx#TemplateCard"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_exports__.default={title:"Components/Cards/TemplateCard",component:TemplateCard_TemplateCard,args:{href:"#",title:"Demo Survey (Satisfaction Ice Cream)",imageSrc:"https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?fit=crop&w=220&h=202&q=60",views:213,menuItems:[{icon:index_esm.a,title:"Duplicate"},{icon:index_esm.c,title:"Move"},{icon:index_esm.e,title:"Assign tags"},{icon:index_esm.d,title:"Save as template"},{icon:index_esm.g,title:"Delete",color:"red.500"}],state:"published"}};var TemplateCard_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(TemplateCard_TemplateCard,_objectSpread({},args))},Default=TemplateCard_stories_Template.bind({}),NonPublished=TemplateCard_stories_Template.bind({});NonPublished.args={views:void 0,state:"initialized"};var Limits=TemplateCard_stories_Template.bind({});Limits.args={title:"Survey about something with users from the Application of state and democracy - inspirated by rainbows and flowers",state:"closed",views:0xab54a98ceb1f0800},Default.parameters=_objectSpread({storySource:{source:"(args) => <TemplateCard {...args} />"}},Default.parameters),NonPublished.parameters=_objectSpread({storySource:{source:"(args) => <TemplateCard {...args} />"}},NonPublished.parameters),Limits.parameters=_objectSpread({storySource:{source:"(args) => <TemplateCard {...args} />"}},Limits.parameters)},893:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithClickEvent",(function(){return WithClickEvent}));var center=__webpack_require__(914),esm_text=__webpack_require__(915),buttons=__webpack_require__(242),jsx_runtime=__webpack_require__(15),AddNewItemCard_AddNewItemCard=function AddNewItemCard(_ref){var label=_ref.label,onClick=_ref.onClick,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"add":_ref$variant;return Object(jsx_runtime.jsxs)(center.a,{as:"article",flexDir:"column",w:"220px",h:"250px",rounded:"base",borderStyle:"dashed",borderWidth:"3px",borderColor:"gray.300","data-testid":"AddNewItemCard",children:[Object(jsx_runtime.jsx)(buttons.a,{ariaLabel:label,variant:variant,onClick:onClick}),Object(jsx_runtime.jsx)(esm_text.a,{fontSize:"sm",fontWeight:"bold",align:"center",mt:"1rem",children:label})]})};try{AddNewItemCard_AddNewItemCard.displayName="AddNewItemCard",AddNewItemCard_AddNewItemCard.__docgenInfo={description:"`AddNewItemCard` is a Card component for adding a new item.",displayName:"AddNewItemCard",props:{label:{defaultValue:null,description:"The label of the component.",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},variant:{defaultValue:{value:"add"},description:"The icon variant to render.\n@todo Remove `plane` after another icon was added",name:"variant",required:!1,type:{name:'"add" | "plane"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/cards/src/AddNewItemCard.tsx#AddNewItemCard"]={docgenInfo:AddNewItemCard_AddNewItemCard.__docgenInfo,name:"AddNewItemCard",path:"packages/cards/src/AddNewItemCard.tsx#AddNewItemCard"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_exports__.default={title:"Components/Cards/AddNewItemCard",component:AddNewItemCard_AddNewItemCard,args:{label:"New survey",variant:"add"}};var AddNewItemCard_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(AddNewItemCard_AddNewItemCard,_objectSpread({},args))},Default=AddNewItemCard_stories_Template.bind({}),WithClickEvent=AddNewItemCard_stories_Template.bind({});WithClickEvent.args={onClick:function onClick(){return alert("New Item added!")}},Default.parameters=_objectSpread({storySource:{source:"(args) => <AddNewItemCard {...args} />"}},Default.parameters),WithClickEvent.parameters=_objectSpread({storySource:{source:"(args) => <AddNewItemCard {...args} />"}},WithClickEvent.parameters)}},[[519,2,3]]]);