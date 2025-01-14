"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edit = Edit;
/**
 * External dependencies
 */
const element_1 = require("@wordpress/element");
const data_1 = require("@wordpress/data");
const block_templates_1 = require("@woocommerce/block-templates");
const tracks_1 = require("@woocommerce/tracks");
const components_1 = require("@woocommerce/components");
const navigation_1 = require("@woocommerce/navigation");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore No types for this exist yet.
// eslint-disable-next-line @woocommerce/dependency-group
const core_data_1 = require("@wordpress/core-data");
/**
 * Internal dependencies
 */
const notice_1 = require("../../../components/notice");
const use_notice_1 = require("../../../hooks/use-notice");
function Edit({ attributes, }) {
    const blockProps = (0, block_templates_1.useWooBlockProps)(attributes);
    const { content, isDismissible, title, type = 'info' } = attributes;
    const [parentId] = (0, core_data_1.useEntityProp)('postType', 'product_variation', 'parent_id');
    const { dismissedNotices, dismissNotice, isResolving } = (0, use_notice_1.useNotice)();
    const { parentName, isParentResolving, } = (0, data_1.useSelect)((select) => {
        const { getEditedEntityRecord, hasFinishedResolution } = select('core');
        // @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
        const { name } = getEditedEntityRecord('postType', 'product', parentId);
        // @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
        const isResolutionFinished = !hasFinishedResolution('getEditedEntityRecord', ['postType', 'product', parentId]);
        return {
            parentName: name || '',
            isParentResolving: isResolutionFinished,
        };
    }, [parentId]);
    if (dismissedNotices.includes(parentId) ||
        isResolving ||
        isParentResolving ||
        parentName === '') {
        return null;
    }
    return ((0, element_1.createElement)("div", { ...blockProps },
        (0, element_1.createElement)(notice_1.Notice, { title: title, type: type, isDismissible: isDismissible, handleDismiss: () => {
                (0, tracks_1.recordEvent)('product_single_variation_notice_dismissed');
                dismissNotice(parentId);
            } }, (0, element_1.createInterpolateElement)(content, {
            strong: (0, element_1.createElement)("strong", null),
            noticeLink: ((0, element_1.createElement)(components_1.Link, { href: (0, navigation_1.getNewPath)({ tab: 'variations' }, `/product/${parentId}`), onClick: () => {
                    (0, tracks_1.recordEvent)('product_single_variation_notice_click');
                } })),
            parentProductName: (0, element_1.createElement)("span", null, parentName),
        }))));
}
