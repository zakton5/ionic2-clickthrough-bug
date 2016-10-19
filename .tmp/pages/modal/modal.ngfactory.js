/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './modal';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/view-controller';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/toolbar/toolbar';
import * as import13 from 'ionic-angular/components/navbar/navbar';
import * as import14 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from 'ionic-angular/components/button/button';
import * as import17 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import18 from 'ionic-angular/components/content/content';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import22 from 'ionic-angular/components/app/app';
import * as import23 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import25 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/components/tabs/tabs';
var renderType_MyModal_Host = null;
var _View_MyModal_Host0 = (function (_super) {
    __extends(_View_MyModal_Host0, _super);
    function _View_MyModal_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyModal_Host0, renderType_MyModal_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyModal_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-modal', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MyModal0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MyModal_0_4 = new import3.MyModal(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.ViewController));
        this._appEl_0.initComponent(this._MyModal_0_4, [], compView_0);
        compView_0.create(this._MyModal_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MyModal_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.MyModal) && (0 === requestNodeIndex))) {
            return this._MyModal_0_4;
        }
        return notFoundResult;
    };
    return _View_MyModal_Host0;
}(import1.AppView));
function viewFactory_MyModal_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyModal_Host === null)) {
        (renderType_MyModal_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_MyModal_Host0(viewUtils, parentInjector, declarationEl);
}
export var MyModalNgFactory = new import11.ComponentFactory('my-modal', viewFactory_MyModal_Host0, import3.MyModal);
var styles_MyModal = [];
var renderType_MyModal = null;
var _View_MyModal0 = (function (_super) {
    __extends(_View_MyModal0, _super);
    function _View_MyModal0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyModal0, renderType_MyModal, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyModal0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import12.Header(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import9.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import21.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import13.Navbar(this.parentInjector.get(import22.App), this.parentInjector.get(import9.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n        ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_4, 'start', '');
        this._ToolbarItem_4_3 = new import14.ToolbarItem(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import12.Toolbar, null), this._Navbar_2_4);
        this._query_Button_4_0 = new import15.QueryList();
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'button', null);
        this.renderer.setElementAttribute(this._el_6, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_6, 'ion-button', '');
        this._appEl_6 = new import2.AppElement(6, 4, this, this._el_6);
        var compView_6 = import23.viewFactory_Button0(this.viewUtils, this.injector(6), this._appEl_6);
        this._Button_6_4 = new import16.Button(null, '', this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_6), this.renderer);
        this._appEl_6.initComponent(this._Button_6_4, [], compView_6);
        this._text_7 = this.renderer.createText(null, '\n                Dismiss\n            ', null);
        compView_6.create(this._Button_6_4, [[].concat([this._text_7])], null);
        this._text_8 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_9 = this.renderer.createText(null, '\n\n        ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_10 = new import2.AppElement(10, 2, this, this._el_10);
        var compView_10 = import24.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(10), this._appEl_10);
        this._ToolbarTitle_10_4 = new import17.ToolbarTitle(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import12.Toolbar, null), this._Navbar_2_4);
        this._appEl_10.initComponent(this._ToolbarTitle_10_4, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n            My Modal\n        ', null);
        compView_10.create(this._ToolbarTitle_10_4, [[].concat([this._text_11])], null);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [].concat([this._el_4]),
            [],
            [].concat([
                this._text_3,
                this._text_9,
                this._el_10,
                this._text_12
            ])
        ], null);
        this._text_13 = this.renderer.createText(this._el_0, '\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_15 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_15, 'padding', '');
        this._appEl_15 = new import2.AppElement(15, null, this, this._el_15);
        var compView_15 = import25.viewFactory_Content0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Content_15_4 = new import18.Content(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_15), this.renderer, this.parentInjector.get(import22.App), this.parentInjector.get(import26.Keyboard), this.parentInjector.get(import27.NgZone), this.parentInjector.get(import9.ViewController, null), this.parentInjector.get(import28.Tabs, null));
        this._appEl_15.initComponent(this._Content_15_4, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n    Modal Content\n', null);
        compView_15.create(this._Content_15_4, [
            [],
            [].concat([this._text_16]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_6, 'click', this.eventHandler(this._handle_click_6_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16
        ], [disposable_0], []);
        return null;
    };
    _View_MyModal0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.Button) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_6_4;
        }
        if (((token === import14.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ToolbarItem_4_3;
        }
        if (((token === import17.ToolbarTitle) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ToolbarTitle_10_4;
        }
        if (((token === import13.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Navbar_2_4;
        }
        if (((token === import12.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Header_0_3;
        }
        if (((token === import18.Content) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Content_15_4;
        }
        return notFoundResult;
    };
    _View_MyModal0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        changed = false;
        var currVal_3 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Button_6_4.color = currVal_3;
            changed = true;
            this._expr_3 = currVal_3;
        }
        if (changed) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_15_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_6_4]);
                this._ToolbarItem_4_3._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_6_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._Content_15_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_15, 'statusbar-padding', currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_MyModal0.prototype.destroyInternal = function () {
        this._Content_15_4.ngOnDestroy();
    };
    _View_MyModal0.prototype._handle_click_6_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.dismiss() !== false);
        return (true && pd_0);
    };
    return _View_MyModal0;
}(import1.AppView));
export function viewFactory_MyModal0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyModal === null)) {
        (renderType_MyModal = viewUtils.createRenderComponentType('/Users/zrkeeton/Projects/BugReportRepos/ionic2-clickthrough-bug/.tmp/pages/modal/modal.html', 0, import10.ViewEncapsulation.None, styles_MyModal, {}));
    }
    return new _View_MyModal0(viewUtils, parentInjector, declarationEl);
}