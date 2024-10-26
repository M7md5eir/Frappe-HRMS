// Copyright (c) 2024, M7md5eir and contributors
// For license information, please see license.txt

frappe.ui.form.on('Organization', {
    refresh(frm) {
        frm.set_query('parent_organization', function() {
            return {
                filters: {
                    'hierarchy_level_id': ['<', frm.doc.hierarchy_level_id]
                }
            };
        });
    }
});
