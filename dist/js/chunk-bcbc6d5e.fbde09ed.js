(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bcbc6d5e"],{"5ca3":function(e,t,s){},"6ebc":function(e,t,s){},a591:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"episodes page fixed-page"},[s("div",{staticClass:"episode-list-header page-header flexrow"},[s("search-field",{ref:"episode-search-field",staticClass:"flexrow-item mt1",attrs:{placeholder:"ex: e01 s01, anim=wip"},on:{change:e.onSearchChange}}),s("combobox",{staticClass:"mb0 flexrow-item",attrs:{"locale-key-prefix":"statistics.",label:e.$t("statistics.display_mode"),options:e.displayModeOptions},model:{value:e.displayMode,callback:function(t){e.displayMode=t},expression:"displayMode"}}),s("combobox",{staticClass:"mb0 flexrow-item",attrs:{label:e.$t("statistics.count_mode"),"locale-key-prefix":"statistics.",options:e.countModeOptions},model:{value:e.countMode,callback:function(t){e.countMode=t},expression:"countMode"}}),s("span",{staticClass:"filler"}),s("button-simple",{staticClass:"flexrow-item",attrs:{icon:"refresh",title:e.$t("main.reload")},on:{click:e.reset}}),s("button-simple",{staticClass:"flexrow-item",attrs:{icon:"download"},on:{click:e.exportStatisticsToCsv}})],1),s("episode-list",{ref:"episode-list",attrs:{entries:e.displayedEpisodes,"is-loading":e.isShotsLoading,"is-error":e.isShotsLoadingError,"validation-columns":e.episodeValidationColumns,"episode-stats":e.episodeStats,"count-mode":e.countMode,"display-mode":e.displayMode,"show-all":0===e.episodeSearchText.length},on:{scroll:e.saveScrollPosition,"delete-clicked":e.onDeleteClicked,"edit-clicked":e.onEditClicked}}),s("edit-episode-modal",{attrs:{active:e.modals.isNewDisplayed,"is-loading":e.loading.edit,"is-error":e.errors.edit,"episode-to-edit":e.episodeToEdit},on:{cancel:function(t){e.modals.isNewDisplayed=!1},confirm:e.confirmEditEpisode}}),s("hard-delete-modal",{attrs:{active:e.modals.isDeleteDisplayed,"is-loading":e.loading.del,"is-error":e.errors.del,text:e.deleteText(),"error-text":e.$t("episodes.delete_error"),"lock-text":e.episodeToDelete?e.episodeToDelete.name:""},on:{cancel:function(t){e.modals.isDeleteDisplayed=!1},confirm:e.confirmDeleteEpisode}})],1)},o=[],a=(s("99af"),s("a15b"),s("b0c0"),s("5530")),d=s("c1df"),n=s.n(d),r=s("2f62"),l=s("3455"),c=s("8c97"),p=s("de40"),u=s("992f"),h=s("2c1a"),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{modal:!0,"is-active":e.active}},[s("div",{staticClass:"modal-background",on:{click:function(t){return e.$emit("cancel")}}}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box"},[e.episodeToEdit&&this.episodeToEdit.id?s("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("episodes.edit_title"))+" "+e._s(e.episodeToEdit.name)+" ")]):s("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("episodes.new_episode"))+" ")]),s("form",{on:{submit:function(e){e.preventDefault()}}},[s("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:e.$t("episodes.fields.name")},on:{enter:e.runConfirmation},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),s("textarea-field",{ref:"descriptionField",attrs:{label:e.$t("episodes.fields.description")},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?e.runConfirmation(t):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.metaKey?e.runConfirmation(t):null}]},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),s("modal-footer",{attrs:{"error-text":e.$t("episodes.edit_error"),"is-loading":e.isLoading,"is-error":e.isError},on:{confirm:e.confirmClicked,cancel:function(t){return e.$emit("cancel")}}})],1)])])},m=[],y=(s("a4d3"),s("e01a"),s("d065")),b=s("d5c9"),v=s("7bf8"),C=s("1149"),_={name:"edit-episode-modal",mixins:[y["a"]],components:{ModalFooter:b["a"],TextField:v["a"],TextareaField:C["a"]},props:["onConfirmClicked","text","active","cancelRoute","isError","isLoading","isLoadingStay","isSuccess","episodeToEdit","errorText"],data:function(){return this.episodeToEdit&&this.episodeToEdit.id?{form:{id:this.episodeToEdit.id,name:this.episodeToEdit.name,description:this.episodeToEdit.description,production_id:this.episodeToEdit.project_id},episodeSuccessText:""}:{form:{id:"",name:"",description:"",fps:""},episodeSuccessText:""}},computed:Object(a["a"])({},Object(r["c"])(["currentProduction"])),methods:Object(a["a"])(Object(a["a"])({},Object(r["b"])([])),{},{runConfirmation:function(){this.confirmClicked()},confirmClicked:function(){this.$emit("confirm",this.form)},isEditing:function(){return this.episodeToEdit&&this.episodeToEdit.id},resetForm:function(){this.episodeSuccessText="",this.isEditing()?this.form={id:this.episodeToEdit.id,name:this.episodeToEdit.name,description:this.episodeToEdit.description}:(this.form.id=null,this.form.name="",this.form.description="")}}),mounted:function(){this.resetForm()},watch:{active:function(){this.resetForm()},episodeToEdit:function(){this.resetForm()}}},E=_,S=(s("d8b9"),s("2877")),g=Object(S["a"])(E,f,m,!1,null,"7e86a2f2",null),T=g.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"data-list"},[s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onBodyScroll,expression:"onBodyScroll"}],ref:"body",staticClass:"datatable-wrapper"},[s("table",{staticClass:"datatable"},[s("thead",{staticClass:"datatable-head"},[s("tr",[s("th",{ref:"th-episode",staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("shots.fields.episode"))+" ")]),s("th",{staticClass:"description",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("shots.fields.description"))+" ")]),s("th",{staticClass:"validation",attrs:{scope:"col"}},[e._v(e._s(e.$t("main.all")))]),e._l(e.validationColumns,(function(t){return s("th",{key:e.taskTypeMap[t].id,staticClass:"validation validation-cell",attrs:{scope:"col"}},[s("div",{staticClass:"flexrow validation-content",style:e.getValidationStyle(t)},[e.isCurrentUserClient?s("span",{staticClass:"flexrow-item"},[e._v(" "+e._s(e.taskTypeMap[t].name)+" ")]):s("router-link",{staticClass:"flexrow-item",attrs:{to:e.taskTypePath(t)}},[e._v(" "+e._s(e.taskTypeMap[t].name)+" ")])],1)])})),s("th",{staticClass:"actions",attrs:{scope:"col"}})],2)]),s("tbody",{staticClass:"datatable-body"},[e.showAll&&!e.isEmptyList?s("tr",{staticClass:"all-line datatable-row"},[s("th",{staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("episodes.all_episodes"))+" ")]),s("td",{staticClass:"description"}),s("stats-cell",{attrs:{colors:e.chartColors("all","all"),data:e.chartData("all","all"),"frames-data":e.chartData("all","all","frames"),countMode:e.countMode,displayMode:e.displayMode}}),e._l(e.validationColumns,(function(t){return s("stats-cell",{key:"all-"+t,style:e.getValidationStyle(t),attrs:{colors:e.chartColors("all",t),data:e.chartData("all",t),"frames-data":e.chartData("all",t,"frames"),countMode:e.countMode,displayMode:e.displayMode}})})),s("td",{staticClass:"actions"})],2):e._e(),e._l(e.entries,(function(t){return s("tr",{key:t.id,staticClass:"datatable-row"},[s("th",{staticClass:"name datatable-row-header"},[e._v(" "+e._s(t.name)+" ")]),s("td",{staticClass:"description"},[e._v(" "+e._s(t.description)+" ")]),e.isStats(t.id,"all")?s("stats-cell",{attrs:{colors:e.chartColors(t.id,"all"),data:e.chartData(t.id,"all"),"frames-data":e.chartData(t.id,"all","frames"),countMode:e.countMode,displayMode:e.displayMode}}):s("td"),e._l(e.validationColumns,(function(i){return e.isStats(t.id,i)?s("stats-cell",{key:t.id+i,style:e.getValidationStyle(i),attrs:{colors:e.chartColors(t.id,i),data:e.chartData(t.id,i),"frames-data":e.chartData(t.id,i,"frames"),countMode:e.countMode,displayMode:e.displayMode}}):s("td",{style:e.getValidationStyle(i)})})),e.isCurrentUserManager?s("row-actions",{attrs:{entry:t},on:{"delete-clicked":function(s){return e.$emit("delete-clicked",t)},"edit-clicked":function(s){return e.$emit("edit-clicked",t)}}}):s("td",{staticClass:"actions"})],2)}))],2)])]),s("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),e.isEmptyList&&!e.isCurrentUserClient?s("div",{staticClass:"has-text-centered"},[e._m(0),s("p",{staticClass:"info"},[e._v(e._s(e.$t("episodes.empty_list")))])]):e._e(),e.isEmptyList&&e.isCurrentUserClient?s("div",{staticClass:"has-text-centered"},[e._m(1),s("p",{staticClass:"info"},[e._v(e._s(e.$t("episodes.empty_list_client")))])]):e._e(),e.isEmptyList?e._e():s("p",{staticClass:"has-text-centered nb-episodes"},[e._v(" "+e._s(e.displayedEpisodesLength)+" "+e._s(e.$tc("episodes.number",e.displayedEpisodesLength))+" ")])],1)},M=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"info"},[i("img",{attrs:{src:s("732b")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"info"},[i("img",{attrs:{src:s("732b")}})])}],k=(s("d3b7"),s("ddb0"),s("e9c6")),D=s("09d3"),$=s("03b1"),w=s("b131"),P=s("e60b"),O={name:"episode-list",mixins:[k["a"]],components:{RowActions:$["a"],StatsCell:w["a"],TableInfo:P["a"]},props:{countMode:{type:String,default:"count"},displayMode:{type:String,default:"pie"},entries:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},episodeStats:{type:Object,default:function(){}},showAll:{type:Boolean,default:!1},validationColumns:{type:Array,default:function(){return[]}}},data:function(){return{busy:!1,lastSelection:null}},computed:Object(a["a"])(Object(a["a"])({},Object(r["c"])(["currentProduction","displayedEpisodesLength","episodeSearchText","isCurrentUserClient","isCurrentUserManager","isSingleEpisode","taskTypeMap"])),{},{isEmptyList:function(){return this.entries&&0===this.entries.length&&!this.isLoading&&!this.isError&&(!this.episodeSearchText||0===this.episodeSearchText.length)}}),methods:Object(a["a"])(Object(a["a"])({},Object(r["b"])(["displayMoreEpisodes","loadMoreEpisodes"])),{},{chartColors:function(e,t){return Object(D["b"])(this.episodeStats,e,t)},chartData:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"count";return Object(D["c"])(this.episodeStats,e,t,s)},isStats:function(e,t){return this.episodeStats[e]&&this.episodeStats[e][t]},onBodyScroll:function(e,t){this.$emit("scroll",t.scrollTop);var s=this.$refs.body.scrollHeight-this.$refs.body.offsetHeight;s<t.scrollTop+100&&this.loadMoreEpisodes()},loadMoreEpisodes:function(){this.displayMoreEpisodes()},setScrollPosition:function(e){this.$refs.body.scrollTop=e},resizeHeaders:function(){return!0},editPath:function(e){return this.getPath("edit-episode",e)},deletePath:function(e){return this.getPath("delete-episode",e)},taskTypePath:function(e){var t={name:"task-type",params:{production_id:this.currentProduction.id,task_type_id:e,type:"count"}};return this.isTVShow&&(t.name="episode-task-type",t.params.episode_id=this.currentEpisode.id),t},getPath:function(e,t){var s={name:e,params:{production_id:this.currentProduction.id,episode_id:t}};return s}})},L=O,j=(s("f9ef"),Object(S["a"])(L,x,M,!1,null,"0d3101e4",null)),F=j.exports,V=s("4d04"),A={name:"episodes",components:{ButtonSimple:p["a"],Combobox:u["a"],EpisodeList:F,EditEpisodeModal:T,HardDeleteModal:h["a"],SearchField:V["a"]},data:function(){return{countMode:"count",displayMode:"pie",episodeToDelete:null,episodeToEdit:null,countModeOptions:[{label:"shots",value:"count"},{label:"frames",value:"frames"}],displayModeOptions:[{label:"pie",value:"pie"},{label:"count",value:"count"}],errors:{edit:!1,del:!1},modals:{isNewDisplayed:!1,isDeleteDisplayed:!1},loading:{edit:!1,del:!1}}},computed:Object(a["a"])({},Object(r["c"])(["currentProduction","displayedEpisodes","episodesPath","isCurrentUserManager","isShotsLoading","isShotsLoadingError","episodes","episodeMap","episodePath","episodeStats","episodeSearchText","episodeListScrollPosition","episodeValidationColumns","taskStatusMap","taskTypeMap"])),mounted:function(){this.setDefaultSearchText(),this.setDefaultListScrollPosition(),this.resizeHeaders(),this.initEpisodes()},methods:Object(a["a"])(Object(a["a"])({},Object(r["b"])(["computeEpisodeStats","deleteEpisode","editEpisode","hideAssignations","initEpisodes","loadComment","loadEpisodeStats","loadShots","setLastProductionScreen","setEpisodeSearch","setEpisodeListScrollPosition","showAssignations"])),{},{setDefaultSearchText:function(){this.episodeSearchText.length>0&&this.$refs["episode-search-field"].setValue(this.episodeSearchText)},setDefaultListScrollPosition:function(){this.$refs["episode-list"].setScrollPosition(this.episodeListScrollPosition)},navigateToList:function(){this.$router.push(this.episodesPath)},onEditClicked:function(e){this.episodeToEdit=e,this.modals.isNewDisplayed=!0},onDeleteClicked:function(e){this.episodeToDelete=e,this.modals.isDeleteDisplayed=!0},confirmEditEpisode:function(e){var t=this;this.loading.edit=!0,this.errors.edit=!1,this.editEpisode(e).then((function(){t.loading.edit=!1,t.modals.isNewDisplayed=!1})).catch((function(){t.loading.edit=!1,t.errors.edit=!0}))},confirmDeleteEpisode:function(){var e=this;this.loading.del=!0,this.errors.edit=!1,this.deleteEpisode(this.episodeToDelete).then((function(){e.loading.del=!1,e.modals.isDeleteDisplayed=!1})).catch((function(){e.loading.del=!1,e.errors.delete=!0}))},resetEditModal:function(){var e={name:""};this.episodes.length>0&&(e.episode_id=this.episodes[0].id),this.openProductions.length>0&&(e.production_id=this.openProductions[0].id),this.episodeToEdit=e},deleteText:function(){var e=this.episodeToDelete;return e?this.$t("episodes.delete_text",{name:e.name}):""},onSearchChange:function(e){var t=this.$refs["episode-search-field"].getValue();this.setEpisodeSearch(t),this.resizeHeaders()},saveScrollPosition:function(e){this.setEpisodeListScrollPosition(e)},resizeHeaders:function(){var e=this;setTimeout((function(){e.$refs["episode-list"]&&e.$refs["episode-list"].resizeHeaders()}),0)},exportStatisticsToCsv:function(){var e=[n()().format("YYYYMMDD"),this.currentProduction.name,"episodes","statistics"],t=c["a"].slugify(e.join("_"));l["a"].generateStatReports(t,this.episodeStats,this.taskTypeMap,this.taskStatusMap,this.episodeMap,this.countMode)},reset:function(){this.loadEpisodeStats(this.currentProduction.id)}}),watch:{displayedEpisodes:function(){this.resizeHeaders()},currentProduction:function(){var e=this,t=this.$route.params.production_id;if(this.currentProduction.id!==t){var s={name:"episodes",params:{production_id:this.currentProduction.id}};this.$refs["episode-search-field"].setValue(""),this.$store.commit("SET_SEQUENCE_LIST_SCROLL_POSITION",0),this.$router.push(s),this.loadShots((function(){e.resizeHeaders(),e.isTVShow?e.loadEpisodeStats(e.currentProduction.id):e.computeEpisodeStats()}))}}},metaInfo:function(){return{title:"".concat(this.currentProduction.name," ").concat(this.$t("episodes.title")," - Kitsu")}}},H=A,N=Object(S["a"])(H,i,o,!1,null,"244bbfc6",null);t["default"]=N.exports},b131:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",{staticClass:"validation"},["pie"===e.displayMode?s("div",[s("pie-chart",{attrs:{width:"70px",height:"50px",legend:!1,colors:e.colors,data:e.selectedData}})],1):s("div",e._l(e.selectedData,(function(t){return t[0]?s("div",{key:t[0]},[s("span",{staticClass:"stats-name",style:{color:t[2]}},[e._v(" "+e._s(t[0])+" ")]),s("span",[e._v(" : ")]),s("span",{staticClass:"stats-value"},[e._v(" "+e._s(t[1])+" ("+e._s(e.percent(t[1]))+"%) ")])]):e._e()})),0)])},o=[],a=(s("13d5"),s("b680"),{name:"stats-cell",components:{},props:{colors:{type:Array,required:!0},countMode:{type:String,default:"count"},data:{type:Array,default:function(){return[]}},displayMode:{type:String,default:"pie"},framesData:{type:Array,default:function(){return[]}}},computed:{selectedData:function(){return"frames"===this.countMode?this.framesData:this.data},total:function(){return this.selectedData.reduce((function(e,t){return t[1]?e+t[1]:e}),0)}},methods:{percent:function(e){var t=0;return this.total>0&&(t=e/this.total*100),t.toFixed(2)}}}),d=a,n=(s("d1de"),s("2877")),r=Object(n["a"])(d,i,o,!1,null,"77213702",null);t["a"]=r.exports},d1de:function(e,t,s){"use strict";var i=s("6ebc"),o=s.n(i);o.a},d8b9:function(e,t,s){"use strict";var i=s("5ca3"),o=s.n(i);o.a},f865:function(e,t,s){},f9ef:function(e,t,s){"use strict";var i=s("f865"),o=s.n(i);o.a}}]);
//# sourceMappingURL=chunk-bcbc6d5e.fbde09ed.js.map