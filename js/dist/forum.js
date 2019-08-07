module.exports=function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=43)}([function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["utils/ItemList"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionComposer"]},function(e,t){e.exports=flarum.core.compat["models/User"]},function(e,t){e.exports=flarum.core.compat["models/Discussion"]},function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat["components/Button"]},function(e,t){e.exports=flarum.core.compat["models/Group"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionPage"]},function(e,t){},function(e,t){e.exports=flarum.core.compat["components/Switch"]},function(e,t){e.exports=flarum.core.compat["components/Select"]},function(e,t){e.exports=flarum.core.compat["helpers/highlight"]},function(e,t){e.exports=flarum.core.compat["helpers/username"]},function(e,t){e.exports=flarum.core.compat["utils/extract"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionList"]},function(e,t){e.exports=flarum.core.compat["components/UserPage"]},function(e,t){e.exports=flarum.core.compat["components/LinkButton"]},function(e,t){e.exports=flarum.core.compat["helpers/listItems"]},function(e,t){e.exports=flarum.core.compat["utils/classList"]},,function(e,t,n){"use strict";var s=n(5),o=n.n(s),r=n(4),i=n.n(r),a=n(3),c=n.n(a),p=n(0),u=n(2),l=n.n(u);function d(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var f=n(23),h=n.n(f),v=n(8),b=n.n(v),y=n(6),g=n.n(y),x=n(1),w=n.n(x),R=n(24),N=n.n(R),_=n(12),D=n.n(_),k=n(25),I=n.n(k),P=n(13),S=n.n(P),L=function(){function e(){}var t=e.prototype;return t.view=function(e){var t=this;if(!(e.length<3||this.loading)){if(app.cache.byobuResults||(app.cache.byobuResults=[]),this.query=e,app.cache.byobuResults[this.query])return[m("li",{className:"Dropdown-header"},app.translator.trans("core.forum.search.users_heading")),app.cache.byobuResults[this.query].map(function(e){var n=S()(e);return n.children[0]=D()(n.children[0],t.query),m("li",{className:"SearchResult","data-index":"users:"+e.id()},m("a",{"data-index":"users:"+e.id()},I()(e),n))})];this.loading=!0,app.cache.byobuResults[this.query]=[],app.store.find("users",{filter:{q:this.query+" allows-pd"},page:{limit:5}}).then(this.pushResults.bind(this))}},t.pushResults=function(e){var t=this;e.payload.data.map(function(e){var n=app.store.getById("users",e.id);app.cache.byobuResults[t.query].push(n)}),this.loading=!1,m.redraw()},e}(),O=function(){function e(){}var t=e.prototype;return t.search=function(e){return app.store.find("groups",{filter:{q:e},page:{limit:5}})},t.view=function(e){e=e.toLowerCase();var t=app.store.all("groups").filter(function(t){return t.namePlural().toLowerCase().substr(0,e.length)===e});return t.length?[m("li",{className:"Dropdown-header"},app.translator.trans("fof-byobu.forum.search.headings.groups")),t.map(function(t){var n=t.namePlural(),s=D()(n,e);return m("li",{className:"SearchResult","data-index":"groups:"+t.id()},m("a",{"data-index":"groups:"+t.id()},m("span",{class:"groupName"},s)))})]:""},e}(),A=n(19),j=n.n(A),U=n(26),B=n.n(U),M=n(27),G=n.n(M),C=n(14),T=n.n(C),q=n(7),E=n.n(q);function H(e,t){void 0===t&&(t={}),t.style=t.style||{},t.className="RecipientLabel "+(t.className||"");var n,s=T()(t,"link");return e instanceof c.a?(n=S()(e),s&&(t.title=e.username()||"",t.href=app.route.user(e),t.config=m.route)):e instanceof E.a?n=e.namePlural():(t.className+=" none",n=app.translator.trans("fof-byobu.forum.labels.user_deleted")),m(s?"a":"span",t,m("span",{className:"RecipientLabel-text"},n))}var W=function(e){function t(){return e.apply(this,arguments)||this}d(t,e);var n=t.prototype;return n.config=function(t){var n=this;if(!t){var s=this;this.$(".Search-results").on("click",function(e){var t=n.$(".SearchResult.active");s.addRecipient(t.data("index")),s.$(".RecipientsInput").focus()}),this.$(".Search-results").on("touchstart",function(e){var t=n.$(e.target.parentNode);s.addRecipient(t.data("index")),s.$(".RecipientsInput").focus()}),$(".RecipientsInput").on("keyup",function(){clearTimeout(n.typingTimer),n.doSearch=!1,n.typingTimer=setTimeout(function(){n.doSearch=!0,m.redraw()},900)}).on("keydown",function(){clearTimeout(n.typingTimer)}),e.prototype.config.call(this,t)}},n.view=function(){var e=this;void 0===this.value()&&this.value("");var t=this.value()&&this.value().length>=3;return this.sources||(this.sources=this.sourceItems().toArray()),m("div",{className:"AddRecipientModal-form-input"},[m("div",{className:"RecipientsInput-selected RecipientsLabel"},this.props.selected().toArray().map(function(t){return H(t,{onclick:function(){e.removeRecipient(t)}})})),m("input",{className:"RecipientsInput FormControl "+j()({open:!!this.value(),focused:!!this.value(),active:!!this.value(),loading:!!this.loadingSources}),config:function(e){e.focus()},type:"search",placeholder:B()(app.translator.trans("fof-byobu.forum.input.search_recipients")),value:this.value(),oninput:m.withAttr("value",this.value),onfocus:function(){return e.hasFocus=!0},onblur:function(){return e.hasFocus=!1}}),m("ul",{className:"Dropdown-menu Search-results fade "+j()({in:!!t})},this.doSearch?this.sources.map(function(t){return t.view(e.value())}):G.a.component({size:"tiny",className:"Button Button--icon Button--link"}))])},n.sourceItems=function(){var e=new w.a;return(!this.props.discussion&&app.forum.attribute("canStartPrivateDiscussionWithUsers")||this.props.discussion&&this.props.discussion.canEditUserRecipients())&&e.add("users",new L),(!this.props.discussion&&app.forum.attribute("canStartPrivateDiscussionWithGroups")||this.props.discussion&&this.props.discussion.canEditGroupRecipients())&&e.add("groups",new O),e},n.clear=function(){this.value(""),m.redraw()},n.addRecipient=function(e){var t=e.split(":"),n=t[0],s=t[1],o=this.findRecipient(n,s);this.props.selected().add(e,o),this.clear()},n.removeRecipient=function(e){var t;e instanceof c.a&&(t="users"),e instanceof E.a&&(t="groups"),this.props.selected().remove(t+":"+e.id()),m.redraw()},n.findRecipient=function(e,t){return app.store.getById(e,t)},t}(N.a),F=function(e){function t(){return e.apply(this,arguments)||this}d(t,e);var n=t.prototype;return n.init=function(){e.prototype.init.call(this),this.selected=m.prop(new w.a),this.props.discussion?this.assignInitialRecipients(this.props.discussion):this.props.selectedRecipients.toArray().length>0?this.selected().merge(this.props.selectedRecipients):this.selected().add("users:"+app.session.user.id(),app.session.user),this.recipientSearch=W.component({selected:this.selected,discussion:this.props.discussion})},n.assignInitialRecipients=function(e){var t=this;e.recipientUsers().map(function(e){t.selected().add("users:"+e.id(),e)}),e.recipientGroups().map(function(e){t.selected().add("groups:"+e.id(),e)})},n.className=function(){return"AddRecipientModal"},n.title=function(){return this.props.discussion?app.translator.trans("fof-byobu.forum.modal.titles.update_recipients",{title:m("em",null,this.props.discussion.title())}):app.translator.trans("fof-byobu.forum.modal.titles.add_recipients")},n.content=function(){return[m("div",{className:"Modal-body"},m("div",{className:"AddRecipientModal-form"},this.recipientSearch,m("div",{className:"AddRecipientModal-form-submit App-primaryControl"},g.a.component({type:"submit",className:"Button Button--primary",disabled:!1,icon:"fas fa-check",children:app.translator.trans("fof-byobu.forum.buttons.submit")}))))]},n.select=function(e){(e.metaKey||e.ctrlKey||-1!==this.selected.indexOf(this.index))&&this.selected().length&&this.$("form").submit()},n.onsubmit=function(e){e.preventDefault();var t=this.props.discussion,n=this.selected(),s=[],o=[];n.toArray().forEach(function(e){e instanceof c.a&&o.push(e),e instanceof E.a&&s.push(e)}),t&&t.save({relationships:{recipientUsers:o,recipientGroups:s}}).then(function(){app.current instanceof b.a&&app.current.stream.update(),m.redraw()}),this.props.onsubmit&&this.props.onsubmit(n),app.modal.close(),m.redraw.strategy("none")},t}(h.a);function K(e,t){void 0===t&&(t={}),t.style=t.style||{},t.className="RecipientLabel "+(t.className||"");var n=app.translator.transChoice("fof-byobu.forum.labels.recipients",e,{count:e});return m("span",t,m("span",{className:"RecipientLabel-text"},n))}var z=n(28),J=n.n(z),Q=n(29),V=n.n(Q),X=n(15),Y=n.n(X);function Z(e,t){void 0===t&&(t={});var n=[],s=T()(t,"link");return t.className="RecipientsLabel "+(t.className||""),e?e.forEach(function(e){n.push(H(e,{link:s}))}):n.push(H()),m("span",t,n)}var ee=n(30),te=n.n(ee),ne=function(){Object(p.extend)(te.a,"moderationControls",function(e,t){t.canEditRecipients()&&e.add("recipients",g.a.component({children:app.translator.trans("fof-byobu.forum.buttons.edit_recipients"),icon:"far fa-map",onclick:function(){return app.modal.show(new F({discussion:t}))}}))})},se=n(31),oe=n.n(se);function re(){Object(p.extend)(i.a.prototype,"badges",function(e){(this.recipientUsers().length||this.recipientGroups().length)&&e.add("private",oe.a.component({type:"private",label:app.translator.trans("fof-byobu.forum.badges.is_private.tooltip"),icon:"fas fa-map"}),10)})}var ie=n(32),ae=n.n(ie),ce=function(){Object(p.extend)(ae.a,"userControls",function(e,t){return app.session.user&&app.session.user.id()!==t.id()&&app.forum.attribute("canStartPrivateDiscussion")&&(!1===t.blocksPd()||app.forum.attribute("canStartPrivateDiscussionWithBlockers"))&&!t.cannotBeDirectMessaged()&&e.add("private-discussion",g.a.component({children:app.translator.trans("fof-byobu.forum.buttons.send_pd",{username:t.username()}),icon:"far fa-map",onclick:function(){var e=m.deferred(),n=new w.a;n.add("users:"+t.id(),t),n.add("users:"+app.session.user.id(),app.session.user),l.a.prototype.recipients=n;var s=new l.a({user:app.session.user,recipients:n,recipientUsers:n});return app.composer.load(s),app.composer.show(),e.resolve(s),e.promise}})),e})},pe=n(33),ue=n.n(pe),le=n(10),de=n.n(le),me=function(){Object(p.extend)(ue.a.prototype,"privacyItems",function(e){var t=this;e.add("byobu-block-dm",de.a.component({children:app.translator.trans("fof-byobu.forum.user.settings.block_pd"),state:this.user.preferences().blocksPd,onchange:function(e,n){return t.preferenceSaver("blocksPd")(e,n)}}))})},fe=n(16),he=n.n(fe),ve=n(17),be=n.n(ve),ye=function(e){function t(){return e.apply(this,arguments)||this}return d(t,e),t}(Y.a),ge=function(e){function t(){return e.apply(this,arguments)||this}d(t,e);var n=t.prototype;return n.init=function(){e.prototype.init.call(this),this.loadUser(m.route.param("username")),this.list=new ye({params:{q:"byobu:"+this.user.username()+" is:private",sort:"newest"}}),this.list.refresh()},n.content=function(){return m("div",{className:"DiscussionsUserPage"},this.list.render())},t}(he.a),xe=function(){Number(app.data["fof-byobu.enable_byobu_user_page"])&&(app.routes["user.byobu"]={path:"/u/:username/byobu",component:ge.component()},Object(p.extend)(he.a.prototype,"navItems",function(e){e.add("byobu",be.a.component({href:app.route("user.byobu",{username:this.user.username()}),children:app.translator.trans("fof-byobu.forum.user.byobu_link"),icon:"fas fa-map"}),85)}))},we=n(34),Re=n.n(we),Ne=n(18),_e=n.n(Ne),De=n(35),ke=n.n(De),Ie=n(36),Pe=n.n(Ie),Se=n(37),Le=n.n(Se),Oe=n(11),Ae=n.n(Oe),je=n(38),Ue=n.n(je),Be=function(e){function t(){return e.apply(this,arguments)||this}d(t,e);var n=t.prototype;return n.init=function(){e.prototype.init.call(this),app.previous instanceof b.a&&(this.lastDiscussion=app.previous.discussion),app.previous instanceof t&&(app.cache.privateDiscussionList=null);var n=this.params();app.cache.privateDiscussionList&&Object.keys(n).some(function(e){if(app.cache.privateDiscussionList.props.params[e]!==n[e])return app.cache.privateDiscussionList=null,!0}),app.cache.privateDiscussionList||(app.cache.privateDiscussionList=new ye({params:n})),app.history.push("private-index",ke()("far fa-map")),this.bodyClass="App--index"},n.onunload=function(){app.cache.scrollTop=$(window).scrollTop()},n.view=function(){return m("div",{className:"IndexPage"},this.hero(),m("div",{className:"container"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,_e()(this.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m("div",{className:"IndexPage-toolbar"},m("ul",{className:"IndexPage-toolbar-view"},_e()(this.viewItems().toArray())),m("ul",{className:"IndexPage-toolbar-action"},_e()(this.actionItems().toArray()))),app.cache.discussionList.render())))},n.config=function(t,n){if(e.prototype.config.apply(this,arguments),!t){Object(p.extend)(n,"onunload",function(){return $("#app").css("min-height","")}),app.setTitle(""),app.setTitleCount(0);var s=app.cache.heroHeight,o=app.cache.heroHeight=this.$(".Hero").outerHeight(),r=app.cache.scrollTop;$("#app").css("min-height",$(window).height()+o);var i=function(){return $(window).scrollTop(r-s+o)};if(i(),setTimeout(i,1),this.lastDiscussion){var a=this.$('.DiscussionListItem[data-id="'+this.lastDiscussion.id()+'"]');if(a.length){var c=$("#header").outerHeight(),u=$(window).height(),l=a.offset().top,d=l+a.outerHeight();(l<r+c||d>r+u)&&$(window).scrollTop(l-c)}}}},n.hero=function(){return Pe.a.component()},n.sidebarItems=function(){var e=new w.a,t=app.forum.attribute("canStartDiscussion")||!app.session.user;return e.add("newDiscussion",g.a.component({children:app.translator.trans(t?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button"),icon:"fas fa-edit",className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"App-primaryControl",onclick:this.newDiscussion.bind(this),disabled:!t})),e.add("nav",Ue.a.component({children:this.navItems(this).toArray(),buttonClassName:"Button",className:"App-titleControl"})),e},n.navItems=function(){var e=new w.a,t=this.stickyParams();return e.add("allDiscussions",be.a.component({href:app.route("index",t),children:app.translator.trans("core.forum.index.all_discussions_link"),icon:"far fa-comments"}),100),e},n.viewItems=function(){var e=new w.a,t=app.cache.discussionList.sortMap(),n={};for(var s in t)n[s]=app.translator.trans("core.forum.index_sort."+s+"_button");return e.add("sort",Ae.a.component({options:n,value:this.params().sort||Object.keys(t)[0],onchange:this.changeSort.bind(this)})),e},n.actionItems=function(){var e=new w.a;return e.add("refresh",g.a.component({title:app.translator.trans("core.forum.index.refresh_tooltip"),icon:"fas fa-refresh",className:"Button Button--icon",onclick:function(){return app.cache.discussionList.refresh()}})),app.session.user&&e.add("markAllAsRead",g.a.component({title:app.translator.trans("core.forum.index.mark_all_as_read_tooltip"),icon:"fas fa-check",className:"Button Button--icon",onclick:this.markAllAsRead.bind(this)})),e},n.searching=function(){return this.params().q},n.clearSearch=function(){var e=this.params();delete e.q,m.route(app.route(this.props.routeName,e))},n.changeSort=function(e){var t=this.params();e===Object.keys(app.cache.discussionList.sortMap())[0]?delete t.sort:t.sort=e,m.route(app.route(this.props.routeName,t))},n.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},n.params=function(){var e=this.stickyParams();return e.filter=m.route.param("filter"),e},n.newDiscussion=function(){var e=m.deferred();return app.session.user?this.composeNewDiscussion(e):app.modal.show(new Le.a({onlogin:this.composeNewDiscussion.bind(this,e)})),e.promise},n.composeNewDiscussion=function(e){var t=new l.a({user:app.session.user});return app.composer.load(t),app.composer.show(),e.resolve(t),e.promise},n.markAllAsRead=function(){confirm(app.translator.trans("core.forum.index.mark_all_as_read_confirmation"))&&app.session.user.save({readTime:new Date})},t}(Re.a),Me=n(39),Ge=function(e){function t(){return e.apply(this,arguments)||this}d(t,e),t.initProps=function(t){function n(e,t,n){return e.filter(function(e){return-1===t.indexOf(e)}).map(function(e){return app.store.getById(n,e)})}e.initProps.call(this,t);var s=t.post.content();if(s.new||2!=s.length){var o=n(s.new.users,s.old.users,"users"),r=n(s.old.users,s.new.users,"users"),i=n(s.new.groups,s.old.groups,"groups"),a=n(s.old.groups,s.new.groups,"groups");t.added=o.concat(i),t.removed=r.concat(a)}else{var c=t.post.content()[0],p=t.post.content()[1];t.added=n(p,c,"users"),t.removed=n(c,p,"users")}};var n=t.prototype;return n.icon=function(){return"far fa-map"},n.descriptionKey=function(){var e="fof-byobu.forum.post.recipients_modified.";return this.props.added.length?this.props.removed.length?e+"added_and_removed":e+"added":e+"removed"},n.descriptionData=function(){var e={};return this.props.added.length&&(e.added=Z(this.props.added,{link:!0})),this.props.removed.length&&(e.removed=Z(this.props.removed,{link:!0})),e},t}(n.n(Me).a);app.initializers.add("fof-byobu",function(e){e.routes.private_discussions={path:"/private-discussions",component:Be.component()},i.a.prototype.recipientUsers=o.a.hasMany("recipientUsers"),i.a.prototype.oldRecipientUsers=o.a.hasMany("oldRecipientUsers"),i.a.prototype.recipientGroups=o.a.hasMany("recipientGroups"),i.a.prototype.oldRecipientGroups=o.a.hasMany("oldRecipientGroups"),i.a.prototype.canEditRecipients=o.a.attribute("canEditRecipients"),i.a.prototype.canEditUserRecipients=o.a.attribute("canEditUserRecipients"),i.a.prototype.canEditGroupRecipients=o.a.attribute("canEditGroupRecipients"),i.a.prototype.canEditGroupRecipients=o.a.attribute("canEditGroupRecipients"),c.a.prototype.blocksPd=o.a.attribute("blocksPd"),c.a.prototype.cannotBeDirectMessaged=o.a.attribute("cannotBeDirectMessaged"),e.postComponents.recipientsModified=Ge,function(e){l.a.prototype.recipients=new w.a,l.a.prototype.recipientUsers=[],l.a.prototype.recipientGroups=[],l.a.prototype.chooseRecipients=function(){var t=this;e.modal.show(new F({selectedRecipients:this.recipients,onsubmit:function(e){t.recipients=e,t.$(".RecipientsInput").focus()}}))},Object(p.extend)(l.a.prototype,"headerItems",function(t){if(e.session.user&&e.forum.attribute("canStartPrivateDiscussion")){var n=this.recipients.toArray();t.add("recipients",m("a",{className:"DiscussionComposer-changeRecipients",onclick:this.chooseRecipients.bind(this)},n.length?K(n.length):m("span",{className:"RecipientLabel none"},e.translator.trans("fof-byobu.forum.buttons.add_recipients"))),5)}}),Object(p.extend)(l.a.prototype,"data",function(e){var t=[],n=[];this.recipients.toArray().forEach(function(e){e instanceof c.a&&t.push(e),e instanceof E.a&&n.push(e)}),e.relationships=e.relationships||{},t.length&&(e.relationships.recipientUsers=t),n.length&&(e.relationships.recipientGroups=n)})}(e),function(){var e=function(e,t,n){var s=[];e.recipientUsers().length&&(s=s.concat(e.recipientUsers())),e.recipientGroups().length&&(s=s.concat(e.recipientGroups())),s&&s.length&&(n?t.add("recipients",Z(s),10):t.add("recipients",Z(s,{link:!0}),4))};Object(p.extend)(J.a.prototype,"infoItems",function(t){var n=this.props.discussion;e(n,t,!0)}),Object(p.extend)(b.a.prototype,"params",function(e){e.include.push("recipientUsers"),e.include.push("recipientGroups")}),Object(p.extend)(Y.a.prototype,"requestParams",function(e){e.include.push("recipientUsers"),e.include.push("recipientGroups")}),Object(p.extend)(V.a.prototype,"items",function(t){var n=this.props.discussion;e(n,t,!1)})}(),ne(),re(),me(),ce(),xe()})},,function(e,t){e.exports=flarum.core.compat["components/Modal"]},function(e,t){e.exports=flarum.core.compat["components/Search"]},function(e,t){e.exports=flarum.core.compat["helpers/avatar"]},function(e,t){e.exports=flarum.core.compat["utils/extractText"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionListItem"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionHero"]},function(e,t){e.exports=flarum.core.compat["utils/DiscussionControls"]},function(e,t){e.exports=flarum.core.compat["components/Badge"]},function(e,t){e.exports=flarum.core.compat["utils/UserControls"]},function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t){e.exports=flarum.core.compat["helpers/icon"]},function(e,t){e.exports=flarum.core.compat["components/WelcomeHero"]},function(e,t){e.exports=flarum.core.compat["components/LogInModal"]},function(e,t){e.exports=flarum.core.compat["components/SelectDropdown"]},function(e,t){e.exports=flarum.core.compat["components/EventPost"]},,,,function(e,t,n){"use strict";n.r(t);var s=n(9);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);n(21)}]);
//# sourceMappingURL=forum.js.map